/**
 * talent-patch-changes.js
 *
 * Defines all structural modifications to the baseTalents data across patches.
 * These modifications can include:
 *   - Moving talents to different rows or columns
 *   - Removing or inserting new talents
 *   - Replacing existing talents with updated versions
 *
 * Changes may apply to:
 *   - A specific patch (e.g., "1.10")
 *   - Multiple patches up to a target patch, as handled by getVersionsUpTo(versionParam)
 */


// Remove "Moonkin Form" from 1.12 Balance tree
/*
talentsAttributedByVersion["1.12"].druid.Balance = talentsAttributedByVersion["1.12"].druid.Balance.filter(
    t => t.id !== "moonkin_form"
);
*/

removeTalentsById("1.7", "druid", "Balance", [
    "natural_shapeshifter",
    "natural_weapons",
    "moonkin_form"
]);

moveTalent("1.7", "druid", "Balance", "natures_reach", 1, 2);
moveTalent("1.7", "druid", "Balance", "vengeance", 5, 1);
moveTalent("1.7", "druid", "Balance", "improved_starfire", 2, 0);
moveTalent("1.7", "druid", "Balance", "moonfury", 4, 0);

replaceTalent("1.7", "druid", "Balance", "improved_thorns", {
    row: 3,
    col: 0,
    ranks: 5,
    description: [
        "Gives your Thorns spell a {value}% chance to cause the target to take an additional 100% damage.",
        {
            value: [5, 10, 15, 20, 25]
        }
    ]
});

replaceTalent("1.7", "druid", "Balance", "omen_of_clarity", {
    icon: "spell_shadow_manaburn",
    requiresTalents: null
});

replaceTalent("1.7", "druid", "Balance", "vengeance", {
    row: 5,
    col: 1,
    requiresTalents: "natures_grace"
});

replaceTalent("1.7", "druid", "Balance", "moonglow", {
    row: 3,
    col: 1,
    ranks: 5,
    requiresTalents: "improved_moonfire"
});

bulkInsertTalents("1.7", "druid", "Balance", [
    {
        id: "swiftshifting",
        name: "Swiftshifting",
        icon: "spell_nature_wispsplode",
        row: 1,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Reduces the delay before using spells and abilities by {value} seconds after having shapeshifted.",
            {
                value: [0.5, 1, 1.5]
            }
        ]
    },
    {
        id: "weapon_balance",
        name: "Weapon Balance",
        icon: "inv_staff_01",
        row: 4,
        col: 2,
        ranks: 5,
        requiresTalents: "omen_of_clarity",
        description: [
            "Increases the damage you deal with melee weapons by {value}%.",
            {
                value: [2, 4, 6, 8, 10]
            }
        ]
    },
    {
        id: "hurricane",
        name: "Hurricane",
        icon: "spell_nature_cyclone",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Creates a violent storm in the area surrounding the caster, causing 53 Nature damage to all nearby enemies every 1 second, and reducing the attack speed of all nearby enemies by 20%. Lasts 10 seconds."
        ]
    }
]);

removeTalentsById("1.7", "druid", "Feral Combat", [
    "faerie_fire_feral",
    "leader_of_the_pack"
]);

replaceTalent("1.7", "druid", "Feral Combat", "feral_aggression_old", {
    description: [
        "Increases the Attack Power reduction of your Demoralizing Roar by {value}%.",
        {
            value: [5, 10, 15, 20, 25]
        }
    ]
});

replaceTalent("1.7", "druid", "Feral Combat", "feral_instinct", {
    name: "Improved Prowl",
    row: 2,
    col: 0,
    description: [
        "Reduces the chance enemies have to detect you while Prowling.",
        "Reduces the chance enemies have to detect you while Prowling. More effective than Improved Prowl (Rank 1).",
        "Reduces the chance enemies have to detect you while Prowling. More effective than Improved Prowl (Rank 2).",
        "Reduces the chance enemies have to detect you while Prowling. More effective than Improved Prowl (Rank 3).",
        "Reduces the chance enemies have to detect you while Prowling. More effective than Improved Prowl (Rank 4)."
    ]
});

replaceTalent("1.7", "druid", "Feral Combat", "brutal_impact", {
    name: "Improved Bash",
    description: [
        "Increases the stun duration of your Bash ability by 0.5 seconds.",
        "Increases the stun duration of your Bash ability by 1 second."
    ]
});

replaceTalent("1.7", "druid", "Feral Combat", "thick_hide", {
    row: 4,
    col: 0,
    description: [
        "Increases your Armor rating from items while in Bear form by {value}%.",
        {
            value: [2, 4, 6, 8, 10]
        }
    ]
});

replaceTalent("1.7", "druid", "Feral Combat", "feline_swiftness", {
    row: 4,
    col: 2,
    ranks: 1,
    description: [
        "Increases your movement speed by 30% while in Cat form. Only active outdoors."
    ]
});

replaceTalent("1.7", "druid", "Feral Combat", "feral_charge", {
    description: [
        "Causes you to charge an enemy, stopping its movement and interrupting any spell being cast for 4 seconds."
    ]
});

replaceTalent("1.7", "druid", "Feral Combat", "sharpened_claws", {
    row: 1,
    col: 2,
    ranks: 5,
    description: [
        "Increases your critical strike chance while in Bear or Cat form by {value}%.",
        {
            value: [1, 2, 3, 4, 5]
        }
    ]
});

replaceTalent("1.7", "druid", "Feral Combat", "blood_frenzy", {
    row: 2,
    col: 2,
    ranks: 5,
    description: [
        "Your critical strikes from Cat form abilities that add combo points have a {value}% chance to add an additional combo point.",
        {
            value: [20, 40, 60, 80, 100]
        }
    ]
});

replaceTalent("1.7", "druid", "Feral Combat", "primal_fury", {
    row: 2,
    col: 3,
    ranks: 5,
    description: [
        "Gives you a {value}% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear form.",
        {
            value: [20, 40, 60, 80, 100]
        }
    ]
});

replaceTalent("1.7", "druid", "Feral Combat", "improved_shred", {
    description: [
        "Reduces the Energy cost of your Shred ability by {value}.",
        {
            value: [5, 10]
        }
    ]
});

replaceTalent("1.7", "druid", "Feral Combat", "predatory_strikes", {
    ranks: 5,
    description: [
        "Increases the Attack Power bonus from your Cat form ability by {value}%.",
        {
            value: [4, 8, 12, 16, 20]
        }
    ]
});

replaceTalent("1.7", "druid", "Feral Combat", "savage_fury", {
    name: "Improved Ravage",
    row: 5,
    col: 2,
    description: [
        "Increases the critical strike chance of your Ravage ability by {value}%.",
        {
            value: [5, 10]
        }
    ]
});

replaceTalent("1.7", "druid", "Feral Combat", "heart_of_the_wild", {
    name: "Strength of the Wild",
    ranks: 4,
    description: [
        "Increases your Strength while in Bear or Cat form by {value}%.",
        {
            value: [3, 6, 9, 12]
        }
    ]
});

bulkInsertTalents("1.7", "druid", "Feral Combat", [
    {
        id: "faerie_fire_cat",
        name: "Faerie Fire (Cat)",
        icon: "spell_nature_faeriefire",
        row: 3,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Decrease the armor of the target by 175 for 40 seconds. While affected, the target cannot stealth or turn invisible."
        ]
    },
    {
        id: "faerie_fire_bear",
        name: "Faerie Fire (Bear)",
        icon: "spell_nature_faeriefire",
        row: 3,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Decrease the armor of the target by 175 for 40 seconds. While affected, the target cannot stealth or turn invisible."
        ]
    },
    {
        id: "primal_instinct",
        name: "Primal Instinct",
        icon: "spell_nature_forceofnature",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Reduces the Mana cost of your shapeshifting abilities by 25%."
        ]
    },
    {
        id: "improved_pounce",
        name: "Improved Pounce",
        icon: "ability_druid_supriseattack",
        row: 6,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Gives your Pounce ability a {value}% chance to add an additional combo point to the target.",
            {
                value: [50, 100]
            }
        ]
    }
]);

removeTalentsById("1.7", "druid", "Restoration", [
    "insect_swarm",
    "tranquil_spirit",
    "swiftmend"
]);

replaceTalent("1.7", "druid", "Restoration", "improved_mark_of_the_wild", {
    description: [
        "Increases the effects of your Mark of the Wild spell by {value}%.",
        {
            value: [7, 14, 21, 28, 35]
        }
    ]
});

replaceTalent("1.7", "druid", "Restoration", "furor", {
    description: [
        "Gives you a {value}% chance to gain 10 Rage when you shapeshift into Bear Form.",
        {
            value: [20, 40, 60, 80, 100]
        }
    ]
});

replaceTalent("1.7", "druid", "Restoration", "natures_focus", {
    row: 1,
    col: 0,
    description: [
        "Gives you a {value}% chance to avoid interruption caused by damage while casting the Healing Touch or Regrowth spells.",
        {
            value: [12, 24, 36, 48, 60]
        }
    ]
});

replaceTalent("1.7", "druid", "Restoration", "improved_healing_touch", {
    row: 1,
    col: 1,
    description: [
        "Reduces the mana cost of your Healing Touch spell by {value}%.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.7", "druid", "Restoration", "natures_swiftness", {
    requiresTalents: "natures_focus"
});

replaceTalent("1.7", "druid", "Restoration", "improved_enrage", {
    requiresTalents: "furor",
    description: [
        "Reduces the time required to generate Rage from your Enrage ability by {value} seconds and slightly reduces the Armor penalty.",
        {
            value: [2, 4]
        }
    ]
});

replaceTalent("1.7", "druid", "Restoration", "reflection", {
    row: 3,
    col: 1,
    ranks: 5,
    description: [
        "Allows {value}% of your Mana regeneration to continue while casting.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.7", "druid", "Restoration", "gift_of_nature", {
    row: 2,
    col: 2,
    ranks: 1,
    requiresTalents: null,
    description: [
        "Increases the effect of your Healing Touch, Rejuvenation, Regrowth, and Tranquility spells by 5%."
    ]
});

replaceTalent("1.7", "druid", "Restoration", "improved_rejuvenation", {
    ranks: 5,
    description: [
        "Increases the effect of your Rejuvenation spell by {value}%.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.7", "druid", "Restoration", "subtlety", {
    row: 4,
    col: 2,
    requiresTalents: "gift_of_nature",
    description: [
        "Reduces the threat generated by your healing spells by {value}%.",
        {
            value: [4, 8, 12, 16, 20]
        }
    ]
});

bulkInsertTalents("1.7", "druid", "Restoration", [
    {
        id: "combat_endurance",
        name: "Combat Endurance",
        icon: "spell_nature_ancestralguardian",
        row: 2,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Allows {value}% of your Health regeneration to work while in combat.",
            {
                value: [2, 4, 6, 8, 10]
            }
        ]
    },
    {
        id: "intensity_old",
        name: "Intensity",
        icon: "spell_shadow_detectinvisibility",
        row: 2,
        col: 3,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Gives you a {value}% chance to gain 40 Energy when you shapeshift into Cat form.",
            {
                value: [20, 40, 60, 80, 100]
            }
        ]
    },
    {
        id: "innervate",
        name: "Innervate",
        icon: "spell_nature_lightning",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "reflection",
        description: [
            "Increases the target's Mana regeneration by 400% and allows 100% of the target's Mana regeneration to continue while casting.  Lasts 20 seconds."
        ]
    }
]);

removeTalentsById("1.6", "hunter", "Beast Mastery", ["bestial_wrath"]);

replaceTalent("1.6", "hunter", "Beast Mastery", "thick_hide", {
    row: 3,
    col: 0,
    ranks: 5,
    description: [
        "Increases the Armor rating of your pets by {value}%.",
        {
            value: [2, 4, 6, 8, 10]
        }
    ]
});

replaceTalent("1.6", "hunter", "Beast Mastery", "improved_revive_pet", {
    row: 2,
    col: 0,
    description: [
        "Reduces the casting time of your Revive Pet spell by {value}%.",
        {
            value: [2, 4]
        }
    ]
});

replaceTalent("1.6", "hunter", "Beast Mastery", "pathfinding", {
    icon: "ability_mount_whitetiger",
    row: 2,
    col: 3,
    ranks: 5,
    requiresTalents: null,
    description: [
        "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by {value}%.",
        {
            value: [1, 2, 3, 4, 5]
        }
    ]
});

replaceTalent("1.6", "hunter", "Beast Mastery", "improved_mend_pet", {
    description: [
        "Increases the amount healed by your Mend Pet spell by {value}%.",
        {
            value: [5, 10]
        }
    ]
});

replaceTalent("1.6", "hunter", "Beast Mastery", "intimidation", {
    row: 4,
    col: 0,
    description: [
        "Increases the threat caused by your pet by 50% for 10 seconds."
    ]
});

replaceTalent("1.6", "hunter", "Beast Mastery", "spirit_bond_old", {
    row: 6,
    col: 1,
    ranks: 1,
    requiresTalents: "improved_mend_pet",
    description: ["Every time your pet strikes an enemy, you gain 20 health."]
});

replaceTalent("1.6", "hunter", "Beast Mastery", "bestial_discipline", {
    row: 1,
    col: 2,
    ranks: 5,
    description: [
        "Increases the maximum Focus of your pets by {value}%.",
        {
            value: [4, 8, 12, 16, 20]
        }
    ]
});

/*
insertTalent("1.6", "hunter", "Beast Mastery", {
    id: "spirit_bond_old",
    name: "Spirit Bond",
    icon: "classic_ability_druid_demoralizingroar",
    row: 6,
    col: 1,
    ranks: 1,
    requiresTalents: "improved_mend_pet",
    description: [
        "Every time your pet strikes an enemy, you gain 20 health."
    ]
});
*/

/*
bulkInsertTalents("1.6", "hunter", "Beast Mastery", [
{
    id: "improved_raptor_strike",
    name: "Improved Raptor Strike",
    icon: "ability_meleedamage",
    row: 0,
    col: 2,
    ranks: 5,
    requiresTalents: null,
    description: [
        "Reduces the cooldown of your Raptor Strike by {value} second(s).",
        { 
        value: [0.2, 0.4, 0.6, 0.8, 1] 
        }
    ]
},
{
    id: "spirit_bond_old",
    name: "Spirit Bond",
    icon: "classic_ability_druid_demoralizingroar",
    row: 6,
    col: 1,
    ranks: 1,
    requiresTalents: "improved_mend_pet",
    description: [
        "Every time your pet strikes an enemy, you gain 20 health."
    ]
}
]);
*/

replaceTalent("1.6", "hunter", "Marksmanship", "hawk_eye", {
    row: 4,
    col: 1
});

replaceTalent("1.6", "hunter", "Marksmanship", "barrage", {
    row: 2,
    col: 3,
    ranks: 2,
    description: [
        "Increases the damage done by your Multi-Shot and Volley spells by {value}%.",
        {
            value: [5, 10]
        }
    ]
});

replaceTalent("1.6", "hunter", "Marksmanship", "trueshot_aura", {
    requiresTalents: "hawk_eye"
});

replaceTalent("1.6", "hunter", "Marksmanship", "scatter_shot", {
    description: [
        "A short-range shot that deals 50% weapon damage and confuses the target for 4 sec. Any damage caused will remove the effect."
    ]
});

/*
const survival = talentsAttributedByVersion["1.6"].hunter.Survival;

talentsAttributedByVersion["1.6"].hunter.Survival = survival.filter(
    t => t.id !== "monster_slaying" && t.id !== "humanoid_slaying" && t.id !== "killer_instinct"
);
*/

removeTalentsById("1.6", "hunter", "Survival", [
    "monster_slaying",
    "humanoid_slaying",
    "savage_strikes",
    "clever_traps",
    "survivalist",
    "trap_mastery",
    "surefooted",
    "improved_feign_death",
    "killer_instinct",
    "lightning_reflexes",
    "wyvern_sting"
]);

/*
const moveTalent = (id, row, col) => {
    const talent = talentsAttributedByVersion["1.6"].hunter.Survival.find(t => t.id === id);
    if (talent) {
        talent.row = row;
        talent.col = col;
    }
};

moveTalent("deflection", 3, 3);
*/

/*
replaceTalent("1.6", "hunter", "Survival", "savage_strikes", {
    row: 5,
    col: 2,
    icon: "ability_gouge",
    name: "Savage Strikes (Updated)"
    });
*/

// moveTalent("1.6", "hunter", "Survival", "deflection", 3, 3);

replaceTalent("1.6", "hunter", "Survival", "deflection", {
    row: 3,
    col: 3,
    requiresTalents: "deterrence"
});

/*
insertTalent("1.6", "hunter", "Survival", {
id: "precision",
name: "Precision",
icon: "ability_rogue_ambush",
row: 0,
col: 1,
ranks: 5,
requiresTalents: null,
description: [
    "Increases your chance to hit with melee weapons by {value}%.",
    { value: [1, 2, 3, 4, 5] }
]
});
*/

bulkInsertTalents("1.6", "hunter", "Survival", [
    {
        id: "precision",
        name: "Precision",
        icon: "ability_rogue_ambush",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases your chance to hit with melee weapons by {value}%.",
            {
                value: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        id: "improved_raptor_strike",
        name: "Improved Raptor Strike",
        icon: "ability_meleedamage",
        row: 0,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Reduces the cooldown of your Raptor Strike by {value} second(s).",
            {
                value: [0.2, 0.4, 0.6, 0.8, 1]
            }
        ]
    },
    {
        id: "lightning_reflexes_old",
        name: "Lightning Reflexes",
        icon: "spell_nature_invisibilty",
        row: 1,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases your Dodge chance by {value}%.",
            {
                value: [1, 2, 3]
            }
        ]
    },
    {
        id: "improved_immolation_trap",
        name: "Improved Immolation Trap",
        icon: "spell_fire_flameshock",
        row: 2,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases the damage done by your Immolation Trap by {value}%.",
            {
                value: [3, 6, 9, 12, 15]
            }
        ]
    },
    {
        id: "improved_mongoose_bite",
        name: "Improved Mongoose Bite",
        icon: "ability_hunter_swiftstrike",
        row: 2,
        col: 1,
        ranks: 5,
        requiresTalents: "lightning_reflexes_old",
        description: [
            "Increases the damage done by your Mongoose Bite ability by {value}%.",
            {
                value: [4, 8, 12, 16, 20]
            }
        ]
    },
    {
        id: "improved_freezing_trap",
        name: "Improved Freezing Trap",
        icon: "spell_frost_chainsofice",
        row: 3,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases the duration of your Freezing Trap by {value} seconds.",
            {
                value: [2, 4, 6]
            }
        ]
    },
    {
        id: "improved_disengage",
        name: "Improved Disengage",
        icon: "ability_rogue_feint",
        row: 3,
        col: 1,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the amount of Threat reduced by your Disengage ability by {value}%.",
            {
                value: [10, 20]
            }
        ]
    },
    {
        id: "improved_frost_trap",
        name: "Improved Frost Trap",
        icon: "spell_frost_freezingbreath",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the duration of your Frost Trap's movement slowing effect by {value} seconds.",
            {
                value: [1.5, 3]
            }
        ]
    },
    {
        id: "savage_strikes_old",
        name: "Savage Strikes",
        icon: "spell_holy_blessingofstamina",
        row: 4,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases your critical strike chance with melee weapons by {value}%.",
            {
                value: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        id: "improved_explosive_trap",
        name: "Improved Explosive Trap",
        icon: "spell_fire_selfdestruct",
        row: 5,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the initial damage done by your Explosive Trap by {value}%.",
            {
                value: [30, 60]
            }
        ]
    },
    {
        id: "melee_specialization",
        name: "Melee Specialization",
        icon: "inv_axe_02",
        row: 5,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases the damage you deal with melee weapons by {value}%.",
            {
                value: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        id: "lacerate",
        name: "Lacerate",
        icon: "ability_gouge",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "savage_strikes_old",
        description: [
            "Wounds the target, causing them to bleed for 77 damage over 21 seconds."
        ]
    }
]);

