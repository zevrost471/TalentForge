import {
  removeTalentsById,
  removeTalentsByIdOld,
  removeTalentsByIdFrom,
  replaceTalent,
  replaceTalentOld,
  replaceTalentFrom,
  moveTalent,
  moveTalentOld,
  moveTalentFrom,
  insertTalent,
  insertTalentOld,
  insertTalentFrom,
  bulkInsertTalents,
  bulkInsertTalentsOld,
  replaceTalentTreeOld,
} from './talent-utils.js';
// import { foreverTalents } from './db/forever-talents.js';

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
  "moonkin_form",
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
      value: [5, 10, 15, 20, 25],
    },
  ],
});

replaceTalent("1.7", "druid", "Balance", "omen_of_clarity", {
  icon: "spell_shadow_manaburn",
  requiresTalents: null,
});

replaceTalent("1.7", "druid", "Balance", "vengeance", {
  row: 5,
  col: 1,
  requiresTalents: "natures_grace",
});

replaceTalent("1.7", "druid", "Balance", "moonglow", {
  row: 3,
  col: 1,
  ranks: 5,
  requiresTalents: "improved_moonfire",
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
        value: [0.5, 1, 1.5],
      },
    ],
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
        value: [2, 4, 6, 8, 10],
      },
    ],
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
      "Creates a violent storm in the area surrounding the caster, causing 53 Nature damage to all nearby enemies every 1 second, and reducing the attack speed of all nearby enemies by 20%. Lasts 10 seconds.",
    ],
  },
]);

removeTalentsById("1.7", "druid", "Feral Combat", [
  "faerie_fire_feral",
  "leader_of_the_pack",
]);

replaceTalent("1.7", "druid", "Feral Combat", "feral_aggression_old", {
  description: [
    "Increases the Attack Power reduction of your Demoralizing Roar by {value}%.",
    {
      value: [5, 10, 15, 20, 25],
    },
  ],
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
    "Reduces the chance enemies have to detect you while Prowling. More effective than Improved Prowl (Rank 4).",
  ],
});

replaceTalent("1.7", "druid", "Feral Combat", "brutal_impact", {
  name: "Improved Bash",
  description: [
    "Increases the stun duration of your Bash ability by 0.5 seconds.",
    "Increases the stun duration of your Bash ability by 1 second.",
  ],
});

replaceTalent("1.7", "druid", "Feral Combat", "thick_hide", {
  row: 4,
  col: 0,
  description: [
    "Increases your Armor rating from items while in Bear form by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

replaceTalent("1.7", "druid", "Feral Combat", "feline_swiftness", {
  row: 4,
  col: 2,
  ranks: 1,
  description: [
    "Increases your movement speed by 30% while in Cat form. Only active outdoors.",
  ],
});

replaceTalent("1.7", "druid", "Feral Combat", "feral_charge", {
  description: [
    "Causes you to charge an enemy, stopping its movement and interrupting any spell being cast for 4 seconds.",
  ],
});

replaceTalent("1.7", "druid", "Feral Combat", "sharpened_claws", {
  row: 1,
  col: 2,
  ranks: 5,
  description: [
    "Increases your critical strike chance while in Bear or Cat form by {value}%.",
    {
      value: [1, 2, 3, 4, 5],
    },
  ],
});

replaceTalent("1.7", "druid", "Feral Combat", "blood_frenzy", {
  row: 2,
  col: 2,
  ranks: 5,
  description: [
    "Your critical strikes from Cat form abilities that add combo points have a {value}% chance to add an additional combo point.",
    {
      value: [20, 40, 60, 80, 100],
    },
  ],
});

replaceTalent("1.7", "druid", "Feral Combat", "primal_fury", {
  row: 2,
  col: 3,
  ranks: 5,
  description: [
    "Gives you a {value}% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear form.",
    {
      value: [20, 40, 60, 80, 100],
    },
  ],
});

replaceTalent("1.7", "druid", "Feral Combat", "improved_shred", {
  description: [
    "Reduces the Energy cost of your Shred ability by {value}.",
    {
      value: [5, 10],
    },
  ],
});

replaceTalent("1.7", "druid", "Feral Combat", "predatory_strikes", {
  ranks: 5,
  description: [
    "Increases the Attack Power bonus from your Cat form ability by {value}%.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

replaceTalent("1.7", "druid", "Feral Combat", "savage_fury", {
  name: "Improved Ravage",
  row: 5,
  col: 2,
  description: [
    "Increases the critical strike chance of your Ravage ability by {value}%.",
    {
      value: [5, 10],
    },
  ],
});

replaceTalent("1.7", "druid", "Feral Combat", "heart_of_the_wild", {
  name: "Strength of the Wild",
  ranks: 4,
  description: [
    "Increases your Strength while in Bear or Cat form by {value}%.",
    {
      value: [3, 6, 9, 12],
    },
  ],
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
      "Decrease the armor of the target by 175 for 40 seconds. While affected, the target cannot stealth or turn invisible.",
    ],
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
      "Decrease the armor of the target by 175 for 40 seconds. While affected, the target cannot stealth or turn invisible.",
    ],
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
      "Reduces the Mana cost of your shapeshifting abilities by 25%.",
    ],
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
        value: [50, 100],
      },
    ],
  },
]);

removeTalentsById("1.7", "druid", "Restoration", [
  "insect_swarm",
  "tranquil_spirit",
  "swiftmend",
]);

replaceTalent("1.7", "druid", "Restoration", "improved_mark_of_the_wild", {
  description: [
    "Increases the effects of your Mark of the Wild spell by {value}%.",
    {
      value: [7, 14, 21, 28, 35],
    },
  ],
});

replaceTalent("1.7", "druid", "Restoration", "furor", {
  description: [
    "Gives you a {value}% chance to gain 10 Rage when you shapeshift into Bear Form.",
    {
      value: [20, 40, 60, 80, 100],
    },
  ],
});

replaceTalent("1.7", "druid", "Restoration", "natures_focus", {
  row: 1,
  col: 0,
  description: [
    "Gives you a {value}% chance to avoid interruption caused by damage while casting the Healing Touch or Regrowth spells.",
    {
      value: [12, 24, 36, 48, 60],
    },
  ],
});

replaceTalent("1.7", "druid", "Restoration", "improved_healing_touch", {
  row: 1,
  col: 1,
  description: [
    "Reduces the mana cost of your Healing Touch spell by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent("1.7", "druid", "Restoration", "natures_swiftness", {
  requiresTalents: "natures_focus",
});

replaceTalent("1.7", "druid", "Restoration", "improved_enrage", {
  requiresTalents: "furor",
  description: [
    "Reduces the time required to generate Rage from your Enrage ability by {value} seconds and slightly reduces the Armor penalty.",
    {
      value: [2, 4],
    },
  ],
});

replaceTalent("1.7", "druid", "Restoration", "reflection", {
  row: 3,
  col: 1,
  ranks: 5,
  description: [
    "Allows {value}% of your Mana regeneration to continue while casting.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent("1.7", "druid", "Restoration", "gift_of_nature", {
  row: 2,
  col: 2,
  ranks: 1,
  requiresTalents: null,
  description: [
    "Increases the effect of your Healing Touch, Rejuvenation, Regrowth, and Tranquility spells by 5%.",
  ],
});

replaceTalent("1.7", "druid", "Restoration", "improved_rejuvenation", {
  ranks: 5,
  description: [
    "Increases the effect of your Rejuvenation spell by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent("1.7", "druid", "Restoration", "subtlety", {
  row: 4,
  col: 2,
  requiresTalents: "gift_of_nature",
  description: [
    "Reduces the threat generated by your healing spells by {value}%.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
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
        value: [2, 4, 6, 8, 10],
      },
    ],
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
        value: [20, 40, 60, 80, 100],
      },
    ],
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
      "Increases the target's Mana regeneration by 400% and allows 100% of the target's Mana regeneration to continue while casting.  Lasts 20 seconds.",
    ],
  },
]);

removeTalentsById("1.6", "hunter", "Beast Mastery", ["bestial_wrath"]);

replaceTalent("1.6", "hunter", "Beast Mastery", "thick_hide", {
  row: 3,
  col: 0,
  ranks: 5,
  description: [
    "Increases the Armor rating of your pets by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

replaceTalent("1.6", "hunter", "Beast Mastery", "improved_revive_pet", {
  row: 2,
  col: 0,
  description: [
    "Reduces the casting time of your Revive Pet spell by {value}%.",
    {
      value: [2, 4],
    },
  ],
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
      value: [1, 2, 3, 4, 5],
    },
  ],
});

replaceTalent("1.6", "hunter", "Beast Mastery", "improved_mend_pet", {
  description: [
    "Increases the amount healed by your Mend Pet spell by {value}%.",
    {
      value: [5, 10],
    },
  ],
});

replaceTalent("1.6", "hunter", "Beast Mastery", "intimidation", {
  row: 4,
  col: 0,
  description: [
    "Increases the threat caused by your pet by 50% for 10 seconds.",
  ],
});

replaceTalent("1.6", "hunter", "Beast Mastery", "spirit_bond_old", {
  row: 6,
  col: 1,
  ranks: 1,
  requiresTalents: "improved_mend_pet",
  description: ["Every time your pet strikes an enemy, you gain 20 health."],
});

replaceTalent("1.6", "hunter", "Beast Mastery", "bestial_discipline", {
  row: 1,
  col: 2,
  ranks: 5,
  description: [
    "Increases the maximum Focus of your pets by {value}%.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
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
  col: 1,
});

replaceTalent("1.6", "hunter", "Marksmanship", "barrage", {
  row: 2,
  col: 3,
  ranks: 2,
  description: [
    "Increases the damage done by your Multi-Shot and Volley spells by {value}%.",
    {
      value: [5, 10],
    },
  ],
});

replaceTalent("1.6", "hunter", "Marksmanship", "trueshot_aura", {
  requiresTalents: "hawk_eye",
});

replaceTalent("1.6", "hunter", "Marksmanship", "scatter_shot", {
  description: [
    "A short-range shot that deals 50% weapon damage and confuses the target for 4 sec. Any damage caused will remove the effect.",
  ],
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
  "wyvern_sting",
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
  requiresTalents: "deterrence",
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
        value: [1, 2, 3, 4, 5],
      },
    ],
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
        value: [0.2, 0.4, 0.6, 0.8, 1],
      },
    ],
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
        value: [1, 2, 3],
      },
    ],
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
        value: [3, 6, 9, 12, 15],
      },
    ],
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
        value: [4, 8, 12, 16, 20],
      },
    ],
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
        value: [2, 4, 6],
      },
    ],
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
        value: [10, 20],
      },
    ],
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
        value: [1.5, 3],
      },
    ],
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
        value: [1, 2, 3, 4, 5],
      },
    ],
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
        value: [30, 60],
      },
    ],
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
        value: [1, 2, 3, 4, 5],
      },
    ],
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
      "Wounds the target, causing them to bleed for 77 damage over 21 seconds.",
    ],
  },
]);

removeTalentsById("1.10", "mage", "Arcane", [
  "magic_absorption",
  "arcane_resilience",
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
      "While channeling this spell, your mana regeneration is active and increased by 1500%.  Lasts 8 sec.",
    ],
  },
]);

replaceTalent("1.10", "mage", "Arcane", "arcane_subtlety", {
  ranks: 3,
  description: [
    "Reduces the threat generated by your offensive arcane spells by {value}%.",
    {
      value: [20, 30, 40],
    },
  ],
});

replaceTalent("1.10", "mage", "Arcane", "arcane_focus", {
  description: [
    "Reduces the chance that the opponent can resist your arcane spells by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

replaceTalent("1.10", "mage", "Arcane", "wand_specialization", {
  row: 1,
  col: 1,
  ranks: 5,
  description: [
    "Increases your damage with Wands by {value}%.",
    {
      value: [5, 10, 15, 20, 25],
    },
  ],
});

replaceTalent("1.10", "mage", "Arcane", "magic_attunement", {
  name: "Improved Dampen Magic",
  description: [
    "Increases the effect of your Dampen Magic spell by {value}%.",
    {
      value: [25, 50],
    },
  ],
});

replaceTalent("1.10", "mage", "Arcane", "improved_arcane_explosion", {
  ranks: 5,
  description: [
    "Reduces the casting time of your Arcane Explosion by {value} seconds.",
    {
      value: [0.3, 0.6, 0.9, 1.2, 1.5],
    },
  ],
});

replaceTalent("1.10", "mage", "Arcane", "improved_mana_shield", {
  description: [
    "Increases the damage absorbed by your Mana Shield by {value}%.",
    {
      value: [50, 75],
    },
  ],
});

replaceTalent("1.10", "mage", "Arcane", "arcane_meditation", {
  ranks: 5,
  requiresTalents: "evocation",
  description: [
    "Allows {value}% of your Mana regeneration to continue while casting.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent("1.10", "mage", "Arcane", "arcane_mind", {
  requiresTalents: "evocation",
  ranks: 4,
  description: [
    "Increases your maximum Mana by {value}%.",
    {
      value: [2, 4, 6, 8],
    },
  ],
});

replaceTalent("1.10", "mage", "Arcane", "arcane_power", {
  description: [
    "When activated, your spells deal 35% more damage while costing 35% more mana to cast.  This effect lasts 15 sec.",
  ],
});

removeTalentsById("1.10", "mage", "Fire", ["master_of_elements"]);

replaceTalent("1.10", "mage", "Fire", "flame_throwing", {
  col: 3,
});

replaceTalent("1.10", "mage", "Fire", "improved_fire_blast", {
  ranks: 5,
  description: [
    "Reduces the cooldown of your Fire Blast spell by {value}.",
    {
      value: [
        "0.5 seconds",
        "0.8 seconds",
        "1 second",
        "1.3 seconds",
        "1.5 seconds",
      ],
    },
  ],
});

replaceTalent("1.10", "mage", "Fire", "improved_flamestrike", {
  col: 2,
});

replaceTalent("1.10", "mage", "Fire", "pyroblast", {
  col: 1,
  requiresTalents: "improved_fireball",
  description: [
    "Hurls an immense fiery boulder that causes 148 to 195 fire damage and an additional 56 damage over 12 seconds.",
  ],
});

replaceTalent("1.10", "mage", "Fire", "burning_soul", {
  ranks: 3,
  description: [
    "Gives your fire spells a {value}% chance to not lose casting time when you take damage.",
    {
      value: [25, 50, 65],
    },
  ],
});

replaceTalent("1.10", "mage", "Fire", "improved_scorch", {
  ranks: 5,
  description: [
    "Burns the target for an additional {value}% of your Scorch spell damage over 4 seconds.",
    {
      value: [5, 10, 15, 20, 25],
    },
  ],
});

replaceTalent("1.10", "mage", "Fire", "blast_wave", {
  requiresTalents: "improved_flamestrike",
  description: [
    "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 160 to 192 fire damage, and dazing them for 6 seconds.",
  ],
});

replaceTalent("1.10", "mage", "Fire", "fire_power", {
  col: 1,
  requiresTalents: "critical_mass",
  description: [
    "Increases the damage done by your fire spells by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

replaceTalent("1.10", "mage", "Fire", "combustion", {
  requiresTalents: "fire_power",
  description: [
    "When activated, this spell gives your next fire damage spell a 100% critical strike chance.",
  ],
});

removeTalentsById("1.10", "mage", "Frost", ["elemental_precision"]);

replaceTalent("1.10", "mage", "Frost", "frost_warding", {
  name: "Improved Frost Ward",
  row: 3,
  col: 3,
  ranks: 1,
  description: [
    "50% of the damage absorbed by your Frost Ward is added to your mana.",
  ],
});

replaceTalent("1.10", "mage", "Frost", "frostbite", {
  row: 5,
  col: 2,
  ranks: 5,
  description: [
    "Gives your chill effects a {value}% chance to freeze the target for 5 seconds.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent("1.10", "mage", "Frost", "permafrost", {
  row: 0,
  col: 2,
  ranks: 5,
  description: [
    "Increases the duration of your chill effects by {value}.",
    {
      value: [
        "1 second",
        "1.5 seconds",
        "2 seconds",
        "2.5 seconds",
        "3 seconds",
      ],
    },
  ],
});

replaceTalent("1.10", "mage", "Frost", "cold_snap", {
  description: [
    "When activated, this spell finishes the cooldown on all of your cold spells.",
  ],
});

replaceTalent("1.10", "mage", "Frost", "frost_channeling", {
  requiresTalents: "cold_snap",
  description: [
    "Reduces the mana cost of your frost spells by {value}%.",
    {
      value: [5, 10, 15],
    },
  ],
});

replaceTalent("1.10", "mage", "Frost", "winters_chill", {
  row: 1,
  col: 1,
  ranks: 3,
  description: [
    "Increases the power of your chill effects by slowing the target's movement by an additional {value}%.",
    {
      value: [4, 7, 10],
    },
  ],
});

replaceTalent("1.10", "mage", "Frost", "ice_barrier", {
  description: [
    "Instantly shields you, absorbing 455 damage. Lasts 1 minute. While the shield holds, spells will not be interrupted.",
  ],
});

replaceTalent("3.2.0", "mage", "Fire", "burning_determination", {
  description: [
    "When Interrupted or Silenced you have a {value}% chance to become immune to the next Interrupt or Silence mechanic.  Lasts 10 sec.",
    {
      value: [50, 100],
    },
  ],
});

removeTalentsById("1.8", "paladin", "Holy", [
  "healing_light",
  "consecration",
  "unyielding_faith",
  "lasting_judgement",
  "holy_power",
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
        value: [4, 8, 12],
      },
    ],
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
        value: [10, 20],
      },
    ],
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
        value: [4, 8, 12],
      },
    ],
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
        value: [5, 10, 15],
      },
    ],
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
        value2: [6, 12, 18, 24, 30],
      },
    ],
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
      "Increases Holy damage done by party members within 30 yards by 10%.  Players may only have one Aura on them per Paladin at any one time.",
    ],
  },
]);

replaceTalent("1.8", "paladin", "Holy", "divine_strength", {
  row: 5,
  col: 2,
});

replaceTalent("1.8", "paladin", "Holy", "divine_intellect", {
  name: "Divine Wisdom",
  row: 3,
  requiresTalents: "improved_blessing_of_wisdom",
  description: [
    "Increases your total Mana by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

replaceTalent("1.8", "paladin", "Holy", "spiritual_focus", {
  row: 0,
});

replaceTalent("1.8", "paladin", "Holy", "improved_seal_of_righteousness", {
  row: 2,
  col: 1,
  description: [
    "Increases the damage done by your Seal of Righteousness by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent("1.8", "paladin", "Holy", "improved_lay_on_hands", {
  row: 0,
  col: 0,
  description: [
    "Gives the target of your Lay on Hands spell a {value}% bonus to their armor value from items for 1 minute.",
    {
      value: [15, 30],
    },
  ],
});

replaceTalent("1.8", "paladin", "Holy", "illumination", {
  row: 1,
  description: [
    "After getting a critical effect from your Flash of Light or Holy Light spell, gives you a {value}% chance to gain Mana equal to the base cost of the spell.",
    {
      value: [20, 40, 60, 80, 100],
    },
  ],
});

replaceTalent("1.8", "paladin", "Holy", "improved_blessing_of_wisdom", {
  row: 1,
  ranks: 5,
  description: [
    "Increases the effect of your Blessing of Wisdom spell by {value}%.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

replaceTalent("1.8", "paladin", "Holy", "divine_favor", {
  row: 2,
  col: 0,
  requiresTalents: null,
  description: [
    "When activated, gives your next Flash of Light or Holy Light spell a 100% critical effect chance.",
    {
      value: [20, 40, 60, 80, 100],
    },
  ],
});

replaceTalent("1.8", "paladin", "Holy", "holy_shock", {
  requiresTalents: "sanctity_aura",
  description: [
    "Blasts the target with Holy energy, causing 205 to 219 Holy damage.",
  ],
});

removeTalentsById("1.8", "paladin", "Protection", [
  "precision",
  "guardians_favor",
  "blessing_of_kings",
  "improved_righteous_fury",
  "anticipation",
  "improved_hammer_of_justice",
  "improved_concentration_aura",
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
        value: [60, 120],
      },
    ],
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
        value: [3, 6, 9, 12, 15],
      },
    ],
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
        value: ["1 second", "2 seconds", "3 seconds", "4 seconds", "5 seconds"],
      },
    ],
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
        value: [1, 2, 3, 4, 5],
      },
    ],
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
        value: [5, 10],
      },
    ],
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
      "Puts the enemy target in a state of meditation for up to 6 seconds. Any damage caused will awaken the target. Only works against Humanoids.",
    ],
  },
]);

replaceTalent("1.8", "paladin", "Protection", "redoubt", {
  description: [
    "Increases your chance to block attacks with your shield by {value}% after being the victim of a critical strike.  Lasts 10 seconds or 5 blocks.",
    {
      value: [6, 12, 18, 24, 30],
    },
  ],
});

replaceTalent("1.8", "paladin", "Protection", "toughness", {
  col: 2,
});

replaceTalent("1.8", "paladin", "Protection", "shield_specialization", {
  ranks: 5,
  requiresTalents: null,
  description: [
    "Increases the amount of damage absorbed by your shield by {value}%.",
    {
      value: [5, 10, 15, 20, 25],
    },
  ],
});

replaceTalent("1.8", "paladin", "Protection", "blessing_of_sanctuary", {
  row: 2,
  col: 0,
  description: [
    "Places a Blessing on the friendly target, reducing damage dealt from all sources by 7 for 5 minutes. Players may only have one Blessing on them per Paladin at any one time.",
  ],
});

replaceTalent("1.8", "paladin", "Protection", "reckoning", {
  col: 0,
});

replaceTalent(
  "1.8",
  "paladin",
  "Protection",
  "one_handed_weapon_specialization",
  {
    description: [
      "Increases the damage you deal with one-handed melee weapons by {value}%.",
      {
        value: [1, 2, 3, 4, 5],
      },
    ],
  }
);

replaceTalent("1.8", "paladin", "Protection", "holy_shield", {
  row: 4,
  col: 2,
  requiresTalents: "shield_specialization",
  description: [
    "Increases chance to block by 30% for 10 seconds and deals 40 Holy damage for each attack blocked while active. Each block expends a charge. 4 charges.",
  ],
});

removeTalentsById("1.8", "paladin", "Retribution", [
  "improved_judgement",
  "vindication",
  "pursuit_of_justice",
  "eye_for_an_eye",
  "sanctity_aura",
  "repentance",
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
        value: [2, 4, 6, 8, 10],
      },
    ],
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
        value: [1, 2, 3],
      },
    ],
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
      "Consecrates the land beneath the Paladin, doing 120 Holy damage over 8 seconds to enemies who enter the area.",
    ],
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
      "Places a Blessing on the friendly target, increasing total stats by 10% for 5 minutes. Players may only have one Blessing on them per Paladin at any one time.",
    ],
  },
]);

