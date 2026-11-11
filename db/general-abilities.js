// general-abilities.js

export const COMBAT_ABILITY_DEFS = {
    parry: {
        name: 'Parry',
        icon: 'ability_parry',
        description: ['Gives a chance to parry enemy melee attacks.'],
        requiresMeleeWeapon: true,
    },
    dodge: {
        name: 'Dodge',
        icon: 'spell_nature_invisibilty',
        description: ['Gives a chance to dodge enemy melee attacks.'],
    },
    block: {
        name: 'Block',
        icon: 'ability_defend',
        description: ['Gives a chance to block enemy melee and ranged attacks.'],
        requiresShield: true
    },
    dual_wield: {
        name: 'Dual Wield',
        icon: 'ability_dualwield',
        description: ['Allows one-hand and off-hand weapons to be equipped in the off-hand.'],
    },
    shoot_bow: {
        name: 'Shoot Bow',
        icon: 'ability_marksmanship',
        description: ['Shoot your bow at the target.'],
        isInstant: true,
        minRange: 8,
        maxRange: 30,
    },
    shoot_crossbow: {
        name: 'Shoot Crossbow',
        icon: 'ability_marksmanship',
        description: ['Shoot your crossbow at the target.'],
        isInstant: true,
        minRange: 8,
        maxRange: 30,
    },
    shoot_gun: {
        name: 'Shoot Gun',
        icon: 'ability_marksmanship',
        description: ['Shoot your gun at the target.'],
        isInstant: true,
        minRange: 8,
        maxRange: 30,
    },
    shoot_wand: {
        name: 'Shoot',
        icon: 'ability_shootwand',
        description: ['Shoot your wand at the target.'],
        isInstant: true,
        range: 30,
    },
    throw: {
        name: 'Throw',
        icon: 'ability_throw',
        description: ['Hurl a thrown weapon at the target.'],
        isInstant: true,
        minRange: 8,
        maxRange: 30,
    },
    attack: {
        name: 'Attack',
        icon: 'ability_meleeattack',
        description: ['Initiates combat, dealing weapon damage to the target.'],
        isActive: true,
        isInstant: true,
    },
};

// Which combat skills each class has (vanilla).
export const GENERAL_COMBAT_ABILITIES_PER_CLASS = {
    Druid:   [
        { type: COMBAT_ABILITY_DEFS.attack },
        { type: COMBAT_ABILITY_DEFS.dodge },
    ],
    Hunter:  [
        { type: COMBAT_ABILITY_DEFS.attack },
        { type: COMBAT_ABILITY_DEFS.dodge },
        { type: COMBAT_ABILITY_DEFS.parry },
        { type: COMBAT_ABILITY_DEFS.dual_wield },
        { type: COMBAT_ABILITY_DEFS.shoot_bow },
        { type: COMBAT_ABILITY_DEFS.shoot_crossbow },
        { type: COMBAT_ABILITY_DEFS.shoot_gun },
        { type: COMBAT_ABILITY_DEFS.throw },
    ],
    Mage:  [
        { type: COMBAT_ABILITY_DEFS.attack },
        { type: COMBAT_ABILITY_DEFS.dodge },
        { type: COMBAT_ABILITY_DEFS.shoot_wand },
    ],
    Paladin:  [
        { type: COMBAT_ABILITY_DEFS.attack },
        { type: COMBAT_ABILITY_DEFS.block },
        { type: COMBAT_ABILITY_DEFS.dodge },
        { type: COMBAT_ABILITY_DEFS.parry },
    ],
    Priest:  [
        { type: COMBAT_ABILITY_DEFS.attack },
        { type: COMBAT_ABILITY_DEFS.dodge },
        { type: COMBAT_ABILITY_DEFS.shoot_wand },
    ],
    Rogue:  [
        { type: COMBAT_ABILITY_DEFS.attack },
        { type: COMBAT_ABILITY_DEFS.dodge },
        { type: COMBAT_ABILITY_DEFS.parry },
        { type: COMBAT_ABILITY_DEFS.dual_wield },
        { type: COMBAT_ABILITY_DEFS.shoot_bow },
        { type: COMBAT_ABILITY_DEFS.shoot_crossbow },
        { type: COMBAT_ABILITY_DEFS.shoot_gun },
        { type: COMBAT_ABILITY_DEFS.throw },
    ],
    Shaman:  [
        { type: COMBAT_ABILITY_DEFS.attack },
        { type: COMBAT_ABILITY_DEFS.block },
        { type: COMBAT_ABILITY_DEFS.dodge },
        { type: COMBAT_ABILITY_DEFS.parry, requiresTalent: true },
    ],
    Warlock:  [
        { type: COMBAT_ABILITY_DEFS.attack },
        { type: COMBAT_ABILITY_DEFS.dodge },
        { type: COMBAT_ABILITY_DEFS.shoot_wand },
    ],
    Warrior:  [
        { type: COMBAT_ABILITY_DEFS.attack },
        { type: COMBAT_ABILITY_DEFS.block },
        { type: COMBAT_ABILITY_DEFS.dodge },
        { type: COMBAT_ABILITY_DEFS.parry },
        { type: COMBAT_ABILITY_DEFS.dual_wield },
        { type: COMBAT_ABILITY_DEFS.shoot_bow },
        { type: COMBAT_ABILITY_DEFS.shoot_crossbow },
        { type: COMBAT_ABILITY_DEFS.shoot_gun },
        { type: COMBAT_ABILITY_DEFS.throw },
    ],
};

export const ADDITIONAL_GENERAL_ABILITIES_PER_EXPANSION = {
    tbc: {
        Shaman: [
            { type: COMBAT_ABILITY_DEFS.dual_wield, requiresTalent: true },
        ],
    },
    wotlk: {
        Shaman: [
            { type: COMBAT_ABILITY_DEFS.dual_wield, requiresTalent: true },
        ],
    },
    cataclysm: {
        Shaman: [
            { type: COMBAT_ABILITY_DEFS.dual_wield, requiresTalent: true },
        ],
    },
};