removeTalentsById("1.10", "mage", "Arcane", [
    "magic_absorption",
    "arcane_resilience"
]);

bulkInsertTalents("1.10", "mage", "Arcane", [
    {
        id: "evocation",
        name: "Evocation",
        icon: "spell_nature_purge",
        row: 2,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
            "While channeling this spell, your mana regeneration is active and increased by 1500%.  Lasts 8 sec."
        ]
    }
]);

replaceTalent("1.10", "mage", "Arcane", "arcane_subtlety", {
    ranks: 3,
    description: [
        "Reduces the threat generated by your offensive arcane spells by {value}%.",
        {
            value: [20, 30, 40]
        }
    ]
});

replaceTalent("1.10", "mage", "Arcane", "arcane_focus", {
    description: [
        "Reduces the chance that the opponent can resist your arcane spells by {value}%.",
        {
            value: [2, 4, 6, 8, 10]
        }
    ]
});

replaceTalent("1.10", "mage", "Arcane", "wand_specialization", {
    row: 1,
    col: 1,
    ranks: 5,
    description: [
        "Increases your damage with Wands by {value}%.",
        {
            value: [5, 10, 15, 20, 25]
        }
    ]
});

replaceTalent("1.10", "mage", "Arcane", "magic_attunement", {
    name: "Improved Dampen Magic",
    description: [
        "Increases the effect of your Dampen Magic spell by {value}%.",
        {
            value: [25, 50]
        }
    ]
});

replaceTalent("1.10", "mage", "Arcane", "improved_arcane_explosion", {
    ranks: 5,
    description: [
        "Reduces the casting time of your Arcane Explosion by {value} seconds.",
        {
            value: [0.3, 0.6, 0.9, 1.2, 1.5]
        }
    ]
});

replaceTalent("1.10", "mage", "Arcane", "improved_mana_shield", {
    description: [
        "Increases the damage absorbed by your Mana Shield by {value}%.",
        {
            value: [50, 75]
        }
    ]
});

replaceTalent("1.10", "mage", "Arcane", "arcane_meditation", {
    ranks: 5,
    requiresTalents: "evocation",
    description: [
        "Allows {value}% of your Mana regeneration to continue while casting.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.10", "mage", "Arcane", "arcane_mind", {
    requiresTalents: "evocation",
    ranks: 4,
    description: [
        "Increases your maximum Mana by {value}%.",
        {
            value: [2, 4, 6, 8]
        }
    ]
});

replaceTalent("1.10", "mage", "Arcane", "arcane_power", {
    description: [
        "When activated, your spells deal 35% more damage while costing 35% more mana to cast.  This effect lasts 15 sec."
    ]
});

removeTalentsById("1.10", "mage", "Fire", [
    "master_of_elements"
]);

replaceTalent("1.10", "mage", "Fire", "flame_throwing", {
    col: 3
});

replaceTalent("1.10", "mage", "Fire", "improved_fire_blast", {
    ranks: 5,
    description: [
        "Reduces the cooldown of your Fire Blast spell by {value}.",
        {
            value: ["0.5 seconds", "0.8 seconds", "1 second", "1.3 seconds", "1.5 seconds"]
        }
    ]
});

replaceTalent("1.10", "mage", "Fire", "improved_flamestrike", {
    col: 2
});

replaceTalent("1.10", "mage", "Fire", "pyroblast", {
    col: 1,
    requiresTalents: "improved_fireball",
    description: [
        "Hurls an immense fiery boulder that causes 148 to 195 fire damage and an additional 56 damage over 12 seconds."
    ]
});

replaceTalent("1.10", "mage", "Fire", "burning_soul", {
    ranks: 3,
    description: [
        "Gives your fire spells a {value}% chance to not lose casting time when you take damage.",
        {
            value: [25, 50, 65]
        }
    ]
});

replaceTalent("1.10", "mage", "Fire", "improved_scorch", {
    ranks: 5,
    description: [
        "Burns the target for an additional {value}% of your Scorch spell damage over 4 seconds.",
        {
            value: [5, 10, 15, 20, 25]
        }
    ]
});

replaceTalent("1.10", "mage", "Fire", "blast_wave", {
    requiresTalents: "improved_flamestrike",
    description: [
        "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 160 to 192 fire damage, and dazing them for 6 seconds."
    ]
});

replaceTalent("1.10", "mage", "Fire", "fire_power", {
    col: 1,
    requiresTalents: "critical_mass",
    description: [
        "Increases the damage done by your fire spells by {value}%.",
        {
            value: [2, 4, 6, 8, 10]
        }
    ]
});

replaceTalent("1.10", "mage", "Fire", "combustion", {
    requiresTalents: "fire_power",
    description: [
        "When activated, this spell gives your next fire damage spell a 100% critical strike chance."
    ]
});

removeTalentsById("1.10", "mage", "Frost", [
    "elemental_precision"
]);

replaceTalent("1.10", "mage", "Frost", "frost_warding", {
    name: "Improved Frost Ward",
    row: 3,
    col: 3,
    ranks: 1,
    description: [
        "50% of the damage absorbed by your Frost Ward is added to your mana."
    ]
});

replaceTalent("1.10", "mage", "Frost", "frostbite", {
    row: 5,
    col: 2,
    ranks: 5,
    description: [
        "Gives your chill effects a {value}% chance to freeze the target for 5 seconds.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.10", "mage", "Frost", "permafrost", {
    row: 0,
    col: 2,
    ranks: 5,
    description: [
        "Increases the duration of your chill effects by {value}.",
        {
            value: ["1 second", "1.5 seconds", "2 seconds", "2.5 seconds", "3 seconds"]
        }
    ]
});

replaceTalent("1.10", "mage", "Frost", "cold_snap", {
    description: [
        "When activated, this spell finishes the cooldown on all of your cold spells."
    ]
});

replaceTalent("1.10", "mage", "Frost", "frost_channeling", {
    requiresTalents: "cold_snap",
    description: [
        "Reduces the mana cost of your frost spells by {value}%.",
        {
            value: [5, 10, 15]
        }
    ]
});

replaceTalent("1.10", "mage", "Frost", "winters_chill", {
    row: 1,
    col: 1,
    ranks: 3,
    description: [
        "Increases the power of your chill effects by slowing the target's movement by an additional {value}%.",
        {
            value: [4, 7, 10]
        }
    ]
});

replaceTalent("1.10", "mage", "Frost", "ice_barrier", {
    description: [
        "Instantly shields you, absorbing 455 damage. Lasts 1 minute. While the shield holds, spells will not be interrupted."
    ]
});

replaceTalent("3.2.0", "mage", "Fire", "burning_determination", {
    description: [
        "When Interrupted or Silenced you have a {value}% chance to become immune to the next Interrupt or Silence mechanic.  Lasts 10 sec.",
        {
            value: [50, 100]
        }
    ]
});

removeTalentsById("1.8", "paladin", "Holy", [
    "healing_light",
    "consecration",
    "unyielding_faith",
    "lasting_judgement",
    "holy_power"
]);

bulkInsertTalents("1.8", "paladin", "Holy", [
    {
        id: "improved_holy_light",
        name: "Improved Holy Light",
        icon: "spell_holy_holybolt",
        row: 0,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases the amount healed by your Holy Light spell by {value}%.",
            {
                value: [4, 8, 12]
            }
        ]
    },
    {
        id: "revelation",
        name: "Revelation",
        icon: "inv_misc_book_07",
        row: 1,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Reduces the cooldown of your Lay on Hands and Divine Intervention spells by {value} minutes.",
            {
                value: [10, 20]
            }
        ]
    },
    {
        id: "improved_flash_of_light",
        name: "Improved Flash of Light",
        icon: "spell_holy_flashheal",
        row: 2,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Reduces the Mana cost of your Flash of Light spell by {value}%.",
            {
                value: [4, 8, 12]
            }
        ]
    },
    {
        id: "improved_concentration_aura",
        name: "Improved Concentration Aura",
        icon: "spell_holy_mindsooth",
        row: 3,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases the effect of your Concentration Aura by an additional {value}%.",
            {
                value: [5, 10, 15]
            }
        ]
    },
    {
        id: "improved_seal_of_light",
        name: "Improved Seal of Light",
        icon: "spell_holy_healingaura",
        row: 4,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases the amount healed by your Seal of Light by {value1}% and the duration of your Judgement of Light by {value2} seconds.",
            {
                value1: [3, 6, 9, 12, 15],
                value2: [6, 12, 18, 24, 30]
            }
        ]
    },
    {
        id: "sanctity_aura",
        name: "Sanctity Aura",
        icon: "spell_holy_mindvision",
        row: 4,
        col: 1,
        ranks: 1,
        requiresTalents: "improved_seal_of_righteousness",
        description: [
            "Increases Holy damage done by party members within 30 yards by 10%.  Players may only have one Aura on them per Paladin at any one time."
        ]
    }
]);

replaceTalent("1.8", "paladin", "Holy", "divine_strength", {
    row: 5,
    col: 2
});

replaceTalent("1.8", "paladin", "Holy", "divine_intellect", {
    name: "Divine Wisdom",
    row: 3,
    requiresTalents: "improved_blessing_of_wisdom",
    description: [
        "Increases your total Mana by {value}%.",
        {
            value: [2, 4, 6, 8, 10]
        }
    ]
});

replaceTalent("1.8", "paladin", "Holy", "spiritual_focus", {
    row: 0
});