replaceTalent("1.8", "paladin", "Retribution", "improved_blessing_of_might", {
  description: [
    "Increases the Attack Power bonus of your Blessing of Might by {value}%.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

replaceTalent("1.8", "paladin", "Retribution", "benediction", {
  description: [
    "Reduces the Mana cost of your Retribution spells by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent(
  "1.8",
  "paladin",
  "Retribution",
  "improved_seal_of_the_crusader",
  {
    col: 2,
    ranks: 5,
    description: [
      "Increases the Attack Power bonus of your Seal of the Crusader and the Holy damage increase of your Judgement of the Crusader by {value}%.",
      {
        value: [3, 6, 9, 12, 15],
      },
    ],
  }
);

replaceTalent("1.8", "paladin", "Retribution", "deflection", {
  row: 2,
  col: 0,
});

replaceTalent("1.8", "paladin", "Retribution", "conviction", {
  row: 5,
  col: 1,
  requiresTalents: "vengeance",
});

replaceTalent("1.8", "paladin", "Retribution", "seal_of_command", {
  description: [
    "Fills the Paladin with the spirit of command for 30 seconds, giving the Paladin a chance to deal additional Holy damage equal to the damage of the Paladin's weapon.  Only one Seal can be active on the Paladin at any one time.<br><br>Unleashing this Seal's energy will judge an enemy for 30 seconds, causing 24 Holy damage any time the enemy becomes stunned. Only one Judgement per Paladin can be active at any one time.",
  ],
});

replaceTalent("1.8", "paladin", "Retribution", "improved_retribution_aura", {
  ranks: 5,
  requiresTalents: "seal_of_command",
  description: [
    "Increases the damage done by your Retribution Aura by {value}%.",
    {
      value: [5, 10, 15, 20, 25],
    },
  ],
});

replaceTalent(
  "1.8",
  "paladin",
  "Retribution",
  "two_handed_weapon_specialization",
  {
    row: 1,
    col: 1,
    ranks: 5,
    description: [
      "Increases the damage you deal with two-handed melee weapons by {value}%.",
      {
        value: [1, 2, 3, 4, 5],
      },
    ],
  }
);

replaceTalent("1.8", "paladin", "Retribution", "vengeance", {
  row: 2,
  col: 1,
  requiresTalents: null,
  description: [
    "Gives you a {value}% bonus to Physical and Holy damage you deal for 8 seconds after dealing a critical strike.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

removeTalentsById("1.9", "priest", "Discipline", ["power_infusion"]);

replaceTalent("1.9", "priest", "Discipline", "unbreakable_will", {
  description: [
    "Increases your chance to resist Stun, Fear, and Silence effects by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent("1.9", "priest", "Discipline", "wand_specialization", {
  row: 1,
  col: 0,
});

replaceTalent("1.9", "priest", "Discipline", "silent_resolve", {
  row: 0,
  col: 2,
  description: [
    "Reduces the threat generated by your damage spells by {value}%.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

replaceTalent("1.9", "priest", "Discipline", "improved_power_word_fortitude", {
  col: 3,
  description: [
    "Increases the effect of your Power Word: Fortitude spell by {value}%.",
    {
      value: [15, 30],
    },
  ],
});

replaceTalent("1.9", "priest", "Discipline", "improved_power_word_shield", {
  description: [
    "Reduces the duration of your Power Word: Shield's Weakened Soul effect by {value} seconds.",
    {
      value: [5, 10, 15],
    },
  ],
});

replaceTalent("1.9", "priest", "Discipline", "martyrdom", {
  col: 1,
  description: [
    "Gives you a {value}% chance to gain the Focused Casting effect that lasts for 6 seconds after being the victim of a critical strike. The Focused Casting effect prevents you from losing casting time when taking damage.",
    {
      value: [50, 100],
    },
  ],
});

replaceTalent("1.9", "priest", "Discipline", "inner_focus", {
  row: 4,
  col: 2,
  requiresTalents: "mental_agility",
  description: [
    "When activated, reduces the Mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is capable of a critical effect.",
  ],
});

replaceTalent("1.9", "priest", "Discipline", "meditation", {
  row: 4,
  col: 1,
  ranks: 5,
  description: [
    "Allows {value}% of your Mana regeneration to continue while casting.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent("1.9", "priest", "Discipline", "improved_inner_fire", {
  description: [
    "Increases the effects of your Inner Fire spell by {value}%.",
    {
      value: [15, 30, 45],
    },
  ],
});

replaceTalent("1.9", "priest", "Discipline", "mental_agility", {
  row: 2,
  col: 2,
});

replaceTalent("1.9", "priest", "Discipline", "improved_mana_burn", {
  description: [
    "Reduces the casting time of your Mana Burn spell by {value} seconds.",
    {
      value: [0.3, 0.6],
    },
  ],
});

replaceTalent("1.9", "priest", "Discipline", "mental_strength", {
  row: 3,
  col: 1,
});

replaceTalent("1.9", "priest", "Discipline", "divine_spirit", {
  icon: "spell_holy_holyprotection",
  row: 6,
  col: 1,
  requiresTalents: "meditation",
  description: [
    "Holy power infuses the target, increasing their Spirit by 23 for 30 minutes.",
  ],
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
      "While active, you no longer lose casting time from taking damage. Lasts 8 seconds.",
    ],
  },
]);

removeTalentsById("1.9", "priest", "Holy", [
  "healing_focus",
  "spell_warding",
  "blessed_recovery",
  "holy_reach",
  "searing_light",
  "spiritual_guidance",
  "lightwell",
]);

replaceTalent("1.9", "priest", "Holy", "improved_renew", {
  ranks: 5,
  description: [
    "Increases the amount healed by your Renew spell by {value}%.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

replaceTalent("1.9", "priest", "Holy", "divine_fury", {
  row: 4,
  col: 0,
  requiresTalents: "holy_fire",
  description: [
    "Reduces the casting time of your Smite and Holy Fire spells by {value} seconds.",
    {
      value: [0.1, 0.2, 0.3, 0.4, 0.5],
    },
  ],
});

replaceTalent("1.9", "priest", "Holy", "holy_nova", {
  icon: "spell_holy_holybolt",
  row: 6,
  col: 1,
  description: [
    "Causes an explosion of holy light around the caster, causing 80 to 88 Holy damage to all targets within 10 yards. The effect also temporarily reduces your threat level against nearby targets for 5 seconds.",
  ],
});

replaceTalent("1.9", "priest", "Holy", "inspiration", {
  col: 2,
  ranks: 5,
  description: [
    "Increases your target's armor value from items by {value}% for 15 seconds after getting a critical effect from your Flash Heal, Heal, Greater Heal, or Prayer of Healing spell.",
    {
      value: [5, 10, 15, 20, 25],
    },
  ],
});

replaceTalent("1.9", "priest", "Holy", "improved_healing", {
  ranks: 5,
  description: [
    "Reduces the Mana cost of your Lesser Heal, Heal, and Greater Heal spells by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent("1.9", "priest", "Holy", "improved_prayer_of_healing", {
  col: 3,
});

replaceTalent("1.9", "priest", "Holy", "spirit_of_redemption", {
  col: 2,
  description: [
    "Upon death, summons a Spirit of Redemption that heals nearby friendly targets for 318 to 360 and another 343 over 21 seconds.",
  ],
});

replaceTalent("1.9", "priest", "Holy", "spiritual_healing", {
  row: 1,
  col: 2,
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
        value: [2, 4, 6, 8, 10],
      },
    ],
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
      "Consumes the enemy in flames that cause 90 to 116 Fire damage and an additional 28 Fire damage over 8 seconds.",
    ],
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
        value: [4, 8, 12, 16, 20],
      },
    ],
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
        value: [35, 70],
      },
    ],
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
        value: [0.1, 0.2, 0.3, 0.4, 0.5],
      },
    ],
  },
]);

removeTalentsById("1.9", "priest", "Shadow", ["improved_vampiric_embrace"]);

replaceTalent("1.9", "priest", "Shadow", "shadow_affinity", {
  ranks: 5,
  description: [
    "Reduces the threat generated by your Shadow spells by {value}%.",
    {
      value: [5, 10, 15, 20, 25],
    },
  ],
});

replaceTalent("1.9", "priest", "Shadow", "mind_flay", {
  description: [
    "Assault the target's mind with Shadow energy, causing 75 damage over 3 seconds and slowing the target to 50% of their movement speed.",
  ],
});

replaceTalent("1.9", "priest", "Shadow", "improved_fade", {
  description: [
    "Increases the duration of your Fade ability by {value} seconds.",
    {
      value: [5, 10],
    },
  ],
});

replaceTalent("1.9", "priest", "Shadow", "shadow_reach", {
  col: 3,
});

replaceTalent("1.9", "priest", "Shadow", "shadow_weaving", {
  row: 4,
  col: 1,
});

replaceTalent("1.9", "priest", "Shadow", "silence", {
  description: [
    "Silence the target, preventing them from casting spells for 5 seconds.",
  ],
});

replaceTalent("1.9", "priest", "Shadow", "vampiric_embrace", {
  col: 2,
  requiresTalents: "mind_flay",
});

replaceTalent("1.9", "priest", "Shadow", "darkness", {
  col: 1,
  requiresTalents: "shadow_weaving",
});

replaceTalent("1.9", "priest", "Shadow", "shadowform", {
  requiresTalents: null,
  description: [
    "Assume a Shadowform, increasing your Shadow damage by 15% and reducing Physical damage done to you by 15%. However, you may only cast Shadow and Discipline spells while in this form.",
  ],
});

removeTalentsById("1.11", "rogue", "Assassination", ["improved_poisons"]);

replaceTalent("1.11", "rogue", "Assassination", "remorseless_attacks", {
  ranks: 5,
  description: [
    "After killing an opponent that yields experience, gives you a {value}% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike.",
    {
      value: [8, 16, 24, 32, 40],
    },
  ],
});

replaceTalent("1.11", "rogue", "Assassination", "murder", {
  description: [
    "Increases your chance to hit while using your Sap, Ambush, Garrote, or Cheap Shot abilities by {value}%.",
    {
      value: [3, 5],
    },
  ],
});

replaceTalent("1.11", "rogue", "Assassination", "relentless_strikes", {
  requiresTalents: "ruthlessness",
});

replaceTalent("1.11", "rogue", "Assassination", "improved_expose_armor", {
  ranks: 3,
  description: [
    "Increases the armor reduced by your Expose Armor ability by {value}%.",
    {
      value: [15, 30, 45],
    },
  ],
});

replaceTalent("1.11", "rogue", "Assassination", "lethality", {
  description: [
    "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ambush, Ghostly Strike, or Hemorrhage ability by 30%.",
    {
      value: [6, 12, 18, 24, 30],
    },
  ],
});

replaceTalent("1.11", "rogue", "Assassination", "vile_poisons", {
  description: [
    "Increases the damage dealt by your poisons by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent("1.11", "rogue", "Assassination", "improved_kidney_shot", {
  row: 4,
  col: 0,
  description: [
    "Reduces the cooldown of your Kidney Shot ability by {value} seconds.",
    {
      value: [2, 4, 5],
    },
  ],
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
        value: [2, 4, 6, 8, 10],
      },
    ],
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
        value: [3, 6, 9, 12, 15],
      },
    ],
  },
]);

replaceTalent("1.11", "rogue", "Combat", "endurance", {
  name: "Improved Evasion",
  description: [
    "Increases the effect duration of your Evasion ability by {value} seconds.",
    {
      value: [2, 4],
    },
  ],
});

replaceTalent("1.11", "rogue", "Combat", "improved_sprint", {
  ranks: 3,
  description: [
    "Reduces the cooldown of your Sprint ability by {value} seconds.",
    {
      value: [30, 60, 90],
    },
  ],
});

replaceTalent("1.11", "rogue", "Combat", "mace_specialization", {
  description: [
    "Gives you a {value}% chance to stun your target for 3 seconds with a mace.",
    {
      value: [1, 2, 3, 4, 6],
    },
  ],
});

replaceTalent("1.11", "rogue", "Combat", "weapon_expertise", {
  name: "Throwing Weapon Specialization",
  icon: "inv_throwingknife_01",
  requiresTalents: null,
  description: [
    "Increases the range of your throwing weapons by {value} yards.",
    {
      value: [3, 6],
    },
  ],
});

removeTalentsById("1.11", "rogue", "Subtlety", [
  "sleight_of_hand",
  "serrated_blades",
  "heightened_senses",
  "dirty_deeds",
  "deadliness",
]);

replaceTalent("1.11", "rogue", "Subtlety", "opportunity", {
  row: 1,
});

replaceTalent("1.11", "rogue", "Subtlety", "elusiveness", {
  ranks: 5,
  description: [
    "Reduces the cooldown of your Evasion, Vanish, and Blind abilities by {value}.",
    {
      value: [
        "15 seconds",
        "30 seconds",
        "45 seconds",
        "1 minute",
        "1.3 minutes",
      ],
    },
  ],
});

replaceTalent("1.11", "rogue", "Subtlety", "camouflage", {
  row: 0,
  description: [
    "Increases your speed while stealthed by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent("1.11", "rogue", "Subtlety", "ghostly_strike", {
  description: [
    "A strike that deals 125% weapon damage and increases your chance to dodge by 15% for 7 seconds. Awards 1 combo point.",
  ],
});

replaceTalent("1.11", "rogue", "Subtlety", "improved_ambush", {
  requiresTalents: "opportunity",
});

replaceTalent("1.11", "rogue", "Subtlety", "setup", {
  row: 5,
  col: 1,
  requiresTalents: "ghostly_strike",
  description: [
    "Gives you a {value}% chance to add a combo point to your target after dodging their attack.",
    {
      value: [15, 30, 45],
    },
  ],
});

replaceTalent("1.11", "rogue", "Subtlety", "improved_sap", {
  col: 2,
  description: [
    "Adds a {value}% chance to return to stealth mode after using your Sap ability.",
    {
      value: [30, 60, 90],
    },
  ],
});

replaceTalent("1.11", "rogue", "Subtlety", "preparation", {
  col: 2,
});

replaceTalent("1.11", "rogue", "Subtlety", "hemorrhage", {
  row: 5,
  col: 2,
  description: [
    "An instant strike that damages the opponent and causes the target to hermorrhage, increasing any Physical damage dealt to the target by up to 3. Lasts 30 charges or 15 seconds. Awards 1 combo point.",
  ],
});

replaceTalent("1.11", "rogue", "Subtlety", "premeditation", {
  requiresTalents: null,
  description: [
    "When used, adds 2 combo points to your target. The target must become engaged in combat within 5 seconds or the combo points are lost.",
  ],
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
        value: ["1 second", "2 seconds", "3 seconds", "4 seconds", "5 seconds"],
      },
    ],
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
        value2: [5, 10],
      },
    ],
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
        value: [10, 20, 30],
      },
    ],
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
        value: [10, 20, 30],
      },
    ],
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
        value: [3, 5],
      },
    ],
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
        value: [10, 20],
      },
    ],
  },
]);

removeTalentsById("1.10", "shaman", "Elemental", [
  "earths_grasp",
  "elemental_warding",
  "improved_fire_totems",
  "eye_of_the_storm",
  "elemental_devastation",
  "storm_reach",
]);

replaceTalent("1.10", "shaman", "Elemental", "convection", {
  row: 1,
  col: 2,
  requiresTalents: "concussion",
  description: [
    "Reduces the Mana cost of your Shock spells by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

replaceTalent("1.10", "shaman", "Elemental", "concussion", {
  description: [
    "Increases the damage done by your Shock spells by {value}%.",
    {
      value: [1, 2, 3, 4, 5],
    },
  ],
});

replaceTalent("1.10", "shaman", "Elemental", "call_of_flame", {
  row: 1,
  col: 1,
  ranks: 5,
  description: [
    "Increases the damage done by your Fire Totems by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

replaceTalent("1.10", "shaman", "Elemental", "reverberation", {
  row: 2,
  col: 2,
  requiresTalents: "convection",
  description: [
    "Reduces the cooldown of your Shock spells by {value}.",
    {
      value: [
        "0.2 seconds",
        "0.4 seconds",
        "0.6 seconds",
        "0.8 seconds",
        "1 second",
      ],
    },
  ],
});

replaceTalent("1.10", "shaman", "Elemental", "call_of_thunder", {
  row: 2,
  col: 1,
  description: [
    "Increases the critical strike chance of your Lightning spells by {value}%.",
    {
      value: [1, 2, 3, 4, 6],
    },
  ],
});

replaceTalent("1.10", "shaman", "Elemental", "elemental_fury", {
  requiresTalents: "call_of_thunder",
  description: [
    "Increases the critical strike damage done by your Fire, Frost, and Nature spells by 100%.",
  ],
});

replaceTalent("1.10", "shaman", "Elemental", "lightning_mastery", {
  row: 5,
  col: 0,
  requiresTalents: null,
  description: [
    "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by {value}.",
    {
      value: [
        "0.2 seconds",
        "0.4 seconds",
        "0.6 seconds",
        "0.8 seconds",
        "1 second",
      ],
    },
  ],
});

replaceTalent("1.10", "shaman", "Elemental", "elemental_mastery", {
  description: [
    "When activated, this spell gives your next Fire, Frost, or Nature damage spell a 100% critical strike chance.",
  ],
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
        value: [3, 6, 9, 12, 15],
      },
    ],
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
        value: [5, 10, 15, 20, 25],
      },
    ],
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
        value: [10, 20],
      },
    ],
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
      "Reduces the delay before your Fire Nova Totem activates by {value}.",
      {
        value: ["1 second", "2 seconds"],
      },
    ],
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
        value: [10, 20],
      },
    ],
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
        value: [5, 10],
      },
    ],
  },
]);

replaceTalent("1.10", "shaman", "Enhancement", "shield_specialization", {
  description: [
    "Increases your chance to block attacks with a shield by {value}%.",
    {
      value: [1, 2, 3, 4, 5],
    },
  ],
});

replaceTalent("1.10", "shaman", "Enhancement", "enhancing_totems", {
  name: "Improved Strength of Earth Totem",
  ranks: 3,
  description: [
    "Increases the amount of Strength raised by your Strength of Earth Totem by {value}%.",
    {
      value: [5, 10, 15],
    },
  ],
});

replaceTalent("1.10", "shaman", "Enhancement", "anticipation", {
  description: [
    "Increases your defense skill by {value}.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

replaceTalent("1.10", "shaman", "Enhancement", "toughness", {
  row: 5,
  col: 1,
  requiresTalents: "parry",
});

replaceTalent("1.10", "shaman", "Enhancement", "parry", {
  row: 4,
  col: 1,
  description: ["Gives a chance to parry melee attacks."],
});

replaceTalent("1.10", "shaman", "Enhancement", "stormstrike", {
  requiresTalents: null,
  description: [
    "Gives you an extra attack.  In addition, the next 2 sources of Nature damage dealt to the target are increased by 20%. Lasts 12 seconds.",
  ],
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
        value: [5, 10],
      },
    ],
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
        value: [5, 10],
      },
    ],
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
        value: [5, 10],
      },
    ],
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
        value: [11, 22],
      },
    ],
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
        value: [2, 4],
      },
    ],
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
        value: [5, 10, 15],
      },
    ],
  },
]);

removeTalentsById("1.10", "shaman", "Restoration", [
  "natures_guidance",
  "healing_focus",
  "totemic_mastery",
  "healing_grace",
  "restorative_totems",
  "healing_way",
]);

replaceTalent("1.10", "shaman", "Restoration", "improved_healing_wave", {
  description: [
    "Reduces the casting time of your Healing Wave spell by {value} seconds.",
    {
      value: [0.1, 0.2, 0.3, 0.4, 0.5],
    },
  ],
});

replaceTalent("1.10", "shaman", "Restoration", "improved_reincarnation", {
  name: "Improved Self-Reincarnation",
  description: [
    "Reduces the cooldown of your Self-Reincarnation spell by {value} minutes.",
    {
      value: [10, 20],
    },
  ],
});

replaceTalent("1.10", "shaman", "Restoration", "ancestral_healing", {
  ranks: 5,
  description: [
    "Increases your target's armor value from items by {value}% for 15 seconds after getting a critical effect from one of your healing spells.",
    {
      value: [5, 10, 15, 20, 25],
    },
  ],
});

replaceTalent("1.10", "shaman", "Restoration", "totemic_focus", {
  description: [
    "Reduces the Mana cost of your totems by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

replaceTalent("1.10", "shaman", "Restoration", "tidal_mastery", {
  description: [
    "Increases the critical effect chance of your healing and Nature damage spells by {value}%.",
    {
      value: [1, 2, 3, 4, 5],
    },
  ],
});

replaceTalent("1.10", "shaman", "Restoration", "natures_swiftness", {
  requiresTalents: "tidal_mastery",
  description: [
    "When activated, your next Nature spell with a casting time less than 10 seconds becomes an instant cast spell.",
  ],
});

replaceTalent("1.10", "shaman", "Restoration", "mana_tide_totem", {
  requiresTalents: "improved_mana_spring_totem",
  description: [
    "Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 seconds that restores 140 mana every 3 seconds to group members within 20 yards.",
  ],
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
        value: [3, 6, 9, 12, 15],
      },
    ],
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
        value: [15, 30, 45, 60, 75],
      },
    ],
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
      "Allows 10% of your Health regeneration to work while in combat.",
    ],
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
        value: [4, 8, 12, 16, 20],
      },
    ],
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
        value: [5, 10, 15, 20, 25],
      },
    ],
  },
]);

replaceTalent("1.5", "warlock", "Affliction", "improved_corruption", {
  description: [
    "Reduces the casting time of your Corruption spell by {value} seconds.",
    {
      value: [0.4, 0.8, 1.2, 1.6, 2],
    },
  ],
});

replaceTalent("1.5", "warlock", "Affliction", "improved_drain_soul", {
  description: [
    "Gives you a {value}% chance to get a 100% increase to your Mana regeneration for 10 seconds if the target dies while while you drain its soul. In addition, your Mana may continue to regenerate while casting at 50% of normal.",
    {
      value: [50, 100],
    },
  ],
});

replaceTalent("1.5", "warlock", "Affliction", "amplify_curse", {
  description: [
    "Increases the effect of your next Curse of Weakness or Curse of Agony by 50%, or your next Curse of Exhaustion by 20%.",
  ],
});

replaceTalent("1.5", "warlock", "Affliction", "nightfall", {
  description: [
    "Gives your Corruption and Drain Life spells a {value}% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
    {
      value: [2, 3],
    },
  ],
});

replaceTalent("1.5", "warlock", "Affliction", "siphon_life", {
  description: [
    "Transfers 13 health from the target to the caster every 3 seconds. Lasts 30 seconds.",
  ],
});

replaceTalent("1.5", "warlock", "Affliction", "curse_of_exhaustion", {
  description: [
    "Reduces the target's speed to 90% of normal for 12 seconds. Only one Curse per Warlock can be active on any one target.",
  ],
});

removeTalentsById("1.5", "warlock", "Demonology", ["master_demonologist"]);

replaceTalent("1.5", "warlock", "Demonology", "improved_voidwalker", {
  description: [
    "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, and Suffering spells by {value}%.",
    {
      value: [8, 16, 25],
    },
  ],
});

replaceTalent("1.5", "warlock", "Demonology", "improved_succubus", {
  description: [
    "Increases the effect of your Succubus' Last of Pain and Soothing Kiss spells by {value}%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by {value}%.",
    {
      value: [8, 16, 25],
    },
  ],
});

replaceTalent("1.5", "warlock", "Demonology", "fel_domination", {
  description: [
    "Your next Imp, Voidwalker, Succubus, or Felhunter Summon spell has its casting time reduced by 5.5 seconds and its Mana cost reduced by 50%.",
  ],
});

replaceTalent("1.5", "warlock", "Demonology", "fel_stamina", {
  requiresTalents: "fel_intellect",
});

replaceTalent("1.5", "warlock", "Demonology", "master_summoner", {
  description: [
    "Reduces the casting time of your Imp, Voidwalker, Succubus, and Felhunter Summoning spells by {value} seconds.",
    {
      value: [2, 4],
    },
  ],
});

replaceTalent("1.5", "warlock", "Demonology", "unholy_power", {
  row: 5,
  requiresTalents: "fel_stamina",
});

replaceTalent("1.5", "warlock", "Demonology", "improved_enslave_demon", {
  description: [
    "Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

replaceTalent("1.5", "warlock", "Demonology", "demonic_sacrifice", {
  description: [
    "When activated, sacrifices your summoned demon to grant you an effect that lasts 30 minutes. The effect is cancelled if any Demon is summoned.<br><br>Imp: Increases your Fire damage by 15%.<br><br>Voidwalker: Increases your maximum Health by 15%.<br><br>Succubus: Increases your Shadow damage by 15%.<br><br>Felhunter: Increases your maximum Mana by 20%.",
  ],
});

replaceTalent("1.5", "warlock", "Demonology", "improved_firestone", {
  description: [
    "Increases the damage done by your Firestone by {value}%.",
    {
      value: [15, 30],
    },
  ],
});

replaceTalent("1.5", "warlock", "Demonology", "soul_link", {
  description: [
    "When active, 50% of all damage taken is split with your summoned demon. Lasts 30 seconds.",
  ],
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
        value: [20, 40],
      },
    ],
  },
]);

