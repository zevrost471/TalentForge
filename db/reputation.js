// reputation.js

// Reputation Levels
export const reputationLevels = Object.freeze({
    hated: {
        level: "Hated",
        pointsToLevelUp: 36000,
        notes: "You will always be attacked on sight",
    },
    hostile: {
        level: "Hostile",
        pointsToLevelUp: 3000,
        notes: "You will always be attacked on sight",
    },
    unfriendly: {
        level: "Unfriendly",
        pointsToLevelUp: 3000,
        notes: "Cannot buy, sell or interact",
    },
    neutral: {
        level: "Neutral",
        pointsToLevelUp: 3000,
        notes: null,
    },
    friendly: {
        level: "Friendly",
        pointsToLevelUp: 6000,
        notes: "You cannot attack creatures who you are friendly with (or have a higher level of reputation with) unless you specifically toggle \"At War\" on the item for said creatures' faction",
    },
    honored: {
        level: "Honored",
        pointsToLevelUp: 12000,
        notes: null,
    },
    revered: {
        level: "Revered",
        pointsToLevelUp: 21000,
        notes: null,
    },
    exalted: {
        level: "Exalted",
        pointsToLevelUp: null,
        notes: null,
    },
});