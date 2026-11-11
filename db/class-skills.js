// class-skills.js

import { ARMOR_SKILLS } from './armor-proficiencies.js';
import { WEAPON_SKILLS } from './weapon-proficiencies.js';

const CLASS_SKILLS = {
    ARMOR_SKILLS,
    WEAPON_SKILLS,
    defense: {
        name: 'Defense',
        icon: 'ability_racial_shadowmeld',
        description: ['Reduces the chance that enemies will score a critical hit against you.'],
    },
    unarmed: {
        name: 'Unarmed',
        icon: 'inv_gauntlets_04',
        description: ['Allows you to fight without a weapon equipped.'],
    },
};

// Which skills each class has (baseline/vanilla)
export const CLASS_SKILLS_PER_CLASS = {
    Druid:   {
        armorTypes: [
            { type: CLASS_SKILLS.ARMOR_SKILLS.cloth },
            { type: CLASS_SKILLS.ARMOR_SKILLS.leather },
            { type: CLASS_SKILLS.ARMOR_SKILLS.fetish },
        ],
        weaponTypes: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.fist_weapons },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
        ],
        others: [
            { type: CLASS_SKILLS.defense },
            { type: CLASS_SKILLS.unarmed },
        ],
    },
    Hunter:  {
        armorTypes: [
            { type: CLASS_SKILLS.ARMOR_SKILLS.cloth },
            { type: CLASS_SKILLS.ARMOR_SKILLS.leather },
            { type: CLASS_SKILLS.ARMOR_SKILLS.mail, learnedAt: 40 },
        ],
        weaponTypes: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.fist_weapons },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_swords },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_swords },
            { type: CLASS_SKILLS.WEAPON_SKILLS.polearms },
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
            { type: CLASS_SKILLS.WEAPON_SKILLS.bows },
            { type: CLASS_SKILLS.WEAPON_SKILLS.crossbows },
            { type: CLASS_SKILLS.WEAPON_SKILLS.guns },
            { type: CLASS_SKILLS.WEAPON_SKILLS.thrown },
        ],
        others: [
            { type: CLASS_SKILLS.defense },
            { type: CLASS_SKILLS.unarmed },
        ],
    },
    Mage:    {
        armorTypes: [
            { type: CLASS_SKILLS.ARMOR_SKILLS.cloth },
        ],
        weaponTypes: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_swords },
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        others: [
            { type: CLASS_SKILLS.defense },
            { type: CLASS_SKILLS.unarmed },
        ],
    },
    Paladin: {
        armorTypes: [
            { type: CLASS_SKILLS.ARMOR_SKILLS.cloth },
            { type: CLASS_SKILLS.ARMOR_SKILLS.leather },
            { type: CLASS_SKILLS.ARMOR_SKILLS.mail },
            { type: CLASS_SKILLS.ARMOR_SKILLS.plate, learnedAt: 40 },
            { type: CLASS_SKILLS.ARMOR_SKILLS.shield },
            { type: CLASS_SKILLS.ARMOR_SKILLS.libram },
        ],
        weaponTypes: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_swords },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_swords },
            { type: CLASS_SKILLS.WEAPON_SKILLS.polearms },
        ],
        others: [
            { type: CLASS_SKILLS.defense },
            { type: CLASS_SKILLS.unarmed },
        ],
    },
    Priest:  {
        armorTypes: [
            { type: CLASS_SKILLS.ARMOR_SKILLS.cloth },
        ],
        weaponTypes: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        others: [
            { type: CLASS_SKILLS.defense },
            { type: CLASS_SKILLS.unarmed },
        ],
    },
    Rogue:   {
        armorTypes: [
            { type: CLASS_SKILLS.ARMOR_SKILLS.cloth },
            { type: CLASS_SKILLS.ARMOR_SKILLS.leather },
        ],
        weaponTypes: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.fist_weapons },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_swords },
            { type: CLASS_SKILLS.WEAPON_SKILLS.bows },
            { type: CLASS_SKILLS.WEAPON_SKILLS.crossbows },
            { type: CLASS_SKILLS.WEAPON_SKILLS.guns },
            { type: CLASS_SKILLS.WEAPON_SKILLS.thrown },
        ],        
        others: [
            { type: CLASS_SKILLS.defense },
            { type: CLASS_SKILLS.unarmed },
        ],
    },
    Shaman:  {
        armorTypes: [
            { type: CLASS_SKILLS.ARMOR_SKILLS.cloth },
            { type: CLASS_SKILLS.ARMOR_SKILLS.leather },
            { type: CLASS_SKILLS.ARMOR_SKILLS.mail, learnedAt: 40 },
            { type: CLASS_SKILLS.ARMOR_SKILLS.shield },
            { type: CLASS_SKILLS.ARMOR_SKILLS.totem },
        ],
        weaponTypes: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.fist_weapons },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_axes, requiresTalent: true },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_maces, requiresTalent: true },
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
        ],
        others: [
            { type: CLASS_SKILLS.defense },
            { type: CLASS_SKILLS.unarmed },
        ],
    },
    Warlock: {
        armorTypes: [
            { type: CLASS_SKILLS.ARMOR_SKILLS.cloth },
        ],
        weaponTypes: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_swords },
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        others: [
            { type: CLASS_SKILLS.defense },
            { type: CLASS_SKILLS.unarmed },
        ],
    },
    Warrior: {
        armorTypes: [
            { type: CLASS_SKILLS.ARMOR_SKILLS.cloth },
            { type: CLASS_SKILLS.ARMOR_SKILLS.leather },
            { type: CLASS_SKILLS.ARMOR_SKILLS.mail },
            { type: CLASS_SKILLS.ARMOR_SKILLS.plate, learnedAt: 40 },
            { type: CLASS_SKILLS.ARMOR_SKILLS.shield },
        ],
        weaponTypes: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.fist_weapons },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_swords },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_swords },
            { type: CLASS_SKILLS.WEAPON_SKILLS.polearms },
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
            { type: CLASS_SKILLS.WEAPON_SKILLS.bows },
            { type: CLASS_SKILLS.WEAPON_SKILLS.crossbows },
            { type: CLASS_SKILLS.WEAPON_SKILLS.guns },
            { type: CLASS_SKILLS.WEAPON_SKILLS.thrown },
        ],
        others: [
            { type: CLASS_SKILLS.defense },
            { type: CLASS_SKILLS.unarmed },
        ],
    },
};

