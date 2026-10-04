// base-talents-per-patch.js

import { baseTalents } from '../db/base-talents.js';
import { foreverTalents } from "../db/forever-talents.js";

const versionGroups = {
    vanilla: [
        "1.1", "1.2", "1.3", "1.4", "1.5",
        "1.6", "1.7", "1.8", "1.9", "1.10",
        "1.11", "1.12", "1.13", "1.14", "1.15", 
        "1.16.0t", "1.16.1t", "1.17.2t"
    ],
    tbc: ["1.0.0e", "2.4"],
    wotlk: ["3.2.0", "3.3.5"],
    cataclysm: ["4.3.5"],
    forever: ["1.60.1.69876", "1.60.1.70009", "1.60.1.70170"],
    custom: ["custom1"]
};

const talentSources = {
    vanilla: baseTalents.vanilla,
    forever: foreverTalents,
    tbc: baseTalents.tbc,
    wotlk: baseTalents.wotlk,
    cataclysm: baseTalents.cataclysm,
    custom: baseTalents.custom
};

/*
export const talentsAttributedByVersion = {
    "1.1": cloneDeep(baseTalents.vanilla),
    "1.2": cloneDeep(baseTalents.vanilla),
    "1.3": cloneDeep(baseTalents.vanilla),
    "1.4": cloneDeep(baseTalents.vanilla),
    "1.5": cloneDeep(baseTalents.vanilla),
    "1.6": cloneDeep(baseTalents.vanilla),
    "1.7": cloneDeep(baseTalents.vanilla),
    "1.8": cloneDeep(baseTalents.vanilla),
    "1.9": cloneDeep(baseTalents.vanilla),
    "1.10": cloneDeep(baseTalents.vanilla),
    "1.11": cloneDeep(baseTalents.vanilla),
    "1.12": cloneDeep(baseTalents.vanilla),
    "1.13": cloneDeep(baseTalents.vanilla),
    "1.16.0t": cloneDeep(baseTalents.vanilla),
    "1.16.1t": cloneDeep(baseTalents.vanilla),
    "1.17.2t": cloneDeep(baseTalents.vanilla),
    "1.0.0e": cloneDeep(baseTalents.tbc),
    "2.4": cloneDeep(baseTalents.tbc),
    "3.2.0": cloneDeep(baseTalents.wotlk),
    "3.3.5": cloneDeep(baseTalents.wotlk),
    "4.3.5": cloneDeep(baseTalents.cataclysm),
    "custom1": cloneDeep(baseTalents.custom),
    "1.60.1": cloneDeep(baseTalents.vanilla)
};
*/

function cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export const talentsAttributedByVersion = Object.entries(versionGroups).reduce(
    (acc, [expansion, versions]) => {
        for (const version of versions) {
            acc[version] = cloneDeep(talentSources[expansion]);
        }
        return acc;
    },
    {}
);