replaceTalent("1.5", "warlock", "Destruction", "improved_shadow_bolt", {
  description: [
    "Your Shadow Bolt critical strikes increase the next 4 sources of Shadow damage dealt to the target by {value}%.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

replaceTalent("1.5", "warlock", "Destruction", "bane", {
  description: [
    "Reduces the casting time of your Shadow Bolt and Immolate spells by {value} seconds.",
    {
      value: [0.1, 0.2, 0.3, 0.4, 0.5],
    },
  ],
});

replaceTalent("1.5", "warlock", "Destruction", "aftermath", {
  description: [
    "Gives your Destruction spells a {value}% chance to daze the target for 5 seconds.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

replaceTalent("1.5", "warlock", "Destruction", "improved_firebolt", {
  description: [
    "Reduces the casting time of your Imp's Firebolt spell by {value}.",
    {
      value: ["0.5 seconds", "1 second"],
    },
  ],
});

replaceTalent("1.5", "warlock", "Destruction", "improved_lash_of_pain", {
  description: [
    "Reduces the cooldown of your Succubus' Lash of Pain spell by {value} seconds.",
    {
      value: [3, 6],
    },
  ],
});

replaceTalent("1.5", "warlock", "Destruction", "shadowburn", {
  description: [
    "Instantly blasts the target with 87 to 99 Shadow damage. Requires 1 Soul Shard. If the target dies from Shadowburn, and yields experience, the caster gains a Soul Shard.",
  ],
});

replaceTalent("1.5", "warlock", "Destruction", "intensity", {
  description: [
    "Gives you a {value}% chance to resist interruptiong caused by damage while channeling the Rain of Fire or Hellfire spell.",
    {
      value: [35, 70],
    },
  ],
});

replaceTalent("1.5", "warlock", "Destruction", "pyroclasm", {
  description: [
    "Gives your Rain of Fire and Hellfire spells a {value}% chance to stun the target for 3 seconds.",
    {
      value: [13, 26],
    },
  ],
});

replaceTalent("1.5", "warlock", "Destruction", "emberstorm", {
  name: "Inferno",
});

replaceTalent("1.5", "warlock", "Destruction", "conflagrate", {
  description: [
    "Ignite a target that is already afflicted by Immolate, dealing 197 to 251 damage and consuming the Immolate spell.",
  ],
});

replaceTalent("1.5", "warrior", "Arms", "improved_thunder_clap", {
  description: [
    "Increases the damage done by your Thunder Clap by {value}%.",
    {
      value: [8, 16, 25],
    },
  ],
});

replaceTalent("1.5", "warrior", "Arms", "impale", {
  description: [
    "Increases the critical strike damage done by your abilities in Battle, Defensive, and Berserker stance by {value}%.",
    {
      value: [10, 20],
    },
  ],
});

replaceTalent("1.5", "warrior", "Arms", "improved_hamstring", {
  ranks: 2,
  description: [
    "Increases the movement slow effect of your Hamstring ability by {value}%.",
    {
      value: [10, 20],
    },
  ],
});

replaceTalent("1.5", "warrior", "Arms", "mortal_strike", {
  description: [
    "A vicious strike that deals 200% weapon damage and wounds the target, reducing the effectiveness of any healing by 50% for 10 seconds.",
  ],
});

removeTalentsById("1.5", "warrior", "Fury", ["dual_wield_specialization"]);

replaceTalent("1.5", "warrior", "Fury", "booming_voice", {
  description: [
    "Increases the duration of your Battle Shout and Demoralizing Shout by {value}%.",
    {
      value: [10, 20, 30, 40, 50],
    },
  ],
});

replaceTalent("1.5", "warrior", "Fury", "improved_demoralizing_shout", {
  description: [
    "Increases the attack power reduction of your Demoralizing Shout by {value}%.",
    {
      value: [5, 10, 15, 20, 25],
    },
  ],
});

replaceTalent("1.5", "warrior", "Fury", "unbridled_wrath", {
  description: [
    "Gives you a {value}% chance to generate an additional Rage point when you deal melee damage.",
    {
      value: [8, 16, 24, 32, 40],
    },
  ],
});

replaceTalent("1.5", "warrior", "Fury", "improved_cleave", {
  description: [
    "Increases the bonus damage done by your Cleave ability by {value}%.",
    {
      value: [20, 40, 60],
    },
  ],
});

replaceTalent("1.5", "warrior", "Fury", "piercing_howl", {
  requiresTalents: "improved_demoralizing_shout",
  description: [
    "Causes all enemies near the warrior to be dazed for 6 seconds.",
  ],
});

replaceTalent("1.5", "warrior", "Fury", "blood_craze", {
  description: [
    "Allows {value}% of your Health regeneration to work during combat for 20 seconds after being the victim of a critical strike.",
    {
      value: [5, 10, 15],
    },
  ],
});

replaceTalent("1.5", "warrior", "Fury", "improved_battle_shout", {
  description: [
    "Increases the Attack Power bonus of your Battle Shout by {value}%.",
    {
      value: [5, 10, 15, 20, 25],
    },
  ],
});

replaceTalent("1.5", "warrior", "Fury", "enrage", {
  description: [
    "Gives you a {value}% melee damage bonus for 4 swings any time you are the victim of a critical strike.",
    {
      value: [8, 16, 24, 32, 40],
    },
  ],
});

replaceTalent("1.5", "warrior", "Fury", "improved_slam", {
  description: [
    "Decreases the casting time of your Slam ability by {value} seconds.",
    {
      value: [0.1, 0.2, 0.3, 0.4, 0.5],
    },
  ],
});

replaceTalent("1.5", "warrior", "Fury", "death_wish", {
  description: [
    "When activated, increases your melee damage by 20% and makes you immune to fear, but lowers your defense against all types of damage by 20%. Lasts 30 seconds.",
  ],
});

replaceTalent("1.5", "warrior", "Fury", "improved_intercept", {
  description: [
    "Reduces the cooldown of your Intercept ability by {value} seconds.",
    {
      value: [5, 10],
    },
  ],
});

replaceTalent("1.5", "warrior", "Fury", "improved_berserker_rage", {
  description: [
    "Increases the duration of your Berserker Rage ability by {value} seconds.",
    {
      value: [3, 6],
    },
  ],
});

replaceTalent("1.5", "warrior", "Fury", "flurry", {
  description: [
    "Increases your attack speed by {value}% for your next 3 swings after dealing a critical strike.",
    {
      value: [10, 15, 20, 25, 30],
    },
  ],
});

replaceTalent("1.5", "warrior", "Fury", "bloodthirst", {
  description: [
    "Activates after dealing a killing blow. Your next melee weapon attack deals a 100% increased damage.",
  ],
});

removeTalentsById("1.5", "warrior", "Protection", ["shield_slam"]);

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
      "While active, increases the amount of damage absorbed by your shield by 50% and increases the damage done by your Shield Bash ability by 200%. Lasts 20 seconds.",
    ],
  },
]);

replaceTalent("1.5", "warrior", "Protection", "shield_specialization", {
  description: [
    "Increases your chance to block attacks with a shield by {value}%.",
    {
      value: [1, 2, 3, 4, 5],
    },
  ],
});

replaceTalent("1.5", "warrior", "Protection", "improved_bloodrage", {
  description: [
    "Reduces the duration required to generate rage from your Bloodrage ability by {value} seconds.",
    {
      value: [2, 4],
    },
  ],
});

replaceTalent("1.5", "warrior", "Protection", "iron_will", {
  description: [
    "Increases your chance to resist stun and charm effects by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalent("1.5", "warrior", "Protection", "last_stand", {
  description: [
    "When activated, this ability temporarily grants you 30% of your maximum hit points for 20 seconds. After the effect expires, the hit points are lost.",
  ],
});

replaceTalent("1.5", "warrior", "Protection", "improved_shield_block", {
  description: [
    "Allows your Shield Block ability to block an additional attack, and increases the duration by {value}.",
    {
      value: ["0.5 seconds", "1 second", "2 seconds"],
    },
  ],
});

replaceTalent("1.5", "warrior", "Protection", "improved_revenge", {
  description: [
    "Gives your Revenge ability a {value}% chance to stun the target for 3 seconds.",
    {
      value: [20, 30, 40],
    },
  ],
});

replaceTalent("1.5", "warrior", "Protection", "improved_sunder_armor", {
  description: [
    "Increases the armor reduction of your Sunder Armor by {value}%.",
    {
      value: [10, 20, 30],
    },
  ],
});

replaceTalent("1.5", "warrior", "Protection", "improved_disarm", {
  description: [
    "Increases the duration of your Disarm ability by {value}.",
    {
      value: ["1 second", "2 seconds", "3 seconds"],
    },
  ],
});

replaceTalent("1.5", "warrior", "Protection", "improved_taunt", {
  col: 3,
  description: [
    "Reduces the cooldown of your Taunt ability by {value}.",
    {
      value: ["1 second", "2 seconds"],
    },
  ],
});

replaceTalent("1.5", "warrior", "Protection", "improved_shield_wall", {
  description: [
    "Increases the effect duration of your Shield Wall ability by {value} seconds.",
    {
      value: [3, 5],
    },
  ],
});

replaceTalent("1.5", "warrior", "Protection", "concussion_blow", {
  col: 2,
  requiresTalents: "improved_revenge",
  description: [
    "A brutal strike that deals weapon damage and stuns the opponent for 5 seconds.",
  ],
});

replaceTalent("1.5", "warrior", "Protection", "improved_shield_bash", {
  col: 1,
  description: [
    "Gives your Shield Bash ability a {value}% chance to silence the target for 3 seconds.",
    {
      value: [50, 100],
    },
  ],
});

replaceTalent(
  "1.5",
  "warrior",
  "Protection",
  "one_handed_weapon_specialization",
  {
    description: [
      "Increases the damage you deal with one-handed melee weapons by {value}%.",
      {
        value: [1, 2, 3, 4, 5],
      },
    ],
  }
);

// turtle wow changes (1.16.1)

removeTalentsByIdOld("1.16.1t", "druid", "Feral Combat", ["faerie_fire_feral"]);

replaceTalentOld("1.16.1t", "druid", "Feral Combat", "feral_instinct", {
  ranks: 3,
  description: [
    "Increasing threat caused in Bear Form and Dire Bear Form by {value}% and reduces the chance enemies have to detect you while Prowling.",
    {
      value: [5, 10, 15],
    },
  ],
});

replaceTalentOld("1.16.1t", "druid", "Feral Combat", "thick_hide", {
  ranks: 3,
  description: [
    "Increases your Armor contribution from items by {value}%.",
    {
      value: [3, 6, 10],
    },
  ],
});

replaceTalentOld("1.16.1t", "druid", "Feral Combat", "blood_frenzy", {
  description: [
    "Increases the duration of Tiger's Fury by {value1} seconds and your Enrage now also instantly restores {value2} rage. In addition, Tiger’s Fury and Enrage increases your attack speed by {value3}% for {value3} seconds.",
    {
      value1: [3, 6],
      value2: [5, 10],
      value3: [6, 12],
    },
  ],
});

replaceTalentOld("1.16.1t", "druid", "Feral Combat", "primal_fury", {
  description: [
    "Gives you a {value}% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points have a {value}% chance to add an additional combo point.",
    {
      value: [50, 100],
    },
  ],
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
      "Removes all Fear effects and increases your energy regeneration rate by 100% while in Cat Form, and increases your total health by 20% while in Bear Form. After the effect ends, the health is lost. The effect lasts 20 seconds.",
    ],
  },
]);

removeTalentsByIdOld("1.16.1t", "druid", "Restoration", [
  "improved_enrage",
  "insect_swarm",
]);

replaceTalentOld("1.16.1t", "druid", "Restoration", "subtlety", {
  row: 1,
  col: 2,
  description: [
    "Reduces the threat generated by your spells by {value}%.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

replaceTalentOld("1.16.1t", "druid", "Restoration", "gift_of_nature", {
  requiresTalents: "swiftmend",
});

moveTalentOld("1.16.1t", "druid", "Restoration", "tranquil_spirit", 3, 3);
moveTalentOld("1.16.1t", "druid", "Restoration", "improved_rejuvenation", 3, 1);
moveTalentOld("1.16.1t", "druid", "Restoration", "swiftmend", 2, 2);

replaceTalentOld("1.16.1t", "druid", "Restoration", "improved_regrowth", {
  col: 1,
  requiresTalents: "improved_rejuvenation",
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
      "Shapeshift into the Tree of Life. While in this form you increase healing received by 20% of your total Spirit for all party members within 30 yards, your movement speed is reduced by 20%, and you cannot cast damaging spells or Healing Touch, but the mana cost of these spells is reduced by 20%.<br><br>The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
    ],
  },
]);

removeTalentsByIdOld("1.16.1t", "hunter", "Beast Mastery", [
  "improved_aspect_of_the_hawk",
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
        value: [1, 2, 3, 4, 5],
      },
    ],
  },
]);

replaceTalentOld(
  "1.16.1t",
  "hunter",
  "Beast Mastery",
  "improved_eyes_of_the_beast",
  {
    description: [
      "Increases the duration of Eyes of the Beast by {value1} seconds. While channeling this ability your tamed pet deals {value2}% additional damage and increases its focus generation by {value3}%.",
      {
        value1: [30, 60],
        // value2: [15, 30],
        value2: [5, 10],
        value3: [10, 20],
      },
    ],
  }
);

removeTalentsByIdOld("1.16.1t", "hunter", "Survival", [
  "monster_slaying",
  "humanoid_slaying",
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
        value: [1, 2, 3],
      },
    ],
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
        value: [0.2, 0.4, 0.6, 0.8, 1],
      },
    ],
  },
]);

replaceTalentOld("1.16.1t", "mage", "Arcane", "improved_arcane_explosion", {
  name: "Arcane Impact",
  description: [
    "Increases the critical strike chance of your Arcane Explosion and Arcane Missiles spells by an additional {value}%.",
    {
      value: [2, 4, 6],
    },
  ],
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
        value: [18, 36, 50],
      },
    ],
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
      "Gives Mana regeneration to party members equal to 15% of the Mage's mana regeneration within 30 yards. Lasts 30 minutes.",
    ],
  },
]);

removeTalentsByIdOld("1.16.1t", "paladin", "Holy", [
  "consecration",
  "lasting_judgement",
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
      "Increases Holy damage done by party members within 30 yards by 10%.  Players may only have one Aura on them per Paladin at any one time.",
    ],
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
        value: [5, 10, 15],
      },
    ],
  },
]);

removeTalentsByIdOld("1.16.1t", "paladin", "Protection", [
  "blessing_of_kings",
  "improved_concentration_aura",
]);

moveTalentOld(
  "1.16.1t",
  "paladin",
  "Protection",
  "improved_righteous_fury",
  2,
  0
);
moveTalentOld(
  "1.16.1t",
  "paladin",
  "Protection",
  "blessing_of_sanctuary",
  2,
  1
);

replaceTalentOld("1.16.1t", "paladin", "Protection", "redoubt", {
  description: [
    "Successful melee and ranged attacks against you have a {value1}% chance to increase your chance to block by {value2}%. Lasts 10 sec or 5 blocks.",
    {
      value1: [2, 4, 6, 8, 10],
      value2: [3, 6, 9, 12, 15],
    },
  ],
});

replaceTalentOld("1.16.1t", "paladin", "Protection", "holy_shield", {
  row: 4,
  col: 1,
  requiresTalents: null,
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
        value2: [33, 66, 100],
      },
    ],
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
        value: [3, 6, 10],
      },
    ],
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
      "When you have less than 35% health, all damage taken is reduced by 25%.",
    ],
  },
]);

removeTalentsByIdOld("1.16.1t", "paladin", "Retribution", ["sanctity_aura"]);

replaceTalentOld(
  "1.16.1t",
  "paladin",
  "Retribution",
  "improved_seal_of_the_crusader",
  {
    name: "Heart of the Crusader",
    description: [
      "Increases the melee attack power bonus of your Seal of the Crusader and the Holy damage increase of your Crusader Strike by {value}%.",
      {
        value: [5, 10, 15],
      },
    ],
  }
);

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
      "Places a Blessing on the friendly target, increasing total stats by 10% for 5 min.  Players may only have one Blessing on them per Paladin at any one time.",
    ],
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
        value2: [10, 20],
      },
    ],
  },
]);

removeTalentsByIdOld("1.16.1t", "priest", "Discipline", ["divine_spirit"]);

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
      "Causes 20% of the damage absorbed by your Power Word: Shield to reflect back at the attacker. This damage causes no threat.",
    ],
  },
]);

removeTalentsByIdOld("1.16.1t", "priest", "Holy", ["lightwell"]);

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
      "Proclaim the friendly target as your champion for 2 hours. Increases armor by 230, all resistances by 10 and allows the use of various Champion spells on that target. Only one Champion can be proclaimed at a time.",
    ],
  },
]);

replaceTalentOld("1.16.1t", "priest", "Shadow", "improved_vampiric_embrace", {
  name: "Vampiric Touch",
  description: [
    "Increases the percentage healed by Vampiric Embrace by an additional {value1}% and your Vampiric Embrace now causes all party members to also gain mana equal to {value2}% of any Shadow spell damage you deal.",
    {
      value1: [2, 5],
      value2: [1, 2],
    },
  ],
});

removeTalentsByIdOld("1.16.1t", "rogue", "Combat", [
  "dagger_specialization",
  "fist_weapon_specialization",
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
        value: [1, 2, 3, 4, 5],
      },
    ],
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
        value2: [50, 100],
      },
    ],
  },
]);

replaceTalentOld("1.16.1t", "rogue", "Subtlety", "improved_sap", {
  description: [
    "Gives you a {value}% chance to return to stealth mode after using your Sap ability.",
    {
      value: [50, 100],
    },
  ],
});

removeTalentsByIdOld("1.16.1t", "shaman", "Enhancement", [
  "two_handed_axes_and_maces",
  "anticipation",
  "toughness",
  "parry",
]);

moveTalentOld(
  "1.16.1t",
  "shaman",
  "Enhancement",
  "improved_lightning_shield",
  1,
  2
);
moveTalentOld("1.16.1t", "shaman", "Enhancement", "improved_ghost_wolf", 1, 3);

replaceTalentOld("1.16.1t", "shaman", "Enhancement", "stormstrike", {
  row: 4,
  col: 2,
  requiresTalents: null,
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
      "Allows your Lightning Shield to be cast on allies and reduces its mana cost by 20%. Only usable on one ally at a time.",
    ],
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
        value2: [1, 2, 3, 4, 5],
      },
    ],
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
        value: [10, 20, 30],
      },
    ],
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
      // "Increases melee, ranged, and spell casting speed by 10% for a party member within 30 yards. Lasts 20 sec.",
      // "Increases melee, ranged, and spell casting speed by 15% for a party member within 30 yards. Lasts 20 sec.",
      "Increases melee, ranged, and spell casting speed by 15% for a party member within 30 yards. Lasts 15 sec.",
    ],
  },
]);

removeTalentsByIdOld("1.16.1t", "warlock", "Affliction", [
  "improved_drain_life",
  "improved_drain_mana",
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
        value2: [15, 30],
      },
    ],
  },
]);

removeTalentsByIdOld("1.16.1t", "warlock", "Demonology", [
  "improved_healthstone",
  "improved_firestone",
  "improved_spellstone",
]);

replaceTalentOld("1.16.1t", "warlock", "Demonology", "fel_intellect", {
  ranks: 3,
  description: [
    "Increases the maximum Mana of your Imp, Voidwalker, Succubus, and Felhound by {value}%.",
    {
      value: [5, 10, 15],
    },
  ],
});

replaceTalentOld("1.16.1t", "warlock", "Demonology", "fel_stamina", {
  ranks: 3,
  description: [
    "Increases the maximum Health of your Imp, Voidwalker, Succubus, and Felhound by {value}%.",
    {
      value: [5, 10, 15],
    },
  ],
});

replaceTalentOld("1.16.1t", "warlock", "Demonology", "improved_enslave_demon", {
  ranks: 2,
  description: [
    "Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by {value}%, reduces the resist chance by {value}%.",
    {
      value: [10, 20],
    },
  ],
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
        value2: [15, 30],
      },
    ],
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
        value: [10, 20, 30],
      },
    ],
  },
]);

replaceTalentOld("1.16.1t", "warlock", "Destruction", "intensity", {
  description: [
    "Gives you a {value}% chance to resist interruption caused by damage while casting or channeling any Destruction Fire spell.",
    {
      value: [35, 70],
    },
  ],
});

replaceTalentOld("1.16.1t", "warlock", "Destruction", "pyroclasm", {
  description: [
    "Gives your Rain of Fire, Hellfire, Conflagrate, and Soul Fire spells a {value}% chance to stun the target for 3 sec.",
    {
      value: [13, 25],
    },
  ],
});

removeTalentsByIdOld("1.16.1t", "warrior", "Arms", [
  "axe_specialization",
  "polearm_specialization",
]);

replaceTalentOld("1.16.1t", "warrior", "Arms", "improved_thunder_clap", {
  description: [
    "Reduces the cost of your Thunder Clap ability by {value1} and increases the damage by {value2}%.",
    {
      value1: ["1 rage point", "2 rage points", "4 rage points"],
      value2: [20, 40, 60],
    },
  ],
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
        value: [1, 2, 3, 4, 5],
      },
    ],
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
        value: [2, 4, 6],
      },
    ],
  },
]);

replaceTalentOld("1.16.1t", "warrior", "Protection", "improved_shield_block", {
  ranks: 1,
  description: [
    "Allows your Shield Block ability to block an additional attack and increases the duration by 1 second.",
  ],
});

// turtle wow changes (1.17.2)

removeTalentsByIdOld("1.17.2t", "hunter", "Survival", [
  "monster_slaying",
  "humanoid_slaying",
]);

replaceTalentOld("1.17.2t", "hunter", "Survival", "entrapment", {
  ranks: 3,
  description: [
    "Gives your Immolation Trap, Frost Trap, and Explosive Trap a {value}% chance to entrap the target, preventing them from moving for 5 sec.",
    {
      value: [8, 16, 25],
    },
  ],
});

replaceTalentOld("1.17.2t", "hunter", "Survival", "improved_feign_death", {
  description: [
    "Reduces the chance your Feign Death ability will be resisted by {value}%.",
    {
      value: [4, 8],
    },
  ],
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
        value: [1, 2, 3],
      },
    ],
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
        value: [2, 4, 6, 8, 10],
      },
    ],
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
        value: [15, 30],
      },
    ],
  },
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
        value: [10, 20],
      },
    ],
  },
]);

removeTalentsByIdOld("1.0.0e", "mage", "Arcane", [
  "arcane_fortitude",
  "improved_blink",
]);

replaceTalentOld("1.0.0e", "mage", "Arcane", "arcane_impact", {
  description: [
    "Increases the critical strike chance of your Arcane spells by an additional {value}%.",
    {
      value: [2, 4, 6],
    },
  ],
});

replaceTalentOld("1.0.0e", "mage", "Arcane", "improved_mana_shield", {
  name: "Improved Shielding",
  description: [
    "Decreases the mana lost per point of damage taken when Mana Shield is active by {value1}%, and increases the resistances gained from Mage Armor by {value2}%.",
    {
      value1: [10, 20],
      value2: [50, 100],
    },
  ],
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
      "Blasts the target with energy, dealing 199 Arcane damage.  Each time you cast Arcane Blast, the casting time is reduced while mana cost is increased.  Effect stacks up to 3 times and lasts 8 sec.",
    ],
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
        value: [4, 8],
      },
    ],
  },
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
        value: [50, 100],
      },
    ],
  },
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
        value: [10, 20],
      },
    ],
  },
]);

moveTalentOld("1.0.0e", "paladin", "Protection", "anticipation", 3, 2);
moveTalentOld(
  "1.0.0e",
  "paladin",
  "Protection",
  "improved_concentration_aura",
  2,
  3
);

removeTalentsByIdOld("1.0.0e", "priest", "Discipline", ["divine_spirit"]);

moveTalentOld("1.0.0e", "priest", "Discipline", "improved_divine_spirit", 4, 2);
moveTalentOld("1.0.0e", "priest", "Discipline", "improved_mana_burn", 3, 2);

replaceTalentOld("1.0.0e", "priest", "Discipline", "pain_suppression", {
  row: 4,
  col: 3,
  requiresTalents: "martyrdom",
  description: [
    "Instantly reduces a friendly target's threat by 5%, reduces all damage taken by 40% and increases resistance to Dispel mechanics by 65% for 8 sec.",
  ],
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
      "Create a barrier around you, absorbing damage dealt to all party and raid members within it. The barrier lasts for 10 sec or until it absorbs 3935 damage, increased by up to 250% when affecting a large group. Priest must channel to maintain the spell.",
    ],
  },
]);

moveTalentOld("1.0.0e", "priest", "Holy", "inspiration", 3, 1);
moveTalentOld("1.0.0e", "priest", "Holy", "holy_reach", 3, 2);
moveTalentOld("1.0.0e", "priest", "Holy", "improved_healing", 2, 3);
moveTalentOld("1.0.0e", "priest", "Holy", "searing_light", 2, 2);

moveTalentOld(
  "1.0.0e",
  "rogue",
  "Assassination",
  "improved_expose_armor",
  5,
  0
);

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
        value: [50, 100],
      },
    ],
  },
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
        value: [1, 2, 3, 4, 5],
      },
    ],
  },
]);

removeTalentsByIdOld("1.0.0e", "shaman", "Elemental", ["eye_of_the_storm"]);

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
        value3: [
          "1 surplus charge after 2 sec, sending it at your target",
          "2 surplus charges every 2 sec for up to 4 sec, sending them at your target",
          "3 surplus charges every 2 sec for up to 6 sec, sending them at your target",
        ],
      },
    ],
  },
]);

replaceTalentOld("1.0.0e", "shaman", "Elemental", "elemental_focus", {
  description: [
    "After landing a critical strike with a Fire, Frost, or Nature damage spell, you enter a Clearcasting state.  The Clearcasting state reduces the mana cost of your next 2 damage spells or fire totems by 40%.",
  ],
});

replaceTalentOld("1.0.0e", "shaman", "Elemental", "call_of_thunder", {
  row: 5,
  col: 2,
  requiresTalents: "lightning_mastery",
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
      value: [0.1, 0.2, 0.3, 0.4, 0.5],
    },
  ],
});

replaceTalentOld("1.0.0e", "shaman", "Elemental", "lightning_overload", {
  icon: "spell_shaman_lavaflow",
  name: "Elemental Overload",
  description: [
    "Gives your Molten Blast, Lightning Bolt and Chain Lightning spells a {value}% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

replaceTalentOld("1.0.0e", "shaman", "Enhancement", "spirit_weapons", {
  description: [
    "Gives a chance to parry enemy melee attacks and reduces the threat generated by your melee attacks unless you are wearing a shield by 30%.",
  ],
});

replaceTalentOld(
  "1.0.0e",
  "shaman",
  "Enhancement",
  "dual_wield_specialization",
  {
    name: "Weapon Specialization",
    description: [
      "Increases your chance to hit with all weapons by an additional {value}%.",
      {
        value: [2, 4, 6],
      },
    ],
  }
);

replaceTalentOld("1.0.0e", "shaman", "Enhancement", "dual_wield", {
  name: "Primal Wielding",
  description: [
    "Allows one-hand and off-hand weapons to be equipped in the off-hand.<br><br>Additionally, your Lightning Bolt and Molten Blast spells no longer delay your next melee swing, but deal 50% less damage if cast within 4.5 sec after a melee attack.",
  ],
});

replaceTalentOld("1.0.0e", "shaman", "Enhancement", "stormstrike", {
  description: [
    "Instantly attack with your weapon, or both weapons if you are dual wielding.  In addition, the target takes 5% additional Nature damage.  Lasts 12 sec.",
  ],
});

replaceTalentOld("1.0.0e", "shaman", "Enhancement", "shamanistic_rage", {
  description: [
    "Reduces all damage taken by 30% and causes your successful melee attacks to regenerate mana (based on weapon speed and attack power).  Lasts 15 sec.",
  ],
});

replaceTalentOld("1.0.0e", "shaman", "Restoration", "healing_way", {
  icon: "spell_nature_healingway",
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
        value: [5, 10],
      },
    ],
  },
]);

removeTalentsByIdOld("1.0.0e", "warlock", "Demonology", ["demonic_sacrifice"]);

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
      "Grants the Warlock's summoned demon Empowerment.<br><br>Imp - Increases the Imp's spell critical strike chance by 20% for 30 sec.<br><br>Voidwalker - Increases the Voidwalker's health by 20%, and its threat generated from spells and attacks by 20% for 20 sec.<br><br>Succubus - Instantly vanishes, causing the demon to go into an improved Invisibility state. The vanish effect removes all stuns, snares and movement impairing effects from the demon.<br><br>Felhunter - Dispels all magical effects from the Felhunter.<br><br>Felguard - Increases the Felguard's attack speed by 20% and breaks all stun, snare and movement impairing effects and makes your Felguard immune to them for 15 sec.",
    ],
  },
]);

replaceTalentOld("1.0.0e", "warlock", "Demonology", "soul_link", {
  requiresTalents: "demonic_empowerment",
});

replaceTalentOld("1.0.0e", "warlock", "Destruction", "pyroclasm", {
  requiresTalents: null,
});

replaceTalentOld("1.0.0e", "warlock", "Destruction", "shadowfury", {
  row: 4,
  col: 3,
  requiresTalents: null,
  description: [
    "Shadowfury is unleashed, causing 156 Shadow damage and stunning all enemies within 8 yds for 3 sec.",
  ],
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
      "When activated, sacrifices your summoned demon to grant you an effect that lasts 30 min.  The effect is canceled if any Demon is summoned.<br><br>Imp: Increases your Fire damage by 15%.<br><br>Voidwalker: Restores 2% of total health every 4 sec.<br><br>Succubus: Increases your Shadow damage by 15%.<br><br>Felhunter: Restores 3% of total mana every 4 sec.<br><br>Felguard: Increases your Shadow damage by 10% and restores 2% of total mana every 4 sec.",
    ],
  },
]);

