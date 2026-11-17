// build-codec.js
//
// Serialization of talent builds, glyphs, and runes into the compact build-string
// format used by import/export and URL hashes. Extracted from talent-calculator.js.
//
// These functions take their data as arguments rather than reading shared module
// state: `trees` (ordered tree-name list, from talentTreeData), `expansion`
// (from getExpansionFromPatch), and `sodPhaseSlots` (SOD_PHASE_SLOTS) are passed
// in by the caller. `talentsAttributedByVersion` is a static data import.

import { talentsAttributedByVersion } from './base-talents-per-patch.js';

// Glyph segment, e.g. "/123-0-456:0-0-0:789-0-0" (WotLK/Cataclysm only).
export function generateGlyphString(glyphs, expansion) {
    let types = [];

    if (expansion === "cataclysm") {
        types = ["prime", "major", "minor"];
    } else if (expansion === "wotlk") {
        types = ["major", "minor"];
    } else {
        return "";
    }

    const segments = types.map(type => {
        const arr = glyphs[type] || [];

        // Always 3 slots
        const ids = [
            arr[0] ? arr[0].id.toString() : "",
            arr[1] ? arr[1].id.toString() : "",
            arr[2] ? arr[2].id.toString() : "",
        ];

        return ids.join("-"); // join with "-" between slots
    });

    const glyphString = segments.join(":");

    return `/${glyphString}`;
}

// Rune segment for Season of Discovery, e.g. "/12-0-34". `sodPhaseSlots` is the
// SOD_PHASE_SLOTS map (phase -> ordered slot keys).
export function generateRuneString(runes, phase, sodPhaseSlots) {
    if (!runes || !phase) return "";

    const slotOrder = sodPhaseSlots[phase] || [];

    // Collect IDs in slot order
    const ids = slotOrder.map(slotKey => {
        const rune = runes[slotKey];
        if (!rune || !rune.id) return "";
        return rune.id.toString();
    });

    // Join with "-" between slots
    const runeString = ids.join("-");

    return `/${runeString}`;
}

// Full build string from a saved build object.
// opts: { trees, expansion, sodPhaseSlots }
//   trees        - ordered tree names for this version/class (from talentTreeData)
//   expansion    - expansion key for the build's version (from getExpansionFromPatch)
//   sodPhaseSlots - SOD_PHASE_SLOTS map (only needed for SoD / version "1.15")
export function generateBuildStringFromBuild(build, { trees, expansion, sodPhaseSlots }) {
    const { version, class: classKey, talents, glyphs, runes } = build;

    // Get actual talent definitions (with row/col info)
    const classTalents = talentsAttributedByVersion[version]?.[classKey] || {};

    const treeStrings = trees.map((tree) => {
        const treeTalents = classTalents[tree] || [];
        const invested = talents[classKey]?.[tree] || {};

        // Sort by row first, then col
        const sorted = [...treeTalents].sort((a, b) => {
            if (a.row !== b.row) return a.row - b.row;
            return a.col - b.col;
        });

        let s = "";
        let lastNonZero = -1;

        sorted.forEach((talent, idx) => {
            const val = invested[talent.id] || 0;
            s += val;
            if (val > 0) lastNonZero = idx;
        });

        // Trim trailing zeros
        return lastNonZero >= 0 ? s.substring(0, lastNonZero + 1) : "";
    });

    const talentString = treeStrings.join("-");

    // === Glyph String ===
    let glyphString = "";
    if (expansion === "wotlk" || expansion === "cataclysm") {
        glyphString = generateGlyphString(glyphs, expansion);
    }

    // Use build's own phase, not the current UI phase
    let runeString = "";
    if (version === "1.15") {
        const phase = build.phase || 1;
        runeString = generateRuneString(runes, phase, sodPhaseSlots);
        return `p${phase}/${talentString}${runeString}`;
    }

    return `${talentString}${glyphString}${runeString}`;
}
