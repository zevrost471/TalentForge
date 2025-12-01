// baseline-class-abilities.js

import { classes } from './classes.js';
import { abilityMasterData } from './baseline-ability-master-data.js';

let DEATHKNIGHT = classes.DEATHKNIGHT;
let DRUID = classes.DRUID;
let HUNTER = classes.HUNTER;
let MAGE = classes.MAGE;
let PALADIN = classes.PALADIN;
let PRIEST = classes.PRIEST;
let ROGUE = classes.ROGUE;
let SHAMAN = classes.SHAMAN;
let WARLOCK = classes.WARLOCK;
let WARRIOR = classes.WARRIOR;

export const baselineClassAbilities = {
    vanilla: {
        [DRUID]: {
            // druid - vanilla
            Balance: [
                {
                    id: "faerie_fire_1",
                    ...abilityMasterData.vanilla.Druid.faerie_fire,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 18,
                    description: [
                        "Decrease the armor of the target by 175 for 40 sec.  While affected, the target cannot stealth or turn invisible.",
                    ],
                    spentResource: 55,
                    trainingCost: 1900,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=770/faerie-fire",
                },
                {
                    id: "faerie_fire_2",
                    ...abilityMasterData.vanilla.Druid.faerie_fire,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 30,
                    description: [
                        "Decrease the armor of the target by 285 for 40 sec.  While affected, the target cannot stealth or turn invisible.",
                    ],
                    spentResource: 75,
                    trainingCost: 6000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=778/faerie-fire",
                },
                {
                    id: "faerie_fire_3",
                    ...abilityMasterData.vanilla.Druid.faerie_fire,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 42,
                    description: [
                        "Decrease the armor of the target by 395 for 40 sec.  While affected, the target cannot stealth or turn invisible.",
                    ],
                    spentResource: 95,
                    trainingCost: 16000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9749/faerie-fire",
                },
                {
                    id: "faerie_fire_4",
                    ...abilityMasterData.vanilla.Druid.faerie_fire,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 54,
                    description: [
                        "Decrease the armor of the target by 505 for 40 sec.  While affected, the target cannot stealth or turn invisible.",
                    ],
                    spentResource: 115,
                    trainingCost: 28000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9907/faerie-fire",
                },
                {
                    id: "teleport_moonglade",
                    ...abilityMasterData.vanilla.Druid.teleport_moonglade,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 10,
                    description: [
                        "Teleports the caster to the Moonglade.",
                    ],
                    castTime: 10,
                    spentResource: 120,
                    duration: null,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=18960/teleport-moonglade",
                },
                {
                    id: "barkskin",
                    ...abilityMasterData.vanilla.Druid.barkskin,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 44,
                    description: [
                        "The druid's skin becomes as tough as bark.  Physical damage taken is reduced by 20%.  \
                        While protected, damaging attacks will not cause spellcasting delays but non-instant spells take 1 sec longer to cast and melee combat is slowed by 25%.  \
                        Lasts 15 sec.",
                    ],
                    buffText: [
                        "Physical damage taken is reduced by 20%.  \
                        While protected, damaging attacks will not cause spellcasting delays but non-instant spells take 1 sec longer to cast and melee combat is slowed by 25%.",
                    ],
                    spentResource: 15,
                    duration: 15,
                    trainingCost: 18000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=22812/barkskin",
                },
                {
                    id: "moonfire_1",
                    ...abilityMasterData.vanilla.Druid.moonfire,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 4,
                    description: [
                        "Burns the enemy for {{min}} to {{max}} Arcane damage and then an additional 12 Arcane damage over 9 sec.",
                    ],
                    debuffText: [
                        "4 Arcane damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            4: 7, 5: 7, 6: 8, 7: 8, 8: 9, 9: 9
                            };
                            return values[level] ?? 9; // 10+ = 9
                        },
                        max: (level) => {
                            const values = {
                            4: 9, 5: 10, 6: 10, 7: 11, 8: 11, 9: 12
                            };
                            return values[level] ?? 12; // 10+ = 12
                        }
                    },
                    spentResource: 25,
                    duration: 9,
                    trainingCost: 100,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8921/moonfire",
                },
                {
                    id: "moonfire_2",
                    ...abilityMasterData.vanilla.Druid.moonfire,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 10,
                    description: [
                        "Burns the enemy for {{min}} to {{max}} Arcane damage and then an additional 32 Arcane damage over 12 sec.",
                    ],
                    debuffText: [
                        "8 Arcane damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            10: 13, 11: 13, 12: 14, 13: 15, 14: 16, 15: 17
                            };
                            return values[level] ?? 17; // 16+ = 17
                        },
                        max: (level) => {
                            const values = {
                            10: 17, 11: 18, 12: 19, 13: 20, 14: 21, 15: 21
                            };
                            return values[level] ?? 21; // 16+ = 21
                        }
                    },
                    spentResource: 50,
                    duration: 12,
                    trainingCost: 300,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8924/moonfire",
                },
                {
                    id: "moonfire_3",
                    ...abilityMasterData.vanilla.Druid.moonfire,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 16,
                    description: [
                        "Burns the enemy for {{min}} to {{max}} Arcane damage and then an additional 52 Arcane damage over 12 sec.",
                    ],
                    debuffText: [
                        "13 Arcane damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            16: 25, 17: 26, 18: 27, 19: 28, 20: 29, 21: 30
                            };
                            return values[level] ?? 30; // 22+ = 30
                        },
                        max: (level) => {
                            const values = {
                            16: 31, 17: 33, 18: 34, 19: 35, 20: 36, 21: 37
                            };
                            return values[level] ?? 37; // 22+ = 37
                        }
                    },
                    spentResource: 75,
                    duration: 12,
                    trainingCost: 1800,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8925/moonfire",
                },
                {
                    id: "moonfire_4",
                    ...abilityMasterData.vanilla.Druid.moonfire,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 22,
                    description: [
                        "Burns the enemy for {{min}} to {{max}} Arcane damage and then an additional 80 Arcane damage over 12 sec.",
                    ],
                    debuffText: [
                        "20 Arcane damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            22: 40, 23: 41, 24: 42, 25: 44, 26: 45, 27: 47
                            };
                            return values[level] ?? 47; // 28+ = 47
                        },
                        max: (level) => {
                            const values = {
                            22: 48, 23: 50, 24: 51, 25: 53, 26: 54, 27: 55
                            };
                            return values[level] ?? 55; // 28+ = 55
                        }
                    },
                    spentResource: 105,
                    duration: 12,
                    trainingCost: 3000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8926/moonfire",
                },
                {
                    id: "moonfire_5",
                    ...abilityMasterData.vanilla.Druid.moonfire,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 28,
                    description: [
                        "Burns the enemy for {{min}} to {{max}} Arcane damage and then an additional 124 Arcane damage over 12 sec.",
                    ],
                    debuffText: [   
                        "31 Arcane damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            28: 61, 29: 62, 30: 64, 31: 66, 32: 68, 33: 70
                            };
                            return values[level] ?? 70; // 34+ = 70
                        },
                        max: (level) => {
                            const values = {
                            28: 73, 29: 75, 30: 77, 31: 79, 32: 81, 33: 82
                            };
                            return values[level] ?? 82; // 34+ = 82
                        }
                    },
                    spentResource: 150,
                    duration: 12,
                    trainingCost: 5000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8927/moonfire",
                },
                {
                    id: "moonfire_6",
                    ...abilityMasterData.vanilla.Druid.moonfire,
                    availabletoRaces: null,
                    rank: 6,
                    requiresLevel: 34,
                    description: [
                        "Burns the enemy for {{min}} to {{max}} Arcane damage and then an additional 164 Arcane damage over 12 sec.",
                    ],
                    debuffText: [   
                        "41 Arcane damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            34: 81, 35: 83, 36: 85, 37: 87, 38: 89, 39: 91
                            };
                            return values[level] ?? 91; // 40+ = 91
                        },
                        max: (level) => {
                            const values = {
                            34: 97, 35: 100, 36: 102, 37: 104, 38: 106, 39: 108
                            };
                            return values[level] ?? 108; // 40+ = 108
                        }
                    },
                    spentResource: 190,
                    duration: 12,
                    trainingCost: 10000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8928/moonfire",
                },
                {
                    id: "moonfire_7",
                    ...abilityMasterData.vanilla.Druid.moonfire,
                    availabletoRaces: null,
                    rank: 7,
                    requiresLevel: 40,
                    description: [
                        "Burns the enemy for {{min}} to {{max}} Arcane damage and then an additional 212 Arcane damage over 12 sec.",
                    ],
                    debuffText: [   
                        "53 Arcane damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            40: 105, 41: 107, 42: 109, 43: 112, 44: 114, 45: 117
                            };
                            return values[level] ?? 117; // 46+ = 117
                        },
                        max: (level) => {
                            const values = {
                            40: 125, 41: 128, 42: 130, 43: 133, 44: 135, 45: 137
                            };
                            return values[level] ?? 137; // 46+ = 137
                        }
                    },
                    spentResource: 235,
                    duration: 12,
                    trainingCost: 14000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8929/moonfire",
                },
                {
                    id: "moonfire_8",
                    ...abilityMasterData.vanilla.Druid.moonfire,
                    availabletoRaces: null,
                    rank: 8,
                    requiresLevel: 46,
                    description: [
                        "Burns the enemy for {{min}} to {{max}} Arcane damage and then an additional 264 Arcane damage over 12 sec.",
                    ],
                    debuffText: [   
                        "66 Arcane damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            46: 130, 47: 132, 48: 135, 49: 138, 50: 140, 51: 143
                            };
                            return values[level] ?? 143; // 52+ = 143
                        },
                        max: (level) => {
                            const values = {
                            46: 154, 47: 157, 48: 160, 49: 163, 50: 165, 51: 168
                            };
                            return values[level] ?? 168; // 52+ = 168
                        }
                    },
                    spentResource: 280,
                    duration: 12,
                    trainingCost: 20000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9833/moonfire",
                },
                {
                    id: "moonfire_9",
                    ...abilityMasterData.vanilla.Druid.moonfire,
                    availabletoRaces: null,
                    rank: 9,
                    requiresLevel: 52,
                    description: [
                        "Burns the enemy for {{min}} to {{max}} Arcane damage and then an additional 320 Arcane damage over 12 sec.",
                    ],
                    debuffText: [   
                        "80 Arcane damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            52: 157, 53: 160, 54: 163, 55: 166, 56: 169, 57: 172
                            };
                            return values[level] ?? 172; // 58+ = 172
                        },
                        max: (level) => {
                            const values = {
                            52: 185, 53: 188, 54: 191, 55: 194, 56: 197, 57: 200
                            };
                            return values[level] ?? 200; // 58+ = 200
                        }
                    },
                    spentResource: 325,
                    duration: 12,
                    trainingCost: 26000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9834/moonfire",
                },
                {
                    id: "moonfire_10",
                    ...abilityMasterData.vanilla.Druid.moonfire,
                    availabletoRaces: null,
                    rank: 10,
                    requiresLevel: 58,
                    description: [
                        "Burns the enemy for {{min}} to {{max}} Arcane damage and then an additional 384 Arcane damage over 12 sec.",
                    ],
                    debuffText: [   
                        "96 Arcane damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            58: 189, 59: 192, 60: 195
                            };
                            return values[level];
                        },
                        max: (level) => {
                            const values = {
                            58: 221, 59: 225, 60: 228
                            };
                            return values[level];
                        }
                    },
                    spentResource: 375,
                    duration: 12,
                    trainingCost: 32000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9835/moonfire",
                },
                {
                    id: "wrath_1",
                    ...abilityMasterData.vanilla.Druid.wrath,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 1,
                    description: [
                        "Causes {{min}} to {{max}} Nature damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            1: 12, 2: 12, 3: 12, 4: 13, 5: 13
                            };
                            return values[level] ?? 13; // 6+ = 13
                        },
                        max: (level) => {
                            const values = {
                            1: 14, 2: 15, 3: 15, 4: 16, 5: 16
                            };
                            return values[level] ?? 16; // 6+ = 16
                        }
                    },
                    castTime: 1.5,
                    spentResource: 20,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5176/wrath",
                },
                {
                    id: "wrath_2",
                    ...abilityMasterData.vanilla.Druid.wrath,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 6,
                    description: [
                        "Causes {{min}} to {{max}} Nature damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            6: 25, 7: 25, 8: 26, 9: 26, 10: 27, 11: 28, 12: 28
                            };
                            return values[level] ?? 28; // 12+ = 28
                        },
                        max: (level) => {
                            const values = {
                            6: 29, 7: 30, 8: 31, 9: 31, 10: 32, 11: 32, 12: 33
                            };
                            return values[level] ?? 33; // 12+ = 33
                        }
                    },
                    castTime: 1.7,
                    spentResource: 35,
                    trainingCost: 100,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5177/wrath",
                },
                {
                    id: "wrath_3",
                    ...abilityMasterData.vanilla.Druid.wrath,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 14,
                    description: [
                        "Causes {{min}} to {{max}} Nature damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            14: 44, 15: 44, 16: 45, 17: 46, 18: 47, 19: 48, 20: 48
                            };
                            return values[level] ?? 48; // 21+ = 48
                        },
                        max: (level) => {
                            const values = {
                            14: 52, 15: 53, 16: 54, 17: 55, 18: 56, 19: 56, 20: 57
                            };
                            return values[level] ?? 57; // 21+ = 57
                        }
                    },
                    castTime: 2,
                    spentResource: 55,
                    trainingCost: 900,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5178/wrath",
                },
                {
                    id: "wrath_4",
                    ...abilityMasterData.vanilla.Druid.wrath,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 22,
                    description: [
                        "Causes {{min}} to {{max}} Nature damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            22: 63, 23: 64, 24: 65, 25: 66, 26: 67, 27: 68, 28: 69
                            };
                            return values[level] ?? 69; // 29+ = 69
                        },
                        max: (level) => {
                            const values = {
                            22: 73, 23: 74, 24: 75, 25: 76, 26: 77, 27: 78, 28: 79
                            };
                            return values[level] ?? 79; // 29+ = 79
                        }
                    },
                    castTime: 2,
                    spentResource: 70,
                    trainingCost: 3000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5179/wrath",
                },
                {
                    id: "wrath_5",
                    ...abilityMasterData.vanilla.Druid.wrath,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 30,
                    description: [
                        "Causes {{min}} to {{max}} Nature damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            30: 101, 31: 102, 32: 103, 33: 104, 34: 106, 35: 107, 36: 108
                            };
                            return values[level] ?? 108; // 37+ = 108
                        },
                        max: (level) => {
                            const values = {
                            30: 115, 31: 117, 32: 118, 33: 119, 34: 121, 35: 122, 36: 123
                            };
                            return values[level] ?? 123; // 37+ = 123
                        }
                    },
                    castTime: 2,
                    spentResource: 100,
                    trainingCost: 6000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5180/wrath",
                },
                {
                    id: "wrath_6",
                    ...abilityMasterData.vanilla.Druid.wrath,
                    availabletoRaces: null,
                    rank: 6,
                    requiresLevel: 38,
                    description: [
                        "Causes {{min}} to {{max}} Nature damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            38: 139, 39: 140, 40: 142, 41: 143, 42: 145, 43: 147, 44: 148
                            };
                            return values[level] ?? 148; // 45+ = 148
                        },
                        max: (level) => {
                            const values = {
                            38: 157, 39: 159, 40: 161, 41: 162, 42: 164, 43: 165, 44: 167
                            };
                            return values[level] ?? 167; // 45+ = 167
                        }
                    },
                    castTime: 2,
                    spentResource: 125,
                    trainingCost: 12000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6780/wrath",
                },
                {
                    id: "wrath_7",
                    ...abilityMasterData.vanilla.Druid.wrath,
                    availabletoRaces: null,
                    rank: 7,
                    requiresLevel: 46,
                    description: [
                        "Causes {{min}} to {{max}} Nature damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            46: 188, 47: 189, 48: 191, 49: 193, 50: 195, 51: 197, 52: 198
                            };
                            return values[level] ?? 198; // 53+ = 198
                        },
                        max: (level) => {
                            const values = {
                            46: 210, 47: 212, 48: 214, 49: 216, 50: 218, 51: 219, 52: 221
                            };
                            return values[level] ?? 221; // 53+ = 221
                        }
                    },
                    castTime: 2,
                    spentResource: 155,
                    trainingCost: 20000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8905/wrath",
                },
                {
                    id: "wrath_8",
                    ...abilityMasterData.vanilla.Druid.wrath,
                    availabletoRaces: null,
                    rank: 8,
                    requiresLevel: 54,
                    description: [
                        "Causes {{min}} to {{max}} Nature damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            54: 236, 55: 238, 56: 240, 57: 242, 58: 244, 59: 246, 60: 248
                            };
                            return values[level];
                        },
                        max: (level) => {
                            const values = {
                            54: 264, 55: 267, 56: 269, 57: 271, 58: 273, 59: 275, 60: 277
                            };
                            return values[level];
                        }
                    },
                    castTime: 2,
                    spentResource: 180,
                    trainingCost: 28000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9912/wrath",
                },
                {
                    id: "thorns_1",
                    ...abilityMasterData.vanilla.Druid.thorns,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 6,
                    description: [
                        "Thorns sprout from the friendly target causing 3 Nature damage to attackers when hit.  Lasts 10 min.",
                    ],
                    buffText: [
                        "Causes 3 Nature damage to attackers.",
                    ],
                    spentResource: 35,
                    trainingCost: 100,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=467/thorns",
                },
                {
                    id: "thorns_2",
                    ...abilityMasterData.vanilla.Druid.thorns,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 14,
                    description: [
                        "Thorns sprout from the friendly target causing 6 Nature damage to attackers when hit.  Lasts 10 min.",
                    ],
                    buffText: [
                        "Causes 6 Nature damage to attackers.",
                    ],
                    spentResource: 60,
                    trainingCost: 900,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=782/thorns",
                },
                {
                    id: "thorns_3",
                    ...abilityMasterData.vanilla.Druid.thorns,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 24,
                    description: [
                        "Thorns sprout from the friendly target causing 9 Nature damage to attackers when hit.  Lasts 10 min.",
                    ],
                    buffText: [
                        "Causes 9 Nature damage to attackers.",
                    ],
                    spentResource: 105,
                    trainingCost: 4000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1075/thorns",
                },
                {
                    id: "thorns_4",
                    ...abilityMasterData.vanilla.Druid.thorns,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 34,
                    description: [
                        "Thorns sprout from the friendly target causing 12 Nature damage to attackers when hit.  Lasts 10 min.",
                    ],
                    buffText: [
                        "Causes 12 Nature damage to attackers.",
                    ],
                    spentResource: 170,
                    trainingCost: 10000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8914/thorns",
                },
                {
                    id: "thorns_5",
                    ...abilityMasterData.vanilla.Druid.thorns,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 44,
                    description: [
                        "Thorns sprout from the friendly target causing 15 Nature damage to attackers when hit.  Lasts 10 min.",
                    ],
                    buffText: [
                        "Causes 15 Nature damage to attackers.",
                    ],
                    spentResource: 240,
                    trainingCost: 18000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9756/thorns",
                },
                {
                    id: "thorns_6",
                    ...abilityMasterData.vanilla.Druid.thorns,
                    availabletoRaces: null,
                    rank: 6,
                    requiresLevel: 54,
                    description: [
                        "Thorns sprout from the friendly target causing 18 Nature damage to attackers when hit.  Lasts 10 min.",
                    ],
                    buffText: [
                        "Causes 18 Nature damage to attackers.",
                    ],
                    spentResource: 320,
                    trainingCost: 28000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9910/thorns",
                },
                {
                    id: "entangling_roots_1",
                    ...abilityMasterData.vanilla.Druid.entangling_roots,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 8,
                    description: [
                        "Roots the target in place and causes 20 Nature damage over 12 sec.  Damage caused may interrupt the effect.  Only useable outdoors.",
                    ],
                    debuffText: [
                        "Rooted.  Causes 5 Nature damage every 3 seconds.",
                    ],
                    spentResource: 50,
                    duration: 12,
                    trainingCost: 200,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=339/entangling-roots",
                },
                {
                    id: "entangling_roots_2",
                    ...abilityMasterData.vanilla.Druid.entangling_roots,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 18,
                    description: [
                        "Roots the target in place and causes 50 Nature damage over 15 sec.  Damage caused may interrupt the effect.  Only useable outdoors.",
                    ],
                    debuffText: [
                        "Rooted.  Causes 10 Nature damage every 3 seconds.",
                    ],
                    spentResource: 65,
                    duration: 15,
                    trainingCost: 1900,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1062/entangling-roots",
                },
                {
                    id: "entangling_roots_3",
                    ...abilityMasterData.vanilla.Druid.entangling_roots,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 28,
                    description: [
                        "Roots the target in place and causes 90 Nature damage over 18 sec.  Damage caused may interrupt the effect.  Only useable outdoors.",
                    ],
                    debuffText: [
                        "Rooted.  Causes 15 Nature damage every 3 seconds.",
                    ],
                    spentResource: 80,
                    duration: 18,
                    trainingCost: 5000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5195/entangling-roots",
                },
                {
                    id: "entangling_roots_4",
                    ...abilityMasterData.vanilla.Druid.entangling_roots,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 38,
                    description: [
                        "Roots the target in place and causes 140 Nature damage over 21 sec.  Damage caused may interrupt the effect.  Only useable outdoors.",
                    ],
                    debuffText: [
                        "Rooted.  Causes 20 Nature damage every 3 seconds.",
                    ],
                    spentResource: 95,
                    duration: 21,
                    trainingCost: 12000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5196/entangling-roots",
                },
                {
                    id: "entangling_roots_5",
                    ...abilityMasterData.vanilla.Druid.entangling_roots,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 48,
                    description: [
                        "Roots the target in place and causes 200 Nature damage over 24 sec.  Damage caused may interrupt the effect.  Only useable outdoors.",
                    ],
                    debuffText: [
                        "Rooted.  Causes 25 Nature damage every 3 seconds.",
                    ],
                    spentResource: 110,
                    duration: 24,
                    trainingCost: 22000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9852/entangling-roots",
                },
                {
                    id: "entangling_roots_6",
                    ...abilityMasterData.vanilla.Druid.entangling_roots,
                    availabletoRaces: null,
                    rank: 6,
                    requiresLevel: 58,
                    description: [
                        "Roots the target in place and causes 270 Nature damage over 27 sec.  Damage caused may interrupt the effect.  Only useable outdoors.",
                    ],
                    debuffText: [
                        "Rooted.  Causes 30 Nature damage every 3 seconds.",
                    ],
                    spentResource: 125,
                    duration: 27,
                    trainingCost: 32000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9853/entangling-roots",
                },
                {
                    id: "starfire_1",
                    ...abilityMasterData.vanilla.Druid.starfire,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 20,
                    description: [
                        "Causes {{min}} to {{max}} Arcane damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            20: 89, 21: 90, 22: 91, 23: 92, 24: 93, 25: 95
                            };
                            return values[level] ?? 95; // 26+ = 95
                        },
                        max: (level) => {
                            const values = {
                            20: 109, 21: 111, 22: 112, 23: 113, 24: 114, 25: 115
                            };
                            return values[level] ?? 115; // 26+ = 115
                        }
                    },
                    spentResource: 95,
                    trainingCost: 2000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=2912/starfire",
                },
                {
                    id: "starfire_2",
                    ...abilityMasterData.vanilla.Druid.starfire,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 26,
                    description: [
                        "Causes {{min}} to {{max}} Arcane damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            26: 137, 27: 138, 28: 140, 29: 141, 30: 143, 31: 145, 32: 146
                            };
                            return values[level] ?? 146; // 33+ = 146
                        },
                        max: (level) => {
                            const values = {
                            26: 167, 27: 169, 28: 171, 29: 172, 30: 174, 31: 175, 32: 177
                            };
                            return values[level] ?? 177; // 33+ = 177
                        }
                    },
                    spentResource: 135,
                    trainingCost: 4500,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8949/starfire",
                },
                {
                    id: "starfire_3",
                    ...abilityMasterData.vanilla.Druid.starfire,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 34,
                    description: [
                        "Causes {{min}} to {{max}} Arcane damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            34: 201, 35: 202, 36: 204, 37: 206, 38: 208, 39: 210, 40: 212
                            };
                            return values[level] ?? 212; // 41+ = 212
                        },
                        max: (level) => {
                            const values = {
                            34: 241, 35: 243, 36: 245, 37: 247, 38: 249, 39: 251, 40: 253
                            };
                            return values[level] ?? 253; // 41+ = 253
                        }
                    },
                    spentResource: 180,
                    trainingCost: 10000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8950/starfire",
                },
                {
                    id: "starfire_4",
                    ...abilityMasterData.vanilla.Druid.starfire,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 42,
                    description: [
                        "Causes {{min}} to {{max}} Arcane damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            42: 280, 43: 282, 44: 284, 45: 286, 46: 289, 47: 291, 48: 293
                            };
                            return values[level] ?? 293; // 49+ = 293
                        },
                        max: (level) => {
                            const values = {
                            42: 334, 43: 337, 44: 339, 45: 341, 46: 344, 47: 346, 48: 348
                            };
                            return values[level] ?? 348; // 49+ = 348
                        }
                    },
                    spentResource: 230,
                    trainingCost: 16000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8951/starfire",
                },
                {
                    id: "starfire_5",
                    ...abilityMasterData.vanilla.Druid.starfire,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 50,
                    description: [
                        "Causes {{min}} to {{max}} Arcane damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            50: 362, 51: 364, 52: 367, 53: 370, 54: 372, 55: 375, 56: 378
                            };
                            return values[level] ?? 378; // 57+ = 378
                        },
                        max: (level) => {
                            const values = {
                            50: 428, 51: 431, 52: 434, 53: 437, 54: 439, 55: 442, 56: 445
                            };
                            return values[level] ?? 445; // 57+ = 445
                        }
                    },
                    spentResource: 275,
                    trainingCost: 23000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9875/starfire",
                },
                {
                    id: "starfire_6",
                    ...abilityMasterData.vanilla.Druid.starfire,
                    availabletoRaces: null,
                    rank: 6,
                    requiresLevel: 58,
                    description: [
                        "Causes {{min}} to {{max}} Arcane damage to the target.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            58: 445, 59: 448, 60: 451
                            };
                            return values[level];
                        },
                        max: (level) => {
                            const values = {
                            58: 525, 59: 528, 60: 531
                            };
                            return values[level];
                        }
                    },
                    spentResource: 315,
                    trainingCost: 32000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9876/starfire",
                },
                {
                    id: "starfire_7",
                    ...abilityMasterData.vanilla.Druid.starfire,
                    availabletoRaces: null,
                    rank: 7,
                    requiresLevel: 60,
                    description: [
                        "Causes 496 to 584 Arcane damage to the target.",
                    ],
                    spentResource: 340,
                    taughtBy: "Book of Starfire VII",
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=25298/starfire",
                },
                {
                    id: "hurricane_1",
                    ...abilityMasterData.vanilla.Druid.hurricane,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 40,
                    description: [
                        "Creates a violent storm in the target area causing {{value}} Nature damage to enemies every 1 sec, and increasing the time between attacks of enemies by 25%.\
                          Lasts 10 sec.  Druid must channel to maintain the spell.",
                    ],
                    debuffText: [
                        "{{value}} damage every 1 seconds, and time between attacks increased by 25%.",
                    ],
                    scaling: {
                        value: (level) => {
                            const values = {
                            40: 70, 41: 71, 42: 71, 43: 71, 44: 71, 45: 71, 46: 72
                            };
                            return values[level] ?? 72; // 47+ = 72
                        }
                    },
                    spentResource: 880,
                    trainingCost: 14000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=16914/hurricane",
                },
                {
                    id: "hurricane_2",
                    ...abilityMasterData.vanilla.Druid.hurricane,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 50,
                    description: [
                        "Creates a violent storm in the target area causing {{value}} Nature damage to enemies every 1 sec, and increasing the time between attacks of enemies by 25%.\
                          Lasts 10 sec.  Druid must channel to maintain the spell.",
                    ],
                    debuffText: [
                        "{{value}} damage every 1 seconds, and time between attacks increased by 25%.",
                    ],
                    scaling: {
                        value: (level) => {
                            const values = {
                            50: 100, 51: 101, 52: 101, 53: 101, 54: 101, 55: 101, 56: 102
                            };
                            return values[level] ?? 102; // 57+ = 102
                        }
                    },
                    spentResource: 1180,
                    trainingCost: 23000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=17401/hurricane",
                },
                {
                    id: "hurricane_3",
                    ...abilityMasterData.vanilla.Druid.hurricane,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 60,
                    description: [
                        "Creates a violent storm in the target area causing 134 Nature damage to enemies every 1 sec, and increasing the time between attacks by 25%.\
                          Lasts 10 sec.  Druid must channel to maintain the spell.",
                    ],
                    debuffText: [
                        "134 damage every 1 seconds, and time between attacks increased by 25%.",
                    ],
                    spentResource: 1495,
                    trainingCost: 34000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=17402/hurricane",
                },
                {
                    id: "hibernate_1",
                    ...abilityMasterData.vanilla.Druid.hibernate,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 18,
                    description: [
                        "Forces the enemy target to sleep for up to 20 sec.  Any damage will awaken the target.  Only one target can be forced to hibernate at a time.  Only works on Beasts and Dragonkin.",
                    ],
                    debuffText: [
                        "Asleep.",
                    ],
                    spentResource: 90,
                    duration: 20,
                    trainingCost: 1900,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=2637/hibernate",
                },
                {
                    id: "hibernate_2",
                    ...abilityMasterData.vanilla.Druid.hibernate,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 38,
                    description: [
                        "Forces the enemy target to sleep for up to 30 sec.  Any damage will awaken the target.  Only one target can be forced to hibernate at a time.  Only works on Beasts and Dragonkin.",
                    ],
                    debuffText: [
                        "Asleep.",
                    ],
                    spentResource: 120,
                    duration: 30,
                    trainingCost: 12000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=18657/hibernate",
                },
                {
                    id: "hibernate_3",
                    ...abilityMasterData.vanilla.Druid.hibernate,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 58,
                    description: [
                        "Forces the enemy target to sleep for up to 40 sec.  Any damage will awaken the target.  Only one target can be forced to hibernate at a time.  Only works on Beasts and Dragonkin.",
                    ],
                    debuffText: [
                        "Asleep.",
                    ],
                    spentResource: 150,
                    duration: 40,
                    trainingCost: 32000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=18658/hibernate",
                },
                {
                    id: "soothe_animal_1",
                    ...abilityMasterData.vanilla.Druid.soothe_animal,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 22,
                    description: [
                        "Soothes the target beast, reducing the range at which it will attack you by 10 yards.  Only affects Beast targets level 40 or lower.  Lasts 15 sec.",
                    ],
                    debuffText: [
                        "Reduced distance at which target will attack.",
                    ],
                    spentResource: 50,
                    trainingCost: 3000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=2908/soothe-animal",
                },
                {
                    id: "soothe_animal_2",
                    ...abilityMasterData.vanilla.Druid.soothe_animal,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 38,
                    description: [
                        "Soothes the target beast, reducing the range at which it will attack you by 10 yards.  Only affects Beast targets level 55 or lower.  Lasts 15 sec.",
                    ],
                    debuffText: [
                        "Reduced distance at which target will attack.",
                    ],
                    spentResource: 75,
                    trainingCost: 12000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8955/soothe-animal",
                },
                {
                    id: "soothe_animal_3",
                    ...abilityMasterData.vanilla.Druid.soothe_animal,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 54,
                    description: [
                        "Soothes the target beast, reducing the range at which it will attack you by 10 yards.  Only affects Beast targets level 70 or lower.  Lasts 15 sec.",
                    ],
                    debuffText: [
                        "Reduced distance at which target will attack.",
                    ],
                    spentResource: 100,
                    trainingCost: 28000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9901/soothe-animal",
                },
            ],
            // druid - vanilla
            "Feral Combat": [
                {
                    id: "cat_form",
                    ...abilityMasterData.vanilla.Druid.cat_form,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 20,
                    description: [
                        "Shapeshift into cat form, increasing melee attack power by 40 plus Agility.  Also protects the caster from Polymorph effects and allows the use of various cat abilities.<br><br>\
                        The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
                    ],
                    buffText: [
                        "Immunity to Polymorph effects.  Increases melee attack power by 40 plus Agility.",
                    ],
                    spentResource: 55,
                    trainingCost: 2000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=768/cat-form",
                },
                {
                    id: "aquatic_form",
                    ...abilityMasterData.vanilla.Druid.aquatic_form,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 16,
                    description: [
                        "Shapeshift into aquatic form, increasing swim speed by 50% and allowing the druid to breathe underwater.  Also protects the caster from Polymorph effects.<br><br>\
                        The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
                    ],
                    buffText: [
                        "Immune to Polymorph effects.  Increases swim speed by 50% and allows underwater breathing.",
                    ],
                    spentResource: 20,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1066/aquatic-form",
                },
                {
                    id: "travel_form",
                    ...abilityMasterData.vanilla.Druid.travel_form,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 30,
                    description: [
                        "Transforms the druid into a travel form, increasing movement speed by 40%.  Also protects the caster from Polymorph effects.  Only useable outdoors.<br><br>\
                        The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
                    ],
                    buffText: [
                        "Immune to Polymorph effects.  Movement speed increased by 40%.",
                    ],
                    spentResource: 20,
                    trainingCost: 6000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=783/travel-form",
                },
                {
                    id: "bear_form",
                    ...abilityMasterData.vanilla.Druid.bear_form,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 10,
                    description: [
                        "Shapeshift into a bear, increasing melee attack power by {{ap}}, " + 
                        "armor contribution from items by 180%, and health by {{health}}.  " + 
                        "Also protects the caster from Polymorph effects and allows the use of various bear abilities.<br><br>\
                        The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
                    ],
                    buffText: [
                        "Immune to Polymorph effects.  Increases melee attack power by {{ap}}, armor contribution from items by 180%, and health by {{health}}.",
                    ],
                    scaling: {
                        ap: (level) => {
                            const value = 30 + 3 * (level - 10);
                            return Math.min(value, 120);      // cap at level-40 value
                        },
                        health: (level) => {
                            const value = 20 + 18 * (level - 10);
                            return Math.min(value, 560);      // cap at level-40 value
                        },
                    },
                    spentResource: 55,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5487/bear-form",
                },
                {
                    id: "dire_bear_form",
                    ...abilityMasterData.vanilla.Druid.dire_bear_form,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 40,
                    description: [
                        "Shapeshift into a dire bear, increasing melee attack power by {{ap}}, " + 
                        "armor contribution from items by 360%, and health by {{health}}.  " + 
                        "Also protects the caster from Polymorph effects and allows the use of various bear abilities.<br><br>\
                        The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
                    ],
                    buffText: [
                        "Immune to Polymorph effects.  Increases melee attack power by {{ap}}, armor contribution from items by 360%, and health by {{health}}.",
                    ],
                    scaling: {
                        ap: (level) => {
                            const value = 120 + 3 * (level - 40);
                            return Math.min(value, 180);      // cap at level-60 value
                        },
                        health: (level) => {
                            const value = 600 + 32 * (level - 40);
                            return Math.min(value, 1240);      // cap at level-60 value
                        },
                    },
                    spentResource: 55,
                    trainingCost: 14000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9634/dire-bear-form",
                },
                {
                    id: "feline_grace",
                    ...abilityMasterData.vanilla.Druid.feline_grace,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 40,
                    description: [
                        "Reduces damage from falling.",
                    ],
                    trainingCost: 14000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=20719/feline-grace",
                },
                {
                    id: "ferocious_bite_1",
                    ...abilityMasterData.vanilla.Druid.ferocious_bite,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 32,
                    description: [
                        "Finishing move that causes damage per combo point and converts each extra point of energy into 1 additional damage.  Damage is increased by your Attack Power.<br><br>" + 
                        "  1 point : 50-66 damage<br><br>" + 
                        "  2 points: 86-102 damage<br><br>" + 
                        "  3 points: 122-138 damage<br><br>" + 
                        "  4 points: 158-174 damage<br><br>" + 
                        "  5 points: 194-210 damage<br><br>",
                    ],
                    trainingCost: 8000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=22568/ferocious-bite",
                },
                {
                    id: "ferocious_bite_2",
                    ...abilityMasterData.vanilla.Druid.ferocious_bite,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 40,
                    description: [
                        "Finishing move that causes damage per combo point and converts each extra point of energy into 1.5 additional damage.  Damage is increased by your Attack Power.<br><br>" + 
                        "  1 point : 79-103 damage<br><br>" + 
                        "  2 points: 138-162 damage<br><br>" + 
                        "  3 points: 197-221 damage<br><br>" + 
                        "  4 points: 256-280 damage<br><br>" + 
                        "  5 points: 315-339 damage<br><br>",
                    ],
                    trainingCost: 14000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=22827/ferocious-bite",
                },
                {
                    id: "ferocious_bite_3",
                    ...abilityMasterData.vanilla.Druid.ferocious_bite,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 48,
                    description: [
                        "Finishing move that causes damage per combo point and converts each extra point of energy into 2 additional damage.  Damage is increased by your Attack Power.<br><br>" + 
                        "  1 point : 122-162 damage<br><br>" + 
                        "  2 points: 214-254 damage<br><br>" + 
                        "  3 points: 306-346 damage<br><br>" + 
                        "  4 points: 398-438 damage<br><br>" + 
                        "  5 points: 490-530 damage<br><br>",
                    ],
                    trainingCost: 22000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=22828/ferocious-bite",
                },
                {
                    id: "ferocious_bite_4",
                    ...abilityMasterData.vanilla.Druid.ferocious_bite,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 56,
                    description: [
                        "Finishing move that causes damage per combo point and converts each extra point of energy into 2.5 additional damage.  Damage is increased by your Attack Power.<br><br>" + 
                        "  1 point : 173-223 damage<br><br>" + 
                        "  2 points: 301-351 damage<br><br>" + 
                        "  3 points: 429-479 damage<br><br>" + 
                        "  4 points: 557-607 damage<br><br>" + 
                        "  5 points: 685-735 damage<br><br>",
                    ],
                    trainingCost: 30000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=22829/ferocious-bite",
                },
                {
                    id: "ferocious_bite_5",
                    ...abilityMasterData.vanilla.Druid.ferocious_bite,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 60,
                    description: [
                        "Finishing move that causes damage per combo point and converts each extra point of energy into 2.70000005 additional damage.  Damage is increased by your Attack Power.<br><br>" + 
                        "  1 point : 199-259 damage<br><br>" + 
                        "  2 points: 346-406 damage<br><br>" + 
                        "  3 points: 493-553 damage<br><br>" + 
                        "  4 points: 640-700 damage<br><br>" + 
                        "  5 points: 787-847 damage<br><br>",
                    ],
                    taughtBy: "Book of Ferocious Bite V",
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=31018/ferocious-bite",
                },
                {
                    id: "dash_1",
                    ...abilityMasterData.vanilla.Druid.dash,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 26,
                    description: [
                        "Increases movement speed by 50% for 15 sec.  Does not break prowling.",
                    ],
                    buffText: [
                        "Increases movement speed by 50%.",
                    ],
                    trainingCost: 4500,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1850/dash",
                },
                {
                    id: "dash_2",
                    ...abilityMasterData.vanilla.Druid.dash,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 46,
                    description: [
                        "Increases movement speed by 60% for 15 sec.  Does not break prowling.",
                    ],
                    buffText: [
                        "Increases movement speed by 60%.",
                    ],
                    trainingCost: 20000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9821/dash",
                },
                {
                    id: "rake_1",
                    ...abilityMasterData.vanilla.Druid.rake,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 24,
                    description: [
                        "Rake the target for 19 damage and an additional 39 damage over 9 sec.  Awards 1 combo point.",
                    ],
                    debuffText: [
                        "Bleeding for 13 damage every 3 seconds.",
                    ],
                    trainingCost: 4000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1822/rake",
                },
                {
                    id: "rake_2",
                    ...abilityMasterData.vanilla.Druid.rake,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 34,
                    description: [
                        "Rake the target for 28 damage and an additional 57 damage over 9 sec.  Awards 1 combo point.",
                    ],
                    debuffText: [
                        "Bleeding for 19 damage every 3 seconds.",
                    ],
                    trainingCost: 10000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1823/rake",
                },
                {
                    id: "rake_3",
                    ...abilityMasterData.vanilla.Druid.rake,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 44,
                    description: [
                        "Rake the target for 43 damage and an additional 75 damage over 9 sec.  Awards 1 combo point.",
                    ],
                    debuffText: [
                        "Bleeding for 25 damage every 3 seconds.",
                    ],
                    trainingCost: 18000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1824/rake",
                },
                {
                    id: "rake_4",
                    ...abilityMasterData.vanilla.Druid.rake,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 54,
                    description: [
                        "Rake the target for 58 damage and an additional 96 damage over 9 sec.  Awards 1 combo point.",
                    ],
                    debuffText: [
                        "Bleeding for 32 damage every 3 seconds.",
                    ],
                    trainingCost: 28000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9904/rake",
                },
                {
                    id: "maul_1",
                    ...abilityMasterData.vanilla.Druid.maul,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 10,
                    description: [
                        "Increases the druid's next attack by 18 damage.",
                    ],
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6807/maul",
                },
                {
                    id: "maul_2",
                    ...abilityMasterData.vanilla.Druid.maul,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 18,
                    description: [
                        "Increases the druid's next attack by 27 damage.",
                    ],
                    trainingCost: 1900,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6808/maul",
                },
                {
                    id: "maul_3",
                    ...abilityMasterData.vanilla.Druid.maul,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 26,
                    description: [
                        "Increases the druid's next attack by 37 damage.",
                    ],
                    trainingCost: 4500,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6809/maul",
                },
                {
                    id: "maul_4",
                    ...abilityMasterData.vanilla.Druid.maul,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 34,
                    description: [
                        "Increases the druid's next attack by 49 damage.",
                    ],
                    trainingCost: 10000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8972/maul",
                },
                {
                    id: "maul_5",
                    ...abilityMasterData.vanilla.Druid.maul,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 42,
                    description: [
                        "Increases the druid's next attack by 71 damage.",
                    ],
                    trainingCost: 16000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9745/maul",
                },
                {
                    id: "maul_6",
                    ...abilityMasterData.vanilla.Druid.maul,
                    availabletoRaces: null,
                    rank: 6,
                    requiresLevel: 50,
                    description: [
                        "Increases the druid's next attack by 101 damage.",
                    ],
                    trainingCost: 23000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9880/maul",
                },
                {
                    id: "maul_7",
                    ...abilityMasterData.vanilla.Druid.maul,
                    availabletoRaces: null,
                    rank: 7,
                    requiresLevel: 58,
                    description: [
                        "Increases the druid's next attack by 128 damage.",
                    ],
                    trainingCost: 32000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9881/maul",
                },
                {
                    id: "swipe_1",
                    ...abilityMasterData.vanilla.Druid.swipe,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 16,
                    description: [
                        "Swipe 3 nearby enemies, inflicting 18 damage.",
                    ],
                    trainingCost: 1800,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=779/swipe",
                },
                {
                    id: "swipe_2",
                    ...abilityMasterData.vanilla.Druid.swipe,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 24,
                    description: [
                        "Swipe 3 nearby enemies, inflicting 25 damage.",
                    ],
                    trainingCost: 4000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=780/swipe",
                },
                {
                    id: "swipe_3",
                    ...abilityMasterData.vanilla.Druid.swipe,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 34,
                    description: [
                        "Swipe 3 nearby enemies, inflicting 36 damage.",
                    ],
                    trainingCost: 10000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=769/swipe",
                },
                {
                    id: "swipe_4",
                    ...abilityMasterData.vanilla.Druid.swipe,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 44,
                    description: [
                        "Swipe 3 nearby enemies, inflicting 60 damage.",
                    ],
                    trainingCost: 18000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9754/swipe",
                },
                {
                    id: "swipe_5",
                    ...abilityMasterData.vanilla.Druid.swipe,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 54,
                    description: [
                        "Swipe 3 nearby enemies, inflicting 83 damage.",
                    ],
                    trainingCost: 28000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9908/swipe",
                },
                {
                    id: "shred_1",
                    ...abilityMasterData.vanilla.Druid.shred,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 22,
                    description: [
                        "Shred the target, causing 225% damage plus 54 to the target.  Must be behind the target.  Awards 1 combo point.",
                    ],
                    trainingCost: 3000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5221/shred",
                },
                {
                    id: "shred_2",
                    ...abilityMasterData.vanilla.Druid.shred,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 30,
                    description: [
                        "Shred the target, causing 225% damage plus 72 to the target.  Must be behind the target.  Awards 1 combo point.",
                    ],
                    trainingCost: 6000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6800/shred",
                },
                {
                    id: "shred_3",
                    ...abilityMasterData.vanilla.Druid.shred,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 38,
                    description: [
                        "Shred the target, causing 225% damage plus 99 to the target.  Must be behind the target.  Awards 1 combo point.",
                    ],
                    trainingCost: 12000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8992/shred",
                },
                {
                    id: "shred_4",
                    ...abilityMasterData.vanilla.Druid.shred,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 46,
                    description: [
                        "Shred the target, causing 225% damage plus 144 to the target.  Must be behind the target.  Awards 1 combo point.",
                    ],
                    trainingCost: 20000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9829/shred",
                },
                {
                    id: "shred_5",
                    ...abilityMasterData.vanilla.Druid.shred,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 54,
                    description: [
                        "Shred the target, causing 225% damage plus 180 to the target.  Must be behind the target.  Awards 1 combo point.",
                    ],
                    trainingCost: 28000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9830/shred",
                },
                {
                    id: "demoralizing_roar_1",
                    ...abilityMasterData.vanilla.Druid.demoralizing_roar,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 10,
                    description: [
                        "The druid roars, decreasing nearby enemies' melee attack power by {{value}}.  Lasts 30 sec.",
                    ],
                    debuffText: [
                        "Decreases melee attack power by {{value}}.",
                    ],
                    scaling: {
                        value: (level) => {
                            const values = {
                            10: 30, 11: 31, 12: 32, 13: 33, 14: 34, 15: 35, 16: 36, 17: 37, 18: 38, 19: 39, 20: 40
                            };
                            return values[level] ?? 40; // 21+ = 40
                        }
                    },
                    trainingCost: 300,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=99/demoralizing-roar",
                },
                {
                    id: "demoralizing_roar_2",
                    ...abilityMasterData.vanilla.Druid.demoralizing_roar,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 20,
                    description: [
                        "The druid roars, decreasing nearby enemies' melee attack power by {{value}}.  Lasts 30 sec.",
                    ],
                    debuffText: [
                        "Decreases melee attack power by {{value}}.",
                    ],
                    scaling: {
                        value: (level) => {
                            const values = {
                            20: 50, 21: 51, 22: 52, 23: 53, 24: 54, 25: 55, 26: 56, 27: 57, 28: 58, 29: 59, 30: 60
                            };
                            return values[level] ?? 60; // 31+ = 60
                        }
                    },
                    trainingCost: 2000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1735/demoralizing-roar",
                },
                {
                    id: "demoralizing_roar_3",
                    ...abilityMasterData.vanilla.Druid.demoralizing_roar,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 32,
                    description: [
                        "The druid roars, decreasing nearby enemies' melee attack power by {{value}}.  Lasts 30 sec.",
                    ],
                    debuffText: [
                        "Decreases melee attack power by {{value}}.",
                    ],
                    scaling: {
                        value: (level) => {
                            const values = {
                            32: 65, 33: 66, 34: 67, 35: 68, 36: 69, 37: 70, 38: 71, 39: 72, 40: 73, 41: 74, 42: 75
                            };
                            return values[level] ?? 75; // 43+ = 75
                        }
                    },
                    trainingCost: 8000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9490/demoralizing-roar",
                },
                {
                    id: "demoralizing_roar_4",
                    ...abilityMasterData.vanilla.Druid.demoralizing_roar,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 42,
                    description: [
                        "The druid roars, decreasing nearby enemies' melee attack power by {{value}}.  Lasts 30 sec.",
                    ],
                    debuffText: [
                        "Decreases melee attack power by {{value}}.",
                    ],
                    scaling: {
                        value: (level) => {
                            const values = {
                            42: 100, 43: 101, 44: 102, 45: 103, 46: 104, 47: 105, 48: 106, 49: 107, 50: 108, 51: 109, 52: 110
                            };
                            return values[level] ?? 110; // 53+ = 110
                        }
                    },
                    trainingCost: 16000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9747/demoralizing-roar",
                },
                {
                    id: "demoralizing_roar_5",
                    ...abilityMasterData.vanilla.Druid.demoralizing_roar,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 52,
                    description: [
                        "The druid roars, decreasing nearby enemies' melee attack power by {{value}}.  Lasts 30 sec.",
                    ],
                    debuffText: [
                        "Decreases melee attack power by {{value}}.",
                    ],
                    scaling: {
                        value: (level) => {
                            const values = {
                            52: 130, 53: 131, 54: 132, 55: 133, 56: 134, 57: 135, 58: 136, 59: 137, 60: 138
                            };
                            return values[level];
                        }
                    },
                    trainingCost: 26000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9898/demoralizing-roar",
                },
                {
                    id: "rip_1",
                    ...abilityMasterData.vanilla.Druid.rip,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 20,
                    description: [
                        "Finishing move that causes damage over time.  Damage increases per combo point and by your Attack Power:<br><br>" + 
                        "  1 point : 42 damage over 12 sec.<br><br>" + 
                        "  2 points: 66 damage over 12 sec.<br><br>" + 
                        "  3 points: 90 damage over 12 sec.<br><br>" + 
                        "  4 points: 114 damage over 12 sec.<br><br>" + 
                        "  5 points: 138 damage over 12 sec.",
                    ],
                    debuffText: [
                        "Bleed damage every 2 seconds.",
                    ],
                    trainingCost: 2000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1079/rip",
                },
                {
                    id: "rip_2",
                    ...abilityMasterData.vanilla.Druid.rip,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 28,
                    description: [
                        "Finishing move that causes damage over time.  Damage increases per combo point and by your Attack Power:<br><br>" + 
                        "  1 point : 66 damage over 12 sec.<br><br>" + 
                        "  2 points: 108 damage over 12 sec.<br><br>" + 
                        "  3 points: 150 damage over 12 sec.<br><br>" + 
                        "  4 points: 192 damage over 12 sec.<br><br>" + 
                        "  5 points: 234 damage over 12 sec.",
                    ],
                    debuffText: [
                        "Bleed damage every 2 seconds.",
                    ],
                    trainingCost: 5000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9492/rip",
                },
                {
                    id: "rip_3",
                    ...abilityMasterData.vanilla.Druid.rip,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 36,
                    description: [
                        "Finishing move that causes damage over time.  Damage increases per combo point and by your Attack Power:<br><br>" + 
                        "  1 point : 90 damage over 12 sec.<br><br>" + 
                        "  2 points: 144 damage over 12 sec.<br><br>" + 
                        "  3 points: 198 damage over 12 sec.<br><br>" + 
                        "  4 points: 252 damage over 12 sec.<br><br>" + 
                        "  5 points: 306 damage over 12 sec.",
                    ],
                    debuffText: [
                        "Bleed damage every 2 seconds.",
                    ],
                    trainingCost: 11000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9493/rip",
                },
                {
                    id: "rip_4",
                    ...abilityMasterData.vanilla.Druid.rip,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 44,
                    description: [
                        "Finishing move that causes damage over time.  Damage increases per combo point and by your Attack Power:<br><br>" + 
                        "  1 point : 138 damage over 12 sec.<br><br>" + 
                        "  2 points: 222 damage over 12 sec.<br><br>" + 
                        "  3 points: 306 damage over 12 sec.<br><br>" + 
                        "  4 points: 390 damage over 12 sec.<br><br>" + 
                        "  5 points: 474 damage over 12 sec.",
                    ],
                    debuffText: [
                        "Bleed damage every 2 seconds.",
                    ],
                    trainingCost: 18000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9752/rip",
                },
                {
                    id: "rip_5",
                    ...abilityMasterData.vanilla.Druid.rip,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 52,
                    description: [
                        "Finishing move that causes damage over time.  Damage increases per combo point and by your Attack Power:<br><br>" + 
                        "  1 point : 192 damage over 12 sec.<br><br>" + 
                        "  2 points: 312 damage over 12 sec.<br><br>" + 
                        "  3 points: 432 damage over 12 sec.<br><br>" + 
                        "  4 points: 552 damage over 12 sec.<br><br>" + 
                        "  5 points: 672 damage over 12 sec.",
                    ],
                    debuffText: [
                        "Bleed damage every 2 seconds.",
                    ],
                    trainingCost: 26000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9894/rip",
                },
                {
                    id: "rip_6",
                    ...abilityMasterData.vanilla.Druid.rip,
                    availabletoRaces: null,
                    rank: 6,
                    requiresLevel: 60,
                    description: [
                        "Finishing move that causes damage over time.  Damage increases per combo point and by your Attack Power:<br><br>" + 
                        "  1 point : 270 damage over 12 sec.<br><br>" + 
                        "  2 points: 438 damage over 12 sec.<br><br>" + 
                        "  3 points: 606 damage over 12 sec.<br><br>" + 
                        "  4 points: 774 damage over 12 sec.<br><br>" + 
                        "  5 points: 942 damage over 12 sec.",
                    ],
                    debuffText: [
                        "Bleed damage every 2 seconds.",
                    ],
                    trainingCost: 34000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9896/rip",
                },
                {
                    id: "claw_1",
                    ...abilityMasterData.vanilla.Druid.claw,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 20,
                    description: [
                        "Claw the enemy, causing 27 additional damage.  Awards 1 combo point.",
                    ],
                    trainingCost: 2000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1082/claw",
                },
                {
                    id: "claw_2",
                    ...abilityMasterData.vanilla.Druid.claw,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 28,
                    description: [
                        "Claw the enemy, causing 39 additional damage.  Awards 1 combo point.",
                    ],
                    trainingCost: 5000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=3029/claw",
                },
                {
                    id: "claw_3",
                    ...abilityMasterData.vanilla.Druid.claw,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 38,
                    description: [
                        "Claw the enemy, causing 57 additional damage.  Awards 1 combo point.",
                    ],
                    trainingCost: 12000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5201/claw",
                },
                {
                    id: "claw_4",
                    ...abilityMasterData.vanilla.Druid.claw,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 48,
                    description: [
                        "Claw the enemy, causing 88 additional damage.  Awards 1 combo point.",
                    ],
                    trainingCost: 22000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9849/claw",
                },
                {
                    id: "claw_5",
                    ...abilityMasterData.vanilla.Druid.claw,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 58,
                    description: [
                        "Claw the enemy, causing 115 additional damage.  Awards 1 combo point.",
                    ],
                    trainingCost: 32000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9850/claw",
                },
                {
                    id: "challenging_roar",
                    ...abilityMasterData.vanilla.Druid.challenging_roar,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 28,
                    description: [
                        "Forces all nearby enemies to focus attacks on you for 6 sec.",
                    ],
                    debuffText: [
                        "Taunted.",
                    ],
                    trainingCost: 5000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5209/challenging-roar",
                },
                {
                    id: "ravage_1",
                    ...abilityMasterData.vanilla.Druid.ravage,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 32,
                    description: [
                        "Ravage the target, causing 350% damage plus 147 to the target.  Must be prowling and behind the target.  Awards 1 combo point.",
                    ],
                    trainingCost: 8000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6785/ravage",
                },
                {
                    id: "ravage_2",
                    ...abilityMasterData.vanilla.Druid.ravage,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 42,
                    description: [
                        "Ravage the target, causing 350% damage plus 217 to the target.  Must be prowling and behind the target.  Awards 1 combo point.",
                    ],
                    trainingCost: 16000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6787/ravage",
                },
                {
                    id: "ravage_3",
                    ...abilityMasterData.vanilla.Druid.ravage,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 50,
                    description: [
                        "Ravage the target, causing 350% damage plus 273 to the target.  Must be prowling and behind the target.  Awards 1 combo point.",
                    ],
                    trainingCost: 23000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9866/ravage",
                },
                {
                    id: "ravage_4",
                    ...abilityMasterData.vanilla.Druid.ravage,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 58,
                    description: [
                        "Ravage the target, causing 350% damage plus 343 to the target.  Must be prowling and behind the target.  Awards 1 combo point.",
                    ],
                    trainingCost: 32000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9867/ravage",
                },
                {
                    id: "tigers_fury_1",
                    ...abilityMasterData.vanilla.Druid.tigers_fury,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 24,
                    description: [
                        "Increases damage done by 10 for 6 sec.",
                    ],
                    buffText: [
                        "Increases damage done by 10.",
                    ],
                    trainingCost: 4000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5217/tigers-fury",
                },
                {
                    id: "tigers_fury_2",
                    ...abilityMasterData.vanilla.Druid.tigers_fury,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 36,
                    description: [
                        "Increases damage done by 20 for 6 sec.",
                    ],
                    buffText: [
                        "Increases damage done by 20.",
                    ],
                    trainingCost: 11000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6793/tigers-fury",
                },
                {
                    id: "tigers_fury_3",
                    ...abilityMasterData.vanilla.Druid.tigers_fury,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 48,
                    description: [
                        "Increases damage done by 30 for 6 sec.",
                    ],
                    buffText: [
                        "Increases damage done by 30.",
                    ],
                    trainingCost: 22000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9845/tigers-fury",
                },
                {
                    id: "tigers_fury_4",
                    ...abilityMasterData.vanilla.Druid.tigers_fury,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 60,
                    description: [
                        "Increases damage done by 40 for 6 sec.",
                    ],
                    buffText: [
                        "Increases damage done by 40.",
                    ],
                    trainingCost: 34000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9846/tigers-fury",
                },
                {
                    id: "frenzied_regeneration_1",
                    ...abilityMasterData.vanilla.Druid.frenzied_regeneration,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 36,
                    description: [
                        "Converts up to 10 rage per second into health for 10 sec.  Each point of rage is converted into 10 health.",
                    ],
                    buffText: [
                        "Converting rage into health.",
                    ],
                    trainingCost: 11000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=22842/frenzied-regeneration",
                },
                {
                    id: "frenzied_regeneration_2",
                    ...abilityMasterData.vanilla.Druid.frenzied_regeneration,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 46,
                    description: [
                        "Converts up to 10 rage per second into health for 10 sec.  Each point of rage is converted into 15 health.",
                    ],
                    buffText: [
                        "Converting rage into health.",
                    ],
                    trainingCost: 20000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=22895/frenzied-regeneration",
                },
                {
                    id: "frenzied_regeneration_3",
                    ...abilityMasterData.vanilla.Druid.frenzied_regeneration,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 56,
                    description: [
                        "Converts up to 10 rage per second into health for 10 sec.  Each point of rage is converted into 20 health.",
                    ],
                    buffText: [
                        "Converting rage into health.",
                    ],
                    trainingCost: 30000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=22896/frenzied-regeneration",
                },
                {
                    id: "cower_1",
                    ...abilityMasterData.vanilla.Druid.cower,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 28,
                    description: [
                        "Cower, causing no damage but lowering your threat a small amount, making the enemy less likely to attack you.",
                    ],
                    trainingCost: 5000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8998/cower",
                },
                {
                    id: "cower_2",
                    ...abilityMasterData.vanilla.Druid.cower,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 40,
                    description: [
                        "Cower, causing no damage but lowering your threat a medium amount, making the enemy less likely to attack you.",
                    ],
                    trainingCost: 14000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9000/cower",
                },
                {
                    id: "cower_3",
                    ...abilityMasterData.vanilla.Druid.cower,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 52,
                    description: [
                        "Cower, causing no damage but lowering your threat a large amount, making the enemy less likely to attack you.",
                    ],
                    trainingCost: 26000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9892/cower",
                },
                {
                    id: "prowl_1",
                    ...abilityMasterData.vanilla.Druid.prowl,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 20,
                    description: [
                        "Allows the Druid to prowl around, but reduces your movement speed by 40%.  Lasts until cancelled.",
                    ],
                    buffText: [
                        "Stealthed.  Movement speed slowed by 40%.",
                    ],
                    trainingCost: 2000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5215/prowl",
                },
                {
                    id: "prowl_2",
                    ...abilityMasterData.vanilla.Druid.prowl,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 40,
                    description: [
                        "Allows the Druid to prowl around, but reduces your movement speed by 35%.  Lasts until cancelled.",
                    ],
                    buffText: [
                        "Stealthed.  Movement speed slowed by 35%.",
                    ],
                    trainingCost: 14000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6783/prowl",
                },
                {
                    id: "prowl_3",
                    ...abilityMasterData.vanilla.Druid.prowl,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 60,
                    description: [
                        "Allows the Druid to prowl around, but reduces your movement speed by 30%.  Lasts until cancelled.",
                    ],
                    buffText: [
                        "Stealthed.  Movement speed slowed by 30%.",
                    ],
                    trainingCost: 34000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9913/prowl",
                },
                {
                    id: "pounce_1",
                    ...abilityMasterData.vanilla.Druid.pounce,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 36,
                    description: [
                        "Pounce, stunning the target for 2 sec and causing 90 damage over 18 sec.  Must be prowling and behind the target.  Awards 1 combo point.",
                    ],
                    debuffText: [
                        "Stunned.",
                    ],
                    trainingCost: 11000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9005/pounce",
                },
                {
                    id: "pounce_2",
                    ...abilityMasterData.vanilla.Druid.pounce,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 46,
                    description: [
                        "Pounce, stunning the target for 2 sec and causing 120 damage over 18 sec.  Must be prowling and behind the target.  Awards 1 combo point.",
                    ],
                    debuffText: [
                        "Stunned.",
                    ],
                    trainingCost: 20000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9823/pounce",
                },
                {
                    id: "pounce_3",
                    ...abilityMasterData.vanilla.Druid.pounce,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 56,
                    description: [
                        "Pounce, stunning the target for 2 sec and causing 150 damage over 18 sec.  Must be prowling and behind the target.  Awards 1 combo point.",
                    ],
                    debuffText: [
                        "Stunned.",
                    ],
                    trainingCost: 30000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9827/pounce",
                },
                {
                    id: "bash_1",
                    ...abilityMasterData.vanilla.Druid.bash,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 14,
                    description: [
                        "Stuns the target for 2 sec.",
                    ],
                    debuffText: [
                        "Stunned.",
                    ],
                    trainingCost: 900,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5211/bash",
                },
                {
                    id: "bash_2",
                    ...abilityMasterData.vanilla.Druid.bash,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 30,
                    description: [
                        "Stuns the target for 3 sec.",
                    ],
                    debuffText: [
                        "Stunned.",
                    ],
                    trainingCost: 6000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6798/bash",
                },
                {
                    id: "bash_3",
                    ...abilityMasterData.vanilla.Druid.bash,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 46,
                    description: [
                        "Stuns the target for 4 sec.",
                    ],
                    debuffText: [
                        "Stunned.",
                    ],
                    trainingCost: 20000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8983/bash",
                },
                {
                    id: "growl",
                    ...abilityMasterData.vanilla.Druid.growl,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 10,
                    description: [
                        "Taunts the target to attack you, but has no effect if the target is already attacking you.",
                    ],
                    debuffText: [
                        "Taunted.",
                    ],
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6795/growl",
                },
                {
                    id: "enrage",
                    ...abilityMasterData.vanilla.Druid.enrage,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 12,
                    description: [
                        "Generates 20 rage over 10 sec, but reduces base armor by 27% in Bear Form and 16% in Dire Bear Form.  The druid is considered in combat for the duration.",
                    ],
                    buffText: [
                        "Gain 2 rage per second. Base armor reduced.",
                    ],
                    trainingCost: 800,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5229/enrage",
                },
                {
                    id: "track_humanoids",
                    ...abilityMasterData.vanilla.Druid.track_humanoids,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 32,
                    description: [
                        "Shows the location of all nearby humanoids on the minimap.  Only one type of thing can be tracked at a time.",
                    ],
                    buffText: [
                        "Tracking humanoids.",
                    ],
                    trainingCost: 8000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5225/track-humanoids",
                },
            ],
            // druid - vanilla
            Restoration: [
                {
                    id: "mark_of_the_wild_1",
                    ...abilityMasterData.vanilla.Druid.mark_of_the_wild,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 1,
                    description: [
                        "Increases the friendly target's armor by 25 for 30 min.",
                    ],
                    buffText: [
                        "Increases armor by 25.",
                    ],
                    spentResource: 20,
                    trainingCost: 10,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1126/mark-of-the-wild",
                },
                {
                    id: "mark_of_the_wild_2",
                    ...abilityMasterData.vanilla.Druid.mark_of_the_wild,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 10,
                    description: [
                        "Increases the friendly target's armor by 65 and all attributes by 2 for 30 min.",
                    ],
                    buffText: [
                        "Increases armor by 65 and all attributes by 2.",
                    ],
                    spentResource: 50,
                    trainingCost: 300,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5232/mark-of-the-wild",
                },
                {
                    id: "mark_of_the_wild_3",
                    ...abilityMasterData.vanilla.Druid.mark_of_the_wild,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 20,
                    description: [
                        "Increases the friendly target's armor by 105 and all attributes by 4 for 30 min.",
                    ],
                    buffText: [
                        "Increases armor by 105 and all attributes by 4.",
                    ],
                    spentResource: 100,
                    trainingCost: 2000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6756/mark-of-the-wild",
                },
                {
                    id: "mark_of_the_wild_4",
                    ...abilityMasterData.vanilla.Druid.mark_of_the_wild,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 30,
                    description: [
                        "Increases the friendly target's armor by 150, all attributes by 6 and all resistances by 5 for 30 min.",
                    ],
                    buffText: [
                        "Increases armor by 150, all attributes by 6 and all resistances by 5.",
                    ],
                    spentResource: 160,
                    trainingCost: 6000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5234/mark-of-the-wild",
                },
                {
                    id: "mark_of_the_wild_5",
                    ...abilityMasterData.vanilla.Druid.mark_of_the_wild,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 40,
                    description: [
                        "Increases the friendly target's armor by 195, all attributes by 8 and all resistances by 10 for 30 min.",
                    ],
                    buffText: [
                        "Increases armor by 195, all attributes by 8 and all resistances by 10.",
                    ],
                    spentResource: 240,
                    trainingCost: 14000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8907/mark-of-the-wild",
                },
                {
                    id: "mark_of_the_wild_6",
                    ...abilityMasterData.vanilla.Druid.mark_of_the_wild,
                    availabletoRaces: null,
                    rank: 6,
                    requiresLevel: 50,
                    description: [
                        "Increases the friendly target's armor by 240, all attributes by 10 and all resistances by 15 for 30 min.",
                    ],
                    buffText: [
                        "Increases armor by 240, all attributes by 10 and all resistances by 15.",
                    ],
                    spentResource: 340,
                    trainingCost: 23000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9884/mark-of-the-wild",
                },
                {
                    id: "mark_of_the_wild_7",
                    ...abilityMasterData.vanilla.Druid.mark_of_the_wild,
                    availabletoRaces: null,
                    rank: 7,
                    requiresLevel: 60,
                    description: [
                        "Increases the friendly target's armor by 285, all attributes by 12 and all resistances by 20 for 30 min.",
                    ],
                    buffText: [
                        "Increases armor by 285, all attributes by 12 and all resistances by 20.",
                    ],
                    spentResource: 445,
                    trainingCost: 34000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9885/mark-of-the-wild",
                },
                {
                    id: "gift_of_the_wild_1",
                    ...abilityMasterData.vanilla.Druid.gift_of_the_wild,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 50,
                    description: [
                        "Gives the Gift of the Wild to the target's party, increasing armor by 240, all attributes by 10 and all resistances by 15 for 1 hour.",
                    ],
                    buffText: [
                        "Increases armor by 240, all attributes by 10 and all resistances by 15.",
                    ],
                    spentResource: 900,
                    reagent: "Wild Berries",
                    taughtBy: "Book: Gift of the Wild",
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=21849/gift-of-the-wild",
                },
                {
                    id: "gift_of_the_wild_2",
                    ...abilityMasterData.vanilla.Druid.gift_of_the_wild,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 60,
                    description: [
                        "Gives the Gift of the Wild to the target's party, increasing armor by 285, all attributes by 12 and all resistances by 20 for 1 hour.",
                    ],
                    buffText: [
                        "Increases armor by 285, all attributes by 12 and all resistances by 20.",
                    ],
                    spentResource: 1200,
                    reagent: "Wild Thornroot",
                    taughtBy: "Book: Gift of the Wild II",
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=21850/gift-of-the-wild",
                },
                {
                    id: "innervate",
                    ...abilityMasterData.vanilla.Druid.innervate,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 40,
                    description: [
                        "Increases the target's Mana regeneration by 400% and allows 100% of the target's Mana regeneration to continue while casting.  Lasts 20 sec.",
                    ],
                    buffText: [
                        "Mana regeneration increased by 400%.  100% Mana regeneration may continue while casting.",
                    ],
                    castTime: null,
                    spentResource: 5,
                    duration: 20,
                    trainingCost: 14000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=29166/innervate",
                },
                {
                    id: "remove_curse",
                    ...abilityMasterData.vanilla.Druid.remove_curse,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 24,
                    description: [
                        "Dispels 1 Curse from a friendly target.",
                    ],
                    castTime: null,
                    spentResource: 10,
                    duration: null,
                    trainingCost: 4000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=2782/remove-curse",
                },
                {
                    id: "cure_poison",
                    ...abilityMasterData.vanilla.Druid.cure_poison,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 14,
                    description: [
                        "Cures 1 poison effect on the target.",
                    ],
                    castTime: null,
                    spentResource: 16,
                    duration: null,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8946/cure-poison",
                },
                {
                    id: "abolish_poison",
                    ...abilityMasterData.vanilla.Druid.abolish_poison,
                    availabletoRaces: null,
                    rank: null,
                    requiresLevel: 26,
                    description: [
                        "Attempts to cure 1 poison effect on the target, and 1 more poison effect every 2 seconds for 8 sec.",
                    ],
                    castTime: null,
                    spentResource: 16,
                    duration: 8,
                    trainingCost: 4500,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=2893/abolish-poison",
                },
                {
                    id: "healing_touch_1",
                    ...abilityMasterData.vanilla.Druid.healing_touch,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 1,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}}.",
                    ],
                    scaling: {
                        min: (level) => {
                            const value = 37 + 1 * (level - 2);
                            return Math.min(Math.max(value, 37), 40);      // cap at level-5 value
                        },
                        max: (level) => {
                            const value = 51 + 1 * (level - 1);
                            return Math.min(Math.max(value, 51), 55);      // cap at level-5 value
                        },
                    },
                    castTime: 1.5,
                    spentResource: 25,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5185/healing-touch",
                },
                {
                    id: "healing_touch_2",
                    ...abilityMasterData.vanilla.Druid.healing_touch,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 8,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}}.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            8: 88, 9: 89, 10: 90, 11: 91, 12: 93, 13: 94
                            };
                            return values[level] ?? 94; // 14+ = 94
                        },
                        max: (level) => {
                            const values = {
                            8: 112, 9: 114, 10: 115, 11: 116, 12: 118, 13: 119
                            };
                            return values[level] ?? 119; // 14+ = 119
                        }
                    },
                    castTime: 2,
                    spentResource: 55,
                    trainingCost: 200,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5186/healing-touch",
                },
                {
                    id: "healing_touch_3",
                    ...abilityMasterData.vanilla.Druid.healing_touch,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 14,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}}.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            14: 195, 15: 196, 16: 198, 17: 200, 18: 202, 19: 204 
                            };
                            return values[level] ?? 204; // 20+ = 204
                        },
                        max: (level) => {
                            const values = {
                            14: 243, 15: 245, 16: 247, 17: 249, 18: 251, 19: 253
                            };
                            return values[level] ?? 253; // 20+ = 253
                        }
                    },
                    castTime: 2.5,
                    spentResource: 110,
                    trainingCost: 900,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5187/healing-touch",
                },
                {
                    id: "healing_touch_4",
                    ...abilityMasterData.vanilla.Druid.healing_touch,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 20,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}}.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            20: 363, 21: 365, 22: 368, 23: 371, 24: 373, 25: 376 
                            };
                            return values[level] ?? 376; // 26+ = 376
                        },
                        max: (level) => {
                            const values = {
                            20: 445, 21: 448, 22: 451, 23: 454, 24: 456, 25: 459
                            };
                            return values[level] ?? 459; // 26+ = 459
                        }
                    },
                    castTime: 3,
                    spentResource: 185,
                    trainingCost: 2000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5188/healing-touch",
                },
                {
                    id: "healing_touch_5",
                    ...abilityMasterData.vanilla.Druid.healing_touch,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 26,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}}.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            26: 572, 27: 575, 28: 368, 29: 371, 30: 373, 31: 589
                            };
                            return values[level] ?? 589; // 32+ = 589
                        },
                        max: (level) => {
                            const values = {
                            26: 694, 27: 698, 28: 451, 29: 454, 30: 456, 31: 712
                            };
                            return values[level] ?? 712; // 32+ = 712
                        }
                    },
                    castTime: 3.5,
                    spentResource: 270,
                    trainingCost: 4500,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=5189/healing-touch",
                },
                {
                    id: "healing_touch_6",
                    ...abilityMasterData.vanilla.Druid.healing_touch,
                    availabletoRaces: null,
                    rank: 6,
                    requiresLevel: 32,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}}.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            32: 742, 33: 746, 34: 750, 35: 754, 36: 758, 37: 762
                            };
                            return values[level] ?? 762; // 38+ = 762
                        },
                        max: (level) => {
                            const values = {
                            32: 894, 33: 898, 34: 902, 35: 906, 36: 910, 37: 914
                            };
                            return values[level] ?? 914; // 38+ = 914
                        }
                    },
                    castTime: 3.5,
                    spentResource: 335,
                    trainingCost: 8000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=6778/healing-touch",
                },
                {
                    id: "healing_touch_7",
                    ...abilityMasterData.vanilla.Druid.healing_touch,
                    availabletoRaces: null,
                    rank: 7,
                    requiresLevel: 38,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}}.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            38: 936, 39: 940, 40: 945, 41: 949, 42: 954, 43: 958
                            };
                            return values[level] ?? 958; // 44+ = 958
                        },
                        max: (level) => {
                            const values = {
                            38: 1120, 39: 1125, 40: 1129, 41: 1134, 42: 1138, 43: 1143
                            };
                            return values[level] ?? 1143; // 44+ = 1143
                        }
                    },
                    castTime: 3.5,
                    spentResource: 405,
                    trainingCost: 12000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8903/healing-touch",
                },
                {
                    id: "healing_touch_8",
                    ...abilityMasterData.vanilla.Druid.healing_touch,
                    availabletoRaces: null,
                    rank: 8,
                    requiresLevel: 44,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}}.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            44: 1199, 45: 1204, 46: 1209, 47: 1214, 48: 1219, 49: 1225
                            };
                            return values[level] ?? 1225; // 50+ = 1225
                        },
                        max: (level) => {
                            const values = {
                            44: 1427, 45: 1433, 46: 1438, 47: 1443, 48: 1448, 49: 1453
                            };
                            return values[level] ?? 1453; // 50+ = 1453
                        }
                    },
                    castTime: 3.5,
                    spentResource: 495,
                    trainingCost: 18000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9758/healing-touch",
                },
                {
                    id: "healing_touch_9",
                    ...abilityMasterData.vanilla.Druid.healing_touch,
                    availabletoRaces: null,
                    rank: 9,
                    requiresLevel: 50,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}}.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            50: 1516, 51: 1521, 52: 1527, 53: 1533, 54: 1539, 55: 1545
                            };
                            return values[level] ?? 1545; // 56+ = 1545
                        },
                        max: (level) => {
                            const values = {
                            50: 1796, 51: 1802, 52: 1808, 53: 1814, 54: 1820, 55: 1826
                            };
                            return values[level] ?? 1826; // 56+ = 1826
                        }
                    },
                    castTime: 3.5,
                    spentResource: 600,
                    trainingCost: 23000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9888/healing-touch",
                },
                {
                    id: "healing_touch_10",
                    ...abilityMasterData.vanilla.Druid.healing_touch,
                    availabletoRaces: null,
                    rank: 10,
                    requiresLevel: 56,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}}.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            56: 1890, 57: 1896, 58: 1903, 59: 1909, 60: 1916
                            };
                            return values[level];
                        },
                        max: (level) => {
                            const values = {
                            56: 2230, 57: 2237, 58: 2244, 59: 2250, 60: 2257
                            };
                            return values[level];
                        }
                    },
                    castTime: 3.5,
                    spentResource: 720,
                    trainingCost: 30000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9889/healing-touch",
                },
                {
                    id: "healing_touch_11",
                    ...abilityMasterData.vanilla.Druid.healing_touch,
                    availabletoRaces: null,
                    rank: 11,
                    requiresLevel: 60,
                    description: [
                        "Heals a friendly target for 2267 to 2677.",
                    ],
                    castTime: 3.5,
                    spentResource: 800,
                    taughtBy: "Book of Healing Touch XI",
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=25297/healing-touch",
                },
                {
                    id: "rejuvenation_1",
                    ...abilityMasterData.vanilla.Druid.rejuvenation,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 4,
                    description: [
                        "Heals the target for 32 over 12 sec.",
                    ],
                    buffText: [
                        "Heals 8 damage every 3 seconds.",
                    ],
                    spentResource: 25,
                    trainingCost: 100,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=774/rejuvenation",
                },
                {
                    id: "rejuvenation_2",
                    ...abilityMasterData.vanilla.Druid.rejuvenation,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 10,
                    description: [
                        "Heals the target for 56 over 12 sec.",
                    ],
                    buffText: [
                        "Heals 14 damage every 3 seconds.",
                    ],
                    spentResource: 40,
                    trainingCost: 300,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1058/rejuvenation",
                },
                {
                    id: "rejuvenation_3",
                    ...abilityMasterData.vanilla.Druid.rejuvenation,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 16,
                    description: [
                        "Heals the target for 116 over 12 sec.",
                    ],
                    buffText: [
                        "Heals 29 damage every 3 seconds.",
                    ],
                    spentResource: 75,
                    trainingCost: 1800,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=1430/rejuvenation",
                },
                {
                    id: "rejuvenation_4",
                    ...abilityMasterData.vanilla.Druid.rejuvenation,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 22,
                    description: [
                        "Heals the target for 180 over 12 sec.",
                    ],
                    buffText: [
                        "Heals 45 damage every 3 seconds.",
                    ],
                    spentResource: 105,
                    trainingCost: 3000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=2090/rejuvenation",
                },
                {
                    id: "rejuvenation_5",
                    ...abilityMasterData.vanilla.Druid.rejuvenation,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 28,
                    description: [
                        "Heals the target for 244 over 12 sec.",
                    ],
                    buffText: [
                        "Heals 61 damage every 3 seconds.",
                    ],
                    spentResource: 135,
                    trainingCost: 5000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=2091/rejuvenation",
                },
                {
                    id: "rejuvenation_6",
                    ...abilityMasterData.vanilla.Druid.rejuvenation,
                    availabletoRaces: null,
                    rank: 6,
                    requiresLevel: 34,
                    description: [
                        "Heals the target for 304 over 12 sec.",
                    ],
                    buffText: [
                        "Heals 76 damage every 3 seconds.",
                    ],
                    spentResource: 160,
                    trainingCost: 10000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=3627/rejuvenation",
                },
                {
                    id: "rejuvenation_7",
                    ...abilityMasterData.vanilla.Druid.rejuvenation,
                    availabletoRaces: null,
                    rank: 7,
                    requiresLevel: 40,
                    description: [
                        "Heals the target for 388 over 12 sec.",
                    ],
                    buffText: [
                        "Heals 97 damage every 3 seconds.",
                    ],
                    spentResource: 195,
                    trainingCost: 14000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8910/rejuvenation",
                },
                {
                    id: "rejuvenation_8",
                    ...abilityMasterData.vanilla.Druid.rejuvenation,
                    availabletoRaces: null,
                    rank: 8,
                    requiresLevel: 46,
                    description: [
                        "Heals the target for 488 over 12 sec.",
                    ],
                    buffText: [
                        "Heals 122 damage every 3 seconds.",
                    ],
                    spentResource: 235,
                    trainingCost: 20000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9839/rejuvenation",
                },
                {
                    id: "rejuvenation_9",
                    ...abilityMasterData.vanilla.Druid.rejuvenation,
                    availabletoRaces: null,
                    rank: 9,
                    requiresLevel: 52,
                    description: [
                        "Heals the target for 608 over 12 sec.",
                    ],
                    buffText: [
                        "Heals 152 damage every 3 seconds.",
                    ],
                    spentResource: 280,
                    trainingCost: 26000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9840/rejuvenation",
                },
                {
                    id: "rejuvenation_10",
                    ...abilityMasterData.vanilla.Druid.rejuvenation,
                    availabletoRaces: null,
                    rank: 10,
                    requiresLevel: 58,
                    description: [
                        "Heals the target for 756 over 12 sec.",
                    ],
                    buffText: [
                        "Heals 189 damage every 3 seconds.",
                    ],
                    spentResource: 335,
                    trainingCost: 32000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9841/rejuvenation",
                },
                {
                    id: "rejuvenation_11",
                    ...abilityMasterData.vanilla.Druid.rejuvenation,
                    availabletoRaces: null,
                    rank: 11,
                    requiresLevel: 60,
                    description: [
                        "Heals the target for 888 over 12 sec.",
                    ],
                    buffText: [
                        "Heals 222 damage every 3 seconds.",
                    ],
                    spentResource: 360,
                    taughtBy: "Book of Rejuvenation XI",
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=25299/rejuvenation",
                },
                {
                    id: "regrowth_1",
                    ...abilityMasterData.vanilla.Druid.regrowth,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 12,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}} and another 98 over 21 sec.",
                    ],
                    buffText: [
                        "Heals 14 damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            12: 84, 13: 85, 14: 87, 15: 89, 16: 91, 17: 93
                            };
                            return values[level] ?? 93; // 18+ = 93
                        },
                        max: (level) => {
                            const values = {
                            12: 98, 13: 100, 14: 102, 15: 104, 16: 106, 17: 107
                            };
                            return values[level] ?? 107; // 18+ = 107
                        }
                    },
                    spentResource: 120,
                    trainingCost: 800,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8936/regrowth",
                },
                {
                    id: "regrowth_2",
                    ...abilityMasterData.vanilla.Druid.regrowth,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 18,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}} and another 175 over 21 sec.",
                    ],
                    buffText: [
                        "Heals 25 damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            18: 164, 19: 166, 20: 169, 21: 171, 22: 174, 23: 176
                            };
                            return values[level] ?? 176; // 24+ = 176
                        },
                        max: (level) => {
                            const values = {
                            18: 188, 19: 191, 20: 193, 21: 196, 22: 198, 23: 201
                            };
                            return values[level] ?? 201; // 24+ = 201
                        }
                    },
                    spentResource: 205,
                    trainingCost: 1900,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8938/regrowth",
                },
                {
                    id: "regrowth_3",
                    ...abilityMasterData.vanilla.Druid.regrowth,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 24,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}} and another 259 over 21 sec.",
                    ],
                    buffText: [
                        "Heals 37 damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            24: 240, 25: 243, 26: 246, 27: 249, 28: 252, 29: 255
                            };
                            return values[level] ?? 255; // 30+ = 255
                        },
                        max: (level) => {
                            const values = {
                            24: 274, 25: 278, 26: 281, 27: 284, 28: 287, 29: 290
                            };
                            return values[level] ?? 290; // 30+ = 290
                        }
                    },
                    spentResource: 280,
                    trainingCost: 4000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8939/regrowth",
                },
                {
                    id: "regrowth_4",
                    ...abilityMasterData.vanilla.Druid.regrowth,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 30,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}} and another 343 over 21 sec.",
                    ],
                    buffText: [
                        "Heals 49 damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            30: 318, 31: 321, 32: 325, 33: 328, 34: 332, 35: 336
                            };
                            return values[level] ?? 336; // 36+ = 336
                        },
                        max: (level) => {
                            const values = {
                            30: 360, 31: 364, 32: 368, 33: 371, 34: 375, 35: 378
                            };
                            return values[level] ?? 378; // 36+ = 378
                        }
                    },
                    spentResource: 350,
                    trainingCost: 6000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8940/regrowth",
                },
                {
                    id: "regrowth_5",
                    ...abilityMasterData.vanilla.Druid.regrowth,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 36,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}} and another 427 over 21 sec.",
                    ],
                    buffText: [
                        "Heals 61 damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            36: 405, 37: 409, 38: 413, 39: 417, 40: 421, 41: 425
                            };
                            return values[level] ?? 425; // 42+ = 425
                        },
                        max: (level) => {
                            const values = {
                            36: 457, 37: 462, 38: 466, 39: 470, 40: 474, 41: 478
                            };
                            return values[level] ?? 478; // 42+ = 478
                        }
                    },
                    spentResource: 420,
                    trainingCost: 11000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8941/regrowth",
                },
                {
                    id: "regrowth_6",
                    ...abilityMasterData.vanilla.Druid.regrowth,
                    availabletoRaces: null,
                    rank: 6,
                    requiresLevel: 42,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}} and another 546 over 21 sec.",
                    ],
                    buffText: [
                        "Heals 78 damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            42: 511, 43: 515, 44: 520, 45: 525, 46: 529, 47: 534
                            };
                            return values[level] ?? 534; // 48+ = 534
                        },
                        max: (level) => {
                            const values = {
                            42: 575, 43: 580, 44: 585, 45: 590, 46: 594, 47: 599
                            };
                            return values[level] ?? 599; // 48+ = 599
                        }
                    },
                    spentResource: 510,
                    trainingCost: 16000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9750/regrowth",
                },
                {
                    id: "regrowth_7",
                    ...abilityMasterData.vanilla.Druid.regrowth,
                    availabletoRaces: null,
                    rank: 7,
                    requiresLevel: 48,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}} and another 686 over 21 sec.",
                    ],
                    buffText: [
                        "Heals 98 damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            48: 646, 49: 651, 50: 656, 51: 661, 52: 667, 53: 672
                            };
                            return values[level] ?? 672; // 54+ = 672
                        },
                        max: (level) => {
                            const values = {
                            48: 724, 49: 730, 50: 735, 51: 740, 52: 746, 53: 751
                            };
                            return values[level] ?? 751; // 54+ = 751
                        }
                    },
                    spentResource: 615,
                    trainingCost: 22000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9856/regrowth",
                },
                {
                    id: "regrowth_8",
                    ...abilityMasterData.vanilla.Druid.regrowth,
                    availabletoRaces: null,
                    rank: 8,
                    requiresLevel: 54,
                    description: [
                        "Heals a friendly target for {{min}} to {{max}} and another 861 over 21 sec.",
                    ],
                    buffText: [
                        "Heals 123 damage every 3 seconds.",
                    ],
                    scaling: {
                        min: (level) => {
                            const values = {
                            54: 809, 55: 815, 56: 821, 57: 827, 58: 833, 59: 839
                            };
                            return values[level] ?? 839; // 60 = 839
                        },
                        max: (level) => {
                            const values = {
                            54: 905, 55: 911, 56: 917, 57: 923, 58: 929, 59: 935
                            };
                            return values[level] ?? 935; // 60 = 935
                        }
                    },
                    spentResource: 740,
                    trainingCost: 28000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9857/regrowth",
                },
                {
                    id: "regrowth_9",
                    ...abilityMasterData.vanilla.Druid.regrowth,
                    availabletoRaces: null,
                    rank: 9,
                    requiresLevel: 60,
                    description: [
                        "Heals a friendly target for 1003 to 1119 and another 1064 over 21 sec.",
                    ],
                    buffText: [
                        "Heals 152 damage every 3 seconds.",
                    ],
                    spentResource: 880,
                    trainingCost: 34000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9858/regrowth",
                },
                {
                    id: "rebirth_1",
                    ...abilityMasterData.vanilla.Druid.rebirth,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 20,
                    description: [
                        "Returns the spirit to the body, restoring a dead target to life with 400 health and 700 mana.",
                    ],
                    reagent: "Maple Seed",
                    trainingCost: 2000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=20484/rebirth",
                },
                {
                    id: "rebirth_2",
                    ...abilityMasterData.vanilla.Druid.rebirth,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 30,
                    description: [
                        "Returns the spirit to the body, restoring a dead target to life with 750 health and 1200 mana.",
                    ],
                    reagent: "Stranglethorn Seed",
                    trainingCost: 6000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=20739/rebirth",
                },
                {
                    id: "rebirth_3",
                    ...abilityMasterData.vanilla.Druid.rebirth,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 40,
                    description: [
                        "Returns the spirit to the body, restoring a dead target to life with 1100 health and 1700 mana.",
                    ],
                    reagent: "Ashwood Seed",
                    trainingCost: 14000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=20742/rebirth",
                },
                {
                    id: "rebirth_4",
                    ...abilityMasterData.vanilla.Druid.rebirth,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 50,
                    description: [
                        "Returns the spirit to the body, restoring a dead target to life with 1600 health and 2200 mana.",
                    ],
                    reagent: "Hornbeam Seed",
                    trainingCost: 23000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=20747/rebirth",
                },
                {
                    id: "rebirth_5",
                    ...abilityMasterData.vanilla.Druid.rebirth,
                    availabletoRaces: null,
                    rank: 5,
                    requiresLevel: 60,
                    description: [
                        "Returns the spirit to the body, restoring a dead target to life with 2200 health and 2800 mana.",
                    ],
                    reagent: "Ironwood Seed",
                    trainingCost: 34000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=20748/rebirth",
                },
                {
                    id: "tranquility_1",
                    ...abilityMasterData.vanilla.Druid.tranquility,
                    availabletoRaces: null,
                    rank: 1,
                    requiresLevel: 30,
                    description: [
                        "Regenerates all nearby group members for {{value}} every 2 seconds for 10 sec.  Druid must channel to maintain the spell.",
                    ],
                    buffText: [
                        "Heals nearby party members for {{value}} every 2 seconds.",
                    ],
                    scaling: {
                        value: (level) => {
                            const values = {
                            30: 94, 31: 95, 32: 96, 33: 96, 34: 97, 35: 97, 36: 98
                            };
                            return values[level] ?? 98; // 37+ = 98
                        }
                    },
                    spentResource: 375,
                    trainingCost: 6000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=740/tranquility",
                },
                {
                    id: "tranquility_2",
                    ...abilityMasterData.vanilla.Druid.tranquility,
                    availabletoRaces: null,
                    rank: 2,
                    requiresLevel: 40,
                    description: [
                        "Regenerates all nearby group members for {{value}} every 2 seconds for 10 sec.  Druid must channel to maintain the spell.",
                    ],
                    buffText: [
                        "Heals nearby party members for {{value}} every 2 seconds.",
                    ],
                    scaling: {
                        value: (level) => {
                            const values = {
                            40: 138, 41: 139, 42: 140, 43: 141, 44: 141, 45: 142, 46: 143
                            };
                            return values[level] ?? 143; // 47+ = 143
                        }
                    },
                    spentResource: 505,
                    trainingCost: 14000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=8918/tranquility",
                },
                {
                    id: "tranquility_3",
                    ...abilityMasterData.vanilla.Druid.tranquility,
                    availabletoRaces: null,
                    rank: 3,
                    requiresLevel: 50,
                    description: [
                        "Regenerates all nearby group members for 211 every 2 seconds for 10 sec.  Druid must channel to maintain the spell.",
                    ],
                    buffText: [
                        "Heals nearby party members for 211 every 2 seconds.",
                    ],
                    scaling: {
                        value: (level) => {
                            const values = {
                            50: 205, 51: 206, 52: 207, 53: 208, 54: 209, 55: 210, 56: 211
                            };
                            return values[level] ?? 211; // 57+ = 211
                        }
                    },
                    spentResource: 695,
                    trainingCost: 23000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9862/tranquility",
                },
                {
                    id: "tranquility_4",
                    ...abilityMasterData.vanilla.Druid.tranquility,
                    availabletoRaces: null,
                    rank: 4,
                    requiresLevel: 60,
                    description: [
                        "Regenerates all nearby group members for 294 every 2 seconds for 10 sec.  Druid must channel to maintain the spell.",
                    ],
                    buffText: [
                        "Heals nearby party members for 294 every 2 seconds.",
                    ],
                    spentResource: 925,
                    trainingCost: 34000,
                    linktoWoWHead: "https://www.wowhead.com/classic/spell=9863/tranquility",
                },
            ],
            // druid - vanilla
            OTHER: [

            ]
        },
        [HUNTER]: {
            // hunter - vanilla
            "Beast Mastery": [

            ],
            // hunter - vanilla
            Marksmanship: [

            ],
            // hunter - vanilla
            Survival: [

            ],
            // hunter - vanilla
            OTHER: [

            ],
        },
        [MAGE]: {
            // mage - vanilla
            Arcane: [

            ],
            // mage - vanilla
            Fire: [

            ],
            // mage - vanilla
            Frost: [

            ],
            // mage - vanilla
            OTHER: [

            ],
        },
        [PALADIN]: {
            // paladin - vanilla
            Holy: [

            ],
            // paladin - vanilla
            Protection: [

            ],
            // paladin - vanilla
            Retribution: [

            ],
            // paladin - vanilla
            OTHER: [

            ],
        },
        [PRIEST]: {
            // priest - vanilla
            Discipline: [

            ],
            // priest - vanilla
            Holy: [

            ],
            // priest - vanilla
            Shadow: [

            ],
            // priest - vanilla
            OTHER: [

            ],
        },
        [ROGUE]: {
            // rogue - vanilla
            Assassination: [

            ],
            // rogue - vanilla
            Combat: [

            ],
            // rogue - vanilla
            Subtlety: [

            ],
            // rogue - vanilla
            OTHER: [

            ],
        },
        [SHAMAN]: {
            // shaman - vanilla
            Elemental: [

            ],
            // shaman - vanilla
            Enhancement: [

            ],
            // shaman - vanilla
            Restoration: [

            ],
            // shaman - vanilla
            OTHER: [

            ],
        },
        [WARLOCK]: {
            // warlock - vanilla
            Affliction: [

            ],
            // warlock - vanilla
            Demonology: [

            ],
            // warlock - vanilla
            Destruction: [

            ],
            // warlock - vanilla
            OTHER: [

            ],
        },
        [WARRIOR]: {
            // warrior - vanilla
            Arms: [

            ],
            // warrior - vanilla
            Fury: [

            ],
            // warrior - vanilla
            Protection: [

            ],
            // warrior - vanilla
            OTHER: [

            ],
        },
    },
    tbc: {
        [DRUID]: {
            // druid - tbc
            Balance: [

            ],
            // druid - tbc
            "Feral Combat": [

            ],
            // druid - tbc
            Restoration: [

            ],
            // druid - tbc
            OTHER: [

            ],
        },
        [HUNTER]: {
            // hunter - tbc
            "Beast Mastery": [

            ],
            // hunter - tbc
            Marksmanship: [

            ],
            // hunter - tbc
            Survival: [

            ],
            // hunter - tbc
            OTHER: [

            ],
        },
        // mage - tbc
        [MAGE]: {
            // mage - tbc
            Arcane: [

            ],
            // mage - tbc
            Fire: [

            ],
            // mage - tbc
            Frost: [

            ],
            // mage - tbc
            OTHER: [

            ],
        },
        [PALADIN]: {
            // paladin - tbc
            Holy: [

            ],
            // paladin - tbc
            Protection: [

            ],
            // paladin - tbc
            Retribution: [

            ],
            // paladin - tbc
            OTHER: [

            ],
        },
        [PRIEST]: {
            // priest - tbc
            Discipline: [

            ],
            // priest - tbc
            Holy: [

            ],
            // priest - tbc
            Shadow: [

            ],
            // priest - tbc
            OTHER: [

            ],
        },
        [ROGUE]: {
            // rogue - tbc
            Assassination: [

            ],
            // rogue - tbc
            Combat: [

            ],
            // rogue - tbc
            Subtlety: [

            ],
            // rogue - tbc
            OTHER: [

            ],
        },
        [SHAMAN]: {
            // shaman - tbc
            Elemental: [

            ],
            // shaman - tbc
            Enhancement: [

            ],
            // shaman - tbc
            Restoration: [

            ],
            // shaman - tbc
            OTHER: [

            ],
        },
        [WARLOCK]: {
            // warlock - tbc
            Affliction: [

            ],
            // warlock - tbc
            Demonology: [

            ],
            // warlock - tbc
            Destruction: [

            ],
            // warlock - tbc
            OTHER: [

            ],
        },
        [WARRIOR]: {
            // warrior - tbc
            Arms: [

            ],
            // warrior - tbc
            Fury: [

            ],
            // warrior - tbc
            Protection: [

            ],
            // warrior - tbc
            OTHER: [

            ],
        },
    },
    wotlk: {
        [DEATHKNIGHT]: {
            // deathknight - wotlk
            Blood: [

            ],
            // deathknight - wotlk
            Frost: [

            ],
            // deathknight - wotlk
            Unholy: [

            ],
            // deathknight - wotlk
            OTHER: [

            ],
        },
        [DRUID]: {
            // druid - wotlk
            Balance: [

            ],
            // druid - wotlk
            "Feral Combat": [

            ],
            // druid - wotlk
            Restoration: [

            ],
            // druid - wotlk
            OTHER: [

            ],
        },
        [HUNTER]: {
            // hunter - wotlk
            "Beast Mastery": [

            ],
            // hunter - wotlk
            Marksmanship: [

            ],
            // hunter - wotlk
            Survival: [

            ],
            // hunter - wotlk
            OTHER: [

            ],
        },
        // mage - wotlk
        [MAGE]: {
            // mage - wotlk
            Arcane: [

            ],
            // mage - wotlk
            Fire: [

            ],
            // mage - wotlk
            Frost: [

            ],
            // mage - wotlk
            OTHER: [

            ],
        },
        [PALADIN]: {
            // paladin - wotlk
            Holy: [

            ],
            // paladin - wotlk
            Protection: [

            ],
            // paladin - wotlk
            Retribution: [

            ],
            // paladin - wotlk
            OTHER: [

            ],
        },
        [PRIEST]: {
            // priest - wotlk
            Discipline: [

            ],
            // priest - wotlk
            Holy: [

            ],
            // priest - wotlk
            Shadow: [

            ],
            // priest - wotlk
            OTHER: [

            ],
        },
        [ROGUE]: {
            // rogue - wotlk
            Assassination: [

            ],
            // rogue - wotlk
            Combat: [

            ],
            // rogue - wotlk
            Subtlety: [

            ],
            // rogue - wotlk
            OTHER: [

            ],
        },
        [SHAMAN]: {
            // shaman - wotlk
            Elemental: [

            ],
            // shaman - wotlk
            Enhancement: [

            ],
            // shaman - wotlk
            Restoration: [

            ],
            // shaman - wotlk
            OTHER: [

            ],
        },
        [WARLOCK]: {
            // warlock - wotlk
            Affliction: [

            ],
            // warlock - wotlk
            Demonology: [

            ],
            // warlock - wotlk
            Destruction: [

            ],
            // warlock - wotlk
            OTHER: [

            ],
        },
        [WARRIOR]: {
            // warrior - wotlk
            Arms: [

            ],
            // warrior - wotlk
            Fury: [

            ],
            // warrior - wotlk
            Protection: [

            ],
            // warrior - wotlk
            OTHER: [

            ],
        },
    },
    cataclysm: {
        [DEATHKNIGHT]: {
            // deathknight - cataclysm
            Blood: [

            ],
            // deathknight - cataclysm
            Frost: [

            ],
            // deathknight - cataclysm
            Unholy: [

            ],
            // deathknight - cataclysm
            OTHER: [

            ],
        },
        [DRUID]: {
            // druid - cataclysm
            Balance: [

            ],
            // druid - cataclysm
            "Feral Combat": [

            ],
            // druid - cataclysm
            Restoration: [

            ],
            // druid - cataclysm
            OTHER: [

            ],
        },
        [HUNTER]: {
            // hunter - cataclysm
            "Beast Mastery": [

            ],
            // hunter - cataclysm
            Marksmanship: [

            ],
            // hunter - cataclysm
            Survival: [

            ],
            // hunter - cataclysm
            OTHER: [

            ],
        },
        [MAGE]: {
            // mage - cataclysm
            Arcane: [

            ],
            // mage - cataclysm
            Fire: [

            ],
            // mage - cataclysm
            Frost: [

            ],
            // mage - cataclysm
            OTHER: [

            ],
        },
        [PALADIN]: {
            // paladin - cataclysm
            Holy: [

            ],
            // paladin - cataclysm
            Protection: [

            ],
            // paladin - cataclysm
            Retribution: [

            ],
            // paladin - cataclysm
            OTHER: [

            ],
        },
        [PRIEST]: {
            // priest - cataclysm
            Discipline: [

            ],
            // priest - cataclysm
            Holy: [

            ],
            // priest - cataclysm
            Shadow: [

            ],
            // priest - cataclysm
            OTHER: [

            ],
        },
        [ROGUE]: {
            // rogue - cataclysm
            Assassination: [

            ],
            // rogue - cataclysm
            Combat: [

            ],
            // rogue - cataclysm
            Subtlety: [

            ],
            // rogue - cataclysm
            OTHER: [

            ],
        },
        [SHAMAN]: {
            // shaman - cataclysm
            Elemental: [

            ],
            // shaman - cataclysm
            Enhancement: [

            ],
            // shaman - cataclysm
            Restoration: [

            ],
            // shaman - cataclysm
            OTHER: [

            ],
        },
        [WARLOCK]: {
            // warlock - cataclysm
            Affliction: [

            ],
            // warlock - cataclysm
            Demonology: [

            ],
            // warlock - cataclysm
            Destruction: [

            ],
            // warlock - cataclysm
            OTHER: [

            ],
        },
        [WARRIOR]: {
            // warrior - cataclysm
            Arms: [

            ],
            // warrior - cataclysm
            Fury: [

            ],
            // warrior - cataclysm
            Protection: [

            ],
            // warrior - cataclysm
            OTHER: [

            ],
        },
    }
};