replaceTalent("1.8", "paladin", "Holy", "improved_seal_of_righteousness", {
    row: 2,
    col: 1,
    description: [
        "Increases the damage done by your Seal of Righteousness by {value}%.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.8", "paladin", "Holy", "improved_lay_on_hands", {
    row: 0,
    col: 0,
    description: [
        "Gives the target of your Lay on Hands spell a {value}% bonus to their armor value from items for 1 minute.",
        {
            value: [15, 30]
        }
    ]
});

replaceTalent("1.8", "paladin", "Holy", "illumination", {
    row: 1,
    description: [
        "After getting a critical effect from your Flash of Light or Holy Light spell, gives you a {value}% chance to gain Mana equal to the base cost of the spell.",
        {
            value: [20, 40, 60, 80, 100]
        }
    ]
});

replaceTalent("1.8", "paladin", "Holy", "improved_blessing_of_wisdom", {
    row: 1,
    ranks: 5,
    description: [
        "Increases the effect of your Blessing of Wisdom spell by {value}%.",
        {
            value: [4, 8, 12, 16, 20]
        }
    ]
});

replaceTalent("1.8", "paladin", "Holy", "divine_favor", {
    row: 2,
    col: 0,
    requiresTalents: null,
    description: [
        "When activated, gives your next Flash of Light or Holy Light spell a 100% critical effect chance.",
        {
            value: [20, 40, 60, 80, 100]
        }
    ]
});

replaceTalent("1.8", "paladin", "Holy", "holy_shock", {
    requiresTalents: "sanctity_aura",
    description: [
        "Blasts the target with Holy energy, causing 205 to 219 Holy damage."
    ]
});

removeTalentsById("1.8", "paladin", "Protection", [
    "precision",
    "guardians_favor",
    "blessing_of_kings",
    "improved_righteous_fury",
    "anticipation",
    "improved_hammer_of_justice",
    "improved_concentration_aura"
]);

bulkInsertTalents("1.8", "paladin", "Protection", [
    {
        id: "improved_blessing_of_protection",
        name: "Improved Blessing of Protection",
        icon: "spell_holy_sealofprotection",
        row: 1,
        col: 1,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Reduces the cooldown of your Blessing of Protection by {value} seconds.",
            {
                value: [60, 120]
            }
        ]
    },
    {
        id: "improved_seal_of_fury",
        name: "Improved Seal of Fury",
        icon: "spell_holy_sealoffury",
        row: 2,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases the amount of threat generated by your Seal of Fury and Judgement of Fury by {value}%.",
            {
                value: [3, 6, 9, 12, 15]
            }
        ]
    },
    {
        id: "improved_blessing_of_freedom",
        name: "Improved Blessing of Freedom",
        icon: "spell_holy_sealofvalor",
        row: 2,
        col: 3,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases the duration of your Blessing of Freedom by {value}.",
            {
                value: ["1 second", "2 seconds", "3 seconds", "4 seconds", "5 seconds"]
            }
        ]
    },
    {
        id: "improved_seal_of_justice",
        name: "Improved Seal of Justice",
        icon: "spell_holy_sealofwrath",
        row: 3,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases the frequency that your Seal of Justice stuns the opponent by {value} per minute.",
            {
                value: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        id: "improved_blessing_of_salvation",
        name: "Improved Blessing of Salvation",
        icon: "spell_holy_sealofsalvation",
        row: 4,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the duration of your Blessing of Salvation by {value} minutes.",
            {
                value: [5, 10]
            }
        ]
    },
    {
        id: "repentance",
        name: "Repentance",
        icon: "spell_holy_prayerofhealing",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "improved_seal_of_justice",
        description: [
            "Puts the enemy target in a state of meditation for up to 6 seconds. Any damage caused will awaken the target. Only works against Humanoids."
        ]
    }
]);

replaceTalent("1.8", "paladin", "Protection", "redoubt", {
    description: [
        "Increases your chance to block attacks with your shield by {value}% after being the victim of a critical strike.  Lasts 10 seconds or 5 blocks.",
        {
            value: [6, 12, 18, 24, 30]
        }
    ]
});

replaceTalent("1.8", "paladin", "Protection", "toughness", {
    col: 2
});

replaceTalent("1.8", "paladin", "Protection", "shield_specialization", {
    ranks: 5,
    requiresTalents: null,
    description: [
        "Increases the amount of damage absorbed by your shield by {value}%.",
        {
            value: [5, 10, 15, 20, 25]
        }
    ]
});

replaceTalent("1.8", "paladin", "Protection", "blessing_of_sanctuary", {
    row: 2,
    col: 0,
    description: [
        "Places a Blessing on the friendly target, reducing damage dealt from all sources by 7 for 5 minutes. Players may only have one Blessing on them per Paladin at any one time."
    ]
});

replaceTalent("1.8", "paladin", "Protection", "reckoning", {
    col: 0
});

replaceTalent("1.8", "paladin", "Protection", "one_handed_weapon_specialization", {
    description: [
        "Increases the damage you deal with one-handed melee weapons by {value}%.",
        {
            value: [1, 2, 3, 4, 5]
        }
    ]
});

replaceTalent("1.8", "paladin", "Protection", "holy_shield", {
    row: 4,
    col: 2,
    requiresTalents: "shield_specialization",
    description: [
        "Increases chance to block by 30% for 10 seconds and deals 40 Holy damage for each attack blocked while active. Each block expends a charge. 4 charges."
    ]
});

removeTalentsById("1.8", "paladin", "Retribution", [
    "improved_judgement",
    "vindication",
    "pursuit_of_justice",
    "eye_for_an_eye",
    "sanctity_aura",
    "repentance"
]);

bulkInsertTalents("1.8", "paladin", "Retribution", [
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
        ]
    },
    {
        id: "precision",
        name: "Precision",
        icon: "ability_rogue_ambush",
        row: 4,
        col: 0,
        ranks: 3,
        requiresTalents: "deflection",
        description: [
            "Increases your chance to hit with melee weapons by {value}%.",
            {
                value: [1, 2, 3]
            }
        ]
    },
    {
        id: "consecration",
        name: "Consecration",
        icon: "spell_holy_innerfire",
        row: 4,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Consecrates the land beneath the Paladin, doing 120 Holy damage over 8 seconds to enemies who enter the area."
        ]
    },
    {
        id: "blessing_of_kings",
        name: "Blessing of Kings",
        icon: "spell_magic_magearmor",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Places a Blessing on the friendly target, increasing total stats by 10% for 5 minutes. Players may only have one Blessing on them per Paladin at any one time."
        ]
    }
]);

replaceTalent("1.8", "paladin", "Retribution", "improved_blessing_of_might", {
    description: [
        "Increases the Attack Power bonus of your Blessing of Might by {value}%.",
        {
            value: [4, 8, 12, 16, 20]
        }
    ]
});