removeTalentsByIdOld("1.0.0e", "warrior", "Fury", [
  "death_wish",
  "improved_mortal_strike",
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
        value: [0.5, 1],
      },
    ],
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
      "Your next 5 melee attacks strike an additional nearby opponent.",
    ],
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
        value: [0.5, 1],
      },
    ],
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
      "Instantly Whirlwind up to 4 nearby targets and for the next 6 sec you will perform a whirlwind attack every 1 sec.  While under the effects of Bladestorm, you can move but cannot perform any other abilities but you do not feel pity or remorse or fear, you cannot be stopped unless killed and your movement speed cannot be reduced below 60%.",
    ],
  },
]);

replaceTalentOld("1.0.0e", "warrior", "Arms", "mortal_strike", {
  requiresTalents: "sweeping_strikes",
});

replaceTalentOld("1.0.0e", "warrior", "Arms", "endless_rage", {
  row: 7,
  ranks: 3,
  description: [
    "You generate {value}% more rage from damage dealt.",
    {
      value: [8, 16, 25],
    },
  ],
});

removeTalentsByIdOld("1.0.0e", "warrior", "Fury", [
  "improved_slam",
  "sweeping_strikes",
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
      "When activated, increases your physical damage by 20% and makes you immune to Fear effects, but increases all damage taken by 5%.  Lasts 30 sec.",
    ],
  },
]);

