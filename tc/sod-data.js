// sod-data.js
//
// Season of Discovery rune-slot data and small SoD/slot helpers, extracted from
// talent-calculator.js so rune-related code can share them without importing the
// calculator.

import { currentState } from './state.js';

// Rune slots available per SoD phase, in display/encoding order.
export const SOD_PHASE_SLOTS = {
    1: ["chest", "hands", "legs"],
    2: ["chest", "hands", "waist", "legs", "feet"],
    3: ["head", "chest", "wrist", "hands", "waist", "legs", "feet"],
    4: ["head", "back", "chest", "wrist", "hands", "waist", "legs", "feet", "ring1", "ring2"]
};

// Current SoD phase as a 0-based index (p1 -> 0, p2 -> 1, p3 -> 2, p4 -> 3).
export function getSoDPhaseIndex() {
    return Math.max(0, (currentState.phase || 1) - 1);
}

// Human-readable name for an equipment slot key (e.g. "ring1" -> "Ring 1").
export function formatSlotName(slotKey) {
    // Handle ring slots explicitly
    if (slotKey.startsWith("ring")) {
        const number = slotKey.replace("ring", "");
        return `Ring ${number}`;
    }
    return slotKey.charAt(0).toUpperCase() + slotKey.slice(1);
}