replaceTalent("1.8", "paladin", "Retribution", "benediction", {
    description: [
        "Reduces the Mana cost of your Retribution spells by {value}%.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.8", "paladin", "Retribution", "improved_seal_of_the_crusader", {
    col: 2,
    ranks: 5,
    description: [
        "Increases the Attack Power bonus of your Seal of the Crusader and the Holy damage increase of your Judgement of the Crusader by {value}%.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.8", "paladin", "Retribution", "deflection", {
    row: 2,
    col: 0
});

replaceTalent("1.8", "paladin", "Retribution", "conviction", {
    row: 5,
    col: 1,
    requiresTalents: "vengeance"
});

replaceTalent("1.8", "paladin", "Retribution", "seal_of_command", {
    description: [
        "Fills the Paladin with the spirit of command for 30 seconds, giving the Paladin a chance to deal additional Holy damage equal to the damage of the Paladin's weapon.  Only one Seal can be active on the Paladin at any one time.<br><br>Unleashing this Seal's energy will judge an enemy for 30 seconds, causing 24 Holy damage any time the enemy becomes stunned. Only one Judgement per Paladin can be active at any one time."
    ]
});

replaceTalent("1.8", "paladin", "Retribution", "improved_retribution_aura", {
    ranks: 5,
    requiresTalents: "seal_of_command",
    description: [
        "Increases the damage done by your Retribution Aura by {value}%.",
        {
            value: [5, 10, 15, 20, 25]
        }
    ]
});

replaceTalent("1.8", "paladin", "Retribution", "two_handed_weapon_specialization", {
    row: 1,
    col: 1,
    ranks: 5,
    description: [
        "Increases the damage you deal with two-handed melee weapons by {value}%.",
        {
            value: [1, 2, 3, 4, 5]
        }
    ]
});

replaceTalent("1.8", "paladin", "Retribution", "vengeance", {
    row: 2,
    col: 1,
    requiresTalents: null,
    description: [
        "Gives you a {value}% bonus to Physical and Holy damage you deal for 8 seconds after dealing a critical strike.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

removeTalentsById("1.9", "priest", "Discipline", [
    "power_infusion"
]);

replaceTalent("1.9", "priest", "Discipline", "unbreakable_will", {
    description: [
        "Increases your chance to resist Stun, Fear, and Silence effects by {value}%.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.9", "priest", "Discipline", "wand_specialization", {
    row: 1,
    col: 0
});

replaceTalent("1.9", "priest", "Discipline", "silent_resolve", {
    row: 0,
    col: 2,
    description: [
        "Reduces the threat generated by your damage spells by {value}%.",
        {
            value: [4, 8, 12, 16, 20]
        }
    ]
});

replaceTalent("1.9", "priest", "Discipline", "improved_power_word_fortitude", {
    col: 3,
    description: [
        "Increases the effect of your Power Word: Fortitude spell by {value}%.",
        {
            value: [15, 30]
        }
    ]
});

replaceTalent("1.9", "priest", "Discipline", "improved_power_word_shield", {
    description: [
        "Reduces the duration of your Power Word: Shield's Weakened Soul effect by {value} seconds.",
        {
            value: [5, 10, 15]
        }
    ]
});

replaceTalent("1.9", "priest", "Discipline", "martyrdom", {
    col: 1,
    description: [
        "Gives you a {value}% chance to gain the Focused Casting effect that lasts for 6 seconds after being the victim of a critical strike. The Focused Casting effect prevents you from losing casting time when taking damage.",
        {
            value: [50, 100]
        }
    ]
});

replaceTalent("1.9", "priest", "Discipline", "inner_focus", {
    row: 4,
    col: 2,
    requiresTalents: "mental_agility",
    description: [
        "When activated, reduces the Mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is capable of a critical effect."
    ]
});

replaceTalent("1.9", "priest", "Discipline", "meditation", {
    row: 4,
    col: 1,
    ranks: 5,
    description: [
        "Allows {value}% of your Mana regeneration to continue while casting.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.9", "priest", "Discipline", "improved_inner_fire", {
    description: [
        "Increases the effects of your Inner Fire spell by {value}%.",
        {
            value: [15, 30, 45]
        }
    ]
});

replaceTalent("1.9", "priest", "Discipline", "mental_agility", {
    row: 2,
    col: 2
});

replaceTalent("1.9", "priest", "Discipline", "improved_mana_burn", {
    description: [
        "Reduces the casting time of your Mana Burn spell by {value} seconds.",
        {
            value: [0.3, 0.6]
        }
    ]
});

replaceTalent("1.9", "priest", "Discipline", "mental_strength", {
    row: 3,
    col: 1
});

replaceTalent("1.9", "priest", "Discipline", "divine_spirit", {
    icon: "spell_holy_holyprotection",
    row: 6,
    col: 1,
    requiresTalents: "meditation",
    description: [
        "Holy power infuses the target, increasing their Spirit by 23 for 30 minutes."
    ]
});

bulkInsertTalents("1.9", "priest", "Discipline", [
    {
        id: "focused_casting",
        name: "Focused Casting",
        icon: "spell_arcane_blink",
        row: 2,
        col: 1,
        ranks: 1,
        requiresTalents: "martyrdom",
        description: [
            "While active, you no longer lose casting time from taking damage. Lasts 8 seconds."
        ]
    }
]);

removeTalentsById("1.9", "priest", "Holy", [
    "healing_focus",
    "spell_warding",
    "blessed_recovery",
    "holy_reach",
    "searing_light",
    "spiritual_guidance",
    "lightwell"
]);

replaceTalent("1.9", "priest", "Holy", "improved_renew", {
    ranks: 5,
    description: [
        "Increases the amount healed by your Renew spell by {value}%.",
        {
            value: [4, 8, 12, 16, 20]
        }
    ]
});

replaceTalent("1.9", "priest", "Holy", "divine_fury", {
    row: 4,
    col: 0,
    requiresTalents: "holy_fire",
    description: [
        "Reduces the casting time of your Smite and Holy Fire spells by {value} seconds.",
        {
            value: [0.1, 0.2, 0.3, 0.4, 0.5]
        }
    ]
});

replaceTalent("1.9", "priest", "Holy", "holy_nova", {
    icon: "spell_holy_holybolt",
    row: 6,
    col: 1,
    description: [
        "Causes an explosion of holy light around the caster, causing 80 to 88 Holy damage to all targets within 10 yards. The effect also temporarily reduces your threat level against nearby targets for 5 seconds."
    ]
});

replaceTalent("1.9", "priest", "Holy", "inspiration", {
    col: 2,
    ranks: 5,
    description: [
        "Increases your target's armor value from items by {value}% for 15 seconds after getting a critical effect from your Flash Heal, Heal, Greater Heal, or Prayer of Healing spell.",
        {
            value: [5, 10, 15, 20, 25]
        }
    ]
});

replaceTalent("1.9", "priest", "Holy", "improved_healing", {
    ranks: 5,
    description: [
        "Reduces the Mana cost of your Lesser Heal, Heal, and Greater Heal spells by {value}%.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.9", "priest", "Holy", "improved_prayer_of_healing", {
    col: 3
});

replaceTalent("1.9", "priest", "Holy", "spirit_of_redemption", {
    col: 2,
    description: [
        "Upon death, summons a Spirit of Redemption that heals nearby friendly targets for 318 to 360 and another 343 over 21 seconds."
    ]
});

replaceTalent("1.9", "priest", "Holy", "spiritual_healing", {
    row: 1,
    col: 2
});

bulkInsertTalents("1.9", "priest", "Holy", [
    {
        id: "improved_smite",
        name: "Improved Smite",
        icon: "spell_holy_holysmite",
        row: 1,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases the damage of your Smite spell by {value}%.",
            {
                value: [2, 4, 6, 8, 10]
            }
        ]
    },
    {
        id: "holy_fire",
        name: "Holy Fire",
        icon: "spell_holy_searinglight",
        row: 2,
        col: 0,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Consumes the enemy in flames that cause 90 to 116 Fire damage and an additional 28 Fire damage over 8 seconds."
        ]
    },
    {
        id: "subtlety",
        name: "Subtlety",
        icon: "ability_eyeoftheowl",
        row: 2,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Reduces the threat generated by your healing spells by {value}%.",
            {
                value: [4, 8, 12, 16, 20]
            }
        ]
    },
    {
        id: "improved_flash_heal",
        name: "Improved Flash Heal",
        icon: "spell_holy_flashheal",
        row: 3,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Gives you a {value}% chance to avoid interruption caused by damage while casting Flash Heal.",
            {
                value: [35, 70]
            }
        ]
    },
    {
        id: "master_healer",
        name: "Master Healer",
        icon: "spell_holy_healingaura",
        row: 5,
        col: 1,
        ranks: 5,
        requiresTalents: "improved_healing",
        description: [
            "Reduces the casting time of your Heal and Greater Heal spells by {value} seconds.",
            {
                value: [0.1, 0.2, 0.3, 0.4, 0.5]
            }
        ]
    }
]);

removeTalentsById("1.9", "priest", "Shadow", [
    "improved_vampiric_embrace"
]);

replaceTalent("1.9", "priest", "Shadow", "shadow_affinity", {
    ranks: 5,
    description: [
        "Reduces the threat generated by your Shadow spells by {value}%.",
        {
            value: [5, 10, 15, 20, 25]
        }
    ]
});

replaceTalent("1.9", "priest", "Shadow", "mind_flay", {
    description: [
        "Assault the target's mind with Shadow energy, causing 75 damage over 3 seconds and slowing the target to 50% of their movement speed."
    ]
});

replaceTalent("1.9", "priest", "Shadow", "improved_fade", {
    description: [
        "Increases the duration of your Fade ability by {value} seconds.",
        {
            value: [5, 10]
        }
    ]
});

replaceTalent("1.9", "priest", "Shadow", "shadow_reach", {
    col: 3
});

replaceTalent("1.9", "priest", "Shadow", "shadow_weaving", {
    row: 4,
    col: 1
});

replaceTalent("1.9", "priest", "Shadow", "silence", {
    description: [
        "Silence the target, preventing them from casting spells for 5 seconds."
    ]
});

replaceTalent("1.9", "priest", "Shadow", "vampiric_embrace", {
    col: 2,
    requiresTalents: "mind_flay"
});

replaceTalent("1.9", "priest", "Shadow", "darkness", {
    col: 1,
    requiresTalents: "shadow_weaving"
});

replaceTalent("1.9", "priest", "Shadow", "shadowform", {
    requiresTalents: null,
    description: [
        "Assume a Shadowform, increasing your Shadow damage by 15% and reducing Physical damage done to you by 15%. However, you may only cast Shadow and Discipline spells while in this form."
    ]
});

removeTalentsById("1.11", "rogue", "Assassination", [
    "improved_poisons"
]);

replaceTalent("1.11", "rogue", "Assassination", "remorseless_attacks", {
    ranks: 5,
    description: [
        "After killing an opponent that yields experience, gives you a {value}% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike.",
        {
            value: [8, 16, 24, 32, 40]
        }
    ]
});

replaceTalent("1.11", "rogue", "Assassination", "murder", {
    description: [
        "Increases your chance to hit while using your Sap, Ambush, Garrote, or Cheap Shot abilities by {value}%.",
        {
            value: [3, 5]
        }
    ]
});

replaceTalent("1.11", "rogue", "Assassination", "relentless_strikes", {
    requiresTalents: "ruthlessness"
});

replaceTalent("1.11", "rogue", "Assassination", "improved_expose_armor", {
    ranks: 3,
    description: [
        "Increases the armor reduced by your Expose Armor ability by {value}%.",
        {
            value: [15, 30, 45]
        }
    ]
});

replaceTalent("1.11", "rogue", "Assassination", "lethality", {
    description: [
        "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ambush, Ghostly Strike, or Hemorrhage ability by 30%.",
        {
            value: [6, 12, 18, 24, 30]
        }
    ]
});

replaceTalent("1.11", "rogue", "Assassination", "vile_poisons", {
    description: [
        "Increases the damage dealt by your poisons by {value}%.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.11", "rogue", "Assassination", "improved_kidney_shot", {
    row: 4,
    col: 0,
    description: [
        "Reduces the cooldown of your Kidney Shot ability by {value} seconds.",
        {
            value: [2, 4, 5]
        }
    ]
});

bulkInsertTalents("1.11", "rogue", "Assassination", [
    {
        id: "improved_instant_poison",
        name: "Improved Instant Poison",
        icon: "ability_poisons",
        row: 3,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases the chance to apply Instant Poison to your target by {value}%.",
            {
                value: [2, 4, 6, 8, 10]
            }
        ]
    },
    {
        id: "improved_deadly_poison",
        name: "Improved Deadly Poison",
        icon: "ability_rogue_dualweild",
        row: 4,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases the chance to apply Deadly Poison to your target by {value}%.",
            {
                value: [3, 6, 9, 12, 15]
            }
        ]
    }
]);

replaceTalent("1.11", "rogue", "Combat", "endurance", {
    name: "Improved Evasion",
    description: [
        "Increases the effect duration of your Evasion ability by {value} seconds.",
        {
            value: [2, 4]
        }
    ]
});

replaceTalent("1.11", "rogue", "Combat", "improved_sprint", {
    ranks: 3,
    description: [
        "Reduces the cooldown of your Sprint ability by {value} seconds.",
        {
            value: [30, 60, 90]
        }
    ]
});

replaceTalent("1.11", "rogue", "Combat", "mace_specialization", {
    description: [
        "Gives you a {value}% chance to stun your target for 3 seconds with a mace.",
        {
            value: [1, 2, 3, 4, 6]
        }
    ]
});

replaceTalent("1.11", "rogue", "Combat", "weapon_expertise", {
    name: "Throwing Weapon Specialization",
    icon: "inv_throwingknife_01",
    requiresTalents: null,
    description: [
        "Increases the range of your throwing weapons by {value} yards.",
        {
            value: [3, 6]
        }
    ]
});

removeTalentsById("1.11", "rogue", "Subtlety", [
    "sleight_of_hand",
    "serrated_blades",
    "heightened_senses",
    "dirty_deeds",
    "deadliness"
]);

replaceTalent("1.11", "rogue", "Subtlety", "opportunity", {
    row: 1
});

replaceTalent("1.11", "rogue", "Subtlety", "elusiveness", {
    ranks: 5,
    description: [
        "Reduces the cooldown of your Evasion, Vanish, and Blind abilities by {value}.",
        {
            value: ["15 seconds", "30 seconds", "45 seconds", "1 minute", "1.3 minutes"]
        }
    ]
});

replaceTalent("1.11", "rogue", "Subtlety", "camouflage", {
    row: 0,
    description: [
        "Increases your speed while stealthed by {value}%.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.11", "rogue", "Subtlety", "ghostly_strike", {
    description: [
        "A strike that deals 125% weapon damage and increases your chance to dodge by 15% for 7 seconds. Awards 1 combo point."
    ]
});

replaceTalent("1.11", "rogue", "Subtlety", "improved_ambush", {
    requiresTalents: "opportunity"
});

replaceTalent("1.11", "rogue", "Subtlety", "setup", {
    row: 5,
    col: 1,
    requiresTalents: "ghostly_strike",
    description: [
        "Gives you a {value}% chance to add a combo point to your target after dodging their attack.",
        {
            value: [15, 30, 45]
        }
    ]
});

replaceTalent("1.11", "rogue", "Subtlety", "improved_sap", {
    col: 2,
    description: [
        "Adds a {value}% chance to return to stealth mode after using your Sap ability.",
        {
            value: [30, 60, 90]
        }
    ]
});

replaceTalent("1.11", "rogue", "Subtlety", "preparation", {
    col: 2
});

replaceTalent("1.11", "rogue", "Subtlety", "hemorrhage", {
    row: 5,
    col: 2,
    description: [
        "An instant strike that damages the opponent and causes the target to hermorrhage, increasing any Physical damage dealt to the target by up to 3. Lasts 30 charges or 15 seconds. Awards 1 combo point."
    ]
});

replaceTalent("1.11", "rogue", "Subtlety", "premeditation", {
    requiresTalents: null,
    description: [
        "When used, adds 2 combo points to your target. The target must become engaged in combat within 5 seconds or the combo points are lost."
    ]
});

bulkInsertTalents("1.11", "rogue", "Subtlety", [
    {
        id: "rapid_concealment",
        name: "Rapid Concealment",
        icon: "ability_ambush",
        row: 0,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Reduces the cooldown of your Stealth ability by {value}.",
            {
                value: ["1 second", "2 seconds", "3 seconds", "4 seconds", "5 seconds"]
            }
        ]
    },
    {
        id: "improved_garrote",
        name: "Improved Garrote",
        icon: "ability_rogue_garrote",
        row: 2,
        col: 3,
        ranks: 2,
        requiresTalents: "opportunity",
        description: [
            "Increases the duration of your Garrote ability by {value1} seconds, but reduces the damage by {value2}%.",
            {
                value1: [3, 6],
                value2: [5, 10]
            }
        ]
    },
    {
        id: "improved_vanish",
        name: "Improved Vanish",
        icon: "ability_vanish",
        row: 3,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases your movement speed while vanished by {value}%.",
            {
                value: [10, 20, 30]
            }
        ]
    },
    {
        id: "improved_rupture",
        name: "Improved Rupture",
        icon: "ability_rogue_rupture",
        row: 3,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases the damage of dealt by your Rupture ability by {value}%.",
            {
                value: [10, 20, 30]
            }
        ]
    },
    {
        id: "improved_distract",
        name: "Improved Distract",
        icon: "ability_rogue_distract",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the radius of your Distract ability by {value} yards.",
            {
                value: [3, 5]
            }
        ]
    },
    {
        id: "improved_cheap_shot",
        name: "Improved Cheap Shot",
        icon: "ability_cheapshot",
        row: 4,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Reduces the Energy cost of your Cheap Shot ability by {value}.",
            {
                value: [10, 20]
            }
        ]
    }
]);

removeTalentsById("1.10", "shaman", "Elemental", [
    "earths_grasp",
    "elemental_warding",
    "improved_fire_totems",
    "eye_of_the_storm",
    "elemental_devastation",
    "storm_reach"
]);

replaceTalent("1.10", "shaman", "Elemental", "convection", {
    row: 1,
    col: 2,
    requiresTalents: "concussion",
    description: [
        "Reduces the Mana cost of your Shock spells by {value}%.",
        {
            value: [2, 4, 6, 8, 10]
        }
    ]
});

replaceTalent("1.10", "shaman", "Elemental", "concussion", {
    description: [
        "Increases the damage done by your Shock spells by {value}%.",
        {
            value: [1, 2, 3, 4, 5]
        }
    ]
});

replaceTalent("1.10", "shaman", "Elemental", "call_of_flame", {
    row: 1,
    col: 1,
    ranks: 5,
    description: [
        "Increases the damage done by your Fire Totems by {value}%.",
        {
            value: [2, 4, 6, 8, 10]
        }
    ]
});

replaceTalent("1.10", "shaman", "Elemental", "reverberation", {
    row: 2,
    col: 2,
    requiresTalents: "convection",
    description: [
        "Reduces the cooldown of your Shock spells by {value}.",
        {
            value: ["0.2 seconds", "0.4 seconds", "0.6 seconds", "0.8 seconds", "1 second"]
        }
    ]
});

replaceTalent("1.10", "shaman", "Elemental", "call_of_thunder", {
    row: 2,
    col: 1,
    description: [
        "Increases the critical strike chance of your Lightning spells by {value}%.",
        {
            value: [1, 2, 3, 4, 6]
        }
    ]
});

replaceTalent("1.10", "shaman", "Elemental", "elemental_fury", {
    requiresTalents: "call_of_thunder",
    description: [
        "Increases the critical strike damage done by your Fire, Frost, and Nature spells by 100%."
    ]
});

replaceTalent("1.10", "shaman", "Elemental", "lightning_mastery", {
    row: 5,
    col: 0,
    requiresTalents: null,
    description: [
        "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by {value}.",
        {
            value: ["0.2 seconds", "0.4 seconds", "0.6 seconds", "0.8 seconds", "1 second"]
        }
    ]
});

replaceTalent("1.10", "shaman", "Elemental", "elemental_mastery", {
    description: [
        "When activated, this spell gives your next Fire, Frost, or Nature damage spell a 100% critical strike chance."
    ]
});

bulkInsertTalents("1.10", "shaman", "Elemental", [
    {
        id: "improved_lightning_bolt",
        name: "Improved Lightning Bolt",
        icon: "spell_nature_lightning",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Reduces the Mana cost of your Lightning Bolt spell by {value}%.",
            {
                value: [3, 6, 9, 12, 15]
            }
        ]
    },
    {
        id: "improved_stoneclaw_totem",
        name: "Improved Stoneclaw Totem",
        icon: "spell_nature_stoneclawtotem",
        row: 1,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases the Health of your Stoneclaw Totem by {value}%.",
            {
                value: [5, 10, 15, 20, 25]
            }
        ]
    },
    {
        id: "improved_searing_totem",
        name: "Improved Searing Totem",
        icon: "spell_fire_searingtotem",
        row: 1,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the duration of your Searing Totem by {value}%.",
            {
                value: [10, 20]
            }
        ]
    },
    {
        id: "improved_fire_nova_totem",
        name: "Improved Fire Nova Totem",
        icon: "spell_fire_sealoffire",
        row: 3,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Reduces the delay before your Fire Nova Totem activates by {value}",
            {
                value: ["1 second", "2 seconds"]
            }
        ]
    },
    {
        id: "improved_magma_totem",
        name: "Improved Magma Totem",
        icon: "spell_fire_selfdestruct",
        row: 4,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Reduces the Mana cost of your Magma Totem by {value}%.",
            {
                value: [10, 20]
            }
        ]
    },
    {
        id: "improved_chain_lightning",
        name: "Improved Chain Lightning",
        icon: "spell_nature_chainlightning",
        row: 5,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the damage dealt by your Chain Lightning spell by {value}%.",
            {
                value: [5, 10]
            }
        ]
    }
]);

replaceTalent("1.10", "shaman", "Enhancement", "shield_specialization", {
    description: [
        "Increases your chance to block attacks with a shield by {value}%.",
        {
            value: [1, 2, 3, 4, 5]
        }
    ]
});

replaceTalent("1.10", "shaman", "Enhancement", "enhancing_totems", {
    name: "Improved Strength of Earth Totem",
    ranks: 3,
    description: [
        "Increases the amount of Strength raised by your Strength of Earth Totem by {value}%.",
        {
            value: [5, 10, 15]
        }
    ]
});

replaceTalent("1.10", "shaman", "Enhancement", "anticipation", {
    description: [
        "Increases your defense skill by {value}.",
        {
            value: [2, 4, 6, 8, 10]
        }
    ]
});

replaceTalent("1.10", "shaman", "Enhancement", "toughness", {
    row: 5,
    col: 1,
    requiresTalents: "parry",
});

