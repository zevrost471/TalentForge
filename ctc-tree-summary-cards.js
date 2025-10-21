// ctc-tree-summary-cards.js

export const cataSpecCards = {
    cataclysm: {
        deathknight: {
            Blood: {
                specIcon: "spell_deathknight_bloodpresence",
                primary:
                    [
                        {
                            name: "Heart Strike",
                            icon: "inv_weapon_shortblade_40",
                            description: [
                                "Instantly strike the target and up to two additional nearby enemies, causing 175% weapon damage plus 819 on the primary target, with each additional enemy struck taking 25% less damage than the previous target.  Damage dealt to each target is increased by an additional 15% for each of your diseases present."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: null,
                            spentResource: 10,
                            range: 0,
                            requiresWeapon: 1
                        }
                    ],
                secondary: [
                    {
                        name: "Veteran of the Third War",
                        icon: "spell_misc_warsongfocus",
                        description: [
                            "Increases your total Stamina by 9%, your expertise by 6, and reduces the cooldown of Outbreak by 30 sec."
                        ],
                        isActive: false
                    },
                    {
                        name: "Blood Rites",
                        icon: "spell_deathknight_bloodtap",
                        description: [
                            "Whenever you hit with Death Strike or Obliterate, the Frost and Unholy Runes will become Death Runes when they activate.  Death Runes count as a Blood, Frost or Unholy Rune."
                        ],
                        isActive: false
                    },
                    {
                        name: "Vengeance",
                        icon: "ability_paladin_shieldofvengeance",
                        description: [
                            "Each time you take damage, you gain 5% of the damage taken as attack power, up to a maximum of 10% of your health."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Blood Shield",
                        icon: "spell_deathknight_deathstrike",
                        description: [
                            "Each time you heal yourself with Death Strike while in Blood Presence, you gain 50% of the amount healed as a damage absorption shield.  Each point of Mastery increases the shield by an additional 6.25%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A dark guardian who manipulates and corrupts life energy to sustain &lt;him/her&gt;self in the face of an enemy onslaught."
            },
            Frost: {
                specIcon: "spell_deathknight_frostpresence",
                primary:
                    [
                        {
                            name: "Frost Strike",
                            icon: "spell_deathknight_empowerruneblade2",
                            description: [
                                "Instantly strike the enemy, causing 130% weapon damage plus 278 as Frost damage."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: null,
                            spentResource: 40,
                            range: 0,
                            requiresWeapon: 1
                        }
                    ],
                secondary: [
                    {
                        name: "Icy Talons",
                        icon: "spell_deathknight_icytalons",
                        description: [
                            "Your melee attack speed is increased by 20%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Blood of the North",
                        icon: "inv_weapon_shortblade_79",
                        description: [
                            "Permanently transforms your Blood Runes into Death Runes. Death Runes count as a Blood, Frost, or Unholy Rune."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Frozen Heart",
                        icon: "inv_misc_gem_sapphire_01",
                        description: [
                            "Increases all Frost damage done by 16%.  Each point of Mastery increases Frost damage by an additional 2.0%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "An icy harbinger of doom, channeling runic power and delivering rapid weapon strikes."
            },
            Unholy: {
                specIcon: "spell_deathknight_unholypresence",
                primary:
                    [
                        {
                            name: "Scourge Strike",
                            icon: "spell_deathknight_scourgestrike",
                            description: [
                                "An unholy strike that deals 100% of weapon damage as Physical damage plus 625.  In addition, for each of your diseases on your target, you deal an additional 18% of the Physical damage done as Shadow damage."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: null,
                            spentResource: 10,
                            range: 0,
                            requiresWeapon: 1
                        }
                    ],
                secondary: [
                    {
                        name: "Master of Ghouls",
                        icon: "spell_shadow_animatedead",
                        description: [
                            "Reduces the cooldown on Raise Dead by 60 sec, and the Ghoul summoned by your Raise Dead spell is considered a pet under your control.  Unlike normal Death Knight Ghouls, your pet does not have a limited duration."
                        ],
                        isActive: false
                    },
                    {
                        name: "Reaping",
                        icon: "spell_shadow_shadetruesight",
                        description: [
                            "Whenever you hit with Blood Strike, Pestilence, or Festering Strike, the Runes spent will become Death Runes when they activate.  Death Runes count as a Blood, Frost or Unholy Rune."
                        ],
                        isActive: false
                    },
                    {
                        name: "Unholy Might",
                        icon: "spell_shadow_unholystrength",
                        description: [
                            "Dark power courses through your limbs, increasing your Strength by 25%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Dreadblade",
                        icon: "achievement_zone_westernplaguelands_01",
                        description: [
                            "Increases all Shadow damage done by 20%.  Each point of Mastery increases Shadow damage by an additional 2.5%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A master of death and decay, spreading infection and controlling undead minions to do &lt;his/her&gt; bidding."
            }
        },
        druid: {
            Balance: {
                specIcon: "spell_nature_starfall",
                primary:
                    [
                        {
                            name: "Starsurge",
                            icon: "spell_arcane_arcane03",
                            description: [
                                "You fuse the power of the moon and sun, launching a devastating blast of energy at the target. Causes 1212 Spellstorm damage to the target and generates 15 Lunar or Solar energy, whichever is more beneficial to you."
                            ],
                            isActive: true,
                            castTime: 2,
                            isChanneled: false,
                            cooldown: 15,
                            spentResource: 11,
                            range: 40,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Moonfury",
                        icon: "spell_nature_moonglow",
                        description: [
                            "Arcane and Nature spell damage increased by 10%.<br><br>Increases the critical strike damage bonus of your Wrath, Moonfire, Starfire, Starsurge, Insect Swarm and Starfall spells by 100%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Total Eclipse",
                        icon: "ability_druid_eclipse",
                        description: [
                            "Increases the bonus damage from Eclipse by 16%.  Each point of Mastery increases the bonus by an additional 2.0%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance."
            },
            "Feral Combat": {
                specIcon: "ability_racial_bearform",
                primary:
                    [
                        {
                            name: "Aggression",
                            icon: "ability_druid_predatoryinstincts",
                            description: [
                                "Increases your attack power by 25%."
                            ],
                            isActive: false
                        }
                    ],
                secondary: [
                    {
                        name: "Vengeance",
                        icon: "ability_paladin_shieldofvengeance",
                        description: [
                            "Each time you take damage while in Bear Form, you gain 5% of the damage taken as attack power, up to a maximum of 10% of your health.  Entering Cat Form will cancel this effect."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mangle",
                        icon: "ability_druid_mangle2",
                        description: [
                            "Mangle the target, inflicting damage and causing the target to take additional damage from bleed effects for 1 min.  This ability can be used in Cat Form or Bear Form."
                        ],
                        isActive: true,
                        castTime: null,
                        cooldown: null,
                        spentResource: null,
                        range: null,
                        requiresWeapon: 0
                    },
                    {
                        name: "Feral Instinct",
                        icon: "ability_ambush",
                        description: [
                            "Reduces the chance enemies have to detect you while Prowling."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Savage Defender",
                        icon: "ability_racial_cannibalize",
                        description: [
                            "Increases the damage absorbed by your Savage Defense ability by 32%.    Each point of Mastery increases the absorb by an additional 4%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Razor Claws",
                        icon: "inv_misc_monsterclaw_05",
                        description: [
                            "Increases the damage done by your bleed abilities by 25%.  Each point of Mastery increases bleed damage by an additional 3.1%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "Takes on the form of a great cat to deal damage with bleeds and bites or a mighty bear to absorb damage and protect allies."
            },
            Restoration: {
                specIcon: "spell_nature_healingtouch",
                primary:
                    [
                        {
                            name: "Swiftmend",
                            icon: "inv_relics_idolofrejuvenation",
                            description: [
                                "Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal the target for 5229."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 15,
                            spentResource: 10,
                            range: 40,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Meditation",
                        icon: "spell_nature_sleep",
                        description: [
                            "Allows 50% of your mana regeneration from Spirit to continue while in combat."
                        ],
                        isActive: false
                    },
                    {
                        name: "Gift of Nature",
                        icon: "spell_nature_spiritarmor",
                        description: [
                            "Healing increased by 25%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Disentanglement",
                        icon: "ability_hunter_animalhandler",
                        description: [
                            "Allows the druid to clear all roots when Shapeshifting in addition to snares."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Harmony",
                        icon: "classic_spell_nature_healingway",
                        description: [
                            "Your direct healing is increased by an additional 10% and casting your direct healing spells grants you an additional 10% bonus to periodic healing for 10 sec.  Each point of Mastery increases each bonus by an additional 1.25%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "Uses heal-over-time Nature spells to keep allies alive, taking on the form of a tree when the need is most urgent."
            }
        },
        hunter: {
            "Beast Mastery": {
                specIcon: "ability_hunter_bestialdiscipline",
                primary:
                    [
                        {
                            name: "Intimidation",
                            icon: "ability_devour",
                            description: [
                                "Command your pet to intimidate the target, causing a high amount of threat and stunning the target for 3 sec. Lasts 15 sec."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 60,
                            spentResource: null,
                            range: 100,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Animal Handler",
                        icon: "ability_hunter_animalhandler",
                        description: [
                            "Attack Power increased by 30%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Master of Beasts",
                        icon: "ability_hunter_beasttaming",
                        description: [
                            "Increases the damage done by your pets by 13.36%.  Each point of Mastery increases pet damage by an additional 1.67%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A master of the wild who can tame a wide variety of beasts to assist <him/her> in combat."
            },
            Marksmanship: {
                specIcon: "ability_hunter_focusedaim",
                primary:
                    [
                        {
                            name: "Aimed Shot",
                            icon: "inv_spear_07",
                            description: [
                                "A powerful aimed shot that deals 160% ranged weapon damage plus [(Ranged attack power * 0.724) + 777]."
                            ],
                            isActive: true,
                            castTime: 2.9,
                            isChanneled: false,
                            cooldown: null,
                            spentResource: 50,
                            range: 40,
                            requiresWeapon: 2
                        }
                    ],
                secondary: [
                    {
                        name: "Artisan Quiver",
                        icon: "inv_misc_quiver_06",
                        description: [
                            "Auto Shot damage increased by 15%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Wild Quiver",
                        icon: "ability_hunter_wildquiver",
                        description: [
                            "Grants a 16.8% chance for your ranged attacks to also instantly fire an additional ranged shot.  Each point of Mastery increases the chance by an additional 2.1%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A master archer or sharpshooter who excels in bringing down enemies from afar."
            },
            Survival: {
                specIcon: "ability_hunter_camouflage",
                primary:
                    [
                        {
                            name: "Explosive Shot",
                            icon: "ability_hunter_explosiveshot",
                            description: [
                                "You fire an explosive charge into the enemy target, dealing (Ranged attack power * 0.273 + 449) Fire damage. The charge will blast the target every second for an additional 2 sec."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 6,
                            spentResource: 50,
                            range: 40,
                            requiresWeapon: 2
                        }
                    ],
                secondary: [
                    {
                        name: "Into the Wilderness",
                        icon: "achievement_zone_alteracmountains_01",
                        description: [
                            "Agility increased by 10%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Essence of the Viper",
                        icon: "spell_frost_arcticwinds",
                        description: [
                            "Increases all magical damage you deal by 8%.  Each point of Mastery increases magical damage by an additional 1.0%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A rugged tracker who favors using animal venom, explosives and traps as deadly weapons."
            }
        },
        mage: {
            Arcane: {
                specIcon: "spell_holy_magicalsentry",
                primary:
                    [
                        {
                            name: "Arcane Barrage",
                            icon: "ability_mage_arcanebarrage",
                            description: [
                                "Launches bolts of arcane energy at the enemy target, causing 1186 Arcane damage."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 4,
                            spentResource: 11,
                            range: 40,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Arcane Specialization",
                        icon: "spell_fire_twilightfire",
                        description: [
                            "Increases the damage of your Arcane spells by 25%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Mana Adept",
                        icon: "spell_arcane_manatap",
                        description: [
                            "Increases all spell damage done by up to 12%, based on the amount of mana the Mage has unspent.  Each point of Mastery increases damage done by up to an additional 1.5%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "Manipulates arcane energies, playing with the very fabric of time and space."
            },
            Fire: {
                specIcon: "spell_fire_firebolt02",
                primary:
                    [
                        {
                            name: "Pyroblast",
                            icon: "spell_fire_fireball02",
                            description: [
                                "Hurls an immense fiery boulder that causes 1259 Fire damage and an additional 56 Fire damage over 12 sec."
                            ],
                            isActive: true,
                            castTime: 5,
                            isChanneled: false,
                            cooldown: null,
                            spentResource: 17,
                            range: 40,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Fire Specialization",
                        icon: "spell_fire_fire",
                        description: [
                            "Increases the damage of your Fire spells by 25%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Flashburn",
                        icon: "spell_fire_selfdestruct",
                        description: [
                            "Increases the damage done by all your periodic fire damage effects by 22.4%.  Each point of Mastery increases periodic damage done by an additional 2.8%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "Ignites enemies with balls of fire and the breath of dragons."
            },
            Frost: {
                specIcon: "spell_frost_frostbolt02",
                primary:
                    [
                        {
                            name: "Summon Water Elemental",
                            icon: "spell_frost_summonwaterelemental_2",
                            description: [
                                "Summon a Water Elemental to fight for the caster."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 180,
                            spentResource: 16,
                            range: null,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Frost Specialization",
                        icon: "spell_fire_bluefire",
                        description: [
                            "Increases the damage of your Frost spells by 25% and of your Frostbolt spell by an additional 15%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Frostburn",
                        icon: "spell_frost_frostarmor",
                        description: [
                            "All your spells deal 5% increased damage against Frozen targets. Each point of Mastery increases damage by an additional 2.5%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "Freezes enemies in their tracks and shatters them with Frost magic."
            }
        },
        paladin: {
            Holy: {
                specIcon: "spell_holy_holybolt",
                primary:
                    [
                        {
                            name: "Holy Shock",
                            icon: "spell_holy_searinglight",
                            description: [
                                "Blasts the target with Holy energy, causing 1458 Holy damage to an enemy, or 2738 healing to an ally, and grants a charge of Holy Power."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 6,
                            spentResource: 7,
                            range: 20,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Walk in the Light",
                        icon: "spell_holy_championsgrace",
                        description: [
                            "Increases the effectiveness of your healing spells by 10%, the effectiveness of your Word of Glory by 30%, and removes the cooldown on Word of Glory."
                        ],
                        isActive: false
                    },
                    {
                        name: "Meditation",
                        icon: "spell_nature_sleep",
                        description: [
                            "Allows 50% of your mana regeneration from Spirit to continue while in combat."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Illuminated Healing",
                        icon: "spell_holy_absolution",
                        description: [
                            "Your direct healing spells also place an absorb shield on your target for 12% of the amount healed lasting 15 sec.  Each point of Mastery increases the absorb amount by an additional 1.50%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "Invokes the power of the Light to protect and to heal."
            },
            Protection: {
                specIcon: "ability_paladin_shieldofthetemplar",
                primary:
                    [
                        {
                            name: "Avenger's Shield",
                            icon: "spell_holy_avengersshield",
                            description: [
                                "Hurls a holy shield at the enemy, dealing 2791 Holy damage, silencing and interrupting spellcasting for 3 sec, and then jumping to additional nearby enemies.  Affects 3 total targets."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 15,
                            spentResource: 6,
                            range: 30,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Vengeance",
                        icon: "ability_paladin_shieldofvengeance",
                        description: [
                            "Each time you take damage, you gain 5% of the damage taken as attack power, up to a maximum of 10% of your health."
                        ],
                        isActive: false
                    },
                    {
                        name: "Touched by the Light",
                        icon: "ability_paladin_touchedbylight",
                        description: [
                            "Increases your total Stamina by 15%, increases your spell hit by 8%, and increases your spell power by an amount equal to 60% of your Strength."
                        ],
                        isActive: false
                    },
                    {
                        name: "Judgements of the Wise",
                        icon: "ability_paladin_judgementofthewise",
                        description: [
                            "Using your Judgement ability grants you 30% of your base mana over 10 sec."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Divine Bulwark",
                        icon: "spell_holy_holyprotection",
                        description: [
                            "Increases your chance to block melee attacks by 18%.  Each point of Mastery increases block chance by an additional 2.25%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "Uses Holy magic to shield &lt;himself/herself&gt; and defend allies from attackers."
            },
            Retribution: {
                specIcon: "spell_holy_auraoflight",
                primary:
                    [
                        {
                            name: "Templar's Verdict",
                            icon: "spell_paladin_templarsverdict",
                            description: [
                                "An instant weapon attack that causes a percentage of weapon damage.  Consumes all charges of Holy Power to increase damage dealt:<br><br>1 Holy Power: 30% Weapon Damage<br>2 Holy Power: 30% Weapon Damage<br>3 Holy Power: 90% Weapon Damage"
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: null,
                            spentResource: null,
                            range: 0,
                            requiresWeapon: 1
                        }
                    ],
                secondary: [
                    {
                        name: "Sheath of Light",
                        icon: "ability_paladin_sheathoflight",
                        description: [
                            "Increases your spell power by an amount equal to 30% of your attack power and increases your chance to hit with spells by 8%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Two-Handed Weapon Specialization",
                        icon: "inv_hammer_04",
                        description: [
                            "Increases the damage you deal with two-handed melee weapons by 25%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Judgements of the Bold",
                        icon: "ability_paladin_judgementofthewise",
                        description: [
                            "Your Judgement grants you 25% of your base mana over 10 sec."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Hand of Light",
                        icon: "ability_paladin_blessedhands",
                        description: [
                            "Your Templar's Verdict, Crusader Strike, and Divine Storm deal 16.8% additional damage as Holy damage.  Each point of Mastery increases the damage by an additional 2.1%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A righteous crusader who judges and punishes opponents with weapons and Holy magic."
            }
        },
        priest: {
            Discipline: {
                specIcon: "spell_holy_powerwordshield",
                primary:
                    [
                        {
                            name: "Penance",
                            icon: "spell_holy_penance",
                            description: [
                                "Launches a volley of holy light at the target, causing 745 Holy damage to an enemy, or 3006 healing to an ally instantly and every 1 sec for 2 sec."
                            ],
                            isActive: true,
                            castTime: 2,
                            isChanneled: true,
                            cooldown: 12,
                            spentResource: 14,
                            range: 30,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Enlightenment",
                        icon: "spell_arcane_mindmastery",
                        description: [
                            "Intellect increased by 15%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Meditation",
                        icon: "spell_nature_sleep",
                        description: [
                            "Allows 50% of your mana regeneration from Spirit to continue while in combat."
                        ],
                        isActive: false
                    },
                    {
                        name: "Absolution",
                        icon: "spell_holy_absolution",
                        description: [
                            "Enables your Dispel Magic spell to be cast on friendly targets to remove 2 harmful magical effects."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Shield Discipline",
                        icon: "spell_holy_powerwordshield",
                        description: [
                            "Increases the potency of all your damage absorption spells by 20%.  Each point of Mastery increases the potency of absorbs by an additional 2.5%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "Uses magic to shield allies from taking damage as well as heal their wounds."
            },
            Holy: {
                specIcon: "spell_holy_guardianspirit",
                primary:
                    [
                        {
                            name: "Spiritual Healing",
                            icon: "spell_holy_impholyconcentration",
                            description: [
                                "Healing increased by 15%."
                            ],
                            isActive: false
                        }
                    ],
                secondary: [
                    {
                        name: "Holy Word: Chastise",
                        icon: "spell_holy_chastise",
                        description: [
                            "Chastise the target for 598 Holy damage, and disorients them for 3 sec."
                        ],
                        isActive: true,
                        castTime: null,
                        cooldown: 30,
                        spentResource: 15,
                        range: 30,
                        requiresWeapon: 0
                    },
                    {
                        name: "Meditation",
                        icon: "spell_nature_sleep",
                        description: [
                            "Allows 50% of your mana regeneration from Spirit to continue while in combat."
                        ],
                        isActive: false
                    },
                    {
                        name: "Absolution",
                        icon: "spell_holy_absolution",
                        description: [
                            "Enables your Dispel Magic spell to be cast on friendly targets to remove 2 harmful magical effects."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Echo of Light",
                        icon: "spell_holy_aspiration",
                        description: [
                            "Your direct healing spells heal for an additional 10% over 6 sec.  Each point of Mastery provides an additional 1.25% healing over 6 sec."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave."
            },
            Shadow: {
                specIcon: "spell_shadow_shadowwordpain",
                primary:
                    [
                        {
                            name: "Mind Flay",
                            icon: "spell_shadow_siphonmana",
                            description: [
                                "Assault the target's mind with Shadow energy, causing 561 Shadow damage over 3 sec and slowing their movement speed by 50%."
                            ],
                            isActive: true,
                            castTime: 3,
                            isChanneled: true,
                            cooldown: null,
                            spentResource: 8,
                            range: 40,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Shadow Power",
                        icon: "spell_shadow_shadowpower",
                        description: [
                            "Spell damage increased by 15%.<br><br>Increases the critical damage of your Shadow spells by 100%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Shadow Orbs",
                        icon: "spell_priest_shadoworbs",
                        description: [
                            "You have a 10% chance for your Shadow Word: Pain and Mind Flay spells to grant you a Shadow Orb each time they deal damage.  Casting your Mind Blast or Mind Spike spell consumes all Shadow Orbs, increasing damage of that spell by 22% per Shadow Orb, and granting 22% increased damage on your periodic Shadow spells for 15 sec.  You can have up to a maximum of 3 orbs."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Shadow Orb Power",
                        icon: "inv_chaos_orb",
                        description: [
                            "Increases the damage done by your Shadow Orbs by 11.6%. Each point of Mastery increases damage by an additional 1.45%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies."
            }
        },
        rogue: {
            Assassination: {
                specIcon: "ability_rogue_eviscerate",
                primary:
                    [
                        {
                            name: "Mutilate",
                            icon: "ability_rogue_shadowstrikes",
                            description: [
                                "Instantly attacks with both weapons for 180% weapon damage plus an additional 201 with each weapon.  Awards 2 combo points."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: null,
                            spentResource: 60,
                            range: 0,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Improved Poisons",
                        icon: "ability_poisons",
                        description: [
                            "Increases the chance to apply Deadly Poison to your target by 20% and the frequency of applying Instant Poison to your target by 50%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Assassin's Resolve",
                        icon: "ability_rogue_sinistercalling",
                        description: [
                            "While wielding daggers, your maximum Energy is increased by 20 and your melee damage is increased by 20%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Potent Poisons",
                        icon: "trade_brewpoison",
                        description: [
                            "Increases the damage done by your poisons by 28%.  Each point of Mastery increases damage by an additional 3.5%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A deadly master of poisons who dispatches victims with vicious dagger strikes."
            },
            Combat: {
                specIcon: "ability_backstab",
                primary:
                    [
                        {
                            name: "Blade Flurry",
                            icon: "ability_warrior_punishingblow",
                            description: [
                                "While active, the rogue's attacks strike an additional nearby opponent, but energy regeneration is reduced by 30%.  Lasts until canceled."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 10,
                            spentResource: null,
                            range: null,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Vitality",
                        icon: "ability_warrior_revenge",
                        description: [
                            "Increases your Energy regeneration rate by 25% and your Attack Power by 30%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Ambidexterity",
                        icon: "ability_dualwield",
                        description: [
                            "Increases the damage done by your off-hand weapon, and the damage of your Throw, Deadly Throw, and Fan of Knives abilities, by 75%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Main Gauche",
                        icon: "inv_weapon_shortblade_15",
                        description: [
                            "Your main-hand attacks have a 16% chance to grant you an attack that deals damage equal to 100% of a main-hand attack.  Each point of Mastery increases the chance by an additional 2.00%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A swashbuckler who uses agility and guile to stand toe-to-toe with enemies."
            },
            Subtlety: {
                specIcon: "ability_stealth",
                primary:
                    [
                        {
                            name: "Shadowstep",
                            icon: "ability_rogue_shadowstep",
                            description: [
                                "Causes you to step through the shadows and appear behind an enemy target.  Your next Ambush or Garrote delivered within 10 sec will deal 30% additional damage, and your movement speed is increased by 70% for 3 sec."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 24,
                            spentResource: null,
                            range: 25,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Master of Subtlety",
                        icon: "ability_rogue_masterofsubtlety",
                        description: [
                            "Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 10% damage."
                        ],
                        isActive: false
                    },
                    {
                        name: "Sinister Calling",
                        icon: "ability_rogue_sinistercalling",
                        description: [
                            "Increases your total Agility by 30% and increases the percentage damage bonus of Backstab and Hemorrhage by 40%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Executioner",
                        icon: "inv_axe_06",
                        description: [
                            "Increases the damage done by your finishing moves, and the effectiveness of your Slice and Dice, by 20%.  Each point of Mastery increases damage by an additional 0.1%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A dark stalker who leaps from the shadows to ambush &lt;his/her&gt; unsuspecting prey."
            }
        },
        shaman: {
            Elemental: {
                specIcon: "spell_nature_lightning",
                primary:
                    [
                        {
                            name: "Thunderstorm",
                            icon: "spell_shaman_thunderstorm",
                            description: [
                                "You call down a bolt of lightning, energizing you and damaging nearby enemies within 10 yards. Restores 8% mana to you and deals 1638 Nature damage to all nearby enemies, reducing their movement speed by 40% for 5 sec and knocking them back 20 yards. This spell is usable while stunned."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 45,
                            spentResource: null,
                            range: null,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Elemental Fury",
                        icon: "spell_fire_volcano",
                        description: [
                            "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 100%, and removes the cooldown from your Chain Lightning spell."
                        ],
                        isActive: false
                    },
                    {
                        name: "Shamanism",
                        icon: "spell_unused2",
                        description: [
                            "Your Lightning Bolt, Chain Lightning, and Lava Burst spells gain an additional 36% benefit from your spell power, and their casting time is reduced by 0.5 sec."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Elemental Overload",
                        icon: "spell_nature_lightningoverload",
                        description: [
                            "Grants a 16% chance for Elemental Overload to occur.  Elemental Overload causes a Lightning Bolt, Chain Lightning, or Lava Burst spell you cast to trigger a second, similar spell on the same target at no additional cost that causes 75% of normal damage and no threat.  Each point of Mastery increases the chance of Elemental Overload by an additional 2%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A spellcaster who harnesses the destructive forces of nature and the elements."
            },
            Enhancement: {
                specIcon: "spell_nature_lightningshield",
                primary:
                    [
                        {
                            name: "Lava Lash",
                            icon: "ability_shaman_lavalash",
                            description: [
                                "You charge your off-hand weapon with lava, instantly dealing 260% of that weapon's damage to an enemy target.  Damage is increased by 40% if your off-hand weapon is enchanted with Flametongue."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 10,
                            spentResource: 4,
                            range: 0,
                            requiresWeapon: 1
                        }
                    ],
                secondary: [
                    {
                        name: "Mental Quickness",
                        icon: "spell_nature_mentalquickness",
                        description: [
                            "Your spell power is now equal to 55% of your attack power, and you no longer benefit from other sources of spell power. Also, your instant beneficial, damaging, and totem spells cost 55% less mana."
                        ],
                        isActive: false
                    },
                    {
                        name: "Dual Wield",
                        icon: "ability_dualwield",
                        description: [
                            "Allows one-hand and off-hand weapons to be equipped in your off-hand, allows you to parry frontal melee attacks, and increases your chance to hit with melee attacks by 6%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Primal Wisdom",
                        icon: "spell_shaman_spectraltransformation",
                        description: [
                            "Your melee attacks have a 40% chance to immediately restore 5% of your base mana."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Enhanced Elements",
                        icon: "spell_nature_elementalprecision_2",
                        description: [
                            "Increases all Fire, Frost, and Nature damage done by 20%.  Each point of Mastery increases damage by an additional 2.5%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A totemic warrior who strikes foes with weapons imbued with elemental power."
            },
            Restoration: {
                specIcon: "spell_nature_magicimmunity",
                primary:
                    [
                        {
                            name: "Earth Shield",
                            icon: "spell_nature_skinofearth",
                            description: [
                                "Protects the target with an earthen shield, reducing casting or channeling time lost when damaged by 30%  and causing attacks to heal the shielded target for 1416.  This effect can only occur once every few seconds.  9 charges.  Lasts 10 min.  Earth Shield can only be placed on one target at a time and only one Elemental Shield can be active on a target at a time."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: null,
                            spentResource: 19,
                            range: 40,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Purification",
                        icon: "spell_frost_wizardmark",
                        description: [
                            "Increases the effectiveness of your healing spells by 25%, and reduces the casting time of your Healing Wave and Greater Healing Wave spells by 0.5 sec."
                        ],
                        isActive: false
                    },
                    {
                        name: "Meditation",
                        icon: "spell_nature_sleep",
                        description: [
                            "Allows 50% of your mana regeneration from Spirit to continue while in combat."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Deep Healing",
                        icon: "spell_nature_healingtouch",
                        description: [
                            "Increases the potency of your healing spells by up to 24%, based on the current health level of your target (lower health targets are healed for more).  Each point of Mastery increases healing by up to an additional 3.0%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A healer who calls upon ancestral spirits and the cleansing power of water to mend allies' wounds."
            }
        },
        warlock: {
            Affliction: {
                specIcon: "spell_shadow_deathcoil",
                primary:
                    [
                        {
                            name: "Unstable Affliction",
                            icon: "spell_shadow_unstableaffliction_3",
                            description: [
                                "Shadow energy slowly destroys the target, causing 550 damage over 15 sec.  In addition, if the Unstable Affliction is dispelled it will cause 110 damage to the dispeller and silence them for 4 sec.  Only one Unstable Affliction or Immolate per Warlock can be active on any one target."
                            ],
                            isActive: true,
                            castTime: 1.5,
                            isChanneled: false,
                            cooldown: null,
                            spentResource: 15,
                            range: 40,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Shadow Mastery",
                        icon: "spell_shadow_spectralsight",
                        description: [
                            "Increases Shadow spell damage by 30%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Potent Afflictions",
                        icon: "ability_warlock_everlastingaffliction",
                        description: [
                            "Increases all periodic shadow damage you deal by 13%.  Each point of Mastery increases periodic shadow damage by an additional 1.63%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A master of Shadow magic who specializes in fear, drains and damage-over-time spells."
            },
            Demonology: {
                specIcon: "spell_shadow_metamorphosis",
                primary:
                    [
                        {
                            name: "Summon Felguard",
                            icon: "spell_shadow_summonfelguard",
                            description: [
                                "Summons a Felguard under the command of the Warlock."
                            ],
                            isActive: true,
                            castTime: 6,
                            isChanneled: false,
                            cooldown: null,
                            spentResource: 80,
                            range: null,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Demonic Knowledge",
                        icon: "spell_fire_twilightimmolation",
                        description: [
                            "Increases your Fire and Shadow spell damage by 15%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Master Demonologist",
                        icon: "spell_shadow_shadowpact",
                        description: [
                            "Increases the damage done by your demon servants and damage you deal while transformed into a demon by 18.4%.  Each point of Mastery increases damage by an additional 2.3%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A warlock who uses both Fire and Shadow magic along with powerful demons."
            },
            Destruction: {
                specIcon: "spell_shadow_rainoffire",
                primary:
                    [
                        {
                            name: "Conflagrate",
                            icon: "spell_fire_fireball",
                            description: [
                                "Instantly deals fire damage equal to 60% of your Immolate's periodic damage on the target."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 10,
                            spentResource: 16,
                            range: 40,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Cataclysm",
                        icon: "spell_fire_meteorstorm",
                        description: [
                            "Increases Fire spell damage by 25%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Fiery Apocalypse",
                        icon: "spell_fire_moltenblood",
                        description: [
                            "Increases all fire damage you deal by 10.8%.  Each point of Mastery increases fire damage by an additional 1.35%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "Calls down demonic fire to burn and demolish enemies."
            }
        },
        warrior: {
            Arms: {
                specIcon: "ability_warrior_savageblow",
                primary:
                    [
                        {
                            name: "Mortal Strike",
                            icon: "ability_warrior_savageblow",
                            description: [
                                "A vicious strike that deals 150% weapon damage plus 94 and wounds the target, reducing the effectiveness of any healing received for 10 sec."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 4.5,
                            spentResource: 20,
                            range: 0,
                            requiresWeapon: 1
                        }
                    ],
                secondary: [
                    {
                        name: "Anger Management",
                        icon: "ability_warrior_endlessrage",
                        description: [
                            "You gain 1 Rage every 3 seconds while in combat, and generate 25% extra Rage from damage dealt."
                        ],
                        isActive: false
                    },
                    {
                        name: "Two-Handed Weapon Specialization",
                        icon: "inv_axe_09",
                        description: [
                            "Increases the damage you deal with two-handed melee weapons by 12%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Strikes of Opportunity",
                        icon: "ability_backstab",
                        description: [
                            "Grants a 17.6% chance for your melee attacks to instantly trigger an additional melee attack for 100% normal damage.  Each point of Mastery increases this chance by 2.2%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A battle-hardened master of two-handed weapons, using mobility and overpowering attacks to strike &lt;his/her&gt; opponents down."
            },
            Fury: {
                specIcon: "ability_warrior_innerrage",
                primary:
                    [
                        {
                            name: "Bloodthirst",
                            icon: "spell_nature_bloodlust",
                            description: [
                                "Instantly attack the target causing (Attack power * 81 / 100) damage.  In addition, the next 3 successful melee attacks will restore [0.55 / 0.5]% of max health.  This effect lasts 8 sec.  Damage is based on your attack power."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 3,
                            spentResource: 20,
                            range: 0,
                            requiresWeapon: 1
                        }
                    ],
                secondary: [
                    {
                        name: "Dual Wield Specialization",
                        icon: "ability_dualwield",
                        description: [
                            "Allows you to equip one-hand and off-hand weapons in your off-hand.  Increases the damage of your off-hand attacks by an additional 25%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Precision",
                        icon: "ability_marksmanship",
                        description: [
                            "Increases your chance to hit with your attacks by 3% and increases autoattack damage by 40%."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Unshackled Fury",
                        icon: "ability_warrior_endlessrage",
                        description: [
                            "Increases the benefit of abilities that cause or require you to be enraged by 11.2%. Each point of Mastery increases enrage effects by an additional 5.60%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A furious berserker wielding a weapon in each hand, unleashing a flurry of attacks to carve &lt;his/her&gt; opponents to pieces."
            },
            Protection: {
                specIcon: "ability_warrior_defensivestance",
                primary:
                    [
                        {
                            name: "Shield Slam",
                            icon: "inv_shield_05",
                            description: [
                                "Slam the target with your shield, causing 293 damage (based on attack power) and dispelling 1 magic effect on the target."
                            ],
                            isActive: true,
                            castTime: null,
                            cooldown: 6,
                            spentResource: 20,
                            range: 0,
                            requiresWeapon: 0
                        }
                    ],
                secondary: [
                    {
                        name: "Sentinel",
                        icon: "inv_helmet_21",
                        description: [
                            "Increases your total Stamina by 15% and your block chance by 15%.  You also generate 50% additional Rage from attacking targets that are not targeting you."
                        ],
                        isActive: false
                    },
                    {
                        name: "Vengeance",
                        icon: "ability_paladin_shieldofvengeance",
                        description: [
                            "Each time you take damage, you gain 5% of the damage taken as attack power, up to a maximum of 10% of your health."
                        ],
                        isActive: false
                    },
                    {
                        name: "Mastery: Critical Block",
                        icon: "ability_warrior_criticalblock",
                        description: [
                            "Increases your chance to block by 12% and your chance to critically block by 12%.  Each point of Mastery increases your block chance by an additional 1.5% and your critical block chance by an additional 1.5%."
                        ],
                        isActive: false
                    }
                ],
                specDescription: "A stalwart protector who uses a shield to safeguard &lt;himself/herself&gt; and &lt;his/her&gt; allies."
            }
        }
    }
};