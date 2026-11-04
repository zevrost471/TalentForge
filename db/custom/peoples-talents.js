// peoples-talents.js

// ==============================
// Talents (Peoples of Azeroth)
// ==============================

export const peoplesTalents = {
    druid: {
        Balance: [
            {
                id: "improved_wrath",
                name: "Improved Wrath",
                icon: "spell_nature_abolishmagic",
                row: 0,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the cast time of your Wrath spell by {value} sec.",
                    {
                        value: [0.1, 0.2, 0.3, 0.4, 0.5]
                    }
                ],
                isActive: false
            },
            {
                id: "natures_grasp",
                name: "Nature's Grasp",
                icon: "spell_nature_natureswrath",
                row: 0,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1).  Only useable outdoors.  1 charge.  Lasts 45 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 60,
                spentResource: 50,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "improved_natures_grasp",
                name: "Improved Nature's Grasp",
                icon: "spell_nature_natureswrath",
                row: 0,
                col: 2,
                ranks: 4,
                requiresTalents: "natures_grasp",
                description: [
                    "Increases the chance for your Nature's Grasp to entangle an enemy by {value}%.",
                    {
                        value: [15, 30, 45, 65]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_entangling_roots",
                name: "Improved Entangling Roots",
                icon: "spell_nature_stranglevines",
                row: 1,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to avoid interruption caused by damage while casting Entangling Roots.",
                    {
                        value: [40, 70, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_moonfire",
                name: "Improved Moonfire",
                icon: "spell_nature_starfall",
                row: 1,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage and critical strike chance of your Moonfire spell by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "natural_weapons",
                name: "Natural Weapons",
                icon: "inv_staff_01",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage you deal with physical attacks in all forms by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "natural_shapeshifter",
                name: "Natural Shapeshifter",
                icon: "spell_nature_wispsplode",
                row: 1,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces the mana cost of all shapeshifting by {value}%.",
                    {
                        value: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_thorns",
                name: "Improved Thorns",
                icon: "spell_nature_thorns",
                row: 2,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases damage caused by your Thorns spell by {value}%.",
                    {
                        value: [25, 50, 75]
                    }
                ],
                isActive: false
            },
            {
                id: "omen_of_clarity",
                name: "Omen of Clarity",
                icon: "spell_nature_crystalball",
                row: 2,
                col: 2,
                ranks: 1,
                requiresTalents: "natural_weapons",
                description: [
                    "Imbues the Druid with natural energy.  Each of the Druid's melee attacks has a chance of causing the caster to enter a Clearcasting state.  The Clearcasting state reduces the Mana, Rage or Energy cost of your next damage or healing spell or offensive ability by 100%.  Lasts 10 min."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 120,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "natures_reach",
                name: "Nature's Reach",
                icon: "spell_nature_naturetouchgrow",
                row: 2,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire, and Hurricane spells by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "vengeance",
                name: "Vengeance",
                icon: "spell_nature_purge",
                row: 3,
                col: 1,
                ranks: 5,
                requiresTalents: "improved_moonfire",
                description: [
                    "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by {value}%.",
                    {
                        value: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_starfire",
                name: "Improved Starfire",
                icon: "spell_arcane_starfire",
                row: 3,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the cast time of Starfire by {cast} sec and has a {chance}% chance to stun the target for 3 sec.",
                    {
                        cast: [0.1, 0.2, 0.3, 0.4, 0.5],
                        chance: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "natures_grace",
                name: "Nature's Grace",
                icon: "spell_nature_naturesblessing",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec."
                ],
                isActive: false
            },
            {
                id: "moonglow",
                name: "Moonglow",
                icon: "spell_nature_sentinal",
                row: 4,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by {value}%.",
                    {
                        value: [3, 6, 9]
                    }
                ],
                isActive: false
            },
            {
                id: "moonfury",
                name: "Moonfury",
                icon: "spell_nature_moonglow",
                row: 5,
                col: 1,
                ranks: 5,
                requiresTalents: "natures_grace",
                description: [
                    "Increases the damage done by your Starfire, Moonfire and Wrath spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "moonkin_form",
                name: "Moonkin Form",
                icon: "spell_nature_forceofnature",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Transforms the Druid into Moonkin Form. While in this form the armor contribution from items is increased by 360% and all party members within 30 yards have their spell critical chance increased by 3%. The Moonkin cannot cast healing spells while shapeshifted.<br><br>The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 35,
                absoluteSpent: false,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            }
        ],
        "Feral Combat": [
            {
                id: "ferocity",
                name: "Ferocity",
                icon: "ability_hunter_pet_hyena",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by {value} Rage or Energy.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "feral_aggression_old",
                name: "Feral Aggression",
                icon: "classic_ability_druid_demoralizingroar",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the Attack Power reduction of your Demoralizing Roar by {reduction}% and the damage caused by your Ferocious Bite by {damage}%.",
                    {
                        reduction: [8, 16, 24, 32, 40],
                        damage: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "feral_instinct",
                name: "Feral Instinct",
                icon: "ability_ambush",
                row: 1,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases threat caused in Bear and Dire Bear Form by {value}% and reduces the chance enemies have to detect you while Prowling.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "brutal_impact",
                name: "Brutal Impact",
                icon: "ability_druid_bash",
                row: 1,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the stun duration of your Bash and Pounce abilities by {value} sec.",
                    {
                        value: [0.5, 1]
                    }
                ],
                isActive: false
            },
            {
                id: "thick_hide",
                name: "Thick Hide",
                icon: "inv_misc_pelt_bear_03",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your Armor contribution from items by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "feline_swiftness",
                name: "Feline Swiftness",
                icon: "spell_nature_spiritwolf",
                row: 2,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases your movement speed by {speed}% in Cat Form and increases your chance to dodge while in Cat Form by {dodge}%.",
                    {
                        speed: [15, 30],
                        dodge: [2, 4]
                    }
                ],
                isActive: false
            },
            {
                id: "feral_charge",
                name: "Feral Charge",
                icon: "ability_hunter_pet_bear",
                row: 2,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 15,
                spentResource: 5,
                resourceType: 2,
                range: null,
                minRange: 8,
                maxRange: 25,
                requiresWeapon: 0,
                requiresCatForm: false,
                requiresBearForm: true,
                requiresDireBearForm: true
            },
            {
                id: "sharpened_claws",
                name: "Sharpened Claws",
                icon: "inv_misc_monsterclaw_04",
                row: 2,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by {value}%.",
                    {
                        value: [2, 4, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_shred",
                name: "Improved Shred",
                icon: "spell_shadow_vampiricaura",
                row: 3,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the Energy cost of your Shred ability by {value}.",
                    {
                        value: [6, 12]
                    }
                ],
                isActive: false
            },
            {
                id: "predatory_strikes",
                name: "Predatory Strikes",
                icon: "ability_hunter_pet_cat",
                row: 3,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases your melee attack power in Cat, Bear and Dire Bear Forms by {value}% of your level.",
                    {
                        value: [50, 100, 150]
                    }
                ],
                isActive: false
            },
            {
                id: "blood_frenzy",
                name: "Blood Frenzy",
                icon: "ability_ghoulfrenzy",
                row: 3,
                col: 2,
                ranks: 2,
                requiresTalents: "sharpened_claws",
                description: [
                    "Your critical strikes from Cat Form abilities that add combo points  have a {value}% chance to add an additional combo point.",
                    {
                        value: [50, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "primal_fury",
                name: "Primal Fury",
                icon: "ability_racial_cannibalize",
                row: 3,
                col: 3,
                ranks: 2,
                requiresTalents: "sharpened_claws",
                description: [
                    "Gives you a {value}% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form.",
                    {
                        value: [50, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "savage_fury",
                name: "Savage Fury",
                icon: "ability_druid_ravage",
                row: 4,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the damage caused by your Claw, Rake, Maul and Swipe abilities by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "faerie_fire_feral",
                name: "Faerie Fire (Feral)",
                icon: "spell_nature_faeriefire",
                row: 4,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Decrease the armor of the target by 175 for 40 sec.  While affected, the target cannot stealth or turn invisible."
                ],
                isActive: true,
                castTime: null,
                cooldown: 6,
                spentResource: null,
                range: 30,
                requiresWeapon: 0,
                requiresCatForm: true,
                requiresBearForm: true,
                requiresDireBearForm: true
            },
            {
                id: "heart_of_the_wild",
                name: "Heart of the Wild",
                icon: "spell_holy_blessingofagility",
                row: 5,
                col: 1,
                ranks: 5,
                requiresTalents: "predatory_strikes",
                description: [
                    "Increases your Intellect by {value}%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by {value}% and while in Cat Form your Strength is increased by {value}%.",
                    {
                        value: [4, 8, 12, 16, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "leader_of_the_pack",
                name: "Leader of the Pack",
                icon: "spell_nature_unyeildingstamina",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases ranged and melee critical chance of all party members within 45 yards by 3%."
                ],
                isActive: false
            }
        ],
        Restoration: [
            {
                id: "improved_mark_of_the_wild",
                name: "Improved Mark of the Wild",
                icon: "spell_nature_regeneration",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the effects of your Mark of the Wild and Gift of the Wild spells by {value}%.",
                    {
                        value: [7, 14, 21, 28, 35]
                    }
                ],
                isActive: false
            },
            {
                id: "furor",
                name: "Furor",
                icon: "spell_holy_blessingofstamina",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
                    {
                        value: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_healing_touch",
                name: "Improved Healing Touch",
                icon: "spell_nature_healingtouch",
                row: 1,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the cast time of your Healing Touch spell by {value} sec.",
                    {
                        value: [0.1, 0.2, 0.3, 0.4, 0.5]
                    }
                ],
                isActive: false
            },
            {
                id: "natures_focus",
                name: "Nature's Focus",
                icon: "spell_nature_healingwavegreater",
                row: 1,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
                    {
                        value: [14, 28, 42, 56, 70]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_enrage",
                name: "Improved Enrage",
                icon: "ability_druid_enrage",
                row: 1,
                col: 2,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "The Enrage ability now instantly generates {value} Rage.",
                    {
                        value: [5, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "reflection",
                name: "Reflection",
                icon: "spell_frost_windwalkon",
                row: 2,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Allows {value}% of your Mana regeneration to continue while casting.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "insect_swarm",
                name: "Insect Swarm",
                icon: "spell_nature_insectswarm",
                row: 2,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 66 Nature damage over 12 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 45,
                absoluteSpent: true,
                resourceType: 1,
                range: 30,
                requiresWeapon: 0
            },
            {
                id: "subtlety",
                name: "Subtlety",
                icon: "ability_eyeoftheowl",
                row: 2,
                col: 3,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the threat generated by your Healing spells by {value}%.",
                    {
                        value: [4, 8, 12, 16, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "tranquil_spirit",
                name: "Tranquil Spirit",
                icon: "spell_holy_elunesgrace",
                row: 3,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the mana cost of your Healing Touch and Tranquility spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_rejuvenation",
                name: "Improved Rejuvenation",
                icon: "spell_nature_rejuvenation",
                row: 3,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the effect of your Rejuvenation spell by {value}%.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "natures_swiftness",
                name: "Nature's Swiftness",
                icon: "spell_nature_ravenform",
                row: 4,
                col: 0,
                ranks: 1,
                requiresTalents: "improved_healing_touch",
                description: [
                    "When activated, your next Nature spell becomes an instant cast spell."
                ],
                isActive: true,
                castTime: null,
                cooldown: 180,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "gift_of_nature",
                name: "Gift of Nature",
                icon: "spell_nature_protectionformnature",
                row: 4,
                col: 2,
                ranks: 5,
                requiresTalents: "insect_swarm",
                description: [
                    "Increases the effect of all healing spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_tranquility",
                name: "Improved Tranquility",
                icon: "spell_nature_tranquility",
                row: 4,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces threat caused by Tranquility by {value}%.",
                    {
                        value: [50, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_regrowth",
                name: "Improved Regrowth",
                icon: "spell_nature_resistnature",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the critical effect chance of your Regrowth spell by {value}%.",
                    {
                        value: [10, 20, 30, 40, 50]
                    }
                ],
                isActive: false
            },
            {
                id: "swiftmend",
                name: "Swiftmend",
                icon: "inv_relics_idolofrejuvenation",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "tranquil_spirit",
                description: [
                    "Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal them an amount equal to 12 sec. of Rejuvenation or 18 sec. of Regrowth."
                ],
                isActive: true,
                castTime: null,
                cooldown: 15,
                spentResource: 20,
                absoluteSpent: false,
                resourceType: 1,
                range: 40,
                requiresWeapon: 0
            }
        ]
    },
    hunter: {
        "Beast Mastery": [
            {
                id: "improved_aspect_of_the_hawk",
                name: "Improved Aspect of the Hawk",
                icon: "spell_nature_ravenform",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "While Aspect of the Hawk is active, all normal ranged attacks have a {value}% chance of increasing ranged attack speed by 30% for 12 sec.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "endurance_training",
                name: "Endurance Training",
                icon: "spell_nature_reincarnation",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the Health of your pets by {value}%.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_eyes_of_the_beast",
                name: "Improved Eyes of the Beast",
                icon: "ability_eyeoftheowl",
                row: 1,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the duration of your Eyes of the Beast by {value} sec.",
                    {
                        value: [30, 60]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_aspect_of_the_monkey",
                name: "Improved Aspect of the Monkey",
                icon: "ability_hunter_aspectofthemonkey",
                row: 1,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the Dodge bonus of your Aspect of the Monkey by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "thick_hide",
                name: "Thick Hide",
                icon: "inv_misc_pelt_bear_03",
                row: 1,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the Armor rating of your pets by {value}%.",
                    {
                        value: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_revive_pet",
                name: "Improved Revive Pet",
                icon: "ability_hunter_beastsoothe",
                row: 1,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Revive Pet's casting time is reduced by {value1} sec, mana cost is reduced by {value2}%, and increases the health your pet returns with by an additional {value3}%.",
                    {
                        value1: [3, 6],
                        value2: [20, 40],
                        value3: [15, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "pathfinding",
                name: "Pathfinding",
                icon: "ability_mount_jungletiger",
                row: 2,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by {value}%.",
                    {
                        value: [3, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "bestial_swiftness",
                name: "Bestial Swiftness",
                icon: "ability_druid_dash",
                row: 2,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Increases the outdoor movement speed of your pets by 30%."
                ],
                isActive: false
            },
            {
                id: "unleashed_fury",
                name: "Unleashed Fury",
                icon: "ability_bullrush",
                row: 2,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your pets by {value}%.",
                    {
                        value: [4, 8, 12, 16, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_mend_pet",
                name: "Improved Mend Pet",
                icon: "ability_hunter_mendpet",
                row: 3,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Gives the Mend Pet spell a {value}% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.",
                    {
                        value: [15, 50]
                    }
                ],
                isActive: false
            },
            {
                id: "ferocity",
                name: "Ferocity",
                icon: "inv_misc_monsterclaw_04",
                row: 3,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the critical strike chance of your pets by {value}%.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "spirit_bond_old",
                name: "Spirit Bond",
                icon: "classic_ability_druid_demoralizingroar",
                row: 4,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "While your pet is active, you and your pet will regenerate {value}% of total health every 10 sec.",
                    {
                        value: [1, 2]
                    }
                ],
                isActive: false
            },
            {
                id: "intimidation",
                name: "Intimidation",
                icon: "ability_devour",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Command your pet to intimidate the target on the next successful melee attack, causing a high amount of threat and stunning the target for 3 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 60,
                spentResource: 8,
                absoluteSpent: false,
                resourceType: 1,
                range: 100,
                requiresWeapon: 0
            },
            {
                id: "bestial_discipline",
                name: "Bestial Discipline",
                icon: "spell_nature_abolishmagic",
                row: 4,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the Focus regeneration of your pets by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "frenzy",
                name: "Frenzy",
                icon: "inv_misc_monsterclaw_03",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: "ferocity",
                description: [
                    "Gives your pet a {value}% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
                    {
                        value: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "bestial_wrath",
                name: "Bestial Wrath",
                icon: "ability_druid_ferociousbite",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "intimidation",
                description: [
                    "Send your pet into a rage causing 50% additional damage for 18 sec.  While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed."
                ],
                isActive: true,
                castTime: null,
                cooldown: 120,
                spentResource: 12,
                absoluteSpent: false,
                resourceType: 1,
                range: 100,
                requiresWeapon: 0
            }
        ],
        Marksmanship: [
            {
                id: "improved_concussive_shot",
                name: "Improved Concussive Shot",
                icon: "spell_frost_stun",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives your Concussive Shot a {value}% chance to stun the target for 3 sec.",
                    {
                        value: [4, 8, 12, 16, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "efficiency",
                name: "Efficiency",
                icon: "spell_frost_wizardmark",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the Mana cost of your Shots and Stings by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_hunters_mark",
                name: "Improved Hunter's Mark",
                icon: "ability_hunter_snipershot",
                row: 1,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the Ranged Attack Power bonus of your Hunter's Mark spell by {value}%.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "lethal_shots",
                name: "Lethal Shots",
                icon: "ability_searingarrow",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your critical strike chance with ranged weapons by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "aimed_shot",
                name: "Aimed Shot",
                icon: "inv_spear_07",
                row: 2,
                col: 0,
                ranks: 1,
                requiresTalents: null,
                description: ["An aimed shot that increases ranged damage by 70."],
                isActive: true,
                castTime: 3,
                cooldown: 6,
                spentResource: 75,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                minRange: 8,
                maxRange: 35,
                requiresWeapon: 2
            },
            {
                id: "improved_arcane_shot",
                name: "Improved Arcane Shot",
                icon: "ability_impalingbolt",
                row: 2,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Arcane Shot by {value} sec.",
                    {
                        value: [0.2, 0.4, 0.6, 0.8, 1]
                    }
                ],
                isActive: false
            },
            {
                id: "hawk_eye",
                name: "Hawk Eye",
                icon: "ability_townwatch",
                row: 2,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the range of your ranged weapons by {value} yards.",
                    {
                        value: [2, 4, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_serpent_sting",
                name: "Improved Serpent Sting",
                icon: "ability_hunter_quickshot",
                row: 3,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Serpent Sting by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "mortal_shots",
                name: "Mortal Shots",
                icon: "ability_piercedamage",
                row: 3,
                col: 2,
                ranks: 5,
                requiresTalents: "lethal_shots",
                description: [
                    "Increases your ranged weapon critical strike damage bonus by {value}%.",
                    {
                        value: [6, 12, 18, 24, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "scatter_shot",
                name: "Scatter Shot",
                icon: "ability_golemstormbolt",
                row: 4,
                col: 0,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "A short-range shot that deals 50% weapon damage and disorients the target for 4 sec. Any damage caused will remove the effect. Turns off your attack when used."
                ],
                isActive: true,
                castTime: null,
                cooldown: 30,
                spentResource: 8,
                absoluteSpent: false,
                resourceType: 1,
                range: 15,
                requiresWeapon: 2
            },
            {
                id: "barrage",
                name: "Barrage",
                icon: "ability_upgrademoonglaive",
                row: 4,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Multi-Shot and Volley spells by {value}%.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_scorpid_sting",
                name: "Improved Scorpid Sting",
                icon: "ability_hunter_criticalshot",
                row: 4,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces the Stamina of targets affected by your Scorpid Sting by {value}% of the amount of Strength reduced.",
                    {
                        value: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "ranged_weapon_specialization",
                name: "Ranged Weapon Specialization",
                icon: "inv_weapon_rifle_06",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage you deal with ranged weapons by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "trueshot_aura",
                name: "Trueshot Aura",
                icon: "ability_trueshot",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "barrage",
                description: [
                    "Increases the attack power of party members within 45 yards by 50. Lasts 30 min."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 325,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            }
        ],
        Survival: [
            {
                id: "monster_slaying",
                name: "Monster Slaying",
                icon: "inv_misc_head_dragon_black",
                row: 0,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases all damage caused against Beasts, Giants and Dragonkin targets by {value}% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional {value}%.",
                    {
                        value: [1, 2, 3]
                    }
                ],
                isActive: false
            },
            {
                id: "humanoid_slaying",
                name: "Humanoid Slaying",
                icon: "spell_holy_prayerofhealing",
                row: 0,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases all damage caused against Humanoid targets by {value}% and increases critical damage caused against Humanoid targets by an additional {value}%.",
                    {
                        value: [1, 2, 3]
                    }
                ],
                isActive: false
            },
            {
                id: "deflection",
                name: "Deflection",
                icon: "ability_parry",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your Parry chance by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "entrapment",
                name: "Entrapment",
                icon: "spell_nature_stranglevines",
                row: 1,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives your Immolation Trap, Frost Trap, and Explosive Trap a {value}% chance to entrap the target, preventing them from moving for 5 sec.",
                    {
                        value: [5, 10, 15, 20, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "savage_strikes",
                name: "Savage Strikes",
                icon: "ability_racial_bloodrage",
                row: 1,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the critical strike chance of Raptor Strike and Mongoose Bite by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_wing_clip",
                name: "Improved Wing Clip",
                icon: "ability_rogue_trip",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives your Wing Clip ability a {value}% chance to immobilize the target for 5 sec.",
                    {
                        value: [4, 8, 12, 16, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "clever_traps",
                name: "Clever Traps",
                icon: "spell_nature_timestop",
                row: 2,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the duration of Freezing and Frost trap effects by {value}% and the damage of Immolation and Explosive trap effects by {value}%.",
                    {
                        value: [15, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "survivalist",
                name: "Survivalist",
                icon: "spell_shadow_twilight",
                row: 2,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases total health by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "deterrence",
                name: "Deterrence",
                icon: "ability_whirlwind",
                row: 2,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "When activated, increases your Dodge and Parry chance by 25% for 10 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 300,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "trap_mastery",
                name: "Trap Mastery",
                icon: "ability_ensnare",
                row: 3,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Decreases the chance enemies will resist trap effects by {value}%.",
                    {
                        value: [5, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "surefooted",
                name: "Surefooted",
                icon: "ability_kick",
                row: 3,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases hit chance by {hit}% and increases the chance movement impairing effects will be resisted by an additional {resist}%.",
                    {
                        hit: [1, 2, 3],
                        resist: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_feign_death",
                name: "Improved Feign Death",
                icon: "ability_rogue_feigndeath",
                row: 3,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the chance your Feign Death ability will be resisted by {value}%.",
                    {
                        value: [2, 4]
                    }
                ],
                isActive: false
            },
            {
                id: "killer_instinct",
                name: "Killer Instinct",
                icon: "spell_holy_blessingofstamina",
                row: 4,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases your critical strike chance with all attacks by {value}%.",
                    {
                        value: [1, 2, 3]
                    }
                ],
                isActive: false
            },
            {
                id: "counterattack",
                name: "Counterattack",
                icon: "ability_warrior_challange",
                row: 4,
                col: 2,
                ranks: 1,
                requiresTalents: "deterrence",
                description: [
                    "A strike that becomes active after parrying an opponent's attack.  This attack deals 40 damage and immobilizes the target for 5 sec.  Counterattack cannot be blocked, dodged, or parried."
                ],
                isActive: true,
                castTime: null,
                cooldown: 5,
                spentResource: 45,
                absoluteSpent: true,
                resourceType: 1,
                range: 0,
                requiresWeapon: 0
            },
            {
                id: "improved_mongoose_bite",
                name: "Improved Mongoose Bite",
                icon: "ability_hunter_swiftstrike",
                row: 5,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                "Your Mongoose Bite now deals {value}% additional weapon damage.",
                {
                    value: [15, 30],
                },
                ],
            },
            {
                id: "lightning_reflexes",
                name: "Lightning Reflexes",
                icon: "spell_nature_invisibilty",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your Agility by {value}%.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "wyvern_sting",
                name: "Wyvern Sting",
                icon: "inv_spear_02",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "killer_instinct",
                description: [
                    "A stinging shot that puts the target to sleep for 12 sec.  Any damage will cancel the effect.  When the target wakes up, the Sting causes 300 Nature damage over 6 sec.  Only usable out of combat.  Only one Sting per Hunter can be active on the target at a time."
                ],
                isActive: true,
                castTime: null,
                cooldown: 120,
                spentResource: 115,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                minRange: 8,
                maxRange: 35,
                requiresWeapon: 2
            }
        ]
    },
    mage: {
        Arcane: [
            {
                id: "arcane_subtlety",
                name: "Arcane Subtlety",
                icon: "spell_holy_dispelmagic",
                row: 0,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces your target's resistance to all your spells by {resistance} and reduces the threat caused by your Arcane spells by {threat}%.",
                    {
                        resistance: [5, 10],
                        threat: [20, 40]
                    }
                ],
                isActive: false
            },
            {
                id: "arcane_focus",
                name: "Arcane Focus",
                icon: "spell_holy_devotion",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the chance that the opponent can resist your Arcane spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_arcane_missiles",
                name: "Improved Arcane Missiles",
                icon: "spell_nature_starfall",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
                    {
                        value: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "wand_specialization",
                name: "Wand Specialization",
                icon: "inv_wand_01",
                row: 1,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases your damage with Wands by {value}%.",
                    {
                        value: [13, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "magic_absorption",
                name: "Magic Absorption",
                icon: "spell_nature_astralrecalgroup",
                row: 1,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases all resistances by {resistance} and causes all spells you fully resist to restore {mana}% of your total mana.  1 sec. cooldown.",
                    {
                        resistance: [2, 4, 6, 8, 10],
                        mana: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "arcane_concentration",
                name: "Arcane Concentration",
                icon: "spell_shadow_manaburn",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "magic_attunement",
                name: "Magic Attunement",
                icon: "spell_nature_abolishmagic",
                row: 2,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the effect of your Amplify Magic and Dampen Magic spells by {value}%.",
                    {
                        value: [25, 50]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_arcane_explosion",
                name: "Improved Arcane Explosion",
                icon: "spell_nature_wispsplode",
                row: 2,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the critical strike chance of your Arcane Explosion spell by an additional {value}%.",
                    {
                        value: [2, 4, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "arcane_resilience",
                name: "Arcane Resilience",
                icon: "spell_arcane_arcaneresilience",
                row: 2,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Increases your armor by an amount equal to 50% of your Intellect."
                ],
                isActive: false
            },
            {
                id: "improved_mana_shield",
                name: "Improved Mana Shield",
                icon: "spell_shadow_detectlesserinvisibility",
                row: 3,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Decreases the mana lost per point of damage taken when Mana Shield is active by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_counterspell",
                name: "Improved Counterspell",
                icon: "spell_frost_iceshock",
                row: 3,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Gives your Counterspell a {value}% chance to silence the target for 4 sec.",
                    {
                        value: [50, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "arcane_meditation",
                name: "Arcane Meditation",
                icon: "spell_shadow_siphonmana",
                row: 3,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Allows {value}% of your Mana regeneration to continue while casting.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "presence_of_mind",
                name: "Presence of Mind",
                icon: "spell_nature_enchantarmor",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell."
                ],
                isActive: true,
                castTime: null,
                cooldown: 180,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "arcane_mind",
                name: "Arcane Mind",
                icon: "spell_shadow_charm",
                row: 4,
                col: 2,
                ranks: 5,
                requiresTalents: "arcane_resilience",
                description: [
                    "Increases your maximum Mana by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "arcane_instability",
                name: "Arcane Instability",
                icon: "spell_shadow_teleport",
                row: 5,
                col: 1,
                ranks: 3,
                requiresTalents: "presence_of_mind",
                description: [
                    "Increases your spell damage and critical strike chance by {value}%.",
                    {
                        value: [1, 2, 3]
                    }
                ],
                isActive: false
            },
            {
                id: "arcane_power",
                name: "Arcane Power",
                icon: "spell_nature_lightning",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "arcane_instability",
                description: [
                    "When activated, your spells deal 30% more damage while costing 30% more mana to cast.  This effect lasts 15 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 180,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            }
        ],
        Fire: [
            {
                id: "improved_fireball",
                name: "Improved Fireball",
                icon: "spell_fire_flamebolt",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the casting time of your Fireball spell by {value} sec.",
                    {
                        value: [0.1, 0.2, 0.3, 0.4, 0.5]
                    }
                ],
                isActive: false
            },
            {
                id: "impact",
                name: "Impact",
                icon: "spell_fire_meteorstorm",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives your Fire spells a {value}% chance to stun the target for 2 sec.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "ignite",
                name: "Ignite",
                icon: "spell_fire_incinerate",
                row: 1,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Your critical strikes from Fire damage spells cause the target to burn for an additional {value}% of your spell's damage over 4 sec.",
                    {
                        value: [8, 16, 24, 32, 40]
                    }
                ],
                isActive: false
            },
            {
                id: "flame_throwing",
                name: "Flame Throwing",
                icon: "spell_fire_flare",
                row: 1,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the range of your Fire spells by {value} yards.",
                    {
                        value: [3, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_fire_blast",
                name: "Improved Fire Blast",
                icon: "spell_fire_fireball",
                row: 1,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Fire Blast spell by {value} sec.",
                    {
                        value: [0.5, 1, 1.5]
                    }
                ],
                isActive: false
            },
            {
                id: "incinerate",
                name: "Incinerate",
                icon: "spell_fire_flameshock",
                row: 2,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the critical strike chance of your Fire Blast and Scorch spells by {value}%.",
                    {
                        value: [2, 4]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_flamestrike",
                name: "Improved Flamestrike",
                icon: "spell_fire_selfdestruct",
                row: 2,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the critical strike chance of your Flamestrike spell by {value}%.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "pyroblast",
                name: "Pyroblast",
                icon: "spell_fire_fireball02",
                row: 2,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Hurls an immense fiery boulder that causes 148 to 195 Fire damage and an additional 56 Fire damage over 12 sec."
                ],
                isActive: true,
                castTime: 6,
                cooldown: null,
                spentResource: 125,
                absoluteSpent: true,
                resourceType: 1,
                range: 35,
                requiresWeapon: 0
            },
            {
                id: "burning_soul",
                name: "Burning Soul",
                icon: "spell_fire_fire",
                row: 2,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Gives your Fire spells a {pushback}% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by {threat}%.",
                    {
                        pushback: [35, 70],
                        threat: [15, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_scorch",
                name: "Improved Scorch",
                icon: "spell_fire_soulburn",
                row: 3,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Your Scorch spells have a {value}% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec. Stacks up to 5 times.",
                    {
                        value: [33, 66, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_fire_ward",
                name: "Improved Fire Ward",
                icon: "spell_fire_firearmor",
                row: 3,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Causes your Fire Ward spell to have a {value}% chance to reflect Fire spells while active.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "master_of_elements",
                name: "Master of Elements",
                icon: "spell_fire_masterofelements",
                row: 3,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Your Fire and Frost spell criticals will refund {value}% of their base mana cost.",
                    {
                        value: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "critical_mass",
                name: "Critical Mass",
                icon: "spell_nature_wispheal",
                row: 4,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the critical strike chance of your Fire spells by {value}%.",
                    {
                        value: [2, 4, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "blast_wave",
                name: "Blast Wave",
                icon: "spell_holy_excorcism_02",
                row: 4,
                col: 2,
                ranks: 1,
                requiresTalents: "pyroblast",
                description: [
                    "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 160 to 192 Fire damage, and dazing them for 6 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 45,
                spentResource: 215,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "fire_power",
                name: "Fire Power",
                icon: "spell_fire_immolation",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Fire spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "combustion",
                name: "Combustion",
                icon: "spell_fire_sealoffire",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "critical_mass",
                description: [
                    "When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%.  This effect lasts until you have caused 3 critical strikes with Fire spells."
                ],
                isActive: true,
                castTime: null,
                cooldown: 180,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            }
        ],
        Frost: [
            {
                id: "frost_warding",
                name: "Frost Warding",
                icon: "spell_frost_frostward",
                row: 0,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the armor and resistances given by your Frost Armor and Ice Armor spells by {armor}%.  In addition, gives your Frost Ward a {ward}% chance to reflect Frost spells and effects while active.",
                    {
                        armor: [15, 30],
                        ward: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_frostbolt",
                name: "Improved Frostbolt",
                icon: "spell_frost_frostbolt02",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the casting time of your Frostbolt spell by {value} sec.",
                    {
                        value: [0.1, 0.2, 0.3, 0.4, 0.5]
                    }
                ],
                isActive: false
            },
            {
                id: "elemental_precision",
                name: "Elemental Precision",
                icon: "spell_ice_magicdamage",
                row: 0,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces the chance that the opponent can resist your Frost and Fire spells by {value}%.",
                    {
                        value: [2, 4, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "ice_shards",
                name: "Ice Shards",
                icon: "spell_frost_iceshard",
                row: 1,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the critical strike damage bonus of your Frost spells by {value}%.",
                    {
                        value: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "frostbite",
                name: "Frostbite",
                icon: "spell_frost_frostarmor",
                row: 1,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Gives your Chill effects a {value}% chance to freeze the target for 5 sec.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_frost_nova",
                name: "Improved Frost Nova",
                icon: "spell_frost_freezingbreath",
                row: 1,
                col: 2,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Frost Nova spell by {value} sec.",
                    {
                        value: [2, 4]
                    }
                ],
                isActive: false
            },
            {
                id: "permafrost",
                name: "Permafrost",
                icon: "spell_frost_wisp",
                row: 1,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the duration of your Chill effects by {chill} sec and reduces the target's speed by an additional {speed}%.",
                    {
                        chill: [1, 2, 3],
                        speed: [4, 7, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "piercing_ice",
                name: "Piercing Ice",
                icon: "spell_frost_frostbolt",
                row: 2,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Frost spells by {value}%.",
                    {
                        value: [2, 4, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "cold_snap",
                name: "Cold Snap",
                icon: "spell_frost_wizardmark",
                row: 2,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "When activated, this spell finishes the cooldown on all of your Frost spells."
                ],
                isActive: true,
                castTime: null,
                cooldown: 300,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "improved_blizzard",
                name: "Improved Blizzard",
                icon: "spell_frost_icestorm",
                row: 2,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Adds a chill effect to your Blizzard spell.  This effect lowers the target's movement speed by {value}%.  Lasts 1.50 sec.",
                    {
                        value: [30, 50, 65]
                    }
                ],
                isActive: false
            },
            {
                id: "arctic_reach",
                name: "Arctic Reach",
                icon: "spell_shadow_darkritual",
                row: 3,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "frost_channeling",
                name: "Frost Channeling",
                icon: "spell_frost_stun",
                row: 3,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces the mana cost of your Frost spells by {cost}% and reduces the threat caused by your Frost spells by {threat}%.",
                    {
                        cost: [5, 10, 15],
                        threat: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "shatter",
                name: "Shatter",
                icon: "spell_frost_frostshock",
                row: 3,
                col: 2,
                ranks: 5,
                requiresTalents: "improved_frost_nova",
                description: [
                    "Increases the critical strike chance of all your spells against frozen targets by {value}%.",
                    {
                        value: [10, 20, 30, 40, 50]
                    }
                ],
                isActive: false
            },
            {
                id: "ice_block",
                name: "Ice Block",
                icon: "spell_frost_frost",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot attack, move or cast spells."
                ],
                isActive: true,
                castTime: null,
                cooldown: 300,
                spentResource: 15,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "improved_cone_of_cold",
                name: "Improved Cone of Cold",
                icon: "spell_frost_glacier",
                row: 4,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the damage dealt by your Cone of Cold spell by {value}%.",
                    {
                        value: [15, 25, 35]
                    }
                ],
                isActive: false
            },
            {
                id: "winters_chill",
                name: "Winter's Chill",
                icon: "spell_frost_chillingblast",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives your Frost damage spells a {value}% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec.  Stacks up to 5 times.",
                    {
                        value: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "ice_barrier",
                name: "Ice Barrier",
                icon: "spell_ice_lament",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "ice_block",
                description: [
                    "Instantly shields you, absorbing 455 damage.  Lasts 1 min.  While the shield holds, spellcasting will not be delayed by damage."
                ],
                isActive: true,
                castTime: null,
                cooldown: 30,
                spentResource: 305,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            }
        ]
    },
    paladin: {
        Holy: [
            {
                id: "divine_strength",
                name: "Divine Strength",
                icon: "ability_golemthunderclap",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your Strength by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "divine_intellect",
                name: "Divine Intellect",
                icon: "spell_nature_sleep",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your total Intellect by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "spiritual_focus",
                name: "Spiritual Focus",
                icon: "spell_arcane_blink",
                row: 1,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives your Flash of Light and Holy Light spells a {value}% chance to not lose casting time when you take damage.",
                    {
                        value: [14, 28, 42, 56, 70]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_seal_of_righteousness",
                name: "Improved Seal of Righteousness",
                icon: "ability_thunderbolt",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by {value}%.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "healing_light",
                name: "Healing Light",
                icon: "spell_holy_holybolt",
                row: 2,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the amount healed by your Holy Light and Flash of Light spells by {value}%.",
                    {
                        value: [4, 8, 12]
                    }
                ],
                isActive: false
            },
            {
                id: "consecration",
                name: "Consecration",
                icon: "spell_holy_innerfire",
                row: 2,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Consecrates the land beneath Paladin, doing 64 Holy damage over 8 sec to enemies who enter the area."
                ],
                isActive: true,
                castTime: null,
                cooldown: 8,
                spentResource: 135,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "improved_lay_on_hands",
                name: "Improved Lay on Hands",
                icon: "spell_holy_layonhands",
                row: 2,
                col: 2,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Gives the target of your Lay on Hands spell a {armor}% bonus to their armor value from items for 2 min.  In addition, the cooldown for your Lay on Hands spell is reduced by {cd} min.",
                    {
                        armor: [15, 30],
                        cd: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "unyielding_faith",
                name: "Unyielding Faith",
                icon: "spell_holy_unyieldingfaith",
                row: 2,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the duration of all Fear and Disorient effects by {value}%.",
                    {
                        value: [15, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "illumination",
                name: "Illumination",
                icon: "spell_holy_greaterheal",
                row: 3,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a {value}% chance to gain Mana equal to the base cost of the spell.",
                    {
                        value: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_blessing_of_wisdom",
                name: "Improved Blessing of Wisdom",
                icon: "spell_holy_sealofwisdom",
                row: 3,
                col: 2,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the effect of your Blessing of Wisdom spell by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "divine_favor",
                name: "Divine Favor",
                icon: "spell_holy_heal",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: "illumination",
                description: [
                    "When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance."
                ],
                isActive: true,
                castTime: null,
                cooldown: 120,
                spentResource: 4,
                absoluteSpent: false,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "lasting_judgement",
                name: "Lasting Judgement",
                icon: "spell_holy_healingaura",
                row: 4,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the duration of your Judgement of Light and Judgement of Wisdom by {value} sec.",
                    {
                        value: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "holy_power",
                name: "Holy Power",
                icon: "spell_holy_power",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the critical effect chance of your Holy spells by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "holy_shock",
                name: "Holy Shock",
                icon: "spell_holy_searinglight",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "divine_favor",
                description: [
                    "Blasts the target with Holy energy, causing 204 to 220 Holy damage to an enemy, or 204 to 220 healing to an ally."
                ],
                isActive: true,
                castTime: null,
                cooldown: 30,
                spentResource: 225,
                absoluteSpent: true,
                resourceType: 1,
                range: 20,
                requiresWeapon: 0
            }
        ],
        Protection: [
            {
                id: "improved_devotion_aura",
                name: "Improved Devotion Aura",
                icon: "spell_holy_devotionaura",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the armor bonus of your Devotion Aura by {value}%.",
                    {
                        value: [5, 10, 15, 20, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "redoubt",
                name: "Redoubt",
                icon: "ability_defend",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to block attacks with your shield by {value}% after being the victim of a critical strike.  Lasts 10 sec or 5 blocks.",
                    {
                        value: [6, 12, 18, 24, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "precision",
                name: "Precision",
                icon: "ability_rogue_ambush",
                row: 1,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases your chance to hit with melee weapons by {value}%.",
                    {
                        value: [1, 2, 3]
                    }
                ],
                isActive: false
            },
            {
                id: "guardians_favor",
                name: "Guardian's Favor",
                icon: "spell_holy_sealofprotection",
                row: 1,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Blessing of Protection by {value1} sec and increases the duration of your Blessing of Freedom by {value2} sec.",
                    {
                        value1: [60, 120],
                        value2: [3, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "toughness",
                name: "Toughness",
                icon: "spell_holy_devotion",
                row: 1,
                col: 3,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your armor value from items by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "blessing_of_kings",
                name: "Blessing of Kings",
                icon: "spell_magic_magearmor",
                row: 2,
                col: 0,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Places a Blessing on the friendly target, increasing total stats by 10% for 5 min.  Players may only have one Blessing on them per Paladin at any one time."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 8,
                absoluteSpent: false,
                resourceType: 1,
                range: 30,
                requiresWeapon: 0
            },
            {
                id: "improved_righteous_fury",
                name: "Improved Righteous Fury",
                icon: "spell_holy_sealoffury",
                row: 2,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the amount of threat generated by your Righteous Fury spell by {value}%.",
                    {
                        value: [16, 33, 50]
                    }
                ],
                isActive: false
            },
            {
                id: "shield_specialization",
                name: "Shield Specialization",
                icon: "inv_shield_06",
                row: 2,
                col: 2,
                ranks: 3,
                requiresTalents: "redoubt",
                description: [
                    "Increases the amount of damage absorbed by your shield by {value}%.",
                    {
                        value: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "anticipation",
                name: "Anticipation",
                icon: "spell_magic_lesserinvisibilty",
                row: 2,
                col: 3,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your Defense skill by {value}.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_hammer_of_justice",
                name: "Improved Hammer of Justice",
                icon: "spell_holy_sealofmight",
                row: 3,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Decreases the cooldown of your Hammer of Justice spell by {value} sec.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_concentration_aura",
                name: "Improved Concentration Aura",
                icon: "spell_holy_mindsooth",
                row: 3,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the effect of your Concentration Aura by an additional {value}% and gives all group members affected by the aura an additional {value}% chance to resist Silence and Interrupt effects.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "blessing_of_sanctuary",
                name: "Blessing of Sanctuary",
                icon: "spell_nature_lightningshield",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Places a Blessing on the friendly target, reducing damage dealt from all sources by up to 10 for 5 min.  In addition, when the target blocks a melee attack the attacker will take 14 Holy damage.  Players may only have one Blessing on them per Paladin at any one time."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 60,
                absoluteSpent: true,
                resourceType: 1,
                range: 30,
                requiresWeapon: 0
            },
            {
                id: "reckoning",
                name: "Reckoning",
                icon: "spell_holy_blessingofstrength",
                row: 4,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to gain an extra attack after being the victim of a critical strike.",
                    {
                        value: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "one_handed_weapon_specialization",
                name: "One-Handed Weapon Specialization",
                icon: "inv_sword_20",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage you deal with one-handed melee weapons by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "holy_shield",
                name: "Holy Shield",
                icon: "classic_spell_holy_blessingofprotection",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "blessing_of_sanctuary",
                description: [
                    "Increases chance to block by 30% for 10 sec, and deals 65 Holy damage for each attack blocked while active.  Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges."
                ],
                isActive: true,
                castTime: null,
                cooldown: 10,
                spentResource: 150,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            }
        ],
        Retribution: [
            {
                id: "improved_blessing_of_might",
                name: "Improved Blessing of Might",
                icon: "spell_holy_fistofjustice",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the melee attack power bonus of your Blessing of Might by {value}%.",
                    {
                        value: [4, 8, 12, 16, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "benediction",
                name: "Benediction",
                icon: "spell_frost_windwalkon",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the Mana cost of your Judgement and Seal spells by {value}%.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_judgement",
                name: "Improved Judgement",
                icon: "spell_holy_righteousfury",
                row: 1,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Decreases the cooldown of your Judgement spell by {value} sec.",
                    {
                        value: [1, 2]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_seal_of_the_crusader",
                name: "Improved Seal of the Crusader",
                icon: "spell_holy_holysmite",
                row: 1,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the melee attack power bonus of your Seal of the Crusader and the Holy damage increase of your Judgement of the Crusader by {value}%.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "deflection",
                name: "Deflection",
                icon: "ability_parry",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your Parry chance by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "vindication",
                name: "Vindication",
                icon: "spell_holy_vindication",
                row: 2,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Gives the Paladin's damaging melee attacks a chance to reduce the target's Strength and Agility by {value}% for 10 sec.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "conviction",
                name: "Conviction",
                icon: "spell_holy_retributionaura",
                row: 2,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to get a critical strike with melee weapons by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false,
                requiresWeapon: 1
            },
            {
                id: "seal_of_command",
                name: "Seal of Command",
                icon: "ability_warrior_innerrage",
                row: 2,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage.  Only one Seal can be active on the Paladin at any one time.  Lasts 30 sec.<br><br>Unleashing this Seal's energy will judge an enemy, instantly causing 68 to 73 Holy damage, 137 to 146 if the target is stunned or incapacitated."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 65,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "pursuit_of_justice",
                name: "Pursuit of Justice",
                icon: "spell_holy_persuitofjustice",
                row: 2,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases movement and mounted movement speed by {value}%.  This does not stack with other movement speed increasing effects.",
                    {
                        value: [4, 8]
                    }
                ],
                isActive: false
            },
            {
                id: "eye_for_an_eye",
                name: "Eye for an Eye",
                icon: "spell_holy_eyeforaneye",
                row: 3,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "All spell criticals against you cause {value}% of the damage taken to the caster as well.  The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
                    {
                        value: [15, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_retribution_aura",
                name: "Improved Retribution Aura",
                icon: "spell_holy_auraoflight",
                row: 3,
                col: 2,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Retribution Aura by {value}%.",
                    {
                        value: [25, 50]
                    }
                ],
                isActive: false
            },
            {
                id: "two_handed_weapon_specialization",
                name: "Two-Handed Weapon Specialization",
                icon: "inv_hammer_04",
                row: 4,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the damage you deal with two-handed melee weapons by {value}%.",
                    {
                        value: [2, 4, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "sanctity_aura",
                name: "Sanctity Aura",
                icon: "spell_holy_mindvision",
                row: 4,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Increases Holy damage done by party members within 30 yards by 10%.  Players may only have one Aura on them per Paladin at any one time."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "vengeance",
                name: "Vengeance",
                icon: "ability_racial_avatar",
                row: 5,
                col: 1,
                ranks: 5,
                requiresTalents: "conviction",
                description: [
                    "Gives you a {value}% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a weapon swing, spell, or ability.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "repentance",
                name: "Repentance",
                icon: "spell_holy_prayerofhealing",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec.  Any damage caused will awaken the target.  Only works against Humanoids."
                ],
                isActive: true,
                castTime: null,
                cooldown: 60,
                spentResource: 60,
                absoluteSpent: true,
                resourceType: 1,
                range: 20,
                requiresWeapon: 0
            }
        ]
    },
    priest: {
        Discipline: [
            {
                id: "unbreakable_will",
                name: "Unbreakable Will",
                icon: "spell_magic_magearmor",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to resist Stun, Fear, and Silence effects by an additional {value}%.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "wand_specialization",
                name: "Wand Specialization",
                icon: "inv_wand_01",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your damage with Wands by {value}%.",
                    {
                        value: [5, 10, 15, 20, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "silent_resolve",
                name: "Silent Resolve",
                icon: "spell_nature_manaregentotem",
                row: 1,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the threat generated by your spells by {value}%.",
                    {
                        value: [4, 8, 12, 16, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_power_word_fortitude",
                name: "Improved Power Word: Fortitude",
                icon: "spell_holy_wordfortitude",
                row: 1,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the effect of your Power Word: Fortitude and Prayer of Fortitude spells by {value}%.",
                    {
                        value: [15, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_power_word_shield",
                name: "Improved Power Word: Shield",
                icon: "spell_holy_powerwordshield",
                row: 1,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the damage absorbed by your Power Word: Shield by {value}%.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "martyrdom",
                name: "Martyrdom",
                icon: "spell_nature_tranquility",
                row: 1,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Gives you a {value1}% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike.  The Focused Casting effect prevents you from losing casting time when taking damage and increases resistance to Interrupt effects by {value2}%.",
                    {
                        value1: [50, 100],
                        value2: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "inner_focus",
                name: "Inner Focus",
                icon: "spell_frost_windwalkon",
                row: 2,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "When activated, reduces the mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is capable of a critical effect."
                ],
                isActive: true,
                castTime: null,
                cooldown: 180,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "meditation",
                name: "Meditation",
                icon: "spell_nature_sleep",
                row: 2,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Allows {value}% of your Mana regeneration to continue while casting.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_inner_fire",
                name: "Improved Inner Fire",
                icon: "spell_holy_innerfire",
                row: 3,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the Armor bonus of your Inner Fire spell by {value}%.",
                    {
                        value: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "mental_agility",
                name: "Mental Agility",
                icon: "ability_hibernation",
                row: 3,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the mana cost of your instant cast spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_mana_burn",
                name: "Improved Mana Burn",
                icon: "spell_shadow_manaburn",
                row: 3,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the casting time of your Mana Burn spell by {value}.",
                    {
                        value: ["0.25 secs", "0.5 sec"]
                    }
                ],
                isActive: false
            },
            {
                id: "mental_strength",
                name: "Mental Strength",
                icon: "spell_nature_enchantarmor",
                row: 4,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your maximum Mana by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "divine_spirit",
                name: "Divine Spirit",
                icon: "spell_holy_divinespirit",
                row: 4,
                col: 2,
                ranks: 1,
                requiresTalents: "meditation",
                description: [
                    "Holy power infuses the target, increasing their Spirit by 17 for 30 min."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 285,
                absoluteSpent: true,
                resourceType: 1,
                range: 30,
                requiresWeapon: 0
            },
            {
                id: "force_of_will",
                name: "Force of Will",
                icon: "spell_nature_slowingtotem",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your spell damage by {value}% and the critical strike chance of your offensive spells by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "power_infusion",
                name: "Power Infusion",
                icon: "spell_holy_powerinfusion",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "mental_strength",
                description: [
                    "Infuses the target with power, increasing their spell damage and healing by 20%.  Lasts 15 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 180,
                spentResource: 20,
                absoluteSpent: false,
                resourceType: 1,
                range: 30,
                requiresWeapon: 0
            }
        ],
        Holy: [
            {
                id: "healing_focus",
                name: "Healing Focus",
                icon: "spell_holy_healingfocus",
                row: 0,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to avoid interruption caused by damage while casting any healing spell.",
                    {
                        value: [35, 70]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_renew",
                name: "Improved Renew",
                icon: "spell_holy_renew",
                row: 0,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the amount healed by your Renew spell by {value}%.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "holy_specialization",
                name: "Holy Specialization",
                icon: "spell_holy_sealofsalvation",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the critical effect chance of your Holy spells by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "spell_warding",
                name: "Spell Warding",
                icon: "spell_holy_spellwarding",
                row: 1,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces all spell damage taken by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "divine_fury",
                name: "Divine Fury",
                icon: "spell_holy_sealofwrath",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by {value} sec.",
                    {
                        value: [0.1, 0.2, 0.3, 0.4, 0.5]
                    }
                ],
                isActive: false
            },
            {
                id: "holy_nova",
                name: "Holy Nova",
                icon: "spell_holy_holynova",
                row: 2,
                col: 0,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Causes an explosion of holy light around the caster, causing 29 to 34 Holy damage to all enemy targets within 10 yards and healing all party members within 10 yards for 54 to 63.  These effects cause no threat."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 185,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "blessed_recovery",
                name: "Blessed Recovery",
                icon: "spell_holy_blessedrecovery",
                row: 2,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "After being struck by a melee or ranged critical hit, heal {value}% of the damage taken over 6 sec.",
                    {
                        value: [8, 16, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "inspiration",
                name: "Inspiration",
                icon: "spell_holy_layonhands",
                row: 2,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases your target's armor by {value}% for 15 sec after getting a critical effect from your Flash Heal, Heal, Greater Heal, or Prayer of Healing spell.",
                    {
                        value: [8, 16, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "holy_reach",
                name: "Holy Reach",
                icon: "spell_holy_purify",
                row: 3,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing and Holy Nova spells by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_healing",
                name: "Improved Healing",
                icon: "spell_holy_heal02",
                row: 3,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces the Mana cost of your Lesser Heal, Heal, and Greater Heal spells by {value}%.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "searing_light",
                name: "Searing Light",
                icon: "spell_holy_searinglightpriest",
                row: 3,
                col: 2,
                ranks: 2,
                requiresTalents: "divine_fury",
                description: [
                    "Increases the damage of your Smite and Holy Fire spells by {value}%.",
                    {
                        value: [5, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_prayer_of_healing",
                name: "Improved Prayer of Healing",
                icon: "spell_holy_prayerofhealing02",
                row: 4,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the Mana cost of your Prayer of Healing spell by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "spirit_of_redemption",
                name: "Spirit of Redemption",
                icon: "inv_enchant_essenceeternallarge",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Upon death, the priest becomes the Spirit of Redemption for 10 sec.  The Spirit of Redemption cannot move, attack, be attacked or targeted by any spells or effects.  While in this form the priest can cast any healing spell free of cost.  When the effect ends, the priest dies."
                ],
                isActive: false
            },
            {
                id: "spiritual_guidance",
                name: "Spiritual Guidance",
                icon: "spell_holy_spiritualguidence",
                row: 4,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases spell damage and healing by up to {value}% of your total Spirit.",
                    {
                        value: [5, 10, 15, 20, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "spiritual_healing",
                name: "Spiritual Healing",
                icon: "spell_nature_moonglow",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the amount healed by your healing spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "lightwell",
                name: "Lightwell",
                icon: "spell_holy_summonlightwell",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "spirit_of_redemption",
                description: [
                    "Creates a holy Lightwell near the priest.  Members of your raid or party can click the Lightwell to restore 800 health over 10 sec.  Being attacked cancels the effect.  Lightwell lasts for 3 min or 5 charges."
                ],
                isActive: true,
                castTime: 1.5,
                cooldown: 600,
                spentResource: 225,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            }
        ],
        Shadow: [
            {
                id: "spirit_tap",
                name: "Spirit Tap",
                icon: "spell_shadow_requiem",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor.  For the duration, your Mana will regenerate at a 50% rate while casting.  Lasts 15 sec.",
                    {
                        value: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "blackout",
                name: "Blackout",
                icon: "spell_shadow_gathershadows",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives your Shadow damage spells a {value}% chance to stun the target for 3 sec.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "shadow_affinity",
                name: "Shadow Affinity",
                icon: "spell_shadow_shadowward",
                row: 1,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces the threat generated by your Shadow spells by {value}%.",
                    {
                        value: [8, 16, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_shadow_word_pain",
                name: "Improved Shadow Word: Pain",
                icon: "spell_shadow_shadowwordpain",
                row: 1,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the duration of your Shadow Word: Pain spell by {value} sec.",
                    {
                        value: [3, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "shadow_focus",
                name: "Shadow Focus",
                icon: "spell_shadow_burningspirit",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces your target's chance to resist your Shadow spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_psychic_scream",
                name: "Improved Psychic Scream",
                icon: "spell_shadow_psychicscream",
                row: 2,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Psychic Scream spell by {value} sec.",
                    {
                        value: [2, 4]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_mind_blast",
                name: "Improved Mind Blast",
                icon: "spell_shadow_unholyfrenzy",
                row: 2,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Mind Blast spell by {value} sec.",
                    {
                        value: [0.5, 1, 1.5, 2, 2.5]
                    }
                ],
                isActive: false
            },
            {
                id: "mind_flay",
                name: "Mind Flay",
                icon: "spell_shadow_siphonmana",
                row: 2,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Assault the target's mind with Shadow energy, causing 75 Shadow damage over 3 sec and slowing their movement speed by 50%."
                ],
                isActive: true,
                castTime: 3,
                isChanneled: true,
                cooldown: null,
                spentResource: 45,
                absoluteSpent: true,
                resourceType: 1,
                range: 20,
                requiresWeapon: 0
            },
            {
                id: "improved_fade",
                name: "Improved Fade",
                icon: "spell_magic_lesserinvisibilty",
                row: 3,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Decreases the cooldown of your Fade ability by {value} sec.",
                    {
                        value: [3, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "shadow_reach",
                name: "Shadow Reach",
                icon: "spell_shadow_chilltouch",
                row: 3,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the range of your Shadow damage spells by {value}%.",
                    {
                        value: [6, 13, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "shadow_weaving",
                name: "Shadow Weaving",
                icon: "spell_shadow_blackplague",
                row: 3,
                col: 3,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Your Shadow damage spells have a {value}% chance to cause your target to be vulnerable to Shadow damage.  This vulnerability increases the Shadow damage dealt to your target by 3% and lasts 15 sec.  Stacks up to 5 times.",
                    {
                        value: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "silence",
                name: "Silence",
                icon: "spell_shadow_impphaseshift",
                row: 4,
                col: 0,
                ranks: 1,
                requiresTalents: "improved_psychic_scream",
                description: [
                    "Silences the target, preventing them from casting spells for 5 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 45,
                spentResource: 225,
                absoluteSpent: true,
                resourceType: 1,
                range: 20,
                requiresWeapon: 0
            },
            {
                id: "vampiric_embrace",
                name: "Vampiric Embrace",
                icon: "spell_shadow_unsummonbuilding",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Afflicts your target with Shadow energy that causes all party members to be healed for 20% of any Shadow spell damage you deal for 1 min."
                ],
                isActive: true,
                castTime: null,
                cooldown: 10,
                spentResource: 40,
                absoluteSpent: true,
                resourceType: 1,
                range: 30,
                requiresWeapon: 0
            },
            {
                id: "improved_vampiric_embrace",
                name: "Improved Vampiric Embrace",
                icon: "spell_shadow_improvedvampiricembrace",
                row: 4,
                col: 2,
                ranks: 2,
                requiresTalents: "vampiric_embrace",
                description: [
                    "Increases the percentage healed by Vampiric Embrace by an additional {value}%.",
                    {
                        value: [5, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "darkness",
                name: "Darkness",
                icon: "spell_shadow_twilight",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your Shadow spell damage by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "shadowform",
                name: "Shadowform",
                icon: "spell_shadow_shadowform",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "vampiric_embrace",
                description: [
                    "Assume a Shadowform, increasing your Shadow damage by 15% and reducing Physical damage done to you by 15%.  However, you may not cast Holy spells while in this form."
                ],
                isActive: true,
                castTime: null,
                cooldown: 1.5,
                spentResource: 40,
                absoluteSpent: false,
                resourceType: 1,
                range: null,
                requiresWeapon: 0
            }
        ]
    },
    rogue: {
        Assassination: [
            {
                id: "improved_eviscerate",
                name: "Improved Eviscerate",
                icon: "ability_rogue_eviscerate",
                row: 0,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Eviscerate ability by {value}%.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "remorseless_attacks",
                name: "Remorseless Attacks",
                icon: "ability_fiegndead",
                row: 0,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "After killing an opponent that yields experience or honor, gives you a {value}% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike.  Lasts 20 sec.",
                    {
                        value: [20, 40]
                    }
                ],
                isActive: false
            },
            {
                id: "malice",
                name: "Malice",
                icon: "ability_racial_bloodrage",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your critical strike chance by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "ruthlessness",
                name: "Ruthlessness",
                icon: "ability_druid_disembowel",
                row: 1,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Gives your finishing moves a {value}% chance to add a combo point to your target.",
                    {
                        value: [20, 40, 60]
                    }
                ],
                isActive: false
            },
            {
                id: "murder",
                name: "Murder",
                icon: "spell_shadow_deathscream",
                row: 1,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases all damage caused against Humanoid, Giant, Beast and Dragonkin targets by {value}%.",
                    {
                        value: [1, 2]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_slice_and_dice",
                name: "Improved Slice and Dice",
                icon: "ability_rogue_slicedice",
                row: 1,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the duration of your Slice and Dice ability by {value}%.",
                    {
                        value: [15, 30, 45]
                    }
                ],
                isActive: false
            },
            {
                id: "relentless_strikes",
                name: "Relentless Strikes",
                icon: "ability_warrior_decisivestrike",
                row: 2,
                col: 0,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Your finishing moves have a 20% chance per combo point to restore 25 energy."
                ],
                isActive: false
            },
            {
                id: "improved_expose_armor",
                name: "Improved Expose Armor",
                icon: "ability_warrior_riposte",
                row: 2,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the armor reduced by your Expose Armor ability by {value}%.",
                    {
                        value: [25, 50]
                    }
                ],
                isActive: false
            },
            {
                id: "lethality",
                name: "Lethality",
                icon: "ability_criticalstrike",
                row: 2,
                col: 2,
                ranks: 5,
                requiresTalents: "malice",
                description: [
                    "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by {value}%.",
                    {
                        value: [6, 12, 18, 24, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "vile_poisons",
                name: "Vile Poisons",
                icon: "ability_rogue_feigndeath",
                row: 3,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage dealt by your poisons by {value1}% and gives your poisons an additional {value2}% chance to resist dispel effects.",
                    {
                        value1: [4, 8, 12, 16, 20],
                        value2: [8, 16, 24, 32, 40]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_poisons",
                name: "Improved Poisons",
                icon: "ability_poisons",
                row: 3,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the chance to apply poisons to your target by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "cold_blood",
                name: "Cold Blood",
                icon: "spell_ice_lament",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, or Eviscerate by 100%."
                ],
                isActive: true,
                castTime: null,
                cooldown: 180,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "improved_kidney_shot",
                name: "Improved Kidney Shot",
                icon: "ability_rogue_kidneyshot",
                row: 4,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "While affected by your Kidney Shot ability, the target receives an additional {value}% damage from all sources.",
                    {
                        value: [3, 6, 9]
                    }
                ],
                isActive: false
            },
            {
                id: "seal_fate",
                name: "Seal Fate",
                icon: "spell_shadow_chilltouch",
                row: 5,
                col: 1,
                ranks: 5,
                requiresTalents: "cold_blood",
                description: [
                    "Your critical strikes from abilities that add combo points have a {value}% chance to add an additional combo point.",
                    {
                        value: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "vigor",
                name: "Vigor",
                icon: "spell_nature_earthbindtotem",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Increases your maximum Energy by 10."
                ],
                isActive: false
            }
        ],
        Combat: [
            {
                id: "improved_gouge",
                name: "Improved Gouge",
                icon: "ability_gouge",
                row: 0,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the effect duration of your Gouge ability by {value} sec.",
                    {
                        value: [0.5, 1, 1.5]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_sinister_strike",
                name: "Improved Sinister Strike",
                icon: "spell_shadow_ritualofsacrifice",
                row: 0,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the Energy cost of your Sinister Strike ability by {value}.",
                    {
                        value: [3, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "lightning_reflexes",
                name: "Lightning Reflexes",
                icon: "spell_nature_invisibilty",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your Dodge chance by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_backstab",
                name: "Improved Backstab",
                icon: "ability_backstab",
                row: 1,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the critical strike chance of your Backstab ability by {value}%.",
                    {
                        value: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "deflection",
                name: "Deflection",
                icon: "ability_parry",
                row: 1,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your Parry chance by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "precision",
                name: "Precision",
                icon: "ability_marksmanship",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to hit with melee weapons by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false,
                requiresWeapon: 1
            },
            {
                id: "endurance",
                name: "Endurance",
                icon: "spell_shadow_shadowward",
                row: 2,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Sprint and Evasion abilities by {value}.",
                    {
                        value: ["45 sec", "1.5 min"]
                    }
                ],
                isActive: false
            },
            {
                id: "riposte",
                name: "Riposte",
                icon: "ability_warrior_challange",
                row: 2,
                col: 1,
                ranks: 1,
                requiresTalents: "deflection",
                description: [
                    "A strike that becomes active after parrying an opponent's attack.  This attack deals 150% weapon damage and disarms the target for 6 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 6,
                spentResource: 10,
                resourceType: 3,
                range: 0,
                requiresWeapon: 0
            },
            {
                id: "improved_sprint",
                name: "Improved Sprint",
                icon: "ability_rogue_sprint",
                row: 2,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Gives a {value}% chance to remove all movement impairing effects when you activate your Sprint ability.",
                    {
                        value: [50, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_kick",
                name: "Improved Kick",
                icon: "ability_kick",
                row: 3,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Gives your Kick ability a {value}% chance to silence the target for 2 sec.",
                    {
                        value: [50, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "dagger_specialization",
                name: "Dagger Specialization",
                icon: "inv_weapon_shortblade_05",
                row: 3,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to get a critical strike with Daggers by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "dual_wield_specialization",
                name: "Dual Wield Specialization",
                icon: "ability_dualwield",
                row: 3,
                col: 2,
                ranks: 5,
                requiresTalents: "precision",
                description: [
                    "Increases the damage done by your offhand weapon by {value}%.",
                    {
                        value: [10, 20, 30, 40, 50]
                    }
                ],
                isActive: false
            },
            {
                id: "mace_specialization",
                name: "Mace Specialization",
                icon: "inv_mace_01",
                row: 4,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your skill with Maces by {skill}, and gives you a {stun}% chance to stun your target for 3 sec with a mace.",
                    {
                        skill: [1, 2, 3, 4, 5],
                        stun: [1, 2, 3, 4, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "blade_flurry",
                name: "Blade Flurry",
                icon: "ability_warrior_punishingblow",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Increases your attack speed by 20%.  In addition, attacks strike an additional nearby opponent.  Lasts 15 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 120,
                spentResource: 25,
                resourceType: 3,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "sword_specialization",
                name: "Sword Specialization",
                icon: "inv_sword_27",
                row: 4,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to get an extra attack on the same target after dealing damage with your Sword.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "fist_weapon_specialization",
                name: "Fist Weapon Specialization",
                icon: "inv_gauntlets_04",
                row: 4,
                col: 3,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to get a critical strike with Fist Weapons by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "weapon_expertise",
                name: "Weapon Expertise",
                icon: "spell_holy_blessingofstrength",
                row: 5,
                col: 1,
                ranks: 2,
                requiresTalents: "blade_flurry",
                description: [
                    "Increases your skill with Sword, Fist and Dagger weapons by {value}.",
                    {
                        value: [3, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "aggression",
                name: "Aggression",
                icon: "ability_racial_avatar",
                row: 5,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the damage of your Sinister Strike and Eviscerate abilities by {value}%.",
                    {
                        value: [2, 4, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "adrenaline_rush",
                name: "Adrenaline Rush",
                icon: "spell_shadow_shadowworddominate",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Increases your Energy regeneration rate by 100% for 15 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 300,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            }
        ],
        Subtlety: [
            {
                id: "master_of_deception",
                name: "Master of Deception",
                icon: "spell_shadow_charm",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the chance enemies have to detect you while in Stealth mode.{value}",
                    {
                        value: ["", "  More effective than Master of Deception (Rank 1).", "  More effective than Master of Deception (Rank 2).", "  More effective than Master of Deception (Rank 3).", "  More effective than Master of Deception (Rank 4)."]
                    }
                ],
                isActive: false
            },
            {
                id: "opportunity",
                name: "Opportunity",
                icon: "ability_warrior_warcry",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by {value}%.",
                    {
                        value: [4, 8, 12, 16, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "sleight_of_hand",
                name: "Sleight of Hand",
                icon: "ability_rogue_feint",
                row: 1,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the chance you are critically hit by melee and ranged attacks by {value1}% and increases the threat reduction of your Feint ability by {value2}%.",
                    {
                        value1: [1, 2],
                        value2: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "elusiveness",
                name: "Elusiveness",
                icon: "spell_magic_lesserinvisibilty",
                row: 1,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Vanish and Blind abilities by {value}.",
                    {
                        value: ["45 sec", "1.5 min"]
                    }
                ],
                isActive: false
            },
            {
                id: "camouflage",
                name: "Camouflage",
                icon: "ability_stealth",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your speed while stealthed by {value1}% and reduces the cooldown of your Stealth ability by {value2} sec.",
                    {
                        value1: [3, 6, 9, 12, 15],
                        value2: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "initiative",
                name: "Initiative",
                icon: "spell_shadow_fumble",
                row: 2,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
                    {
                        value: [25, 50, 75]
                    }
                ],
                isActive: false
            },
            {
                id: "ghostly_strike",
                name: "Ghostly Strike",
                icon: "spell_shadow_curse",
                row: 2,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "A strike that deals 125% weapon damage and increases your chance to dodge by 15% for 7 sec.  Awards 1 combo point."
                ],
                isActive: true,
                castTime: null,
                cooldown: 20,
                spentResource: 40,
                resourceType: 3,
                range: 0,
                requiresWeapon: 1
            },
            {
                id: "improved_ambush",
                name: "Improved Ambush",
                icon: "ability_rogue_ambush",
                row: 2,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the critical strike chance of your Ambush ability by {value}%.",
                    {
                        value: [15, 30, 45]
                    }
                ],
                isActive: false
            },
            {
                id: "setup",
                name: "Setup",
                icon: "spell_nature_mirrorimage",
                row: 3,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.",
                    {
                        value: [15, 30, 45]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_sap",
                name: "Improved Sap",
                icon: "ability_sap",
                row: 3,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to return to stealth mode after using your Sap ability.",
                    {
                        value: [30, 60, 90]
                    }
                ],
                isActive: false
            },
            {
                id: "serrated_blades",
                name: "Serrated Blades",
                icon: "inv_sword_17",
                row: 3,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Causes your attacks to ignore 0 of your target's Armor and increases the damage dealt by your Rupture ability by {value}%.  The amount of Armor reduced increases with your level.",
                    {
                        value: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "heightened_senses",
                name: "Heightened Senses",
                icon: "ability_ambush",
                row: 4,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by {value1}%.{value2}",
                    {
                        value1: [2, 4],
                        value2: ["", "  More effective than Heightened Senses (Rank 1)."]
                    }
                ],
                isActive: false
            },
            {
                id: "preparation",
                name: "Preparation",
                icon: "spell_shadow_antishadow",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "When activated, this ability immediately finishes the cooldown on your other Rogue abilities."
                ],
                isActive: true,
                castTime: null,
                cooldown: 600,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "dirty_deeds",
                name: "Dirty Deeds",
                icon: "spell_shadow_summonsuccubus",
                row: 4,
                col: 2,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the Energy cost of your Cheap Shot and Garrote abilities by {value}.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "hemorrhage",
                name: "Hemorrhage",
                icon: "spell_shadow_lifedrain",
                row: 4,
                col: 3,
                ranks: 1,
                requiresTalents: "serrated_blades",
                description: [
                    "An instant strike that damages the opponent and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to 3.  Lasts 30 charges or 15 sec.  Awards 1 combo point."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 35,
                resourceType: 3,
                range: 0,
                requiresWeapon: 1
            },
            {
                id: "deadliness",
                name: "Deadliness",
                icon: "inv_weapon_crossbow_11",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your Attack Power by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "premeditation",
                name: "Premeditation",
                icon: "spell_shadow_possession",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "preparation",
                description: [
                    "When used, adds 2 combo points to your target.  You must add to or use those combo points within 10 sec or the combo points are lost."
                ],
                isActive: true,
                castTime: null,
                cooldown: 120,
                spentResource: null,
                range: 20,
                requiresWeapon: 0,
                requiresStealth: true
            }
        ]
    },
    shaman: {
        Elemental: [
            {
                id: "convection",
                name: "Convection",
                icon: "spell_nature_wispsplode",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "concussion",
                name: "Concussion",
                icon: "spell_fire_fireball",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "earths_grasp",
                name: "Earth's Grasp",
                icon: "spell_nature_stoneclawtotem",
                row: 1,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the health of your Stoneclaw Totem by {value1}% and the radius of your Earthbind Totem by {value2}%.",
                    {
                        value1: [25, 50],
                        value2: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "elemental_warding",
                name: "Elemental Warding",
                icon: "spell_nature_spiritarmor",
                row: 1,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces damage taken from Fire, Frost and Nature effects by {value}%.",
                    {
                        value: [4, 7, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "call_of_flame",
                name: "Call of Flame",
                icon: "spell_fire_immolation",
                row: 1,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Fire Totems by {value}%.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "elemental_focus",
                name: "Elemental Focus",
                icon: "spell_shadow_manaburn",
                row: 2,
                col: 0,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell.  The Clearcasting state reduces the mana cost of your next damage spell by 100%."
                ],
                isActive: false
            },
            {
                id: "reverberation",
                name: "Reverberation",
                icon: "spell_frost_frostward",
                row: 2,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Shock spells by {value} sec.",
                    {
                        value: [0.2, 0.4, 0.6, 0.8, 1]
                    }
                ],
                isActive: false
            },
            {
                id: "call_of_thunder",
                name: "Call of Thunder",
                icon: "spell_nature_callstorm",
                row: 2,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional {value}%.",
                    {
                        value: [1, 2, 3, 4, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_fire_totems",
                name: "Improved Fire Totems",
                icon: "spell_fire_sealoffire",
                row: 3,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the delay before your Fire Nova Totem activates by {value1} sec. and decreases the threat generated by your Magma Totem by {value2}%.",
                    {
                        value1: [1, 2],
                        value2: [25, 50]
                    }
                ],
                isActive: false
            },
            {
                id: "eye_of_the_storm",
                name: "Eye of the Storm",
                icon: "spell_nature_eyeofthestorm",
                row: 3,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike.  The Focused Casting effect prevents you from losing casting time when taking damage.",
                    {
                        value: [33, 66, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "elemental_devastation",
                name: "Elemental Devastation",
                icon: "classic_spell_fire_elementaldevastation",
                row: 3,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Your offensive spell crits will increase your chance to get a critical strike with melee attacks by {value}% for 10 sec.",
                    {
                        value: [3, 6, 9]
                    }
                ],
                isActive: false
            },
            {
                id: "storm_reach",
                name: "Storm Reach",
                icon: "spell_nature_stormreach",
                row: 4,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the range of your Lightning Bolt and Chain Lightning spells by {value} yards.",
                    {
                        value: [3, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "elemental_fury",
                name: "Elemental Fury",
                icon: "spell_fire_volcano",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Increases the critical strike damage bonus of your Searing, Magma, and Fire Nova Totems and your Fire, Frost, and Nature spells by 100%."
                ],
                isActive: false
            },
            {
                id: "lightning_mastery",
                name: "Lightning Mastery",
                icon: "spell_lightning_lightningbolt01",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: "call_of_thunder",
                description: [
                    "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by {value} sec.",
                    {
                        value: [0.2, 0.4, 0.6, 0.8, 1]
                    }
                ],
                isActive: false
            },
            {
                id: "elemental_mastery",
                name: "Elemental Mastery",
                icon: "spell_nature_wispheal",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "elemental_fury",
                description: [
                    "When activated, this spell gives your next Fire, Frost, or Nature damage spell a 100% critical strike chance and reduces the mana cost by 100%."
                ],
                isActive: true,
                castTime: null,
                cooldown: 180,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            }
        ],
        Enhancement: [
            {
                id: "ancestral_knowledge",
                name: "Ancestral Knowledge",
                icon: "spell_shadow_grimward",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your maximum Mana by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "shield_specialization",
                name: "Shield Specialization",
                icon: "inv_shield_06",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to block attacks with a shield by {block}% and increases the amount blocked by {blocked}%.",
                    {
                        block: [1, 2, 3, 4, 5],
                        blocked: [5, 10, 15, 20, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "guardian_totems",
                name: "Guardian Totems",
                icon: "spell_nature_stoneskintotem",
                row: 1,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by {damage}% and reduces the cooldown of your Grounding Totem by {cooldown} sec.",
                    {
                        damage: [10, 20],
                        cooldown: [1, 2]
                    }
                ],
                isActive: false
            },
            {
                id: "thundering_strikes",
                name: "Thundering Strikes",
                icon: "ability_thunderbolt",
                row: 1,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Improves your chance to get a critical strike with your weapon attacks by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false,
                requiresWeapon: 1
            },
            {
                id: "improved_ghost_wolf",
                name: "Improved Ghost Wolf",
                icon: "spell_nature_spiritwolf",
                row: 1,
                col: 2,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the cast time of your Ghost Wolf spell by {value} sec.",
                    {
                        value: [1, 2]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_lightning_shield",
                name: "Improved Lightning Shield",
                icon: "spell_nature_lightningshield",
                row: 1,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Lightning Shield orbs by {value}%.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "enhancing_totems",
                name: "Enhancing Totems",
                icon: "spell_nature_earthbindtotem",
                row: 2,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the effect of your Strength of Earth and Grace of Air Totems by {value}%.",
                    {
                        value: [8, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "two_handed_axes_and_maces",
                name: "Two-Handed Axes and Maces",
                icon: "inv_axe_10",
                row: 2,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Allows you to use Two-Handed Axes and Two-Handed Maces."
                ],
                isActive: false
            },
            {
                id: "anticipation",
                name: "Anticipation",
                icon: "spell_nature_mirrorimage",
                row: 2,
                col: 3,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to dodge by an additional {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "flurry",
                name: "Flurry",
                icon: "ability_ghoulfrenzy",
                row: 3,
                col: 1,
                ranks: 5,
                requiresTalents: "thundering_strikes",
                description: [
                    "Increases your attack speed by {value}% for your next 3 swings after dealing a critical strike.",
                    {
                        value: [10, 15, 20, 25, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "toughness",
                name: "Toughness",
                icon: "spell_holy_devotion",
                row: 3,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your armor value from items by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_weapon_totems",
                name: "Improved Weapon Totems",
                icon: "spell_fire_enchantweapon",
                row: 4,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the melee attack power bonus of your Windfury Totem by {windfury}% and increases the damage caused by your Flametongue Totem by {flametongue}%.",
                    {
                        windfury: [15, 30],
                        flametongue: [6, 12]
                    }
                ],
                isActive: false
            },
            {
                id: "elemental_weapons",
                name: "Elemental Weapons",
                icon: "spell_fire_flametounge",
                row: 4,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the melee attack power bonus of your Rockbiter Weapon by {rockbiter}%, your Windfury Weapon effect by {windfury}% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by {flamefrost}%.",
                    {
                        rockbiter: [7, 14, 20],
                        windfury: [13, 27, 40],
                        flamefrost: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "parry",
                name: "Parry",
                icon: "ability_parry",
                row: 4,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Gives a chance to parry enemy melee attacks."
                ],
                isActive: false
            },
            {
                id: "weapon_mastery",
                name: "Weapon Mastery",
                icon: "ability_hunter_swiftstrike",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage you deal with all weapons by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "stormstrike",
                name: "Stormstrike",
                icon: "spell_holy_sealofmight",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "elemental_weapons",
                description: [
                    "Gives you an extra attack.  In addition, the next 2 sources of Nature damage dealt to the target are increased by 20%. Lasts 12 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 6,
                spentResource: 21,
                absoluteSpent: false,
                resourceType: 1,
                range: 0,
                requiresWeapon: 0
            }
        ],
        Restoration: [
            {
                id: "improved_healing_wave",
                name: "Improved Healing Wave",
                icon: "spell_nature_magicimmunity",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the casting time of your Healing Wave spell by {value} sec.",
                    {
                        value: [0.1, 0.2, 0.3, 0.4, 0.5]
                    }
                ],
                isActive: false
            },
            {
                id: "tidal_focus",
                name: "Tidal Focus",
                icon: "spell_frost_manarecharge",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the Mana cost of your healing spells by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_reincarnation",
                name: "Improved Reincarnation",
                icon: "spell_nature_reincarnation",
                row: 1,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Reincarnation spell by {value} min and increases the amount of health and mana you reincarnate with by an additional {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "ancestral_healing",
                name: "Ancestral Healing",
                icon: "spell_nature_undyingstrength",
                row: 1,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases your target's armor value by {value}% for 15 sec after getting a critical effect from one of your healing spells.",
                    {
                        value: [8, 16, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "totemic_focus",
                name: "Totemic Focus",
                icon: "spell_nature_moonglow",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the Mana cost of your totems by {value}%.",
                    {
                        value: [5, 10, 15, 20, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "natures_guidance",
                name: "Nature's Guidance",
                icon: "spell_frost_stun",
                row: 2,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases your chance to hit with melee attacks and spells by {value}%.",
                    {
                        value: [1, 2, 3]
                    }
                ],
                isActive: false
            },
            {
                id: "healing_focus",
                name: "Healing Focus",
                icon: "spell_nature_healingwavelesser",
                row: 2,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to avoid interruption caused by damage while casting any healing spell.",
                    {
                        value: [14, 28, 42, 56, 70]
                    }
                ],
                isActive: false
            },
            {
                id: "totemic_mastery",
                name: "Totemic Mastery",
                icon: "spell_nature_nullward",
                row: 2,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "The radius of your totems that affect friendly targets is increased to 30 yd."
                ],
                isActive: false
            },
            {
                id: "healing_grace",
                name: "Healing Grace",
                icon: "spell_nature_healingtouch",
                row: 2,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces the threat generated by your healing spells by {value}%.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "restorative_totems",
                name: "Restorative Totems",
                icon: "spell_nature_manaregentotem",
                row: 3,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the effect of your Mana Spring and Healing Stream Totems by {value}%.",
                    {
                        value: [5, 10, 15, 20, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "tidal_mastery",
                name: "Tidal Mastery",
                icon: "spell_nature_tranquility",
                row: 3,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the critical effect chance of your healing and lightning spells by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "healing_way",
                name: "Healing Way",
                icon: "classic_spell_nature_healingway",
                row: 4,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Your Healing Wave spells have a {value}% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec.  This effect will stack up to 3 times.",
                    {
                        value: [33, 66, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "natures_swiftness",
                name: "Nature's Swiftness",
                icon: "spell_nature_ravenform",
                row: 4,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "When activated, your next Nature spell with a casting time less than 10 sec. becomes an instant cast spell."
                ],
                isActive: true,
                castTime: null,
                cooldown: 180,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "purification",
                name: "Purification",
                icon: "spell_frost_wizardmark",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the effectiveness of your healing spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "mana_tide_totem",
                name: "Mana Tide Totem",
                icon: "spell_frost_summonwaterelemental",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "restorative_totems",
                description: [
                    "Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 sec that restores 170 mana every 3 seconds to group members within 20 yards."
                ],
                isActive: true,
                castTime: null,
                cooldown: 300,
                spentResource: 20,
                absoluteSpent: true,
                resourceType: 1,
                range: null,
                requiresWeapon: 0,
                requiresWaterTotem: true
            }
        ]
    },
    warlock: {
        Affliction: [
            {
                id: "suppression",
                name: "Suppression",
                icon: "spell_shadow_unsummonbuilding",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the chance for enemies to resist your Affliction spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_corruption",
                name: "Improved Corruption",
                icon: "spell_shadow_abominationexplosion",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the casting time of your Corruption spell by {value} sec.",
                    {
                        value: [0.4, 0.8, 1.2, 1.6, 2]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_curse_of_weakness",
                name: "Improved Curse of Weakness",
                icon: "spell_shadow_curseofmannoroth",
                row: 1,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the effect of your Curse of Weakness by {value}%.",
                    {
                        value: [6, 13, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_drain_soul",
                name: "Improved Drain Soul",
                icon: "spell_shadow_haunting",
                row: 1,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to get a 100% increase to your Mana regeneration for 10 sec if the target is killed by you while you drain its soul.  In addition your Mana may continue to regenerate while casting at 50% of normal.",
                    {
                        value: [50, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_life_tap",
                name: "Improved Life Tap",
                icon: "spell_shadow_burningspirit",
                row: 1,
                col: 2,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the amount of Mana awarded by your Life Tap spell by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_drain_life",
                name: "Improved Drain Life",
                icon: "spell_shadow_lifedrain02",
                row: 1,
                col: 3,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the Health drained by your Drain Life spell by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_curse_of_agony",
                name: "Improved Curse of Agony",
                icon: "spell_shadow_curseofsargeras",
                row: 2,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Curse of Agony by {value}%.",
                    {
                        value: [2, 4, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "fel_concentration",
                name: "Fel Concentration",
                icon: "spell_shadow_fingerofdeath",
                row: 2,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.",
                    {
                        value: [14, 28, 42, 56, 70]
                    }
                ],
                isActive: false
            },
            {
                id: "amplify_curse",
                name: "Amplify Curse",
                icon: "spell_shadow_contagion",
                row: 2,
                col: 2,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Increases the effect of your next Curse of Weakness or Curse of Agony by 50%, or your next Curse of Exhaustion by 20%.  Lasts 30 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 180,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "grim_reach",
                name: "Grim Reach",
                icon: "spell_shadow_callofbone",
                row: 3,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the range of your Affliction spells by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "nightfall",
                name: "Nightfall",
                icon: "spell_shadow_twilight",
                row: 3,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Gives your Corruption and Drain Life spells a {value}% chance to cause you to enter a Shadow Trance state after damaging the opponent.  The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
                    {
                        value: [2, 4]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_drain_mana",
                name: "Improved Drain Mana",
                icon: "spell_shadow_siphonmana",
                row: 3,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Causes {value}% of the Mana drained by your Drain Mana spell to damage the opponent.",
                    {
                        value: [15, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "siphon_life",
                name: "Siphon Life",
                icon: "spell_shadow_requiem",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Transfers 15 health from the target to the caster every 3 sec.  Lasts 30 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 150,
                absoluteSpent: true,
                resourceType: 1,
                range: 30,
                requiresWeapon: 0
            },
            {
                id: "curse_of_exhaustion",
                name: "Curse of Exhaustion",
                icon: "spell_shadow_grimward",
                row: 4,
                col: 2,
                ranks: 1,
                requiresTalents: "amplify_curse",
                description: [
                    "Reduces the target's movement speed by 10% for 12 sec.  Only one Curse per Warlock can be active on any one target."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 8,
                absoluteSpent: false,
                resourceType: 1,
                range: 30,
                requiresWeapon: 0
            },
            {
                id: "improved_curse_of_exhaustion",
                name: "Improved Curse of Exhaustion",
                icon: "spell_shadow_grimward",
                row: 4,
                col: 3,
                ranks: 4,
                requiresTalents: "curse_of_exhaustion",
                description: [
                    "Increases the speed reduction of your Curse of Exhaustion by {value}%.",
                    {
                        value: [5, 10, 15, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "shadow_mastery",
                name: "Shadow Mastery",
                icon: "spell_shadow_shadetruesight",
                row: 5,
                col: 1,
                ranks: 5,
                requiresTalents: "siphon_life",
                description: [
                    "Increases the damage dealt or life drained by your Shadow spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "dark_pact",
                name: "Dark Pact",
                icon: "spell_shadow_darkritual",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Drains 150 of your pet's Mana, returning 100% to you."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: null,
                range: 20,
                requiresWeapon: 0
            }
        ],
        Demonology: [
            {
                id: "improved_healthstone",
                name: "Improved Healthstone",
                icon: "inv_stone_04",
                row: 0,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the amount of Health restored by your Healthstone by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_imp",
                name: "Improved Imp",
                icon: "spell_shadow_summonimp",
                row: 0,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by {value}%.",
                    {
                        value: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "demonic_embrace",
                name: "Demonic Embrace",
                icon: "spell_shadow_metamorphosis",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your total Stamina by {stamina}% but reduces your total Spirit by {spirit}%.",
                    {
                        stamina: [3, 6, 9, 12, 15],
                        spirit: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_health_funnel",
                name: "Improved Health Funnel",
                icon: "spell_shadow_lifedrain",
                row: 1,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the amount of Health transferred by your Health Funnel spell by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_voidwalker",
                name: "Improved Voidwalker",
                icon: "spell_shadow_summonvoidwalker",
                row: 1,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by {value}%.",
                    {
                        value: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "fel_intellect",
                name: "Fel Intellect",
                icon: "spell_holy_magicalsentry",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the maximum Mana of your Imp, Voidwalker, Succubus, and Felhunter by {value}%.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_succubus",
                name: "Improved Succubus",
                icon: "spell_shadow_summonsuccubus",
                row: 2,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by {effect}%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by {duration}%.",
                    {
                        effect: [10, 20, 30],
                        duration: [10, 20, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "fel_domination",
                name: "Fel Domination",
                icon: "spell_nature_removecurse",
                row: 2,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Your next Imp, Voidwalker, Succubus, or Felhunter Summon spell has its casting time reduced by 5.5 sec and its Mana cost reduced by 50%."
                ],
                isActive: true,
                castTime: null,
                cooldown: 900,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "fel_stamina",
                name: "Fel Stamina",
                icon: "spell_shadow_antishadow",
                row: 2,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the maximum Health of your Imp, Voidwalker, Succubus, and Felhunter by {value}%.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "master_summoner",
                name: "Master Summoner",
                icon: "spell_shadow_impphaseshift",
                row: 3,
                col: 1,
                ranks: 2,
                requiresTalents: "fel_domination",
                description: [
                    "Reduces the casting time of your Imp, Voidwalker, Succubus, and Felhunter Summoning spells by {casttime} sec and the Mana cost by {cost}%.",
                    {
                        casttime: [2, 4],
                        cost: [20, 40]
                    }
                ],
                isActive: false
            },
            {
                id: "unholy_power",
                name: "Unholy Power",
                icon: "spell_shadow_shadowworddominate",
                row: 3,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by {value}%.",
                    {
                        value: [4, 8, 12, 16, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_enslave_demon",
                name: "Improved Enslave Demon",
                icon: "spell_shadow_enslavedemon",
                row: 4,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by {value}% and reduces the resist chance by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "demonic_sacrifice",
                name: "Demonic Sacrifice",
                icon: "spell_shadow_psychicscream",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "When activated, sacrifices your summoned demon to grant you an effect that lasts 30 min.  The effect is canceled if any Demon is summoned.<br><br>Imp: Increases your Fire damage by 15%.<br><br>Voidwalker: Restores 3% of total Health every 4 sec.<br><br>Succubus: Increases your Shadow damage by 15%.<br><br>Felhunter: Restores 2% of total Mana every 4 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: null,
                range: 100,
                requiresWeapon: 0
            },
            {
                id: "improved_firestone",
                name: "Improved Firestone",
                icon: "inv_ammo_firetar",
                row: 4,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the bonus Fire damage from Firestones and the Firestone effect by {value}%.",
                    {
                        value: [15, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "master_demonologist",
                name: "Master Demonologist",
                icon: "spell_shadow_shadowpact",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: "unholy_power",
                description: [
                    "Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br><br>Imp - Increases threat caused by {imp}%.<br><br>Voidwalker - Reduces physical damage taken by {voidsucc}%.<br><br>Succubus - Increases all damage caused by {voidsucc}%.<br><br>Felhunter - Increases all resistances by {felhunter} per level.",
                    {
                        imp: [4, 8, 12, 16, 20],
                        voidsucc: [2, 4, 6, 8, 10],
                        felhunter: [".2", ".4", ".6", ".8", "1"]
                    }
                ],
                isActive: false
            },
            {
                id: "soul_link",
                name: "Soul Link",
                icon: "spell_shadow_gathershadows",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "demonic_sacrifice",
                description: [
                    "When active, 30% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, or Felhunter demon instead.  In addition, both the demon and master will inflict 3% more damage. Lasts as long as the demon is active."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 20,
                absoluteSpent: false,
                resourceType: 1,
                range: 100,
                requiresWeapon: 0
            },
            {
                id: "improved_spellstone",
                name: "Improved Spellstone",
                icon: "inv_misc_gem_sapphire_01",
                row: 6,
                col: 2,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the amount of damage absorbed by your Spellstone by {value}%.",
                    {
                        value: [15, 30]
                    }
                ],
                isActive: false
            }
        ],
        Destruction: [
            {
                id: "improved_shadow_bolt",
                name: "Improved Shadow Bolt",
                icon: "spell_shadow_shadowbolt",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Shadow Bolt spell by {damage}%, and your Shadow Bolt has a {chance}% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.",
                    {
                        damage: [2, 4, 6, 8, 10],
                        chance: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "cataclysm",
                name: "Cataclysm",
                icon: "spell_fire_windsofwoe",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the Mana cost of your Destruction spells by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "bane",
                name: "Bane",
                icon: "spell_shadow_deathpact",
                row: 1,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Reduces the casting time of your Shadow Bolt and Immolate spells by {value1} sec and your Soul Fire spell by {value2} sec.",
                    {
                        value1: [0.1, 0.2, 0.3, 0.4, 0.5],
                        value2: [0.4, 0.8, 1.2, 1.6, 2]
                    }
                ],
                isActive: false
            },
            {
                id: "aftermath",
                name: "Aftermath",
                icon: "spell_fire_fire",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives your Destruction spells a {value}% chance to daze the target for 5 sec.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_firebolt",
                name: "Improved Firebolt",
                icon: "spell_fire_firebolt",
                row: 2,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the casting time of your Imp's Firebolt spell by {value} sec.",
                    {
                        value: [0.5, 1]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_lash_of_pain",
                name: "Improved Lash of Pain",
                icon: "spell_shadow_curse",
                row: 2,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Succubus' Lash of Pain spell by {value} sec.",
                    {
                        value: [3, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "devastation",
                name: "Devastation",
                icon: "spell_fire_flameshock",
                row: 2,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the critical strike chance of your Destruction spells by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "shadowburn",
                name: "Shadowburn",
                icon: "spell_shadow_scourgebuild",
                row: 2,
                col: 3,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Instantly blasts the target for 91 to 104 Shadow damage.  If the target dies within 5 sec of Shadowburn, and yields experience or honor, the caster gains a Soul Shard."
                ],
                isActive: true,
                castTime: null,
                cooldown: 15,
                spentResource: 105,
                absoluteSpent: true,
                resourceType: 1,
                range: 20,
                requiresWeapon: 0,
                requiresSoulShard: true
            },
            {
                id: "intensity",
                name: "Intensity",
                icon: "spell_fire_lavaspawn",
                row: 3,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to resist interruption caused by damage while channeling the Rain of Fire, Hellfire or Soul Fire spell.",
                    {
                        value: [35, 70]
                    }
                ],
                isActive: false
            },
            {
                id: "destructive_reach",
                name: "Destructive Reach",
                icon: "spell_shadow_corpseexplode",
                row: 3,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the range of your Destruction spells by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_searing_pain",
                name: "Improved Searing Pain",
                icon: "spell_fire_soulburn",
                row: 3,
                col: 3,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the critical strike chance of your Searing Pain spell by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "pyroclasm",
                name: "Pyroclasm",
                icon: "spell_fire_volcano",
                row: 4,
                col: 0,
                ranks: 2,
                requiresTalents: "intensity",
                description: [
                    "Gives your Rain of Fire, Hellfire, and Soul Fire spells a {value}% chance to stun the target for 3 sec.",
                    {
                        value: [13, 26]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_immolate",
                name: "Improved Immolate",
                icon: "spell_fire_immolation",
                row: 4,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the initial damage of your Immolate spell by {value}%.",
                    {
                        value: [5, 10, 15, 20, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "ruin",
                name: "Ruin",
                icon: "spell_shadow_shadowwordpain",
                row: 4,
                col: 2,
                ranks: 1,
                requiresTalents: "devastation",
                description: [
                    "Increases the critical strike damage bonus of your Destruction spells by 100%."
                ],
                isActive: false
            },
            {
                id: "emberstorm",
                name: "Emberstorm",
                icon: "spell_fire_selfdestruct",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your Fire spells by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "conflagrate",
                name: "Conflagrate",
                icon: "spell_fire_fireball",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "improved_immolate",
                description: [
                    "Ignites a target that is already afflicted by Immolate, dealing 249 to 316 Fire damage and consuming the Immolate spell."
                ],
                isActive: true,
                castTime: null,
                cooldown: 10,
                spentResource: 165,
                absoluteSpent: true,
                resourceType: 1,
                range: 30,
                requiresWeapon: 0
            }
        ]
    },
    warrior: {
        Arms: [
            {
                id: "improved_heroic_strike",
                name: "Improved Heroic Strike",
                icon: "ability_rogue_ambush",
                row: 0,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces the cost of your Heroic Strike ability by {value}.",
                    {
                        value: ["1 rage point", "2 rage points", "3 rage points"]
                    }
                ],
                isActive: false
            },
            {
                id: "deflection",
                name: "Deflection",
                icon: "ability_parry",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your Parry chance by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_rend",
                name: "Improved Rend",
                icon: "ability_gouge",
                row: 0,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the bleed damage done by your Rend ability by {value}%.",
                    {
                        value: [15, 25, 35]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_charge",
                name: "Improved Charge",
                icon: "ability_warrior_charge",
                row: 1,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the amount of rage generated by your Charge ability by {value}.",
                    {
                        value: [3, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "tactical_mastery",
                name: "Tactical Mastery",
                icon: "spell_nature_enchantarmor",
                row: 1,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "You retain up to {value} of your rage points when you change stances.",
                    {
                        value: [5, 10, 15, 20, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_thunder_clap",
                name: "Improved Thunder Clap",
                icon: "ability_thunderclap",
                row: 1,
                col: 3,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces the cost of your Thunder Clap ability by {value}.",
                    {
                        value: ["1 rage point", "2 rage points", "4 rage points"]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_overpower",
                name: "Improved Overpower",
                icon: "inv_sword_05",
                row: 2,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the critical strike chance of your Overpower ability by {value}%.",
                    {
                        value: [25, 50]
                    }
                ],
                isActive: false
            },
            {
                id: "anger_management",
                name: "Anger Management",
                icon: "spell_holy_blessingofstamina",
                row: 2,
                col: 1,
                ranks: 1,
                requiresTalents: "tactical_mastery",
                description: [
                    "Increases the time required for your rage to decay while out of combat by 30%."
                ],
                isActive: false
            },
            {
                id: "deep_wounds",
                name: "Deep Wounds",
                icon: "ability_backstab",
                row: 2,
                col: 2,
                ranks: 3,
                requiresTalents: "improved_rend",
                description: [
                    "Your critical strikes cause the opponent to bleed, dealing {value}% of your melee weapon's average damage over 6 sec.",
                    {
                        value: [16, 32, 48]
                    }
                ],
                isActive: false,
                requiresWeapon: 1
            },
            {
                id: "two_handed_weapon_specialization",
                name: "Two-Handed Weapon Specialization",
                icon: "inv_axe_09",
                row: 3,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage you deal with two-handed melee weapons by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "impale",
                name: "Impale",
                icon: "ability_searingarrow",
                row: 3,
                col: 2,
                ranks: 2,
                requiresTalents: "deep_wounds",
                description: [
                    "Increases the critical strike damage bonus of your abilities by {value}%.",
                    {
                        value: [10, 20]
                    }
                ],
                isActive: false
            },
            {
                id: "axe_specialization",
                name: "Axe Specialization",
                icon: "inv_axe_06",
                row: 4,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to get a critical strike with Axes by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "sweeping_strikes",
                name: "Sweeping Strikes",
                icon: "ability_rogue_slicedice",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Your next 5 melee attacks strike an additional nearby opponent."
                ],
                isActive: true,
                castTime: null,
                cooldown: 30,
                spentResource: 30,
                resourceType: 2,
                range: null,
                requiresWeapon: 0,
                requiresStance: 1
            },
            {
                id: "mace_specialization",
                name: "Mace Specialization",
                icon: "inv_mace_01",
                row: 4,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to stun your target for 3 sec with a Mace.",
                    {
                        value: [1, 2, 3, 4, 6]
                    }
                ],
                isActive: false
            },
            {
                id: "sword_specialization",
                name: "Sword Specialization",
                icon: "inv_sword_27",
                row: 4,
                col: 3,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to get an extra attack on the same target after dealing damage with your Sword.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "polearm_specialization",
                name: "Polearm Specialization",
                icon: "inv_weapon_halbard_01",
                row: 5,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to get a critical strike with Polearms by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_hamstring",
                name: "Improved Hamstring",
                icon: "ability_shockwave",
                row: 5,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Gives your Hamstring ability a {value}% chance to immobilize the target for 5 sec.",
                    {
                        value: [5, 10, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "mortal_strike",
                name: "Mortal Strike",
                icon: "ability_warrior_savageblow",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "sweeping_strikes",
                description: [
                    "A vicious strike that deals weapon damage plus 85 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 6,
                spentResource: 30,
                resourceType: 2,
                range: 0,
                requiresWeapon: 1
            }
        ],
        Fury: [
            {
                id: "booming_voice",
                name: "Booming Voice",
                icon: "spell_nature_purge",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by {value}%.",
                    {
                        value: [10, 20, 30, 40, 50]
                    }
                ],
                isActive: false
            },
            {
                id: "cruelty",
                name: "Cruelty",
                icon: "ability_rogue_eviscerate",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to get a critical strike with melee weapons by {value}%.",
                    {
                        value: [1, 2, 3, 4, 5]
                    }
                ],
                isActive: false,
                requiresWeapon: 1
            },
            {
                id: "improved_demoralizing_shout",
                name: "Improved Demoralizing Shout",
                icon: "ability_warrior_warcry",
                row: 1,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the melee attack power reduction of your Demoralizing Shout by {value}%.",
                    {
                        value: [8, 16, 24, 32, 40]
                    }
                ],
                isActive: false
            },
            {
                id: "unbridled_wrath",
                name: "Unbridled Wrath",
                icon: "spell_nature_stoneclawtotem",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% chance to generate an additional Rage point when you deal melee damage with a weapon.",
                    {
                        value: [8, 16, 24, 32, 40]
                    }
                ],
                isActive: false,
                requiresWeapon: 1
            },
            {
                id: "improved_cleave",
                name: "Improved Cleave",
                icon: "ability_warrior_cleave",
                row: 2,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the bonus damage done by your Cleave ability by {value}%.",
                    {
                        value: [40, 80, 120]
                    }
                ],
                isActive: false
            },
            {
                id: "piercing_howl",
                name: "Piercing Howl",
                icon: "spell_shadow_deathscream",
                row: 2,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Causes all enemies within 10 yards to be Dazed, reducing movement speed by 50% for 6 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: null,
                spentResource: 10,
                resourceType: 2,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "blood_craze",
                name: "Blood Craze",
                icon: "spell_shadow_summonimp",
                row: 2,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Regenerates {value}% of your total Health over 6 sec after being the victim of a critical strike.",
                    {
                        value: [1, 2, 3]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_battle_shout",
                name: "Improved Battle Shout",
                icon: "ability_warrior_battleshout",
                row: 2,
                col: 3,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the melee attack power bonus of your Battle Shout by {value}%.",
                    {
                        value: [5, 10, 15, 20, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "dual_wield_specialization",
                name: "Dual Wield Specialization",
                icon: "ability_dualwield",
                row: 3,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage done by your offhand weapon by {value}%.",
                    {
                        value: [5, 10, 15, 20, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_execute",
                name: "Improved Execute",
                icon: "inv_sword_48",
                row: 3,
                col: 1,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the Rage cost of your Execute ability by {value}.",
                    {
                        value: [2, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "enrage",
                name: "Enrage",
                icon: "spell_shadow_unholyfrenzy",
                row: 3,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Gives you a {value}% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.",
                    {
                        value: [5, 10, 15, 20, 25]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_slam",
                name: "Improved Slam",
                icon: "ability_warrior_decisivestrike",
                row: 4,
                col: 0,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Decreases the casting time of your Slam ability by {value} sec.",
                    {
                        value: [0.1, 0.2, 0.3, 0.4, 0.5]
                    }
                ],
                isActive: false
            },
            {
                id: "death_wish",
                name: "Death Wish",
                icon: "spell_shadow_deathpact",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "When activated, increases your physical damage by 20% and makes you immune to Fear effects, but lowers your armor and all resistances by 20%.  Lasts 30 sec."
                ],
                isActive: true,
                castTime: null,
                cooldown: 180,
                spentResource: 10,
                resourceType: 2,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "improved_intercept",
                name: "Improved Intercept",
                icon: "ability_rogue_sprint",
                row: 4,
                col: 3,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Intercept ability by {value} sec.",
                    {
                        value: [5, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_berserker_rage",
                name: "Improved Berserker Rage",
                icon: "spell_nature_ancestralguardian",
                row: 5,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "The Berserker Rage ability will generate {value} rage when used.",
                    {
                        value: [5, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "flurry",
                name: "Flurry",
                icon: "ability_ghoulfrenzy",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: "enrage",
                description: [
                    "Increases your attack speed by {value}% for your next 3 swings after dealing a melee critical strike.",
                    {
                        value: [10, 15, 20, 25, 30]
                    }
                ],
                isActive: false
            },
            {
                id: "bloodthirst",
                name: "Bloodthirst",
                icon: "spell_nature_bloodlust",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "death_wish",
                description: [
                    "Instantly attack the target causing (Attack power * 50 / 100) damage.  In addition, the next 3 successful melee attacks will restore 1% of max health.  This effect lasts 8 sec.  Damage is based on your attack power."
                ],
                isActive: true,
                castTime: null,
                cooldown: 6,
                spentResource: 30,
                resourceType: 2,
                range: 0,
                requiresWeapon: 0
            }
        ],
        Protection: [
            {
                id: "shield_specialization",
                name: "Shield Specialization",
                icon: "inv_shield_06",
                row: 0,
                col: 1,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to block attacks with a shield by {block}% and has a {rage}% chance to generate 5 rage when a block, dodge, or parry occurs.",
                    {
                        block: [1, 2, 3, 4, 5],
                        rage: [20, 40, 60, 80, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "anticipation",
                name: "Anticipation",
                icon: "spell_nature_mirrorimage",
                row: 0,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your Defense skill by {value}.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_bloodrage",
                name: "Improved Bloodrage",
                icon: "ability_racial_bloodrage",
                row: 1,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the rage generated by your Bloodrage ability by {value}%.",
                    {
                        value: [25, 50]
                    }
                ],
                isActive: false
            },
            {
                id: "toughness",
                name: "Toughness",
                icon: "spell_holy_devotion",
                row: 1,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your armor value from items by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "iron_will",
                name: "Iron Will",
                icon: "spell_magic_magearmor",
                row: 1,
                col: 3,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases your chance to resist Stun and Charm effects by an additional {value}%.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false
            },
            {
                id: "last_stand",
                name: "Last Stand",
                icon: "spell_holy_ashestoashes",
                row: 2,
                col: 0,
                ranks: 1,
                requiresTalents: "improved_bloodrage",
                description: [
                    "When activated, this ability temporarily grants you 30% of your maximum health for 20 sec.  After the effect expires, the health is lost."
                ],
                isActive: true,
                castTime: null,
                cooldown: 180,
                spentResource: null,
                range: null,
                requiresWeapon: 0
            },
            {
                id: "improved_shield_block",
                name: "Improved Shield Block",
                icon: "ability_defend",
                row: 2,
                col: 1,
                ranks: 3,
                requiresTalents: "shield_specialization",
                description: [
                    "Allows your Shield Block ability to block an additional attack and increases the duration by {value}.",
                    {
                        value: ["0.5 seconds", "1 second", "2 seconds"]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_revenge",
                name: "Improved Revenge",
                icon: "ability_warrior_revenge",
                row: 2,
                col: 2,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Gives your Revenge ability a {value}% chance to stun the target for 3 sec.",
                    {
                        value: [15, 30, 45]
                    }
                ],
                isActive: false
            },
            {
                id: "defiance",
                name: "Defiance",
                icon: "ability_warrior_innerrage",
                row: 2,
                col: 3,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the threat generated by your attacks by {value}% while in Defensive Stance.",
                    {
                        value: [3, 6, 9, 12, 15]
                    }
                ],
                isActive: false,
                requiresStance: 2
            },
            {
                id: "improved_sunder_armor",
                name: "Improved Sunder Armor",
                icon: "ability_warrior_sunder",
                row: 3,
                col: 0,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Reduces the cost of your Sunder Armor ability by {value}.",
                    {
                        value: ["1 rage point", "2 rage points", "3 rage points"]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_disarm",
                name: "Improved Disarm",
                icon: "ability_warrior_disarm",
                row: 3,
                col: 1,
                ranks: 3,
                requiresTalents: null,
                description: [
                    "Increases the duration of your Disarm ability by {value} sec.",
                    {
                        value: [1, 2, 3]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_taunt",
                name: "Improved Taunt",
                icon: "spell_nature_reincarnation",
                row: 3,
                col: 2,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Reduces the cooldown of your Taunt ability by {value} sec.",
                    {
                        value: [1, 2]
                    }
                ],
                isActive: false
            },
            {
                id: "improved_shield_wall",
                name: "Improved Shield Wall",
                icon: "ability_warrior_shieldwall",
                row: 4,
                col: 0,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Increases the effect duration of your Shield Wall ability by {value} secs.",
                    {
                        value: [3, 5]
                    }
                ],
                isActive: false
            },
            {
                id: "concussion_blow",
                name: "Concussion Blow",
                icon: "ability_thunderbolt",
                row: 4,
                col: 1,
                ranks: 1,
                requiresTalents: null,
                description: [
                    "Stuns the opponent for 5 sec and deals (38 / 100 * Attack power) damage (based on attack power)."
                ],
                isActive: true,
                castTime: null,
                cooldown: 45,
                spentResource: 15,
                resourceType: 2,
                range: 0,
                requiresWeapon: 1
            },
            {
                id: "improved_shield_bash",
                name: "Improved Shield Bash",
                icon: "ability_warrior_shieldbash",
                row: 4,
                col: 2,
                ranks: 2,
                requiresTalents: null,
                description: [
                    "Gives your Shield Bash ability a {value}% chance to silence the target for 3 sec.",
                    {
                        value: [50, 100]
                    }
                ],
                isActive: false
            },
            {
                id: "one_handed_weapon_specialization",
                name: "One-Handed Weapon Specialization",
                icon: "inv_sword_20",
                row: 5,
                col: 2,
                ranks: 5,
                requiresTalents: null,
                description: [
                    "Increases the damage you deal with One-Handed Melee weapons by {value}%.",
                    {
                        value: [2, 4, 6, 8, 10]
                    }
                ],
                isActive: false
            },
            {
                id: "shield_slam",
                name: "Shield Slam",
                icon: "inv_shield_05",
                row: 6,
                col: 1,
                ranks: 1,
                requiresTalents: "concussion_blow",
                description: [
                    "Slam the target with your shield, causing 225 to 235 damage, modified by your shield block value, and has a 50% chance of dispelling 1 magic effect on the target.  Also causes a high amount of threat."
                ],
                isActive: true,
                castTime: null,
                cooldown: 6,
                spentResource: 20,
                resourceType: 2,
                range: 0,
                requiresWeapon: 0
            }
        ]
    },
};