replaceTalent("1.10", "shaman", "Enhancement", "parry", {
    row: 4,
    col: 1,
    description: [
        "Gives a chance to parry melee attacks."
    ]
});

replaceTalent("1.10", "shaman", "Enhancement", "stormstrike", {
    requiresTalents: null,
    description: [
        "Gives you an extra attack.  In addition, the next 2 sources of Nature damage dealt to the target are increased by 20%. Lasts 12 seconds."
    ]
});

bulkInsertTalents("1.10", "shaman", "Enhancement", [
    {
        id: "improved_rockbiter_weapon",
        name: "Improved Rockbiter Weapon",
        icon: "spell_nature_rockbiter",
        row: 3,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the Attack Power bonus of your Rockbiter Weapon by {value}%.",
            {
                value: [5, 10]
            }
        ]
    },
    {
        id: "improved_flametongue_weapon",
        name: "Improved Flametongue Weapon",
        icon: "spell_fire_flametounge",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the damage done by your Flametongue Weapon effect by {value}%.",
            {
                value: [5, 10]
            }
        ]
    },
    {
        id: "improved_frostbrand_weapon",
        name: "Improved Frostbrand Weapon",
        icon: "spell_frost_frostbrand",
        row: 4,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the damage done by your Frostbrand Weapon effect by {value}%.",
            {
                value: [5, 10]
            }
        ]
    },
    {
        id: "improved_windfury_weapon",
        name: "Improved Windfury Weapon",
        icon: "spell_nature_cyclone",
        row: 4,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the Attack Power bonus of your Windfury Weapon effect by {value}%.",
            {
                value: [11, 22]
            }
        ]
    },
    {
        id: "improved_grounding_totem",
        name: "Improved Grounding Totem",
        icon: "spell_nature_nullward",
        row: 5,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the frequency that your Grounding Totem will absorb a spell by {value} seconds.",
            {
                value: [2, 4]
            }
        ]
    },
    {
        id: "improved_grace_of_air_totem",
        name: "Improved Grace of Air Totem",
        icon: "spell_nature_windfury",
        row: 6,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases the amount of Agility raised by your Grace of Air Totem by {value}%.",
            {
                value: [5, 10, 15]
            }
        ]
    }
]);

removeTalentsById("1.10", "shaman", "Restoration", [
    "natures_guidance",
    "healing_focus",
    "totemic_mastery",
    "healing_grace",
    "restorative_totems",
    "healing_way"
]);

replaceTalent("1.10", "shaman", "Restoration", "improved_healing_wave", {
    description: [
        "Reduces the casting time of your Healing Wave spell by {value} seconds.",
        {
            value: [0.1, 0.2, 0.3, 0.4, 0.5]
        }
    ]
});

replaceTalent("1.10", "shaman", "Restoration", "improved_reincarnation", {
    name: "Improved Self-Reincarnation",
    description: [
        "Reduces the cooldown of your Self-Reincarnation spell by {value} minutes.",
        {
            value: [10, 20]
        }
    ]
});

replaceTalent("1.10", "shaman", "Restoration", "ancestral_healing", {
    ranks: 5,
    description: [
        "Increases your target's armor value from items by {value}% for 15 seconds after getting a critical effect from one of your healing spells.",
        {
            value: [5, 10, 15, 20, 25]
        }
    ]
});

replaceTalent("1.10", "shaman", "Restoration", "totemic_focus", {
    description: [
        "Reduces the Mana cost of your totems by {value}%.",
        {
            value: [2, 4, 6, 8, 10]
        }
    ]
});

replaceTalent("1.10", "shaman", "Restoration", "tidal_mastery", {
    description: [
        "Increases the critical effect chance of your healing and Nature damage spells by {value}%.",
        {
            value: [1, 2, 3, 4, 5]
        }
    ]
});

replaceTalent("1.10", "shaman", "Restoration", "natures_swiftness", {
    requiresTalents: "tidal_mastery",
    description: [
        "When activated, your next Nature spell with a casting time less than 10 seconds becomes an instant cast spell."
    ]
});

replaceTalent("1.10", "shaman", "Restoration", "mana_tide_totem", {
    requiresTalents: "improved_mana_spring_totem",
    description: [
        "Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 seconds that restores 140 mana every 3 seconds to group members within 20 yards."
    ]
});

bulkInsertTalents("1.10", "shaman", "Restoration", [
    {
        id: "eventide",
        name: "Eventide",
        icon: "spell_frost_stun",
        row: 2,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases the duration of your Healing Stream and Mana Spring totems by {value}%.",
            {
                value: [3, 6, 9, 12, 15]
            }
        ]
    },
    {
        id: "improved_lesser_healing_wave",
        name: "Improved Lesser Healing Wave",
        icon: "spell_nature_healingwavelesser",
        row: 2,
        col: 2,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Gives you a {value}% chance to avoid interruption caused by damage while casting Lesser Healing Wave.",
            {
                value: [15, 30, 45, 60, 75]
            }
        ]
    },
    {
        id: "combat_endurance",
        name: "Combat Endurance",
        icon: "spell_nature_ancestralguardian",
        row: 2,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Allows 10% of your Health regeneration to work while in combat."
        ]
    },
    {
        id: "improved_healing_stream_totem",
        name: "Improved Healing Stream Totem",
        icon: "inv_spear_04",
        row: 3,
        col: 0,
        ranks: 5,
        requiresTalents: "eventide",
        description: [
            "Increases the effect of your Healing Stream Totem by {value}%.",
            {
                value: [4, 8, 12, 16, 20]
            }
        ]
    },
    {
        id: "improved_mana_spring_totem",
        name: "Improved Mana Spring Totem",
        icon: "spell_nature_manaregentotem",
        row: 4,
        col: 1,
        ranks: 5,
        requiresTalents: "eventide",
        description: [
            "Increases the effect of your Mana Spring Totem by {value}%.",
            {
                value: [5, 10, 15, 20, 25]
            }
        ]
    }
]);

replaceTalent("1.5", "warlock", "Affliction", "improved_corruption", {
    description: [
        "Reduces the casting time of your Corruption spell by {value} seconds.",
        {
            value: [0.4, 0.8, 1.2, 1.6, 2]
        }
    ]
});

replaceTalent("1.5", "warlock", "Affliction", "improved_drain_soul", {
    description: [
        "Gives you a {value}% chance to get a 100% increase to your Mana regeneration for 10 seconds if the target dies while while you drain its soul. In addition, your Mana may continue to regenerate while casting at 50% of normal.",
        {
            value: [50, 100]
        }
    ]
});

replaceTalent("1.5", "warlock", "Affliction", "amplify_curse", {
    description: [
        "Increases the effect of your next Curse of Weakness or Curse of Agony by 50%, or your next Curse of Exhaustion by 20%."
    ]
});

replaceTalent("1.5", "warlock", "Affliction", "nightfall", {
    description: [
        "Gives your Corruption and Drain Life spells a {value}% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
        {
            value: [2, 3]
        }
    ]
});

replaceTalent("1.5", "warlock", "Affliction", "siphon_life", {
    description: [
        "Transfers 13 health from the target to the caster every 3 seconds. Lasts 30 seconds."
    ]
});

replaceTalent("1.5", "warlock", "Affliction", "curse_of_exhaustion", {
    description: [
        "Reduces the target's speed to 90% of normal for 12 seconds. Only one Curse per Warlock can be active on any one target."
    ]
});

removeTalentsById("1.5", "warlock", "Demonology", [
    "master_demonologist"
]);

replaceTalent("1.5", "warlock", "Demonology", "improved_voidwalker", {
    description: [
        "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, and Suffering spells by {value}%.",
        {
            value: [8, 16, 25]
        }
    ]
});

replaceTalent("1.5", "warlock", "Demonology", "improved_succubus", {
    description: [
        "Increases the effect of your Succubus' Last of Pain and Soothing Kiss spells by {value}%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by {value}%.",
        {
            value: [8, 16, 25]
        }
    ]
});

replaceTalent("1.5", "warlock", "Demonology", "fel_domination", {
    description: [
        "Your next Imp, Voidwalker, Succubus, or Felhunter Summon spell has its casting time reduced by 5.5 seconds and its Mana cost reduced by 50%."
    ]
});

replaceTalent("1.5", "warlock", "Demonology", "fel_stamina", {
    requiresTalents: "fel_intellect"
});

replaceTalent("1.5", "warlock", "Demonology", "master_summoner", {
    description: [
        "Reduces the casting time of your Imp, Voidwalker, Succubus, and Felhunter Summoning spells by {value} seconds.",
        {
            value: [2, 4]
        }
    ]
});

replaceTalent("1.5", "warlock", "Demonology", "unholy_power", {
    row: 5,
    requiresTalents: "fel_stamina"
});

replaceTalent("1.5", "warlock", "Demonology", "improved_enslave_demon", {
    description: [
        "Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by {value}%.",
        {
            value: [2, 4, 6, 8, 10]
        }
    ]
});

replaceTalent("1.5", "warlock", "Demonology", "demonic_sacrifice", {
    description: [
        "When activated, sacrifices your summoned demon to grant you an effect that lasts 30 minutes. The effect is cancelled if any Demon is summoned.<br><br>Imp: Increases your Fire damage by 15%.<br><br>Voidwalker: Increases your maximum Health by 15%.<br><br>Succubus: Increases your Shadow damage by 15%.<br><br>Felhunter: Increases your maximum Mana by 20%."
    ]
});

replaceTalent("1.5", "warlock", "Demonology", "improved_firestone", {
    description: [
        "Increases the damage done by your Firestone by {value}%.",
        {
            value: [15, 30]
        }
    ]
});

replaceTalent("1.5", "warlock", "Demonology", "soul_link", {
    description: [
        "When active, 50% of all damage taken is split with your summoned demon. Lasts 30 seconds."
    ]
});

bulkInsertTalents("1.5", "warlock", "Demonology", [
    {
        id: "master_conjuror",
        name: "Master Conjuror",
        icon: "inv_misc_orb_04",
        row: 3,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Reduces the Mana cost and casting time of your Stone creation spells by {value}%.",
            {
                value: [20, 40]
            }
        ]
    }
]);

replaceTalent("1.5", "warlock", "Destruction", "improved_shadow_bolt", {
    description: [
        "Your Shadow Bolt critical strikes increase the next 4 sources of Shadow damage dealt to the target by {value}%.",
        {
            value: [4, 8, 12, 16, 20]
        }
    ]
});

replaceTalent("1.5", "warlock", "Destruction", "bane", {
    description: [
        "Reduces the casting time of your Shadow Bolt and Immolate spells by {value} seconds.",
        {
            value: [0.1, 0.2, 0.3, 0.4, 0.5]
        }
    ]
});

replaceTalent("1.5", "warlock", "Destruction", "aftermath", {
    description: [
        "Gives your Destruction spells a {value}% chance to daze the target for 5 seconds.",
        {
            value: [2, 4, 6, 8, 10]
        }
    ]
});

replaceTalent("1.5", "warlock", "Destruction", "improved_firebolt", {
    description: [
        "Reduces the casting time of your Imp's Firebolt spell by {value}.",
        {
            value: ["0.5 seconds", "1 second"]
        }
    ]
});

replaceTalent("1.5", "warlock", "Destruction", "improved_lash_of_pain", {
    description: [
        "Reduces the cooldown of your Succubus' Lash of Pain spell by {value} seconds.",
        {
            value: [3, 6]
        }
    ]
});

replaceTalent("1.5", "warlock", "Destruction", "shadowburn", {
    description: [
        "Instantly blasts the target with 87 to 99 Shadow damage. Requires 1 Soul Shard. If the target dies from Shadowburn, and yields experience, the caster gains a Soul Shard."
    ]
});

replaceTalent("1.5", "warlock", "Destruction", "intensity", {
    description: [
        "Gives you a {value}% chance to resist interruptiong caused by damage while channeling the Rain of Fire or Hellfire spell.",
        {
            value: [35, 70]
        }
    ]
});

replaceTalent("1.5", "warlock", "Destruction", "pyroclasm", {
    description: [
        "Gives your Rain of Fire and Hellfire spells a {value}% chance to stun the target for 3 seconds.",
        {
            value: [13, 26]
        }
    ]
});

replaceTalent("1.5", "warlock", "Destruction", "emberstorm", {
    name: "Inferno"
});

replaceTalent("1.5", "warlock", "Destruction", "conflagrate", {
    description: [
        "Ignite a target that is already afflicted by Immolate, dealing 197 to 251 damage and consuming the Immolate spell."
    ]
});

replaceTalent("1.5", "warrior", "Arms", "improved_thunder_clap", {
    description: [
        "Increases the damage done by your Thunder Clap by {value}%.",
        {
            value: [8, 16, 25]
        }
    ]
});

replaceTalent("1.5", "warrior", "Arms", "impale", {
    description: [
        "Increases the critical strike damage done by your abilities in Battle, Defensive, and Berserker stance by {value}%.",
        {
            value: [10, 20]
        }
    ]
});

replaceTalent("1.5", "warrior", "Arms", "improved_hamstring", {
    ranks: 2,
    description: [
        "Increases the movement slow effect of your Hamstring ability by {value}%.",
        {
            value: [10, 20]
        }
    ]
});

replaceTalent("1.5", "warrior", "Arms", "mortal_strike", {
    description: [
        "A vicious strike that deals 200% weapon damage and wounds the target, reducing the effectiveness of any healing by 50% for 10 seconds."
    ]
});

removeTalentsById("1.5", "warrior", "Fury", [
    "dual_wield_specialization"
]);

replaceTalent("1.5", "warrior", "Fury", "booming_voice", {
    description: [
        "Increases the duration of your Battle Shout and Demoralizing Shout by {value}%.",
        {
            value: [10, 20, 30, 40, 50]
        }
    ]
});

replaceTalent("1.5", "warrior", "Fury", "improved_demoralizing_shout", {
    description: [
        "Increases the attack power reduction of your Demoralizing Shout by {value}%.",
        {
            value: [5, 10, 15, 20, 25]
        }
    ]
});

replaceTalent("1.5", "warrior", "Fury", "unbridled_wrath", {
    description: [
        "Gives you a {value}% chance to generate an additional Rage point when you deal melee damage.",
        {
            value: [8, 16, 24, 32, 40]
        }
    ]
});

replaceTalent("1.5", "warrior", "Fury", "improved_cleave", {
    description: [
        "Increases the bonus damage done by your Cleave ability by {value}%.",
        {
            value: [20, 40, 60]
        }
    ]
});

replaceTalent("1.5", "warrior", "Fury", "piercing_howl", {
    requiresTalents: "improved_demoralizing_shout",
    description: [
        "Causes all enemies near the warrior to be dazed for 6 seconds."
    ]
});

replaceTalent("1.5", "warrior", "Fury", "blood_craze", {
    description: [
        "Allows {value}% of your Health regeneration to work during combat for 20 seconds after being the victim of a critical strike.",
        {
            value: [5, 10, 15]
        }
    ]
});