export const ADDITIONAL_WEAPON_SKILLS_PER_EXPANSION = {
    wotlk: {
        Druid: [
            CLASS_SKILLS.WEAPON_SKILLS.polearms,
        ],
        Rogue: [
            CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes,
        ],
    },
    cataclysm: {
        Druid: [
            CLASS_SKILLS.WEAPON_SKILLS.polearms,
        ],
        Rogue: [
            CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes,
        ],
    },
};

export const WEAPON_SKILL_CHANGES_PER_EXPANSION = {
    tbc: {
        Shaman: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_axes, requiresTalent: false },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_maces, requiresTalent: false },
        ],
    },
    wotlk: {
        Shaman: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_axes,  requiresTalent: false },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_maces, requiresTalent: false },
        ],
    },
    cataclysm: {
        Shaman: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_axes,  requiresTalent: false },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_maces, requiresTalent: false },
        ],
    },
};

// Which weapon skills each race has at level 1 (baseline/vanilla)
export const DEFAULT_WEAPON_SKILLS_PER_RACE = {
    druid: {
        night_elf: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
        ],
        tauren: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
        ],
    },
    hunter: {
        night_elf: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.bows },
        ],
        dwarf: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.guns },
        ],
        orc: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.bows },
        ],
        troll: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.bows },
        ],
        tauren: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.guns },
        ],
    },
    mage: {
        human: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        gnome: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        troll: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        undead: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.staves },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
    },
    paladin: {
        human: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_maces },
        ],
        dwarf: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_maces },
        ],
    },
    priest: {
        human: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        night_elf: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        dwarf: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        troll: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        undead: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
    },
    rogue: {
        human: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.thrown },
        ],
        night_elf: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.thrown },
        ],
        dwarf: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.thrown },
        ],
        gnome: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.thrown },
        ],
        orc: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.thrown },
        ],
        troll: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.thrown },
        ],
        undead: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.thrown },
        ],
    },
    warlock: {
        human: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        gnome: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        orc: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
        undead: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.wands },
        ],
    },
    warrior: {
        human: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_swords },
        ],
        night_elf: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_swords },
        ],
        dwarf: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_axes },
        ],
        gnome: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_swords },
        ],
        orc: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_swords },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_axes },
        ],
        troll: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.daggers },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.thrown },
        ],
        tauren: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_maces },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_maces },
        ],
        undead: [
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_axes },
            { type: CLASS_SKILLS.WEAPON_SKILLS.one_handed_swords },
            { type: CLASS_SKILLS.WEAPON_SKILLS.two_handed_swords },
        ],
    },
};