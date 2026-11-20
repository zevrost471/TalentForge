// tree-data.js
//
// Per-version talent-tree layout data: which classes exist, their tree names, and
// the point cap per expansion. baseTreeData is the vanilla baseline; on import this
// module clones it into talentTreeData (the shared, runtime-populated map in
// state.js) for every known version and applies per-expansion / per-version
// overrides. Extracted from talent-calculator.js.
//
// This module runs its population as an import-time side effect, so any module that
// reads talentTreeData must be loaded after this one (talent-calculator imports it
// up front).

import { talentTreeData } from './state.js';

// Base specialization data for vanilla versions
export const baseTreeData = {
    maxPoints: 51,
    classes: {
        druid: { name: "Druid", trees: ["Balance", "Feral Combat", "Restoration"] },
        hunter: {
            name: "Hunter",
            trees: ["Beast Mastery", "Marksmanship", "Survival"]
        },
        mage: { name: "Mage", trees: ["Arcane", "Fire", "Frost"] },
        paladin: { name: "Paladin", trees: ["Holy", "Protection", "Retribution"] },
        priest: { name: "Priest", trees: ["Discipline", "Holy", "Shadow"] },
        rogue: { name: "Rogue", trees: ["Assassination", "Combat", "Subtlety"] },
        shaman: {
            name: "Shaman",
            trees: ["Elemental", "Enhancement", "Restoration"]
        },
        warlock: {
            name: "Warlock",
            trees: ["Affliction", "Demonology", "Destruction"]
        },
        warrior: { name: "Warrior", trees: ["Arms", "Fury", "Protection"] },
        death_knight: { name: "Death Knight", trees: ["Blood", "Frost", "Unholy"] }
    }
};

// Define versions that share the same data
export const sharedVersions = [
    "0.12",
    "1.1",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "1.6",
    "1.7",
    "1.8",
    "1.9",
    "1.10",
    "1.11",
    "1.12",
    "1.13",
    "1.14",
    "1.15",
    "2.4",
    "3.2.0",
    "3.3.5",
    "4.3.5",
    "custom1",
    "1.0.0e",
    "1.16.0t",
    "1.16.1t",
    "1.17.2t",
    "1.60.0",
    "1.60.1.69876",
    "1.60.1.70009",
    "1.60.1.70170",
    "1.60.1.70291",
    "1.60.1.70425",
    "1.60.1.70707",
    "1.60.1.70755",
    "1.60.1.70888",
    "1.70.0"
];

sharedVersions.forEach((version) => {
    // Clone baseTreeData
    talentTreeData[version] = structuredClone(baseTreeData);

    // Assign expansion-specific maxPoints
    if (version.startsWith("4.")) {
        talentTreeData[version].maxPoints = 41; // Cataclysm
    } else if (version.startsWith("3.")) {
        talentTreeData[version].maxPoints = 71; // Wrath of the Lich King
    } else if (version.startsWith("2.") || version.endsWith("e")) {
        talentTreeData[version].maxPoints = 61; // The Burning Crusade
    } else {
        talentTreeData[version].maxPoints = 51; // Vanilla & others
    }
});

// Modify just 1.11 (e.g., remove one tree from Priest)
// talentTreeData["1.11"].classes.priest.trees = ["Discipline", "Holy"];  // Shadow not yet available

talentTreeData["0.12"].classes.hunter.trees = [
    "Beast Mastery",
    "Ranged Combat",
    "Outdoorsmanship"
];

const mageTrees = ["Arcane", "Frost", "Fire"];

["0.12", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "1.10"].forEach(version => {
    talentTreeData[version].classes.mage.trees = mageTrees;
});