replaceTalent("1.5", "warrior", "Fury", "improved_battle_shout", {
    description: [
        "Increases the Attack Power bonus of your Battle Shout by {value}%.",
        {
            value: [5, 10, 15, 20, 25]
        }
    ]
});

replaceTalent("1.5", "warrior", "Fury", "enrage", {
    description: [
        "Gives you a {value}% melee damage bonus for 4 swings any time you are the victim of a critical strike.",
        {
            value: [8, 16, 24, 32, 40]
        }
    ]
});

replaceTalent("1.5", "warrior", "Fury", "improved_slam", {
    description: [
        "Decreases the casting time of your Slam ability by {value} seconds.",
        {
            value: [0.1, 0.2, 0.3, 0.4, 0.5]
        }
    ]
});

replaceTalent("1.5", "warrior", "Fury", "death_wish", {
    description: [
        "When activated, increases your melee damage by 20% and makes you immune to fear, but lowers your defense against all types of damage by 20%. Lasts 30 seconds."
    ]
});

replaceTalent("1.5", "warrior", "Fury", "improved_intercept", {
    description: [
        "Reduces the cooldown of your Intercept ability by {value} seconds.",
        {
            value: [5, 10]
        }
    ]
});

replaceTalent("1.5", "warrior", "Fury", "improved_berserker_rage", {
    description: [
        "Increases the duration of your Berserker Rage ability by {value} seconds.",
        {
            value: [3, 6]
        }
    ]
});

replaceTalent("1.5", "warrior", "Fury", "flurry", {
    description: [
        "Increases your attack speed by {value}% for your next 3 swings after dealing a critical strike.",
        {
            value: [10, 15, 20, 25, 30]
        }
    ]
});

replaceTalent("1.5", "warrior", "Fury", "bloodthirst", {
    description: [
        "Activates after dealing a killing blow. Your next melee weapon attack deals a 100% increased damage."
    ]
});

removeTalentsById("1.5", "warrior", "Protection", [
    "shield_slam"
]);

bulkInsertTalents("1.5", "warrior", "Protection", [
    {
        id: "shield_discipline",
        name: "Shield Discipline",
        icon: "inv_shield_05",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "improved_shield_bash",
        description: [
            "While active, increases the amount of damage absorbed by your shield by 50% and increases the damage done by your Shield Bash ability by 200%. Lasts 20 seconds."
        ]
    }
]);

replaceTalent("1.5", "warrior", "Protection", "shield_specialization", {
    description: [
        "Increases your chance to block attacks with a shield by {value}%.",
        {
            value: [1, 2, 3, 4, 5]
        }
    ]
});

replaceTalent("1.5", "warrior", "Protection", "improved_bloodrage", {
    description: [
        "Reduces the duration required to generate rage from your Bloodrage ability by {value} seconds.",
        {
            value: [2, 4]
        }
    ]
});

replaceTalent("1.5", "warrior", "Protection", "iron_will", {
    description: [
        "Increases your chance to resist stun and charm effects by {value}%.",
        {
            value: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalent("1.5", "warrior", "Protection", "last_stand", {
    description: [
        "When activated, this ability temporarily grants you 30% of your maximum hit points for 20 seconds. After the effect expires, the hit points are lost."
    ]
});

replaceTalent("1.5", "warrior", "Protection", "improved_shield_block", {
    description: [
        "Allows your Shield Block ability to block an additional attack, and increases the duration by {value}.",
        {
            value: ["0.5 seconds", "1 second", "2 seconds"]
        }
    ]
});

replaceTalent("1.5", "warrior", "Protection", "improved_revenge", {
    description: [
        "Gives your Revenge ability a {value}% chance to stun the target for 3 seconds.",
        {
            value: [20, 30, 40]
        }
    ]
});

replaceTalent("1.5", "warrior", "Protection", "improved_sunder_armor", {
    description: [
        "Increases the armor reduction of your Sunder Armor by {value}%.",
        {
            value: [10, 20, 30]
        }
    ]
});

replaceTalent("1.5", "warrior", "Protection", "improved_disarm", {
    description: [
        "Increases the duration of your Disarm ability by {value}.",
        {
            value: ["1 second", "2 seconds", "3 seconds"]
        }
    ]
});

replaceTalent("1.5", "warrior", "Protection", "improved_taunt", {
    col: 3,
    description: [
        "Reduces the cooldown of your Taunt ability by {value}.",
        {
            value: ["1 second", "2 seconds"]
        }
    ]
});

replaceTalent("1.5", "warrior", "Protection", "improved_shield_wall", {
    description: [
        "Increases the effect duration of your Shield Wall ability by {value} seconds.",
        {
            value: [3, 5]
        }
    ]
});

replaceTalent("1.5", "warrior", "Protection", "concussion_blow", {
    col: 2,
    requiresTalents: "improved_revenge",
    description: [
        "A brutal strike that deals weapon damage and stuns the opponent for 5 seconds."
    ]
});

replaceTalent("1.5", "warrior", "Protection", "improved_shield_bash", {
    col: 1,
    description: [
        "Gives your Shield Bash ability a {value}% chance to silence the target for 3 seconds.",
        {
            value: [50, 100]
        }
    ]
});

replaceTalent("1.5", "warrior", "Protection", "one_handed_weapon_specialization", {
    description: [
        "Increases the damage you deal with one-handed melee weapons by {value}%.",
        {
            value: [1, 2, 3, 4, 5]
        }
    ]
});

// turtle wow changes (1.16.1)

removeTalentsByIdOld("1.16.1t", "druid", "Feral Combat", [
    "faerie_fire_feral"
]);

replaceTalentOld("1.16.1t", "druid", "Feral Combat", "feral_instinct", {
    ranks: 3,
    description: [
        "Increasing threat caused in Bear Form and Dire Bear Form by {value}% and reduces the chance enemies have to detect you while Prowling.",
        {
            value: [5, 10, 15]
        }
    ]
});

replaceTalentOld("1.16.1t", "druid", "Feral Combat", "thick_hide", {
    ranks: 3,
    description: [
        "Increases your Armor contribution from items by {value}%.",
        {
            value: [3, 6, 10]
        }
    ]
});

replaceTalentOld("1.16.1t", "druid", "Feral Combat", "blood_frenzy", {
    description: [
        "Increases the duration of Tiger's Fury by {value1} seconds and your Enrage now also instantly restores {value2} rage. In addition, Tiger’s Fury and Enrage increases your attack speed by {value3}% for {value3} seconds.",
        {
            value1: [3, 6],
            value2: [5, 10],
            value3: [6, 12]
        }
    ]
});

replaceTalentOld("1.16.1t", "druid", "Feral Combat", "primal_fury", {
    description: [
        "Gives you a {value}% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points have a {value}% chance to add an additional combo point.",
        {
            value: [50, 100]
        }
    ]
});

bulkInsertTalentsOld("1.16.1t", "druid", "Feral Combat", [
    {
        id: "berserk",
        name: "Berserk",
        icon: "ability_druid_berserk",
        row: 4,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Removes all Fear effects and increases your energy regeneration rate by 100% while in Cat Form, and increases your total health by 20% while in Bear Form. After the effect ends, the health is lost. The effect lasts 20 seconds."
        ]
    }
]);

removeTalentsByIdOld("1.16.1t", "druid", "Restoration", [
    "improved_enrage",
    "insect_swarm"
]);

replaceTalentOld("1.16.1t", "druid", "Restoration", "subtlety", {
    row: 1,
    col: 2,
    description: [
        "Reduces the threat generated by your spells by {value}%.",
        {
            value: [4, 8, 12, 16, 20]
        }
    ]
});

replaceTalentOld("1.16.1t", "druid", "Restoration", "gift_of_nature", {
    requiresTalents: "swiftmend"
});

moveTalentOld("1.16.1t", "druid", "Restoration", "tranquil_spirit", 3, 3);
moveTalentOld("1.16.1t", "druid", "Restoration", "improved_rejuvenation", 3, 1);
moveTalentOld("1.16.1t", "druid", "Restoration", "swiftmend", 2, 2);

replaceTalentOld("1.16.1t", "druid", "Restoration", "improved_regrowth", {
    col: 1,
    requiresTalents: "improved_rejuvenation"
});

bulkInsertTalentsOld("1.16.1t", "druid", "Restoration", [
    {
        id: "tree_of_life",
        name: "Tree of Life",
        icon: "ability_druid_treeoflife",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "improved_regrowth",
        description: [
            "Shapeshift into the Tree of Life. While in this form you increase healing received by 20% of your total Spirit for all party members within 30 yards, your movement speed is reduced by 20%, and you cannot cast damaging spells or Healing Touch, but the mana cost of these spells is reduced by 20%.<br><br>The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
        ]
    }
]);

removeTalentsByIdOld("1.16.1t", "hunter", "Beast Mastery", [
    "improved_aspect_of_the_hawk"
]);

bulkInsertTalentsOld("1.16.1t", "hunter", "Beast Mastery", [
    {
        id: "improved_predator_aspects",
        name: "Improved Predator Aspects",
        icon: "spell_nature_ravenform",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "While Aspect of the Hawk or Wolf is active, all normal ranged attacks and melee attacks have a {value}% chance of increasing attack speed by 30% for 12 sec. Hawk will apply ranged attack speed, while Wolf will apply melee attack speed.",
            {
                value: [1, 2, 3, 4, 5]
            }
        ]
    }
]);

replaceTalentOld("1.16.1t", "hunter", "Beast Mastery", "improved_eyes_of_the_beast", {
    description: [
        "Increases the duration of Eyes of the Beast by {value1} seconds. While channeling this ability your tamed pet deals {value2}% additional damage and increases its focus generation by {value2}%.",
        {
            value1: [30, 60],
            value2: [15, 30]
        }
    ]
});

removeTalentsByIdOld("1.16.1t", "hunter", "Survival", [
    "monster_slaying",
    "humanoid_slaying"
]);

bulkInsertTalentsOld("1.16.1t", "hunter", "Survival", [
    {
        id: "improved_slaying",
        name: "Improved Slaying",
        icon: "spell_holy_prayerofhealing",
        row: 0,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases all damage caused against Beasts, Giants, Dragonkin, and Humanoid targets by {value}% and increases critical damage caused against Beasts, Giants, Dragonkin, and Humanoid targets by an additional {value}%.",
            {
                value: [1, 2, 3]
            }
        ]
    },
    {
        id: "superior_strikes",
        name: "Superior Strikes",
        icon: "ability_meleedamage",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Reduces the cooldown of your Raptor Strike and Mongoose Bite by {value} sec.",
            {
                value: [0.2, 0.4, 0.6, 0.8, 1]
            }
        ]
    }
]);

replaceTalentOld("1.16.1t", "mage", "Arcane", "improved_arcane_explosion", {
    name: "Arcane Impact",
    description: [
        "Increases the critical strike chance of your Arcane Explosion and Arcane Missiles spells by an additional {value}%.",
        {
            value: [2, 4, 6]
        }
    ]
});

bulkInsertTalentsOld("1.16.1t", "mage", "Arcane", [
    {
        id: "arcane_potency",
        name: "Arcane Potency",
        icon: "inv_enchant_essencemagiclarge",
        row: 5,
        col: 2,
        ranks: 3,
        requiresTalents: "arcane_mind",
        description: [
            "Increases the critical strike damage bonus of your Arcane spells by {value}%.",
            {
                value: [18, 36, 50]
            }
        ]
    },
    {
        id: "brilliance_aura",
        name: "Brilliance Aura",
        icon: "inv_staff_07",
        row: 6,
        col: 2,
        ranks: 1,
        requiresTalents: "arcane_potency",
        description: [
            "Gives Mana regeneration to party members equal to 15% of the Mage's mana regeneration within 30 yards. Lasts 30 minutes."
        ]
    }
]);

removeTalentsByIdOld("1.16.1t", "paladin", "Holy", [
    "consecration",
    "lasting_judgement"
]);

bulkInsertTalentsOld("1.16.1t", "paladin", "Holy", [
    {
        id: "sanctity_aura",
        name: "Sanctity Aura",
        icon: "spell_holy_mindvision",
        row: 2,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Increases Holy damage done by party members within 30 yards by 10%.  Players may only have one Aura on them per Paladin at any one time."
        ]
    },
    {
        id: "improved_concentration_aura",
        name: "Improved Concentration Aura",
        icon: "spell_holy_mindsooth",
        row: 4,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases the effect of your Concentration Aura by an additional {value}% and gives all group members affected by the aura an additional {value}% chance to resist Silence and Interrupt effects.",
            {
                value: [5, 10, 15]
            }
        ]
    }
]);

removeTalentsByIdOld("1.16.1t", "paladin", "Protection", [
    "blessing_of_kings",
    "improved_concentration_aura"
]);

moveTalentOld("1.16.1t", "paladin", "Protection", "improved_righteous_fury", 2, 0);
moveTalentOld("1.16.1t", "paladin", "Protection", "blessing_of_sanctuary", 2, 1);

replaceTalentOld("1.16.1t", "paladin", "Protection", "redoubt", {
    description: [
        "Successful melee and ranged attacks against you have a {value1}% chance to increase your chance to block by {value2}%. Lasts 10 sec or 5 blocks.",
        {
            value1: [2, 4, 6, 8, 10],
            value2: [3, 6, 9, 12, 15]
        }
    ]
});

replaceTalentOld("1.16.1t", "paladin", "Protection", "holy_shield", {
    row: 4,
    col: 1,
    requiresTalents: null
});

bulkInsertTalentsOld("1.16.1t", "paladin", "Protection", [
    {
        id: "improved_seal_of_justice",
        name: "Improved Seal of Justice",
        icon: "spell_holy_sealofwrath",
        row: 3,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases the chance your Seal of Justice will stun the opponent by {value1}% and your Judgement of Justice has a {value2}% chance to taunt your target to attack you but has no effect if the target is already attacking you.",
            {
                value1: [22, 33, 67],
                value2: [33, 66, 100]
            }
        ]
    },
    {
        id: "righteous_defense",
        name: "Righteous Defense",
        icon: "ability_warrior_swordandboard",
        row: 4,
        col: 0,
        ranks: 3,
        requiresTalents: "improved_righteous_fury",
        description: [
            "While Righteous Fury is active, your damage taken is reduced by {value}%.",
            {
                value: [3, 6, 10]
            }
        ]
    },
    {
        id: "ardent_defender",
        name: "Ardent Defender",
        icon: "spell_holy_ardentdefender",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "holy_shield",
        description: [
            "When you have less than 35% health, all damage taken is reduced by 25%."
        ]
    }
]);

removeTalentsByIdOld("1.16.1t", "paladin", "Retribution", [
    "sanctity_aura"
]);

