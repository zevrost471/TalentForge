// BLP2 / DXT1 decoder — runs entirely in the browser, no server tools needed.
// Fetches .blp files as ArrayBuffers, decodes DXT1 pixel data, assembles tiles.

async function decodeBLPTile(url) {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`BLP fetch failed ${url}: ${resp.status}`);
    const buf  = await resp.arrayBuffer();
    const view = new DataView(buf);
    const b    = new Uint8Array(buf);

    const magic = String.fromCharCode(b[0], b[1], b[2], b[3]);
    if (magic !== 'BLP2') throw new Error(`Not BLP2: ${url}`);

    const encoding = b[8];  // 2 = DXT1
    if (encoding !== 2) throw new Error(`Unsupported BLP encoding ${encoding}: ${url}`);

    const width   = view.getUint32(12, true);
    const height  = view.getUint32(16, true);
    const dataOff = view.getUint32(20, true); // offset of first mipmap

    const rgba = decodeDXT1(new Uint8Array(buf, dataOff), width, height);

    // OffscreenCanvas is available in all modern browsers (Chrome/Firefox/Edge/Safari 16.4+)
    const canvas = new OffscreenCanvas(width, height);
    const ctx    = canvas.getContext('2d');
    const img    = ctx.createImageData(width, height);
    img.data.set(rgba);
    ctx.putImageData(img, 0, 0);
    return canvas;
}

function decodeDXT1(data, width, height) {
    const rgba    = new Uint8Array(width * height * 4);
    const blocksX = Math.ceil(width  / 4);
    const blocksY = Math.ceil(height / 4);
    let src = 0;

    for (let by = 0; by < blocksY; by++) {
        for (let bx = 0; bx < blocksX; bx++) {
            // Two reference colors in RGB565
            const c0 = data[src] | (data[src + 1] << 8);
            const c1 = data[src + 2] | (data[src + 3] << 8);
            src += 4;

            // Decode RGB565 → RGB888
            const r = [
                Math.round(((c0 >> 11) & 0x1F) * (255 / 31)),
                Math.round(((c1 >> 11) & 0x1F) * (255 / 31)),
                0, 0,
            ];
            const g = [
                Math.round(((c0 >> 5) & 0x3F) * (255 / 63)),
                Math.round(((c1 >> 5) & 0x3F) * (255 / 63)),
                0, 0,
            ];
            const bl = [
                Math.round((c0 & 0x1F) * (255 / 31)),
                Math.round((c1 & 0x1F) * (255 / 31)),
                0, 0,
            ];
            const a = [255, 255, 255, 0];

            if (c0 > c1) {
                // 4-color block: interpolate two intermediate colors
                r[2]  = Math.round((2 * r[0]  + r[1])  / 3);
                g[2]  = Math.round((2 * g[0]  + g[1])  / 3);
                bl[2] = Math.round((2 * bl[0] + bl[1]) / 3);
                r[3]  = Math.round((r[0]  + 2 * r[1])  / 3);
                g[3]  = Math.round((g[0]  + 2 * g[1])  / 3);
                bl[3] = Math.round((bl[0] + 2 * bl[1]) / 3);
                a[3]  = 255;
            } else {
                // 3-color block + transparent: color2 = midpoint
                r[2]  = Math.round((r[0]  + r[1])  / 2);
                g[2]  = Math.round((g[0]  + g[1])  / 2);
                bl[2] = Math.round((bl[0] + bl[1]) / 2);
                // color3 = transparent black (a[3]=0 already set)
            }

            // 4 rows × 1 byte each — 2 bits per pixel, 4 pixels per row
            for (let py = 0; py < 4; py++) {
                const row = data[src + py];
                for (let px = 0; px < 4; px++) {
                    const ci = (row >> (px * 2)) & 0x3;
                    const dx = bx * 4 + px;
                    const dy = by * 4 + py;
                    if (dx >= width || dy >= height) continue;
                    const o = (dy * width + dx) * 4;
                    rgba[o]     = r[ci];
                    rgba[o + 1] = g[ci];
                    rgba[o + 2] = bl[ci];
                    rgba[o + 3] = a[ci];
                }
            }
            src += 4;
        }
    }
    return rgba;
}

// Tile layout for WoW DressUpBackground:
//   tile 1 = top-left   tile 2 = top-right
//   tile 3 = bot-left   tile 4 = bot-right
const TILE_POSITIONS = [
    [0,   0],   // tile 1 → top-left
    [256, 0],   // tile 2 → top-right
    [0,   256], // tile 3 → bottom-left
    [256, 256], // tile 4 → bottom-right
];

// Cache decoded results by filename to avoid re-fetching shared backgrounds
const _cache = new Map();

export async function assembleBackground(baseDir, name) {
    const cacheKey = baseDir + name;
    if (_cache.has(cacheKey)) return _cache.get(cacheKey);

    const promise = (async () => {
        const tiles = await Promise.all(
            [1, 2, 3, 4].map(i => decodeBLPTile(`${baseDir}${name}${i}.blp`))
        );
        const canvas = new OffscreenCanvas(512, 512);
        const ctx    = canvas.getContext('2d');
        tiles.forEach((tile, i) => ctx.drawImage(tile, TILE_POSITIONS[i][0], TILE_POSITIONS[i][1]));
        const blob = await canvas.convertToBlob({ type: 'image/jpeg', quality: 0.92 });
        return URL.createObjectURL(blob);
    })();

    _cache.set(cacheKey, promise);
    return promise;
}
