// build-codec.js
//
// Serialization of talent builds, glyphs, and runes into the compact build-string
// format used by import/export and URL hashes. Extracted from talent-calculator.js.
//
// generateBuildStringFromBuild serializes an arbitrary build object (all data passed
// in); generateBuildString serializes the current live state (reading currentState /
// talentTreeData) and suppresses an all-empty build so the URL stays clean. Both share
// the talent-tree encoding via encodeTalentTrees.

import { talentsAttributedByVersion } from './base-talents-per-patch.js';
import { currentState, talentTreeData } from './state.js';
import { getCurrentExpansion } from './version-util.js';
import { SOD_PHASE_SLOTS } from './sod-data.js';

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

// Encode invested talents into the compact per-tree digit string (trees joined by
// "-"), e.g. "5-503-5500535". `talents` is the {classKey: {tree: {id: rank}}} map.
function encodeTalentTrees(version, classKey, trees, talents) {
    const classTalents = talentsAttributedByVersion[version]?.[classKey] || {};

    const treeStrings = trees.map((tree) => {
        const treeTalents = classTalents[tree] || [];
        const invested = talents?.[classKey]?.[tree] || {};

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

    return treeStrings.join("-");
}

// Full build string from a saved build object.
// opts: { trees, expansion, sodPhaseSlots }
//   trees        - ordered tree names for this version/class (from talentTreeData)
//   expansion    - expansion key for the build's version (from getExpansionFromPatch)
//   sodPhaseSlots - SOD_PHASE_SLOTS map (only needed for SoD / version "1.15")
export function generateBuildStringFromBuild(build, { trees, expansion, sodPhaseSlots }) {
    const { version, class: classKey, talents, glyphs, runes } = build;

    const talentString = encodeTalentTrees(version, classKey, trees, talents);

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

// Build string for the current live state, or "" when nothing is invested (so the
// URL stays as version/class instead of version/class/----).
export function generateBuildString() {
    if (!currentState.version || !currentState.class) return "";

    const classKey = currentState.class;
    const version = currentState.version;
    const expansion = getCurrentExpansion();
    const trees = talentTreeData[version]?.classes?.[classKey]?.trees || [];

    const talentString = encodeTalentTrees(version, classKey, trees, currentState.talents);
    const hasAnyTalents = talentString.replace(/-/g, "").length > 0;

    // === Generate glyph string only for WotLK and Cataclysm ===
    let glyphString = "";
    if (expansion === "wotlk" || expansion === "cataclysm") {
        glyphString = generateGlyphString(currentState.glyphs, expansion);
    }

    // Rune string for 1.15
    let runeString = "";
    if (version === "1.15") {
        runeString = generateRuneString(currentState.runes, currentState.phase, SOD_PHASE_SLOTS);
    }

    // Build the full string with phase segment for SoD
    if (version === "1.15") {
        if (!hasAnyTalents && !runeString) return "";
        return `p${currentState.phase}/${talentString}${runeString}`;
    }

    // === Build final formatted string ===
    if (!hasAnyTalents && !glyphString) return "";
    return `${talentString}${glyphString}${runeString}`;
}