replaceTalentOld("1.16.1t", "paladin", "Retribution", "improved_seal_of_the_crusader", {
    name: "Heart of the Crusader",
    description: [
        "Increases the melee attack power bonus of your Seal of the Crusader and the Holy damage increase of your Crusader Strike by {value}%.",
        {
            value: [5, 10, 15]
        }
    ]
});

moveTalentOld("1.16.1t", "paladin", "Retribution", "seal_of_command", 4, 2);

bulkInsertTalentsOld("1.16.1t", "paladin", "Retribution", [
    {
        id: "blessing_of_kings",
        name: "Blessing of Kings",
        icon: "spell_magic_magearmor",
        row: 2,
        col: 2,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Places a Blessing on the friendly target, increasing total stats by 10% for 5 min.  Players may only have one Blessing on them per Paladin at any one time."
        ]
    },
    {
        id: "sanctified_command",
        name: "Sanctified Command",
        icon: "ability_warrior_innerrage",
        row: 4,
        col: 3,
        ranks: 2,
        requiresTalents: "seal_of_command",
        description: [
            "Gives your Seal of Command a {value1}% chance to resist dispel effects and your Judgement of Command will restore mana equal to {value2}% of the base mana cost of the Seal of Command to you and nearby party members.",
            {
                value1: [45, 90],
                value2: [10, 20]
            }
        ]
    }
]);

removeTalentsByIdOld("1.16.1t", "priest", "Discipline", [
    "divine_spirit"
]);

moveTalentOld("1.16.1t", "priest", "Discipline", "meditation", 2, 3);

bulkInsertTalentsOld("1.16.1t", "priest", "Discipline", [
    {
        id: "reflective_shield",
        name: "Reflective Shield",
        icon: "classic_spell_holy_blessingofprotection",
        row: 4,
        col: 2,
        ranks: 1,
        requiresTalents: "improved_power_word_shield",
        description: [
            "Causes 20% of the damage absorbed by your Power Word: Shield to reflect back at the attacker. This damage causes no threat."
        ]
    }
]);

removeTalentsByIdOld("1.16.1t", "priest", "Holy", [
    "lightwell"
]);

bulkInsertTalentsOld("1.16.1t", "priest", "Holy", [
    {
        id: "proclaim_champion",
        name: "Proclaim Champion",
        icon: "spell_holy_proclaimchampion_02",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "spirit_of_redemption",
        description: [
            "Proclaim the friendly target as your champion for 2 hours. Increases armor by 230, all resistances by 10 and allows the use of various Champion spells on that target. Only one Champion can be proclaimed at a time."
        ]
    }
]);

replaceTalentOld("1.16.1t", "priest", "Shadow", "improved_vampiric_embrace", {
    name: "Vampiric Touch",
    description: [
        "Increases the percentage healed by Vampiric Embrace by an additional {value1}% and your Vampiric Embrace now causes all party members to also gain mana equal to {value2}% of any Shadow spell damage you deal.",
        {
            value1: [2, 5],
            value2: [1, 2]
        }
    ]
});

removeTalentsByIdOld("1.16.1t", "rogue", "Combat", [
    "dagger_specialization",
    "fist_weapon_specialization"
]);

bulkInsertTalentsOld("1.16.1t", "rogue", "Combat", [
    {
        id: "close_quarters_combat",
        name: "Close Quarters Combat",
        icon: "inv_weapon_shortblade_05",
        row: 3,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases your chance to get a critical strike with Daggers and Fist Weapons by {value}%.",
            {
                value: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        id: "throwing_weapon_specialization",
        name: "Throwing Weapon Specialization",
        icon: "inv_throwingknife_01",
        row: 4,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the range of Throw and Deadly Throw by {value1} yards and gives your Deadly Throw a {value2}% chance to interrupt the target for 3 sec.",
            {
                value1: [3, 6],
                value2: [50, 100]
            }
        ]
    }
]);

replaceTalentOld("1.16.1t", "rogue", "Subtlety", "improved_sap", {
    description: [
        "Gives you a {value}% chance to return to stealth mode after using your Sap ability.",
        {
            value: [50, 100]
        }
    ]
});

removeTalentsByIdOld("1.16.1t", "shaman", "Enhancement", [
    "two_handed_axes_and_maces",
    "anticipation",
    "toughness",
    "parry"
]);

moveTalentOld("1.16.1t", "shaman", "Enhancement", "improved_lightning_shield", 1, 2);
moveTalentOld("1.16.1t", "shaman", "Enhancement", "improved_ghost_wolf", 1, 3);

replaceTalentOld("1.16.1t", "shaman", "Enhancement", "stormstrike", {
    row: 4,
    col: 2,
    requiresTalents: null
});

bulkInsertTalentsOld("1.16.1t", "shaman", "Enhancement", [
    {
        id: "thunderhead",
        name: "Thunderhead",
        icon: "spell_nature_swiftness",
        row: 2,
        col: 2,
        ranks: 1,
        requiresTalents: "improved_lightning_shield",
        description: [
            "Allows your Lightning Shield to be cast on allies and reduces its mana cost by 20%."
        ]
    },
    {
        id: "ancestral_guidance",
        name: "Ancestral Guidance",
        icon: "spell_nature_ancestralguardian",
        row: 2,
        col: 3,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases your armor value from items by {value1}% and chance to dodge by an additional {value2}%.",
            {
                value1: [2, 4, 6, 8, 10],
                value2: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        id: "spirit_armor",
        name: "Spirit Armor",
        icon: "spell_nature_spiritarmor",
        row: 3,
        col: 2,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases the armor gained from Shields by {value}%.",
            {
                value: [10, 20, 30]
            }
        ]
    },
    {
        id: "bloodlust",
        name: "Bloodlust",
        icon: "spell_nature_bloodlust",
        row: 6,
        col: 1,
        ranks: 1,
        requiresTalents: "elemental_weapons",
        description: [
            "Increases melee, ranged, and spell casting speed by 15% for a party member within 30 yards. Lasts 15 sec."
        ]
    }
]);

removeTalentsByIdOld("1.16.1t", "warlock", "Affliction", [
    "improved_drain_life",
    "improved_drain_mana"
]);

bulkInsertTalentsOld("1.16.1t", "warlock", "Affliction", [
    {
        id: "soul_siphon",
        name: "Soul Siphon",
        icon: "spell_shadow_lifedrain02",
        row: 1,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the Health drained by your Drain Life spell by {value1}% and causes {value2}% of the mana drained by your Drain Mana spell to damage the opponent.",
            {
                value1: [5, 10],
                value2: [15, 30]
            }
        ]
    }
]);

removeTalentsByIdOld("1.16.1t", "warlock", "Demonology", [
    "improved_healthstone",
    "improved_firestone",
    "improved_spellstone"
]);

replaceTalentOld("1.16.1t", "warlock", "Demonology", "fel_intellect", {
    ranks: 3,
    description: [
        "Increases the maximum Mana of your Imp, Voidwalker, Succubus, and Felhound by {value}%.",
        {
            value: [5, 10, 15]
        }
    ]
});

replaceTalentOld("1.16.1t", "warlock", "Demonology", "fel_stamina", {
    ranks: 3,
    description: [
        "Increases the maximum Health of your Imp, Voidwalker, Succubus, and Felhound by {value}%.",
        {
            value: [5, 10, 15]
        }
    ]
});

replaceTalentOld("1.16.1t", "warlock", "Demonology", "improved_enslave_demon", {
    ranks: 2,
    description: [
        "Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by {value}%, reduces the resist chance by {value}%.",
        {
            value: [10, 20]
        }
    ]
});

bulkInsertTalentsOld("1.16.1t", "warlock", "Demonology", [
    {
        id: "master_conjuror",
        name: "Master Conjuror",
        icon: "inv_stone_04",
        row: 0,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Increases the amount of Health restored by your Healthstone by {value1}% and increases the bonuses and effects of your Firestones and Spellstones by {value2}%.",
            {
                value1: [10, 20],
                value2: [15, 30]
            }
        ]
    },
    {
        id: "demonic_aegis",
        name: "Demonic Aegis",
        icon: "spell_shadow_ragingscream",
        row: 2,
        col: 3,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases the effectiveness of your Demon Skin and Demon Armor spells by {value}%.",
            {
                value: [10, 20, 30]
            }
        ]
    }
]);

replaceTalentOld("1.16.1t", "warlock", "Destruction", "intensity", {
    description: [
        "Gives you a {value}% chance to resist interruption caused by damage while casting or channeling any Destruction Fire spell.",
        {
            value: [35, 70]
        }
    ]
});

replaceTalentOld("1.16.1t", "warlock", "Destruction", "pyroclasm", {
    description: [
        "Gives your Rain of Fire, Hellfire, Conflagrate, and Soul Fire spells a {value}% chance to stun the target for 3 sec.",
        {
            value: [13, 25]
        }
    ]
});

removeTalentsByIdOld("1.16.1t", "warrior", "Arms", [
    "axe_specialization",
    "polearm_specialization"
]);

replaceTalentOld("1.16.1t", "warrior", "Arms", "improved_thunder_clap", {
    description: [
        "Reduces the cost of your Thunder Clap ability by {value1} and increases the damage by {value2}%.",
        {
            value1: ["1 rage point", "2 rage points", "4 rage points"],
            value2: [20, 40, 60]
        }
    ]
});

bulkInsertTalentsOld("1.16.1t", "warrior", "Arms", [
    {
        id: "poleaxe_specialization",
        name: "Poleaxe Specialization",
        icon: "inv_axe_06",
        row: 4,
        col: 0,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Increases your chance to get a critical strike with Axes and Polearms by {value}%.",
            {
                value: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        id: "improved_disciplines",
        name: "Improved Disciplines",
        icon: "ability_warrior_improveddisciplines",
        row: 5,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Reduces the cooldown of your Retaliation, Recklessness and Shield Wall abilities by {value} min.",
            {
                value: [2, 4, 6]
            }
        ]
    }
]);

replaceTalentOld("1.16.1t", "warrior", "Protection", "improved_shield_block", {
    ranks: 1,
    description: [
        "Allows your Shield Block ability to block an additional attack and increases the duration by 1 second."
    ]
});

// turtle wow changes (1.17.2)

removeTalentsByIdOld("1.17.2t", "hunter", "Survival", [
    "monster_slaying",
    "humanoid_slaying"
]);

replaceTalentOld("1.17.2t", "hunter", "Survival", "entrapment", {
    ranks: 3,
    description: [
        "Gives your Immolation Trap, Frost Trap, and Explosive Trap a {value}% chance to entrap the target, preventing them from moving for 5 sec.",
        {
            value: [8, 16, 25]
        }
    ]
});

replaceTalentOld("1.17.2t", "hunter", "Survival", "improved_feign_death", {
    description: [
        "Reduces the chance your Feign Death ability will be resisted by {value}%.",
        {
            value: [4, 8]
        }
    ]
});

bulkInsertTalentsOld("1.17.2t", "hunter", "Survival", [
    {
        id: "improved_slaying",
        name: "Improved Slaying",
        icon: "spell_holy_prayerofhealing",
        row: 0,
        col: 0,
        ranks: 3,
        requiresTalents: null,
        description: [
            "Increases all damage caused against Beasts, Giants, Dragonkin, and Humanoid targets by {value}% and increases critical damage caused against Beasts, Giants, Dragonkin, and Humanoid targets by an additional {value}%.",
            {
                value: [1, 2, 3]
            }
        ]
    },
    {
        id: "resourcefulness",
        name: "Resourcefulness",
        icon: "inv_misc_book_08",
        row: 0,
        col: 1,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Reduces the Mana cost of all traps and melee abilities by {value}%.",
            {
                value: [2, 4, 6, 8, 10]
            }
        ]
    },
    {
        id: "vicious_bite",
        name: "Vicious Bite",
        icon: "ability_hunter_swiftstrike",
        row: 5,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Your Mongoose Bite now deals {value}% additional weapon damage.",
            {
                value: [15, 30]
            }
        ]
    }
]);

// project epoch changes (launch)

bulkInsertTalentsOld("1.0.0e", "druid", "Restoration", [
    {
        id: "overgrowth",
        name: "Overgrowth",
        icon: "ability_druid_replenish",
        row: 2,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Applies Rejuvenation (Rank 3) to your friendly target and that target's party members within 25 yards.",
            {
                value: [10, 20]
            }
        ]
    }
]);

removeTalentsByIdOld("1.0.0e", "mage", "Arcane", [
    "arcane_fortitude",
    "improved_blink"
]);

replaceTalentOld("1.0.0e", "mage", "Arcane", "arcane_impact", {
    description: [
        "Increases the critical strike chance of your Arcane spells by an additional {value}%.",
        {
            value: [2, 4, 6]
        }
    ]
});

replaceTalentOld("1.0.0e", "mage", "Arcane", "improved_mana_shield", {
    name: "Improved Shielding",
    description: [
        "Decreases the mana lost per point of damage taken when Mana Shield is active by {value1}%, and increases the resistances gained from Mage Armor by {value2}%.",
        {
            value1: [10, 20],
            value2: [50, 100]
        }
    ]
});

bulkInsertTalentsOld("1.0.0e", "mage", "Arcane", [
    {
        id: "arcane_blast",
        name: "Arcane Blast",
        icon: "spell_arcane_blast",
        row: 2,
        col: 3,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Blasts the target with energy, dealing 199 Arcane damage.  Each time you cast Arcane Blast, the casting time is reduced while mana cost is increased.  Effect stacks up to 3 times and lasts 8 sec."
        ]
    },
    {
        id: "improved_arcane_intellect",
        name: "Improved Arcane Intellect",
        icon: "spell_holy_magicalsentry",
        row: 4,
        col: 0,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Your Arcane Intellect and Arcane Brilliance spells also increase the target's maximum mana by {value}%.",
            {
                value: [4, 8]
            }
        ]
    }
]);

bulkInsertTalentsOld("1.0.0e", "mage", "Fire", [
    {
        id: "pyroclastic_burst",
        name: "Pyroclastic Burst",
        icon: "spell_fire_volcano",
        row: 4,
        col: 3,
        ranks: 2,
        requiresTalents: "blast_wave",
        description: [
            "Your Fire spell criticals have a {value}% chance to increase the damage of your next Pyroblast by 10%, stacking up to 5 times. You cannot cast Presence of Mind while this effect is active.",
            {
                value: [50, 100]
            }
        ]
    }
]);

bulkInsertTalentsOld("1.0.0e", "paladin", "Holy", [
    {
        id: "overwhelming_light",
        name: "Overwhelming Light",
        icon: "spell_holy_divineprovidence",
        row: 3,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
            "When your Holy Light, Flash of Light, or Holy Shock spells heal a target to full health, 3 nearby injured allies will be healed by an amount equal to {value}% of the healing effect.",
            {
                value: [10, 20]
            }
        ]
    }
]);

