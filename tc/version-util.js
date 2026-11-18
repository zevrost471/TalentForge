// version-util.js
//
// Patch <-> expansion resolution. The lookup map is built once from patchOptions;
// getCurrentExpansion reads the shared currentState.version. Extracted from
// talent-calculator.js so feature modules can resolve the current expansion
// without importing the calculator.

import { patchOptions } from '../db/patches.js';
import { currentState } from './state.js';

// Lookup map: patch value -> expansion key, built once at startup.
const patchToExpansion = {};
for (const [expansion, patches] of Object.entries(patchOptions)) {
    patches.forEach(p => { patchToExpansion[p.value] = expansion; });
}

export function getExpansionFromPatch(patch) {
    return patchToExpansion[patch] ?? null;
}

export function getCurrentExpansion() {
    return patchToExpansion[currentState.version] ?? null;
}
