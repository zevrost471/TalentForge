// tree-icons.js    

// Default icons (Vanilla/TBC/WotLK)
const defaultIcons = {
    druid: {
        Balance: { icon: "spell_nature_starfall" },
        "Feral Combat": { icon: "ability_racial_bearform" },
        Restoration: { icon: "spell_nature_healingtouch" }
    },
    hunter: {
        "Beast Mastery": { icon: "ability_hunter_beasttaming" },
        Marksmanship: { icon: "ability_marksmanship" },
        Survival: { icon: "ability_hunter_swiftstrike" },
        // old names for MM and SV
        "Ranged Combat": { icon: "ability_marksmanship" },
        Outdoorsmanship: { icon: "ability_hunter_swiftstrike" }
    },
    mage: {
        Arcane: { icon: "spell_holy_magicalsentry" },
        Fire: { icon: "spell_fire_firebolt02" },
        Frost: { icon: "spell_frost_frostbolt02" }
    },
    paladin: {
        Holy: { icon: "spell_holy_holybolt" },
        Protection: { icon: "spell_holy_devotionaura" },
        Retribution: { icon: "spell_holy_auraoflight" }
    },
    priest: {
        Discipline: { icon: "spell_holy_wordfortitude" },
        Holy: { icon: "spell_holy_guardianspirit" },
        Shadow: { icon: "spell_shadow_shadowwordpain" }
    },
    rogue: {
        Assassination: { icon: "ability_rogue_eviscerate" },
        Combat: { icon: "ability_backstab" },
        Subtlety: { icon: "ability_stealth" }
    },
    shaman: {
        Elemental: { icon: "spell_nature_lightning" },
        Enhancement: { icon: "spell_nature_lightningshield" },
        Restoration: { icon: "spell_nature_magicimmunity" }
    },
    warlock: {
        Affliction: { icon: "spell_shadow_deathcoil" },
        Demonology: { icon: "spell_shadow_metamorphosis" },
        Destruction: { icon: "spell_shadow_rainoffire" }
    },
    warrior: {
        Arms: { icon: "ability_warrior_savageblow" },
        Fury: { icon: "ability_warrior_innerrage" },
        Protection: { icon: "ability_warrior_defensivestance" }
    },
    deathknight: {
        Blood: { icon: "spell_deathknight_bloodpresence" },
        Frost: { icon: "spell_deathknight_frostpresence" },
        Unholy: { icon: "spell_deathknight_unholypresence" }
    }
};

// Expansion-specific overrides
const cataOverrides = {
    hunter: {
        "Beast Mastery": { icon: "ability_hunter_bestialdiscipline" },
        Marksmanship: { icon: "ability_hunter_focusedaim" },
        Survival: { icon: "ability_hunter_camouflage" }
    },
    paladin: {
        Protection: { icon: "ability_paladin_shieldofthetemplar" }
    },
    priest: {
        Discipline: { icon: "spell_holy_powerwordshield" }
    }
    // add only those that differ
};