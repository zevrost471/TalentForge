// ability-data.js
// Merges abilityMasterData + active talents from baseTalents into a unified name→entry lookup.

import { abilityMasterData } from './baseline-ability-master-data.js';
import { baseTalents }       from './base-talents.js';

function buildActiveTalentsByClass(expansion) {
    const specs = baseTalents[expansion] ?? {};
    const result = {};
    for (const [className, specMap] of Object.entries(specs)) {
        const entries = {};
        for (const talents of Object.values(specMap)) {
            for (const t of talents) {
                if (t.isActive && !entries[t.id]) entries[t.id] = t;
            }
        }
        if (Object.keys(entries).length) result[className] = entries;
    }
    return result;
}

function buildMerged(expansion) {
    const baseClasses   = abilityMasterData[expansion] ?? {};
    const talentClasses = buildActiveTalentsByClass(expansion);
    const allKeys = new Set([...Object.keys(baseClasses), ...Object.keys(talentClasses)]);
    const merged = {};
    for (const cls of allKeys) {
        merged[cls] = { ...(baseClasses[cls] ?? {}), ...(talentClasses[cls] ?? {}) };
    }
    return merged;
}

export const abilityData = {
    vanilla: buildMerged('vanilla'),
};
