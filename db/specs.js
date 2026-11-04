// specs.js
// Spec metadata for all 9 classic WoW classes.
// Icon values match defaultIcons in tc/tree-icons.js.

export const SPECS = Object.freeze({
    Druid: {
        Balance: {
            icon: 'spell_nature_starfall',
            description: 'Druids can take on the form of a wild moonkin to blast enemies from afar.',
            keyAbilities: ['Entangling Roots', 'Thorns', 'Soothe Animal', 'Hibernate', 'Innervate'],
        },
        'Feral Combat': {
            icon: 'ability_racial_bearform',
            description: 'Druids can take on the form of a durable bear or savage cat in order to claw and bite their enemies up close.',
            keyAbilities: ['Shred', 'Rake', 'Rip', 'Ferocious Bite', 'Maul', 'Swipe', 'Faerie Fire (Feral)'],
        },
        Restoration: {
            icon: 'spell_nature_healingtouch',
            description: 'By calling upon the powers of nature, druids are able to swiftly restore health to their injured allies.',
            keyAbilities: ['Regrowth', 'Rejuvenation', 'Healing Touch', 'Rebirth', 'Tranquility'],
        },
    },
    Hunter: {
        'Beast Mastery': {
            icon: 'ability_hunter_beasttaming',
            description: 'A master of the wild who can tame a wide variety of beasts to assist them in combat.',
            keyAbilities: ['Aspect of the Monkey', 'Aspect of the Hawk', 'Aspect of the Cheetah', 'Mend Pet', 'Bestial Wrath'],
        },
        Marksmanship: {
            icon: 'ability_marksmanship',
            description: 'A master archer or sharpshooter who excels in bringing down enemies from afar.',
            keyAbilities: ["Hunter's Mark", 'Aimed Shot', 'Multi-Shot', 'Rapid Fire', 'Trueshot Aura'],
        },
        Survival: {
            icon: 'ability_hunter_swiftstrike',
            description: 'A rugged tracker who favors using animal venom, explosives and traps as deadly weapons.',
            keyAbilities: ['Raptor Strike', 'Wing Clip', 'Feign Death', 'Freezing Trap', 'Wyvern Sting'],
        },
    },
    Mage: {
        Arcane: {
            icon: 'spell_holy_magicalsentry',
            description: 'Manipulate the arcane, destroying enemies with overwhelming power.',
            keyAbilities: ['Polymorph', 'Arcane Missiles', 'Blink', 'Arcane Explosion', 'Arcane Power'],
        },
        Fire: {
            icon: 'spell_fire_firebolt02',
            description: 'Ignite enemies with balls of fire and combustive flames.',
            keyAbilities: ['Fireball', 'Pyroblast', 'Fire Blast', 'Scorch', 'Flamestrike'],
        },
        Frost: {
            icon: 'spell_frost_frostbolt02',
            description: 'Freezes enemies in their tracks and shatters them with Frost magic.',
            keyAbilities: ['Frostbolt', 'Cone of Cold', 'Blizzard', 'Cold Snap', 'Ice Barrier'],
        },
    },
    Paladin: {
        Holy: {
            icon: 'spell_holy_holybolt',
            description: 'Invokes the power of the Light to protect and to heal.',
            keyAbilities: ['Holy Light', 'Flash of Light', 'Seal of Light', 'Lay on Hands', 'Holy Shock'],
        },
        Protection: {
            icon: 'spell_holy_devotionaura',
            description: 'Uses Holy magic to shield themselves and defend allies from attackers.',
            keyAbilities: ['Hammer of Justice', 'Blessing of Freedom', 'Blessing of Protection', 'Divine Shield', 'Holy Shield'],
        },
        Retribution: {
            icon: 'spell_holy_auraoflight',
            description: 'A righteous crusader who judges and punishes opponents with weapons and Holy magic.',
            keyAbilities: ['Blessing of Might', 'Seal of Command', 'Judgement', 'Sanctity Aura', 'Repentance'],
        },
    },
    Priest: {
        Discipline: {
            icon: 'spell_holy_wordfortitude',
            description: 'Uses magic to shield allies from taking damage as well as heal their wounds.',
            keyAbilities: ['Power Word: Shield', 'Power Word: Fortitude', 'Inner Fire', 'Mana Burn', 'Power Infusion'],
        },
        Holy: {
            icon: 'spell_holy_guardianspirit',
            description: 'A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.',
            keyAbilities: ['Renew', 'Flash Heal', 'Prayer of Healing', 'Greater Heal', 'Lightwell'],
        },
        Shadow: {
            icon: 'spell_shadow_shadowwordpain',
            description: 'Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.',
            keyAbilities: ['Mind Flay', 'Mind Blast', 'Psychic Scream', 'Shadow Word: Pain', 'Shadowform'],
        },
    },
    Rogue: {
        Assassination: {
            icon: 'ability_rogue_eviscerate',
            description: 'A deadly master of poisons who dispatches victims with vicious dagger strikes.',
            keyAbilities: ['Eviscerate', 'Ambush', 'Kidney Shot', 'Slice and Dice', 'Cold Blood'],
        },
        Combat: {
            icon: 'ability_backstab',
            description: 'A ruthless fugitive who uses agility and guile to stand toe-to-toe with enemies.',
            keyAbilities: ['Sinister Strike', 'Backstab', 'Gouge', 'Blade Flurry', 'Adrenaline Rush'],
        },
        Subtlety: {
            icon: 'ability_stealth',
            description: 'A dark stalker who leaps from the shadows to ambush their unsuspecting prey.',
            keyAbilities: ['Stealth', 'Sap', 'Blind', 'Hemorrhage', 'Preparation'],
        },
    },
    Shaman: {
        Elemental: {
            icon: 'spell_nature_lightning',
            description: 'The elemental force of the shamans can be used to damage enemies from afar with lightning strikes, earthquakes, and lava bursts.',
            keyAbilities: ['Lightning Bolt', 'Chain Lightning', 'Earth Shock', 'Fire Nova Totem', 'Elemental Mastery'],
        },
        Enhancement: {
            icon: 'spell_nature_lightningshield',
            description: 'Shamans enhance their weapons with elemental effects, empowering their blows with the power of fire, wind, or ice.',
            keyAbilities: ['Ghost Wolf', 'Strength of Earth Totem', 'Windfury Weapon', 'Windfury Totem', 'Stormstrike'],
        },
        Restoration: {
            icon: 'spell_nature_magicimmunity',
            description: 'By calling on their spiritual power, shamans can restore health to injured allies.',
            keyAbilities: ['Healing Wave', 'Lesser Healing Wave', 'Chain Heal', 'Poison Cleansing Totem', 'Mana Tide Totem'],
        },
    },
    Warlock: {
        Affliction: {
            icon: 'spell_shadow_deathcoil',
            description: 'A master of shadow magic who specializes in drains and damage-over-time spells.',
            keyAbilities: ['Corruption', 'Curse of Agony', 'Drain Soul', 'Siphon Life', 'Dark Pact'],
        },
        Demonology: {
            icon: 'spell_shadow_metamorphosis',
            description: 'A master of demons who compels demonic powers to aid them.',
            keyAbilities: ['Summon Imp', 'Summon Voidwalker', 'Fel Domination', 'Demonic Sacrifice', 'Soul Link'],
        },
        Destruction: {
            icon: 'spell_shadow_rainoffire',
            description: 'A master of chaos who calls down fire to turn and demolish enemies.',
            keyAbilities: ['Immolate', 'Shadow Bolt', 'Rain of Fire', 'Shadowburn', 'Conflagrate'],
        },
    },
    Warrior: {
        Arms: {
            icon: 'ability_warrior_savageblow',
            description: 'A battle-hardened master of two-handed weapons, using mobility and overpowering attacks to strike their opponents down.',
            keyAbilities: ['Mortal Strike', 'Heroic Strike', 'Hamstring', 'Overpower', 'Retaliation'],
        },
        Fury: {
            icon: 'ability_warrior_innerrage',
            description: 'A furious berserker wielding a weapon in each hand, unleashing a flurry of attacks to carve their opponents to pieces.',
            keyAbilities: ['Bloodthirst', 'Battle Shout', 'Whirlwind', 'Execute', 'Recklessness'],
        },
        Protection: {
            icon: 'ability_warrior_defensivestance',
            description: 'A stalwart protector who uses a shield to safeguard themselves and their allies.',
            keyAbilities: ['Shield Slam', 'Sunder Armor', 'Shield Block', 'Revenge', 'Shield Wall'],
        },
    },
});
