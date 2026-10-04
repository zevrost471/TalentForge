// WoW Forever 1.60.1 talents
export const foreverTalents = {
  druid: {
    Balance: [
      {
        id: "improved_wrath",
        name: "Improved Wrath",
        icon: "spell_nature_abolishmagic",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Reduces the cast time of your Wrath spell by {value1} sec and its Mana cost by {value2}%.",
          {
            value1: [
              0.1,
              0.2,
              0.3,
              0.4,
              0.5
            ],
            value2: [
              10,
              20,
              30,
              40,
              50
            ]
          }
        ],
        isActive: false
      },
      {
        id: "genesis",
        name: "Genesis",
        icon: "spell_arcane_arcane03",
        row: 0,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases the periodic damage and healing done by your spells and abilities by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "moonglow",
        name: "Moonglow",
        icon: "spell_nature_sentinal",
        row: 1,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Reduces the Mana cost of your damaging spells by {value}%.",
          {
            value: [
              8,
              17,
              25
            ]
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
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the damage and critical strike chance of your Moonfire spell by {value}%.",
          {
            value: [
              5,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "natures_majesty",
        name: "Nature's Majesty",
        icon: "inv_staff_01",
        row: 1,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases your critical strike chance with spells and melee attacks by {value}%.",
          {
            value: [
              2,
              4
            ]
          }
        ],
        isActive: false
      },
      {
        id: "natures_reach",
        name: "Nature's Reach",
        icon: "spell_nature_naturetouchgrow",
        row: 1,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the range of your offensive Balance spells by {value1}% and improves your chance to hit by {value2}%.",
          {
            value1: [
              10,
              20
            ],
            value2: [
              2,
              4
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_entangling_roots",
        name: "Improved Entangling Roots",
        icon: "spell_nature_stranglevines",
        row: 2,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the damage done by your Entangling Roots spell by {value}%, and its victims can take up to {value}% more damage without interrupting the effect.",
          {
            value: [
              25,
              50,
              75
            ]
          }
        ],
        isActive: false
      },
      {
        id: "natures_splendor",
        name: "Nature's Splendor",
        icon: "spell_nature_natureresistancetotem",
        row: 2,
        col: 2,
        ranks: 1,
        requiresTalents: "natures_majesty",
        description: [
          "Increases the duration of your Moonfire and Rejuvenation spells by 3 sec, your Regrowth spell by 6 sec, and your Insect Swarm spell by 2 sec."
        ],
        isActive: false
      },
      {
        id: "insect_swarm",
        name: "Insect Swarm",
        icon: "spell_nature_insectswarm",
        row: 3,
        col: 0,
        ranks: 1,
        requiresTalents: null,
        description: [
          "The enemy target is swarmed by insects, decreasing their chance to hit with attacks by 2% and causing 48 Nature damage over 12 sec."
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
        id: "vengeance",
        name: "Vengeance",
        icon: "spell_nature_purge",
        row: 3,
        col: 1,
        ranks: 5,
        requiresTalents: "improved_moonfire",
        description: [
          "Increases the critical strike damage bonus of your Arcane and Nature spells by {value}%.",
          {
            value: [
              20,
              40,
              60,
              80,
              100
            ]
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
          "Reduces the cast time of Starfire by {value1} sec and Starfire has a {value2}% chance to stun its target for 3 sec.",
          {
            value1: [
              0.1,
              0.2,
              0.3,
              0.4,
              0.5
            ],
            value2: [
              3,
              6,
              9,
              12,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "overgrowth",
        name: "Overgrowth",
        icon: "inv_misc_herb_15",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the maximum number of targets you may have affected by Entangling Roots by {value}.",
          {
            value: [
              1,
              2
            ]
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
          "All non-periodic spell criticals grace you with a blessing of nature, increasing your spellcasting speed and reducing your global cooldown by 10% for 3 sec."
        ],
        isActive: false
      },
      {
        id: "eclipse",
        name: "Eclipse",
        icon: "ability_druid_eclipse",
        row: 4,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Your Wrath spell reduces the cast time of your next 2 Starfire spells by {value} sec. Stores up to 4 charges. Lasts 15 sec.",
          {
            value: [
              0.17,
              0.33,
              0.5
            ]
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
        requiresTalents: null,
        description: [
          "Increases the damage done by your Arcane and Nature spells by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
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
          "Transforms the Druid into Moonkin Form. While in this form, the armor contribution from items is increased by 360%, Omen of Clarity gains 100% increased chance to trigger, and all party members within 45 yards have their critical strike chance increased by 3%, exclusive with Leader of the Pack. The Moonkin cannot cast healing spells while shapeshifted.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
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
          "Reduces the cost of your Maul, Mangle, Swipe, Claw, and Rake abilities by {value} Rage or Energy.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "heart_of_the_wild",
        name: "Heart of the Wild",
        icon: "spell_holy_blessingofagility",
        row: 0,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases your Intellect by {value1}%.  In addition, while in Bear Form or Dire Bear Form your Stamina is increased by {value2}% and while in Cat Form your Strength is increased by {value3}%.",
          {
            value1: [
              2,
              4,
              6,
              8,
              10
            ],
            value2: [
              4,
              8,
              12,
              16,
              20
            ],
            value3: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "feral_swiftness",
        name: "Feral Swiftness",
        icon: "spell_nature_spiritwolf",
        row: 1,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases your movement speed while in Cat Form by {value1}%, and increases your chance to Dodge by {value2}%.",
          {
            value1: [
              15,
              30
            ],
            value2: [
              2,
              4
            ]
          }
        ],
        isActive: false
      },
      {
        id: "feral_instinct",
        name: "Feral Instinct",
        icon: "ability_ambush",
        row: 1,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases damage done by your Swipe ability by {value1}% and reduces the chance enemies have to detect you while Prowling as if you were {value2} level higher.",
          {
            value1: [
              10,
              20,
              30
            ],
            value2: [
              1,
              2,
              3
            ]
          }
        ],
        isActive: false
      },
      {
        id: "brutal_impact",
        name: "Brutal Impact",
        icon: "ability_druid_bash",
        row: 1,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the stun duration of your Bash and Pounce abilities by {value1} sec and reduces the cooldown of Bash by {value2} sec.",
          {
            value1: [
              0.5,
              1
            ],
            value2: [
              15,
              30
            ]
          }
        ],
        isActive: false
      },
      {
        id: "thick_hide",
        name: "Thick Hide",
        icon: "inv_misc_pelt_bear_03",
        row: 1,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain {value1} additional base Armor per level and another {value2} base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms.",
          {
            value1: [
              1,
              2,
              3
            ],
            value2: [
              0.67,
              1.33,
              2
            ]
          }
        ],
        isActive: false
      },
      {
        id: "savage_fury",
        name: "Savage Fury",
        icon: "ability_druid_ravage",
        row: 2,
        col: 1,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the damage caused by your Claw, Rake, Shred, Maul, and Swipe abilities by {value}%.",
          {
            value: [
              5,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "feral_charge",
        name: "Feral Charge",
        icon: "ability_hunter_pet_bear",
        row: 2,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Teaches Feral Charge (Bear) and Feral Charge (Cat).<br><br>Feral Charge (Bear) - Charge an enemy, immobilizing them and interrupting any spell they are casting for 4 sec. This ability can be used in Bear Form and Dire Bear Form. 15 second cooldown.<br><br>Feral Charge (Cat) - Leap behind an enemy. 30 second cooldown."
        ],
        isActive: true,
        castTime: null,
        cooldown: null,
        spentResource: 5,
        resourceType: 2,
        range: null,
        minRange: 8,
        maxRange: 25,
        requiresWeapon: 0,
        requiresCatForm: false,
        requiresBearForm: false,
        requiresDireBearForm: false
      },
      {
        id: "sharpened_claws",
        name: "Sharpened Claws",
        icon: "inv_misc_monsterclaw_04",
        row: 2,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by {value}%.",
          {
            value: [
              3,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "shredding_attacks",
        name: "Shredding Attacks",
        icon: "spell_shadow_vampiricaura",
        row: 3,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Reduces the Energy cost of your Shred ability by {value1} and reduces the Rage cost of your Lacerate ability by {value2}.",
          {
            value1: [
              6,
              12,
              18
            ],
            value2: [
              1,
              2,
              3
            ]
          }
        ],
        isActive: false
      },
      {
        id: "mangle",
        name: "Mangle",
        icon: "ability_druid_mangle2",
        row: 3,
        col: 1,
        ranks: 1,
        requiresTalents: "savage_fury",
        description: [
          "Mangle the target for 100% normal damage plus 26."
        ],
        isActive: true,
        castTime: null,
        cooldown: 6,
        spentResource: 20,
        resourceType: 2,
        range: 0,
        requiresWeapon: 0,
        requiresCatForm: false,
        requiresBearForm: true,
        requiresDireBearForm: true
      },
      {
        id: "predatory_strikes",
        name: "Predatory Strikes",
        icon: "ability_hunter_pet_cat",
        row: 3,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by {value}% of your level.",
          {
            value: [
              50,
              100,
              150
            ]
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
          "Gives you a {value}% chance to gain an additional 5 Rage any time you get a critical strike while in Bear Form or Dire Bear Form. In addition, your non-periodic critical strikes from Cat Form abilities that generate Combo Points have a {value}% chance to add an additional Combo Point.",
          {
            value: [
              50,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "predatory_instincts",
        name: "Predatory Instincts",
        icon: "ability_druid_predatoryinstincts",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the critical strike damage bonus of your melee abilities by {value}%.",
          {
            value: [
              10,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "leader_of_the_pack",
        name: "Leader of the Pack",
        icon: "spell_nature_unyeildingstamina",
        row: 4,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "While in Cat Form, Bear Form, or Dire Bear Form, the Leader of the Pack increases the critical strike chance of all party members within 45 yards by 3%, exclusive with Moonkin Aura."
        ],
        isActive: false
      },
      {
        id: "king_of_the_jungle",
        name: "King of the Jungle",
        icon: "ability_druid_kingofthejungle",
        row: 4,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Tiger's Fury now instantly grants you {value} Energy.",
          {
            value: [
              20,
              40,
              60
            ]
          }
        ],
        isActive: false
      },
      {
        id: "natural_reaction",
        name: "Natural Reaction",
        icon: "ability_bullrush",
        row: 5,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases your dodge chance by {value1}%, and gives you a {value2}% chance to gain 5 Rage each time you dodge.",
          {
            value1: [
              1,
              2,
              3,
              4,
              5
            ],
            value2: [
              20,
              40,
              60,
              80,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "rend_and_tear",
        name: "Rend and Tear",
        icon: "ability_druid_primalagression",
        row: 5,
        col: 2,
        ranks: 5,
        requiresTalents: "predatory_strikes",
        description: [
          "Increases damage done by your melee abilities on Bleeding targets by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "berserk",
        name: "Berserk",
        icon: "ability_druid_berserk",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "leader_of_the_pack",
        description: [
          "Causes your Mangle ability to strike up to 3 targets, removes its cooldown, and increases the critical strike chance of your Combo Point-generating abilities by 100%. Clears and grants immunity to Fear effects for the duration. Lasts 15 sec."
        ],
        isActive: true,
        requiresCatForm: true,
        requiresBearForm: true,
        requiresDireBearForm: true,
      }
    ],
    Restoration: [
      {
        id: "natures_focus",
        name: "Nature's Focus",
        icon: "spell_nature_healingwavegreater",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Gives you a {value}% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
          {
            value: [
              14,
              28,
              42,
              56,
              70
            ]
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
          "Gives you a {value1}% chance to gain 10 Rage when you shapeshift into Bear Form or Dire Bear Form. When you shift into Cat Form, you will regain {value1}% of the Energy you had when you were last in Cat Form, plus {value2} Energy for each second you spent not in Bear Form, Cat Form, or Dire Bear Form, up to a maximum of {value1} Energy.",
          {
            value1: [
              20,
              40,
              60,
              80,
              100
            ],
            value2: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "naturalist",
        name: "Naturalist",
        icon: "spell_nature_healingtouch",
        row: 1,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Reduces the cast time of your Healing Touch spell by {value1} sec and increases all damage you deal by {value2}%.",
          {
            value1: [
              0.1,
              0.2,
              0.3,
              0.4,
              0.5
            ],
            value2: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "subtlety",
        name: "Subtlety",
        icon: "ability_eyeoftheowl",
        row: 1,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Reduces the threat generated by your Nature and Arcane spells by {value}%.",
          {
            value: [
              10,
              20,
              30
            ]
          }
        ],
        isActive: false
      },
      {
        id: "natural_shapeshifter",
        name: "Natural Shapeshifter",
        icon: "spell_nature_wispsplode",
        row: 1,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Reduces the mana cost of all shapeshifting by {value}%.",
          {
            value: [
              10,
              20,
              30
            ]
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
            value: [
              17,
              33,
              50
            ]
          }
        ],
        isActive: false
      },
      {
        id: "gift_of_nature",
        name: "Gift of Nature",
        icon: "spell_nature_protectionformnature",
        row: 2,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases the effect of all your healing spells by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "gift_of_the_earthmother",
        name: "Gift of the Earthmother",
        icon: "spell_nature_spiritarmor",
        row: 2,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Reduces the global cooldown by 0.5 seconds on your Rejuvenation, Swiftmend, and Wild Growth spells."
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
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_rejuvenation",
        name: "Improved Rejuvenation",
        icon: "spell_nature_rejuvenation",
        row: 3,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the effect of your Rejuvenation spell by {value}%.",
          {
            value: [
              5,
              10,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "swiftmend",
        name: "Swiftmend",
        icon: "inv_relics_idolofrejuvenation",
        row: 3,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Instantly heals a target with an active Rejuvenation or Regrowth effect for an amount equal to the full duration of the periodic effect of one of those spells."
        ],
        isActive: true,
        castTime: null,
        cooldown: 15,
        spentResource: 20,
        absoluteSpent: false,
        resourceType: 1,
        range: 40,
        requiresWeapon: 0
      },
      {
        id: "natures_swiftness",
        name: "Nature's Swiftness",
        icon: "spell_nature_ravenform",
        row: 4,
        col: 0,
        ranks: 1,
        requiresTalents: "naturalist",
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
        id: "living_spirit",
        name: "Living Spirit",
        icon: "spell_nature_giftofthewaterspirit",
        row: 4,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases your Spirit by {value}%.",
          {
            value: [
              5,
              10,
              15
            ]
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
          "Reduces threat caused by Tranquility by {value1}% and its cooldown by {value2}%.",
          {
            value1: [
              50,
              100
            ],
            value2: [
              30,
              60
            ]
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
        requiresTalents: "improved_rejuvenation",
        description: [
          "Increases the critical effect chance of your Regrowth spell by {value}%.",
          {
            value: [
              10,
              20,
              30,
              40,
              50
            ]
          }
        ],
        isActive: false
      },
      {
        id: "wild_growth",
        name: "Wild Growth",
        icon: "ability_druid_flourish",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "living_spirit",
        description: [
          "Heals the target and their party for (23.1% of Spell Power) over 7 sec. Party members must be within 43.5 yards of target. The amount healed is applied quickly at first, and slows down as Wild Growth reaches its full duration."
        ],
        isActive: true
      }
    ]
  },
  hunter: {
    "Beast Mastery": [
      {
        id: "deadly_aspects",
        name: "Deadly Aspects",
        icon: "spell_nature_ravenform",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "While Aspect of the Hawk is active, Auto Shot has a {value1}% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a {value2}% chance of increasing melee attack speed by 30% for 12 sec.",
          {
            value1: [
              2,
              4,
              6,
              8,
              10
            ],
            value2: [
              2,
              4,
              6,
              8,
              10
            ]
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
          "Increases the Health and Armor of your pets by {value}%.",
          {
            value: [
              3,
              6,
              9,
              12,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "focused_fire",
        name: "Focused Fire",
        icon: "inv_weapon_crossbow_10",
        row: 1,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases all damage you and your pet deal by {value}% while your pet is active.",
          {
            value: [
              1,
              2
            ]
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
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the Dodge bonus of your Aspect of the Monkey by {value}%. Additionally, your pet gains 50% of the effect of your Aspect of the Monkey ability.",
          {
            value: [
              2,
              4,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "pathfinding",
        name: "Pathfinding",
        icon: "ability_mount_jungletiger",
        row: 1,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by {value}%.",
          {
            value: [
              3,
              6
            ]
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
            value1: [
              3,
              6
            ],
            value2: [
              20,
              40
            ],
            value3: [
              15,
              30
            ]
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
          "Increases the movement speed of your pets by 30%."
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
          "Increases the damage done by your pets and hawks by {value}%.",
          {
            value: [
              3,
              6,
              9,
              12,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_mend_pet",
        name: "Improved Mend Pet",
        icon: "ability_hunter_mendpet",
        row: 3,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Gives your Mend Pet spell a {value1}% chance of cleansing 1 Curse, Disease, Magic, or Poison effect from your pet each time it heals and reduces the Mana cost by {value2}%.",
          {
            value1: [
              15,
              50
            ],
            value2: [
              10,
              20
            ]
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
          "Increases the critical strike chance of your pets and hawks by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "summon_hawk",
        name: "Summon Hawk",
        icon: "ability_hunter_animalhandler",
        row: 3,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Command a hawk to dive-bomb your targeted enemy, dealing 32 Physical damage and continuing its assault for 18 sec. Only 2 hawks can be active at once. Summon Hawk shares its cooldown with Arcane Shot."
        ],
        isActive: true,
        castTime: null,
        cooldown: 6,
        spentResource: 80,
        absoluteSpent: true,
        resourceType: 1,
        range: 35,
        requiresWeapon: 0
      },
      {
        id: "spirit_bond",
        name: "Spirit Bond",
        icon: "ability_druid_demoralizingroar",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "While your pet is active, you and your pet will regenerate 1% of total health every {value} sec.",
          {
            value: [
              10,
              5
            ]
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
        requiresTalents: "bestial_swiftness",
        description: [
          "Command your pet to Stun the target for 3 sec on its next successful attack, which also gains 100% increased critical strike chance. Generates high threat."
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
          "Increases the Focus regeneration of your pets by {value1}% and allows {value2}% of your Mana regeneration to continue while casting.",
          {
            value1: [
              10,
              20
            ],
            value2: [
              25,
              50
            ]
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
            value: [
              20,
              40,
              60,
              80,
              100
            ]
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
        id: "hawk_eye",
        name: "Hawk Eye",
        icon: "ability_townwatch",
        row: 0,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the range of your ranged weapons by {value} yards.",
          {
            value: [
              2,
              4,
              6
            ]
          }
        ],
        isActive: false
      },
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
            value: [
              4,
              8,
              12,
              16,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "lethal_attacks",
        name: "Lethal Attacks",
        icon: "ability_searingarrow",
        row: 0,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases your critical strike chance with all attacks by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_stings",
        name: "Improved Stings",
        icon: "hunter_pvp_spidersting",
        row: 1,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increased the damage of your Serpent Sting ability by {value1}%, reduces the cooldown of your Viper Sting ability by {value2} sec, and increases the duration of your Scorpid Sting ability by {value3} sec.",
          {
            value1: [
              6,
              13,
              20
            ],
            value2: [
              2,
              4,
              6
            ],
            value3: [
              15,
              30,
              45
            ]
          }
        ],
        isActive: false
      },
      {
        id: "efficiency",
        name: "Efficiency",
        icon: "spell_frost_wizardmark",
        row: 1,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Reduces the Mana cost of your Shots, Stings, and melee abilities by {value}%.",
          {
            value: [
              3,
              6,
              9,
              12,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "careful_aim",
        name: "Careful Aim",
        icon: "ability_hunter_zenarchery",
        row: 1,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases your Attack Power by {value}% of your Intellect.",
          {
            value: [
              20,
              40,
              60,
              80,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "rapid_killing",
        name: "Rapid Killing",
        icon: "ability_hunter_rapidkilling",
        row: 2,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the cooldown on your Rapid Fire ability by {value1} min. In addition, when you kill a non-trivial enemy or it dies while afflicted by your Serpent Sting, you gain Rapid Killing, increasing the damage of your next Shot ability within 20 sec by {value2}%.",
          {
            value1: [
              1,
              2
            ],
            value2: [
              10,
              20
            ]
          }
        ],
        isActive: false
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
          "Reduces the cooldown of your Arcane Shot by {value} sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot.",
          {
            value: [
              0.3,
              0.6,
              0.9,
              1.2,
              1.5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "lone_wolf",
        name: "Lone Wolf",
        icon: "ability_mount_whitedirewolf",
        row: 2,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
          "You deal 20% increased damage with all attacks while you do not have an active pet."
        ],
        isActive: false
      },
      {
        id: "trueshot_aura",
        name: "Trueshot Aura",
        icon: "ability_trueshot",
        row: 3,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Increases the Ranged Attack Power of party members within 45 yards by 30. Lasts 30 min."
        ],
        isActive: true,
        castTime: null,
        cooldown: null,
        spentResource: 180,
        absoluteSpent: true,
        range: null,
        requiresWeapon: 0
      },
      {
        id: "mortal_shots",
        name: "Mortal Shots",
        icon: "ability_piercedamage",
        row: 3,
        col: 2,
        ranks: 5,
        requiresTalents: "careful_aim",
        description: [
          "Increases the critical strike damage bonus on all ranged abilities by {value}%.",
          {
            value: [
              6,
              12,
              18,
              24,
              30
            ]
          }
        ],
        isActive: false
      },
      {
        id: "rapid_recuperation",
        name: "Rapid Recuperation",
        icon: "ability_hunter_rapidregeneration",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: "rapid_killing",
        description: [
          "Hitting a target with your Serpent Sting ability grants you {value1}% and consuming Rapid Killing grants you {value2}% of your Mana regeneration while casting for the next 15 sec.",
          {
            value1: [
              25,
              50
            ],
            value2: [
              50,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "barrage",
        name: "Barrage",
        icon: "ability_upgrademoonglaive",
        row: 4,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley abilities by {value}%.",
          {
            value: [
              3,
              7,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "scatter_shot",
        name: "Scatter Shot",
        icon: "ability_golemstormbolt",
        row: 4,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
          "A short-range shot that deals 50% weapon damage and disorients the target for 4 sec.  Any damage caused will remove the effect.  Turns off your attack when used."
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
            value: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "sniper_shot",
        name: "Sniper Shot",
        icon: "hunter_pvp_snipershot",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "trueshot_aura",
        description: [
          "A steady snipe that increases ranged damage by 160."
        ],
        isActive: true,
        castTime: 4,
        cooldown: 15,
        spentResource: 365,
        absoluteSpent: true,
        resourceType: 1,
        range: null,
        minRange: 8,
        maxRange: 35,
        requiresWeapon: 2
      }
    ],
    Survival: [
      {
        id: "improved_tracking",
        name: "Improved Tracking",
        icon: "inv_misc_head_dragon_black",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
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
            value: [
              2,
              4,
              6,
              8,
              10
            ]
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
          "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for {value} sec.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
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
          "Increases the critical strike chance of all your melee abilities by {value}%.",
          {
            value: [
              2,
              4
            ]
          }
        ],
        isActive: false
      },
      {
        id: "survivalist",
        name: "Survivalist",
        icon: "spell_shadow_twilight",
        row: 1,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases your total Health by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_wing_clip",
        name: "Improved Wing Clip",
        icon: "ability_rogue_trip",
        row: 1,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Gives your Wing Clip ability a {value}% chance to immobilize the target for 5 sec.",
          {
            value: [
              7,
              13,
              20
            ]
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
          "Increases the duration of Freezing and Frost trap effects by {value1}% and the damage of Immolation and Explosive trap effects by {value2}%.",
          {
            value1: [
              15,
              30
            ],
            value2: [
              15,
              30
            ]
          }
        ],
        isActive: false
      },
      {
        id: "surefooted",
        name: "Surefooted",
        icon: "ability_kick",
        row: 2,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases your hit chance by {value1}% and reduces the duration of movement impairing effects on you by {value2}%.",
          {
            value1: [
              1,
              2,
              3
            ],
            value2: [
              10,
              20,
              30
            ]
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
        id: "survival_tactics",
        name: "Survival Tactics",
        icon: "ability_ensnare",
        row: 3,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases your chance to hit with your Trap and Feign Death abilities by {value}%.",
          {
            value: [
              5,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "predators_edge",
        name: "Predator's Edge",
        icon: "ability_hunter_hatchettoss",
        row: 3,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases your melee critical strike damage by {value1}% and your offhand weapon damage by {value2}%.",
          {
            value1: [
              6,
              12,
              18,
              24,
              30
            ],
            value2: [
              10,
              20,
              30,
              40,
              50
            ]
          }
        ],
        isActive: false
      },
      {
        id: "counterattack",
        name: "Counterattack",
        icon: "ability_warrior_challange",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: "deterrence",
        description: [
          "A strike that becomes active after parrying an opponent's attack. This attack deals 50% weapon damage plus 26 and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried."
        ],
        isActive: true,
        castTime: null,
        cooldown: 5,
        spentResource: 30,
        absoluteSpent: true,
        resourceType: 1,
        range: 0,
        requiresWeapon: 0
      },
      {
        id: "resourcefulness",
        name: "Resourcefulness",
        icon: "ability_hunter_resourcefulness",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the mana cost of your Trap abilities and melee abilities by {value1}%. In addition, your critical strikes have a {value2}% chance to allow 50% of your Mana regeneration to continue while casting for 30 sec.",
          {
            value1: [
              30,
              60
            ],
            value2: [
              50,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "expose_prey",
        name: "Expose Prey",
        icon: "ability_hunter_swiftstrike",
        row: 4,
        col: 1,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Your attacks against targets with Hunter's Mark have a {value}% chance to activate your Mongoose Bite for 5 sec.",
          {
            value: [
              5,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "survivalists_discipline",
        name: "Survivalist's Discipline",
        icon: "ability_hunter_mastertactitian",
        row: 4,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the cooldown of your Trap and Deterrence abilities by {value}%.",
          {
            value: [
              20,
              40
            ]
          }
        ],
        isActive: false
      },
      {
        id: "strider_kick",
        name: "Strider Kick",
        icon: "ability_hunter_pet_tallstrider",
        row: 4,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
          "A powerful kick that deals 100% melee weapon damage."
        ],
        isActive: true
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
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "lacerating_strikes",
        name: "Lacerating Strikes",
        icon: "ability_gouge",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "expose_prey",
        description: [
          "Your Mongoose Bite also causes the target to Bleed for damage over 21 sec equal to 40% of the damage done by Mongoose Bite."
        ],
        isActive: false
      }
    ]
  },
  mage: {
    Arcane: [
      {
        id: "wand_specialization",
        name: "Wand Specialization",
        icon: "inv_wand_01",
        row: 0,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases your damage with Wands by {value}%.",
          {
            value: [
              13,
              25
            ]
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
          "Improves your chance to hit with Arcane spells by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_channeling",
        name: "Improved Channeling",
        icon: "spell_nature_starfall",
        row: 0,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Gives you a {value1}% chance to avoid interruption caused by damage while channeling Arcane Missiles and a {value2}% chance while casting Arcane Blast.",
          {
            value1: [
              20,
              40,
              60,
              80,
              100
            ],
            value2: [
              14,
              28,
              42,
              56,
              70
            ]
          }
        ],
        isActive: false
      },
      {
        id: "arcane_subtlety",
        name: "Arcane Subtlety",
        icon: "spell_holy_dispelmagic",
        row: 1,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces your target's resistance to all your spells by {value1} and reduces the threat caused by your Arcane spells by {value2}%.",
          {
            value1: [
              8,
              15
            ],
            value2: [
              15,
              30
            ]
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
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases all your resistances by {value1} and causes all spells you fully resist to restore {value2}% of your total mana. Cannot trigger more often than 1 time per sec.",
          {
            value1: [
              5,
              10
            ],
            value2: [
              1,
              2
            ]
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
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "arcane_resilience",
        name: "Arcane Resilience",
        icon: "spell_arcane_arcaneresilience",
        row: 1,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases your Armor by an amount equal to {value}% of your Intellect.",
          {
            value: [
              25,
              50
            ]
          }
        ],
        isActive: false
      },
      {
        id: "arcane_geometry",
        name: "Arcane Geometry",
        icon: "inv_ability_mage_radiantspark",
        row: 2,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the range of your Arcane spells by {value} yards.",
          {
            value: [
              3,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "arcane_impact",
        name: "Arcane Impact",
        icon: "spell_nature_wispsplode",
        row: 2,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the critical strike chance of your Arcane spells by {value}%.",
          {
            value: [
              2,
              4,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "arcane_blast",
        name: "Arcane Blast",
        icon: "spell_arcane_blast",
        row: 2,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Blasts the target with energy, dealing 57 to 65 Arcane damage. Each time you cast Arcane Blast, the damage of all your other spells is increased by 10% and the mana cost of Arcane Blast is increased by 175%. Effect stacks up to 4 times and lasts 8 sec or until any other damage spell is cast."
        ],
        isActive: true,
        castTime: 2.5,
        cooldown: null,
        spentResource: 15,
        absoluteSpent: false,
        resourceType: 1,
        range: 30,
        requiresWeapon: 0
      },
      {
        id: "arcane_shielding",
        name: "Arcane Shielding",
        icon: "spell_shadow_detectlesserinvisibility",
        row: 3,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Decreases the Mana lost per point of damage taken when your Mana Shield spell is active by {value1}% and increases the resistances granted by your Mage Armor spell by {value2}%.",
          {
            value1: [
              17,
              33
            ],
            value2: [
              25,
              50
            ]
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
          "Your Counterspell also Silences the target for {value} sec.",
          {
            value: [
              2,
              4
            ]
          }
        ],
        isActive: false
      },
      {
        id: "arcane_meditation",
        name: "Arcane Meditation",
        icon: "spell_shadow_siphonmana",
        row: 3,
        col: 2,
        ranks: 3,
        requiresTalents: "arcane_concentration",
        description: [
          "Allows {value}% of your Mana regeneration to continue while casting.",
          {
            value: [
              17,
              33,
              50
            ]
          }
        ],
        isActive: false
      },
      {
        id: "missile_barrage",
        name: "Missile Barrage",
        icon: "ability_mage_missilebarrage",
        row: 3,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Gives your Arcane Blast spell a 40% chance, and your Fireball, Frostbolt, and Frostfire Bolt spells a 20% chance to reduce the channeled duration of your next Arcane Missiles spell by 50%, reduce the Mana cost by 100%, and missiles fire every 0.5 sec."
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
        requiresTalents: null,
        description: [
          "Increases your Intellect by {value1}% and increases the critical strike damage bonus of your Arcane spells by {value2}%.",
          {
            value1: [
              2,
              4,
              6,
              8,
              10
            ],
            value2: [
              20,
              40,
              60,
              80,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "arcane_instability",
        name: "Arcane Instability",
        icon: "spell_shadow_teleport",
        row: 5,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the damage done by your spells by {value1}% and your critical strike chance by {value2}%.",
          {
            value1: [
              1,
              2,
              3
            ],
            value2: [
              1,
              2,
              3
            ]
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
        requiresTalents: "presence_of_mind",
        description: [
          "For the next 15 sec, your spells deal 30% more damage while costing 30% more mana to cast."
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
        id: "wake_of_fire",
        name: "Wake of Fire",
        icon: "spell_fire_lavaspawn",
        row: 0,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the cooldown of your Fire Blast spell by {value1} sec. Killing a non-trivial target increases the critical strike chance of your next Fire Blast cast within 20 sec by {value2}%.",
          {
            value1: [
              1,
              2
            ],
            value2: [
              25,
              50
            ]
          }
        ],
        isActive: false
      },
      {
        id: "incineration",
        name: "Incineration",
        icon: "spell_fire_flameshock",
        row: 0,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the critical strike chance of your Fire Blast, Ice Lance, Arcane Blast, and Scorch spells by {value}%.",
          {
            value: [
              2,
              4,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_fireball",
        name: "Improved Fireball",
        icon: "spell_fire_flamebolt",
        row: 0,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Reduces the casting time of your Fireball and Frostfire Bolt spells by {value} sec.",
          {
            value: [
              0.1,
              0.2,
              0.3,
              0.4,
              0.5
            ]
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
            value: [
              8,
              16,
              24,
              32,
              40
            ]
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
            value: [
              3,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "impact",
        name: "Impact",
        icon: "spell_fire_meteorstorm",
        row: 1,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Gives your Fire spells a {value}% chance to stun the target for 2 sec.",
          {
            value: [
              3,
              7,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "burning_soul",
        name: "Burning Soul",
        icon: "spell_fire_fire",
        row: 2,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Gives your Fire spells a {value1}% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by {value2}%.",
          {
            value1: [
              23,
              47,
              70
            ],
            value2: [
              10,
              20,
              30
            ]
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
            value: [
              5,
              10,
              15
            ]
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
          "Hurls an immense fiery boulder that causes 101 to 131 Fire damage and an additional 44 Fire damage over 12 sec."
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
        id: "improved_scorch",
        name: "Improved Scorch",
        icon: "spell_fire_windsofwoe",
        row: 3,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Your Scorch spell has a {value}% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases all Fire damage you deal to your target by 3% and lasts 30 sec, stacking up to 5 times.",
          {
            value: [
              33,
              67,
              100
            ]
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
          "Causes your Fire Ward to have a {value}% chance to reflect Fire spells while active.",
          {
            value: [
              10,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "hot_streak",
        name: "Hot Streak",
        icon: "ability_mage_hotstreak",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: "pyroblast",
        description: [
          "Your non-periodic critical strikes with Fireball, Frostfire Bolt, Fire Blast, and Scorch grant Hot Streak for 15 sec. Hot Streak reduces the cast time of Pyroblast by 25%, stacking up to 3 times."
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
          "Your Fire and Frost critical strikes will refund {value}% of their base mana cost.",
          {
            value: [
              10,
              20,
              30
            ]
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
            value: [
              2,
              4,
              6
            ]
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
        requiresTalents: null,
        description: [
          "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 154 to 184 Fire damage, and Dazing them for 50% reduced movement speed for 6 sec."
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
            value: [
              2,
              4,
              6,
              8,
              10
            ]
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
          "When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%.  This effect lasts until you have caused 4 non-periodic critical strikes with Fire spells."
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
          "Increases the Armor and resistance given by your Frost Armor and Ice Armor spells by {value1}%. In addition, gives your Frost Ward a {value2}% chance to reflect Frost spells and effects while active.",
          {
            value1: [
              15,
              30
            ],
            value2: [
              10,
              20
            ]
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
            value: [
              0.1,
              0.2,
              0.3,
              0.4,
              0.5
            ]
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
        ranks: 5,
        requiresTalents: null,
        description: [
          "Improves your chance to hit with Frost and Fire spells by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
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
            value: [
              20,
              40,
              60,
              80,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "permafrost",
        name: "Permafrost",
        icon: "spell_frost_wisp",
        row: 1,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the duration of your Chill effects by {value1}% and reduces the target's speed by an additional {value2}%.",
          {
            value1: [
              11,
              22,
              33
            ],
            value2: [
              3,
              7,
              10
            ]
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
            value: [
              2,
              4
            ]
          }
        ],
        isActive: false
      },
      {
        id: "frostbite",
        name: "Frostbite",
        icon: "spell_frost_frostarmor",
        row: 1,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Gives your Chill effects a {value}% chance to Freeze the target for 5 sec.",
          {
            value: [
              5,
              10,
              15
            ]
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
            value: [
              2,
              4,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "frost_channeling",
        name: "Frost Channeling",
        icon: "spell_frost_stun",
        row: 2,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Reduces the mana cost of your Frost spells by {value1}% and reduces the threat caused by your Frost spells by {value2}%.",
          {
            value1: [
              5,
              10,
              15
            ],
            value2: [
              10,
              20,
              30
            ]
          }
        ],
        isActive: false
      },
      {
        id: "ice_lance",
        name: "Ice Lance",
        icon: "spell_frost_frostblast",
        row: 2,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Deals 28 to 32 Frost damage to an enemy target. Deals 300% increased damage to Frozen targets."
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
        id: "improved_blizzard",
        name: "Improved Blizzard",
        icon: "spell_frost_icestorm",
        row: 2,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Adds a Chill effect to your Blizzard spell. This effect lowers the target's movement speed by {value}% for 1.5 sec.",
          {
            value: [
              15,
              25,
              40
            ]
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
            value: [
              10,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "ice_block",
        name: "Ice Block",
        icon: "spell_frost_frost",
        row: 3,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot attack, move, or cast spells."
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
        id: "shatter",
        name: "Shatter",
        icon: "spell_frost_frostshock",
        row: 3,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the critical strike chance of all your spells against Frozen targets by {value}%.",
          {
            value: [
              17,
              33,
              50
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_cone_of_cold",
        name: "Improved Cone of Cold",
        icon: "spell_frost_glacier",
        row: 4,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the damage dealt by your Cone of Cold spell by {value}%.",
          {
            value: [
              12,
              23,
              35
            ]
          }
        ],
        isActive: false
      },
      {
        id: "cold_snap",
        name: "Cold Snap",
        icon: "spell_frost_wizardmark",
        row: 4,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Finishes the remaining cooldown on all your other Frost spells."
        ],
        isActive: true,
        castTime: null,
        cooldown: 600,
        spentResource: null,
        range: null,
        requiresWeapon: 0
      },
      {
        id: "fingers_of_frost",
        name: "Fingers of Frost",
        icon: "ability_mage_wintersgrasp",
        row: 4,
        col: 2,
        ranks: 2,
        requiresTalents: "ice_lance",
        description: [
          "Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next {value} spell cast as if the target were Frozen. Lasts 15 sec.",
          {
            value: [
              1,
              2
            ]
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
          "Gives your Frost damage spells a {value1}% chance to apply the Winter's Chill effect, which increases the chance your Ice Lance and Frostbolt spells will critically hit the target by 2% for 15 sec. Stacks up to {value2} times.",
          {
            value1: [
              20,
              40,
              60,
              80,
              100
            ],
            value2: [
              1,
              2,
              3,
              4,
              5
            ]
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
        requiresTalents: "cold_snap",
        description: [
          "Instantly shields you, absorbing 448 damage. Lasts 1 min. While the shield holds, your spellcasts will not be interrupted or delayed from taking damage."
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
        id: "improved_holy_strike",
        name: "Improved Holy Strike",
        icon: "classicon_paladin",
        row: 0,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the cooldown of your Holy Strike ability by {value} sec.",
          {
            value: [
              1,
              2
            ]
          }
        ],
        isActive: false
      },
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
            value: [
              2,
              4,
              6,
              8,
              10
            ]
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
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "healing_light",
        name: "Healing Light",
        icon: "spell_holy_holybolt",
        row: 1,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by {value}%.",
          {
            value: [
              4,
              8,
              12
            ]
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
        ranks: 2,
        requiresTalents: null,
        description: [
          "Gives your Flash of Light, Holy Light, and Light's Vigil spells a {value}% chance to not lose casting time when you take damage.",
          {
            value: [
              35,
              70
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_seals",
        name: "Improved Seals",
        icon: "ability_thunderbolt",
        row: 1,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the damage done by your Seals and Judgements by {value}%.",
          {
            value: [
              5,
              10,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "unyielding_faith",
        name: "Unyielding Faith",
        icon: "spell_holy_unyieldingfaith",
        row: 1,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the duration of  Fear and Disorient effects on you by {value}%.",
          {
            value: [
              15,
              30
            ]
          }
        ],
        isActive: false
      },
      {
        id: "voice_of_truth",
        name: "Voice of Truth",
        icon: "inv_misc_horn_03",
        row: 2,
        col: 0,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Grants you immunity to Silence and Interrupt effects.  Lasts 6 sec."
        ],
        isActive: true,
        castTime: null,
        cooldown: 180,
        spentResource: null,
        range: null,
        requiresWeapon: 0
      },
      {
        id: "reverence",
        name: "Reverence",
        icon: "spell_holy_divineillumination",
        row: 2,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Allows {value}% of your Mana regeneration to continue while casting.",
          {
            value: [
              10,
              20,
              30
            ]
          }
        ],
        isActive: false
      },
      {
        id: "purifying_power",
        name: "Purifying Power",
        icon: "spell_holy_purifyingpower",
        row: 2,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the mana cost of your Cleanse and Purify spells by {value1}% and reduces the cooldown of your Exorcism and Holy Wrath spells by {value2}%.",
          {
            value1: [
              10,
              20
            ],
            value2: [
              17,
              33
            ]
          }
        ],
        isActive: false
      },
      {
        id: "infusion_of_light",
        name: "Infusion of Light",
        icon: "ability_paladin_infusionoflight",
        row: 3,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Your Holy Shock and Flash of Light critical hits reduce the cast time of your next Holy Light cast within 15 sec by {value} sec.",
          {
            value: [
              0.5,
              1
            ]
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
        requiresTalents: "reverence",
        description: [
          "After getting a critical effect from your Flash of Light, Holy Light, Light's Vigil, or Holy Shock heal spell you have a {value}% chance to gain Mana equal to 50% of the base cost of the spell.",
          {
            value: [
              20,
              40,
              60,
              80,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "divine_favor",
        name: "Divine Favor",
        icon: "spell_holy_heal",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: null,
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
        id: "divine_precision",
        name: "Divine Precision",
        icon: "spell_holy_healingfocus",
        row: 4,
        col: 0,
        ranks: 3,
        requiresTalents: "holy_shock",
        description: [
          "Improves your chance to hit with Holy spells by {value}%.",
          {
            value: [
              6,
              12,
              18
            ]
          }
        ],
        isActive: false
      },
      {
        id: "holy_shock",
        name: "Holy Shock",
        icon: "spell_holy_searinglight",
        row: 4,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Blasts the target with Holy energy, causing (42.9% of Spell Power) Holy damage to an enemy, or (42.9% of Spell Power) healing to an ally."
        ],
        isActive: true,
        castTime: null,
        cooldown: 10,
        spentResource: 160,
        absoluteSpent: true,
        resourceType: 1,
        range: 20,
        requiresWeapon: 0
      },
      {
        id: "consecrated_ground",
        name: "Consecrated Ground",
        icon: "spell_holy_innerfire",
        row: 4,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Gives your Holy spells {value}% increased damage against the first 4 enemies that enter your Consecration.",
          {
            value: [
              5,
              10
            ]
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
          "Increases the critical strike chance of your Holy Shock spell by {value1}%, and all other spells by {value2}%.",
          {
            value1: [
              3,
              6,
              9,
              12,
              15
            ],
            value2: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "lights_vigil",
        name: "Light's Vigil",
        icon: "ability_paladin_judgementofthepure",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "holy_shock",
        description: [
          "Applies Light's Vigil to the target for 30 sec. Your next Holy Shock cast on them triggers no cooldown and causes friendly targets to heal their party for 326 to 344, or enemy targets to suffer 175 to 189 Holy damage and refund 75% of Light's Vigil's Mana cost.  You may only have 1 Light's Vigil active per Paladin, per party."
        ],
        isActive: true,
        castTime: 1.5,
        cooldown: 6,
        spentResource: 730,
        absoluteSpent: true,
        resourceType: 1,
        range: 20,
        requiresWeapon: 0
      }
    ],
    Protection: [
      {
        id: "toughness",
        name: "Toughness",
        icon: "spell_holy_devotion",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases your armor value from items by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
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
          "Damaging melee attacks against you have a 10% chance to increase your chance to block by {value}%.  Lasts 10 sec or 5 blocks.",
          {
            value: [
              6,
              12,
              18,
              24,
              30
            ]
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
          "Improves your chance to hit by {value}%.",
          {
            value: [
              1,
              2,
              3
            ]
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
          "Reduces the cooldown of your Blessing of Protection by {value1} min and increases the duration of your Blessing of Freedom by {value2} sec.",
          {
            value1: [
              1,
              2
            ],
            value2: [
              3,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "anticipation",
        name: "Anticipation",
        icon: "spell_magic_lesserinvisibilty",
        row: 1,
        col: 3,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases your Defense Skill by {value}.",
          {
            value: [
              4,
              8,
              12,
              16,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_seal_of_fury",
        name: "Improved Seal of Fury",
        icon: "spell_holy_righteousnessaura",
        row: 2,
        col: 0,
        ranks: 1,
        requiresTalents: null,
        description: [
          "When Seal of Fury's shield is fully absorbed, restore 0 Mana, increased by 15% per level the attacker is above you, up to 45%."
        ],
        isActive: false
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
          "While Righteous Fury is active, all damage taken is reduced by {value}%.",
          {
            value: [
              2,
              4,
              6
            ]
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
          "Increases the amount of damage absorbed by your shield by {value1}%, and gives your blocks a {value2}% chance to restore 6% of your maximum Mana.  May only occur once every 3 sec.",
          {
            value1: [
              10,
              20,
              30
            ],
            value2: [
              33,
              66,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "sacred_duty",
        name: "Sacred Duty",
        icon: "spell_holy_divineintervention",
        row: 2,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases your total Stamina by {value1}% and reduces the cooldown of your Divine Shield, Divine Protection, and Templar's Bulwark spells by {value2} sec.",
          {
            value1: [
              2,
              4
            ],
            value2: [
              30,
              60
            ]
          }
        ],
        isActive: false
      },
      {
        id: "swift_judgement",
        name: "Swift Judgement",
        icon: "ability_paladin_judgementred",
        row: 3,
        col: 0,
        ranks: 1,
        requiresTalents: "improved_seal_of_fury",
        description: [
          "Finishes the remaining cooldown on your Judgement ability and reduces the Mana cost of your next Judgement by 100%."
        ],
        isActive: true,
        castTime: null,
        cooldown: 60,
        spentResource: null,
        resourceType: 1,
        range: null,
        requiresWeapon: 0
      },
      {
        id: "one_handed_weapon_specialization",
        name: "One-Handed Weapon Specialization",
        icon: "inv_sword_20",
        row: 3,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the damage you deal with one-handed melee weapons by {value}%.",
          {
            value: [
              3,
              7,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_hammer_of_justice",
        name: "Improved Hammer of Justice",
        icon: "spell_holy_sealofmight",
        row: 3,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Decreases the cooldown of your Hammer of Justice spell by {value} sec.",
          {
            value: [
              5,
              10,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "templars_bulwark",
        name: "Templar's Bulwark",
        icon: "ability_paladin_shieldofthetemplar",
        row: 4,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "When activated, this ability grants you an absorb shield equal to 100% of your maximum health for 8 sec.  Applies Forbearance for 1 min. Cannot be cast while Forbearance is active."
        ],
        isActive: true,
        castTime: null,
        cooldown: 300,
        spentResource: 110,
        absoluteSpent: true,
        resourceType: 1,
        range: null,
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
          "Gives you a {value1}% chance to gain an extra attack after Blocking a melee attack and a {value2}% chance to gain an extra attack after being the victim of a non-periodic critical strike.",
          {
            value1: [
              8,
              16,
              24,
              32,
              40
            ],
            value2: [
              20,
              40,
              60,
              80,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "iron_creed",
        name: "Iron Creed",
        icon: "spell_holy_improvedresistanceauras",
        row: 5,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases the threat generated by your Holy Strike ability {value1}%. While Righteous Fury is active, Holy Strike also reduces your damage taken by {value2}% for 6 sec.",
          {
            value1: [
              5,
              10,
              15,
              20,
              25
            ],
            value2: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "holy_shield",
        name: "Holy Shield",
        icon: "spell_holy_blessingofprotection",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "templars_bulwark",
        description: [
          "Increases chance to block by 20% for 10 sec, and deals 110 Holy damage for each attack blocked while active.  Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges."
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
            value: [
              1,
              2,
              3,
              4,
              5
            ]
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
          "Reduces the Mana cost of all instant cast spells and abilities by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
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
          "Decreases the cooldown of your Judgement ability by {value} sec.",
          {
            value: [
              1,
              2
            ]
          }
        ],
        isActive: false
      },
      {
        id: "holy_conduit",
        name: "Holy Conduit",
        icon: "spell_holy_devineaegis",
        row: 1,
        col: 1,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the mana cost of your Consecration, Holy Wrath, Exorcism, and Hammer of Wrath spells by {value}%.",
          {
            value: [
              20,
              40
            ]
          }
        ],
        isActive: false
      },
      {
        id: "conviction",
        name: "Conviction",
        icon: "spell_holy_retributionaura",
        row: 1,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Improves your chance to get a critical strike with melee attacks by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
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
          "Gives your damaging melee attacks a chance to reduce the target's Attack Power by {value1}, and increase your Attack Power by {value2}% for 30 sec.",
          {
            value1: [
              68,
              136,
              204
            ],
            value2: [
              1,
              2,
              3
            ]
          }
        ],
        isActive: false
      },
      {
        id: "sanctified_judgement",
        name: "Sanctified Judgement",
        icon: "ability_paladin_judgementblue",
        row: 2,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Gives your Judgement ability a {value1}% chance to return {value2}% of the Mana cost of the judged seal.",
          {
            value1: [
              33,
              66,
              100
            ],
            value2: [
              20,
              40,
              60
            ]
          }
        ],
        isActive: false
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
          "Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage.  Only one Seal can be active on the Paladin at any one time.  Lasts 30 sec.\n\nUnleashing this Seal's energy will judge an enemy, instantly causing 69 to 73 Holy damage, 138 to 146 if the target is stunned or incapacitated."
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
          "Increases movement speed and mounted movement speed by {value}%.  This does not stack with other movement speed increasing effects.",
          {
            value: [
              8,
              15
            ]
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
          "All critical strikes against you cause {value}% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
          {
            value: [
              5,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "sacred_arbiter",
        name: "Sacred Arbiter",
        icon: "inv_sword_08",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Increases the damage of your Holy Strike ability by 10% and causes it to refresh all Judgement effects on the target."
        ],
        isActive: false
      },
      {
        id: "crusade",
        name: "Crusade",
        icon: "spell_holy_crusade",
        row: 3,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases all damage dealt by {value1}%. Increased by an additional {value2}% against Demon and Undead targets.",
          {
            value1: [
              1,
              2
            ],
            value2: [
              1,
              2
            ]
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
            value: [
              3,
              6,
              9
            ]
          }
        ],
        isActive: false
      },
      {
        id: "vengeance",
        name: "Vengeance",
        icon: "ability_racial_avatar",
        row: 4,
        col: 1,
        ranks: 3,
        requiresTalents: "sanctified_judgement",
        description: [
          "Increases your Physical and Holy damage dealt by {value}% for 30 sec after landing a critical strike.  Stacks up to 5 times.",
          {
            value: [
              1,
              2,
              3
            ]
          }
        ],
        isActive: false
      },
      {
        id: "repentance",
        name: "Repentance",
        icon: "spell_holy_prayerofhealing",
        row: 4,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec. Any damage caused will awaken the target. Only works against Humanoids."
        ],
        isActive: true,
        castTime: null,
        cooldown: 60,
        spentResource: 60,
        absoluteSpent: true,
        resourceType: 1,
        range: 20,
        requiresWeapon: 0
      },
      {
        id: "champion_of_the_light",
        name: "Champion of the Light",
        icon: "ability_paladin_enlightenedjudgements",
        row: 5,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases your spell damage and healing by up to {value}% of your Intellect.",
          {
            value: [
              33,
              66,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "instrument_of_law",
        name: "Instrument of Law",
        icon: "spell_holy_divinepurpose",
        row: 5,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the cast time of your Hammer of Wrath by {value1} sec, and reduces all threat you generate by {value2}% while Righteous Fury is not active.",
          {
            value1: [
              0.5,
              1
            ],
            value2: [
              10,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "twist_of_light",
        name: "Twist of Light",
        icon: "spell_holy_blessedresillience",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "When you replace your Seal of Command, Seal of Righteousness, Seal of Fury, or Seal of Justice with a different Seal, gain an Echo. Your next melee attack applies the replaced Seal's effects, consuming the Echo."
        ],
        isActive: false
      }
    ]
  },
  priest: {
    Discipline: [
      {
        id: "power_in_light",
        name: "Power in Light",
        icon: "spell_holy_searinglight",
        row: 0,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Your Smite and Penance spells deal {value}% increased damage to targets afflicted with your Holy Fire.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "wand_specialization",
        name: "Wand Specialization",
        icon: "inv_wand_01",
        row: 0,
        col: 1,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases your damage with Wands by {value}%.",
          {
            value: [
              13,
              25
            ]
          }
        ],
        isActive: false
      },
      {
        id: "twin_disciplines",
        name: "Twin Disciplines",
        icon: "spell_holy_sealofvengeance",
        row: 0,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases the damage and healing of your instant cast spells by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
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
        ranks: 3,
        requiresTalents: null,
        description: [
          "Reduces the threat generated by your Holy spells by {value1}% and reduces the duration of Stun, Fear, and Silence effects inflicted on you by {value2}%.",
          {
            value1: [
              10,
              20,
              30
            ],
            value2: [
              5,
              10,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "holy_precision",
        name: "Holy Precision",
        icon: "spell_holy_divineillumination",
        row: 1,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Improves your chance to hit with Holy spells by {value}%.",
          {
            value: [
              6,
              12,
              18
            ]
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
            value: [
              7,
              14,
              20
            ]
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
          "Gives you a {value}% chance to gain Focused Casting for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect prevents you from losing casting time when taking damage and increases your resistance to Interrupt effects by 20%.",
          {
            value: [
              50,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "mental_agility",
        name: "Mental Agility",
        icon: "ability_hibernation",
        row: 2,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Reduces the mana cost of your Smite, Holy Fire, and instant cast spells by {value}%.",
          {
            value: [
              3,
              7,
              10
            ]
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
          "When activated, reduces the Mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is capable of a critical effect."
        ],
        isActive: false
      },
      {
        id: "meditation",
        name: "Meditation",
        icon: "spell_nature_sleep",
        row: 2,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Allows {value}% of your Mana regeneration to continue while casting.",
          {
            value: [
              17,
              33,
              50
            ]
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
          "Increases the Armor bonus of your Inner Fire spell by {value1}% and increases its total charges by {value2}.",
          {
            value1: [
              15,
              30,
              45
            ],
            value2: [
              4,
              8,
              12
            ]
          }
        ],
        isActive: false
      },
      {
        id: "mental_strength",
        name: "Mental Strength",
        icon: "spell_nature_enchantarmor",
        row: 3,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases your total Intellect by {value}%.",
          {
            value: [
              3,
              6,
              9,
              12,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "soul_warding",
        name: "Soul Warding",
        icon: "spell_holy_pureofheart",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: "improved_power_word_shield",
        description: [
          "Reduces the cooldown on your Power Word: Shield spell by 4 sec and reduces its mana cost by 15%."
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
          "Reduces the casting time of your Mana Burn spell by {value} sec.",
          {
            value: [
              0.5,
              1
            ]
          }
        ],
        isActive: false
      },
      {
        id: "penance",
        name: "Penance",
        icon: "spell_holy_penance",
        row: 4,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Launches a volley of holy light at the target, causing 81 Holy damage to an enemy, or 184 healing to an ally, instantly and every 1 sec for 2 sec."
        ],
        isActive: true
      },
      {
        id: "renewed_hope",
        name: "Renewed Hope",
        icon: "spell_holy_holyprotection",
        row: 4,
        col: 2,
        ranks: 5,
        requiresTalents: "soul_warding",
        description: [
          "Your heals from Flash Heal, Binding Heal, Lesser Heal, Heal, Greater Heal, and Penance gain {value1}% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by {value2} sec.",
          {
            value1: [
              2,
              4,
              6,
              8,
              10
            ],
            value2: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "divine_aegis",
        name: "Divine Aegis",
        icon: "spell_holy_devineaegis",
        row: 5,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Your critical heals create a protective shield on the target, absorbing {value}% of the amount healed. Lasts 12 sec.",
          {
            value: [
              5,
              10,
              15
            ]
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
        requiresTalents: "penance",
        description: [
          "Infuses the target with power, increasing their spell damage and healing done by 20% for 15 sec."
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
        id: "twilight_focus",
        name: "Twilight Focus",
        icon: "spell_holy_healingfocus",
        row: 0,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Gives you a {value}% chance to avoid interruption caused by damage while casting any spell.",
          {
            value: [
              23,
              47,
              70
            ]
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
            value: [
              5,
              10,
              15
            ]
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
            value: [
              1,
              2,
              3,
              4,
              5
            ]
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
            value: [
              2,
              4,
              6,
              8,
              10
            ]
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
          "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by {value} sec.",
          {
            value: [
              0.1,
              0.2,
              0.3,
              0.4,
              0.5
            ]
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
          "Causes an explosion of holy light around the caster, causing 26 to 30 Holy damage to all enemy targets within 10 yards and healing all party members within 10 yards for 50 to 57. These effects cause no threat."
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
          "After being struck by a melee or ranged critical hit, or suffering more than 30% of your maximum Health from a single attack, heal {value}% of the damage taken over 6 sec. Refreshing this effect carries over any remaining healing.",
          {
            value: [
              8,
              17,
              25
            ]
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
          "Your non-periodic critical heals increase your target's Armor by {value}% for 15 sec.",
          {
            value: [
              8,
              17,
              25
            ]
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
            value: [
              10,
              20
            ]
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
          "Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Penance, and Prayer of Mending spells by {value}%.",
          {
            value: [
              5,
              10,
              15
            ]
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
          "Increases your Holy damage done by {value1}%, and gives a {value2}% chance each time your Holy Fire spell deals periodic damage for your next Holy Nova to cost no Mana.",
          {
            value1: [
              2,
              5
            ],
            value2: [
              5,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "binding_heal",
        name: "Binding Heal",
        icon: "spell_holy_blindingheal",
        row: 3,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Heals a friendly target and the caster for 236 to 284. Low threat."
        ],
        isActive: false
      },
      {
        id: "litany_of_light",
        name: "Litany of Light",
        icon: "inv_scroll_07",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "When you cast a healing spell, gain Mana equal to {value}% of the base cost of the spell if your previous heal was a different spell.",
          {
            value: [
              5,
              10
            ]
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
          "Upon death, the priest becomes the Spirit of Redemption for 15 sec.  The Spirit of Redemption cannot move, attack, be attacked or targeted by any spells or effects.  While in this form the priest can cast any healing spell free of cost.  When the effect ends, the priest dies."
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
          "Increases your spell healing by up to {value1}% of your total Spirit and your spell damage by up to {value2}% of your total Spirit.",
          {
            value1: [
              5,
              10,
              15,
              20,
              25
            ],
            value2: [
              1,
              3,
              5,
              6,
              8
            ]
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
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the amount healed by your spells by {value}%.",
          {
            value: [
              3,
              7,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "prayer_of_mending",
        name: "Prayer of Mending",
        icon: "spell_holy_prayerofmendingtga",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "spirit_of_redemption",
        description: [
          "Places a spell on the target that heals them for 172 the next time they take damage or receive non-periodic healing. When the heal occurs, Prayer of Mending jumps to a party or raid member within 20 yards. Jumps up to 5 times and lasts 30 sec after each jump. This spell can only be placed on one target at a time per caster."
        ],
        isActive: true
      }
    ],
    Shadow: [
      {
        id: "shadow_focus",
        name: "Shadow Focus",
        icon: "spell_shadow_burningspirit",
        row: 0,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Improves your chance to hit with Shadow spells by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "blackout",
        name: "Blackout",
        icon: "spell_shadow_gathershadows",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Gives your Shadow damage spells a {value}% chance to stun the target for 3 sec.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "spirit_tap",
        name: "Spirit Tap",
        icon: "spell_shadow_requiem",
        row: 0,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Gives you a {value}% chance to gain a 100% bonus to your Spirit for 15 sec after killing a non-trivial target. For the duration, your Mana will regenerate at a 50% of normal rate while casting.",
          {
            value: [
              20,
              40,
              60,
              80,
              100
            ]
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
            value: [
              10,
              20,
              30
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_shadow_word_pain",
        name: "Improved Shadow Word: Pain",
        icon: "spell_shadow_shadowwordpain",
        row: 1,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the duration of your Shadow Word: Pain spell by {value} sec.",
          {
            value: [
              3,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "shadow_reach",
        name: "Shadow Reach",
        icon: "spell_shadow_chilltouch",
        row: 1,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the range of your offensive Shadow spells by {value}%.",
          {
            value: [
              10,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_mind_blast",
        name: "Improved Mind Blast",
        icon: "spell_shadow_unholyfrenzy",
        row: 2,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Reduces the cooldown of your Mind Blast spell by {value} sec.",
          {
            value: [
              0.5,
              1,
              1.5,
              2,
              2.5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_psychic_scream",
        name: "Improved Psychic Scream",
        icon: "spell_shadow_psychicscream",
        row: 2,
        col: 1,
        ranks: 2,
        requiresTalents: "blackout",
        description: [
          "Reduces the cooldown of your Psychic Scream spell by {value} sec.",
          {
            value: [
              2,
              4
            ]
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
          "Assault the target's mind with Shadow energy, causing 63 Shadow damage over 3 sec  and slowing their movement speed by 50%."
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
        id: "improved_mind_flay",
        name: "Improved Mind Flay",
        icon: "spell_shadow_soulleech_2",
        row: 2,
        col: 3,
        ranks: 2,
        requiresTalents: "mind_flay",
        description: [
          "Your Mind Flay now deals {value1}% more damage, gains {value2} yards increased range, but slows the target's movement speed by {value3}%.",
          {
            value1: [
              10,
              20
            ],
            value2: [
              5,
              10
            ],
            value3: [
              35,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_fade",
        name: "Improved Fade",
        icon: "spell_magic_lesserinvisibilty",
        row: 3,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Decreases the cooldown of your Fade ability by {value} sec.",
          {
            value: [
              3,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "vampiric_embrace",
        name: "Vampiric Embrace",
        icon: "spell_shadow_unsummonbuilding",
        row: 3,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Afflicts your target with Shadow energy that causes all party members to be healed for 20% of any Shadow spell damage you deal for 30 sec. Vampiric Embrace also grants a chance for your Spirit Tap talent to trigger when enemies afflicted by it die."
        ],
        isActive: true,
        castTime: null,
        cooldown: 60,
        spentResource: 40,
        absoluteSpent: true,
        resourceType: 1,
        range: 30,
        requiresWeapon: 0
      },
      {
        id: "shadow_weaving",
        name: "Shadow Weaving",
        icon: "spell_shadow_blackplague",
        row: 3,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Your Shadow damage spells have a {value}% chance to increase the Shadow damage you deal by 2% for 15 sec, stacking up to 5 times.",
          {
            value: [
              33,
              67,
              100
            ]
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
        requiresTalents: null,
        description: [
          "Silences the target, preventing them from casting spells for 5 sec and interrupting their spellcasts for 3 sec."
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
        id: "devouring_contagion",
        name: "Devouring Contagion",
        icon: "spell_shadow_devouringplague.",
        row: 4,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the mana cost of your Devouring Plague by {value1}%.\n\nTargets that die while Devouring Plague it is active spreads it, jumping to a nearby enemy within {value2} yards for the remaining duration.",
          {
            value1: [
              25,
              50
            ],
            value2: [
              5,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "early_demise",
        name: "Early Demise",
        icon: "spell_shadow_demonicfortitude",
        row: 5,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases Shadow Word: Death's critical strike chance on targets at or below 20% health by {value}%.",
          {
            value: [
              15,
              30
            ]
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
          "Increases your Shadow damage done by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
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
          "Assume Shadowform, increasing your Shadow damage by 10%, reducing the Mana cost of all Shadow spells by 50%, increasing the critical strike damage bonus of your Shadow spells by 100%, and reducing Physical damage taken by you by 15%. However, you may not cast healing spells while in this form."
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
        id: "improved_gouge",
        name: "Improved Gouge",
        icon: "ability_gouge",
        row: 0,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the duration of your Gouge ability by {value} sec.",
          {
            value: [
              0.5,
              1,
              1.5
            ]
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
          "After killing a non-trivial enemy, gives you a {value}% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, Mutilate, or Ghostly Strike. Lasts 20 sec.",
          {
            value: [
              20,
              40
            ]
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
          "Increases your critical strike chance with all attacks and Poisons by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
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
          "Gives your finishing moves a {value}% chance to add a Combo Point to your target.",
          {
            value: [
              20,
              40,
              60
            ]
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
          "Increases all damage dealt by {value}% against Humanoid and Giant targets.",
          {
            value: [
              2,
              4
            ]
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
            value: [
              15,
              30,
              45
            ]
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
          "Your finishing moves have a 20% chance per Combo Point to restore 25 Energy."
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
          "Reduces the Energy cost of your Expose Armor ability by {value1}, and refunds {value2} Combo Point when cast with 5 Combo Points.",
          {
            value1: [
              5,
              10
            ],
            value2: [
              1,
              2
            ]
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
          "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by {value}%.",
          {
            value: [
              4,
              8,
              12,
              16,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "vile_poisons",
        name: "Vile Poisons",
        icon: "ability_rogue_feigndeath",
        row: 3,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases the damage dealt by your poisons by {value1}% and gives your poisons an additional {value2}% chance to resist dispel effects.",
          {
            value1: [
              4,
              8,
              12,
              16,
              20
            ],
            value2: [
              8,
              16,
              24,
              32,
              40
            ]
          }
        ],
        isActive: false
      },
      {
        id: "cold_blood",
        name: "Cold Blood",
        icon: "spell_ice_lament",
        row: 3,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, Eviscerate, or Mutilate by 100%."
        ],
        isActive: true,
        castTime: null,
        cooldown: 180,
        spentResource: null,
        range: null,
        requiresWeapon: 0
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
          "Increases the chance to apply Poisons to your target by {value1}%, and gives Poison applications a {value2}% chance to not consume a charge.",
          {
            value1: [
              2,
              4,
              6,
              8,
              10
            ],
            value2: [
              10,
              20,
              30,
              40,
              50
            ]
          }
        ],
        isActive: false
      },
      {
        id: "vigor",
        name: "Vigor",
        icon: "spell_nature_earthbindtotem",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases your maximum Energy by {value}.",
          {
            value: [
              5,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "mutilate",
        name: "Mutilate",
        icon: "ability_rogue_deadlybrew",
        row: 4,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Instantly attacks with both weapons for 75% weapon damage plus an additional 17 with each weapon. Damage increased by 20% against Poisoned targets. Awards 2 Combo Points."
        ],
        isActive: true
      },
      {
        id: "improved_kidney_shot",
        name: "Improved Kidney Shot",
        icon: "ability_rogue_kidneyshot",
        row: 4,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Enemies Stunned by your Kidney Shot ability take {value}% increased damage from your poisons and attacks.",
          {
            value: [
              5,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "seal_fate",
        name: "Seal Fate",
        icon: "spell_shadow_chilltouch",
        row: 5,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Your critical strikes from abilities that add Combo Points have a {value}% chance to add an additional Combo Point.",
          {
            value: [
              20,
              40,
              60,
              80,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "venom",
        name: "Venom",
        icon: "inv_sword_31",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "mutilate",
        description: [
          "Finishing move that increases the damage of your Poisons by 30% and your chance to apply Poisons by 10%.  Lasts longer per combo point: 1 point  : 9 seconds 2 points: 12 seconds 3 points: 15 seconds 4 points: 18 seconds 5 points: 21 seconds"
        ],
        isActive: true
      }
    ],
    Combat: [
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
            value: [
              7,
              13,
              20
            ]
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
            value: [
              3,
              5
            ]
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
            value: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "puncturing_wounds",
        name: "Puncturing Wounds",
        icon: "ability_backstab",
        row: 1,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the critical strike chance of your Backstab by {value1}% and your Mutilate by {value2}%, and gives Backstab a {value3}% chance to add an additional Combo Point.",
          {
            value1: [
              10,
              20,
              30
            ],
            value2: [
              5,
              10,
              15
            ],
            value3: [
              15,
              30,
              45
            ]
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
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases your Parry chance by {value}%.",
          {
            value: [
              2,
              4,
              6
            ]
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
        ranks: 3,
        requiresTalents: null,
        description: [
          "Improves your chance to hit by {value}%.",
          {
            value: [
              1,
              2,
              3
            ]
          }
        ],
        isActive: false
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
          "Reduces the cooldown of your Sprint and Evasion abilities by {value}%.",
          {
            value: [
              30,
              60
            ]
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
            value: [
              50,
              100
            ]
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
          "Gives your Kick ability a {value}% chance to Silence the target for 2 sec.",
          {
            value: [
              50,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "flawless_execution",
        name: "Flawless Execution",
        icon: "inv_sword_35",
        row: 3,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Reduces the Energy cost of your Eviscerate ability by 10."
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
          "Increases the damage done by your off-hand weapon by {value}%.",
          {
            value: [
              5,
              10,
              15,
              20,
              25
            ]
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
          "Increases your melee attack speed by 20% and your melee attacks strike an additional nearby opponent. Lasts 15 sec."
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
        id: "hack_and_slash",
        name: "Hack and Slash",
        icon: "inv_sword_27",
        row: 4,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Gives your melee weapon attacks a benefit depending on the weapon.\n\nAxe/Sword: Your successful melee attacks have a {value1}% chance to trigger an extra attack on the target.\n\nDagger/Fist: Increases your critical strike chance by {value2}%.\n\nMace: Your attacks ignore {value3}% of your target's armor.",
          {
            value1: [
              1,
              2,
              3,
              4,
              5
            ],
            value2: [
              1,
              2,
              3,
              4,
              5
            ],
            value3: [
              3,
              6,
              9,
              12,
              15
            ]
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
          "Reduces the chance for your attacks to be Dodged or Parried by {value}%.",
          {
            value: [
              1,
              2
            ]
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
          "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by {value}%.",
          {
            value: [
              2,
              4,
              6
            ]
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
        id: "camouflage",
        name: "Camouflage",
        icon: "ability_stealth",
        row: 0,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Reduces your speed penalty from your Stealth ability by {value1}% and reduces its cooldown by {value2} sec.",
          {
            value1: [
              3,
              6,
              9,
              12,
              15
            ],
            value2: [
              2,
              3,
              4,
              5,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "master_of_deception",
        name: "Master of Deception",
        icon: "spell_shadow_charm",
        row: 0,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Reduces the chance enemies have to detect you while in Stealth mode as if you were {value} level higher.",
          {
            value: [
              1,
              2,
              3
            ]
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
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the damage dealt by your Backstab, Garrote, Ambush, and Mutilate abilities by {value}%.",
          {
            value: [
              5,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "setup",
        name: "Setup",
        icon: "spell_nature_mirrorimage",
        row: 1,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Gives you a {value}% chance to add a Combo Point to your target after Dodging an attack or fully resisting a spell.",
          {
            value: [
              33,
              67,
              100
            ]
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
          "Reduces the cooldown of your Vanish and Blind abilities by {value} sec.",
          {
            value: [
              45,
              90
            ]
          }
        ],
        isActive: false
      },
      {
        id: "dirty_tricks",
        name: "Dirty Tricks",
        icon: "ability_sap",
        row: 1,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the Energy cost of your Sap and Blind abilities by {value}%.",
          {
            value: [
              25,
              50
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_ambush",
        name: "Improved Ambush",
        icon: "ability_rogue_ambush",
        row: 1,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the critical strike chance of your Ambush ability by {value}%.",
          {
            value: [
              15,
              30,
              45
            ]
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
            value: [
              33,
              67,
              100
            ]
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
          "A strike that deals 125% (180% if a Dagger is equipped in your Main Hand) weapon damage and increases your chance to dodge by 15% for 7 sec.  Awards 1 combo point."
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
        id: "improved_distract",
        name: "Improved Distract",
        icon: "ability_rogue_distract",
        row: 2,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the radius of your Distract ability by {value1} yds, and further reduces the Stealth detection of distracted enemies as though they were an additional {value2} level lower.",
          {
            value1: [
              3,
              5
            ],
            value2: [
              1,
              2
            ]
          }
        ],
        isActive: false
      },
      {
        id: "heightened_senses",
        name: "Heightened Senses",
        icon: "ability_ambush",
        row: 3,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases your Stealth detection as if you were {value1} level higher and reduces your chance to be hit by spells and ranged attacks by {value2}%.",
          {
            value1: [
              1,
              3
            ],
            value2: [
              2,
              4
            ]
          }
        ],
        isActive: false
      },
      {
        id: "premeditation",
        name: "Premeditation",
        icon: "spell_shadow_possession",
        row: 3,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Adds 2 Combo Points to your target. You must add to or use those combo points within 20 sec or the combo points are lost."
        ],
        isActive: true,
        castTime: null,
        cooldown: 120,
        spentResource: null,
        range: 20,
        requiresWeapon: 0,
        requiresStealth: true
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
          "Causes your attacks to ignore {value1}% of your target's Armor and increases the damage dealt by your Rupture ability by {value2}%.",
          {
            value1: [
              3,
              6,
              9
            ],
            value2: [
              10,
              20,
              30
            ]
          }
        ],
        isActive: false
      },
      {
        id: "dirty_deeds",
        name: "Dirty Deeds",
        icon: "spell_shadow_summonsuccubus",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the Energy cost of your Cheap Shot and Garrote abilities by {value}, and your Garrote ability no longer requires you to be behind your target.",
          {
            value: [
              10,
              20
            ]
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
        id: "hemorrhage",
        name: "Hemorrhage",
        icon: "spell_shadow_lifedrain",
        row: 4,
        col: 2,
        ranks: 1,
        requiresTalents: "serrated_blades",
        description: [
          "An instant strike that deals 100% weapon damage (145% if a Dagger is equipped) and causes the target to take 15% increased Rupture damage from the Rogue. Lasts 15 sec. Awards 1 Combo Point."
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
        id: "quietus",
        name: "Quietus",
        icon: "ability_rogue_garrote",
        row: 5,
        col: 0,
        ranks: 5,
        requiresTalents: "dirty_deeds",
        description: [
          "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause {value}% more damage against targets below 35% health.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "cutthroat",
        name: "Cutthroat",
        icon: "classicon_rogue",
        row: 5,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Your Backstab has a {value}% chance to cause your next Ambush within 10 sec to not require Stealth.",
          {
            value: [
              3,
              6,
              9,
              12,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "thousand_cuts",
        name: "Thousand Cuts",
        icon: "ability_rogue_rupture",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "preparation",
        description: [
          "When your Rupture ability deals periodic damage, the Energy cost of your next Hemorrhage or Backstab ability within 10 sec is reduced by 3, stacking up to 5 times."
        ],
        isActive: false
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
          "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "concussion",
        name: "Concussion",
        icon: "spell_nature_earthshock",
        row: 0,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "elemental_warding",
        name: "Elemental Warding",
        icon: "spell_nature_spiritarmor",
        row: 1,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Reduces damage taken from Fire, Frost, and Nature effects by {value}%.",
          {
            value: [
              3,
              7,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "reverberation",
        name: "Reverberation",
        icon: "spell_frost_frostward",
        row: 1,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Reduces the cooldown of your Shock spells by {value} sec.",
          {
            value: [
              0.2,
              0.4,
              0.6,
              0.8,
              1
            ]
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
          "Increases the damage done by your Fire Totems and by your Flame Shock, Fire Nova, and Lava Burst spells by {value}%.",
          {
            value: [
              5,
              10,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "elemental_devastation",
        name: "Elemental Devastation",
        icon: "spell_fire_elementaldevastation",
        row: 1,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Your offensive spell critical strikes will increase your chance to get a critical strike with melee attacks by {value}% for 10 sec.",
          {
            value: [
              3,
              6,
              9
            ]
          }
        ],
        isActive: false
      },
      {
        id: "elemental_focus",
        name: "Elemental Focus",
        icon: "spell_shadow_manaburn",
        row: 2,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell.  The Clearcasting state reduces the mana cost of your next damage spell by 100%."
        ],
        isActive: false
      },
      {
        id: "elemental_fury",
        name: "Elemental Fury",
        icon: "spell_fire_volcano",
        row: 2,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by {value}%.",
          {
            value: [
              20,
              40,
              60,
              80,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_fire_nova",
        name: "Improved Fire Nova",
        icon: "spell_fire_sealoffire",
        row: 3,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the damage done by your Fire Nova spell by {value1}% and reduces its cooldown by {value2} sec.",
          {
            value1: [
              10,
              20
            ],
            value2: [
              2,
              4
            ]
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
          "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, and Lava Burst by {value}%.",
          {
            value: [
              23,
              47,
              70
            ]
          }
        ],
        isActive: false
      },
      {
        id: "call_of_thunder",
        name: "Call of Thunder",
        icon: "spell_nature_callstorm",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: "elemental_fury",
        description: [
          "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 3%."
        ],
        isActive: false
      },
      {
        id: "elemental_reach",
        name: "Elemental Reach",
        icon: "spell_nature_stormreach",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by {value1} yards, and increases the range of your Flame Shock spell by {value2} yards.",
          {
            value1: [
              3,
              6
            ],
            value2: [
              8,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "lightning_overload",
        name: "Lightning Overload",
        icon: "spell_nature_lightningoverload",
        row: 4,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Gives your Lightning Bolt and Chain Lightning spells a {value}% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
          {
            value: [
              3,
              7,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "earthbound",
        name: "Earthbound",
        icon: "spell_nature_stranglevines",
        row: 4,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Your Earthbind Totem Immobilizes nearby targets for 5 sec when cast."
        ],
        isActive: false
      },
      {
        id: "elemental_alacrity",
        name: "Elemental Alacrity",
        icon: "spell_lightning_lightningbolt01",
        row: 5,
        col: 2,
        ranks: 3,
        requiresTalents: "call_of_thunder",
        description: [
          "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by {value} sec.",
          {
            value: [
              0.17,
              0.33,
              0.5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "lava_burst",
        name: "Lava Burst",
        icon: "spell_shaman_lavaburst",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "lightning_overload",
        description: [
          "You hurl molten lava at the target, dealing 106 to 135 Fire damage. If your Flame Shock is on the target, Lava Burst deals 20% increased damage."
        ],
        isActive: true
      }
    ],
    Enhancement: [
      {
        id: "earths_grasp",
        name: "Earth's Grasp",
        icon: "spell_nature_stoneclawtotem",
        row: 0,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the health of your Stoneclaw Totem by {value1}% and the radius of your Earthbind Totem by {value2}%.",
          {
            value1: [
              25,
              50
            ],
            value2: [
              10,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "thundering_strikes",
        name: "Thundering Strikes",
        icon: "ability_thunderbolt",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Improves your chance to get a critical strike with all spells and attacks by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "ancestral_knowledge",
        name: "Ancestral Knowledge",
        icon: "spell_shadow_grimward",
        row: 0,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases your Intellect by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
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
          "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by {value1}% and reduces the cooldown of your Grounding Totem by {value2} sec.",
          {
            value1: [
              10,
              20
            ],
            value2: [
              1,
              2
            ]
          }
        ],
        isActive: false
      },
      {
        id: "mental_dexterity",
        name: "Mental Dexterity",
        icon: "spell_nature_mentalquickness",
        row: 1,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases your Attack Power by an amount equal to {value}% of your Intellect.",
          {
            value: [
              33,
              67,
              100
            ]
          }
        ],
        isActive: false
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
          "Reduces the cast time of your Ghost Wolf spell by {value} sec, and Ghost Wolf may be used indoors.",
          {
            value: [
              1,
              3
            ]
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
            value: [
              5,
              10,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "elemental_weapons",
        name: "Elemental Weapons",
        icon: "spell_fire_flametounge",
        row: 2,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the melee attack power bonus of your Rockbiter Weapon by {value1}%, your Windfury Weapon effect by {value2}% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by {value3}%.",
          {
            value1: [
              7,
              13,
              20
            ],
            value2: [
              13,
              27,
              40
            ],
            value3: [
              5,
              10,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "shamanistic_focus",
        name: "Shamanistic Focus",
        icon: "spell_nature_elementalabsorption",
        row: 2,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Reduces the mana cost of your Shock and Lightning Shield spells by 45%."
        ],
        isActive: false
      },
      {
        id: "anticipation",
        name: "Anticipation",
        icon: "spell_nature_mirrorimage",
        row: 2,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases your chance to dodge by an additional {value}%.",
          {
            value: [
              2,
              4,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "toughness",
        name: "Toughness",
        icon: "spell_holy_devotion",
        row: 3,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases your Stamina by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
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
        requiresTalents: "mental_dexterity",
        description: [
          "Increases your attack speed by {value}% for your next 3 swings after dealing a melee critical strike.",
          {
            value: [
              5,
              10,
              15,
              20,
              25
            ]
          }
        ],
        isActive: false
      },
      {
        id: "stormstrike",
        name: "Stormstrike",
        icon: "ability_shaman_stormstrike",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Instantly strike for normal weapon damage and increase the damage you deal to the target with your next Lightning Bolt, Chain Lightning, or Earth Shock spell by 20% for 12 sec."
        ],
        isActive: true,
        castTime: null,
        cooldown: 6,
        spentResource: 21,
        absoluteSpent: false,
        resourceType: 1,
        range: 0,
        requiresWeapon: 0
      },
      {
        id: "spirit_weapons",
        name: "Spirit Weapons",
        icon: "ability_parry",
        row: 4,
        col: 0,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Gives a chance to parry enemy melee attacks, reduces all threat generated by your attacks by 30% while Rockbiter Weapon is not active, and increases all threat generated by 30% while Rockbiter Weapon is active."
        ],
        isActive: false
      },
      {
        id: "mental_quickness",
        name: "Mental Quickness",
        icon: "spell_nature_sleep",
        row: 4,
        col: 1,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases your spell damage and healing by up to {value}% of your Intellect.",
          {
            value: [
              15,
              30
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_stormstrike",
        name: "Improved Stormstrike",
        icon: "spell_shaman_improvedstormstrike",
        row: 4,
        col: 2,
        ranks: 2,
        requiresTalents: "stormstrike",
        description: [
          "When you Stormstrike, you have a {value1}% chance to gain 50% mana regeneration while casting spells for 15 sec, and Stormstrike's cooldown has a {value2}% chance to reset each time you Dodge or Parry.",
          {
            value1: [
              50,
              100
            ],
            value2: [
              50,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "maelstrom_weapon",
        name: "Maelstrom Weapon",
        icon: "spell_shaman_maelstromweapon",
        row: 5,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by {value}%. Stacks up to 5 times. Lasts 30 sec.",
          {
            value: [
              4,
              8,
              12,
              16,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "rage_of_the_farseer",
        name: "Rage of the Farseer",
        icon: "spell_nature_bloodlust",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "mental_quickness",
        description: [
          "Increases your melee attack speed and spell casting speed by 30% for 25 sec."
        ],
        isActive: true
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
            value: [
              0.1,
              0.2,
              0.3,
              0.4,
              0.5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "totemic_focus",
        name: "Totemic Focus",
        icon: "spell_nature_moonglow",
        row: 0,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Reduces the Mana cost of your totems and any spells that summon or move them by {value}%.",
          {
            value: [
              5,
              10,
              15,
              20,
              25
            ]
          }
        ],
        isActive: false
      },
      {
        id: "mindfulness",
        name: "Mindfulness",
        icon: "spell_nature_sleep",
        row: 1,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Allows {value}% of your Mana regeneration to continue while casting.",
          {
            value: [
              17,
              33,
              50
            ]
          }
        ],
        isActive: false
      },
      {
        id: "natural_grace",
        name: "Natural Grace",
        icon: "spell_nature_healingtouch",
        row: 1,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Reduces the threat generated by your spells by {value}%.",
          {
            value: [
              5,
              10,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "tidal_focus",
        name: "Tidal Focus",
        icon: "spell_frost_manarecharge",
        row: 1,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Reduces the Mana cost of your healing spells by {value1}% and improves your chance to hit by {value2}%.",
          {
            value1: [
              1,
              2,
              3,
              4,
              5
            ],
            value2: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_reincarnation",
        name: "Improved Reincarnation",
        icon: "spell_nature_reincarnation",
        row: 1,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the cooldown of your Reincarnation spell by {value1} min, increases your maximum health by {value2}%, and increases the amount of health and Mana you reincarnate with by an additional {value3}%.",
          {
            value1: [
              10,
              20
            ],
            value2: [
              2,
              4
            ],
            value3: [
              10,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "ancestral_healing",
        name: "Ancestral Healing",
        icon: "spell_nature_undyingstrength",
        row: 2,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases your target's armor value by {value}% for 15 sec after getting a critical effect from one of your healing spells.",
          {
            value: [
              8,
              17,
              25
            ]
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
        ranks: 3,
        requiresTalents: null,
        description: [
          "Gives you a {value}% chance to avoid interruption caused by damage while casting any healing spell.",
          {
            value: [
              23,
              47,
              70
            ]
          }
        ],
        isActive: false
      },
      {
        id: "water_shield",
        name: "Water Shield",
        icon: "ability_shaman_watershield",
        row: 2,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
          "The caster is surrounded by 3 globes of water. When a spell, melee, or ranged attack hits the caster or when one of the caster's healing spells gets a critical result, 2% of maximum mana is restored to the caster, expending one water globe. Only one globe will activate every few seconds.  Lasts 10 min.\n\nOnly one Elemental Shield can be active on the Shaman at any one time."
        ],
        isActive: true
      },
      {
        id: "tidal_mastery",
        name: "Tidal Mastery",
        icon: "spell_nature_tranquility",
        row: 3,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases the critical effect chance of your healing spells by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
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
          "Increases the effect of your Mana Spring Totem by {value1}% and increases the effect of your Healing Stream Totem by {value2}%.",
          {
            value1: [
              5,
              10,
              15,
              20,
              25
            ],
            value2: [
              10,
              20,
              30,
              40,
              50
            ]
          }
        ],
        isActive: false
      },
      {
        id: "mana_tide_totem",
        name: "Mana Tide Totem",
        icon: "spell_frost_summonwaterelemental",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 sec that restores 88 mana every 3 seconds to group members within 30 yards."
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
      },
      {
        id: "healing_way",
        name: "Healing Way",
        icon: "spell_nature_healingway",
        row: 4,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the amount healed by your Healing Wave spell by {value}%.",
          {
            value: [
              8,
              17,
              25
            ]
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
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "riptide",
        name: "Riptide",
        icon: "spell_nature_riptide",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "healing_way",
        description: [
          "Heals a friendly target for 486 to 534, an additional 445 over 15 sec, and increases the effectiveness of your Chain Heal casts directly on that target by 25%."
        ],
        isActive: true
      }
    ]
  },
  warlock: {
    Affliction: [
      {
        id: "improved_life_tap",
        name: "Improved Life Tap",
        icon: "spell_shadow_burningspirit",
        row: 0,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the amount of Mana awarded by your Life Tap spell by {value}%.",
          {
            value: [
              10,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "suppression",
        name: "Suppression",
        icon: "spell_shadow_unsummonbuilding",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Improves your chance to hit by {value1}% and reduces all threat you generate by {value2}%.",
          {
            value1: [
              1,
              2,
              3,
              4,
              5
            ],
            value2: [
              4,
              8,
              12,
              16,
              20
            ]
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
          "Reduces the casting time of your Corruption spell by {value1} sec and increases the damage it deals by {value2}%.",
          {
            value1: [
              0.4,
              0.8,
              1.2,
              1.6,
              2
            ],
            value2: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "malediction",
        name: "Malediction",
        icon: "spell_shadow_curseofachimonde",
        row: 1,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases all periodic damage done by your Warlock spells by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "soul_harvesting",
        name: "Soul Harvesting",
        icon: "inv_elemental_primal_shadow",
        row: 1,
        col: 1,
        ranks: 2,
        requiresTalents: null,
        description: [
          "You gain Soul Harvest for 10 sec if a victim is killed while afflicted with your Drain Soul. Soul Harvest allows your Mana to regenerate at {value}% of normal speed while you are casting spells, and grants a {value}% increase to your Mana regeneration.",
          {
            value: [
              50,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_drains",
        name: "Improved Drains",
        icon: "spell_shadow_haunting",
        row: 1,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by {value}%.",
          {
            value: [
              7,
              13,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_bane_of_agony",
        name: "Improved Bane of Agony",
        icon: "spell_shadow_curseofsargeras",
        row: 2,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the damage done by your Bane of Agony by {value}%.",
          {
            value: [
              5,
              10
            ]
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
        ranks: 3,
        requiresTalents: null,
        description: [
          "Gives you a {value}% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells.",
          {
            value: [
              23,
              47,
              70
            ]
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
          "Increases the effect of your next Curse of Weakness or Bane of Agony by 50%, or your next Curse of Exhaustion by 20%.  Lasts 30 sec."
        ],
        isActive: true,
        castTime: null,
        cooldown: 180,
        spentResource: null,
        range: null,
        requiresWeapon: 0
      },
      {
        id: "pandemic",
        name: "Pandemic",
        icon: "spell_shadow_unstableaffliction_2",
        row: 2,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by {value}%.",
          {
            value: [
              33,
              67,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "malevolence",
        name: "Malevolence",
        icon: "spell_shadow_focusedpower",
        row: 3,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases the critical effect chance of your Shadow spells by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
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
          "Gives your Corruption, Drain Soul, Drain Life, and Wrack spells a {value}% chance to cause you to enter a Shadow Trance after damaging the opponent. The Shadow Trance reduces the casting time of your next Shadow Bolt spell by 100%.",
          {
            value: [
              2,
              4
            ]
          }
        ],
        isActive: false
      },
      {
        id: "curse_of_exhaustion",
        name: "Curse of Exhaustion",
        icon: "spell_shadow_grimward",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: "amplify_curse",
        description: [
          "Reduces the target's movement speed by 30% for 12 sec.  Only one Curse per Warlock can be active on any one target."
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
        id: "siphon_life",
        name: "Siphon Life",
        icon: "spell_shadow_requiem",
        row: 4,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Transfers 11 health from the target to the caster every 3 sec.  Lasts 30 sec."
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
        id: "soul_siphon",
        name: "Soul Siphon",
        icon: "spell_shadow_lifedrain02",
        row: 4,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by {value1}% per each of your other Affliction effects active on the target, up to a maximum increase of {value2}%.",
          {
            value1: [
              4,
              8,
              12
            ],
            value2: [
              12,
              24,
              36
            ]
          }
        ],
        isActive: false
      },
      {
        id: "shadow_mastery",
        name: "Shadow Mastery",
        icon: "spell_shadow_shadetruesight",
        row: 5,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases the damage dealt or life drained by your Shadow spells by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "wrack",
        name: "Wrack",
        icon: "ability_deathknight_hemorrhagicfever",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "siphon_life",
        description: [
          "Tears the target apart from within, dealing 36 Shadow damage every 1 sec and increasing the damage they take from your other Shadow damage over time effects by 10%. Lasts 6 sec."
        ],
        isActive: true,
        castTime: 6,
        isChanneled: true,
        cooldown: null,
        spentResource: 200,
        absoluteSpent: true,
        resourceType: 1,
        range: 30,
        requiresWeapon: 0
      }
    ],
    Demonology: [
      {
        id: "improved_health_funnel",
        name: "Improved Health Funnel",
        icon: "spell_shadow_lifedrain",
        row: 0,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the amount of health transferred by your Health Funnel spell by {value1}%, reduces its health cost by {value2}%, and reduces all threat your Health Funnel generates by {value3}%. Allows Health Funnel to be used regardless of your demon's health.",
          {
            value1: [
              20,
              40
            ],
            value2: [
              15,
              30
            ],
            value3: [
              50,
              100
            ]
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
          "Increases the damage of your Imp's Firebolt spell by {value}% and the effect of its Fire Shield spell by {value}%.",
          {
            value: [
              10,
              20,
              30
            ]
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
          "Increases your total Stamina by {value}%.",
          {
            value: [
              3,
              6,
              9,
              12,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "unholy_power",
        name: "Unholy Power",
        icon: "spell_shadow_shadowworddominate",
        row: 0,
        col: 3,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases all damage done by your Imp, Voidwalker, Succubus, and Felhunter pets by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "demonic_aegis",
        name: "Demonic Aegis",
        icon: "spell_shadow_ragingscream",
        row: 1,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the effectiveness of your Demon Skin and Demon Armor spells by {value}%.",
          {
            value: [
              15,
              30
            ]
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
          "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice, and Suffering spells by {value}%.",
          {
            value: [
              10,
              20,
              30
            ]
          }
        ],
        isActive: false
      },
      {
        id: "fel_vitality",
        name: "Fel Vitality",
        icon: "spell_shadow_demonictactics",
        row: 1,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the maximum health and Mana of your Imp, Voidwalker, Succubus, and Felhunter by {value1}%, and increases your maximum Mana by {value2}%.",
          {
            value1: [
              5,
              10,
              15
            ],
            value2: [
              5,
              10,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "demonic_energies",
        name: "Demonic Energies",
        icon: "spell_shadow_felmending",
        row: 1,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
          "You heal your pet for {value1}% of all spell damage you deal. When you gain Mana from Life Tap, your summoned demon gains {value2}% of the Mana you gain.",
          {
            value1: [
              8,
              15
            ],
            value2: [
              50,
              100
            ]
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
          "Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by {value}%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by {value}%.",
          {
            value: [
              10,
              20,
              30
            ]
          }
        ],
        isActive: false
      },
      {
        id: "demonic_sacrifice",
        name: "Demonic Sacrifice",
        icon: "spell_shadow_psychicscream",
        row: 2,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "When activated, sacrifices your summoned Demon to enhance the opposing aspect of your power, granting you an effect that lasts 2 hrs. The effect is canceled if any Demon is summoned.\n\nImp: Increases your Shadow damage by 15%.\n\nVoidwalker: Restores 2% of your total Mana every 4 sec.\n\nSuccubus: Increases your Fire damage by 15%.\n\nFelhunter: Restores 3% of your total Health every 4 sec."
        ],
        isActive: true,
        castTime: null,
        cooldown: null,
        spentResource: null,
        range: 100,
        requiresWeapon: 0
      },
      {
        id: "master_summoner",
        name: "Master Summoner",
        icon: "spell_shadow_impphaseshift",
        row: 2,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the casting time of your Imp, Voidwalker, Succubus, and Felhunter Summoning spells by {value1} sec and the Mana cost by {value2}%.",
          {
            value1: [
              2,
              4
            ],
            value2: [
              20,
              40
            ]
          }
        ],
        isActive: false
      },
      {
        id: "decimation",
        name: "Decimation",
        icon: "spell_fire_fireball02",
        row: 3,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the cooldown of your Soul Fire spell by {value1}%. When you cast Shadow Bolt or Searing Pain on an enemy below 35% health, they deal {value2}% increased damage, and for the next 10 sec your Soul Fire spell has its cast time reduced by {value3}% and costs no Soul Shards.",
          {
            value1: [
              45,
              90
            ],
            value2: [
              3,
              6
            ],
            value3: [
              20,
              40
            ]
          }
        ],
        isActive: false
      },
      {
        id: "fel_domination",
        name: "Fel Domination",
        icon: "spell_nature_removecurse",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: "master_summoner",
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
        id: "demonic_brand",
        name: "Demonic Brand",
        icon: "ability_demonhunter_chaoticimprint_fire",
        row: 3,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Your Searing Pain generates {value1}% less threat and brands the target for 10 sec. Your pet's next {value2} attacks against the target generate high threat and deal 65 to 68 Fire or Shadow damage based on the pet.",
          {
            value1: [
              17,
              33,
              50
            ],
            value2: [
              2,
              4,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_felhunter",
        name: "Improved Felhunter",
        icon: "spell_shadow_summonfelhunter",
        row: 4,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the Attack Power reduction of your Felhunter's Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by {value1}%, and reduces the cooldown of its Spell Lock by {value2} sec.",
          {
            value1: [
              10,
              20,
              30
            ],
            value2: [
              2,
              4,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "soul_link",
        name: "Soul Link",
        icon: "spell_shadow_gathershadows",
        row: 4,
        col: 1,
        ranks: 1,
        requiresTalents: "demonic_sacrifice",
        description: [
          "When active, 30% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, or Felhunter Demon instead. In addition, both the Demon and the master will inflict 3% more damage. Lasts as long as the Demon is active."
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
        id: "demonic_knowledge",
        name: "Demonic Knowledge",
        icon: "spell_shadow_improvedvampiricembrace",
        row: 4,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases your spell damage and your Demon pet's spell damage by up to {value}% of your level while you have a summoned Demon pet active.",
          {
            value: [
              33,
              67,
              100
            ]
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
        requiresTalents: null,
        description: [
          "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases Fire damage done by {value}%.\n\nVoidwalker - Reduces Physical damage taken by {value}%.\n\nSuccubus - Increases Shadow damage done by {value}%.\n\nFelhunter - Reduces Magic damage taken by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "demonic_pact",
        name: "Demonic Pact",
        icon: "inv_ability_soulharvesterwarlock_demonicsoul",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "soul_link",
        description: [
          "Your Demonic Sacrifice effect is no longer cancelled by summoning a different Demon pet. Resummoning the sacrificed pet will still cancel the effect."
        ],
        isActive: false
      }
    ],
    Destruction: [
      {
        id: "destructive_reach",
        name: "Destructive Reach",
        icon: "spell_shadow_corpseexplode",
        row: 0,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the range of your damaging spells by {value}%.",
          {
            value: [
              10,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_shadow_bolt",
        name: "Improved Shadow Bolt",
        icon: "spell_shadow_shadowbolt",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by {value}% for 12 sec.",
          {
            value: [
              4,
              8,
              12,
              16,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "bane",
        name: "Bane",
        icon: "spell_shadow_deathpact",
        row: 0,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by {value1} sec and your Soul Fire spell by {value2} sec.",
          {
            value1: [
              0.1,
              0.2,
              0.3,
              0.4,
              0.5
            ],
            value2: [
              0.4,
              0.8,
              1.2,
              1.6,
              2
            ]
          }
        ],
        isActive: false
      },
      {
        id: "molten_skin",
        name: "Molten Skin",
        icon: "ability_mage_moltenarmor",
        row: 1,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Reduces all damage taken by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "cataclysm",
        name: "Cataclysm",
        icon: "spell_fire_windsofwoe",
        row: 1,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Reduces the Mana cost of your Destruction spells by {value}%.",
          {
            value: [
              3,
              6,
              10
            ]
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
          "Increases the initial damage of your Immolate spell by {value1}% and your Conflagrate spell has a {value2}% chance to Daze the target, reducing the target's movement speed by 50% for 5 sec.",
          {
            value1: [
              10,
              20,
              30,
              40,
              50
            ],
            value2: [
              20,
              40,
              60,
              80,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "ruin",
        name: "Ruin",
        icon: "spell_shadow_shadowwordpain",
        row: 2,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases the critical strike damage bonus of your Destruction spells by {value}%.",
          {
            value: [
              20,
              40,
              60,
              80,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "shadowburn",
        name: "Shadowburn",
        icon: "spell_shadow_scourgebuild",
        row: 2,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Instantly blasts the target for 65 to 74 Shadow damage.  If a non-trivial target dies within 8 sec of being hit with Shadowburn, the caster gains a Soul Shard."
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
        ranks: 3,
        requiresTalents: null,
        description: [
          "Gives you a {value}% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
          {
            value: [
              23,
              47,
              70
            ]
          }
        ],
        isActive: false
      },
      {
        id: "agonizing_flames",
        name: "Agonizing Flames",
        icon: "spell_fire_soulburn",
        row: 3,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the critical strike chance of your Searing Pain spell by {value}% and the damage done by all your Destruction spells by {value}%.",
          {
            value: [
              3,
              7,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "conflagrate",
        name: "Conflagrate",
        icon: "spell_fire_fireball",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Ignites a target that is already afflicted by your Immolate spell, dealing 88 to 111 Fire damage and consuming your Immolate effect."
        ],
        isActive: true,
        castTime: null,
        cooldown: 10,
        spentResource: 165,
        absoluteSpent: true,
        resourceType: 1,
        range: 30,
        requiresWeapon: 0
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
          "Gives your Soul Fire spell a {value}% chance to Stun the target for 3 sec, and your Rain of Fire and Hellfire spells a {value}% chance over their duration to Stun targets they damage for 3 sec.",
          {
            value: [
              13,
              26
            ]
          }
        ],
        isActive: false
      },
      {
        id: "bane_of_havoc",
        name: "Bane of Havoc",
        icon: "ability_warlock_baneofhavoc",
        row: 4,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Afflicts the target for 5 min, causing 15% of all damage done by the Warlock to other targets to also be dealt to the cursed target. Bane of Havoc is limited to 1 target, and only one Bane per Warlock can be active on any one target."
        ],
        isActive: true
      },
      {
        id: "fire_and_brimstone",
        name: "Fire and Brimstone",
        icon: "spell_fire_meteorstorm",
        row: 4,
        col: 2,
        ranks: 3,
        requiresTalents: "conflagrate",
        description: [
          "Increases the critical strike chance of your Conflagrate spell by {value}%.",
          {
            value: [
              8,
              17,
              25
            ]
          }
        ],
        isActive: false
      },
      {
        id: "shadow_and_flame",
        name: "Shadow and Flame",
        icon: "spell_fire_playingwithfire",
        row: 5,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Hitting an enemy with Conflagrate increases all Shadow damage you deal by {value1}% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by {value1}% for 20 sec. In addition, Conflagrate has a {value2}% chance not to consume Immolate, and Shadowburn has a {value2}% chance to instantly refund a Soul Shard.",
          {
            value1: [
              2,
              4,
              6,
              8,
              10
            ],
            value2: [
              20,
              40,
              60,
              80,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "incinerate",
        name: "Incinerate",
        icon: "spell_fire_burnout",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "bane_of_havoc",
        description: [
          "Deals 100 to 114 Fire damage to your target and an additional 25% damage if the target is afflicted by Immolate."
        ],
        isActive: true,
        castTime: 2.5,
        cooldown: null,
        spentResource: 205,
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
          "Reduces the cost of your Heroic Strike ability by {value} Rage.",
          {
            value: [
              1,
              2,
              3
            ]
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
            value: [
              1,
              2,
              3,
              4,
              5
            ]
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
          "Increases the Bleed damage done by your Rend ability by {value}%.",
          {
            value: [
              12,
              23,
              35
            ]
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
          "Increases the Rage generated by your Charge ability by {value}.",
          {
            value: [
              3,
              6
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_tactical_mastery",
        name: "Improved Tactical Mastery",
        icon: "spell_nature_enchantarmor",
        row: 1,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Tactical Mastery lets you retain up to an additional {value} Rage when you change stances.",
          {
            value: [
              3,
              6,
              9,
              12,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_overpower",
        name: "Improved Overpower",
        icon: "inv_sword_05",
        row: 1,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Increases the critical strike chance of your Overpower ability by {value}%.",
          {
            value: [
              25,
              50
            ]
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
        requiresTalents: "improved_tactical_mastery",
        description: [
          "Generates 1 Rage every 3 sec while in combat, and reduces Rage loss while out of combat by 30%."
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
          "Your critical strikes cause your opponent to Bleed, dealing {value}% of your melee weapon's average damage over 12 sec.",
          {
            value: [
              20,
              40,
              60
            ]
          }
        ],
        isActive: false
      },
      {
        id: "spearing_strike",
        name: "Spearing Strike",
        icon: "inv_spear_01",
        row: 3,
        col: 0,
        ranks: 1,
        requiresTalents: null,
        description: [
          "A brutal attack that deals 40% weapon damage. Deals an additional 80% weapon damage against Giants, Dragonkin, and mounted targets. Mounted targets are dismounted."
        ],
        isActive: true,
        castTime: null,
        cooldown: 20,
        spentResource: 15,
        resourceType: 2,
        range: 0,
        requiresWeapon: 0,
        requiresStance: null,
      },
      {
        id: "two_handed_weapon_specialization",
        name: "Two-Handed Weapon Specialization",
        icon: "inv_axe_09",
        row: 3,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases the damage you deal with two-handed melee weapons by {value}%.",
          {
            value: [
              1,
              2,
              3
            ]
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
        requiresTalents: null,
        description: [
          "Increases the critical strike damage bonus of your abilities by {value}%.",
          {
            value: [
              10,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "bloodthrill",
        name: "Bloodthrill",
        icon: "inv_sword_01",
        row: 4,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Your melee attacks against targets afflicted by your Rend have a {value}% chance to activate your Overpower ability for 1 attack on your current target. Lasts 6 sec.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
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
        id: "weaponmaster",
        name: "Weaponmaster",
        icon: "garrison_weaponupgrade",
        row: 4,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Gives your melee weapon attacks a benefit depending on the weapon.\n\nAxe/Polearm: Increases your critical strike chance by {value1}%.\n\nMace/Staff: Your attacks ignore {value2}% of your target's armor.\n\nSword: Your successful melee attacks have a {value1}% chance to trigger an extra attack on the target.",
          {
            value1: [
              1,
              2,
              3,
              4,
              5
            ],
            value2: [
              3,
              6,
              9,
              12,
              15
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_slam",
        name: "Improved Slam",
        icon: "ability_warrior_decisivestrike",
        row: 5,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the global cooldown and cast time of your Slam ability by {value} sec. In addition, Slam no longer interrupts your melee swing time.",
          {
            value: [
              0.25,
              0.5
            ]
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
            value: [
              5,
              10,
              15
            ]
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
          "Increases the radius of your Battle Shout and Demoralizing Shout abilities by {value}%.",
          {
            value: [
              10,
              20,
              30,
              40,
              50
            ]
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
          "Improves your chance to get a critical strike with melee attacks by {value}%.",
          {
            value: [
              1,
              2,
              3,
              4,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "iron_will",
        name: "Iron Will",
        icon: "spell_magic_magearmor",
        row: 1,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Reduces the duration of Stun and Fear effects inflicted on you by {value}%.",
          {
            value: [
              3,
              6,
              9,
              12,
              15
            ]
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
          "Gives you a {value}% chance to generate 1 additional Rage when you deal melee damage with a weapon. This effect is increased to 2 Rage for two-handed weapons.",
          {
            value: [
              12,
              24,
              36,
              48,
              60
            ]
          }
        ],
        isActive: false
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
          "Reduces the Rage cost of your Cleave ability by {value}.",
          {
            value: [
              1,
              2,
              3
            ]
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
          "Causes all nearby enemies to be Dazed, reducing movement speed by 50% for 6 sec."
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
          "Regenerates {value}% of your total Health over 6 sec after being the victim of a critical strike, dealing damage with Bloodthirst, or suffering more than 20% of your maximum Health from a single attack.",
          {
            value: [
              1,
              2,
              3
            ]
          }
        ],
        isActive: false
      },
      {
        id: "boundless_rage",
        name: "Boundless Rage",
        icon: "ability_warrior_intensifyrage",
        row: 2,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases your maximum Rage by {value}.",
          {
            value: [
              10,
              20,
              30
            ]
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
          "Increases your off-hand weapon damage by {value1}%, off-hand Rage generation by {value2}%, and chance to hit with off-hand attacks by {value3}%.",
          {
            value1: [
              5,
              10,
              15,
              20,
              25
            ],
            value2: [
              20,
              40,
              60,
              80,
              100
            ],
            value3: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "raging_blows",
        name: "Raging Blows",
        icon: "ability_whirlwind",
        row: 3,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Causes your Whirlwind to also strike with your off-hand weapon, and reduces the Rage cost of your Cleave ability by 2."
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
          "Gives you a 30% chance to deal {value}% increased Physical damage for 12 sec after being the victim of any damaging attack.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "improved_execute",
        name: "Improved Execute",
        icon: "inv_sword_48",
        row: 3,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
          "Reduces the Rage cost of your Execute ability by {value}.",
          {
            value: [
              3,
              5
            ]
          }
        ],
        isActive: false
      },
      {
        id: "precision",
        name: "Precision",
        icon: "ability_marksmanship",
        row: 4,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Improves your chance to hit by {value}%.",
          {
            value: [
              1,
              2,
              3
            ]
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
          "When activated, increases your Physical damage done by 20% and makes you immune to Fear effects, but increases all damage you take by 5%. Lasts 30 sec."
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
            value: [
              5,
              10
            ]
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
          "Your Berserker Rage ability will instantly generate {value1} Rage and has a {value2}% chance to remove all movement impairing effects when activated.",
          {
            value1: [
              5,
              10
            ],
            value2: [
              50,
              100
            ]
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
          "Increases your melee attack speed by {value}% for your next 3 swings after dealing a melee critical strike.",
          {
            value: [
              5,
              10,
              15,
              20,
              25
            ]
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
          "Instantly attack the target causing damage equal to 35% of your Attack Power plus 30 and increasing your movement speed by 10% for 10 sec."
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
          "Increases your chance to Block attacks with your shield by {value1}% and grants you a {value2}% chance to generate 5 Rage when you Block.",
          {
            value1: [
              1,
              2,
              3,
              4,
              5
            ],
            value2: [
              20,
              40,
              60,
              80,
              100
            ]
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
          "Increases your Defense Skill by {value}.",
          {
            value: [
              4,
              8,
              12,
              16,
              20
            ]
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
          "Increases all the Rage generated by your Bloodrage ability by {value}%.",
          {
            value: [
              25,
              50
            ]
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
          "Increases your Armor value from items by {value}%.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
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
          "Reduces the Rage cost of your Thunder Clap ability by {value}.",
          {
            value: [
              2,
              4,
              6
            ]
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
          "When activated, this ability temporarily grants you 30% of your maximum health for 20 sec. After the effect expires, the health is lost."
        ],
        isActive: true,
        castTime: null,
        cooldown: 180,
        spentResource: null,
        range: null,
        requiresWeapon: 0
      },
      {
        id: "master_of_defense",
        name: "Master of Defense",
        icon: "ability_warrior_shieldguard",
        row: 2,
        col: 1,
        ranks: 2,
        requiresTalents: "shield_specialization",
        description: [
          "Grants you a {value}% chance to generate 5 Rage when you Dodge or Parry while a shield is equipped.",
          {
            value: [
              50,
              100
            ]
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
          "Increases damage dealt by your Revenge ability by {value}%.",
          {
            value: [
              20,
              40,
              60
            ]
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
        ranks: 3,
        requiresTalents: null,
        description: [
          "Increases all threat generated in Defensive stance by an additional {value}% while a shield is equipped.",
          {
            value: [
              5,
              10,
              15
            ]
          }
        ],
        isActive: false
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
          "Reduces the Rage cost of your Sunder Armor ability by {value}.",
          {
            value: [
              1,
              2,
              3
            ]
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
          "Reduces the cooldown of your Disarm ability by {value} secs.",
          {
            value: [
              7,
              13,
              20
            ]
          }
        ],
        isActive: false
      },
      {
        id: "vanguard",
        name: "Vanguard",
        icon: "ability_warrior_shieldcharge",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
          "Your Charge ability is now usable while in Defensive Stance."
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
          "Reduces the cooldown of your Shield Wall ability by {value} min.",
          {
            value: [
              5.5,
              11
            ]
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
          "Stuns the target for 5 sec."
        ],
        isActive: true,
        castTime: null,
        cooldown: 45,
        spentResource: 10,
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
          "Gives your Shield Bash ability a {value}% chance to Silence the target for 3 sec.",
          {
            value: [
              50,
              100
            ]
          }
        ],
        isActive: false
      },
      {
        id: "bastion",
        name: "Bastion",
        icon: "inv_shield_04",
        row: 4,
        col: 3,
        ranks: 5,
        requiresTalents: null,
        description: [
          "Increases all damage you deal by {value}% while a shield is equipped.",
          {
            value: [
              2,
              4,
              6,
              8,
              10
            ]
          }
        ],
        isActive: false
      },
      {
        id: "focused_rage",
        name: "Focused Rage",
        icon: "ability_warrior_focusedrage",
        row: 5,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
          "Reduces the Rage cost of your offensive abilities by {value}.",
          {
            value: [
              1,
              2,
              3
            ]
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
          "Slam the target with your shield, causing 421 to 439 damage, increased by your Block Value, and has a 50% chance of dispelling 1 magic effect on the target. Causes a very high amount of threat."
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
  }
};