replaceTalentOld("1.0.0e", "warrior", "Fury", "bloodthirst", {
  requiresTalents: "death_wish",
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

/*
removeTalentsByIdOld("1.60.1", "druid", "Restoration", [
  "improved_mark_of_the_wild",
  "improved_enrage",
  "insect_swarm"
]);

moveTalentOld("1.60.1", "druid", "Restoration", "natures_focus", 0, 1);
moveTalentOld("1.60.1", "druid", "Restoration", "subtlety", 1, 1);
moveTalentOld("1.60.1", "druid", "Restoration", "gift_of_nature", 2, 2);
replaceTalentOld("1.60.1", "druid", "Restoration", "gift_of_nature", {
  requiresTalents: null,
});
moveTalentOld("1.60.1", "druid", "Restoration", "improved_rejuvenation", 3, 2);

replaceTalentOld("1.60.1", "druid", "Restoration", "swiftmend", {
  row: 3,
  col: 3,
  requiresTalents: null,
});

replaceTalentOld("1.60.1", "druid", "Restoration", "improved_healing_touch", {
  name: "Naturalist",
  description: [
    "Reduces the cast time of your Healing Touch spell by {value1} sec and increases all damage you deal by {value2}%.",
    {
      value1: [0.1, 0.2, 0.3, 0.4, 0.5],
      value2: [1, 2, 3, 4, 5],
    },
  ],
});

replaceTalentOld("1.60.1", "druid", "Restoration", "improved_regrowth", {
    requiresTalents: "improved_rejuvenation",
});

bulkInsertTalentsOld("1.60.1", "druid", "Restoration", [
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
        value: [10, 20, 30],
      },
    ],
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
      "Reduces the global cooldown by 0.5 seconds on your Rejuvenation, Swiftmend, and Wild Growth spells.",
    ],
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
      "Increases your total Spirit by {value}%.",
      {
        value: [5, 10, 15],
      },
    ],
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
      "Heals the target and their party for (23.1% of Spell Power) over 7 sec. Party members must be within 43.5 yards of target. The amount healed is applied quickly at first, and slows down as Wild Growth reaches its full duration.",
    ],
  },
]);
*/

/*
for (const [classKey, trees] of Object.entries(foreverTalents)) {
  for (const [treeName, talentSpecs] of Object.entries(trees)) {
    if (classKey === "druid" && treeName === "Restoration") continue;
    replaceTalentTreeOld("1.60.1", classKey, treeName, talentSpecs);
  }
}
*/

// ==================== PATCH 1.60.1.69876 ====================
// foreverTalents holds the Alpha 1.60.0 baseline; these forward deltas transform it into the
// 1.60.1.69876 (beta) state. Mostly icon updates, plus two talents removed (Vitality, Balance of
// Nature), two replaced (Restless Blades → Flawless Execution, Drain Hope → Wrack), four moves, and
// six prerequisite changes.

// === WARRIOR ===
replaceTalentFrom("1.60.1.69876", "warrior", "Arms", "bloodthrill", { icon: "inv_sword_01" });
replaceTalentFrom("1.60.1.69876", "warrior", "Protection", "master_of_defense", { icon: "ability_warrior_shieldguard" });
replaceTalentFrom("1.60.1.69876", "warrior", "Protection", "vanguard", { icon: "ability_warrior_shieldcharge" });
// Vitality removed from the tree.
removeTalentsByIdFrom("1.60.1.69876", "warrior", "Protection", ["vitality"]);
// Focused Rage and Bastion moved; Bastion icon updated.
moveTalentFrom("1.60.1.69876", "warrior", "Protection", "focused_rage", 5, 2);
moveTalentFrom("1.60.1.69876", "warrior", "Protection", "bastion", 4, 3);
replaceTalentFrom("1.60.1.69876", "warrior", "Protection", "bastion", { icon: "inv_shield_04" });

// === PALADIN ===
replaceTalentFrom("1.60.1.69876", "paladin", "Holy", "improved_holy_strike", { icon: "classicon_paladin" });
replaceTalentFrom("1.60.1.69876", "paladin", "Holy", "reverence", { icon: "spell_holy_divineillumination" });
replaceTalentFrom("1.60.1.69876", "paladin", "Holy", "lights_vigil", { icon: "ability_paladin_judgementofthepure" });
replaceTalentFrom("1.60.1.69876", "paladin", "Protection", "improved_seal_of_fury", { icon: "spell_holy_righteousnessaura" });
replaceTalentFrom("1.60.1.69876", "paladin", "Protection", "swift_judgement", { icon: "ability_paladin_judgementred" });
replaceTalentFrom("1.60.1.69876", "paladin", "Retribution", "holy_conduit", { icon: "spell_holy_devineaegis" });

// === HUNTER ===
replaceTalentFrom("1.60.1.69876", "hunter", "Marksmanship", "sniper_shot", { icon: "hunter_pvp_snipershot" });
replaceTalentFrom("1.60.1.69876", "hunter", "Survival", "improved_tracking", { icon: "inv_misc_head_dragon_black" });

// === ROGUE ===
replaceTalentFrom("1.60.1.69876", "rogue", "Assassination", "mutilate", { icon: "ability_rogue_deadlybrew" });
// Riposte, Dual Wield Specialization and Weapon Expertise gained prerequisites.
replaceTalentFrom("1.60.1.69876", "rogue", "Combat", "riposte", { requiresTalents: "deflection" });
replaceTalentFrom("1.60.1.69876", "rogue", "Combat", "weapon_expertise", { requiresTalents: "blade_flurry" });
// Aggression no longer requires Hack and Slash.
replaceTalentFrom("1.60.1.69876", "rogue", "Combat", "aggression", { requiresTalents: null });
// Restless Blades replaced by Flawless Execution.
removeTalentsByIdFrom("1.60.1.69876", "rogue", "Combat", ["restless_blades"]);
insertTalentFrom("1.60.1.69876", "rogue", "Combat", {
  id: "flawless_execution",
  name: "Flawless Execution",
  icon: "inv_sword_35",
  row: 3,
  col: 1,
  ranks: 1,
  requiresTalents: null,
  description: [
    "Reduces the Energy cost of your Eviscerate ability by 10.",
  ],
  isActive: false,
});
// Quietus now requires Dirty Deeds; icon updated.
replaceTalentFrom("1.60.1.69876", "rogue", "Subtlety", "quietus", { icon: "ability_rogue_garrote", requiresTalents: "dirty_deeds" });

// === PRIEST ===
replaceTalentFrom("1.60.1.69876", "priest", "Discipline", "soul_warding", { icon: "spell_holy_pureofheart" });
replaceTalentFrom("1.60.1.69876", "priest", "Holy", "litany_of_light", { icon: "inv_scroll_07" });
replaceTalentFrom("1.60.1.69876", "priest", "Shadow", "improved_mind_flay", { icon: "spell_shadow_soulleech_2" });

// === SHAMAN ===
replaceTalentFrom("1.60.1.69876", "shaman", "Elemental", "concussion", { icon: "spell_nature_earthshock" });
replaceTalentFrom("1.60.1.69876", "shaman", "Elemental", "elemental_devastation", { icon: "spell_fire_elementaldevastation" });
replaceTalentFrom("1.60.1.69876", "shaman", "Elemental", "earthbound", { icon: "spell_nature_stranglevines" });
replaceTalentFrom("1.60.1.69876", "shaman", "Enhancement", "mental_quickness", { icon: "spell_nature_sleep" });
replaceTalentFrom("1.60.1.69876", "shaman", "Restoration", "healing_way", { icon: "spell_nature_healingway" });
// Tidal Mastery and Totemic Focus swapped positions.
moveTalentFrom("1.60.1.69876", "shaman", "Restoration", "tidal_mastery", 3, 0);
moveTalentFrom("1.60.1.69876", "shaman", "Restoration", "totemic_focus", 0, 2);

// === MAGE ===
replaceTalentFrom("1.60.1.69876", "mage", "Arcane", "arcane_geometry", { icon: "inv_ability_mage_radiantspark" });
replaceTalentFrom("1.60.1.69876", "mage", "Fire", "improved_scorch", { icon: "spell_fire_windsofwoe" });

// === WARLOCK ===
replaceTalentFrom("1.60.1.69876", "warlock", "Affliction", "soul_harvesting", { icon: "inv_elemental_primal_shadow" });
replaceTalentFrom("1.60.1.69876", "warlock", "Affliction", "improved_drains", { icon: "spell_shadow_haunting" });
replaceTalentFrom("1.60.1.69876", "warlock", "Affliction", "soul_siphon", { icon: "spell_shadow_lifedrain02" });
// Drain Hope replaced by Wrack.
removeTalentsByIdFrom("1.60.1.69876", "warlock", "Affliction", ["drain_hope"]);
insertTalentFrom("1.60.1.69876", "warlock", "Affliction", {
  id: "wrack",
  name: "Wrack",
  icon: "ability_deathknight_hemorrhagicfever",
  row: 6,
  col: 1,
  ranks: 1,
  requiresTalents: "siphon_life",
  description: [
    "Tears the target apart from within, dealing 36 Shadow damage every 1 sec and increasing the damage they take from your other Shadow damage over time effects by 10%. Lasts 6 sec.",
  ],
  isActive: true,
});
replaceTalentFrom("1.60.1.69876", "warlock", "Demonology", "demonic_energies", { icon: "spell_shadow_felmending" });
replaceTalentFrom("1.60.1.69876", "warlock", "Demonology", "demonic_pact", { icon: "inv_ability_soulharvesterwarlock_demonicsoul" });
replaceTalentFrom("1.60.1.69876", "warlock", "Destruction", "shadow_and_flame", { icon: "spell_fire_playingwithfire" });
// Conflagrate no longer requires Shadowburn.
replaceTalentFrom("1.60.1.69876", "warlock", "Destruction", "conflagrate", { requiresTalents: null });

// === DRUID ===
replaceTalentFrom("1.60.1.69876", "druid", "Balance", "natures_splendor", { icon: "spell_nature_natureresistancetotem" });
// Balance of Nature removed from the tree.
removeTalentsByIdFrom("1.60.1.69876", "druid", "Balance", ["balance_of_nature"]);
replaceTalentFrom("1.60.1.69876", "druid", "Feral Combat", "feral_swiftness", { icon: "spell_nature_spiritwolf" });

// Overpower proc chance increased to 4/8/12/16/20% (was 2/4/6/8/10%). Now specifies main-hand attacks.
replaceTalentFrom("1.60.1.70009", "warrior", "Arms", "bloodthrill", {
  description: [
    "Your Main Hand melee attacks against enemies afflicted by your Rend have a {value}% chance to allow the use of your Overpower ability on the target. Lasts 6 sec.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

// Now reduces Slam's cooldown by 1.5/3 seconds. Clarified that Slam does not delay melee swings.
replaceTalentFrom("1.60.1.70009", "warrior", "Arms", "improved_slam", {
  description: [
    "Reduces the global cooldown and cast time of your Slam ability by {value1} sec. In addition, Slam no longer interrupts or delays your melee swing and Slam's cooldown is reduced by {value2} sec.",
    {
      value1: [0.25, 0.50],
      value2: [1.5, 3.0],
    },
  ],
});

// Improved Holy Strike Removed.
removeTalentsByIdFrom("1.60.1.70009", "paladin", "Holy", [
  "improved_holy_strike",
]);

// Now also increases Holy Strike's critical strike chance by 3/6/9/12/15%.
replaceTalentFrom("1.60.1.70009", "paladin", "Holy", "holy_power", {
  description: [
    "Increases the critical strike chance of your Holy Shock and Holy Strike spells by {value1}%, and all other spells by {value2}%.",
    {
      value1: [3, 6, 9, 12, 15],
      value2: [1, 2, 3, 4, 5],
    },
  ],
});

// Tooltip reworded.
replaceTalentFrom("1.60.1.70009", "paladin", "Holy", "lights_vigil", {
  description: [
    "Applies Light's Vigil to the target for 30 sec. Your next Holy Shock cast on them triggers no cooldown and causes enemy targets to suffer 175 to 189 Holy damage and refund 75% of Light's Vigil's Mana cost, or allied targets to heal their party for 326 to 344. The Paladin may only have one Light's Vigil active per party.",
  ],
});

// Holy Strike damage bonus increased to 20% (was 10%).
replaceTalentFrom("1.60.1.70009", "paladin", "Retribution", "sacred_arbiter", {
  description: [
    "Increases the damage of your Holy Strike ability by 20% and causes it to refresh all Judgement effects on the target.",
  ],
});

// Crusade Removed.
removeTalentsByIdFrom("1.60.1.70009", "paladin", "Retribution", [
  "crusade",
]);

// Damage bonus reduced to 2/4/6% (was 3/6/9%).
replaceTalentFrom("1.60.1.70009", "paladin", "Retribution", "two_handed_weapon_specialization", {
  description: [
    "Increases the damage you deal with two-handed melee weapons by {value}%.",
    {
      value: [2, 4, 6],
    },
  ],
});

// Maximum stacks reduced to 3 (was 5). Tooltip now excludes periodic critical strikes.
replaceTalentFrom("1.60.1.70009", "paladin", "Retribution", "vengeance", {
  description: [
    "Increases your Physical and Holy damage dealt by 1% for 30 sec after landing a non-periodic critical strike. Stacks up to 3 times.",
    {
      value: [1, 2, 3],
    },
  ],
});

// Now reduces the Mana cost of Seals by 20%.
replaceTalentFrom("1.60.1.70009", "paladin", "Retribution", "twist_of_light", {
  description: [
    "Reduces the Mana cost of your Seal spells by 20%, and when you replace your Seal of Command, Seal of Righteousness, Seal of Fury, or Seal of Justice with a different Seal, gain an Echo of that Seal. Your next melee attack applies the replaced Seal's effects, consuming the Echo.",
  ],
});

// Now grants 30% movement speed for 3 seconds.
replaceTalentFrom("1.60.1.70009", "hunter", "Survival", "strider_kick", {
  description: [
    "A powerful kick that deals 100% melee weapon damage and increases movement speed by 30% for 3 sec.",
  ],
});

// Fixed a tooltip typo.
replaceTalentFrom("1.60.1.70009", "priest", "Shadow", "devouring_contagion", {
  description: [
    "Reduces the mana cost of your Devouring Plague by {value1}%.\n\nTargets that die while Devouring Plague is active spreads it, jumping to a nearby enemy within {value2} yards for the remaining duration.",
    {
      value1: [25, 50],
      value2: [5, 10],
    },
  ],
});

// Elemental Fury moved to row 6 and now requires Call of Thunder.
replaceTalentFrom("1.60.1.70009", "shaman", "Elemental", "elemental_fury", {
  row: 5,
  requiresTalents: "call_of_thunder",
});

// Call of Thunder now requires all three ranks of Elemental Alacrity.
replaceTalentFrom("1.60.1.70009", "shaman", "Elemental", "call_of_thunder", {
  requiresTalents: "elemental_alacrity",
});

// Elemental Alacrity moved to row 3 and no longer requires Call of Thunder.
replaceTalentFrom("1.60.1.70009", "shaman", "Elemental", "elemental_alacrity", {
  row: 2,
  requiresTalents: null,
});

// Damage increased to 150-192.
replaceTalentFrom("1.60.1.70009", "shaman", "Elemental", "lava_burst", {
  description: [
    "You hurl molten lava at the target, dealing 150 to 192 Fire damage. If your Flame Shock is on the target, Lava Burst deals 20% increased damage.",
  ],
});

// Tooltip no longer mentions increased spell casting speed.
replaceTalentFrom("1.60.1.70009", "shaman", "Enhancement", "rage_of_the_farseer", {
  description: [
    "Increases your melee attack speed by 30% for 25 sec.",
  ],
});

// Bonus Fire Blast critical strike chance now lasts 30 seconds.
replaceTalentFrom("1.60.1.70009", "mage", "Fire", "wake_of_fire", {
  description: [
    "Reduces the cooldown of your Fire Blast spell by {value1} sec. Killing a non-trivial target increases the critical strike chance of your next Fire Blast cast within 30 sec by {value2}%.",
    {
      value1: [1, 2],
      value2: [25, 50],
    },
  ],
});

// Hot Streak duration increased to 20 seconds.
replaceTalentFrom("1.60.1.70009", "mage", "Fire", "hot_streak", {
  description: [
    "Your non-periodic critical strikes with Fireball, Frostfire Bolt, Fire Blast, and Scorch grant Hot Streak for 20 sec. Hot Streak reduces the cast time of Pyroblast by 25%, stacking up to 3 times.",
  ],
});

// Update Ferocity to use Primal Bite's new name.
replaceTalentFrom("1.60.1.70009", "druid", "Feral Combat", "ferocity", {
  description: [
    "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by {value} Rage or Energy.",
    {
      value: [1, 2, 3, 4, 5],
    },
  ],
});

// Mangle renamed to Primal Bite.
replaceTalentFrom("1.60.1.70009", "druid", "Feral Combat", "mangle", {
  name: "Primal Bite",
  icon: "ability_racial_cannibalize",
  description: [
    "Bite the target for 100% normal damage plus 26.",
  ],
});

// Primal Fury renamed to Blood Frenzy.
replaceTalentFrom("1.60.1.70009", "druid", "Feral Combat", "primal_fury", {
  name: "Blood Frenzy",
  icon: "ability_ghoulfrenzy",
});

// Update Berserk to use Primal Bite's new name.
replaceTalentFrom("1.60.1.70009", "druid", "Feral Combat", "berserk", {
  description: [
    "Causes your Primal Bite ability to strike up to 3 targets, removes its cooldown, and increases the critical strike chance of your Combo Point-generating abilities by 100%. Clears and grants immunity to Fear effects for the duration. Lasts 15 sec.",
  ],
});

// ─────────────────────────────────────────────────────────────────────────────
// Patch 1.60.1.70170 (October 1, 2026)
// ─────────────────────────────────────────────────────────────────────────────

// === WARRIOR ===

// Arms: Now requires Battle Stance and a melee weapon. Dismount effect no longer listed.
replaceTalentFrom("1.60.1.70170", "warrior", "Arms", "spearing_strike", {
  description: [
    "A brutal attack that deals 40% weapon damage, plus an additional 80% weapon damage against Giants, Dragonkin, and mounted targets.",
  ],
  requiresWeapon: 1,
  requiresStance: 1,
});

// Arms: Cooldown reduction for Slam is now 3 sec at both ranks, up from 1.5/3 sec.
replaceTalentFrom("1.60.1.70170", "warrior", "Arms", "improved_slam", {
  description: [
    "Reduces the global cooldown and cast time of your Slam ability by {value} sec. In addition, Slam no longer interrupts or delays your melee swing and Slam's cooldown is reduced by 3 sec.",
    {
      value: [0.25, 0.50],
    },
  ],
});

// Fury: Iron Will relocated to Protection tree.
removeTalentsByIdFrom("1.60.1.70170", "warrior", "Fury", ["iron_will"]);
insertTalentFrom("1.60.1.70170", "warrior", "Protection", {
  id: "iron_will",
  name: "Iron Will",
  icon: "spell_magic_magearmor",
  row: 0,
  col: 2,
  ranks: 5,
  requiresTalents: null,
  description: [
    "Reduces the duration of Stun and Fear effects inflicted on you by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
  isActive: false,
});

// Fury: Lingering Rage replaces Iron Will at (row 1, col 1).
insertTalentFrom("1.60.1.70170", "warrior", "Fury", {
  id: "lingering_rage",
  name: "Lingering Rage",
  icon: "ability_warrior_secondwind",
  row: 1,
  col: 1,
  ranks: 5,
  requiresTalents: null,
  description: [
    "Delays the start of your Rage decay by {value} sec after leaving combat.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
  isActive: false,
});

// Fury: Unbridled Wrath tooltip removes the two-handed weapon bonus.
replaceTalentFrom("1.60.1.70170", "warrior", "Fury", "unbridled_wrath", {
  description: [
    "Gives you a {value}% chance to generate 1 additional Rage when you deal melee damage with a weapon.",
    {
      value: [12, 24, 36, 48, 60],
    },
  ],
});

// Fury: Improved Cleave removed.
removeTalentsByIdFrom("1.60.1.70170", "warrior", "Fury", ["improved_cleave"]);

// Fury: Piercing Howl now specifies 10-yard radius.
replaceTalentFrom("1.60.1.70170", "warrior", "Fury", "piercing_howl", {
  description: [
    "Causes all enemies within 10 yds to be Dazed, reducing movement speed by 50% for 6 sec.",
  ],
});

// Fury: Blood Craze Bloodthirst trigger removed.
replaceTalentFrom("1.60.1.70170", "warrior", "Fury", "blood_craze", {
  description: [
    "Regenerates {value}% of your total Health over 6 sec after being the victim of a critical strike or suffering more than 20% of your maximum Health from a single attack.",
    {
      value: [1, 2, 3],
    },
  ],
});

// Fury: Off-hand Rage generation reduced from 20/40/60/80/100% to 10/20/30/40/50%. Hit bonus removed.
replaceTalentFrom("1.60.1.70170", "warrior", "Fury", "dual_wield_specialization", {
  description: [
    "Increases the damage done by your off-hand weapon by {value1}% and the Rage generated by your off-hand attacks by {value2}%.",
    {
      value1: [5, 10, 15, 20, 25],
      value2: [10, 20, 30, 40, 50],
    },
  ],
});

// Fury: Raging Blows — Cleave/Whirlwind cost reduced by 3; off-hand Whirlwind strike removed.
replaceTalentFrom("1.60.1.70170", "warrior", "Fury", "raging_blows", {
  description: [
    "Reduces the Rage cost of your Cleave and Whirlwind abilities by 3.",
  ],
});

// Fury: Precision removed.
removeTalentsByIdFrom("1.60.1.70170", "warrior", "Fury", ["precision"]);

// Fury: Gore Drinker — new talent at (row 5, col 2). Requires Enrage.
insertTalentFrom("1.60.1.70170", "warrior", "Fury", {
  id: "gore_drinker",
  name: "Gore Drinker",
  icon: "racial_troll_berserk",
  row: 5,
  col: 2,
  ranks: 2,
  requiresTalents: "enrage",
  description: [
    "Your Enrage, Berserker Rage, Bloodrage, Death Wish, and Bloodthirst abilities cause your next 3 melee attacks to restore {value}% of your maximum Health.",
    {
      value: [0.5, 1.0],
    },
  ],
  isActive: false,
});

// Fury: Boundless Rage replaced by Furious Precision at (row 2, col 0). Icon updated.
removeTalentsByIdFrom("1.60.1.70170", "warrior", "Fury", ["boundless_rage"]);
insertTalentFrom("1.60.1.70170", "warrior", "Fury", {
  id: "furious_precision",
  name: "Furious Precision",
  icon: "ability_warrior_incite",
  row: 2,
  col: 0,
  ranks: 3,
  requiresTalents: null,
  description: [
    "Increases your chance to hit with off-hand attacks by {value}%.",
    {
      value: [4, 7, 10],
    },
  ],
  isActive: false,
});

// Fury: Booming Voice now affects all Shouts and reduces their Rage cost by 5/10/15/20/25%.
replaceTalentFrom("1.60.1.70170", "warrior", "Fury", "booming_voice", {
  description: [
    "Increases the area of effect of your Shouts by {value1}% and reduces their Rage cost by {value2}%.",
    {
      value1: [10, 20, 30, 40, 50],
      value2: [5, 10, 15, 20, 25],
    },
  ],
});

// Fury: Improved Berserker Rage moved from row 5 to row 4.
moveTalentFrom("1.60.1.70170", "warrior", "Fury", "improved_berserker_rage", 4, 0);

// Fury: Flurry moved from col 2 to col 1; now requires Death Wish instead of Enrage.
replaceTalentFrom("1.60.1.70170", "warrior", "Fury", "flurry", {
  col: 1,
  requiresTalents: "death_wish",
});

// Fury: Bloodthirst — AP scaling increased to 45%; Death Wish prerequisite removed.
replaceTalentFrom("1.60.1.70170", "warrior", "Fury", "bloodthirst", {
  requiresTalents: null,
  description: [
    "Instantly attack the target causing damage equal to 45% of your Attack Power plus 30 and increasing your movement speed by 10% for 10 sec.",
  ],
});

// Protection tree restructure: Improved Bloodrage moves to row 0.
moveTalentFrom("1.60.1.70170", "warrior", "Protection", "improved_bloodrage", 0, 0);

// Protection: Anticipation moves to row 1, col 0 (where Improved Bloodrage was).
moveTalentFrom("1.60.1.70170", "warrior", "Protection", "anticipation", 1, 0);

// Protection: Toughness removed.
removeTalentsByIdFrom("1.60.1.70170", "warrior", "Protection", ["toughness"]);

// Protection: Last Stand no longer requires Improved Bloodrage.
replaceTalentFrom("1.60.1.70170", "warrior", "Protection", "last_stand", {
  requiresTalents: null,
});

// Protection: Improved Revenge moves to row 1.
moveTalentFrom("1.60.1.70170", "warrior", "Protection", "improved_revenge", 1, 2);

// Protection: Improved Disarm moves to row 2, col 2.
moveTalentFrom("1.60.1.70170", "warrior", "Protection", "improved_disarm", 2, 2);

// Protection: Vanguard moves to col 1.
moveTalentFrom("1.60.1.70170", "warrior", "Protection", "vanguard", 3, 1);

// Protection: Improved Shield Bash moves to row 3.
moveTalentFrom("1.60.1.70170", "warrior", "Protection", "improved_shield_bash", 3, 2);

// Protection: Focused Rage moves to row 4.
moveTalentFrom("1.60.1.70170", "warrior", "Protection", "focused_rage", 4, 2);

// Protection: Bastion moves to row 5, col 2.
moveTalentFrom("1.60.1.70170", "warrior", "Protection", "bastion", 5, 2);

// === PALADIN ===

// Holy: Voice of Truth duration now inline ("for 6 sec" instead of "Lasts 6 sec.").
replaceTalentFrom("1.60.1.70170", "paladin", "Holy", "voice_of_truth", {
  description: [
    "Grants you immunity to Silence and Interrupt effects for 6 sec.",
  ],
});

// Holy: Light's Vigil reordered (enemy clause first), "friendly" → "allied", simplified per-party limit.
replaceTalentFrom("1.60.1.70170", "paladin", "Holy", "lights_vigil", {
  description: [
    "Applies Light's Vigil to the target for 30 sec. Your next Holy Shock cast on them triggers no cooldown and causes enemy targets to suffer 175 to 189 Holy damage and refund 75% of Light's Vigil's Mana cost, or allied targets to heal their party for 326 to 344. You may only have one Light's Vigil active per party.",
  ],
});

// Protection: Redoubt block-chance reduced from 6/12/18/24/30% to 4/8/12/16/20%.
replaceTalentFrom("1.60.1.70170", "paladin", "Protection", "redoubt", {
  description: [
    "Damaging melee attacks against you have a 10% chance to increase your chance to block by {value}%.  Lasts 10 sec or 5 blocks.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

// Protection: Holy Shield block-chance increased from 20% to 30%.
replaceTalentFrom("1.60.1.70170", "paladin", "Protection", "holy_shield", {
  description: [
    "Increases chance to block by 30% for 10 sec, and deals 110 Holy damage for each attack blocked while active.  Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges.",
  ],
});

// Protection: Iron Creed tooltip corrected (added "by" before threat value).
replaceTalentFrom("1.60.1.70170", "paladin", "Protection", "iron_creed", {
  description: [
    "Increases the threat generated by your Holy Strike ability by {value1}%. While Righteous Fury is active, Holy Strike also reduces your damage taken by {value2}% for 6 sec.",
    {
      value1: [5, 10, 15, 20, 25],
      value2: [2, 4, 6, 8, 10],
    },
  ],
});

// Retribution: Champion of the Light Intellect scaling reduced to 20/40/60% (from 33/66/100%); healing bonus removed.
replaceTalentFrom("1.60.1.70170", "paladin", "Retribution", "champion_of_the_light", {
  description: [
    "Increases your spell damage and healing by up to {value}% of your Intellect.",
    {
      value: [20, 40, 60],
    },
  ],
});

// Retribution: Twist of Light now explicitly states 20% Mana cost reduction for Seal spells.
replaceTalentFrom("1.60.1.70170", "paladin", "Retribution", "twist_of_light", {
  description: [
    "Reduces the Mana cost of your Seal spells by 20%, and when you replace your Seal of Command, Seal of Righteousness, Seal of Fury, or Seal of Justice with a different Seal, you gain an Echo of that Seal. Your next melee attack applies the replaced Seal's effects, consuming the Echo.",
  ],
});

// === HUNTER ===

// Marksmanship: Sniper Shot maximum range increased from 35 to 45 yards; description updated.
replaceTalentFrom("1.60.1.70170", "hunter", "Marksmanship", "sniper_shot", {
  maxRange: 45,
  description: [
    "A long-range shot that deals ranged damage plus 160 and increases the range of your next 3 Shots by 10 yards for 10 sec.",
  ],
});

// Marksmanship: Improved Stings icon updated; grammar corrected ("Increased" → "Increases").
replaceTalentFrom("1.60.1.70170", "hunter", "Marksmanship", "improved_stings", {
  icon: "ability_hunter_quickshot",
  description: [
    "Increases the damage of your Serpent Sting ability by {value1}%, reduces the cooldown of your Viper Sting ability by {value2} sec, and increases the duration of your Scorpid Sting ability by {value3} sec.",
    {
      value1: [6, 13, 20],
      value2: [2, 4, 6],
      value3: [15, 30, 45],
    },
  ],
});

// Survival: Deflection parry bonus reduced from 2/4/6/8/10% to 1/2/3/4/5%.
replaceTalentFrom("1.60.1.70170", "hunter", "Survival", "deflection", {
  description: [
    "Increases your Parry chance by {value}%.",
    {
      value: [1, 2, 3, 4, 5],
    },
  ],
});

// Survival: Predator's Edge icon updated; "offhand" → "off-hand" in description.
replaceTalentFrom("1.60.1.70170", "hunter", "Survival", "predators_edge", {
  icon: "ability_dualwield",
  description: [
    "Increases your melee critical strike damage by {value1}% and your off-hand weapon damage by {value2}%.",
    {
      value1: [6, 12, 18, 24, 30],
      value2: [10, 20, 30, 40, 50],
    },
  ],
});

// Survival: Lacerating Strikes bleed clause reordered (duration moved to end).
replaceTalentFrom("1.60.1.70170", "hunter", "Survival", "lacerating_strikes", {
  description: [
    "Your Mongoose Bite also causes the target to Bleed for damage equal to 40% of the damage done by Mongoose Bite over 21 sec.",
  ],
});

// Marksmanship: Trueshot Aura 30-minute duration removed; "yards" abbreviated to "yds".
replaceTalentFrom("1.60.1.70170", "hunter", "Marksmanship", "trueshot_aura", {
  description: [
    "Increases the Ranged Attack Power of party members within 45 yds by 30.",
  ],
});

// === ROGUE ===

// Assassination: Venom combo point duration formatting updated.
replaceTalentFrom("1.60.1.70170", "rogue", "Assassination", "venom", {
  description: [
    "Finishing move that increases the damage of your Poisons by 30% and your chance to apply Poisons by 10%.  Lasts longer per combo point:\n1 point  : 9 sec\n2 points: 12 sec\n3 points: 15 sec\n4 points: 18 sec\n5 points: 21 sec",
  ],
});

// Subtlety: Setup now specifies dodging the target's attacks or fully resisting the target's spells.
replaceTalentFrom("1.60.1.70170", "rogue", "Subtlety", "setup", {
  description: [
    "Gives you a {value}% chance to add a Combo Point to your target after dodging one of their attacks or fully resisting one of their spells.",
    {
      value: [33, 67, 100],
    },
  ],
});

// === PRIEST ===

// Discipline: Inner Focus critical-effect bonus now applies only to non-periodic spells.
replaceTalentFrom("1.60.1.70170", "priest", "Discipline", "inner_focus", {
  description: [
    "When activated, reduces the Mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is a non-periodic spell and capable of a critical effect.",
  ],
});

// Shadow: Spirit Tap now lists trigger chance when a target with Vampiric Embrace dies.
replaceTalentFrom("1.60.1.70170", "priest", "Shadow", "spirit_tap", {
  description: [
    "Gives you a {value}% chance to increase your Spirit by 100% for 15 sec after killing a non-trivial target or when an enemy afflicted by your Vampiric Embrace dies. For the duration, 50% of your Mana regeneration will continue while casting.",
    {
      value: [20, 40, 60, 80, 100],
    },
  ],
});

// Shadow: The Spirit Tap interaction is now described on Spirit Tap instead of Vampiric Embrace.
replaceTalentFrom("1.60.1.70170", "priest", "Shadow", "vampiric_embrace", {
  description: [
    "Afflicts your target with Shadow energy that causes all party members to be healed for 20% of any Shadow spell damage you deal for 30 sec.",
  ],
});

// Shadow: Devouring Contagion range formatting updated; "it" typo removed, "yards" → "yds".
replaceTalentFrom("1.60.1.70170", "priest", "Shadow", "devouring_contagion", {
  description: [
    "Reduces the mana cost of your Devouring Plague by {value1}%.\n\nTargets that die while Devouring Plague is active spreads it, jumping to a nearby enemy within {value2} yds for the remaining duration.",
    {
      value1: [25, 50],
      value2: [5, 10],
    },
  ],
});

// === MAGE ===

// Fire: Hot Streak renamed to Heating Up; icon updated.
replaceTalentFrom("1.60.1.70170", "mage", "Fire", "hot_streak", {
  name: "Heating Up",
  icon: "spell_fire_firebolt",
  description: [
    "Non-periodic critical strikes with Fireball, Frostfire Bolt, Fire Blast, and Scorch reduce the cast time of your next Pyroblast cast within 20 sec by 25%, stacking up to 3 times.",
  ],
});

// Fire: Combustion now ends after 3 non-periodic Fire critical strikes (down from 4).
replaceTalentFrom("1.60.1.70170", "mage", "Fire", "combustion", {
  description: [
    "When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%.  This effect lasts until you have caused 3 non-periodic critical strikes with Fire spells.",
  ],
});

// === WARLOCK ===

// Affliction: Soul Harvesting renamed to Soul Harvest; now specifies non-trivial target with Drain Soul.
replaceTalentFrom("1.60.1.70170", "warlock", "Affliction", "soul_harvesting", {
  name: "Soul Harvest",
  description: [
    "Killing a non-trivial target afflicted by your Drain Soul increases your Mana regeneration by {value}% for 10 sec and allows {value}% of normal Mana regeneration to continue while casting.",
    {
      value: [50, 100],
    },
  ],
});

// === DRUID ===

// Feral Combat: Shredding Attacks moved from row 3 to row 2 (0-indexed).
moveTalentFrom("1.60.1.70170", "druid", "Feral Combat", "shredding_attacks", 2, 0);

// Feral Combat: Predatory Instincts moved from col 0 to col 3.
moveTalentFrom("1.60.1.70170", "druid", "Feral Combat", "predatory_instincts", 4, 3);

// Feral Combat: Primal Bite now explicitly states high threat generation.
replaceTalentFrom("1.60.1.70170", "druid", "Feral Combat", "mangle", {
  description: [
    "Bite the target, dealing 100% normal damage plus 26 and generating a high amount of threat.",
  ],
});

// Feral Combat: King of the Jungle replaced by Shifting Power at (row 3, col 0). Icon: spell_druid_displacement.
removeTalentsByIdFrom("1.60.1.70170", "druid", "Feral Combat", ["king_of_the_jungle"]);
insertTalentFrom("1.60.1.70170", "druid", "Feral Combat", {
  id: "shifting_power",
  name: "Shifting Power",
  icon: "spell_druid_displacement",
  row: 3,
  col: 0,
  ranks: 1,
  requiresTalents: "shredding_attacks",
  description: [
    "Converts 55% of your base Mana into 40 Energy. Shifting Power's cost is reduced by effects that reduce the cost of shapeshifting.",
  ],
  isActive: true,
  castTime: null,
  cooldown: 16,
  spentResource: 55,
  absoluteSpent: false,
  range: null,
  requiresCatForm: true,
});

// Feral Combat: Improved Shifting Power — new talent at (row 4, col 0). Icon: ability_hunter_aspectmastery.
insertTalentFrom("1.60.1.70170", "druid", "Feral Combat", {
  id: "improved_shifting_power",
  name: "Improved Shifting Power",
  icon: "ability_hunter_aspectmastery",
  row: 4,
  col: 0,
  ranks: 2,
  requiresTalents: "shifting_power",
  description: [
    "Reduces the cooldown of your Shifting Power ability by {value} sec.",
    {
      value: [4, 8],
    },
  ],
  isActive: false,
});

// Balance: Moonkin Form first paragraph rewritten; Polymorph protection now explicit.
replaceTalentFrom("1.60.1.70170", "druid", "Balance", "moonkin_form", {
  description: [
    "Shapeshift into Moonkin Form, increasing Omen of Clarity's chance to trigger by 100%, Armor contribution from items by 360%, and all party members within 45 yards have their critical strike chance increased by 3%, exclusive with Leader of the Pack. Also protects the caster from Polymorph effects and prevents the use of healing spells.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
  ],
});

// ─────────────────────────────────────────────────────────────────────────────
// Patch 1.60.1.70291 (October 8, 2026)
// ─────────────────────────────────────────────────────────────────────────────

// === WARRIOR ===

// Arms: Spearing Strike now explicitly dismounts mounted targets.
replaceTalentFrom("1.60.1.70291", "warrior", "Arms", "spearing_strike", {
  description: [
    "A brutal attack that deals 40% weapon damage, plus an additional 80% weapon damage against Giants, Dragonkin, and mounted targets. Mounted targets are dismounted.",
  ],
});

// Arms: Impale now requires maximum rank of Deep Wounds as a prerequisite.
replaceTalentFrom("1.60.1.70291", "warrior", "Arms", "impale", {
  requiresTalents: "deep_wounds",
});

// === PALADIN ===

// Protection: Reckoning extra attacks cannot occur more than once every 1.5 seconds.
replaceTalentFrom("1.60.1.70291", "paladin", "Protection", "reckoning", {
  description: [
    "Gives you a {value1}% chance to gain an extra attack after Blocking a melee attack and a {value2}% chance to gain an extra attack after being the victim of a non-periodic critical strike. Extra attacks cannot occur more than once every 1.5 seconds.",
    {
      value1: [8, 16, 24, 32, 40],
      value2: [20, 40, 60, 80, 100],
    },
  ],
});

// === HUNTER ===

// Survival: Expose Prey's Mongoose Bite activation window increased from 5 to 10 seconds.
replaceTalentFrom("1.60.1.70291", "hunter", "Survival", "expose_prey", {
  description: [
    "Your attacks against targets with Hunter's Mark have a {value}% chance to activate your Mongoose Bite for 10 sec.",
    {
      value: [5, 10],
    },
  ],
});

// === PRIEST ===

// Discipline: Penance rank 1 mana cost increased from 100 to 150; base damage and healing reduced with lower ranks gaining additional points per level. (Description values pending exact numbers.)

// === SHAMAN ===

// Restoration: Water Shield's 15-second cooldown has been removed.
replaceTalentFrom("1.60.1.70291", "shaman", "Restoration", "water_shield", {
  cooldown: null,
});

// === WARLOCK ===

// Demonology: Demonic Brand now only generates high threat from Shadow damage; Fire damage attacks no longer receive the threat bonus.
replaceTalentFrom("1.60.1.70291", "warlock", "Demonology", "demonic_brand", {
  description: [
    "Your Searing Pain generates {value1}% less threat and brands the target for 10 sec. Your pet's next {value2} attacks against the target deal 65 to 68 Fire or Shadow damage based on the pet. If Shadow damage is dealt, it has high threat.",
    {
      value1: [17, 33, 50],
      value2: [2, 4, 6],
    },
  ],
});

// === DRUID ===

// Feral Combat: Predatory Instincts renamed to Natural Instinct; now also increases healing done by spells by 12/25% of Intellect.
replaceTalentFrom("1.60.1.70291", "druid", "Feral Combat", "predatory_instincts", {
  name: "Natural Instinct",
  description: [
    "Increases the critical strike damage bonus of your melee abilities by {value1}% and increases your spell healing by {value2}% of your Intellect.",
    {
      value1: [10, 20],
      value2: [12, 25],
    },
  ],
});

// Restoration: Bear Form and Dire Bear Form forfeit stored Cat Form Energy and pause its restoration.
replaceTalentFrom("1.60.1.70291", "druid", "Restoration", "furor", {
  description: [
    "Gives you a {value1}% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores {value1}% of the Energy you had when last in Cat Form, plus {value2} Energy per sec spent outside Cat Form, up to {value1} Energy. Bear Form and Dire Bear Form forfeit this Energy and halt its restoration while active.",
    {
      value1: [20, 40, 60, 80, 100],
      value2: [2, 4, 6, 8, 10],
    },
  ],
});

// ─────────────────────────────────────────────────────────────────────────────
// Patch 1.60.1.70425 (October 16, 2026)
// ─────────────────────────────────────────────────────────────────────────────

// === WARRIOR ===

// Arms: Bloodthrill now specifies main hand attacks, not all melee attacks.
replaceTalentFrom("1.60.1.70425", "warrior", "Arms", "bloodthrill", {
  description: [
    "Grants your Main Hand melee attacks against enemies afflicted by your Rend a {value}% chance to allow an activation of Overpower.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

// === PALADIN ===

// Protection: Shield Specialization block mana restore reduced from 6% to 4%.
replaceTalentFrom("1.60.1.70425", "paladin", "Protection", "shield_specialization", {
  description: [
    "Increases the amount of damage absorbed by your shield by {value1}%, and gives your blocks a {value2}% chance to restore 4% of your maximum Mana. May only occur once every 3 sec.",
    {
      value1: [10, 20, 30],
      value2: [33, 66, 100],
    },
  ],
});

// Protection: Reckoning can now store up to 4 extra attacks; the 1.5-second limit applies only to block triggers.
replaceTalentFrom("1.60.1.70425", "paladin", "Protection", "reckoning", {
  description: [
    "Gives you a {value1}% chance after Blocking and a {value2}% chance after receiving a non-periodic critical strike to gain an extra attack. Stores up to 4 extra attacks. Cannot occur from Blocks more than once every 1.5 sec.",
    {
      value1: [8, 16, 24, 32, 40],
      value2: [20, 40, 60, 80, 100],
    },
  ],
});

// Retribution: Champion of the Light values reduced from 20/40/60 to 10/20/30.
replaceTalentFrom("1.60.1.70425", "paladin", "Retribution", "champion_of_the_light", {
  description: [
    "Increases your spell damage by up to {value}% of your Intellect.",
    {
      value: [10, 20, 30],
    },
  ],
});

// === HUNTER ===

// Marksmanship: Trueshot Aura now benefits raid members as well as party members.
replaceTalentFrom("1.60.1.70425", "hunter", "Marksmanship", "trueshot_aura", {
  description: [
    "Increases the Ranged Attack Power of party or raid members within 45 yds by 30.",
  ],
});

// Marksmanship: Rapid Recuperation description clarified.
replaceTalentFrom("1.60.1.70425", "hunter", "Marksmanship", "rapid_recuperation", {
  description: [
    "Afflicting a target with Serpent Sting allows {value1}% of your Mana Regeneration to continue while casting for 15 sec, increased to {value2}% when Rapid Killing is consumed.",
    {
      value1: [25, 50],
      value2: [50, 100],
    },
  ],
});

// Survival: Predator's Edge now explicitly states critical strike damage of melee abilities.
replaceTalentFrom("1.60.1.70425", "hunter", "Survival", "predators_edge", {
  description: [
    "Increases your melee ability critical strike damage by {value1}% and your Off Hand weapon damage by {value2}%.",
    {
      value1: [6, 12, 18, 24, 30],
      value2: [10, 20, 30, 40, 50],
    },
  ],
});

// Survival: Resourcefulness now specifies melee and ranged ability critical strikes.
replaceTalentFrom("1.60.1.70425", "hunter", "Survival", "resourcefulness", {
  description: [
    "Reduces the Mana cost of your Trap and melee abilities by {value1}%, and grants your melee and ranged ability Critical Strikes a {value2}% chance to allow 50% of your Mana Regeneration to continue while casting for 30 sec.",
    {
      value1: [30, 60],
      value2: [50, 100],
    },
  ],
});

// Survival: Expose Prey now specifies melee and ranged attacks.
replaceTalentFrom("1.60.1.70425", "hunter", "Survival", "expose_prey", {
  description: [
    "Grants your melee and ranged attacks against enemies afflicted by Hunter's Mark a {value}% chance to allow an activation of Mongoose Bite. Lasts 10 sec.",
    {
      value: [5, 10],
    },
  ],
});

// Survival: Strider Kick no longer requires a Melee Weapon.
replaceTalentFrom("1.60.1.70425", "hunter", "Survival", "strider_kick", { 
  requiresWeapon: 0 
});


// === PRIEST ===

// Discipline: Power in Light now triggers on Holy Fire or Shadow Word: Pain.
replaceTalentFrom("1.60.1.70425", "priest", "Discipline", "power_in_light", {
  description: [
    "Your Smite and Penance spells deal {value}% increased damage to targets afflicted with your Holy Fire or Shadow Word: Pain.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

// Discipline: Silent Resolve now reduces threat from all spells, not just Holy.
replaceTalentFrom("1.60.1.70425", "priest", "Discipline", "silent_resolve", {
  description: [
    "Reduces the threat generated by your spells by {value1}% and reduces the duration of Stun, Fear, and Silence effects inflicted on you by {value2}%.",
    {
      value1: [10, 20, 30],
      value2: [5, 10, 15],
    },
  ],
});

// Discipline: Improved Power Word: Shield moves from row 1 to row 2 (col 2 unchanged).
moveTalentFrom("1.60.1.70425", "priest", "Discipline", "improved_power_word_shield", 2, 2);

// Discipline: Mental Strength values reduced to 2/4/6/8/10%; moves to row 1 col 2.
moveTalentFrom("1.60.1.70425", "priest", "Discipline", "mental_strength", 1, 2);
replaceTalentFrom("1.60.1.70425", "priest", "Discipline", "mental_strength", {
  description: [
    "Increases your total Intellect by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

// Discipline: Improved Mana Burn moves from col 3 to col 1 (row 3 unchanged).
moveTalentFrom("1.60.1.70425", "priest", "Discipline", "improved_mana_burn", 3, 1);

// Discipline: Twilight Focus casting time loss prevention clarified.
replaceTalentFrom("1.60.1.70425", "priest", "Discipline", "twilight_focus", {
  description: [
    "Gives your spells a {value}% chance to not lose casting time when you take damage.",
    {
      value: [23, 47, 70],
    },
  ],
});

// Discipline: Divine Aegis now only triggers on non-periodic crits and caps at 1200 absorbed.
replaceTalentFrom("1.60.1.70425", "priest", "Discipline", "divine_aegis", {
  description: [
    "Your non-periodic critical heals create a protective shield on the target, absorbing {value}% of the amount healed. Shields up to 1200 damage and lasts 12 sec.",
    {
      value: [5, 10, 15],
    },
  ],
});

// Shadow: Shadow Affinity removed; Improved Mind Blast moves from row 2 col 0 to row 1 col 0.
removeTalentsByIdFrom("1.60.1.70425", "priest", "Shadow", ["shadow_affinity"]);
moveTalentFrom("1.60.1.70425", "priest", "Shadow", "improved_mind_blast", 1, 0);

// Shadow: Improved Mind Flay now escalates damage per instance.
replaceTalentFrom("1.60.1.70425", "priest", "Shadow", "improved_mind_flay", {
  description: [
    "Each instance of damage of Mind Flay deals {value}% more damage than its previous instance of damage.",
    {
      value: [10, 20],
    },
  ],
});

// Shadow: Improved Fade replaced by Dark Inspiration at row 3, col 0.
removeTalentsByIdFrom("1.60.1.70425", "priest", "Shadow", ["improved_fade"]);
insertTalentFrom("1.60.1.70425", "priest", "Shadow", {
  id: "dark_inspiration",
  name: "Dark Inspiration",
  icon: "spell_warlock_demonsoul",
  row: 3,
  col: 0,
  ranks: 5,
  requiresTalents: null,
  description: [
    "Your Mind Blast and fully channeled Mind Flay causes Dark Inspiration, increasing yours and your party's Spirit by {value}% for 10 sec.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
  isActive: false,
});

// Shadow: Vampiric Embrace cooldown reduced from 60 to 30 seconds.
replaceTalentFrom("1.60.1.70425", "priest", "Shadow", "vampiric_embrace", {
  cooldown: 30,
});

// Shadow: Shadow Weaving now clarifies it increases Shadow damage the target takes from you.
replaceTalentFrom("1.60.1.70425", "priest", "Shadow", "shadow_weaving", {
  description: [
    "Your Shadow damage spells have a {value}% chance to increase the Shadow damage the target takes from you by 2% for 15 sec, stacking up to 5 times.",
    {
      value: [33, 67, 100],
    },
  ],
});

// Shadow: Devouring Contagion now spreads to 2 nearby enemies.
replaceTalentFrom("1.60.1.70425", "priest", "Shadow", "devouring_contagion", {
  description: [
    "Reduces the mana cost of your Devouring Plague by {value}%.\n\nTargets that die while Devouring Plague is active spreads it, jumping to 2 nearby enemies within {range} yds for the remaining duration.",
    {
      value: [25, 50],
      range: [5, 10],
    },
  ],
});

// === SHAMAN ===

// Elemental: Major tree restructure. Order of operations matters for positions.

// Elemental: Elemental Warding moves from row 1 col 0 to row 2 col 1 (frees row 1 col 0 for Elemental Devastation).
moveTalentFrom("1.60.1.70425", "shaman", "Elemental", "elemental_warding", 2, 1);

// Elemental: Call of Thunder removed.
removeTalentsByIdFrom("1.60.1.70425", "shaman", "Elemental", ["call_of_thunder"]);

// Elemental: Elemental Devastation moves from row 1 col 3 to row 1 col 0; now specifies direct damage spell crits.
moveTalentFrom("1.60.1.70425", "shaman", "Elemental", "elemental_devastation", 1, 0);
replaceTalentFrom("1.60.1.70425", "shaman", "Elemental", "elemental_devastation", {
  description: [
    "Your Critical Strikes with direct damage spells increase your chance to get a Critical Strike with melee attacks by {value}% for 10 sec.",
    {
      value: [3, 6, 9],
    },
  ],
});

// Elemental: Call of Flame moves from row 1 col 2 to row 1 col 3; now also extends Flame Shock duration.
moveTalentFrom("1.60.1.70425", "shaman", "Elemental", "call_of_flame", 1, 3);
replaceTalentFrom("1.60.1.70425", "shaman", "Elemental", "call_of_flame", {
  description: [
    "Increases the damage done by your Fire Totems and by your Flame Shock, Fire Nova, and Lava Burst spells by {value}%, as well as increases the duration of your Flame Shock spell by {sec} sec.",
    {
      value: [5, 10, 15],
      sec: [3, 6, 9],
    },
  ],
});

// Elemental: Elemental Alacrity moves from row 5 col 2 to row 1 col 2; prerequisite removed.
moveTalentFrom("1.60.1.70425", "shaman", "Elemental", "elemental_alacrity", 1, 2);
replaceTalentFrom("1.60.1.70425", "shaman", "Elemental", "elemental_alacrity", {
  requiresTalents: null,
});

// Elemental: Elemental Focus moves from row 2 col 1 to row 2 col 0.
moveTalentFrom("1.60.1.70425", "shaman", "Elemental", "elemental_focus", 2, 0);

// Elemental: Improved Fire Nova renamed to Trial by Fire; now also increases Fire Nova damage and reduces cooldown.
replaceTalentFrom("1.60.1.70425", "shaman", "Elemental", "improved_fire_nova", {
  name: "Trial by Fire",
  description: [
    "Increases the damage done by your Fire Nova spell by {value1}% and reduces its cooldown by {value2} sec, and increases the duration of your Magma Totem by {value3} sec.",
    {
      value1: [10, 20],
      value2: [2, 4],
      value3: [10, 20],
    },
  ],
});

// Elemental: Eye of the Storm casting time loss prevention clarified.
replaceTalentFrom("1.60.1.70425", "shaman", "Elemental", "eye_of_the_storm", {
  description: [
    "Gives your Lightning Bolt, Chain Lightning, and Lava Burst spells a {value}% chance to not lose casting time when you take damage.",
    {
      value: [23, 47, 70],
    },
  ],
});

// Elemental: Elemental Fury now requires Lightning Overload as a prerequisite.
replaceTalentFrom("1.60.1.70425", "shaman", "Elemental", "elemental_fury", {
  requiresTalents: "lightning_overload",
});

// Elemental: Earthbound moves from row 4 col 3 to row 3 col 3.
moveTalentFrom("1.60.1.70425", "shaman", "Elemental", "earthbound", 3, 3);

// Elemental: Elemental Reach now reduces Totemic Projection cooldown instead of extending Flame Shock range.
replaceTalentFrom("1.60.1.70425", "shaman", "Elemental", "elemental_reach", {
  description: [
    "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by {value1} yards and reduces the cooldown of Totemic Projection by {value2} sec.",
    {
      value1: [3, 6],
      value2: [10, 20],
    },
  ],
});

// Elemental: Lightning Overload moves from row 4 col 1 to row 4 col 2; now requires Elemental Alacrity.
moveTalentFrom("1.60.1.70425", "shaman", "Elemental", "lightning_overload", 4, 2);
replaceTalentFrom("1.60.1.70425", "shaman", "Elemental", "lightning_overload", {
  requiresTalents: "elemental_alacrity",
});

// Elemental: Lava Burst moves from row 6 col 1 to row 4 col 1; no longer requires Lightning Overload; mana cost reduced; damage reduced.
replaceTalentFrom("1.60.1.70425", "shaman", "Elemental", "lava_burst", {
  row: 4,
  col: 1,
  requiresTalents: null,
  spentResource: 135,
  description: [
    "You hurl molten lava at the target, dealing 114 to 145 Fire damage. If your Flame Shock is on the target, Lava Burst deals 20% increased damage.",
  ],
});

// Elemental: Elemental Mastery — new active talent at row 6 col 1.
insertTalentFrom("1.60.1.70425", "shaman", "Elemental", {
  id: "elemental_mastery",
  name: "Elemental Mastery",
  icon: "spell_nature_wispheal",
  row: 6,
  col: 1,
  ranks: 1,
  requiresTalents: "lava_burst",
  description: [
    "Gain mastery over Fire and Lightning, reducing the cast time of Lightning Bolt and Lava Burst by 0.5 sec, and removing the cooldown from Chain Lightning. Lasts 15 sec.",
  ],
  isActive: true,
  castTime: null,
  cooldown: 180,
  spentResource: null,
  range: null,
  requiresWeapon: 0,
});

// Enhancement: Stormstrike mana cost reduced from 21% to 8% of base mana.
replaceTalentFrom("1.60.1.70425", "shaman", "Enhancement", "stormstrike", {
  spentResource: 8,
  absoluteSpent: false,
});

// Restoration: Tidal Focus and Totemic Focus swap positions (row 0 ↔ row 1, col 2 unchanged).
moveTalentFrom("1.60.1.70425", "shaman", "Restoration", "tidal_focus", 0, 2);
moveTalentFrom("1.60.1.70425", "shaman", "Restoration", "totemic_focus", 1, 2);

// Restoration: Water Shield can now be expended by any spell critical result; globe cooldown text retained.
replaceTalentFrom("1.60.1.70425", "shaman", "Restoration", "water_shield", {
  description: [
    "The caster is surrounded by 3 globes of water. When a spell, melee, or ranged attack hits the caster or when one of the caster's spells gets a critical result, 2% of maximum mana is restored to the caster, expending one water globe. Only one globe will activate every few seconds. Lasts 10 min.\n\nOnly one Elemental Shield can be active on the Shaman at any one time.",
  ],
});

// Restoration: Healing Focus casting time loss prevention clarified.
replaceTalentFrom("1.60.1.70425", "shaman", "Restoration", "healing_focus", {
  description: [
    "Gives your healing spells a {value}% chance to not lose casting time when you take damage.",
    {
      value: [23, 47, 70],
    },
  ],
});

// === MAGE ===

// Arcane: Improved Channeling now also protects Arcane Wrath from casting time loss.
replaceTalentFrom("1.60.1.70425", "mage", "Arcane", "improved_channeling", {
  description: [
    "Gives your Arcane Missiles spell a {value1}% chance and your Arcane Blast and Arcane Wrath spells a {value2}% chance to not lose casting time when you take damage.",
    {
      value1: [20, 40, 60, 80, 100],
      value2: [14, 28, 42, 56, 70],
    },
  ],
});

// Arcane: Arcane Blast cast time reduced; damage and stack behavior updated.
replaceTalentFrom("1.60.1.70425", "mage", "Arcane", "arcane_blast", {
  castTime: 1.5,
  description: [
    "Blasts the target with energy, dealing 34 to 38 Arcane damage. Each time you cast Arcane Blast, you gain 15% of your Intellect as Spell Damage and the mana cost of Arcane Blast is increased by 175%. Effect stacks up to 4 times and lasts 15 sec from time of initial application.",
  ],
});

// Arcane: Missile Barrage now has 2 ranks, moves to row 0 col 3, and also triggers from Arcane Wrath.
moveTalentFrom("1.60.1.70425", "mage", "Arcane", "missile_barrage", 0, 3);
replaceTalentFrom("1.60.1.70425", "mage", "Arcane", "missile_barrage", {
  ranks: 2,
  description: [
    "Gives your Arcane Blast spell a {value1}% chance, and your Arcane Wrath, Fireball, Frostbolt, and Frostfire Bolt spells a {value2}% chance to reduce the channeled duration of your next Arcane Missiles spell by 50%, reduce the Mana cost by 100%, and missiles fire every 0.5 sec.",
    {
      value1: [20, 40],
      value2: [10, 20],
    },
  ],
});

// Arcane: Arcane Wrath — new active talent at row 3 col 3. Requires max rank of Arcane Blast.
insertTalentFrom("1.60.1.70425", "mage", "Arcane", {
  id: "arcane_wrath",
  name: "Arcane Wrath",
  icon: "ability_mage_netherwindpresence",
  row: 3,
  col: 3,
  ranks: 1,
  requiresTalents: "arcane_blast",
  description: [
    "Launches a projectile of pure Arcane energy at the enemy target, causing 122 to 146 Arcane damage. This spell gains additional Spell Damage equal to 5% of your maximum Mana.",
  ],
  isActive: true,
  castTime: 3.5,
  cooldown: 6,
  spentResource: 140,
  absoluteSpent: true,
  range: 30,
  requiresWeapon: 0,
});

// Fire: Wake of Fire renamed to Improved Fire Blast; now reduces cooldown and increases range.
replaceTalentFrom("1.60.1.70425", "mage", "Fire", "wake_of_fire", {
  name: "Improved Fire Blast",
  ranks: 2,
  description: [
    "Reduces the cooldown of your Fire Blast spell by {value1} sec and increases its range by {value2} yards.",
    {
      value1: [1, 2],
      value2: [8, 15],
    },
  ],
});

// Fire: Critical Mass gains 2 additional ranks (now 5); values extended to 2/4/6/8/10%.
replaceTalentFrom("1.60.1.70425", "mage", "Fire", "critical_mass", {
  ranks: 5,
  description: [
    "Increases the critical strike chance of your Fire spells by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

// Fire: Fire Power redesigned — scales per Fire effect on the target; capped per rank.
replaceTalentFrom("1.60.1.70425", "mage", "Fire", "fire_power", {
  ranks: 3,
  description: [
    "Increases the damage done by your Fire spells by {value1}% per your Fire effects on the target, up to a maximum increase of {value2}%. Effects which mix multiple schools of magic do not qualify.",
    {
      value1: [1, 2, 3],
      value2: [4, 8, 12],
    },
  ],
});

// Fire: Heating Up description gains sentence about Fire Blast granting an extra stack.
replaceTalentFrom("1.60.1.70425", "mage", "Fire", "heating_up", {
  description: [
    "Non-periodic critical strikes with Fireball, Frostfire Bolt, Fire Blast, and Scorch reduce the cast time of your next Pyroblast cast within 20 sec by 25%, stacking up to 3 times. Fire Blast grants an additional stack every time it deals damage.",
  ],
});

// Fire: Improved Scorch icon updated.
replaceTalentFrom("1.60.1.70425", "mage", "Fire", "improved_scorch", {
  icon: "spell_fire_soulburn",
});

// Frost: Improved Frostbolt now also reduces the cast time of Frost Blast.
replaceTalentFrom("1.60.1.70425", "mage", "Frost", "improved_frostbolt", {
  description: [
    "Reduces the casting time of your Frostbolt and Frost Blast spells by {value} sec.",
    {
      value: [0.1, 0.2, 0.3, 0.4, 0.5],
    },
  ],
});

// Frost: Permafrost and Frostbite swap positions (col 1 ↔ col 3, row 1 unchanged).
moveTalentFrom("1.60.1.70425", "mage", "Frost", "permafrost", 1, 3);
moveTalentFrom("1.60.1.70425", "mage", "Frost", "frostbite", 1, 1);

// Frost: Ice Lance bonus damage against Frozen targets reduced from 300% to 200%.
replaceTalentFrom("1.60.1.70425", "mage", "Frost", "ice_lance", {
  description: [
    "Deals 28 to 32 Frost damage to an enemy target. Deals 200% increased damage to Frozen targets.",
  ],
});

// Frost: Arctic Reach now also increases the range of Frost Blast.
replaceTalentFrom("1.60.1.70425", "mage", "Frost", "arctic_reach", {
  description: [
    "Increases the range of your Frostbolt, Frost Blast, and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by {value}%.",
    {
      value: [10, 20],
    },
  ],
});

// Frost: Winter's Chill redesigned — proc chance scales per rank; buffs Cone of Cold damage.
replaceTalentFrom("1.60.1.70425", "mage", "Frost", "winters_chill", {
  description: [
    "Gives your Frostbolt, Frost Blast, and Fingers of Frost empowered Ice Lance spells a {value}% chance to apply Winter's Chill, increasing the target's damage taken from your next Cone of Cold by 5% and it gains an additional 7% of your spell damage, stacking up to 5 times.",
    {
      value: [20, 40, 60, 80, 100],
    },
  ],
});

// === WARLOCK ===

// Affliction: Malediction replaced by Grim Reach at row 1, col 0.
removeTalentsByIdFrom("1.60.1.70425", "warlock", "Affliction", ["malediction"]);
insertTalentFrom("1.60.1.70425", "warlock", "Affliction", {
  id: "grim_reach",
  name: "Grim Reach",
  icon: "spell_shadow_callofbone",
  row: 1,
  col: 0,
  ranks: 2,
  requiresTalents: null,
  description: [
    "Increases the range of your Affliction spells by {value}%.",
    {
      value: [10, 20],
    },
  ],
  isActive: false,
});

// Affliction: Fel Concentration covers specific drain/channel spells.
replaceTalentFrom("1.60.1.70425", "warlock", "Affliction", "fel_concentration", {
  description: [
    "Gives your Drain Life, Drain Mana, Drain Soul, and Wrack spells a {value}% chance to not lose casting time when you take damage.",
    {
      value: [23, 47, 70],
    },
  ],
});

// Affliction: Shadow Mastery values increased from 1/2/3/4/5% to 2/4/6/8/10%.
replaceTalentFrom("1.60.1.70425", "warlock", "Affliction", "shadow_mastery", {
  description: [
    "Increases the damage dealt or life drained by your Shadow spells by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

// Affliction: Amplify Curse Curse of Exhaustion percentage changed.
replaceTalentFrom("1.60.1.70425", "warlock", "Affliction", "amplify_curse", {
  description: [
    "Increases the effect of your next Curse of Weakness or Bane of Agony by 50%, or your next Curse of Exhaustion by ?%. Lasts 30 sec.",
  ],
});

// Destruction: Destructive Reach now explicitly applies to Destruction spells only.
replaceTalentFrom("1.60.1.70425", "warlock", "Destruction", "destructive_reach", {
  description: [
    "Increases the range of your Destruction spells by {value}%.",
    {
      value: [10, 20],
    },
  ],
});

// Destruction: Intensity casting time loss prevention clarified.
replaceTalentFrom("1.60.1.70425", "warlock", "Destruction", "intensity", {
  description: [
    "Gives your Destruction spells a {value}% chance to not lose casting time when you take damage.",
    {
      value: [23, 47, 70],
    },
  ],
});

// === DRUID ===

// Balance: Moonkin Form now benefits party or raid members; specifies spell Critical Strike chance.
replaceTalentFrom("1.60.1.70425", "druid", "Balance", "moonkin_form", {
  description: [
    "Shapeshift into Moonkin Form, increasing Omen of Clarity's chance to trigger by 100%, Armor contribution from items by 360%, and all party or raid members within 45 yards have their spell Critical Strike chance increased by 3%. Also protects the caster from Polymorph effects and prevents the use of healing spells.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
  ],
});

// Feral Combat: Leader of the Pack now benefits party or raid members; specifies melee and ranged Critical Strike chance.
replaceTalentFrom("1.60.1.70425", "druid", "Feral Combat", "leader_of_the_pack", {
  description: [
    "While in Cat Form, Bear Form, or Dire Bear Form, the Leader of the Pack increases the melee and ranged Critical Strike chance of all party or raid members within 45 yards by 3%.",
  ],
});

// Restoration: Furor Energy accumulation clarified to specify time outside Bear/Dire Bear Form.
replaceTalentFrom("1.60.1.70425", "druid", "Restoration", "furor", {
  description: [
    "Gives you a {value1}% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores {value1}% of the Energy you had when last in Cat Form, plus {value2} Energy per second spent outside Bear Form or Dire Bear Form, up to {value1} Energy.",
    {
      value1: [20, 40, 60, 80, 100],
      value2: [2, 4, 6, 8, 10],
    },
  ],
});

// Restoration: Nature's Focus casting time loss prevention clarified.
replaceTalentFrom("1.60.1.70425", "druid", "Restoration", "natures_focus", {
  description: [
    "Gives your Arcane and Nature spells a {value}% chance to not lose casting time when you take damage.",
    {
      value: [14, 28, 42, 56, 70],
    },
  ],
});

// ==================== PATCH 1.60.1.70707 ====================

// === PALADIN ===

// --- Holy ---

// Holy: Spiritual Focus moves to row 1 (from row 2), ranks increased to 5, description updated.
moveTalentFrom("1.60.1.70707", "paladin", "Holy", "spiritual_focus", 0, 1);
replaceTalentFrom("1.60.1.70707", "paladin", "Holy", "spiritual_focus", {
  ranks: 5,
  description: [
    "Gives your Flash of Light, Holy Light, and Light's Vigil spells a {value}% chance to not lose casting time when you take damage.",
    {
      value: [14, 28, 42, 56, 70],
    },
  ],
});

// Holy: Improved Seals ranks increased to 5, description updated.
replaceTalentFrom("1.60.1.70707", "paladin", "Holy", "improved_seals", {
  ranks: 5,
  description: [
    "Increases the damage done by your Seals and Judgements by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

// Holy: Reverence moves to row 2 (from row 3), ranks reduced to 2, description updated.
moveTalentFrom("1.60.1.70707", "paladin", "Holy", "reverence", 1, 1);
replaceTalentFrom("1.60.1.70707", "paladin", "Holy", "reverence", {
  ranks: 2,
  description: [
    "Allows {value}% of your Mana regeneration to continue while casting.",
    {
      value: [15, 30],
    },
  ],
});

// Holy: Purifying Power moves to row 2, col 4 (from row 3, col 3).
moveTalentFrom("1.60.1.70707", "paladin", "Holy", "purifying_power", 1, 3);

// Holy: Holy Conduit moves from the Retribution tree into Holy (row 3, col 3). The engine has no
// cross-tree move, so this is a remove-from-Retribution + insert-into-Holy. (Icon is the 69876 value.)
removeTalentsByIdFrom("1.60.1.70707", "paladin", "Retribution", ["holy_conduit"]);
insertTalentFrom("1.60.1.70707", "paladin", "Holy", {
  id: "holy_conduit",
  name: "Holy Conduit",
  icon: "spell_holy_devineaegis",
  row: 2,
  col: 2,
  ranks: 2,
  requiresTalents: null,
  description: [
    "Reduces the mana cost of your Consecration, Holy Wrath, Exorcism, and Hammer of Wrath spells by {value}%.",
    { value: [20, 40] },
  ],
  isActive: false,
});

// Holy: Voice of Truth → Oath of Light. Moves to row 4, col 3 (from row 3, col 1). Name, icon, description updated.
moveTalentFrom("1.60.1.70707", "paladin", "Holy", "voice_of_truth", 3, 2);
replaceTalentFrom("1.60.1.70707", "paladin", "Holy", "voice_of_truth", {
  name: "Oath of Light",
  icon: "spell_holy_greaterblessingoflight",
  description: [
    "Swear an Oath to protect target ally for 5 min, increasing the healing of your Holy Light on them by up to 400, your Flash of Light by up to 115, and your Holy Shock by up to 230. Only one Oath of Light may be sworn by the Paladin at any one time.",
  ],
});

// Holy: Infusion of Light moves to col 2 (from col 1).
moveTalentFrom("1.60.1.70707", "paladin", "Holy", "infusion_of_light", 3, 1);

// Holy: Illumination moves to row 3 (from row 4).
moveTalentFrom("1.60.1.70707", "paladin", "Holy", "illumination", 2, 1);

// Holy: Divine Favor moves to row 3, col 1 (from row 4, col 3).
moveTalentFrom("1.60.1.70707", "paladin", "Holy", "divine_favor", 2, 0);

// Holy: Divine Precision moves to row 4 (from row 5), ranks reduced to 2, requirement removed, description updated.
moveTalentFrom("1.60.1.70707", "paladin", "Holy", "divine_precision", 3, 0);
replaceTalentFrom("1.60.1.70707", "paladin", "Holy", "divine_precision", {
  ranks: 2,
  requiresTalents: null,
  description: [
    "Improves your chance to hit with Holy spells by {value1}%, and reduces the duration of Silence effects on you by {value2}%.",
    {
      value1: [4, 8],
      value2: [10, 20],
    },
  ],
});

// Holy: Consecrated Ground moves to col 1 (from col 3).
moveTalentFrom("1.60.1.70707", "paladin", "Holy", "consecrated_ground", 4, 0);

// Holy: Divine Strength moves to col 2 (from col 1).
moveTalentFrom("1.60.1.70707", "paladin", "Holy", "divine_strength", 0, 2);

// Holy: Holy Power description updated (no longer specifies only spell critical heals, now all Holy spells).
replaceTalentFrom("1.60.1.70707", "paladin", "Holy", "holy_power", {
  description: [
    "Increases the critical strike healing bonus of your Holy spells by {value}%.",
    {
      value: [10, 20, 30, 40, 50],
    },
  ],
});

// Holy: Light's Vigil now targets only friendly targets; caster-focused wording; simplified limit text.
replaceTalentFrom("1.60.1.70707", "paladin", "Holy", "lights_vigil", {
  description: [
    "Applies Light's Vigil to a friendly target for 30 sec. The caster's next Holy Shock on the target incurs no cooldown and heals the target and their party for 326 to 344. Only one Vigil per Paladin may be active in each party.",
  ],
});

// Holy: Boundless Light added — increases Holy Shock crit chance on allies not under Oath of Light.
insertTalentFrom("1.60.1.70707", "paladin", "Holy", {
  id: "boundless_light",
  name: "Boundless Light",
  icon: "ability_paladin_sacredcleansing",
  row: 4,
  col: 2,
  ranks: 2,
  requiresTalents: "holy_shock",
  description: [
    "Increases the critical strike chance of your Holy Shock spell by {value}% when cast on allies not affected by your Oath of Light.",
    {
      value: [15, 30],
    },
  ],
  isActive: false,
});

// --- Protection ---

// Protection: Stoicism added at row 5, col 1. On Hyjal the old Holy "Divine Strength" becomes this, but
// TalentForge keeps divine_strength in Holy (a new Holy Divine Strength takes its old slot), so Stoicism
// is added here as a distinct new talent rather than renaming divine_strength.
insertTalentFrom("1.60.1.70707", "paladin", "Protection", {
  id: "stoicism",
  name: "Stoicism",
  icon: "spell_holy_stoicism",
  row: 4,
  col: 0,
  ranks: 2,
  requiresTalents: null,
  description: [
    "Reduces the duration of Stun and Charm effects on you by {value}%.",
    { value: [10, 20] },
  ],
  isActive: false,
});

// Protection: Divine Intellect moves from the Holy tree into Protection (row 1, col 2). The engine has
// no cross-tree move, so this is a remove-from-Holy + insert-into-Protection. (Holy's divine_strength
// takes the vacated Holy slot, and Protection's toughness vacates col 2 below.)
removeTalentsByIdFrom("1.60.1.70707", "paladin", "Holy", ["divine_intellect"]);
insertTalentFrom("1.60.1.70707", "paladin", "Protection", {
  id: "divine_intellect",
  name: "Divine Intellect",
  icon: "spell_nature_sleep",
  row: 0,
  col: 1,
  ranks: 5,
  requiresTalents: null,
  description: [
    "Increases your total Intellect by {value}%.",
    { value: [2, 4, 6, 8, 10] },
  ],
  isActive: false,
});

// Protection: Toughness moves to row 3, col 4 (from row 1, col 2).
moveTalentFrom("1.60.1.70707", "paladin", "Protection", "toughness", 2, 3);

// Protection: Redoubt block-chance increased to 6/12/18/24/30% (from 4/8/12/16/20%).
replaceTalentFrom("1.60.1.70707", "paladin", "Protection", "redoubt", {
  description: [
    "Damaging melee attacks against you have a 10% chance to increase your chance to block by {value}%. Lasts 10 sec or 5 blocks.",
    {
      value: [6, 12, 18, 24, 30],
    },
  ],
});

// Protection: Sacred Duty moves to row 2 (from row 3); Stamina bonus removed, Forbearance duration reduction added.
moveTalentFrom("1.60.1.70707", "paladin", "Protection", "sacred_duty", 1, 3);
replaceTalentFrom("1.60.1.70707", "paladin", "Protection", "sacred_duty", {
  description: [
    "Reduces the cooldown of your Divine Shield, Divine Protection, and Templar's Bulwark spells by {sec} sec, and reduces the duration of Forbearance by {forbearance} sec.",
    {
      sec: [30, 60],
      forbearance: [5, 10],
    },
  ],
});

// Protection: Improved Hammer of Justice moves to row 3, col 2 (from row 4, col 3).
moveTalentFrom("1.60.1.70707", "paladin", "Protection", "improved_hammer_of_justice", 2, 1);

// Protection: Templar's Bulwark moves to row 3, col 1 (from row 5, col 2).
moveTalentFrom("1.60.1.70707", "paladin", "Protection", "templars_bulwark", 2, 0);

// Protection: Improved Seal of Fury → Shieldsworn. Moves to row 7, col 2 (from row 3, col 1). Name, icon, requiresTalents, description updated.
moveTalentFrom("1.60.1.70707", "paladin", "Protection", "improved_seal_of_fury", 6, 1);
replaceTalentFrom("1.60.1.70707", "paladin", "Protection", "improved_seal_of_fury", {
  name: "Shieldsworn",
  icon: "spell_holy_greaterblessingofsanctuary",
  requiresTalents: "holy_shield",
  description: [
    "Reduces the cooldown of your Holy Strike ability by 4 sec. Additionally, Holy Strike now strikes with your shield, triggering your active Holy Shield and Shield Specialization talents without consuming their charges or triggering their cooldowns, and allowing you to Block spells for 6 sec.",
  ],
});

// Protection: Improved Righteous Fury moves to row 4, col 2 (from row 3, col 2); damage reduction per rank increased to 3/6/9%.
moveTalentFrom("1.60.1.70707", "paladin", "Protection", "improved_righteous_fury", 3, 1);
replaceTalentFrom("1.60.1.70707", "paladin", "Protection", "improved_righteous_fury", {
  description: [
    "While Righteous Fury is active, all damage taken is reduced by {value}%.",
    {
      value: [3, 6, 9],
    },
  ],
});

// Protection: Shield Specialization ranks reduced to 2; absorption increased to 15/30%, block mana restore chance increased to 50/100%.
replaceTalentFrom("1.60.1.70707", "paladin", "Protection", "shield_specialization", {
  ranks: 2,
  description: [
    "Increases the amount of damage absorbed by your shield by {value1}%, and gives your blocks a {value2}% chance to restore 4% of your maximum Mana. May only occur once every 3 sec.",
    {
      value1: [15, 30],
      value2: [50, 100],
    },
  ],
});

// Protection: Swift Judgement now requires Templar's Bulwark (was Improved Seal of Fury); description updated to active Judgement.
replaceTalentFrom("1.60.1.70707", "paladin", "Protection", "swift_judgement", {
  requiresTalents: "templars_bulwark",
  description: [
    "Unleash the energy of a Seal spell upon an enemy. Does not consume the Seal. Refer to individual Seals for Judgement effect. Does not share a cooldown with your Judgement ability.",
  ],
});

// Protection: Anticipation moves to row 4, col 3 (from row 2, col 4).
moveTalentFrom("1.60.1.70707", "paladin", "Protection", "anticipation", 3, 2);

// Protection: One-Handed Weapon Specialization removed.
removeTalentsByIdFrom("1.60.1.70707", "paladin", "Protection", ["one_handed_weapon_specialization"]);

// Protection: Iron Creed ranks reduced to 3; threat values updated to 10/20/30%.
replaceTalentFrom("1.60.1.70707", "paladin", "Protection", "iron_creed", {
  ranks: 3,
  description: [
    "Increases the threat generated by your Holy Strike ability by {value1}%. While Righteous Fury is active, Holy Strike also reduces your damage taken by {value2}% for 6 sec.",
    {
      value1: [10, 20, 30],
      value2: [2, 4, 6],
    },
  ],
});

// Protection: Holy Shield moves to row 5, col 2 (from row 7, col 2); requirement removed; damage reduced to 75.
moveTalentFrom("1.60.1.70707", "paladin", "Protection", "holy_shield", 4, 1);
replaceTalentFrom("1.60.1.70707", "paladin", "Protection", "holy_shield", {
  requiresTalents: null,
  description: [
    "Increases chance to block by 30% for 10 sec, and deals 75 Holy damage for each attack blocked while active. Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges.",
  ],
});

// --- Retribution ---

// Retribution: Conviction moves to col 2 (from col 3), ranks reduced to 3; now also applies to spells.
moveTalentFrom("1.60.1.70707", "paladin", "Retribution", "conviction", 1, 1);
replaceTalentFrom("1.60.1.70707", "paladin", "Retribution", "conviction", {
  ranks: 3,
  description: [
    "Improves your chance to get a critical strike with all spells and attacks by {value}%.",
    {
      value: [2, 4, 6],
    },
  ],
});

// Retribution: Vindication no longer increases caster's Attack Power.
replaceTalentFrom("1.60.1.70707", "paladin", "Retribution", "vindication", {
  description: [
    "Gives your damaging melee attacks a chance to reduce the target's Attack Power by {value} for 30 sec.",
    {
      value: [66.833, 133.667, 200.5],
    },
  ],
});

// Retribution: Sanctified Judgement moves to row 2, col 3 (from row 3, col 2).
moveTalentFrom("1.60.1.70707", "paladin", "Retribution", "sanctified_judgement", 1, 2);

// Retribution: Unyielding Faith moves from the Holy tree into Retribution (row 3, col 2). The engine
// has no cross-tree move, so this is a remove-from-Holy + insert-into-Retribution.
removeTalentsByIdFrom("1.60.1.70707", "paladin", "Holy", ["unyielding_faith"]);
insertTalentFrom("1.60.1.70707", "paladin", "Retribution", {
  id: "unyielding_faith",
  name: "Unyielding Faith",
  icon: "spell_holy_unyieldingfaith",
  row: 2,
  col: 1,
  ranks: 2,
  requiresTalents: null,
  description: [
    "Reduces the duration of Fear and Disorient effects on you by {value}%.",
    { value: [15, 30] },
  ],
  isActive: false,
});

// Retribution: Sacred Arbiter moves to col 2 (from col 3).
moveTalentFrom("1.60.1.70707", "paladin", "Retribution", "sacred_arbiter", 3, 1);

// Retribution: Two-Handed Weapon Specialization moves to row 4, col 4 (from row 5, col 1); now reduces threat while equipped.
moveTalentFrom("1.60.1.70707", "paladin", "Retribution", "two_handed_weapon_specialization", 3, 3);
replaceTalentFrom("1.60.1.70707", "paladin", "Retribution", "two_handed_weapon_specialization", {
  description: [
    "Increases the physical damage you deal by {value}%, and reduces all threat you generate by 7% while a two-handed melee weapon is equipped.",
    {
      value: [2, 4, 6],
    },
  ],
});

// Retribution: Vengeance moves to col 3 (from col 2); now requires Seal of Command.
moveTalentFrom("1.60.1.70707", "paladin", "Retribution", "vengeance", 4, 2);
replaceTalentFrom("1.60.1.70707", "paladin", "Retribution", "vengeance", {
  requiresTalents: "seal_of_command",
});

// Retribution: Repentance moves to col 2 (from col 3).
moveTalentFrom("1.60.1.70707", "paladin", "Retribution", "repentance", 4, 1);

// Retribution: Champion of the Light moves to col 3 (from col 2), ranks increased to 5; damage scaling reduced to 12% per rank, adds Hammer of Wrath cast time reduction.
moveTalentFrom("1.60.1.70707", "paladin", "Retribution", "champion_of_the_light", 5, 2);
replaceTalentFrom("1.60.1.70707", "paladin", "Retribution", "champion_of_the_light", {
  ranks: 5,
  description: [
    "Increases your spell damage by up to {value1}% of your Intellect, and reduces the cast time of your Hammer of Wrath by {value2} sec.",
    {
      value1: [12, 24, 36, 48, 60],
      value2: [0.2, 0.4, 0.6, 0.8, 1.0],
    },
  ],
});

// Retribution: Instrument of Law removed.
removeTalentsByIdFrom("1.60.1.70707", "paladin", "Retribution", ["instrument_of_law"]);

// Retribution: Twist of Light → Unsealed Wrath; now requires Repentance; stores Seal copies on melee attacks.
replaceTalentFrom("1.60.1.70707", "paladin", "Retribution", "twist_of_light", {
  name: "Unsealed Wrath",
  requiresTalents: "repentance",
  description: [
    "Your melee attacks store a copy of your active Seal for 15 sec, stacking up to 3 times. Landing an attack with a different Seal consumes all stacks, giving the stored Seal its normal chance to activate once per stack.",
  ],
});

// Retribution: Turn Evil added — reduces Turn Undead cast time and cooldown, extends effect to Demons.
insertTalentFrom("1.60.1.70707", "paladin", "Retribution", {
  id: "turn_evil",
  name: "Turn Evil",
  icon: "spell_holy_turnundead",
  row: 4,
  col: 0,
  ranks: 2,
  requiresTalents: null,
  description: [
    "Reduces the cast time of your Turn Undead spell by {value1} sec, its cooldown by {value2} sec, and allows it to affect Demons.",
    {
      value1: [0.5, 1.0],
      value2: [5, 10],
    },
  ],
  isActive: false,
});

// === HUNTER ===

// Beast Mastery: Pathfinding moves to row 3, col 1 (from row 2, col 3).
moveTalentFrom("1.60.1.70707", "hunter", "Beast Mastery", "pathfinding", 2, 0);

// Beast Mastery: Improved Revive Pet moves to col 3 (from col 4).
moveTalentFrom("1.60.1.70707", "hunter", "Beast Mastery", "improved_revive_pet", 1, 2);

// Marksmanship: Trueshot Aura now applies to party or raid members.
replaceTalentFrom("1.60.1.70707", "hunter", "Marksmanship", "trueshot_aura", {
  description: [
    "Increases the Ranged Attack Power of party or raid members within 45 yds by 15.",
  ],
});

// === PRIEST ===

// Discipline: Renewed Hope no longer triggers from Binding Heal; description updated.
replaceTalentFrom("1.60.1.70707", "priest", "Discipline", "renewed_hope", {
  description: [
    "Your heals from Flash Heal, Lesser Heal, Heal, Greater Heal, and Penance gain {value}% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by 1 sec.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

// Holy: Binding Heal → Holy Binding; now a passive proc on Flash Heal self-heal.
replaceTalentFrom("1.60.1.70707", "priest", "Holy", "binding_heal", {
  name: "Holy Binding",
  isActive: false,
  description: [
    "Each time you heal a target other than yourself with Flash Heal, you are healed for 50% as much. This healing generates no threat.",
  ],
});

// === MAGE ===

// Arcane: Arcane Focus removed.
removeTalentsByIdFrom("1.60.1.70707", "mage", "Arcane", ["arcane_focus"]);

// Arcane: Improved Channeling moves to col 2 (from col 3).
moveTalentFrom("1.60.1.70707", "mage", "Arcane", "improved_channeling", 0, 1);

// Arcane: Arcane Resilience → Missile Barrage; icon updated; adds Frost Blast to proc list.
replaceTalentFrom("1.60.1.70707", "mage", "Arcane", "arcane_resilience", {
  name: "Missile Barrage",
  icon: "ability_mage_missilebarrage",
  description: [
    "Gives your Arcane Blast spell a {value1}% chance, and your Arcane Wrath, Fireball, Frostbolt, Frost Blast, and Frostfire Bolt spells a {value2}% chance to reduce the channeled duration of your next Arcane Missiles spell by 50%, reduce the Mana cost by 100%, and missiles fire every 0.5 sec.",
    {
      value1: [20, 40],
      value2: [10, 20],
    },
  ],
});

// Arcane: Arcane Blast description updated — now grants Spell Damage from Intellect.
replaceTalentFrom("1.60.1.70707", "mage", "Arcane", "arcane_blast", {
  description: [
    "Blasts the target with energy, dealing 34 to 38 Arcane damage. Each time you cast Arcane Blast, you gain 12% of your Intellect as Spell Damage and the mana cost of Arcane Blast is increased by 100%. Effect stacks up to 4 times and lasts 18 sec from time of initial application.",
  ],
});

// Arcane: Missile Barrage → Arcane Resilience; moves to col 2 (from col 3), ranks increased to 3; now grants Armor from Intellect.
moveTalentFrom("1.60.1.70707", "mage", "Arcane", "missile_barrage", 0, 2);
replaceTalentFrom("1.60.1.70707", "mage", "Arcane", "missile_barrage", {
  name: "Arcane Resilience",
  icon: "spell_arcane_arcaneresilience",
  ranks: 3,
  requiresTalents: null,
  description: [
    "Increases your Armor by an amount equal to {value}% of your Intellect.",
    {
      value: [25, 50, 75],
    },
  ],
});

// Fire: Improved Fire Blast moves to row 3, col 4 (from row 1, col 1); ranks reduced to 2; description updated.
moveTalentFrom("1.60.1.70707", "mage", "Fire", "wake_of_fire", 2, 3);

// Fire: Incineration ranks increased to 5; description updated.
replaceTalentFrom("1.60.1.70707", "mage", "Fire", "incineration", {
  ranks: 5,
  description: [
    "Increases the critical strike chance of your Fire Blast, Ice Lance, Arcane Blast, and Scorch spells by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

// Fire: Improved Fireball → Accelerant; description updated to include Arcane Wrath.
replaceTalentFrom("1.60.1.70707", "mage", "Fire", "improved_fireball", {
  name: "Accelerant",
  description: [
    "Reduces the casting time of your Fireball, Frostfire Bolt, and Arcane Wrath spells by {value} sec.",
    {
      value: [0.1, 0.2, 0.3, 0.4, 0.5],
    },
  ],
});

// Fire: Critical Mass ranks reduced to 3.
replaceTalentFrom("1.60.1.70707", "mage", "Fire", "critical_mass", {
  ranks: 3,
  description: [
    "Increases the critical strike chance of your Fire spells by {value}%.",
    {
      value: [2, 4, 6],
    },
  ],
});

// Frost: Frost Warding description updated — now also affects Frost Ward negation chance and Ice Barrier/Frost Ward absorption.
replaceTalentFrom("1.60.1.70707", "mage", "Frost", "frost_warding", {
  description: [
    "Increases the Armor and resistances granted by your Frost Armor and Ice Armor spells by {value1}%, gives your Frost Ward a {value2}% chance to negate the warded damage spell, and increases the amount absorbed by your Ice Barrier and Frost Ward by {value3}%.",
    {
      value1: [15, 30],
      value2: [10, 20],
      value3: [10, 20],
    },
  ],
});

// Frost: Elemental Precision → Precision; ranks reduced to 3; now applies to all spells (not just Frost and Fire).
replaceTalentFrom("1.60.1.70707", "mage", "Frost", "elemental_precision", {
  name: "Precision",
  ranks: 3,
  description: [
    "Improves your chance to hit with all spells by {value}%.",
    {
      value: [2, 4, 6],
    },
  ],
});

// Frost: Piercing Ice removed.
removeTalentsByIdFrom("1.60.1.70707", "mage", "Frost", ["piercing_ice"]);

// Frost: Frost Channeling moves to col 1 (from col 2).
moveTalentFrom("1.60.1.70707", "mage", "Frost", "frost_channeling", 2, 0);

// Frost: Ice Lance description updated — triple damage threshold clarified to Frozen targets.
replaceTalentFrom("1.60.1.70707", "mage", "Frost", "ice_lance", {
  description: [
    "Deals 28 to 32 Frost damage to an enemy target. Deals 300% increased damage to Frozen targets.",
  ],
});

// Frost: Improved Blizzard moves to col 2 (from col 4).
moveTalentFrom("1.60.1.70707", "mage", "Frost", "improved_blizzard", 2, 1);

// Frost: Arctic Reach description updated — adds Frost Blast and Ice Lance to range bonus.
replaceTalentFrom("1.60.1.70707", "mage", "Frost", "arctic_reach", {
  description: [
    "Increases the range of your Frostbolt, Frost Blast, Ice Lance, and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by {value}%.",
    {
      value: [10, 20],
    },
  ],
});

// Frost: Winter's Chill description updated — now also procs from Frost Blast and Fingers of Frost empowered Ice Lance.
replaceTalentFrom("1.60.1.70707", "mage", "Frost", "winters_chill", {
  description: [
    "Gives your Frostbolt, Frost Blast, and Fingers of Frost empowered Ice Lance spells a {value}% chance to apply Winter's Chill, increasing the target's damage taken from your next Cone of Cold by 20% and it gains an additional 7% of your spell damage, stacking up to 5 times.",
    {
      value: [20, 40, 60, 80, 100],
    },
  ],
});

// === WARLOCK ===

// Affliction: Improved Drains description updated — clarifies scaling values to 7/13/20%.
replaceTalentFrom("1.60.1.70707", "warlock", "Affliction", "improved_drains", {
  description: [
    "Increases Health drained, damage done, or Mana drained by your Drain Life, Drain Soul, and Drain Mana spells by {value}%.",
    {
      value: [7, 13, 20],
    },
  ],
});

// === DRUID ===

// Balance: Genesis description updated — removes "periodic" qualifier; now applies to all spells and abilities.
replaceTalentFrom("1.60.1.70707", "druid", "Balance", "genesis", {
  description: [
    "Increases the periodic damage and healing done by your spells and abilities by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

// Balance: Moonkin Form description updated — Critical Strike chance now applies to all types (not just spell crits).
replaceTalentFrom("1.60.1.70707", "druid", "Balance", "moonkin_form", {
  description: [
    "Shapeshift into Moonkin Form, increasing Omen of Clarity's chance to trigger by 100%, Armor contribution from items by 360%, and all party or raid members within 45 yards have their Critical Strike chance increased by 3%. Also protects the caster from Polymorph effects and prevents the use of healing spells.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
  ],
});

// Feral Combat: Heart of the Wild → Furor; icon and description updated.
replaceTalentFrom("1.60.1.70707", "druid", "Feral Combat", "heart_of_the_wild", {
  name: "Furor",
  icon: "spell_holy_blessingofstamina",
  description: [
    "Gives you a {value1}% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores {value1}% of the Energy you had when last in Cat Form, plus {value2} Energy per second spent outside Bear Form or Dire Bear Form, up to {value1} Energy.",
    {
      value1: [20, 40, 60, 80, 100],
      value2: [2, 4, 6, 8, 10],
    },
  ],
});

// Feral Combat: Primal Bite (id `mangle`, named "Primal Bite" since 70009) moves to Berserk's old slot
// (row 7, col 2) and takes its final stats. Berserk itself is removed below; Lacerate is added in its
// former slot. No talents are renamed.
moveTalentFrom("1.60.1.70707", "druid", "Feral Combat", "mangle", 6, 1);
replaceTalentFrom("1.60.1.70707", "druid", "Feral Combat", "mangle", {
  requiresTalents: "leader_of_the_pack",
  description: [
    "Bite the target, dealing 100% normal damage plus 42 and generating a high amount of threat.",
  ],
});

// Feral Combat: Lacerate added at Primal Bite's former slot (row 4, col 2).
insertTalentFrom("1.60.1.70707", "druid", "Feral Combat", {
  id: "lacerate",
  name: "Lacerate",
  icon: "ability_druid_lacerate",
  row: 3,
  col: 1,
  ranks: 1,
  requiresTalents: "savage_fury",
  isActive: true,
  description: [
    "Lacerates the enemy target, making them bleed for 20 damage over 15 sec plus 10% weapon damage per existing application of Lacerate on the target. Causes a high amount of threat. This effect stacks up to 5 times on the same target.",
  ],
});

// Feral Combat: Predatory Strikes moves to col 1 (from col 3).
moveTalentFrom("1.60.1.70707", "druid", "Feral Combat", "predatory_strikes", 3, 0);

// Feral Combat: Leader of the Pack description updated — Critical Strike chance no longer specifies melee and ranged.
replaceTalentFrom("1.60.1.70707", "druid", "Feral Combat", "leader_of_the_pack", {
  description: [
    "While in Cat Form, Bear Form, or Dire Bear Form, the Leader of the Pack increases the Critical Strike chance of all party or raid members within 45 yards by 3%.",
  ],
});

// Feral Combat: Shifting Power repurposed into Predatory Discipline (new id); old shifting_power removed since the slot's identity changed.
removeTalentsByIdFrom("1.60.1.70707", "druid", "Feral Combat", ["shifting_power"]);
insertTalentFrom("1.60.1.70707", "druid", "Feral Combat", {
  id: "predatory_discipline",
  name: "Predatory Discipline",
  icon: "spell_druid_savagery",
  row: 3,
  col: 2,
  ranks: 1,
  requiresTalents: null,
  isActive: false,
  description: [
    "Your Ferocious Bite ability no longer converts extra Energy into damage, but still deals extra damage based on your excess Energy.",
  ],
});

// Feral Combat: Natural Reaction moves to col 4 (from col 1).
moveTalentFrom("1.60.1.70707", "druid", "Feral Combat", "natural_reaction", 5, 3);

// Feral Combat: Rend and Tear moves to col 1 (from col 3).
moveTalentFrom("1.60.1.70707", "druid", "Feral Combat", "rend_and_tear", 5, 0);

// Feral Combat: Berserk removed — its slot (row 7, col 2) is now occupied by Primal Bite, moved above.
removeTalentsByIdFrom("1.60.1.70707", "druid", "Feral Combat", ["berserk"]);

// Feral Combat: Improved Shifting Power removed; new active Shifting Power added, reusing the shifting_power id.
removeTalentsByIdFrom("1.60.1.70707", "druid", "Feral Combat", ["improved_shifting_power"]);
insertTalentFrom("1.60.1.70707", "druid", "Feral Combat", {
  id: "shifting_power",
  name: "Shifting Power",
  icon: "spell_druid_displacement",
  row: 6,
  col: 2,
  ranks: 1,
  requiresTalents: "predatory_discipline",
  isActive: true,
  description: [
    "Instantly convert 55% base Mana into 40 Energy. Shifting Power's cost is reduced by effects that reduce the cost of Shapeshifting.",
  ],
});

// Restoration: Furor → Heart of the Wild; icon and description updated.
replaceTalentFrom("1.60.1.70707", "druid", "Restoration", "furor", {
  name: "Heart of the Wild",
  icon: "spell_holy_blessingofagility",
  description: [
    "Increases your Intellect by {value1}%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by {value2}% and while in Cat Form your Strength is increased by {value3}%.",
    {
      value1: [2, 4, 6, 8, 10],
      value2: [4, 8, 12, 16, 20],
      value3: [2, 4, 6, 8, 10],
    },
  ],
});

// Restoration: Naturalist description updated — adds Wild Growth to cast time reduction.
replaceTalentFrom("1.60.1.70707", "druid", "Restoration", "naturalist", {
  description: [
    "Reduces the cast time of your Healing Touch and Wild Growth spells by {value1} sec and increases all damage you deal by {value2}%.",
    {
      value1: [0.1, 0.2, 0.3, 0.4, 0.5],
      value2: [2, 4, 6, 8, 10],
    },
  ],
});

// Restoration: Subtlety → Reflection; icon and description updated — now a mana regen passive.
replaceTalentFrom("1.60.1.70707", "druid", "Restoration", "subtlety", {
  name: "Reflection",
  icon: "spell_frost_windwalkon",
  description: [
    "Allows {value}% of your Mana regeneration to continue while casting.",
    {
      value: [17, 33, 50],
    },
  ],
});

// Restoration: Reflection → Subtlety; icon and description updated — now a threat reduction passive.
replaceTalentFrom("1.60.1.70707", "druid", "Restoration", "reflection", {
  name: "Subtlety",
  icon: "ability_eyeoftheowl",
  description: [
    "Reduces the threat generated by your Nature and Arcane spells by {value}%.",
    {
      value: [10, 20, 30],
    },
  ],
});

// Restoration: Gift of the Earthmother → Bloom; icon and description updated — now a heal-on-HoT-expiry passive.
replaceTalentFrom("1.60.1.70707", "druid", "Restoration", "gift_of_the_earthmother", {
  name: "Bloom",
  icon: "inv_misc_herb_felblossom",
  description: [
    "When your Rejuvenation or Regrowth spell expires due to its duration, the target is instantly healed for an amount equal to 100% of your Spirit. If either spell expires due to being dispelled, the target is healed for 50% of your Spirit instead.",
  ],
});

// Restoration: Swiftmend description updated — now consumes full duration of HoT for healing.
replaceTalentFrom("1.60.1.70707", "druid", "Restoration", "swiftmend", {
  description: [
    "Instantly heals a target with your active Rejuvenation or Regrowth effect for an amount equal to the full duration of the periodic effect of the consumed spell.",
  ],
});

// ==================== PATCH 1.60.1.70755 ====================
// Rogue reconciliation note: TalentForge's 70707 baseline keeps relentless_strikes in Assassination
// (Hyjal has it in Combat). To avoid a duplicate relentless_strikes, the existing Assassination copy is
// repositioned to this patch's new Assassination slot. Hyjal's Combat "Relentless Strikes → Composure"
// is added as a distinct new `composure` talent at Combat(2,3) (vacated by Improved Sprint), while the
// existing `endurance` talent is left in place. No talent cells collide after these changes.

// === WARRIOR ===

// --- Arms ---

// Arms: Improved Tactical Mastery reduced to 3 ranks with higher Rage retention per rank.
replaceTalentFrom("1.60.1.70755", "warrior", "Arms", "improved_tactical_mastery", {
  ranks: 3,
  description: [
    "Tactical Mastery lets you retain up to an additional {value} Rage when you change stances.",
    {
      value: [5, 10, 15],
    },
  ],
});

// Arms: Spearing Strike base weapon damage increased; bonus damage normalized.
replaceTalentFrom("1.60.1.70755", "warrior", "Arms", "spearing_strike", {
  description: [
    "A brutal attack that deals 75% weapon damage. Deals an additional 75% weapon damage against Giants, Dragonkin, and mounted targets. Mounted targets are dismounted.",
  ],
});

// Arms: Two-Handed Weapon Specialization damage per rank doubled.
replaceTalentFrom("1.60.1.70755", "warrior", "Arms", "two_handed_weapon_specialization", {
  description: [
    "Increases the damage you deal with two-handed melee weapons by {value}%.",
    {
      value: [2, 4, 6],
    },
  ],
});

// Arms: Bloodthrill reduced to 2 ranks with higher Overpower proc chance.
replaceTalentFrom("1.60.1.70755", "warrior", "Arms", "bloodthrill", {
  ranks: 2,
  description: [
    "Grants your Main Hand melee attacks against enemies afflicted by your Rend a {value}% chance to allow an activation of Overpower.",
    {
      value: [10, 20],
    },
  ],
});

// Arms: Improved Slam reworked to emphasize cooldown reduction.
replaceTalentFrom("1.60.1.70755", "warrior", "Arms", "improved_slam", {
  description: [
    "Reduces the cooldown of your Slam ability by {value1} sec, the cast time and global cooldown by {value2} sec, and Slam no longer interrupts or delays your melee swing.",
    {
      value1: [2.5, 5.0],
      value2: [0.25, 0.5],
    },
  ],
});

// --- Fury ---

// Fury: Booming Voice now also reduces the Rage cost of Howls.
replaceTalentFrom("1.60.1.70755", "warrior", "Fury", "booming_voice", {
  description: [
    "Increases the area of effect of your Shouts by {value1}% and reduces the Rage cost of your Shouts and Howls by {value2}%.",
    {
      value1: [10, 20, 30, 40, 50],
      value2: [5, 10, 15, 20, 25],
    },
  ],
});

// Fury: Raging Blows → Improved Whirlwind. Moves to row 6, col 1; now 2 ranks; reworked to buff Whirlwind.
moveTalentFrom("1.60.1.70755", "warrior", "Fury", "raging_blows", 5, 0);
replaceTalentFrom("1.60.1.70755", "warrior", "Fury", "raging_blows", {
  name: "Improved Whirlwind",
  ranks: 2,
  description: [
    "Reduces the cooldown of your Whirlwind ability by {value1} sec and increases the damage it deals to the closest enemy by {value2}%.",
    {
      value1: [1, 2],
      value2: [15, 30],
    },
  ],
});

// Fury: Enrage moves to row 3, col 4.
moveTalentFrom("1.60.1.70755", "warrior", "Fury", "enrage", 2, 3);

// Fury: Flurry moves to col 3, Death Wish prerequisite removed, reduced to 3 ranks with higher attack speed.
moveTalentFrom("1.60.1.70755", "warrior", "Fury", "flurry", 5, 2);
replaceTalentFrom("1.60.1.70755", "warrior", "Fury", "flurry", {
  requiresTalents: null,
  ranks: 3,
  description: [
    "Increases your melee attack speed by {value}% for your next 3 swings after dealing a melee critical strike.",
    {
      value: [10, 20, 30],
    },
  ],
});

// Fury: Bloodthirst now requires maximum rank of Death Wish.
replaceTalentFrom("1.60.1.70755", "warrior", "Fury", "bloodthirst", {
  requiresTalents: "death_wish",
});

// Fury: Gore Drinker moves to row 5, col 3; now requires Blood Craze.
moveTalentFrom("1.60.1.70755", "warrior", "Fury", "gore_drinker", 4, 2);
replaceTalentFrom("1.60.1.70755", "warrior", "Fury", "gore_drinker", {
  requiresTalents: "blood_craze",
});

// Fury: Reckless Swings added at row 4, col 2.
insertTalentFrom("1.60.1.70755", "warrior", "Fury", {
  id: "reckless_swings",
  name: "Reckless Swings",
  icon: "ability_warrior_bloodfrenzy",
  row: 3,
  col: 1,
  ranks: 1,
  requiresTalents: null,
  description: [
    "Your next 4 melee attacks generate 5 additional Rage. Lasts 8 sec.",
  ],
  isActive: true,
});

// Protection: Defiance - Threat bonus increased from 5/10/15% to 7/13/20%.
replaceTalentFrom("1.60.1.70755", "warrior", "Protection", "defiance", {
  description: [
    "Increases all threat generated in Defensive stance by an additional {value}% while a shield is equipped.",
    {
      value: [7, 13, 20],
    },
  ],
});

// === PALADIN ===

// --- Retribution ---

// Retribution: Two-Handed Weapon Specialization now also increases Holy damage.
replaceTalentFrom("1.60.1.70755", "paladin", "Retribution", "two_handed_weapon_specialization", {
  description: [
    "Increases the Physical and Holy damage you deal by {value1}%, and reduces all threat you generate by {value2}% while a two-handed melee weapon is equipped.",
    {
      value1: [2, 4, 6],
      value2: [7, 14, 20],
    },
  ],
});

// Retribution: Vengeance stack cap increased from 3 to 5.
replaceTalentFrom("1.60.1.70755", "paladin", "Retribution", "vengeance", {
  description: [
    "Increases your Physical and Holy damage dealt by {value}% for 30 sec after landing a non-periodic critical strike. Stacks up to 5 times.",
    {
      value: [1, 2, 3],
    },
  ],
});

// === HUNTER ===

// --- Marksmanship ---

// Marksmanship: Trueshot Aura ranged attack power bonus increased from 15 to 20.
replaceTalentFrom("1.60.1.70755", "hunter", "Marksmanship", "trueshot_aura", {
  description: [
    "Increases the Ranged Attack Power of party or raid members within 45 yds by 20.",
  ],
});

// Marksmanship: Barrage damage per rank increased.
replaceTalentFrom("1.60.1.70755", "hunter", "Marksmanship", "barrage", {
  description: [
    "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley abilities by {value}%.",
    {
      value: [5, 10, 15],
    },
  ],
});

// Marksmanship: Sniper Shot bonus damage doubled.
replaceTalentFrom("1.60.1.70755", "hunter", "Marksmanship", "sniper_shot", {
  description: [
    "A long-range shot that deals ranged damage plus 320 and increases the range of your next 3 Shots by 10 yards for 10 sec.",
  ],
});

// --- Survival ---

// Survival: Lightning Reflexes Agility bonus per rank increased.
replaceTalentFrom("1.60.1.70755", "hunter", "Survival", "lightning_reflexes", {
  description: [
    "Increases your Agility by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

// === ROGUE ===

// --- Assassination ---

// Assassination: Murder removed. Hyjal turns this slot into "Vigor", an identity the existing `vigor`
// talent already carries, so `vigor` is moved into place below instead of renaming anything.
removeTalentsByIdFrom("1.60.1.70755", "rogue", "Assassination", ["murder"]);

// Assassination: Improved Expose Armor moves to row 2, col 2.
moveTalentFrom("1.60.1.70755", "rogue", "Assassination", "improved_expose_armor", 1, 1);

// Assassination: Lethality reduced to 2 ranks with higher crit damage bonus.
replaceTalentFrom("1.60.1.70755", "rogue", "Assassination", "lethality", {
  ranks: 2,
  description: [
    "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by {value}%.",
    {
      value: [10, 20],
    },
  ],
});

// Assassination: Vigor moves to row 3, col 1 (into Murder's former slot).
moveTalentFrom("1.60.1.70755", "rogue", "Assassination", "vigor", 2, 0);

// Assassination: Blood Splatter added at row 3, col 2.
insertTalentFrom("1.60.1.70755", "rogue", "Assassination", {
  id: "blood_splatter",
  name: "Blood Splatter",
  icon: "ability_rogue_rupture",
  row: 2,
  col: 1,
  ranks: 1,
  requiresTalents: null,
  description: [
    "Increases the duration of your Rupture ability by 6 sec and your Garrote ability by 9 sec.",
  ],
  isActive: false,
});

// Assassination: Mutilate moves to row 7, col 2; now requires Venom; damage increased.
moveTalentFrom("1.60.1.70755", "rogue", "Assassination", "mutilate", 6, 1);
replaceTalentFrom("1.60.1.70755", "rogue", "Assassination", "mutilate", {
  requiresTalents: "venom",
  description: [
    "Instantly attacks with both weapons for 90% weapon damage plus an additional 39.6 with each weapon. Damage increased by 20% against Poisoned targets. Awards 2 Combo Points.",
  ],
});

// Assassination: Seal Fate reduced to 3 ranks.
replaceTalentFrom("1.60.1.70755", "rogue", "Assassination", "seal_fate", {
  ranks: 3,
  description: [
    "Your critical strikes from abilities that add Combo Points have a {value}% chance to add an additional Combo Point.",
    {
      value: [33, 66, 100],
    },
  ],
});

// Assassination: Venom moves to row 5, col 2; no longer requires Mutilate; now a passive tied to Shank.
moveTalentFrom("1.60.1.70755", "rogue", "Assassination", "venom", 4, 1);
replaceTalentFrom("1.60.1.70755", "rogue", "Assassination", "venom", {
  requiresTalents: null,
  isActive: false,
  castTime: null,
  cooldown: null,
  spentResource: null,
  range: null,
  description: [
    "Causes your Shank ability to increase your Poison damage by 30% and your chance to apply Poisons by 20% for 6 sec.",
  ],
});

// Assassination: Relentless Strikes reworked to 5 ranks and relocated to row 5, col 1. This realizes
// Hyjal's re-added Relentless Strikes by repositioning TalentForge's existing copy (avoids a duplicate id).
moveTalentFrom("1.60.1.70755", "rogue", "Assassination", "relentless_strikes", 4, 0);
replaceTalentFrom("1.60.1.70755", "rogue", "Assassination", "relentless_strikes", {
  ranks: 5,
  description: [
    "Your finishing moves have a {value}% chance per Combo Point to restore 25 Energy.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

// --- Combat ---

// Combat: Improved Eviscerate → Coup de Grace; now also empowers Death Mark.
replaceTalentFrom("1.60.1.70755", "rogue", "Combat", "improved_eviscerate", {
  name: "Coup de Grace",
  description: [
    "Increases the damage done by your Eviscerate ability by {value}%, and the damage and storage rate of your Death Mark ability by {value}%.",
    {
      value: [7, 13, 20],
    },
  ],
});

// Combat: Improved Sinister Strike → Efficient Strikes; now also reduces Hemorrhage cost.
replaceTalentFrom("1.60.1.70755", "rogue", "Combat", "improved_sinister_strike", {
  name: "Efficient Strikes",
  description: [
    "Reduces the Energy cost of your Sinister Strike and Hemorrhage abilities by {value}.",
    {
      value: [3, 5],
    },
  ],
});

// Combat: Composure added at row 3, col 4 (Hyjal reworks its Relentless Strikes into Composure; in
// TalentForge it is a distinct new talent, and the existing `endurance` talent is left in place).
insertTalentFrom("1.60.1.70755", "rogue", "Combat", {
  id: "composure",
  name: "Composure",
  icon: "ability_rogue_fleetfooted",
  row: 2,
  col: 3,
  ranks: 2,
  requiresTalents: null,
  description: [
    "Increases the Energy cost reduction of your Poised ability by {value}.",
    {
      value: [5, 10],
    },
  ],
  isActive: false,
});

// Combat: Improved Sprint moves to row 2, col 4.
moveTalentFrom("1.60.1.70755", "rogue", "Combat", "improved_sprint", 1, 3);

// Combat: Flawless Execution Eviscerate cost reduction increased to 15.
replaceTalentFrom("1.60.1.70755", "rogue", "Combat", "flawless_execution", {
  description: [
    "Reduces the Energy cost of your Eviscerate ability by 15.",
  ],
});

// Combat: Dual Wield Specialization → Flash of Steel (reworked to empower Shank). Removed/re-added as a
// clean new id so this patch's new Dual Wield Specialization can reuse the original id below.
removeTalentsByIdFrom("1.60.1.70755", "rogue", "Combat", ["dual_wield_specialization"]);
insertTalentFrom("1.60.1.70755", "rogue", "Combat", {
  id: "flash_of_steel",
  name: "Flash of Steel",
  icon: "ability_rogue_restlessblades",
  row: 5,
  col: 2,
  ranks: 5,
  requiresTalents: null,
  description: [
    "Increases the Energy generated by your Shank ability by {value1} and reduces its cooldown by {value2} sec.",
    {
      value1: [3, 6, 9, 12, 15],
      value2: [0.4, 0.8, 1.2, 1.6, 2.0],
    },
  ],
  isActive: false,
});

// Combat: Weapon Expertise moves to row 4, col 3; now requires Precision.
moveTalentFrom("1.60.1.70755", "rogue", "Combat", "weapon_expertise", 3, 2);
replaceTalentFrom("1.60.1.70755", "rogue", "Combat", "weapon_expertise", {
  requiresTalents: "precision",
});

// Combat: Aggression moves to row 4, col 4; now buffs Sinister Strike and Eviscerate by 5/10/15%.
moveTalentFrom("1.60.1.70755", "rogue", "Combat", "aggression", 3, 3);
replaceTalentFrom("1.60.1.70755", "rogue", "Combat", "aggression", {
  description: [
    "Increases the damage of your Sinister Strike and Eviscerate abilities by {value}%.",
    {
      value: [5, 10, 15],
    },
  ],
});

// Combat: Adrenaline Rush now requires Blade Flurry.
replaceTalentFrom("1.60.1.70755", "rogue", "Combat", "adrenaline_rush", {
  requiresTalents: "blade_flurry",
});

// Combat: Dual Wield Specialization added at row 5, col 1 (reuses the id freed above).
insertTalentFrom("1.60.1.70755", "rogue", "Combat", {
  id: "dual_wield_specialization",
  name: "Dual Wield Specialization",
  icon: "ability_dualwield",
  row: 4,
  col: 0,
  ranks: 2,
  requiresTalents: null,
  description: [
    "Increases the damage done by your off-hand weapon by {value}%.",
    {
      value: [25, 50],
    },
  ],
  isActive: false,
});

// --- Subtlety ---

// Subtlety: Camouflage moves to row 2, col 2; reduced to 3 ranks.
moveTalentFrom("1.60.1.70755", "rogue", "Subtlety", "camouflage", 1, 1);
replaceTalentFrom("1.60.1.70755", "rogue", "Subtlety", "camouflage", {
  ranks: 3,
  description: [
    "Reduces your speed penalty from your Stealth ability by {value1}% and reduces its cooldown by {value2} sec.",
    {
      value1: [5, 10, 15],
      value2: [2, 4, 6],
    },
  ],
});

// Subtlety: Opportunity increased to 5 ranks.
replaceTalentFrom("1.60.1.70755", "rogue", "Subtlety", "opportunity", {
  ranks: 5,
  description: [
    "Increases the damage dealt by your Backstab, Garrote, Ambush, and Mutilate abilities by {value}%.",
    {
      value: [4, 8, 12, 16, 20],
    },
  ],
});

// Subtlety: Setup moves to row 1, col 1; proc chance reduced.
moveTalentFrom("1.60.1.70755", "rogue", "Subtlety", "setup", 0, 0);
replaceTalentFrom("1.60.1.70755", "rogue", "Subtlety", "setup", {
  description: [
    "Gives you a {value}% chance to add a Combo Point to your target after Dodging their attack or fully resisting one of their spells.",
    {
      value: [15, 30, 45],
    },
  ],
});

// Subtlety: Elusiveness moves to row 4, col 1.
moveTalentFrom("1.60.1.70755", "rogue", "Subtlety", "elusiveness", 3, 0);

// Subtlety: Dirty Tricks moves to row 2, col 4.
moveTalentFrom("1.60.1.70755", "rogue", "Subtlety", "dirty_tricks", 1, 3);

// Subtlety: Improved Ambush moves to row 2, col 3.
moveTalentFrom("1.60.1.70755", "rogue", "Subtlety", "improved_ambush", 1, 2);

// Subtlety: Ghostly Strike moves to row 4, col 2; now enables a free Ambush/Garrote.
moveTalentFrom("1.60.1.70755", "rogue", "Subtlety", "ghostly_strike", 3, 1);
replaceTalentFrom("1.60.1.70755", "rogue", "Subtlety", "ghostly_strike", {
  description: [
    "A strike that deals 125% (180% if a Dagger is equipped in your Main Hand) weapon damage, increases your chance to dodge by 15% for 7 sec, and causes your next Ambush or Garrote cast within 7 sec to not require Stealth. Awards 1 combo point.",
  ],
});

// Subtlety: Improved Distract removed.
removeTalentsByIdFrom("1.60.1.70755", "rogue", "Subtlety", ["improved_distract"]);

// Subtlety: Heightened Senses moves to row 5, col 1.
moveTalentFrom("1.60.1.70755", "rogue", "Subtlety", "heightened_senses", 4, 0);

// Subtlety: Premeditation moves to row 3, col 2.
moveTalentFrom("1.60.1.70755", "rogue", "Subtlety", "premeditation", 2, 1);

// Subtlety: Serrated Blades moves to row 3, col 3.
moveTalentFrom("1.60.1.70755", "rogue", "Subtlety", "serrated_blades", 2, 2);

// Subtlety: Dirty Deeds moves to row 2, col 1.
moveTalentFrom("1.60.1.70755", "rogue", "Subtlety", "dirty_deeds", 1, 0);

// Subtlety: Hemorrhage now also increases Garrote damage taken.
replaceTalentFrom("1.60.1.70755", "rogue", "Subtlety", "hemorrhage", {
  description: [
    "An instant strike that deals 100% weapon damage (145% if a Dagger is equipped) and causes the target to take 15% increased Rupture and Garrote damage from the Rogue. Lasts 15 sec. Awards 1 Combo Point.",
  ],
});

// Subtlety: Quietus → Quick Getaway. Moves to row 4, col 4; now requires Dirty Tricks; reduced to 2 ranks.
moveTalentFrom("1.60.1.70755", "rogue", "Subtlety", "quietus", 3, 3);
replaceTalentFrom("1.60.1.70755", "rogue", "Subtlety", "quietus", {
  name: "Quick Getaway",
  icon: "ability_rogue_blackjack",
  ranks: 2,
  requiresTalents: "dirty_tricks",
  description: [
    "Increases the maximum number of targets you may have Sapped by 1, and increases your movement speed by {value}% for 3 sec after Sapping a target.",
    {
      value: [15, 30],
    },
  ],
});

// Subtlety: Cutthroat → Boot Knife; now empowers Shank.
replaceTalentFrom("1.60.1.70755", "rogue", "Subtlety", "cutthroat", {
  name: "Boot Knife",
  icon: "inv_sword_32",
  description: [
    "Grants your Shank ability a {value}% chance to add 2 Combo Points to the target.",
    {
      value: [20, 40, 60, 80, 100],
    },
  ],
});

// Subtlety: Thousand Cuts → Death Mark; now an active finishing move.
replaceTalentFrom("1.60.1.70755", "rogue", "Subtlety", "thousand_cuts", {
  name: "Death Mark",
  icon: "ability_creature_cursed_02",
  isActive: true,
  description: [
    "Finishing move that marks the target, storing a portion of the damage dealt by your attacks per Combo Point. Garrote and Rupture damage is stored at twice the rate. After 6 sec, the stored damage is dealt, up to a maximum increased by Attack Power and Critical Strike chance:\n1 point : 12% stored\n2 points: 24% stored\n3 points: 36% stored\n4 points: 48% stored\n5 points: 60% stored",
  ],
});

// === SHAMAN ===

// --- Elemental ---

// Elemental: Convection no longer reduces Lava Burst mana cost.
replaceTalentFrom("1.60.1.70755", "shaman", "Elemental", "convection", {
  description: [
    "Reduces the mana cost of your Shock, Lightning Bolt, and Chain Lightning spells by {value}%.",
    {
      value: [2, 4, 6, 8, 10],
    },
  ],
});

// Elemental: Elemental Alacrity no longer affects Lava Burst.
replaceTalentFrom("1.60.1.70755", "shaman", "Elemental", "elemental_alacrity", {
  description: [
    "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by {value} sec.",
    {
      value: [0.17, 0.33, 0.5],
    },
  ],
});

// Elemental: Call of Flame no longer affects Lava Burst.
replaceTalentFrom("1.60.1.70755", "shaman", "Elemental", "call_of_flame", {
  description: [
    "Increases the damage done by your Fire Totems and by your Flame Shock and Fire Nova spells by {value}%, as well as increases the duration of your Flame Shock spell by {sec} sec.",
    {
      value: [5, 10, 15],
      sec: [3, 6, 9],
    },
  ],
});

// Elemental: Eye of the Storm no longer affects Lava Burst.
replaceTalentFrom("1.60.1.70755", "shaman", "Elemental", "eye_of_the_storm", {
  description: [
    "Gives your Lightning Bolt and Chain Lightning spells a {value}% chance to not lose casting time when you take damage.",
    {
      value: [23, 47, 70],
    },
  ],
});

// Elemental: Elemental Reach no longer extends Lava Burst range or reduces Totemic Projection cooldown.
replaceTalentFrom("1.60.1.70755", "shaman", "Elemental", "elemental_reach", {
  description: [
    "Increases the range of your Lightning Bolt, Chain Lightning, and Fire Nova spells by {value} yards.",
    {
      value: [3, 6],
    },
  ],
});

// Elemental: Lightning Overload proc chance increased to 10/20/30%.
replaceTalentFrom("1.60.1.70755", "shaman", "Elemental", "lightning_overload", {
  description: [
    "Gives your Lightning Bolt and Chain Lightning spells a {value}% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
    {
      value: [10, 20, 30],
    },
  ],
});

// Elemental: Lava Burst → Call of Thunder; now a passive that boosts Lightning Bolt/Chain Lightning crit.
replaceTalentFrom("1.60.1.70755", "shaman", "Elemental", "lava_burst", {
  name: "Call of Thunder",
  icon: "spell_nature_callstorm",
  isActive: false,
  castTime: null,
  cooldown: null,
  spentResource: null,
  range: null,
  description: [
    "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 5%.",
  ],
});

// Elemental: Elemental Mastery → Lightning Mastery; now lightning-focused (prerequisite now displays as Call of Thunder).
replaceTalentFrom("1.60.1.70755", "shaman", "Elemental", "elemental_mastery", {
  name: "Lightning Mastery",
  icon: "spell_nature_unrelentingstorm",
  description: [
    "Gain mastery over Lightning, reducing the cast time of your Lightning Bolt spell by 0.5 sec, and removing the cooldown from your Chain Lightning spell. Lasts 15 sec.",
  ],
});

// --- Enhancement ---

// Enhancement: Mental Dexterity Intellect-to-Attack-Power conversion increased.
replaceTalentFrom("1.60.1.70755", "shaman", "Enhancement", "mental_dexterity", {
  description: [
    "Increases your Attack Power by an amount equal to {value}% of your Intellect.",
    {
      value: [50, 100, 150],
    },
  ],
});

// Enhancement: Improved Ghost Wolf moves to row 4, col 4.
moveTalentFrom("1.60.1.70755", "shaman", "Enhancement", "improved_ghost_wolf", 3, 3);

// Enhancement: Improved Lightning Shield moves to row 2, col 3.
moveTalentFrom("1.60.1.70755", "shaman", "Enhancement", "improved_lightning_shield", 1, 2);

// Enhancement: Flurry attack speed per rank increased.
replaceTalentFrom("1.60.1.70755", "shaman", "Enhancement", "flurry", {
  description: [
    "Increases your attack speed by {value}% for your next 3 swings after dealing a melee critical strike.",
    {
      value: [6, 12, 18, 24, 30],
    },
  ],
});

// Enhancement: Stormstrike now deals 150% weapon damage.
replaceTalentFrom("1.60.1.70755", "shaman", "Enhancement", "stormstrike", {
  description: [
    "Instantly strike for 150% weapon damage and increase the damage you deal to the target with your next Lightning Bolt, Chain Lightning, or Earth Shock spell by 20% for 12 sec.",
  ],
});

// --- Restoration ---

// Restoration: Riptide no longer provides an upfront direct heal.
replaceTalentFrom("1.60.1.70755", "shaman", "Restoration", "riptide", {
  description: [
    "Heals a friendly target for 445 over 15 sec, and increases the effectiveness of your Chain Heal casts directly on that target by 25%.",
  ],
});

// === MAGE ===

// --- Arcane ---

// Arcane: Missile Barrage (id arcane_resilience, renamed in 1.60.1.70707) no longer procs from Frost Blast.
replaceTalentFrom("1.60.1.70755", "mage", "Arcane", "arcane_resilience", {
  description: [
    "Gives your Arcane Blast spell a {value1}% chance, and your Arcane Wrath, Fireball, Frostbolt, and Frostfire Bolt spells a {value2}% chance to reduce the channeled duration of your next Arcane Missiles spell by 50%, reduce the Mana cost by 100%, and missiles fire every 0.5 sec.",
    {
      value1: [20, 40],
      value2: [10, 20],
    },
  ],
});

// --- Frost ---

// Frost: Improved Frostbolt no longer affects Frost Blast.
replaceTalentFrom("1.60.1.70755", "mage", "Frost", "improved_frostbolt", {
  description: [
    "Reduces the casting time of your Frostbolt spell by {value} sec.",
    {
      value: [0.1, 0.2, 0.3, 0.4, 0.5],
    },
  ],
});

// Frost: Arctic Reach no longer affects Frost Blast.
replaceTalentFrom("1.60.1.70755", "mage", "Frost", "arctic_reach", {
  description: [
    "Increases the range of your Frostbolt, Ice Lance, and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by {value}%.",
    {
      value: [10, 20],
    },
  ],
});

// Frost: Winter's Chill no longer procs from Frost Blast.
replaceTalentFrom("1.60.1.70755", "mage", "Frost", "winters_chill", {
  description: [
    "Gives your Frostbolt and Fingers of Frost empowered Ice Lance spells a {value}% chance to apply Winter's Chill, increasing the target's damage taken from your next Cone of Cold by 20% and it gains an additional 7% of your spell damage, stacking up to 5 times.",
    {
      value: [20, 40, 60, 80, 100],
    },
  ],
});

// === WARLOCK ===

// --- Affliction ---

// Affliction: Wrack periodic damage increased from 36 to 86.
replaceTalentFrom("1.60.1.70755", "warlock", "Affliction", "wrack", {
  description: [
    "Tears the target apart from within, inflicting 86 Shadow damage every 1 sec and increasing the damage they take from your other Shadow damage over time effects by 10% for 6 sec.",
  ],
});

// --- Destruction ---

// Destruction: Shadow and Flame damage bonus per rank doubled.
replaceTalentFrom("1.60.1.70755", "warlock", "Destruction", "shadow_and_flame", {
  description: [
    "Hitting an enemy with Conflagrate increases all Shadow damage you deal by {value}% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by {value}% for 20 sec. In addition, Conflagrate has a {chance}% chance not to consume Immolate, and Shadowburn has a {chance}% chance to instantly refund a Soul Shard.",
    {
      value: [4, 8, 12, 16, 20],
      chance: [20, 40, 60, 80, 100],
    },
  ],
});

// === DRUID ===

// --- Feral Combat ---

// Feral Combat: Rend and Tear damage per rank increased.
replaceTalentFrom("1.60.1.70755", "druid", "Feral Combat", "rend_and_tear", {
  description: [
    "Increases damage done by your melee abilities on Bleeding targets by {value}%.",
    {
      value: [3, 6, 9, 12, 15],
    },
  ],
});

// ==================== PATCH 1.60.1.70888 ====================

// === HUNTER ===

// Beast Mastery: Summon Hawk mana cost changed from 80 flat Mana to 11% of base Mana (tooltip text unchanged).
replaceTalentFrom("1.60.1.70888", "hunter", "Beast Mastery", "summon_hawk", {
  spentResource: 11,
  absoluteSpent: false,
});

// === WARLOCK ===

// Affliction: Soul Siphon now specifies Corruption, Siphon Life, and Bane of Agony as the qualifying effects.
replaceTalentFrom("1.60.1.70888", "warlock", "Affliction", "soul_siphon", {
  description: [
    "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by {value}% per each of your Corruption, Siphon Life, and Bane of Agony effects active on the target, up to a maximum increase of {max}%.",
    {
      value: [4, 8, 12],
      max: [12, 24, 36],
    },
  ],
});

// Affliction: Wrack periodic damage reduced to 60.2; now hastens Siphon Life, Corruption, and Bane of Agony while channeling.
replaceTalentFrom("1.60.1.70888", "warlock", "Affliction", "wrack", {
  description: [
    "Tears the target apart from within for 6 sec, inflicting 60.2 Shadow damage every 1 sec. While channeling, your Siphon Life, Corruption, and Bane of Agony effects on the target deal their periodic damage 100% faster.",
  ],
});

// === DRUID ===

// Restoration: Swiftmend tooltip no longer states it consumes Rejuvenation or Regrowth.
replaceTalentFrom("1.60.1.70888", "druid", "Restoration", "swiftmend", {
  description: [
    "Instantly heals a target with your active Rejuvenation or Regrowth effect for an amount equal to the full duration of the periodic effect.",
  ],
});