moveTalentOld("1.0.0e", "paladin", "Protection", "anticipation", 3, 2);
moveTalentOld("1.0.0e", "paladin", "Protection", "improved_concentration_aura", 2, 3);

removeTalentsByIdOld("1.0.0e", "priest", "Discipline", [
    "divine_spirit"
]);

moveTalentOld("1.0.0e", "priest", "Discipline", "improved_divine_spirit", 4, 2);
moveTalentOld("1.0.0e", "priest", "Discipline", "improved_mana_burn", 3, 2);

replaceTalentOld("1.0.0e", "priest", "Discipline", "pain_suppression", {
    row: 4,
    col: 3,
    requiresTalents: "martyrdom",
    description: [
        "Instantly reduces a friendly target's threat by 5%, reduces all damage taken by 40% and increases resistance to Dispel mechanics by 65% for 8 sec."
    ]
});

bulkInsertTalentsOld("1.0.0e", "priest", "Discipline", [
    {
        id: "power_word_barrier",
        name: "Power Word: Barrier",
        icon: "spell_holy_powerwordbarrier",
        row: 8,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Create a barrier around you, absorbing damage dealt to all party and raid members within it. The barrier lasts for 10 sec or until it absorbs 3935 damage, increased by up to 250% when affecting a large group. Priest must channel to maintain the spell."
        ]
    }
]);

moveTalentOld("1.0.0e", "priest", "Holy", "inspiration", 3, 1);
moveTalentOld("1.0.0e", "priest", "Holy", "holy_reach", 3, 2);
moveTalentOld("1.0.0e", "priest", "Holy", "improved_healing", 2, 3);
moveTalentOld("1.0.0e", "priest", "Holy", "searing_light", 2, 2);

moveTalentOld("1.0.0e", "rogue", "Assassination", "improved_expose_armor", 5, 0);

bulkInsertTalentsOld("1.0.0e", "rogue", "Assassination", [
    {
        id: "poisoned_knife",
        name: "Poisoned Knife",
        icon: "inv_throwingknife_04",
        row: 2,
        col: 1,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Throw and Deadly Throw now have a {value}% chance to consume 10 minutes of your off-hand weapon's poison to apply it to the target.",
            {
                value: [50, 100]
            }
        ]
    }
]);

bulkInsertTalentsOld("1.0.0e", "rogue", "Combat", [
    {
        id: "axe_specialization",
        name: "Axe Specialization",
        icon: "inv_axe_06",
        row: 3,
        col: 3,
        ranks: 5,
        requiresTalents: null,
        description: [
            "Gives you a {value}% chance to cause your target to bleed for 100% weapon damage over 15 sec after hitting them with an Axe.",
            {
                value: [1, 2, 3, 4, 5]
            }
        ]
    }
]);

removeTalentsByIdOld("1.0.0e", "shaman", "Elemental", [
    "eye_of_the_storm"
]);

bulkInsertTalentsOld("1.0.0e", "shaman", "Elemental", [
    {
        id: "rolling_thunder",
        name: "Rolling Thunder",
        icon: "spell_shaman_thunderstorm",
        row: 3,
        col: 1,
        ranks: 3,
        requiresTalents: null,
        description: [
            "If you have an active Lightning Shield, your critical hits with Lightning Bolt and Chain Lightning have a {value1}% chance to cause your Lightning Shield to gain an additional charge, up to 9. When you reach 9 charges, any attempt to gain another charge will instead launch a Lightning Shield ball at your target.<br><br>When you have more than 3 Lightning Shield charges active, your Earth Shock spell will consume up to {value3}.",
            {
                value1: [33, 66, 100],
                value2: [1, 2, 3],
                value3: ["1 surplus charge after 2 sec, sending it at your target", "2 surplus charges every 2 sec for up to 4 sec, sending them at your target", "3 surplus charges every 2 sec for up to 6 sec, sending them at your target"]
            }
        ]
    }
]);

replaceTalentOld("1.0.0e", "shaman", "Elemental", "elemental_focus", {
    description: [
        "After landing a critical strike with a Fire, Frost, or Nature damage spell, you enter a Clearcasting state.  The Clearcasting state reduces the mana cost of your next 2 damage spells or fire totems by 40%."
    ]
});

replaceTalentOld("1.0.0e", "shaman", "Elemental", "call_of_thunder", {
    row: 5,
    col: 2,
    requiresTalents: "lightning_mastery"
});

replaceTalentOld("1.0.0e", "shaman", "Elemental", "lightning_mastery", {
    name: "Fire and Lightning Mastery",
    icon: "shaman_talent_elementalblast",
    row: 2,
    col: 2,
    requiresTalents: null,
    description: [
        "Reduces the cast time of your Molten Blast, Lightning Bolt and Chain Lightning spells by {value} sec.",
        {
            value: [0.1, 0.2, 0.3, 0.4, 0.5]
        }
    ]
});

replaceTalentOld("1.0.0e", "shaman", "Elemental", "lightning_overload", {
    icon: "spell_shaman_lavaflow",
    name: "Elemental Overload",
    description: [
        "Gives your Molten Blast, Lightning Bolt and Chain Lightning spells a {value}% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
        {
            value: [4, 8, 12, 16, 20]
        }
    ]
});

replaceTalentOld("1.0.0e", "shaman", "Enhancement", "spirit_weapons", {
    description: [
        "Gives a chance to parry enemy melee attacks and reduces the threat generated by your melee attacks unless you are wearing a shield by 30%."
    ]
});

replaceTalentOld("1.0.0e", "shaman", "Enhancement", "dual_wield_specialization", {
    name: "Weapon Specialization",
    description: [
        "Increases your chance to hit with all weapons by an additional {value}%.",
        {
            value: [2, 4, 6]
        }
    ]
});

replaceTalentOld("1.0.0e", "shaman", "Enhancement", "dual_wield", {
    name: "Primal Wielding",
    description: [
        "Allows one-hand and off-hand weapons to be equipped in the off-hand.<br><br>Additionally, your Lightning Bolt and Molten Blast spells no longer delay your next melee swing, but deal 50% less damage if cast within 4.5 sec after a melee attack."
    ]
});

replaceTalentOld("1.0.0e", "shaman", "Enhancement", "stormstrike", {
    description: [
        "Instantly attack with your weapon, or both weapons if you are dual wielding.  In addition, the target takes 5% additional Nature damage.  Lasts 12 sec."
    ]
});

replaceTalentOld("1.0.0e", "shaman", "Enhancement", "shamanistic_rage", {
    description: [
        "Reduces all damage taken by 30% and causes your successful melee attacks to regenerate mana (based on weapon speed and attack power).  Lasts 15 sec."
    ]
});

replaceTalentOld("1.0.0e", "shaman", "Restoration", "healing_way", {
    icon: "spell_nature_healingway"
});

bulkInsertTalentsOld("1.0.0e", "warlock", "Affliction", [
    {
        id: "improved_shadow_bite",
        name: "Improved Shadow Bite",
        icon: "spell_shadow_summonfelhunter",
        row: 4,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Your Felhunter regains {value}% of its maximum mana each time it hits with its Shadow Bite ability.",
            {
                value: [5, 10]
            }
        ]
    }
]);

removeTalentsByIdOld("1.0.0e", "warlock", "Demonology", [
    "demonic_sacrifice"
]);

bulkInsertTalentsOld("1.0.0e", "warlock", "Demonology", [
    {
        id: "demonic_empowerment",
        name: "Demonic Empowerment",
        icon: "ability_warlock_demonicempowerment",
        row: 4,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Grants the Warlock's summoned demon Empowerment.<br><br>Imp - Increases the Imp's spell critical strike chance by 20% for 30 sec.<br><br>Voidwalker - Increases the Voidwalker's health by 20%, and its threat generated from spells and attacks by 20% for 20 sec.<br><br>Succubus - Instantly vanishes, causing the demon to go into an improved Invisibility state. The vanish effect removes all stuns, snares and movement impairing effects from the demon.<br><br>Felhunter - Dispels all magical effects from the Felhunter.<br><br>Felguard - Increases the Felguard's attack speed by 20% and breaks all stun, snare and movement impairing effects and makes your Felguard immune to them for 15 sec."
        ]
    }
]);

replaceTalentOld("1.0.0e", "warlock", "Demonology", "soul_link", {
    requiresTalents: "demonic_empowerment"
});

replaceTalentOld("1.0.0e", "warlock", "Destruction", "pyroclasm", {
    requiresTalents: null
});

replaceTalentOld("1.0.0e", "warlock", "Destruction", "shadowfury", {
    row: 4,
    col: 3,
    requiresTalents: null,
    description: [
        "Shadowfury is unleashed, causing 156 Shadow damage and stunning all enemies within 8 yds for 3 sec."
    ]
});

bulkInsertTalentsOld("1.0.0e", "warlock", "Destruction", [
    {
        id: "demonic_sacrifice",
        name: "Demonic Sacrifice",
        icon: "spell_shadow_psychicscream",
        row: 8,
        col: 1,
        ranks: 1,
        requiresTalents: "shadow_and_flame",
        description: [
            "When activated, sacrifices your summoned demon to grant you an effect that lasts 30 min.  The effect is canceled if any Demon is summoned.<br><br>Imp: Increases your Fire damage by 15%.<br><br>Voidwalker: Restores 2% of total health every 4 sec.<br><br>Succubus: Increases your Shadow damage by 15%.<br><br>Felhunter: Restores 3% of total mana every 4 sec.<br><br>Felguard: Increases your Shadow damage by 10% and restores 2% of total mana every 4 sec."
        ]
    }
]);

removeTalentsByIdOld("1.0.0e", "warrior", "Fury", [
    "death_wish",
    "improved_mortal_strike"
]);

bulkInsertTalentsOld("1.0.0e", "warrior", "Arms", [
    {
        id: "improved_slam",
        name: "Improved Slam",
        icon: "ability_warrior_decisivestrike",
        row: 3,
        col: 3,
        ranks: 2,
        requiresTalents: null,
        description: [
            "Decreases the casting time of your Slam ability by {value} sec.",
            {
                value: [0.5, 1]
            }
        ]
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
        ]
    },
    {
        id: "empowered_rend",
        name: "Empowered Rend",
        icon: "ability_warrior_bloodbath",
        row: 7,
        col: 2,
        ranks: 2,
        requiresTalents: null,
        description: [
            "The damage dealt by Rend is {value} sec faster.",
            {
                value: [0.5, 1]
            }
        ]
    },
    {
        id: "bladestorm",
        name: "Bladestorm",
        icon: "ability_warrior_bladestorm",
        row: 8,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
            "Instantly Whirlwind up to 4 nearby targets and for the next 6 sec you will perform a whirlwind attack every 1 sec.  While under the effects of Bladestorm, you can move but cannot perform any other abilities but you do not feel pity or remorse or fear, you cannot be stopped unless killed and your movement speed cannot be reduced below 60%."
        ]
    }
]);

replaceTalentOld("1.0.0e", "warrior", "Arms", "mortal_strike", {
    requiresTalents: "sweeping_strikes"
});

replaceTalentOld("1.0.0e", "warrior", "Arms", "endless_rage", {
    row: 7,
    ranks: 3,
    description: [
        "You generate {value}% more rage from damage dealt.",
        {
            value: [8, 16, 25]
        }
    ]
});

removeTalentsByIdOld("1.0.0e", "warrior", "Fury", [
    "improved_slam",
    "sweeping_strikes"
]);

moveTalentOld("1.0.0e", "warrior", "Fury", "dual_wield_specialization", 3, 1);
moveTalentOld("1.0.0e", "warrior", "Fury", "improved_execute", 4, 0);

bulkInsertTalentsOld("1.0.0e", "warrior", "Fury", [
    {
        id: "death_wish",
        name: "Death Wish",
        icon: "spell_shadow_deathpact",
        row: 4,
        col: 1,
        ranks: 1,
        requiresTalents: null,
        description: [
            "When activated, increases your physical damage by 20% and makes you immune to Fear effects, but increases all damage taken by 5%.  Lasts 30 sec."
        ]
    }
]);

replaceTalentOld("1.0.0e", "warrior", "Fury", "bloodthirst", {
    requiresTalents: "death_wish"
});

/*
talentsAttributedByVersion["1.6"].hunter.Survival.push({
    id: "precision",
    name: "Precision",
    icon: "ability_rogue_ambush",
    row: 0,
    col: 1,
    ranks: 5,
    requiresTalents: null,
    description: [
        "Increases your chance to hit with melee weapons by {value}%.",
        {
        value: [1, 2, 3, 4, 5]
        }
    ]
});

talentsAttributedByVersion["1.6"].hunter.Survival.push({
    id: "improved_raptor_strike",
    name: "Improved Raptor Strike",
    icon: "ability_meleedamage",
    row: 0,
    col: 2,
    ranks: 5,
    requiresTalents: null,
    description: [
        "Reduces the cooldown of your Raptor Strike by {value} second(s).",
        {
        value: [0.2, 0.4, 0.6, 0.8, 1]
        }
    ]
});

talentsAttributedByVersion["1.6"].hunter.Survival.push({
    id: "lightning_reflexes",
    name: "Lightning Reflexes",
    icon: "spell_nature_invisibilty",
    row: 1,
    col: 1,
    ranks: 3,
    requiresTalents: null,
    description: [
        "Increases your Dodge chance by {value}%.",
        {
        value: [1, 2, 3]
        }
    ]
});

talentsAttributedByVersion["1.6"].hunter.Survival.push({
    id: "improved_mongoose_bite",
    name: "Improved Mongoose Bite",
    icon: "ability_hunter_swiftstrike",
    row: 2,
    col: 1,
    ranks: 5,
    requiresTalents: "lightning_reflexes",
    description: [
        "Increases the damage done by your Mongoose Bite ability by {value}%.",
        {
        value: [4, 8, 12, 16, 20]
        }
    ]
});

talentsAttributedByVersion["1.6"].hunter.Survival.push({
    id: "lacerate",
    name: "Lacerate",
    icon: "ability_gouge",
    row: 6,
    col: 1,
    ranks: 1,
    requiresTalents: "savage_strikes",
    description: [
        "Wounds the target, causing them to bleed for 77 damage over 21 seconds."
    ]
});
*/

// Add new talent to custom version
/*
talentsAttributedByVersion["custom"].druid.Balance.push({
    id: "stellar_flare",
    name: "Stellar Flare",
    icon: "spell_arcane_arcane01",
    row: 7,
    col: 1,
    ranks: 1,
    requiresTalents: "moonkin_form"
});
*/

// Override a talent in TBC
/*
talentsAttributedByVersion["2.4"].druid.Balance.push({
    id: "force_of_nature",
    name: "Force of Nature",
    icon: "ability_druid_forceofnature",
    row: 7,
    col: 1,
    ranks: 1,
    requiresTalents: "moonkin_form"
});
*/