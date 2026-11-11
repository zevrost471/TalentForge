// talent-class-abilities.js

import { classes } from './classes.js';
import { baseTalents } from './base-talents.js';
import { talentAbilityMasterData } from './talent-ability-master-data.js';

let DEATH_KNIGHT = classes.DEATH_KNIGHT;
let DRUID = classes.DRUID;
let HUNTER = classes.HUNTER;
let MAGE = classes.MAGE;
let PALADIN = classes.PALADIN;
let PRIEST = classes.PRIEST;
let ROGUE = classes.ROGUE;
let SHAMAN = classes.SHAMAN;
let WARLOCK = classes.WARLOCK;
let WARRIOR = classes.WARRIOR;

export const talentClassAbilities = {
    vanilla: {
        [DRUID]: {
            // druid - vanilla
            Balance: [
                {
                    id: "natures_grasp_1",
                    ...talentAbilityMasterData.vanilla.Druid.natures_grasp,
                    rank: 1,
                    requiresLevel: null,
                    description: [
                        "While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1).  Only useable outdoors.  1 charge.  Lasts 45 sec.",
                    ],
                    spentResource: 50,
                    trainingCost: null,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=16689/natures-grasp",
                },
                {
                    id: "natures_grasp_2",
                    ...talentAbilityMasterData.vanilla.Druid.natures_grasp,
                    rank: 2,
                    requiresLevel: 18,
                    description: [
                        "While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 2).  Only useable outdoors.  1 charge.  Lasts 45 sec.",
                    ],
                    spentResource: 65,
                    trainingCost: 95,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=16810/natures-grasp",
                },
                {
                    id: "natures_grasp_3",
                    ...talentAbilityMasterData.vanilla.Druid.natures_grasp,
                    rank: 3,
                    requiresLevel: 28,
                    description: [
                        "While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 3).  Only useable outdoors.  1 charge.  Lasts 45 sec.",
                    ],
                    spentResource: 80,
                    trainingCost: 250,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=16811/natures-grasp",
                },
                {
                    id: "natures_grasp_4",
                    ...talentAbilityMasterData.vanilla.Druid.natures_grasp,
                    rank: 4,
                    requiresLevel: 38,
                    description: [
                        "While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 4).  Only useable outdoors.  1 charge.  Lasts 45 sec.",
                    ],
                    spentResource: 95,
                    trainingCost: 600,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=16812/natures-grasp",
                },
                {
                    id: "natures_grasp_5",
                    ...talentAbilityMasterData.vanilla.Druid.natures_grasp,
                    rank: 5,
                    requiresLevel: 48,
                    description: [
                        "While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 5).  Only useable outdoors.  1 charge.  Lasts 45 sec.",
                    ],
                    spentResource: 110,
                    trainingCost: 1100,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=16813/natures-grasp",
                },
                {
                    id: "natures_grasp_6",
                    ...talentAbilityMasterData.vanilla.Druid.natures_grasp,
                    rank: 6,
                    requiresLevel: 58,
                    description: [
                        "While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 6).  Only useable outdoors.  1 charge.  Lasts 45 sec.",
                    ],
                    spentResource: 125,
                    trainingCost: 1600,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=17329/natures-grasp",
                },
                {
                    id: "omen_of_clarity",
                    ...talentAbilityMasterData.vanilla.Druid.omen_of_clarity,
                    rank: null,
                    requiresLevel: null,
                    description: [
                        "Imbues the Druid with natural energy.  Each of the Druid's melee attacks has a chance of causing the caster to enter a Clearcasting state.  The Clearcasting state reduces the Mana, Rage or Energy cost of your next damage or healing spell or offensive ability by 100%.  Lasts 10 min.",
                    ],
                    buffText: [
                        "Each melee attack has a chance of causing the caster to enter a Clearcasting state.",
                    ],
                    trainingCost: null,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=24858/moonkin-form",
                },
                {
                    id: "moonkin_form",
                    ...talentAbilityMasterData.vanilla.Druid.moonkin_form,
                    rank: null,
                    requiresLevel: null,
                    description: [
                        "Transforms the Druid into Moonkin Form. While in this form the armor contribution from items is increased by 360% and all party members within 30 yards have their spell critical chance increased by 3%. The Moonkin can only cast Balance spells while shapeshifted.<br><br>\
                        The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
                    ],
                    buffText: [
                        "Immunity to Polymorph effects.  Armor contribution from items is increased by 360%.",
                    ],
                    trainingCost: null,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=24858/moonkin-form",
                },
            ],
            // druid - vanilla
            "Feral Combat": [
                {
                    id: "feral_charge",
                    ...talentAbilityMasterData.vanilla.Druid.feral_charge,
                    rank: null,
                    requiresLevel: null,
                    description: [
                        "Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec.",
                    ],
                    debuffText: [
                        "Immobilized.",
                    ],
                    trainingCost: null,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=16979/feral-charge",
                },
                {
                    id: "faerie_fire_feral_1",
                    ...talentAbilityMasterData.vanilla.Druid.faerie_fire_feral,
                    rank: 1,
                    requiresLevel: null,
                    description: [
                        "Decrease the armor of the target by 175 for 40 sec.  While affected, the target cannot stealth or turn invisible.",
                    ],
                    trainingCost: null,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=16857/faerie-fire-feral",
                },
                {
                    id: "faerie_fire_feral_2",
                    ...talentAbilityMasterData.vanilla.Druid.faerie_fire_feral,
                    rank: 2,
                    requiresLevel: 30,
                    description: [
                        "Decrease the armor of the target by 285 for 40 sec.  While affected, the target cannot stealth or turn invisible.",
                    ],
                    trainingCost: 300,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=17390/faerie-fire-feral",
                },
                {
                    id: "faerie_fire_feral_3",
                    ...talentAbilityMasterData.vanilla.Druid.faerie_fire_feral,
                    rank: 3,
                    requiresLevel: 42,
                    description: [
                        "Decrease the armor of the target by 395 for 40 sec.  While affected, the target cannot stealth or turn invisible.",
                    ],
                    trainingCost: 800,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=17391/faerie-fire-feral",
                },
                {
                    id: "faerie_fire_feral_4",
                    ...talentAbilityMasterData.vanilla.Druid.faerie_fire_feral,
                    rank: 4,
                    requiresLevel: 54,
                    description: [
                        "Decrease the armor of the target by 505 for 40 sec.  While affected, the target cannot stealth or turn invisible.",
                    ],
                    trainingCost: 1400,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=17392/faerie-fire-feral",
                },
            ],
            // druid - vanilla
            Restoration: [
                {
                    id: "insect_swarm_1",
                    ...talentAbilityMasterData.vanilla.Druid.insect_swarm,
                    rank: 1,
                    requiresLevel: null,
                    description: [
                        "The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 66 Nature damage over 12 sec.",
                    ],
                    spentResource: 45,
                    trainingCost: null,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=5570/insect-swarm",
                },
                {
                    id: "insect_swarm_2",
                    ...talentAbilityMasterData.vanilla.Druid.insect_swarm,
                    rank: 2,
                    requiresLevel: 30,
                    description: [
                        "The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 138 Nature damage over 12 sec.",
                    ],
                    spentResource: 85,
                    trainingCost: 300,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=24974/insect-swarm",
                },
                {
                    id: "insect_swarm_3",
                    ...talentAbilityMasterData.vanilla.Druid.insect_swarm,
                    rank: 3,
                    requiresLevel: 40,
                    description: [
                        "The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 174 Nature damage over 12 sec.",
                    ],
                    spentResource: 100,
                    trainingCost: 700,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=24975/insect-swarm",
                },
                {
                    id: "insect_swarm_4",
                    ...talentAbilityMasterData.vanilla.Druid.insect_swarm,
                    rank: 4,
                    requiresLevel: 50,
                    description: [
                        "The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 264 Nature damage over 12 sec.",
                    ],
                    spentResource: 140,
                    trainingCost: 1150,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=24976/insect-swarm",
                },
                {
                    id: "insect_swarm_5",
                    ...talentAbilityMasterData.vanilla.Druid.insect_swarm,
                    rank: 5,
                    requiresLevel: 60,
                    description: [
                        "The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 324 Nature damage over 12 sec.",
                    ],
                    spentResource: 160,
                    trainingCost: 1700,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=24977/insect-swarm",
                },
                {
                    id: "natures_swiftness",
                    ...talentAbilityMasterData.vanilla.Druid.natures_swiftness,
                    rank: null,
                    requiresLevel: null,
                    description: [
                        "When activated, your next Nature spell becomes an instant cast spell.",
                    ],
                    buffText: [
                        "Your next Nature spell will be an instant cast spell.",
                    ],
                    trainingCost: null,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=17116/natures-swiftness",
                },
                {
                    id: "swiftmend",
                    ...talentAbilityMasterData.vanilla.Druid.swiftmend,
                    rank: null,
                    requiresLevel: null,
                    description: [
                        "Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal them an amount equal to 12 sec of Rejuvenation or 18 sec of Regrowth.",
                    ],
                    trainingCost: null,
                    linkToWoWHead: "https://www.wowhead.com/classic/spell=18562/swiftmend",
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
        [DEATH_KNIGHT]: {
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
        [DEATH_KNIGHT]: {
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