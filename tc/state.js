// state.js
//
// Shared, mutable calculator state. This object is created once and only ever
// mutated (never reassigned), so modules can import the same reference and both
// read and write through it. Centralizing it here lets feature modules depend on
// state.js instead of reaching into talent-calculator.js.

export const currentState = {
    version: null,
    class: null,
    phase: 1, // default for 1.15
    pointsSpent: 0,
    pointsTotal: 51,
    plannedLevel: null,
    talents: {},
    builds: [],
    talentOrder: [],
    glyphs: {},
    runes: {}
};
