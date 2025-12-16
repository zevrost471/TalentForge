// talent-utils.js

import { talentsAttributedByVersion } from './base-talents-per-patch.js';

export function removeTalentsById(versionParam, classKey, treeName, idsToRemove) {
    const versions = versionParam.includes('.') ? getVersionsUpTo(versionParam) : [versionParam];

    versions.forEach(version => {
        const tree = talentsAttributedByVersion[version]?.[classKey]?.[treeName];
        if (!tree) return;

        talentsAttributedByVersion[version][classKey][treeName] = tree.filter(
            (talent) => !idsToRemove.includes(talent.id)
        );
    });
}

export function removeTalentsByIdOld(version, classKey, treeName, idsToRemove) {
    const tree = talentsAttributedByVersion[version]?.[classKey]?.[treeName];
    if (!tree) return;

    talentsAttributedByVersion[version][classKey][treeName] = tree.filter(
        (talent) => !idsToRemove.includes(talent.id)
    );
}

export function replaceTalent(versionParam, classKey, treeName, id, newTalentData) {
    const versions = versionParam.includes('.') ? getVersionsUpTo(versionParam) : [versionParam];

    versions.forEach(version => {
        const tree = talentsAttributedByVersion[version]?.[classKey]?.[treeName];
        if (!tree) return;

        const index = tree.findIndex((t) => t.id === id);
        if (index !== -1) {
            tree[index] = { ...tree[index], ...newTalentData };
        }
    });
}

export function replaceTalentOld(version, classKey, treeName, id, newTalentData) {
    const tree = talentsAttributedByVersion[version]?.[classKey]?.[treeName];
    if (!tree) return;

    const index = tree.findIndex((t) => t.id === id);
    if (index !== -1) {
        tree[index] = { ...tree[index], ...newTalentData };
    }
}

export function moveTalent(versionParam, classKey, treeName, id, newRow, newCol) {
    replaceTalent(versionParam, classKey, treeName, id, { row: newRow, col: newCol });
}

export function moveTalentOld(version, classKey, treeName, id, newRow, newCol) {
    replaceTalentOld(version, classKey, treeName, id, { row: newRow, col: newCol });
}

export function insertTalent(versionParam, classKey, treeName, talentData) {
    const versions = versionParam.includes('.') ? getVersionsUpTo(versionParam) : [versionParam];

    versions.forEach(version => {
        const tree = talentsAttributedByVersion[version]?.[classKey]?.[treeName];
        if (!tree) {
            console.warn(`Tree not found: ${version} - ${classKey} - ${treeName}`);
            return;
        }

        if (tree.some((t) => t.id === talentData.id)) {
            console.warn(
                `Talent with id "${talentData.id}" already exists in ${version} - ${classKey} - ${treeName}`
            );
        }

        tree.push(talentData);
    });
}

export function insertTalentOld(version, classKey, treeName, talentData) {
    const tree = talentsAttributedByVersion[version]?.[classKey]?.[treeName];
    if (!tree) {
        console.warn(`Tree not found: ${version} - ${classKey} - ${treeName}`);
        return;
    }

    // Optional: warn if you're overwriting an existing talent
    if (tree.some((t) => t.id === talentData.id)) {
        console.warn(
            `Talent with id "${talentData.id}" already exists in ${version} - ${classKey} - ${treeName}`
        );
    }

    tree.push(talentData);
}

export function bulkInsertTalents(versionParam, classKey, treeName, talentList) {
    talentList.forEach(talent =>
        insertTalent(versionParam, classKey, treeName, talent)
    );
}

export function bulkInsertTalentsOld(version, classKey, treeName, talentList) {
    talentList.forEach(talent =>
        insertTalentOld(version, classKey, treeName, talent)
    );
}

function getVersionsUpTo(versionParam) {
    const targetParts = versionParam.split('.');        // e.g. ["1","10"]
    const major = targetParts[0];                        // "1"
    const targetPartsCount = targetParts.length;        // 2 for "1.10"
    const patchNumber = parseInt(targetParts[targetParts.length - 1], 10); // 10

    return Object.keys(talentsAttributedByVersion).filter(v => {
        const parts = v.split('.');
        if (parts.length !== targetPartsCount) return false;     // same number of parts
        if (parts[0] !== major) return false;                     // same major number

        const lastNum = parseInt(parts[parts.length - 1], 10);
        if (isNaN(lastNum)) return false;

        return lastNum <= patchNumber;
    });
}