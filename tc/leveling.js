// leveling.js
//
// Talent-point <-> character-level math. Pure functions extracted from
// talent-calculator.js. getMaxLevelForVersion takes the version's talent-point
// cap (maxPoints) as an argument instead of reading talentTreeData.

// Cataclysm (4.x) talent points -> required character level.
// Index i (0-based) is the level needed to have spent (i + 1) points.
const CATA_POINT_LEVELS = [
    10, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45,
    47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 82,
    83, 84, 85,
];

// Season of Discovery talent-point cap per phase.
export function getSoDMaxPoints(phase) {
    const SOD_PHASE_MAX_POINTS = {
        1: 16, // phase 1 max points (approx. level 25)
        2: 31, // phase 2 max points (approx. level 40)
        3: 41, // phase 3 max points (approx. level 50)
        4: 51  // phase 4 max points (vanilla cap)
    };
    return SOD_PHASE_MAX_POINTS[phase] || 51;
}

// Character level required to have spent `totalPoints` talent points.
export function computeRequiredLevel(totalPoints, version) {
    if (version.startsWith("4.")) {
        if (totalPoints === 0) return "-";
        return CATA_POINT_LEVELS[Math.min(totalPoints - 1, CATA_POINT_LEVELS.length - 1)];
    }
    return totalPoints === 0 ? "-" : 9 + totalPoints;
}

// Talent points available at a given character level.
export function levelToPoints(level, version) {
    if (version.startsWith("4.")) {
        let pts = 0;
        for (let i = 0; i < CATA_POINT_LEVELS.length; i++) {
            if (CATA_POINT_LEVELS[i] <= level) pts = i + 1; else break;
        }
        return pts;
    }
    return Math.max(0, level - 9);
}

// Max character level for a version/phase. `maxPoints` is the version's talent
// cap (talentTreeData[version]?.maxPoints); it is unused for SoD ("1.15").
export function getMaxLevelForVersion(version, phase, maxPoints) {
    if (version === "1.15") return { 1: 25, 2: 40, 3: 50, 4: 60 }[phase] ?? 60;
    return maxPoints ? computeRequiredLevel(maxPoints, version) : 60;
}
