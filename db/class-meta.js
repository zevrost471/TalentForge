// class-meta.js

import { armor }       from './armor.js';
import { weaponItems } from './weapon-items.js';
import { resources }   from './resources.js';
import { classes }     from './classes.js';

const { CLOTH, LEATHER, MAIL, PLATE } = armor.TYPES;
const { MANA, RAGE, ENERGY } = resources;
const {
    ONE_HANDED: { DAGGER, FIST_WEAPON, AXE: ONE_AXE, MACE: ONE_MACE, SWORD: ONE_SWORD },
    TWO_HANDED: { POLEARM, AXE: TWO_AXE, MACE: TWO_MACE, STAFF, SWORD: TWO_SWORD },
    RANGED: { BOW, CROSSBOW, GUN, WAND, THROWN },
} = weaponItems;

export const CLASS_META = Object.freeze({
    [classes.DRUID]: {
        id: 11,
        armorTypes: [
            { type: CLOTH },
            { type: LEATHER },
        ],
        resources: [MANA, RAGE, ENERGY],
        weapons: [DAGGER, FIST_WEAPON, ONE_MACE, TWO_MACE, STAFF],
        specs: ['Balance', 'Feral Combat', 'Restoration'],
        roles: ['Tank', 'Healer', 'Melee DPS', 'Caster DPS'],
    },
    [classes.HUNTER]: {
        id: 3,
        armorTypes: [
            { type: CLOTH },
            { type: LEATHER },
            { type: MAIL, learnedAt: 40 },
        ],
        resources: [MANA],
        weapons: [DAGGER, FIST_WEAPON, ONE_AXE, TWO_AXE, POLEARM, ONE_SWORD, TWO_SWORD, STAFF, BOW, CROSSBOW, GUN, THROWN],
        specs: ['Beast Mastery', 'Marksmanship', 'Survival'],
        roles: ['Ranged DPS'],
    },
    [classes.MAGE]: {
        id: 8,
        armorTypes: [
            { type: CLOTH },
        ],
        resources: [MANA],
        weapons: [DAGGER, ONE_SWORD, STAFF, WAND],
        specs: ['Arcane', 'Fire', 'Frost'],
        roles: ['Caster DPS'],
    },
    [classes.PALADIN]: {
        id: 2,
        armorTypes: [
            { type: CLOTH },
            { type: LEATHER },
            { type: MAIL },
            { type: PLATE, learnedAt: 40 },
        ],
        resources: [MANA],
        weapons: [ONE_AXE, TWO_AXE, ONE_MACE, TWO_MACE, ONE_SWORD, TWO_SWORD, POLEARM],
        specs: ['Holy', 'Protection', 'Retribution'],
        roles: ['Tank', 'Healer', 'Melee DPS'],
    },
    [classes.PRIEST]: {
        id: 5,
        armorTypes: [
            { type: CLOTH },
        ],
        resources: [MANA],
        weapons: [DAGGER, ONE_MACE, ONE_SWORD, STAFF, WAND],
        specs: ['Discipline', 'Holy', 'Shadow'],
        roles: ['Healer', 'Caster DPS'],
    },
    [classes.ROGUE]: {
        id: 4,
        armorTypes: [
            { type: CLOTH },
            { type: LEATHER },
        ],
        resources: [ENERGY],
        weapons: [DAGGER, FIST_WEAPON, ONE_MACE, ONE_SWORD, BOW, CROSSBOW, GUN, THROWN],
        specs: ['Assassination', 'Combat', 'Subtlety'],
        roles: ['Melee DPS'],
    },
    [classes.SHAMAN]: {
        id: 7,
        armorTypes: [
            { type: CLOTH },
            { type: LEATHER },
            { type: MAIL, learnedAt: 40 },
        ],
        resources: [MANA],
        weapons: [DAGGER, FIST_WEAPON, ONE_AXE, TWO_AXE, ONE_MACE, TWO_MACE, STAFF],
        specs: ['Elemental', 'Enhancement', 'Restoration'],
        roles: ['Healer', 'Melee DPS', 'Caster DPS'],
    },
    [classes.WARLOCK]: {
        id: 9,
        armorTypes: [
            { type: CLOTH },
        ],
        resources: [MANA],
        weapons: [DAGGER, ONE_SWORD, STAFF, WAND],
        specs: ['Affliction', 'Demonology', 'Destruction'],
        roles: ['Caster DPS'],
    },
    [classes.WARRIOR]: {
        id: 1,
        armorTypes: [
            { type: CLOTH },
            { type: LEATHER },
            { type: MAIL },
            { type: PLATE, learnedAt: 40 },
        ],
        resources: [RAGE],
        weapons: [DAGGER, FIST_WEAPON, ONE_AXE, TWO_AXE, ONE_MACE, TWO_MACE, ONE_SWORD, TWO_SWORD, POLEARM, STAFF, BOW, CROSSBOW, GUN, THROWN],
        specs: ['Arms', 'Fury', 'Protection'],
        roles: ['Tank', 'Melee DPS'],
    },
});
