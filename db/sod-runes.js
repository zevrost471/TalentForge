// sod-runes.js

import { runeSlots } from './sod-rune-slots.js';

let HEAD = runeSlots.HEAD;
let BACK = runeSlots.BACK;
let CHEST = runeSlots.CHEST;
let WRIST = runeSlots.WRIST;
let HANDS = runeSlots.HANDS;
let WAIST = runeSlots.WAIST;
let LEGS = runeSlots.LEGS;
let FEET = runeSlots.FEET;
let RING = runeSlots.RING;

export const runes = Object.freeze({
  base: {
    deathknight: null,
    druid: [
      {
        name: "Gale Winds",
        icon: [null, null, "spell_frost_windwalkon", "ability_druid_galewinds"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Increases the damage done by your Hurricane by 100%, it no longer has a cooldown, and its mana cost is reduced by 20%.",
          "Increases the damage done by your Hurricane by 100%, it no longer has a cooldown, and its mana cost is reduced by 60%.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431450/gale-winds",
      },
      {
        name: "Gore",
        icon: [null, null, "spell_nature_unyeildingstamina", "spell_druid_feralchargecat"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Striking a target with Lacerate, Swipe, or Maul has a 15% chance to reset the cooldown on Mangle (Bear). Striking a target with Mangle (Cat) or Shred has a 5% chance to reset the cooldown on Tiger's Fury.",
          "Striking a target with Lacerate, Swipe, or Maul has a 15% chance to reset the cooldown on Mangle (Bear) and grant 10 Rage. Striking a target with Mangle (Cat) or Shred has a 15% chance to reset the cooldown on Tiger's Fury.",
        ],
        linkToWoWHead: "https://www.wowhead.com/classic/spell=431446/gore",
      },
      {
        name: "Improved Barkskin",
        icon: [null, null, "spell_nature_stoneclawtotem", "spell_nature_stoneclawtotem"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Your Barkskin can now be cast on allies, no longer penalizes melee combat speed or spellcasting time, and can be cast while shapeshifted.",
          "Your Barkskin can now be cast on allies, no longer penalizes melee combat speed or spellcasting time, and can be cast while shapeshifted.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431448/improved-barkskin",
      },
      {
        name: "Improved Swipe",
        icon: [null, null, null, "inv_misc_monsterclaw_03"],
        gear_slot: [null, null, null, BACK],
        description: [
          null,
          null,
          null,
          "While in Cat Form, your Swipe ability becomes Swipe (Cat), and while in Bear Form, your Swipe ability strikes up to 7 additional enemies.<br><br>Swipe (Cat)<br>Swipe nearby enemies, inflicting 250% weapon damage and generating 1 combo point on your current target.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415452/improved-swipe",
      },
      {
        name: "Starfall",
        icon: [null, null, null, "ability_druid_starfall"],
        gear_slot: [null, null, null, BACK],
        description: [
          null,
          null,
          null,
          "Gain the Starfall ability:<br><br>You summon a flurry of stars from the sky over 10 sec, striking targets within 30 yards of your location, each dealing 68.612 to 80.544 Arcane damage to its target and 11.932 Arcane damage to all other enemies within 5 yards. Maximum 20 stars.<br><br>Shapeshifting or mounting cancels the effect. Any effect which causes you to lose control of your character will suppress the Starfall effect.<br><br>Benefits from and triggers most talents and effects that trigger or benefit from Moonfire.",
        ],
        linkToWoWHead: "https://www.wowhead.com/classic/spell=439768/starfall",
      },
      {
        name: "Tree of Life",
        icon: [null, null, null, "ability_druid_treeoflife"],
        gear_slot: [null, null, null, BACK],
        description: [
          null,
          null,
          null,
          "Gain the Tree of Life ability:<br><br>Shapeshift into the Tree of Life. While in this form you increase healing received by 10% for all party members within 45 yards, Wild Growth healing is increased by 60%, your heal over time spells cost 20% less, you gain 25% increased Spirit, you gain 200% increased armor, and you cannot cast harmful spells.<br><br>The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=439766/tree-of-life",
      },
      {
        name: "Fury of Stormrage",
        icon: ["inv_staff_90", null, null, "inv_staff_90"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Reduces the mana cost of Wrath by 100% and each time you deal damage with Wrath you have a 12% chance for your next cast of Healing Touch within 15 sec to be instant.",
          null,
          null,
          "Reduces the mana cost of Wrath by 100% and each time you deal damage with Wrath you have a 12% chance for your next cast of Healing Touch within 15 sec to be instant and castable in any shapeshift form. Allows Wrath to be cast while in Tree of Life form.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409832/fury-of-stormrage",
      },
      {
        name: "Living Seed",
        icon: [
          "spell_shadow_detectinvisibility",
          null,
          null,
          "ability_druid_giftoftheearthmother",
        ],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "When you critically heal your target with any healing spell you plant a Living Seed on the target for 30% of the amount healed. The Living Seed will bloom when the target is next attacked. Lasts 15 sec.",
          null,
          null,
          "When you critically heal your target with any non-periodic healing spell you plant a Living Seed on the target for 50% of the amount healed. The Living Seed will bloom the next time the target takes damage or receives non-periodic healing. Lasts 15 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415761/living-seed",
      },
      {
        name: "Survival of the Fittest",
        icon: [
          "ability_druid_enrage",
          "ability_druid_enrage",
          "ability_druid_enrage",
          "ability_druid_enrage",
        ],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Reduces the chance you'll be critically hit by melee attacks by 6% and reduces all damage taken by 10%. Damage taken reduced by an additional 10% while in Bear Form or Dire Bear Form.",
          "Reduces the chance you'll be critically hit by melee attacks by 6% and reduces all damage taken by 10%. Damage taken reduced by an additional 10% while in Bear Form or Dire Bear Form.",
          "Reduces the chance you'll be critically hit by melee attacks by 6% and reduces all damage taken by 10%. Damage taken reduced by an additional 10% while in Bear Form or Dire Bear Form.",
          "Reduces the chance you'll be critically hit by melee attacks by 6% and reduces all damage taken by 10%. Damage taken reduced by an additional 10% while in Bear Form or Dire Bear Form.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415709/survival-of-the-fittest",
      },
      {
        name: "Wild Strikes",
        icon: ["ability_druid_swipe", null, null, "ability_druid_swipe"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "While you are in Cat Form, Bear Form, or Dire Bear Form, party members within 20 yards gain increased combat ferocity.  Each melee hit has a 20% chance of granting the attacker an extra attack with 20% additional Attack Power. No effect if the party member is already benefitting from Windfury Totem.",
          null,
          null,
          "While you are in Cat Form, Bear Form, or Dire Bear Form, party or raid members within 100 yards gain increased combat ferocity. Each melee hit has a 20% chance of granting the attacker an extra attack with 20% additional Attack Power. No effect if the target is already benefitting from Windfury Totem.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409805/wild-strikes",
      },
      {
        name: "Efflorescence",
        icon: [null, null, "inv_misc_flower_04", "inv_misc_herb_talandrasrose"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Your Swiftmend now also causes Efflorescence, healing all party members within 15 yards of the Swiftmend target's location for (* 21 / 100) every 2 sec for 30 sec.",
          "Your Swiftmend now also causes Efflorescence, healing all party members within 15 yards of the Swiftmend target's location for 108.698 every 1 sec for 15 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431466/efflorescence",
      },
      {
        name: "Elune's Fires",
        icon: [null, null, "ability_druid_owlkinfrenzy", "ability_druid_owlkinfrenzy"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Some of your spells and abilities extend the duration of your damage and healing over time effects on their target.",
          "Some of your spells and abilities extend the duration of your damage and healing over time effects on their target:<br><br>Starfire extends Moonfire by 6 sec.<br>Wrath extends Sunfire by 3 sec.<br>Regrowth extends Rejuvenation by 6 sec.<br>Shred extends Rip by 2 sec.<br><br>Each effect can only be extended up to its initial duration.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415762/elunes-fires",
      },
      {
        name: "Improved Frenzied Regeneration",
        icon: [null, null, "ability_bullrush", "ability_bullrush"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Your Frenzied Regeneration can now be used in all forms or while not shapeshifted. It now converts your active resource into health every second for 10 sec. Up to 10 Rage, 10 Energy, or 5% base Mana is converted per second into up to 10% health.",
          "Your Frenzied Regeneration can now be used in all forms except Moonkin Form or while not shapeshifted. It now converts your active resource into health every second for 10 sec. Up to 10 Rage, 10 Energy, or 20% base Mana is converted per second into up to 10% health.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431458/improved-frenzied-regeneration",
      },
      {
        name: "Mangle",
        icon: ["ability_druid_mangle2", "ability_druid_mangle2", "ability_druid_mangle2", "ability_druid_mangle2"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Mangle ability:<br><br>Mangle the target for 160% normal damage and cause the target to take 30% additional damage from Bleed effects and Shred for 1 min. This ability benefits from and triggers all effects associated with Claw and Maul.",
          null,
          null,
          "Gain the Mangle (Bear) ability and replace your Claw ability with Mangle (Cat). This ability benefits from and triggers all effects associated with Claw and Maul.<br><br>Mangle (Bear)<br>Mangle the target for 160% normal damage and cause the target to take 30% additional damage from Bleed effects and Shred for 1 min. This ability benefits from and triggers all effects associated with Claw and Maul.<br><br>Hitting a target with Mangle (Bear) also grants you 4 Attack Power for each point of your defense skill beyond 300. Lasts 15 sec.<br><br>Mangle (Cat)<br>Mangle the target for 270% normal damage and cause the target to take 30% additional damage from Bleed effects and Shred for 1 min. Awards 1 combo point. This ability benefits from and triggers all effects associated with Claw and Maul.",
        ],
        /*
        isActive: true,
        castTime: 0,
        resourceType: 2,
        spentResource: 15,
        range: 0,
        cooldown: 6,
        requiresBearForm: true,
        requiresDireBearForm: true,
        */
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409828/mangle",
      },
      {
        name: "Skull Bash",
        icon: ["inv_misc_bone_taurenskull_01", null, null, "inv_misc_bone_taurenskull_01"],
        gear_slot: [LEGS, null, null, HANDS],
        description: [
          "Gain the Skull Bash ability:<br><br>Charge to a target within 13 yards and bash the target's skull, interrupting spellcasting and preventing any spell in that school from being cast for 2 sec. Shares a cooldown with Feral Charge.",
          null,
          null,
          "Gain the Skull Bash ability:<br><br>Charge to a target within 13 yards and bash the target's skull, interrupting spellcasting and preventing any spell in that school from being cast for 2 sec. Shares a cooldown with Feral Charge.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415759/skull-bash",
      },
      {
        name: "Sunfire",
        icon: ["ability_mage_firestarter", null, null, "ability_mage_firestarter"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Sunfire ability:<br><br>Burns the enemy for (130 */ 100) to (152 */ 100) Nature damage and then an additional Nature damage over 12 sec.",
          null,
          null,
          "Gain the Sunfire ability and while in Bear Form, Cat Form, or Dire Bear Form your Moonfire is replaced with Sunfire (Bear) or Sunfire (Cat). This spell benefits from and triggers all effects associated with Moonfire.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=414692/sunfire",
      },
      {
        name: "Wild Growth",
        icon: ["ability_druid_flourish", null, null, "ability_druid_flourish"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Wild Growth ability:<br><br>Heals all of target player's party members within 40 yards of target player for (34 / 100 * 7 *) over 7 sec. The amount healed is applied quickly at first, and slows down as Wild Growth reaches its full duration.",
          null,
          null,
          "Gain the Wild Growth ability:<br><br>Heals all of target player's party members within 43.5 yards of target player for 808.439 over 7 sec. The amount healed is applied quickly at first, and slows down as Wild Growth reaches its full duration.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409810/wild-growth",
      },
      {
        name: "Berserk",
        icon: [null, "ability_druid_berserk", null, "ability_druid_berserk"],
        gear_slot: [null, WAIST, null, WAIST],
        description: [
          null,
          "Gain the Berserk ability:<br><br>When activated, this ability causes your Mangle (Bear) ability to hit up to 3 targets and have no cooldown, and reduces the energy cost of all your Cat Form abilities by 50%.  Lasts 15 sec. Requires Bear Form, Cat Form, or Dire Bear Form to activate.",
          null,
          "Gain the Berserk ability:<br><br>When activated, this ability causes your Mangle (Bear) and Lacerate abilities to hit up to 3 targets, Lacerate to cost no Rage, Mangle (Bear) to have no cooldown, and reduces the energy cost of all your Cat Form abilities by 50%. Lasts 15 sec. Requires Bear Form, Cat Form, or Dire Bear Form to activate.<br><br>Clears the effect of Fear and makes you immune to Fear for the duration.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=424759/berserk",
      },
      {
        name: "Eclipse",
        icon: [null, "ability_druid_eclipse", null, "ability_druid_eclipse"],
        gear_slot: [null, WAIST, null, WAIST],
        description: [
          null,
          "Starfire increases the critical strike chance of your next two Wraths by 30%, and Wrath increases the critical strike chance of your next Starfire by 30%, both effects stacking up to 4 charges. Both spells also gain 70% chance at all times to not lose casting time when you take damage.",
          null,
          "Starfire increases the critical strike chance of your next two Wraths by 30%, and Wrath reduces the cast time of your next Starfire by 1.0 sec, both effects stacking up to 4 charges. Both spells also gain 70% chance at all times to not lose casting time when you take damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409813/eclipse",
      },
      {
        name: "Nourish",
        icon: [null, "ability_druid_nourish", null, "ability_druid_nourish"],
        gear_slot: [null, WAIST, null, WAIST],
        description: [
          null,
          "Gain the Nourish ability:<br><br>Heals a friendly target for (161 / 100 *) to (189 / 100 *). Heals for an additional 20% if you have a Rejuvenation, Regrowth, Lifebloom, or Wild Growth effect active on the target. This spell benefits from and triggers all effects associated with Healing Touch.",
          null,
          "Gain the Nourish ability:<br><br>Heals a friendly target for 1093.77 to 1283.991. Heals for an additional 20% if you have a Rejuvenation, Regrowth, Lifebloom, or Wild Growth effect active on the target. This spell benefits from and triggers all effects associated with Healing Touch or Regrowth.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409830/nourish",
      },
      {
        name: "Lacerate",
        icon: ["ability_druid_lacerate", null, null, "ability_druid_lacerate"],
        gear_slot: [HANDS, null, null, LEGS],
        description: [
          "Gain the Lacerate ability:<br><br>Lacerates the enemy target, making them bleed for (* 20 / 100 * 5) damage over 15 sec plus 20% weapon damage per existing application of Lacerate on the target. Causes a high amount of threat. This effect stacks up to 5 times on the same target.",
          null,
          null,
          "Gain the Lacerate ability:<br><br>Lacerates the enemy target, making them bleed for 149.156 damage over 15 sec plus 20% weapon damage per existing application of Lacerate on the target. Causes a high amount of threat. This effect stacks up to 5 times on the same target.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415760/lacerate",
      },
      {
        name: "Lifebloom",
        icon: ["inv_misc_herb_felblossom", null, null, "inv_misc_herb_felblossom"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Lifebloom ability:<br><br>Heals the target over 7 sec.  When Lifebloom completes its duration or is dispelled, the target instantly heals and the Druid regains half the cost of the spell.  This effect can stack up to 3 times on the same target.",
          "Reduces the global cooldown on your Rejuvenation and Lifebloom abilities by 0.5 sec and you gain the Lifebloom ability.",
          null,
          "Reduces the global cooldown on your Rejuvenation and Lifebloom abilities by 0.5 sec and you gain the Lifebloom ability:<br><br>Heals the target for 190.221 over 7 sec. When Lifebloom completes its duration or is dispelled, the target instantly heals for 387.235 and the Druid regains half the cost of the spell. This effect can stack up to 3 times on the same target.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409824/lifebloom",
      },
      {
        name: "Savage Roar",
        icon: ["ability_druid_skinteeth", null, null, "ability_druid_skinteeth"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Savage Roar ability:<br><br>Finishing move that increases physical damage done by 30% while in Cat Form.  Lasts longer per combo point.",
          "Gain the Savage Roar ability:<br><br>Finishing move that increases physical damage done by 30% while in Cat Form.  Lasts longer per combo point.",
          null,
          "Gain the Savage Roar ability:<br><br>Finishing move that increases physical damage done by 30% while in Cat Form. Lasts longer per combo point:<br>1 point : 14 seconds<br>2 points: 19 seconds<br>3 points: 24 seconds<br>4 points: 29 seconds<br>5 points: 34 seconds",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409819/savage-roar",
      },
      {
        name: "Starsurge",
        icon: ["spell_arcane_arcane03", null, null, "spell_arcane_arcane03"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Starsurge ability:<br><br>Launch surging stellar energies that cause Arcane damage. Starsurge benefits from and triggers most talents and effects that trigger or benefit from Wrath or Starfire.",
          "Gain the Starsurge ability:<br><br>Launch surging stellar energies that cause Arcane damage. Starsurge benefits from and triggers most talents and effects that trigger or benefit from Wrath or Starfire.",
          null,
          "Gain the Starsurge ability:<br><br>Launch surging stellar energies that cause Arcane damage, and increases the damage done by your next 1 Starfire cast by 80% for 15 sec.<br><br>Starsurge benefits from and triggers most talents and effects that trigger or benefit from Wrath or Starfire.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=424715/starsurge",
      },
      {
        name: "Dreamstate",
        icon: [null, "spell_nature_sleep", null, "ability_druid_dreamstate"],
        gear_slot: [null, FEET, null, FEET],
        description: [
          null,
          "Your damaging spell critical strikes grant you 50% of your mana regeneration while casting for 8 sec and increase Nature damage dealt to the target by 20% for 12 sec.",
          null,
          "Your damaging non-periodic spell critical strikes or any damage from Starsurge grant you 50% of your mana regeneration while casting for 8 sec and increase Arcane and Nature damage dealt to non-player targets by 20% for 12 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409831/dreamstate",
      },
      {
        name: "King of the Jungle",
        icon: [null, "ability_druid_kingofthejungle", null, "ability_druid_kingofthejungle"],
        gear_slot: [null, FEET, null, FEET],
        description: [
          null,
          "Tiger's Fury now increases all physical damage you deal by 15% instead of by a flat value, and instantly grants you 60 Energy. It is no longer on the global cooldown, but it now has its own 30 sec cooldown.",
          null,
          "Tiger's Fury now increases all physical damage you deal by 15% instead of by a flat value, and instantly grants you 60 Energy. It is no longer on the global cooldown, but it now has its own 30 sec cooldown. Additionally, Tiger's Fury will persist while not in Cat Form, but will cancel upon entering Bear Form or Dire Bear Form.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=424762/king-of-the-jungle",
      },
      {
        name: "Survival Instincts",
        icon: [null, "ability_mount_whitedirewolf", null, "ability_druid_tigersroar"],
        gear_slot: [null, FEET, null, FEET],
        description: [
          null,
          "Gain the Survival Instincts ability:<br><br>When activated, this grants you 30% of your maximum health for 20 sec. After the effect expires, the health is lost. Useable in any form.",
          null,
          "Gain the Survival Instincts ability:<br><br>When activated, this grants you 30% of your maximum health and increases all non-Physical healing you deal by 20% for 20 sec. After the effect expires, the health is lost. Useable in all forms except Moonkin Form.<br><br>In addition, you regenerate 5 rage every time you dodge while in Bear Form or Dire Bear Form, 10 energy while in Cat Form, or 1% of your maximum mana while in any other form.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409809/survival-instincts",
      },
      {
        name: "Arcane Specialization",
        icon: [null, null, null, "inv_elemental_primal_mana"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Arcane spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442893/arcane-specialization",
      },
      {
        name: "Dagger Specialization",
        icon: [null, null, null, "inv_weapon_shortblade_05"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Daggers increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442887/dagger-specialization",
      },
      {
        name: "Defense Specialization",
        icon: [null, null, null, "inv_shield_06"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Defense skill increased by 25. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=459312/defense-specialization",
      },
      {
        name: "Feral Combat Specialization",
        icon: [null, null, null, "ability_druid_catformattack"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Feral Combat skill increased by 5. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=453622/feral-combat-specialization",
      },
      {
        name: "Fist Weapon Specialization",
        icon: [null, null, null, "inv_misc_desecrated_plategloves"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Fist Weapons (Unarmed) increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442890/fist-weapon-specialization",
      },
      {
        name: "Healing Specialization",
        icon: [null, null, null, "spell_holy_greaterheal"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Increases healing done by spells and effects by up to 26. This effect is not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=468758/healing-specialization",
      },
      {
        name: "Mace Specialization",
        icon: [null, null, null, "inv_hammer_01"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Maces and Two-Handed Maces increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442881/mace-specialization",
      },
      {
        name: "Meditation Specialization",
        icon: [null, null, null, "spell_holy_greaterheal"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Restores 5 mana per 5 sec. This effect is not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=468762/meditation-specialization",
      },
      {
        name: "Nature Specialization",
        icon: [null, null, null, "inv_elemental_primal_life"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Nature spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442896/nature-specialization",
      },
      {
        name: "Pole Weapon Specialization",
        icon: [null, null, null, "inv_staff_08"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Staves and Polearms increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442892/pole-weapon-specialization",
      },
    ],
    hunter: [
      {
        name: "Catlike Reflexes",
        icon: [null, null, "ability_hunter_catlikereflexes", "ability_hunter_catlikereflexes"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Increases your chance to dodge by 20% and your pet's chance to dodge by 9%. In addition, reduces the cooldown of your Kill Command and Flanking Strike abilities by 50%.",
          "Increases your chance to dodge by 20% and your pet's chance to dodge by 9%. In addition, reduces the cooldown of your Flanking Strike ability by 50%.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415717/catlike-reflexes",
      },
      {
        name: "Lock and Load",
        icon: [null, null, "ability_hunter_lockandload", "ability_hunter_lockandload"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Each time one of your traps is triggered, your next Shot ability within 20 sec costs no mana and does not incur a cooldown.",
          "Each time you place a trap, your next Shot (except Scatter Shot) ability within 20 sec costs no mana and does not incur a cooldown.",
        ],
        linkToWoWHead: "https://www.wowhead.com/classic/spell=415719/lock-and-load",
      },
      {
        name: "Rapid Killing",
        icon: [null, null, "ability_hunter_rapidkilling", "ability_hunter_rapidkilling"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Reduces the cooldown on Rapid Fire by 2 min, and your next Shot ability within 20 sec after killing a target worth experience or honor deals 20% increased damage.",
          //"Reduces the cooldown on Rapid Fire by 80%, and your next Shot ability within 20 sec after killing a target worth experience or honor deals 20% increased damage.",
          "Reduces the cooldown on Rapid Fire by 80%, Rapid Fire now also grants 40% increased melee attack speed, and your next Shot ability within 20 sec after killing a target worth experience or honor deals 20% increased damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415817/rapid-killing",
      },
      {
        name: "Hit and Run",
        icon: [null, null, null, "ability_hunter_displacement"],
        gear_slot: [null, null, null, BACK],
        description: [
          null,
          null,
          null,
          "You gain 30% movement speed for 15 sec after using Raptor Strike.<br><br>Your pet's damaging abilities send the target into a Rabid Frenzy, increasing their melee attack power by 91 but reducing armor by 640 for 2 min. Rabid enemies will not flee and will ignore Fear and Horror effects.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=440564/hit-and-run",
      },
      {
        name: "Improved Volley",
        icon: [null, null, null, "ability_hunter_focusedaim"],
        gear_slot: [null, null, null, BACK],
        description: [
          null,
          null,
          null,
          "Reduces the mana cost of your Volley by 50%, reduces its cooldown by 100%, increases its damage by 100%, and it no longer suffers pushback from damaging attacks. Volley also deals 3% of your ranged Attack Power as additional damage each time it deals damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=440561/improved-volley",
      },
      {
        name: "Resourcefulness",
        icon: [null, null, null, "ability_hunter_mastertactitian"],
        gear_slot: [null, null, null, BACK],
        description: [
          null,
          null,
          null,
          "Reduces the mana cost of your Traps by 100% and their cooldowns by 40%.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=440558/resourcefulness",
      },
      {
        name: "Aspect of the Lion",
        icon: ["ability_hunter_pet_cat", null, null, null],
        gear_slot: [CHEST, null, null, null],
        description: [
          "Gain the Aspect of the Lion ability:<br><br>The hunter takes on the aspects of a lion, increasing total stats by 10% for all nearby allies, and increasing total stats for the Hunter by an additional 10%. Only one Aspect can be active at a time.",
          null,
          null,
          null,
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409580/heart-of-the-lion",
      },
      {
        name: "Beast Mastery",
        icon: ["ability_physical_taunt", "ability_physical_taunt", "ability_physical_taunt", "ability_physical_taunt"],
        gear_slot: [HANDS, HANDS, HANDS, CHEST],
        description: [
          "Your pet's damage and health are increased by 30%, and its Focus regeneration by 80%. In addition, your pet's Growl now also Taunts the target to attack it for 3 sec.",
          "Your pet's damage and health are increased by 20%, and its Focus regeneration by 50%. In addition, your pet's Growl now also Taunts the target to attack it for 3 sec.",
          "Your pet's damage and health are increased by 20%, and its Focus regeneration by 50%. In addition, your pet's Growl now also Taunts the target to attack it for 3 sec.", //(?)
          "Your pet's damage and health are increased by 15%, and its Focus regeneration by 50%. In addition, your pet's Growl now also Taunts the target to attack it for 3 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409962/beast-mastery",
      },
      {
        name: "Cobra Strikes",
        icon: ["ability_hunter_cobrastrikes", "ability_hunter_cobrastrikes", "ability_hunter_cobrastrikes", "ability_hunter_cobrastrikes"],
        gear_slot: [CHEST, CHEST, CHEST, CHEST],
        description: [
          "Your critical hits with Shot abilities cause your pet's next 2 special attacks to critically hit.",
          "Your critical hits with Shot abilities cause your pet's next 2 special attacks to critically hit.",
          "Your critical hits with Shot abilities cause your pet's next 2 special attacks to critically hit.", //(?)
          "Your critical hits with Shot and Strike abilities and with Mongoose Bite cause your pet's next 2 special attacks to critically hit.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425755/cobra-strikes",
      },
      {
        name: "Heart of the Lion",
        icon: [null, "ability_hunter_pet_cat", "ability_hunter_pet_cat", null],
        gear_slot: [null, CHEST, CHEST, null],
        description: [
          null,
          "Gain the Heart of the Lion ability:<br><br>The hunter invokes the heart of a lion, increasing total stats by 10% for all nearby allies, and increasing total stats for the Hunter by an additional 10%.",
          "Gain the Heart of the Lion ability:<br><br>The hunter invokes the heart of a lion, increasing total stats by 10% for all nearby allies, and increasing total stats for the Hunter by an additional 10%.",
          null,
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409580/heart-of-the-lion",
      },
      {
        name: "Lone Wolf",
        icon: ["ability_mount_whitedirewolf", "ability_mount_whitedirewolf", "ability_mount_whitedirewolf", "ability_mount_whitedirewolf"],
        gear_slot: [CHEST, CHEST, CHEST, CHEST],
        description: [
          "You deal 25% increased damage with all attacks while you do not have an active pet.",
          "You deal 30% increased damage with all attacks while you do not have an active pet.",
          "You deal 30% increased damage with all attacks while you do not have an active pet.",
          "You deal 25% increased damage with all attacks while you do not have an active pet.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409979/lone-wolf",
      },
      {
        name: "Master Marksman",
        icon: ["ability_hunter_mastermarksman", "ability_hunter_mastermarksman", "ability_hunter_mastermarksman", "ability_hunter_mastermarksman"],
        gear_slot: [CHEST, CHEST, CHEST, CHEST],
        description: [
          "Increases your critical strike chance by 5%, and reduces the Mana cost of all your Shot abilities by 25%.",
          "Increases your critical strike chance by 5%, and reduces the Mana cost of all your Shot abilities by 25%.",
          "Increases your critical strike chance by 5%, and reduces the Mana cost of all your Shot abilities by 25%.",
          "Increases your critical strike chance by 5%, and reduces the Mana cost of all your Shot abilities by 25%.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409958/master-marksman",
      },
      {
        name: "Focus Fire",
        icon: [null, null, "inv_weapon_crossbow_19", "inv_weapon_crossbow_19"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Consumes all applications of Frenzy from your pet, increasing your ranged attack speed by 3% and granting 4 Focus to your pet for each application of Frenzy consumed. Lasts 20 sec.<br><br>Your pet gains Frenzy each time it uses a Basic Attack, increasing its melee attack speed by 6% for 10 sec, stacking up to 5 times.",
          "Consumes all applications of Frenzy from your pet, increasing your ranged attack speed by 3% and granting 4 Focus to your pet for each application of Frenzy consumed. Lasts 20 sec.<br><br>Your pet gains Frenzy each time it uses a Basic Attack, increasing its melee attack speed by 6% for 10 sec, stacking up to 5 times.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431600/focus-fire",
      },
      {
        name: "Raptor Fury",
        icon: [null, null, "ability_mount_raptor", "ability_mount_raptor"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Raptor Strike increases damage done by Raptor Strike and Mongoose Bite by 15% for 15 sec, stacking up to 5 times. Subsequent doses do not extend the duration of this effect.",
          "Raptor Strike increases damage done by Raptor Strike and Mongoose Bite by 15% for 30 sec, stacking up to 5 times. Subsequent doses do not extend the duration of this effect.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415822/raptor-fury",
      },
      {
        name: "T.N.T.",
        icon: [null, null, "inv_misc_bomb_05", "inv_misc_bomb_05"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Increases the damage done by Explosive Shot and all your damaging traps by 10%.",
          "Increases the damage done by Explosive Shot and all your damaging traps by 10%. Additionally, the initial damage of Explosive Trap and the total periodic damage of your Immolation Trap are increased by 25% of your melee or ranged Attack Power.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431610/t-n-t",
      },
      {
        name: "Carve",
        icon: ["inv_throwingknife_06", "inv_throwingknife_06", "inv_throwingknife_06", "inv_throwingknife_06"],
        gear_slot: [HANDS, HANDS, HANDS, HANDS],
        description: [
          "Gain the Carve ability:<br><br>A sweeping attack that strikes all enemies in front of you for 50% weapon damage.",
          "Gain the Carve ability:<br><br>A sweeping attack that strikes all enemies in front of you for 50% weapon damage.",
          "Gain the Carve ability:<br><br>A sweeping attack that strikes all enemies in front of you for 65% weapon damage.",
          "Gain the Carve ability:<br><br>A sweeping attack that strikes all enemies in front of you with your melee weapons for 65% weapon damage. Your primary target takes 50% increased damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425754/carve",
      },
      {
        name: "Chimera Shot",
        icon: ["ability_hunter_chimerashot2", "ability_hunter_chimerashot2", "ability_hunter_chimerashot2", "ability_hunter_chimerashot2"],
        gear_slot: [HANDS, HANDS, HANDS, HANDS],
        description: [
          "Gain the Chimera Shot ability:<br><br>You deal 125% weapon damage, refreshing the current Sting on your target and triggering an effect:<br><br>Serpent Sting - Instantly deals 40% of the damage done by your Serpent Sting.<br><br>Viper Sting - Instantly restores mana to you equal to 60% of the total amount drained by your Viper Sting.<br><br>Scorpid Sting - Attempts to Disarm the target for 10 sec. This effect cannot occur more than once per 1 minute.",
          "Gain the Chimera Shot ability:<br><br>You deal 100% weapon damage, refreshing the current Sting on your target and triggering an effect:<br><br>Serpent Sting - Instantly deals 40% of the damage done by your Serpent Sting.<br><br>Viper Sting - Instantly restores mana to you equal to 60% of the total amount drained by your Viper Sting.<br><br>Scorpid Sting - Attempts to Disarm the target for 10 sec. This effect cannot occur more than once per 1 minute.",
          "Gain the Chimera Shot ability:<br><br>You deal 120% weapon damage, refreshing the current Sting on your target and triggering an effect:<br><br>Serpent Sting - Instantly deals 48% of the damage done by your Serpent Sting.<br><br>Viper Sting - Instantly restores mana to you equal to 60% of the total amount drained by your Viper Sting.<br><br>Scorpid Sting - Attempts to Disarm the target for 10 sec. This effect cannot occur more than once per 1 minute.",
          //p3 later - "Gain the Chimera Shot ability:<br><br>You deal 135% weapon damage, refreshing the current Sting on your target and triggering an effect:<br><br>Serpent Sting - Instantly deals 48% of the damage done by your Serpent Sting.<br><br>Viper Sting - Instantly restores mana to you equal to 60% of the total amount drained by your Viper Sting.<br><br>Scorpid Sting - Attempts to Disarm the target for 10 sec. This effect cannot occur more than once per 1 minute.",
          "Gain the Chimera Shot ability:<br><br>You deal 135% weapon damage, refreshing the current Sting on your target and triggering an effect:<br><br>Serpent Sting - Instantly deals 48% of the damage done by your Serpent Sting.<br><br>Viper Sting - Instantly restores mana to you equal to 60% of the total amount drained by your Viper Sting.<br><br>Scorpid Sting - Attempts to Disarm the target for 10 sec. This effect cannot occur more than once per 1 minute.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409976/chimera-shot",
      },
      {
        name: "Cobra Slayer",
        icon: [null, null, null, "spell_nature_guardianward"],
        gear_slot: [null, null, null, HANDS],
        description: [
          null,
          null,
          null,
          "Mongoose Bite now has a 10% chance to activate on each of your melee attacks, a 100% chance when an enemy dodges. This chance accumulates, with the chance rising by 10% from each subsequent attack if it does not reset. Mongoose Bite also deals additional damage equal to 45% of your Attack Power.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409960/cobra-slayer",
      },
      {
        name: "Explosive Shot",
        icon: ["ability_hunter_explosiveshot", "ability_hunter_explosiveshot", "ability_hunter_explosiveshot", "ability_hunter_explosiveshot"],
        gear_slot: [HANDS, HANDS, HANDS, HANDS],
        description: [
          "Gain the Explosive Shot ability:<br><br>You fire an explosive charge into the enemy target, dealing Fire damage. The charge will blast the target every second for an additional 2 sec. Cooldown shared with Arcane Shot.",
          "Gain the Explosive Shot ability:<br><br>You fire an explosive charge into the enemy target, dealing Fire damage to all enemies within 8 yards. The charge will deal damage again every second for an additional 2 sec.",
          "Gain the Explosive Shot ability:<br><br>You fire an explosive charge into the enemy target, dealing Fire damage to all enemies within 8 yards. The charge will deal damage again every second for an additional 2 sec.",
          "Gain the Explosive Shot ability:<br><br>You fire an explosive charge into the enemy target, dealing Fire damage to all enemies within 8 yards. The charge will deal damage again every second for an additional 2 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409978/explosive-shot",
      },
      {
        name: "Aspect of the Viper",
        icon: [null, "ability_hunter_aspectoftheviper", null, null],
        gear_slot: [null, WAIST, null, null],
        description: [
          null,
          "Gain the Aspect of the Viper ability:<br><br>The hunter takes on the aspect of the viper, causing your ranged and melee auto attacks to regenerate mana but reducing your total damage done by 10%. In addition, you gain 10% of maximum mana every 3 sec. Mana gained is based on the speed of your weapon. Only one Aspect can be active at a time.",
          null,
          null,
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415423/aspect-of-the-viper",
      },
      {
        name: "Expose Weakness",
        icon: [null, "ability_warrior_revenge", "ability_rogue_findweakness", "ability_rogue_findweakness"],
        gear_slot: [null, WAIST, WAIST, WAIST],
        description: [
          null,
          "Your melee and ranged criticals increase your attack power by 40% of your current Agility for 7 sec.",
          "Your melee and ranged criticals increase your attack power by 40% of your current Agility for 7 sec.",
          "Your melee and ranged criticals increase your attack power by 40% of your current Agility for 7 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409959/expose-weakness",
      },
      {
        name: "Melee Specialist",
        icon: [null, "inv_axe_03", "inv_axe_03", "inv_axe_03"],
        gear_slot: [null, WAIST, WAIST, WAIST],
        description: [
          null,
          "Raptor Strike cooldown reduced to 3 sec and is now instant, Mongoose Bite cooldown removed, and Raptor Strike has a 30% chance on each attack not to trigger its cooldown.",
          "Raptor Strike cooldown reduced to 3 sec and is now instant, Mongoose Bite cooldown removed, and Raptor Strike has a 30% chance on each attack not to trigger its cooldown.",
          "Your Raptor Strike is now instant, and Mongoose Bite and Raptor Strike have a 40% chance on each attack to reset the cooldowns of Mongoose Bite and Raptor Strike.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415723/melee-specialist",
      },
      {
        name: "Steady Shot",
        icon: [null, "ability_hunter_steadyshot", "ability_hunter_steadyshot", "ability_hunter_steadyshot"],
        gear_slot: [null, WAIST, WAIST, WAIST],
        description: [
          null,
          "A steady shot that causes 60% ranged weapon damage.",
          "A steady shot that causes 75% ranged weapon damage.",
          //p3 later - "A steady shot that causes 100% ranged weapon damage.",
          "A steady shot that causes 100% ranged weapon damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409957/steady-shot",
      },
      {
        name: "Flanking Strike",
        icon: ["ability_hunter_harass", "ability_hunter_harass", "ability_hunter_harass", "ability_hunter_harass"],
        gear_slot: [LEGS, LEGS, LEGS, LEGS],
        description: [
          "Gain the Flanking Strike ability:<br><br>You and your pet deal simultaneous instant 100% melee damage. Afterward, your Mongoose Bite and Raptor Strike deal 10% increased damage for 10 sec, stacking up to 3 times. Raptor Strike has a 20% chance to reset the cooldown on Flanking Strike.",
          "Gain the Flanking Strike ability:<br><br>You and your pet deal simultaneous instant 100% melee damage. Afterward, your Mongoose Bite and Raptor Strike deal 10% increased damage for 10 sec, stacking up to 3 times. Raptor Strike has a 20% chance to reset the cooldown on Flanking Strike.",
          "Gain the Flanking Strike ability:<br><br>You and your pet deal simultaneous instant 100% melee damage. Afterward, your Mongoose Bite and Raptor Strike deal 10% increased damage for 10 sec, stacking up to 3 times. Raptor Strike has a 20% chance to reset the cooldown on Flanking Strike.", //(?)
          "Gain the Flanking Strike ability:<br><br>You and your pet deal simultaneous instant 100% melee damage. Afterward, you deal 8% increased damage for 10 sec, stacking up to 3 times. Your pet's Basic attacks have a 50% chance to reset the cooldown on Flanking Strike.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425757/flanking-strike",
      },
      {
        name: "Kill Command",
        icon: ["ability_hunter_killcommand", "ability_hunter_killcommand", "ability_hunter_killcommand", null],
        gear_slot: [LEGS, LEGS, LEGS, null],
        description: [
          "Gain the Kill Command ability:<br><br>Give the command to kill, increasing your pet's damage done from special attacks by 60% for 30 sec. Each special attack done by the pet reduces the damage bonus by 20%.",
          "Gain the Kill Command ability:<br><br>Give the command to kill, increasing your pet's damage done from Claw and Bite by 60% for 30 sec. Each Claw or Bite done by the pet reduces the damage bonus by 20%.",
          "Gain the Kill Command ability:<br><br>Give the command to kill, increasing your pet's damage done from Claw and Bite by 60% for 30 sec. Each Claw or Bite done by the pet reduces the damage bonus by 20%.", //(?)
          null,
        ],
        /*
        isActive: true,
        range: 45,
        cooldown: 60,
        resourceType: 1,
        isPercentage: true,
        resourceSpent: 3,
        */
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409379/kill-command",
      },
      {
        name: "Kill Shot",
        icon: [null, null, null, "ability_hunter_assassinate2"],
        gear_slot: [null, null, null, LEGS],
        description: [
          null,
          null,
          null,
          "Gain the Kill Shot ability:<br><br>You attempt to finish off a wounded target, firing a ranged attack dealing 100% weapon damage plus 719.126. Kill Shot has no minimum range. Kill Shot's cooldown is reset if used on an enemy that has 20% or less health.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409974/kill-shot",
      },
      {
        name: "Serpent Spread",
        icon: ["ability_hunter_serpentswiftness", "ability_hunter_serpentswiftness", "ability_hunter_serpentswiftness", "ability_hunter_serpentswiftness"],
        gear_slot: [LEGS, LEGS, LEGS, LEGS],
        description: [
          "Targets hit by your Multi-Shot are also afflicted by your Serpent Sting for 6 sec.",
          "Targets hit by your Multi-Shot are also afflicted by your Serpent Sting for 6 sec.",
          //p3 early - "Targets hit by your Multi-Shot are also afflicted by your Serpent Sting for 6 sec.",
          "Targets hit by your Multi-Shot are also afflicted by your Serpent Sting for 12 sec.",
          "Targets hit by your Multi-Shot are also afflicted by your Serpent Sting for 12 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425756/serpent-spread",
      },
      {
        name: "Sniper Training",
        icon: ["ability_hunter_snipershot", "ability_hunter_snipershot", "ability_hunter_longshots", "ability_hunter_longshots"],
        gear_slot: [LEGS, LEGS, LEGS, LEGS],
        description: [
          "Your Shot abilities gain 30% increased critical strike chance while you have not moved for the last 6 sec.",
          "Your Shot abilities gain 10% increased critical strike chance while you have not moved for the last 6 sec.",
          "Your Shot abilities gain 2% increased critical strike chance while you have not moved for the last 2 sec, stacking every sec up to 5 times. While moving, you will lose 1 stack per sec.",
          //p3 later - "Your Shot abilities gain 2% increased critical strike chance while you have not moved for the last 2 sec, stacking every sec up to 5 times. At 5 stacks, your Aimed Shot becomes instant. While moving, you will lose 1 stack per sec.",
          "Your Shot abilities gain 2% increased critical strike chance while you have not moved for the last 2 sec, stacking every sec up to 5 times. At 2 or more stacks, your Aimed Shot becomes instant. While moving, you will lose 1 stack per sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415818/sniper-training",
      },
      {
        name: "Dual Wield Specialization",
        icon: [null, "ability_dualwield", "ability_dualwield", "ability_dualwield"],
        gear_slot: [null, FEET, FEET, FEET],
        description: [
          null,
          "Increases the damage done by your offhand weapon by 50%, causes your Raptor Strike to strike with both weapons when you are dual-wielding, and Raptor Strike deals 30% increased damage when you are wielding two weapons of the same type.",
          "Increases the damage done by your offhand weapon by 50% and causes your Raptor Strike to strike with both weapons when you are dual-wielding.", //(?)
          "Increases the damage done by your offhand weapon by 60% and causes your Raptor Strike to strike with both weapons when you are dual-wielding.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409961/dual-wield-specialization",
      },
      {
        name: "Invigoration",
        icon: [null, "ability_hunter_invigeration", "ability_hunter_invigeration", null],
        gear_slot: [null, FEET, FEET, null],
        description: [
          null,
          "When your pet scores a critical hit with a special ability, you instantly regenerate 5% of your maximum mana.",
          "When your pet scores a critical hit with a special ability, you instantly regenerate 5% of your maximum mana.", //(?)
          null,
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=437997/invigoration",
      },
      {
        name: "Trap Launcher",
        icon: [null, "inv_misc_enggizmos_essencedistiller", "ability_hunter_resourcefulness", "ability_hunter_resourcefulness"],
        gear_slot: [null, FEET, FEET, FEET],
        description: [
          null,
          "Your Traps can now be placed at any location within 40 yards, and can be placed while you are in combat. Additionally, your Fire-based and Frost-based traps now have separate shared cooldowns.",
          "Your Traps can now be placed at any location within 35 yards, and can be placed while you are in combat. Additionally, your Fire-based and Frost-based traps now have separate shared cooldowns.",
          "Your Freezing, Immolation, and Explosive Traps can now be placed at any location within 35 yards. Additionally, your Fire-based and Frost-based traps now have separate shared cooldowns.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409968/trap-launcher",
      },
      {
        name: "Wyvern Strike",
        icon: [null, null, null, "inv_spear_02"],
        gear_slot: [null, null, null, FEET],
        description: [
          null,
          null,
          null,
          "Replaces your Wyvern Sting ability with Wyvern Strike, a vicious strike that deals 140% weapon damage and causes the target to Bleed for damage over time.<br><br>Wyvern Strike requires you to have the Wyvern Sting talent, and replaces the Wyvern Sting abilities found in the Survival spellbook.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415816/wyvern-strike",
      },
      {
        name: "Arcane Specialization",
        icon: [null, null, null, "inv_elemental_primal_mana"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Arcane spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442893/arcane-specialization",
      },
      {
        name: "Axe Specialization",
        icon: [null, null, null, "inv_axe_03"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Axes and Two-Handed Axes increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442876/axe-specialization",
      },
      {
        name: "Dagger Specialization",
        icon: [null, null, null, "inv_weapon_shortblade_05"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Daggers increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442887/dagger-specialization",
      },
      {
        name: "Fire Specialization",
        icon: [null, null, null, "inv_elemental_primal_fire"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Fire spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442894/fire-specialization",
      },
      {
        name: "Fist Weapon Specialization",
        icon: [null, null, null, "inv_misc_desecrated_plategloves"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Fist Weapons (Unarmed) increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442890/fist-weapon-specialization",
      },
      {
        name: "Frost Specialization",
        icon: [null, null, null, "inv_elemental_primal_water"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Frost spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442895/frost-specialization",
      },
      {
        name: "Nature Specialization",
        icon: [null, null, null, "inv_elemental_primal_life"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Nature spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442896/nature-specialization",
      },
      {
        name: "Pole Weapon Specialization",
        icon: [null, null, null, "inv_staff_08"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Staves and Polearms increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442892/pole-weapon-specialization",
      },
      {
        name: "Ranged Weapon Specialization",
        icon: [null, null, null, "inv_weapon_bow_02"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Bows, Guns, Crossbows, and Thrown weapons increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442891/ranged-weapon-specialization",
      },
      {
        name: "Sword Specialization",
        icon: [null, null, null, "ability_meleedamage"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Swords and Two-Handed Swords increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442813/sword-specialization",
      },
    ],
    mage: [
      {
        name: "Advanced Warding",
        icon: [null, null, "spell_arcane_arcaneresilience", "spell_arcane_arcaneresilience"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Increases the magnitude of your Mana Shield, Frost Ward, and Fire Ward by 100%, and decreases mana drained by Mana Shield by 50% per damage done.",
          "Your Mana Shield, Frost Ward, and Fire Ward spells can now be cast on any friendly target and absorb 100% increased damage, with Mana Shield consuming 50% less mana per damage absorbed. Additionally, your Remove Lesser Curse is replaced with Remove Greater Curse.<br><br>Remove Greater Curse<br>Removes 1 Curse and 1 harmful Magic effect from a friendly target.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401726/advanced-warding",
      },
      {
        name: "Deep Freeze",
        icon: [null, null, "ability_mage_deepfreeze", "ability_mage_deepfreeze"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Gain the Deep Freeze ability:<br><br>Stuns the target for 5 sec.  Only usable on Frozen targets.  Deals damage to targets permanently immune to Stun.",
          "Gain the Deep Freeze ability:<br><br>Stuns the target for 5 sec. Only usable on Frozen targets. Deals damage to targets permanently immune to Stun. This damage benefits from, but does not consume, stacks of Glaciate.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=429303/deep-freeze",
      },
      {
        name: "Hot Streak",
        icon: [null, null, null, "ability_mage_hotstreak"],
        gear_slot: [null, null, null, HEAD],
        description: [
          null,
          null,
          null,
          "Any time you score 2 non-periodic spell criticals in a row using Fireball, Frostfire Bolt, Balefire Bolt, Fire Blast, Scorch, or Living Bomb, your next Pyroblast spell cast within 10 sec will be instant cast and cost 100% less mana.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401724/hot-streak",
      },
      {
        name: "Temporal Anomaly",
        icon: [null, null, "spell_arcane_arcane02", "spell_fire_blueflamering"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Gain the Temporal Anomaly ability:<br><br>Launches an orb of temporal energy which slowly moves forward and every 2 sec grants all nearby party members a shield absorbing damage for 15 sec.",
          "Gain the Temporal Anomaly ability:<br><br>Launches an orb of temporal energy which slowly moves forward and every 2 sec grants all nearby party members a shield absorbing damage for 15 sec. This shield accumulates additional value if party members remain near the orb.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=429305/temporal-anomaly",
      },
      {
        name: "Burnout",
        icon: ["ability_mage_burnout", null, null, "ability_mage_burnout"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Increases your spell critical strike chance with all spells by 15%, but your non-periodic spell critical strikes now have an additional mana cost of 1% of your base mana.",
          null,
          null,
          "Increases your spell critical strike chance with all spells by 15%, but your non-periodic spell critical strikes now have an additional mana cost of 1% of your base mana.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415460/burnout",
      },
      {
        name: "Enlightenment",
        icon: ["spell_arcane_mindmastery", null, null, "spell_arcane_mindmastery"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "You deal 10% more damage while you have more than 70% mana. While below 30% mana 10% of your mana regeneration continues while casting.",
          null,
          null,
          "You deal 10% more damage while you have more than 70% mana. While below 30% mana 10% of your mana regeneration continues while casting.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415729/enlightenment",
      },
      {
        name: "Fingers of Frost",
        icon: ["ability_mage_wintersgrasp", null, null, "ability_mage_wintersgrasp"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next 2 spells cast as if the target were Frozen.  Lasts 15 sec.",
          null,
          null,
          "Gives your Chill effects a 25% chance to grant you the Fingers of Frost effect, which treats your next 2 spells cast as if the target were Frozen. Lasts 15 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401741/fingers-of-frost",
      },
      {
        name: "Regeneration",
        icon: ["inv_enchant_essencenethersmall", null, null, "inv_enchant_essencemysticalsmall"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Heals the target's health over 3 sec and applies Temporal Beacon for 30 sec.<br><br>Temporal Beacon<br>Records the subject's space-time position. 100% of all Arcane damage done by the caster will be converted to chronomantic healing and divided among the caster's current Temporal Beacon targets.",
          null,
          null,
          "Heals the target's health over 3 sec and applies Temporal Beacon for 30 sec.<br><br>Temporal Beacon<br>Records the subject's space-time position. 70% of all Arcane damage done by the caster will be converted to chronomantic healing on each of the caster's current Temporal Beacon targets. This healing is reduced by 50% on self, and also reduced by 80% when damage is done by Arcane spells that damage multiple targets.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401417/regeneration",
      },
      {
        name: "Balefire Bolt",
        icon: [null, null, "classic_spell_fire_elementaldevastation", "spell_fire_firebolt"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Gain the Balefire Bolt ability:<br><br>Unleash a reality-distorting burst of raw magic at your enemy, dealing Spellfire damage.  Each time you cast Balefire Bolt, the damage of your next Balefire Bolt within 30 sec will be increased by 10% and your Spirit will be decreased by 10% for 30 sec, both stacking up to 10 times. If your Spirit reaches 0 as consequence, you will immediately die. This spell will be checked against the lower of the target's Arcane and Fire resists.",
          "Gain the Balefire Bolt ability:<br><br>Unleash a reality-distorting burst of raw magic at your enemy, dealing Chimeric damage.<br><br>Increasing your Balefire Bolt and Pyroblast damage by 25%, decreasing your Spirit by 20%, and stacking up to 5 times for 30 sec. If your Spirit reaches 0, you die.<br><br>This spell will be checked against the lower of the target's Arcane, Fire, and Frost resists.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=429310/balefire-bolt",
      },
      {
        name: "Displacement",
        icon: [null, null, "ability_hunter_displacement", "ability_hunter_displacement"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Gain the Displacement ability:<br><br>Teleports back to where you last cast Blink from and resets the cooldown on Blink. Only usable within 10 sec of casting Blink.",
          "Gain the Displacement ability:<br><br>Teleports back to where you last cast Blink from and resets the cooldown on Blink. Only usable within 10 sec of casting Blink.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=428863/displacement",
      },
      {
        name: "Molten Armor",
        icon: [null, null, "ability_mage_moltenarmor", "ability_mage_moltenarmor"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Gain the Molten Armor ability:<br><br>Causes Fire damage when hit, increases your spell critical strike chance by 5%, and reduces the chance you are critically hit by 5%.  Only one type of Armor spell can be active on the Mage at any time.  Lasts 30 min.",
          "Gain the Molten Armor ability:<br><br>Causes Fire damage when hit, increases your spell critical strike chance by 5%, and reduces the chance you are critically hit by 5%. Only one type of Armor spell can be active on the Mage at any time. Lasts 30 min.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=429307/molten-armor",
      },
      {
        name: "Rewind Time",
        icon: ["spell_holy_borrowedtime", null, null, "spell_holy_borrowedtime"],
        gear_slot: [HANDS, null, null, WRIST],
        description: [
          "Gain the Rewind Time ability:<br><br>Your current target with your Temporal Beacon instantly heals all damage taken over the last 5 seconds. Ineffective on targets that did not have a Temporal Beacon 5 seconds ago.",
          null,
          null,
          "Gain the Rewind Time ability:<br><br>Your current target with your Temporal Beacon instantly heals all damage taken over the last 5 seconds. Ineffective on targets that did not have a Temporal Beacon 5 seconds ago.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401734/rewind-time",
      },
      {
        name: "Arcane Blast",
        icon: ["spell_arcane_blast", null, null, "spell_arcane_blast"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Arcane Blast ability:<br><br>Blasts the target with energy, dealing Arcane damage.  Each time you cast Arcane Blast, the damage and healing of all other Arcane spells is increased by 15% and mana cost of Arcane Blast is increased by 175%.  Effect stacks up to 4 times and lasts 6 sec or until any other Arcane damage or healing spell is cast.",
          null,
          null,
          "Gain the Arcane Blast ability:<br><br>Blasts the target with energy, dealing Arcane damage. Each time you cast Arcane Blast, the damage of all other Arcane spells is increased by 15% and mana cost of Arcane Blast is increased by 175%. Effect stacks up to 4 times and lasts 6 sec or until any other Arcane damage spell is cast.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401729/arcane-blast",
      },
      {
        name: "Ice Lance",
        icon: ["spell_frost_frostblast", null, null, "spell_frost_frostblast"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Ice Lance ability:<br><br>Deals Frost damage to an enemy target.  Causes triple damage against Frozen targets.",
          null,
          null,
          "Gain the Ice Lance ability:<br><br>Deals Frost damage to an enemy target. Causes 400% damage against Frozen targets.<br><br>When your other frost spells deal damage to a non-player controlled target, they increase the target's damage taken from your next Ice Lance by 20%. This effect stacks up to 5 times and requires the Winter's Chill talent.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401732/ice-lance",
      },
      {
        name: "Living Bomb",
        icon: ["ability_mage_livingbomb", null, null, "ability_mage_livingbomb"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Living Bomb ability:<br><br>The target becomes a Living Bomb, taking Fire damage over 12 sec.  After 12 sec or when the spell is dispelled, the target explodes dealing Fire damage to all enemies within 10 yards.",
          null,
          null,
          "Gain the Living Bomb ability:<br><br>The target becomes a Living Bomb, taking Fire damage over 12 sec. After 12 sec or when the spell is dispelled, the target explodes dealing Fire damage to all enemies within 10 yards.<br><br>Living Bomb benefits from all talents and effects that trigger from or modify Scorch.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401731/living-bomb",
      },
      {
        name: "Frostfire Bolt",
        icon: [null, null, null, "ability_mage_frostfirebolt"],
        gear_slot: [null, null, null, WAIST],
        description: [
          null,
          null,
          null,
          "Gain the Frostfire Bolt ability:<br><br>Launches a bolt of frostfire at the enemy, causing Frostfire damage, slowing movement speed by 40% and causing additional Frostfire damage over 9 sec. This spell will be checked against the lower of the target's Frost and Fire resists and counts as both Frost and Fire damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401735/frostfire-bolt",
      },
      {
        name: "Missile Barrage",
        icon: [null, null, null, "ability_mage_missilebarrage"],
        gear_slot: [null, null, null, WAIST],
        description: [
          null,
          null,
          null,
          "Gives your Arcane Blast a 40% chance, and your Fireball and Frostbolt spells a 20% chance to reduce the channeled duration of your next Arcane Missiles spell by 50%, reduce the mana cost by 100%, and missiles will fire every 0.5 secs.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401736/missile-barrage",
      },
      {
        name: "Spellfrost Bolt",
        icon: [null, null, null, "spell_fire_blueflamebolt"],
        gear_slot: [null, null, null, WAIST],
        description: [
          null,
          null,
          null,
          "Gain the Spellfrost Bolt ability:<br><br>Launches a bolt of spellfrost at the enemy, causing Spellfrost damage and slowing movement speed by 40% for 9 sec. This spell will be checked against the lower of the target's Frost and Arcane resists and counts as both Frost and Arcane damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415734/spellfrost-bolt",
      },
      {
        name: "Arcane Surge",
        icon: ["spell_arcane_arcanetorrent", null, null, "spell_arcane_arcanetorrent"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Arcane Surge ability:<br><br>Unleash all of your remaining mana in a surge of energy focused at the target dealing Arcane damage, increased by up to 300% based on your mana remaining. Afterward, your normal mana regeneration is activated and increased by 300% for 8 sec.",
          null,
          null,
          "Gain the Arcane Surge ability:<br><br>Unleash all of your remaining mana in a surge of energy focused at the target dealing Arcane damage, increased by up to 300% based on your mana remaining. Afterward, your normal mana regeneration is activated and increased by 300% for 8 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425168/arcane-surge",
      },
      {
        name: "Icy Veins",
        icon: ["spell_frost_coldhearted", null, null, "spell_frost_coldhearted"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Icy Veins ability:<br><br>Hastens your spellcasting, increasing spell casting speed by 20% and reduces the pushback suffered from damaging attacks while casting by 100%. Lasts 20 sec.",
          null,
          null,
          "Gain the Icy Veins ability:<br><br>Hastens your spellcasting, increasing spell casting speed by 20% and reduces the pushback suffered from damaging attacks while casting by 100%. Lasts 20 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425169/icy-veins",
      },
      {
        name: "Living Flame",
        icon: ["spell_fire_masterofelements", null, null, "spell_fire_masterofelements"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Living Flame ability:<br><br>Summons a spellfire flame that moves toward the target, leaving a trail of spellfire. This trail deals Spellfire damage every second to nearby enemies. Lasts 20 sec.",
          null,
          null,
          "Gain the Living Flame ability:<br><br>Summons a spellfire flame that moves toward the target, leaving a trail of spellfire. This trail deals Spellfire damage every second to nearby enemies. Lasts 10 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401744/living-flame",
      },
      {
        name: "Mass Regeneration",
        icon: ["inv_enchant_essencenetherlarge", null, null, "inv_enchant_essencemysticallarge"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Heals all of target player's party members within 15 yards of target player's health over 3 sec and applies Temporal Beacon to each target for 15 sec.<br><br>Temporal Beacon<br>Records the subject's space-time position. 100% of all Arcane damage done by the caster will be converted to chronomantic healing and divided among the caster's current Temporal Beacon targets.",
          null,
          null,
          "Heals all of target player's party members within 43.5 yards of target player's health over 3 sec and applies Temporal Beacon to each target for 15 sec.<br><br>Temporal Beacon<br>Records the subject's space-time position. 70% of all Arcane damage done by the caster will be converted to chronomantic healing on each of the caster's current Temporal Beacon targets. This healing is reduced by 50% on self, and also reduced by 80% when damage is done by Arcane spells that damage multiple targets.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=412510/mass-regeneration",
      },
      {
        name: "Brain Freeze",
        icon: [null, null, null, "ability_mage_brainfreeze"],
        gear_slot: [null, null, null, FEET],
        description: [
          null,
          null,
          null,
          "Your Frost damage spells with chilling effects have a 20% chance to cause your next Fireball, Spellfrost Bolt, Balefire Bolt, or Frostfire Bolt spell to be instant cast and cost no mana.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401725/brain-freeze",
      },
      {
        name: "Spell Power",
        icon: [null, null, null, "spell_holy_mindvision"],
        gear_slot: [null, null, null, FEET],
        description: [
          null,
          null,
          null,
          "Increases critical strike damage bonus of all spells by 50%.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415459/spell-power",
      },
      {
        name: "Arcane Specialization",
        icon: [null, null, null, "inv_elemental_primal_mana"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Arcane spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442893/arcane-specialization",
      },
      {
        name: "Dagger Specialization",
        icon: [null, null, null, "inv_weapon_shortblade_05"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Daggers increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442887/dagger-specialization",
      },
      {
        name: "Fire Specialization",
        icon: [null, null, null, "inv_elemental_primal_fire"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Fire spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442894/fire-specialization",
      },
      {
        name: "Frost Specialization",
        icon: [null, null, null, "inv_elemental_primal_water"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Frost spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442895/frost-specialization",
      },
      {
        name: "Healing Specialization",
        icon: [null, null, null, "spell_holy_greaterheal"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Increases healing done by spells and effects by up to 26. This effect is not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=468758/healing-specialization",
      },
      {
        name: "Meditation Specialization",
        icon: [null, null, null, "spell_holy_greaterheal"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Restores 5 mana per 5 sec. This effect is not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=468762/meditation-specialization",
      },
      {
        name: "Pole Weapon Specialization",
        icon: [null, null, null, "inv_staff_08"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Staves and Polearms increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442892/pole-weapon-specialization",
      },
      {
        name: "Sword Specialization",
        icon: [null, null, null, "ability_meleedamage"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Swords and Two-Handed Swords increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442813/sword-specialization",
      },
    ],
    paladin: [
      {
        name: "Aegis",
        icon: ["inv_shield_48", null, null, "inv_shield_48"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Increases your block value by 30% and damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 30%.  Lasts 10 sec or 5 blocks. Effect not cumulative with Redoubt.",
          null,
          null,
          "Increases your block value by 30% and modifies your Redoubt talent. Redoubt now also has a 10% chance to trigger from any melee or ranged attack against you, and always triggers when you deal a melee critical strike. In addition, your Reckoning talent gains a 2% chance per talent point to trigger from any melee or ranged attack against you.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425589/aegis",
      },
      {
        name: "Divine Storm",
        icon: ["ability_paladin_divinestorm", null, null, "ability_paladin_divinestorm"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Gain the Divine Storm ability:<br><br>An instant weapon attack that causes 110% of weapon damage to up to 4 enemies within 8 yards.  The Divine Storm heals up to 3 party or raid members totaling 25% of the damage caused.",
          null,
          null,
          "Gain the Divine Storm ability:<br><br>An instant weapon attack that causes 110% of weapon damage to up to 4 enemies within 8 yards.  The Divine Storm heals up to 3 party or raid members totaling 25% of the damage caused.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=407778/divine-storm",
      },
      {
        name: "Hallowed Ground",
        icon: [null, null, null, "spell_holy_crusade"],
        gear_slot: [null, null, null, CHEST],
        description: [
          null,
          null,
          null,
          "Your Consecration now also heals party members within its area for 200% of Consecration's damage value.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425614/hallowed-ground",
      },
      {
        name: "Horn of Lordaeron",
        icon: ["inv_misc_horn_03", null, null, "inv_misc_horn_03"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Gain the Horn of Lordaeron ability:<br><br>The Paladin blows the Horn of Lordaeron, which increases total Strength and Agility of all party members within 30 yards by 6. Lasts 2 min. Exclusive with Blessing of Might.",
          null,
          null,
          "Gain the Horn of Lordaeron ability:<br><br>The Paladin blows the Horn of Lordaeron, which increases total Strength and Agility of all party members within 30 yards by 6. Lasts 2 min. Exclusive with Blessing of Might.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425600/horn-of-lordaeron",
      },
      {
        name: "Seal of Martyrdom",
        icon: ["spell_holy_sealofblood", null, null, "spell_holy_sealofblood"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Gain the Seal of Martyrdom ability:<br><br>Fills you with holy spirit for 30 sec, causing each of your melee attacks to deal 30% weapon damage to up to 3 nearby targets, but you lose health equal to 2% of the damage inflicted. While this seal is active, your party members within 40 yards each gain mana equal to 2% of all damage you take. Unleashing this Seal's energy will judge an enemy, instantly causing 70% weapon damage at the cost of health equal to 2% of the damage inflicted.",
          null,
          null,
          "Gain the Seal of Martyrdom ability:<br><br>Fills you with holy spirit for 30 sec, causing each of your melee attacks to deal 50% weapon damage to your target, but you lose health equal to 10% of the damage inflicted. While this seal is active, your party and raid members within 40 yards each gain mana equal to 65% of damage you take from this seal.<br><br>Unleashing this Seal's energy will judge an enemy, instantly causing 85% weapon damage at the cost of health equal to 10% of the damage inflicted.<br><br>This ability's Seal and Judgement benefit from talents and effects that modify the Seal or Judgement of Seal of Righteousness.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=407798/seal-of-martyrdom",
      },
      {
        name: "Beacon of Light",
        icon: ["ability_paladin_beaconoflight", null, null, "ability_paladin_beaconoflight"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Beacon of Light ability:<br><br>The target becomes a Beacon of Light to all members of your party or raid within a 60 yard radius.  Any heals you cast on party or raid members will also heal the Beacon for 100% of the amount healed.  Only one target can be the Beacon of Light at a time. Lasts 1 min.",
          null,
          null,
          "Gain the Beacon of Light ability:<br><br>The target becomes a Beacon of Light to all members of your party or raid within a 40 yard radius.  Any heals you cast on party or raid members will also heal the Beacon for 75% of the amount healed.  Only one target can be the Beacon of Light at a time. Lasts 1 hour.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=407613/beacon-of-light",
      },
      {
        name: "Crusader Strike",
        icon: ["spell_holy_crusaderstrike", null, null, "spell_holy_crusaderstrike"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Crusader Strike ability:<br><br>An instant strike that causes 75% weapon damage and regenerates 2% of your maximum mana.",
          null,
          null,
          "Gain the Crusader Strike ability:<br><br>An instant strike that causes 75% weapon damage as Holy and regenerates 5% of your maximum mana. The duration of all Judgement effects on the target is refreshed to 30 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=407676/crusader-strike",
      },
      {
        name: "Hand of Reckoning",
        icon: ["spell_holy_unyieldingfaith", null, null, "spell_holy_unyieldingfaith"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Hand of Reckoning ability:<br><br>Taunts the target to attack you, but has no effect if the target is already attacking you. While you know this ability, the threat bonus from Righteous Fury is increased to 80% and Righteous Fury causes you gain mana when healed by others equal to 25% of the amount healed. Additionally, while Righteous Fury is active, damage which takes you below 35% health is reduced by 20%. Righteous Fury will remain active until cancelled.",
          null,
          null,
          "Gain the Hand of Reckoning ability:<br><br>Taunts the target to attack you, but has no effect if the target is already attacking you.<br><br>While you know this ability, the threat bonus from Righteous Fury is increased to 80% and Righteous Fury causes you to gain mana when healed by others equal to 25% of the amount healed. Additionally, while Righteous Fury is active, damage which takes you below 35% health is reduced by 20%. Righteous Fury will remain active until cancelled.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=407631/hand-of-reckoning",
      },
      {
        name: "Aura Mastery",
        icon: [null, null, null, "spell_holy_auramastery"],
        gear_slot: [null, null, null, LEGS],
        description: [
          null,
          null,
          null,
          "Causes your Concentration Aura to make all affected targets immune to Silence and Interrupt effects and improves the effect of all other auras by 100%.  Lasts 6 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415756/aura-mastery",
      },
      {
        name: "Avenger's Shield",
        icon: ["spell_holy_avengersshield", null, null, "spell_holy_avengersshield"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Avenger's Shield ability:<br><br>Hurls a holy shield at the enemy, dealing Holy damage, dazing them and then jumping to additional nearby enemies. Affects 3 total targets. Lasts 10 sec.",
          null,
          null,
          "Gain the Avenger's Shield ability:<br><br>Hurls a holy shield at the enemy, dealing Holy damage, dazing them and then jumping to additional nearby enemies. Affects 3 total targets. Lasts 5 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=407669/avengers-shield",
      },
      {
        name: "Divine Sacrifice",
        icon: ["spell_holy_powerwordbarrier", null, null, "spell_holy_powerwordbarrier"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Divine Sacrifice ability:<br><br>30% of all damage taken by party members within 30 yards is redirected to the Paladin for 10 sec. Damage which reduces the Paladin below 20% health will break the effect and grant the paladin 10% increased damage and healing done for 10 sec.",
          null,
          null,
          "Gain the Divine Sacrifice ability:<br><br>30% of all damage taken by party members within 30 yards is redirected to the Paladin for 10 sec. Damage which reduces the Paladin below 20% health will break the effect and grant the paladin 10% increased damage and healing done for 10 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=407804/divine-sacrifice",
      },
      {
        name: "Exorcist",
        icon: ["spell_holy_retribution", null, null, "spell_holy_retribution"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Exorcism can now be cast on any target and has 100% increased critical strike chance against Undead and Demons.",
          null,
          null,
          "Exorcism can now be cast on any target and has 100% increased critical strike chance against Undead and Demons.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415076/exorcist",
      },
      {
        name: "Hand of Sacrifice",
        icon: [null, null, null, "spell_holy_sealofsacrifice"],
        gear_slot: [null, null, null, LEGS],
        description: [
          null,
          null,
          null,
          "Gain the Hand of Sacrifice ability:<br><br>Causes target party or raid member to transfer 30% of damage taken to the caster. Lasts 12 sec or until the caster has transferred 100% of their maximum health.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409935/hand-of-sacrifice",
      },
      {
        name: "Inspiration Exemplar",
        icon: ["spell_holy_power", null, null, "spell_holy_power"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Your inspiring presence periodically dispels Fear and Sleep effects on nearby party members.",
          null,
          null,
          "Your inspiring presence periodically dispels Fear and Sleep effects on nearby party members.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=407880/inspiration-exemplar",
      },
      {
        name: "Rebuke",
        icon: ["inv_relics_totemofrage", null, null, "inv_relics_totemofrage"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Rebuke ability:<br><br>Interrupts spellcasting and prevents any spell in that school from being cast for 2 sec.",
          null,
          null,
          "Gain the Rebuke ability:<br><br>Interrupts spellcasting and prevents any spell in that school from being cast for 3 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425609/rebuke",
      },
      {
        name: "Axe Specialization",
        icon: [null, null, null, "inv_axe_03"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Axes and Two-Handed Axes increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442876/axe-specialization",
      },
      {
        name: "Defense Specialization",
        icon: [null, null, null, "inv_shield_06"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Defense skill increased by 25. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=459312/defense-specialization",
      },
      {
        name: "Healing Specialization",
        icon: [null, null, null, "spell_holy_greaterheal"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Increases healing done by spells and effects by up to 26. This effect is not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=468758/healing-specialization",
      },
      {
        name: "Holy Specialization",
        icon: [null, null, null, "spell_holy_aspiration"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Holy spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442898/holy-specialization",
      },
      {
        name: "Mace Specialization",
        icon: [null, null, null, "inv_hammer_01"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Maces and Two-Handed Maces increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442881/mace-specialization",
      },
      {
        name: "Meditation Specialization",
        icon: [null, null, null, "spell_holy_greaterheal"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Restores 5 mana per 5 sec. This effect is not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=468762/meditation-specialization",
      },
      {
        name: "Pole Weapon Specialization",
        icon: [null, null, null, "inv_staff_08"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Staves and Polearms increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442892/pole-weapon-specialization",
      },
      {
        name: "Sword Specialization",
        icon: [null, null, null, "ability_meleedamage"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Swords and Two-Handed Swords increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442813/sword-specialization",
      },
    ],
    priest: [
      {
        name: "Divine Aegis",
        icon: [null, null, "spell_holy_devineaegis", "spell_holy_devineaegis"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Critical heals create a protective shield on the target, absorbing 30% of the amount healed. Lasts 12 sec.",
          "Critical heals create a protective shield on the target, absorbing 30% of the amount healed. Lasts 12 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431622/divine-aegis",
      },
      {
        name: "Eye of the Void",
        icon: [null, null, "inv_misc_eye_03", "inv_misc_eye_03"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Gain the Eye of the Void ability:<br><br>Call an eye of the void to fight for you for 30 sec. The eye can cast a variety of curses on your target.",
          "Gain the Eye of the Void ability:<br><br>Call an eye of the void to fight for you for 30 sec. The eye can cast a variety of curses on your target.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=402789/eye-of-the-void",
      },
      {
        name: "Pain and Suffering",
        icon: [null, null, "spell_shadow_painandsuffering", "spell_shadow_painandsuffering"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Mind Flay refreshes the duration of your Shadow Word: Pain on the target back to its maximum duration.",
          "Mind Blast, Mind Spike, and Mind Flay refresh the duration of your one of your Shadow Word: Pain, Void Plague, or Vampiric Touch abilities on the target back to its maximum duration. The ability with the shortest remaining duration will always be the one refreshed.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=413251/pain-and-suffering",
      },
      {
        name: "Binding Heal",
        icon: [null, null, null, "spell_holy_blindingheal"],
        gear_slot: [null, null, null, BACK],
        description: [
          null,
          null,
          null,
          "Gain the Binding Heal ability:<br><br>Heals a friendly target and the caster. Low threat. This spell benefits from and triggers all effects associated with Flash Heal.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=402837/binding-heal",
      },
      {
        name: "Soul Warding",
        icon: [null, null, null, "spell_holy_pureofheart"],
        gear_slot: [null, null, null, BACK],
        description: [
          null,
          null,
          null,
          "Your Power Word: Shield no longer has a cooldown, costs 15% less mana,  gains 10% additional base value, and gains an additional 10% of your healing power.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=402834/soul-warding",
      },
      {
        name: "Vampiric Touch",
        icon: [null, null, null, "spell_holy_stoicism"],
        gear_slot: [null, null, null, BACK],
        description: [
          null,
          null,
          null,
          "Gain the Vampiric Touch ability:<br><br>Applies your Vampiric Embrace talent to your target, causes Shadow damage over 15 sec to your target, and causes all party members to gain mana equal to 2% of any Shadow spell damage you deal to the target.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=402841/vampiric-touch",
      },
      {
        name: "Serendipity",
        icon: ["spell_holy_serendipity", null, null, "spell_holy_serendipity"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Healing with Flash Heal reduces the cast time of your next Lesser Heal, Heal, Greater Heal, or Prayer of Healing by 20% for 20 sec, stacking up to 3 times.",
          null,
          null,
          "Healing with Flash Heal reduces the cast time of your next Lesser Heal, Heal, Greater Heal, or Prayer of Healing by 20% for 20 sec, stacking up to 3 times.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=413248/serendipity",
      },
      {
        name: "Strength of Soul",
        icon: ["spell_holy_greaterblessingofsanctuary", null, null, "spell_holy_greaterblessingofsanctuary"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Lesser Heal, Heal, Greater Heal, and Flash Heal reduce the remaining duration of Weakened Soul on targets they heal by 4 sec.",
          null,
          null,
          "Lesser Heal, Heal, Greater Heal, and Flash Heal reduce the remaining duration of Weakened Soul on targets they heal by 2 sec. In addition, targets of your Power Word: Shield will gain Rage from taking damage despite the damage being absorbed, and Righteous Fury will trigger from damage absorbed by your Power Word: Shield as if it were a heal.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415739/strength-of-soul",
      },
      {
        name: "Twisted Faith",
        icon: ["spell_shadow_mindtwisting", null, null, "spell_shadow_mindtwisting"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Mind Flay and Mind Blast deal 20% increased damage to targets afflicted with your Shadow Word: Pain.",
          null,
          null,
          "Mind Flay and Mind Blast deal 50% increased damage to targets afflicted with your Shadow Word: Pain.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425198/twisted-faith",
      },
      {
        name: "Void Plague",
        icon: ["spell_deathknight_bloodplague", null, null, "spell_deathknight_bloodplague"],
        gear_slot: [CHEST, null, null, FEET],
        description: [
          "Gain the Void Plague ability:<br><br>Afflicts the target with a disease that causes Shadow damage over 18 sec.",
          null,
          null,
          "Gain the Void Plague ability:<br><br>Afflicts the target with a disease that causes Shadow damage over 18 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425204/void-plague",
      },
      {
        name: "Despair",
        icon: [null, null, "spell_misc_emotionsad", "spell_misc_emotionsad"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Periodic damage from your spells can now be critical strikes.",
          "Periodic damage from your spells can now be critical strikes and all your damaging spell critical strikes deal 200% damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431670/despair",
      },
      {
        name: "Surge of Light",
        icon: [null, null, "spell_holy_surgeoflight", "spell_holy_surgeoflight"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Critical spellcasts cause your next Smite or Flash Heal cast within 15 sec to be instant cast.",
          "Critical spellcasts cause your next Smite or Flash Heal cast within 15 sec to be instant cast.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431664/surge-of-light",
      },
      {
        name: "Void Zone",
        icon: [null, null, "ability_rogue_envelopingshadows", "inv_enchant_voidsphere"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Gain the Void Zone ability:<br><br>Summons a void zone in the target area that deals Shadow damage to enemies that stand within it every second for 10 sec.",
          "Gain the Void Zone ability:<br><br>Summons a void zone in the target area that deals Shadow damage to enemies that stand within it every second for 10 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431681/void-zone",
      },
      {
        name: "Circle of Healing",
        icon: ["spell_holy_circleofrenewal", null, null, "spell_holy_circleofrenewal"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Circle of Healing ability:<br><br>Heals all of target player's party members within 15 yards of target player.",
          null,
          null,
          "Gain the Circle of Healing ability:<br><br>Heals all of target player's party members within 43.5 yards of target player for 875.199 to 969.451.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401946/circle-of-healing",
      },
      {
        name: "Mind Sear",
        icon: ["spell_shadow_mindshear", null, null, "spell_shadow_mindshear"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Mind Sear ability:<br><br>Causes an explosion of shadow magic around the enemy target, causing Shadow damage every 1 sec for 5 sec to all enemies within 10 yards around the target.",
          null,
          null,
          "Gain the Mind Sear ability:<br><br>Causes an explosion of shadow magic damaging the enemy target and other nearby enemies, causing Shadow damage every 1 sec for 6 sec to all enemies within 10 yards of the target.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=413259/mind-sear",
      },
      {
        name: "Penance",
        icon: ["spell_holy_penance", null, null, "spell_holy_penance"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Penance ability:<br><br>Launches a volley of holy light at the target, causing Holy damage to an enemy, or healing to an ally, instantly and every 1 sec for 2 sec.",
          null,
          null,
          "Gain the Penance ability:<br><br>Launches a volley of holy light at the target, causing Holy damage to an enemy, or healing to an ally, instantly and every 1 sec for 2 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=402174/penance",
      },
      {
        name: "Shadow Word: Death",
        icon: ["spell_shadow_demonicfortitude", null, null, "spell_shadow_demonicfortitude"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Shadow Word: Death ability:<br><br>A word of dark binding that inflicts Shadow damage to the target.  If the target is not killed by Shadow Word: Death, the caster takes damage equal to the damage inflicted upon the target.",
          null,
          null,
          "Gain the Shadow Word: Death ability:<br><br>A word of dark binding that inflicts Shadow damage to the target.  If the target is not killed by Shadow Word: Death, the caster takes damage equal to 50% of the damage attempted against the target.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401955/shadow-word-death",
      },
      {
        name: "Empowered Renew",
        icon: [null, "ability_paladin_infusionoflight", null, "ability_paladin_infusionoflight"],
        gear_slot: [null, WAIST, null, WAIST],
        description: [
          null,
          "Your Renew now heals one extra time immediately when applied, and gains 15% increased benefit each time it heals from your bonus healing effects.",
          null,
          "Your Renew now heals one extra time immediately when applied, and gains 15% increased benefit each time it heals from your bonus healing effects.<br><br>In addition, your Renew can now be active on targets affected by another Priest's Renew.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425266/empowered-renew",
      },
      {
        name: "Mind Spike",
        icon: [null, "spell_shadow_painspike", null, "spell_shadow_painspike"],
        gear_slot: [null, WAIST, null, WAIST],
        description: [
          null,
          "Gain the Mind Spike ability:<br><br>Blasts the target for Shadowfrost damage, and increases the critical strike chance of your next Mind Blast on the target by 30%, stacking up to 3 times.",
          null,
          "Gain the Mind Spike ability:<br><br>Blasts the target for Shadowfrost damage, and increases the critical strike chance of your next Mind Blast on the target by 30%, stacking up to 3 times.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431655/mind-spike",
      },
      {
        name: "Renewed Hope",
        icon: [null, "spell_holy_holyprotection", null, "spell_holy_holyprotection"],
        gear_slot: [null, WAIST, null, WAIST],
        description: [
          null,
          "Your heals from Flash Heal, Lesser Heal, Heal, Greater Heal, and Penance have 10% increased critical effect chance when cast on targets with Weakened Soul.",
          null,
          "Your heals from Flash Heal, Lesser Heal, Heal, Greater Heal, and Penance have 20% increased effect when cast on targets with Weakened Soul.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425280/renewed-hope",
      },
      {
        name: "Homunculi",
        icon: ["spell_shadow_twistedfaith", null, null, "spell_shadow_twistedfaith"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Homunculi ability:<br><br>Break off splinters of your soul to animate 3 miniature copies of yourself that attempt to attack your current target with a mace, sword, and axe, reducing the attack speed, attack power, and armor respectively of any target they hit.",
          null,
          null,
          "Gain the Homunculi ability:<br><br>Break off splinters of your soul to animate 3 miniature copies of yourself that attempt to attack your current target with a mace, sword, and axe, reducing the attack speed, attack power, and armor respectively of any target they hit.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=402799/homunculi",
      },
      {
        name: "Power Word: Barrier",
        icon: ["spell_holy_powerwordbarrier", null, null, "spell_holy_powerwordbarrier"],
        gear_slot: [LEGS, null, null, WRIST],
        description: [
          "Gain the Power Word: Barrier ability:<br><br>Summons a holy barrier to protect all party members at the target location for 10 sec, reducing all damage taken by 25% and preventing damage from delaying spellcasting.",
          null,
          null,
          "Gain the Power Word: Barrier ability:<br><br>Summons a holy barrier to protect all party members at the target location for 10 sec, reducing all damage taken by 25% and preventing damage from delaying spellcasting.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425207/power-word-barrier",
      },
      {
        name: "Prayer of Mending",
        icon: ["spell_holy_prayerofmendingtga", null, null, "spell_holy_prayerofmendingtga"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Prayer of Mending ability:<br><br>Places a spell on the target that heals them for (* 93 / 100) the next time they take damage or receive healing.  When the heal occurs, Prayer of Mending jumps to a party or raid member within 20 yards.  Jumps up to 5 times and lasts 30 sec after each jump.  This spell can only be placed on one target at a time.",
          null,
          null,
          "Gain the Prayer of Mending ability:<br><br>Places a spell on the target that heals them for 498.19 the next time they take damage or receive healing.  When the heal occurs, Prayer of Mending jumps to a party or raid member within 20 yards.  Jumps up to 5 times and lasts 30 sec after each jump.  This spell can only be placed on one target at a time.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401859/prayer-of-mending",
      },
      {
        name: "Shared Pain",
        icon: ["spell_shadow_gathershadows", null, null, "spell_shadow_gathershadows"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Your Shadow Word: Pain now also afflicts up to 2 additional nearby targets within 15 yards.",
          null,
          null,
          "Your Shadow Word: Pain now also afflicts up to 2 additional nearby targets within 15 yards.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401969/shared-pain",
      },
      {
        name: "Dispersion",
        icon: [null, "spell_shadow_dispersion", null, "spell_shadow_dispersion"],
        gear_slot: [null, FEET, null, FEET],
        description: [
          null,
          "Gain the Dispersion ability:<br><br>You disperse into pure Shadow energy, reducing all damage taken by 90%.  You are unable to attack or cast spells, but you regenerate 6% mana every 1 sec for 6 sec. Dispersion can be cast while stunned, feared or silenced and clears all snare and movement impairing effects when cast, and makes you immune to them while dispersed.",
          null,
          "Gain the Dispersion ability:<br><br>You disperse into pure Shadow energy, reducing all damage taken by 90%.  You are unable to attack or cast spells, but you regenerate 6% mana every 1 sec for 6 sec. Dispersion can be cast while stunned, feared or silenced and clears all snare and movement impairing effects when cast, and makes you immune to them while dispersed.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425294/dispersion",
      },
      {
        name: "Pain Suppression",
        icon: [null, "spell_holy_painsupression", null, "spell_holy_painsupression"],
        gear_slot: [null, FEET, null, FEET],
        description: [
          null,
          "Gain the Pain Suppression ability:<br><br>Instantly reduces all damage taken by a friendly target by 40% and increases resistance to Dispel mechanics by 65% for 8 sec.",
          null,
          "Gain the Pain Suppression ability:<br><br>Instantly reduces all damage taken by a friendly target by 40% and increases resistance to Dispel mechanics by 65% for 8 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=402004/pain-suppression",
      },
      {
        name: "Spirit of the Redeemer",
        icon: [null, "inv_enchant_essenceeternallarge", null, "inv_enchant_essenceeternallarge"],
        gear_slot: [null, FEET, null, FEET],
        description: [
          null,
          "Gain the Spirit of the Redeemer ability:<br><br>Activate to become the Spirit of Redemption for 30 sec. While in this form, you can cast any healing spell free of cost, but you cannot move, attack, be attacked, or be targeted by any spells or effects. Requires Spirit of Redemption talent to activate, and you will no longer enter Spirit of Redemption upon dying.",
          null,
          "Gain the Spirit of the Redeemer ability:<br><br>Activate to become the Spirit of Redemption for 10 sec. While in this form, you can cast any healing spell free of cost, but you cannot move, attack, be attacked, or be targeted by any spells or effects. Requires Spirit of Redemption talent to activate, and you will no longer enter Spirit of Redemption  upon dying.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425284/spirit-of-the-redeemer",
      },
      {
        name: "Dagger Specialization",
        icon: [null, null, null, "inv_weapon_shortblade_05"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Daggers increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442887/dagger-specialization",
      },
      {
        name: "Healing Specialization",
        icon: [null, null, null, "spell_holy_greaterheal"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Increases healing done by spells and effects by up to 26. This effect is not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=468758/healing-specialization",
      },
      {
        name: "Holy Specialization",
        icon: [null, null, null, "spell_holy_aspiration"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Holy spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442898/holy-specialization",
      },
      {
        name: "Mace Specialization",
        icon: [null, null, null, "inv_hammer_01"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Maces and Two-Handed Maces increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442881/mace-specialization",
      },
      {
        name: "Meditation Specialization",
        icon: [null, null, null, "spell_holy_greaterheal"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Restores 5 mana per 5 sec. This effect is not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=468762/meditation-specialization",
      },
      {
        name: "Pole Weapon Specialization",
        icon: [null, null, null, "inv_staff_08"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Staves and Polearms increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442892/pole-weapon-specialization",
      },
      {
        name: "Shadow Specialization",
        icon: [null, null, null, "inv_elemental_primal_shadow"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Shadow spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442897/shadow-specialization",
      },
    ],
    rogue: [
      {
        name: "Deadly Brew",
        icon: ["inv_potion_97", null, null, "ability_rogue_deadlybrew"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "When you inflict any other poison on a target, you also inflict Deadly Poison.",
          null,
          null,
          "Grants several improvements to your poisons:<br><br>When you inflict any other poison on a target, you also inflict Deadly Poison.<br><br>If your weapon does not have a poison applied, it has a chance to trigger Instant Poison as if Instant Poison were applied.<br><br>Deadly Poison and Instant Poison now gain increased damage from your Attack Power.<br><br>Your Deadly Poison can now be active on targets affected by another Rogue's Deadly Poison.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=399965/deadly-brew",
      },
      {
        name: "Just a Flesh Wound",
        icon: ["ability_rogue_bloodyeye", null, null, "ability_rogue_bloodyeye"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "You take 20% reduced Physical damage while Blade Dance is active. Additionally, you have 6% reduced chance to be critically hit by melee attacks, the threat generated by all your actions is massively increased, and your Feint ability is replaced with Tease, which Taunts the target to attack you.<br><br>Tease<br>Taunts the target to attack you, but has no effect if the target is already attacking you.",
          null,
          null,
          "You take 20% reduced Physical damage while Blade Dance is active, reduced by an additional 1% for every 12 of your Defense skill beyond 300. Additionally, your chance to Dodge is multiplied by 50%, you have 6% reduced chance to be critically hit by melee attacks, you deal 20% less damage, the threat generated by all your actions is massively increased, and your Feint ability is replaced with Tease, which Taunts the target to attack you.<br><br>Tease<br>Taunts the target to attack you, but has no effect if the target is already attacking you.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=400014/just-a-flesh-wound",
      },
      {
        name: "Quick Draw",
        icon: ["inv_musket_02", null, null, "inv_musket_02"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Gain the Quick Draw ability:<br><br>Draw your ranged weapon and fire a quick shot at an enemy, causing normal ranged weapon damage and reducing the target's movement speed by 50% for 6 sec. Awards 1 combo point. Quick Draw benefits from all talents and effects that trigger from or modify Sinister Strike.",
          null,
          null,
          "Gain the Quick Draw ability:<br><br>Draw your ranged weapon and fire a quick shot at an enemy, causing normal ranged weapon damage and reducing the target's movement speed by 50% for 6 sec. Awards 1 combo point.<br><br>Quick Draw benefits from all talents and effects that trigger from or modify Sinister Strike.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=398196/quick-draw",
      },
      {
        name: "Slaughter from the Shadows",
        icon: ["ability_rogue_slaughterfromtheshadows", null, null, "ability_rogue_slaughterfromtheshadows"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Reduces the Energy cost of your Backstab and Ambush abilities by 20.",
          null,
          null,
          "Reduces the Energy cost of your Backstab and Ambush abilities by 30, and increases the damage they deal to non-player controlled targets by 70%. Does not apply to abilities learned from other runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=424925/slaughter-from-the-shadows",
      },
      {
        name: "Cutthroat",
        icon: [null, null, null, "ability_rogue_stayofexecution"],
        gear_slot: [null, null, null, HANDS],
        description: [
          null,
          null,
          null,
          "Your Ambush, Backstab, and Garrote abilities no longer require you to be behind your target, and Backstab has a 15% chance to make your next Ambush within 10 sec not require you to be in Stealth.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=462708/cutthroat",
      },
      {
        name: "Main Gauche",
        icon: ["spell_deathknight_spelldeflection", null, null, "spell_deathknight_spelldeflection"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Main Gauche ability:<br><br>Instantly strike with your off-hand weapon for normal off-hand weapon damage and increase your chance to parry by 10% for 10 sec.  Awards 1 combo point. Main Gauche benefits from all talents and effects that trigger from or modify Sinister Strike.",
          null,
          null,
          "Gain the Main Gauche ability:<br><br>Instantly strike with your off-hand weapon for normal off-hand weapon damage and increase your chance to parry by 100% for 5 sec or until you successfully parry. For 20 sec after using Main Gauche, Sinister Strike costs 20 less Energy, deals 50% more threat, grants stacks of Rolling with the Punches, and both Sinister Strike and Eviscerate deal 50% more damage. Awards 1 combo point.<br><br>Main Gauche benefits from most talents and effects that trigger from or modify Sinister Strike. Main Gauche's effect will not discount or empower Main Gauche.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=424919/main-gauche",
      },
      {
        name: "Mutilate",
        icon: ["ability_rogue_shadowstrikes", null, null, "ability_rogue_shadowstrikes"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Mutilate ability:<br><br>Instantly attacks with both weapons for 100% weapon damage plus additional damage with each weapon. Damage is increased by 20% against Poisoned targets. Awards 2 combo points.",
          null,
          null,
          "Gain the Mutilate ability:<br><br>Instantly attacks with both weapons for 100% weapon damage plus additional damage with each weapon. Damage is increased by 20% against Poisoned targets. Awards 2 combo points.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=399960/mutilate",
      },
      {
        name: "Saber Slash",
        icon: ["inv_1h_haremmatron_d_01", null, null, "inv_1h_haremmatron_d_01"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Saber Slash ability:<br><br>Viciously slash an enemy for 130% weapon damage, and cause the target to bleed every 2 sec for 12 sec, stacking up to 3 times. Awards 1 combo point.",
          null,
          null,
          "Gain the Saber Slash ability:<br><br>Viciously slash an enemy for 100% weapon damage, and cause the target to bleed every 2 sec for 12 sec, stacking up to 3 times. Each stack also increases damage done by your Saber Slash and Sinister Strike by 50%. Awards 1 combo point.<br><br>Saber Slash benefits from all talents and effects that trigger from or modify Sinister Strike.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=424785/saber-slash",
      },
      {
        name: "Shadowstrike",
        icon: ["ability_rogue_envelopingshadows", null, null, "ability_theblackarrow"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Shadowstrike ability:<br><br>Teleport behind your target and strike, causing 150% weapon damage to the target. Must be stealthed. Awards 1 combo point.",
          null,
          null,
          "Gain the Shadowstrike ability:<br><br>Teleport behind your target and strike, causing 150% weapon damage to the target. Must be stealthed. Awards 1 combo point.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=399985/shadowstrike",
      },
      {
        name: "Shiv",
        icon: ["inv_throwingknife_04", null, null, "inv_throwingknife_04"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Shiv ability:<br><br>Instantly attack with your off-hand weapon with a 100% chance to apply the poison from your off-hand weapon to the target. Slower weapons require more energy. Awards 1 combo point.",
          null,
          null,
          "Gain the Shiv ability:<br><br>Instantly attack with your off-hand weapon with a 100% chance to apply the poison from your off-hand weapon to the target. Slower weapons require more energy. Awards 1 combo point.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=424800/shiv",
      },
      {
        name: "Between the Eyes",
        icon: ["inv_weapon_rifle_01", null, null, "inv_weapon_rifle_01"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Between the Eyes ability:<br><br>Ranged Finishing move that causes damage per combo point, increased by Attack Power, and Stuns the target. Cooldown shared with Kidney Shot.",
          null,
          null,
          "Gain the Between the Eyes ability:<br><br>Ranged Finishing move that causes damage per combo point, increased by Attack Power, and Stuns the target. Cooldown shared with Kidney Shot.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=400009/between-the-eyes",
      },
      {
        name: "Blade Dance",
        icon: ["ability_warrior_punishingblow", null, null, "ability_parry"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Blade Dance ability:<br><br>Finishing move that increases your Parry chance. Lasts longer and grants more Parry chance per combo point.",
          null,
          null,
          "Gain the Blade Dance ability:<br><br>Finishing move that increases your Parry chance by 10% and grants 4 Attack Power for each point of your defense skill beyond 300. Lasts longer per combo point.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=400012/blade-dance",
      },
      {
        name: "Envenom",
        icon: ["ability_rogue_disembowel", null, null, "ability_rogue_disembowel"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Envenom ability:<br><br>Finishing move that deals instant poison damage based on your Deadly Poison doses on the target.  Following the Envenom attack you have a 75% increased frequency of applying Instant Poison for 1 sec plus an additional 1 sec per combo point. One dose is activated per combo point.",
          null,
          null,
          "Gain the Envenom ability:<br><br>Finishing move that deals instant poison damage based on Deadly Poison doses on the target.  Following the Envenom attack you have a 75% increased frequency of applying Instant Poison for 1 sec plus an additional 1 sec per combo point. One dose is activated per combo point.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=399963/envenom",
      },
      {
        name: "Dagger Specialization",
        icon: [null, null, null, "inv_weapon_shortblade_05"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Daggers increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442887/dagger-specialization",
      },
      {
        name: "Defense Specialization",
        icon: [null, null, null, "inv_shield_06"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Defense skill increased by 25. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=459312/defense-specialization",
      },
      {
        name: "Fist Weapon Specialization",
        icon: [null, null, null, "inv_misc_desecrated_plategloves"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Fist Weapons (Unarmed) increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442890/fist-weapon-specialization",
      },
      {
        name: "Mace Specialization",
        icon: [null, null, null, "inv_hammer_01"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Maces and Two-Handed Maces increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442881/mace-specialization",
      },
      {
        name: "Nature Specialization",
        icon: [null, null, null, "inv_elemental_primal_life"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Nature spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442896/nature-specialization",
      },
      {
        name: "Sword Specialization",
        icon: [null, null, null, "ability_meleedamage"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Swords and Two-Handed Swords increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442813/sword-specialization",
      },
    ],
    shaman: [
      {
        name: "Dual Wield Specialization",
        icon: ["ability_dualwield", null, null, "ability_dualwieldspecialization"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Increases your chance to hit with both spells and melee attacks by 5% while dual wielding and your Stormstrike ability now hits with both weapons while dual wielding.",
          null,
          null,
          "Increases your chance to hit with both spells and melee attacks by 5% while dual wielding, your Stormstrike ability now hits with both weapons while dual wielding, and increases the damage done by your offhand weapon by 60%.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=408496/dual-wield-specialization",
      },
      {
        name: "Healing Rain",
        icon: ["spell_nature_tranquility", null, null, "spell_nature_tranquility"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Gain the Healing Rain ability:<br><br>Selects the area 15 yards around target player, and heals all of target player's party members within that area for every second.",
          null,
          null,
          "Gain the Healing Rain ability:<br><br>Selects the area 15 yards around target player, and heals all of target player's party members within that area for 84.28 every second.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415236/healing-rain",
      },
      {
        name: "Overload",
        icon: ["spell_nature_stormreach", null, null, "spell_nature_lightningoverload"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Gives your Lightning Bolt, Chain Lightning, Chain Heal, Healing Wave, and Lava Burst spells a 33% chance to cast a second, similar spell on the same target at no additional cost that causes half damage or healing and no threat.",
          null,
          null,
          "Gives your Lightning Bolt, Chain Lightning, Chain Heal, Healing Wave, and Lava Burst spells a 60% chance to cast a second, similar spell on the same target at no additional cost that causes half damage or healing and no threat.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=408438/overload",
      },
      {
        name: "Shield Mastery",
        icon: ["inv_shield_17", null, null, "inv_shield_17"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Each time you Block, you regenerate mana equal to 4% of your maximum mana and you gain Armor equal to 30% of your shield's armor value, stacking up to 5 times. You also always gain 10% increased chance to Block and 15% increased Block value.",
          null,
          null,
          "Each time you Block, you regenerate mana equal to 8% of your maximum mana and you gain Armor equal to 30% of your shield's armor value, stacking up to 5 times. You also always gain 10% increased chance to Block and 15% increased Block value.<br><br>In addition, each time you use a Shock ability, you gain 4 Spell Damage for each point of your defense skill beyond 300. Lasts 15 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=408524/shield-mastery",
      },
      {
        name: "Two-Handed Mastery",
        icon: [null, "inv_staff_08", null, "spell_fire_enchantweapon"],
        gear_slot: [null, CHEST, null, CHEST],
        description: [
          null,
          "Each time you strike an enemy with a two-handed weapon, you gain 30% attack speed with two-handed weapons for 10 sec.",
          null,
          "Each time you strike an enemy with a two-handed weapon, you gain 45% attack speed with two-handed weapons, 10% increased Attack Power, and 10% increased chance to hit with spells for 10 sec. This effect is lost if you strike an enemy with a one-handed weapon.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=436364/two-handed-mastery",
      },
      {
        name: "Lava Burst",
        icon: ["spell_shaman_lavaburst", null, null, "spell_shaman_lavaburst"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Lava Burst ability:<br><br>You hurl molten lava at the target, dealing Fire damage. If your Flame Shock is on the target, Lava Burst will deal a critical strike.",
          null,
          null,
          "Gain the Lava Burst ability:<br><br>You hurl molten lava at the target, dealing Fire damage. If your Flame Shock is on the target, Lava Burst will deal a critical strike.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=408490/lava-burst",
      },
      {
        name: "Lava Lash",
        icon: ["ability_shaman_lavalash", null, null, "ability_shaman_lavalash"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Lava Lash ability:<br><br>You charge your off-hand weapon with lava, instantly dealing 100% off-hand Weapon damage. Damage is increased by 20% if your off-hand weapon is enchanted with Flametongue.",
          null,
          null,
          "Gain the Lava Lash ability:<br><br>You charge your off-hand weapon with lava, instantly dealing 100% off-hand Weapon damage. Damage is increased by 150% if your off-hand weapon is enchanted with Flametongue.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=408507/lava-lash",
      },
      {
        name: "Molten Blast",
        icon: ["spell_shaman_lavaflow", null, null, "spell_shaman_lavaflow"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Molten Blast ability:<br><br>Blast enemies in a cone in front of you for Fire damage. This ability generates a high amount of threat. Flame Shock periodic damage has a 10% chance to reset the cooldown on Molten Blast.",
          null,
          null,
          "Gain the Molten Blast ability:<br><br>Blast up to 10 enemies in a cone in front of you for Fire damage. This ability generates a high amount of threat. Flame Shock periodic damage has a 10% chance to reset the cooldown on Molten Blast.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425339/molten-blast",
      },
      {
        name: "Water Shield",
        icon: ["ability_shaman_watershield", null, null, "ability_shaman_watershield"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Water Shield ability:<br><br>The caster is surrounded by 3 globes of water, granting 1% of your maximum mana per 5 sec.  When a spell, melee or ranged attack hits the caster, 4% of maximum mana is restored to the caster. This expends one water globe.  Only one globe will activate every few seconds.  Lasts 10 min.  Only one Elemental Shield can be active on the Shaman at any one time.",
          null,
          null,
          "Gain the Water Shield ability:<br><br>The caster is surrounded by 3 globes of water, granting 1% of your maximum mana per 5 sec.  When a spell, melee or ranged attack hits the caster, 4% of maximum mana is restored to the caster. This expends one water globe.  Only one globe will activate every few seconds.  Lasts 10 min.  Only one Elemental Shield can be active on the Shaman at any one time.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=408510/water-shield",
      },
      {
        name: "Ancestral Guidance",
        icon: ["ability_druid_lunarguidance", null, null, "ability_druid_lunarguidance"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Ancestral Guidance ability:<br><br>For the next 10 sec, 25% of your damage is converted to healing on up to 3 nearby party, and 100% of your healing is converted to damage on your most recent Flame Shock target.",
          null,
          null,
          "Gain the Ancestral Guidance ability:<br><br>For the next 10 sec, 25% of your damage is converted to healing on up to 3 nearby party members, and 100% of your healing is converted to damage on your most recent Flame Shock target.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409324/ancestral-guidance",
      },
      {
        name: "Earth Shield",
        icon: ["spell_nature_skinofearth", null, null, "spell_nature_skinofearth"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Earth Shield ability:<br><br>Protects the target with an earthen shield, reducing casting or channeling time lost when damaged by 30%  and causing attacks to heal the shielded target for 100.  This effect can only occur once every few seconds.  3 charges.  Lasts 10 min.  Earth Shield can only be placed on one target at a time and only one Elemental Shield can be active on a target at a time.",
          null,
          null,
          "Gain the Earth Shield ability:<br><br>Protects the target with an earthen shield, reducing casting or channeling time lost when damaged by 30%  and causing attacks to heal the shielded target for 157.323.  This effect can only occur once every few seconds.  9 charges. Lasts 10 min.  Earth Shield can only be placed on one target at a time.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=408514/earth-shield",
      },
      {
        name: "Greater Ghost Wolf",
        icon: [null, null, null, "spell_nature_spiritwolf"],
        gear_slot: [null, null, null, LEGS],
        description: [
          null,
          null,
          null,
          "Your Ghost Wolf ability can now be used indoors, and reduces all damage you take by 10% while active.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415813/greater-ghost-wolf",
      },
      {
        name: "Shamanistic Rage",
        icon: ["spell_nature_shamanrage", null, null, "spell_nature_shamanrage"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Gain the Shamanistic Rage ability:<br><br>Reduces all damage you take by 20% and you regenerate mana every second for 15 sec. Mana regenerated per second is equal to 15% of your Attack Power, 10% of your spell power, or 6% of your healing power, whichever value is greatest.",
          null,
          null,
          "Gain the Shamanistic Rage ability:<br><br>Reduces all damage you take by 20% and you regenerate mana equal to 5% of your maximum mana every second for 15 sec. Your party and raid members within 40 yards will also receive 18% of the mana you receive this way.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425336/shamanistic-rage",
      },
      {
        name: "Way of Earth",
        icon: ["spell_nature_earthquake", null, null, "spell_nature_earthquake"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "While Rockbiter Weapon is active on your main hand weapon, you deal 100% increased threat, gain 30% increased health, take 10% reduced damage, gain 6% reduced chance to be critically hit by melee attacks, and Earth Shock taunts targets to attack you and has a separate cooldown from other Shock spells but has its range reduced to melee range.",
          null,
          null,
          "While Rockbiter Weapon is active on your main hand weapon and you have a shield equipped, you deal 65% increased threat, gain 25% increased health, take 10% reduced damage, gain 6% reduced chance to be critically hit by melee attacks, and Earth Shock taunts targets to attack you and has a separate cooldown from other Shock spells but has its range reduced to melee range. However, the range of your Lightning Bolt, Chain Lightning, Chain Heal, Healing Wave, and Lava Burst spells is reduced by 20 yards.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=408531/way-of-earth",
      },
      {
        name: "Axe Specialization",
        icon: [null, null, null, "inv_axe_03"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Axes and Two-Handed Axes increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442876/axe-specialization",
      },
      {
        name: "Dagger Specialization",
        icon: [null, null, null, "inv_weapon_shortblade_05"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Daggers increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442887/dagger-specialization",
      },
      {
        name: "Defense Specialization",
        icon: [null, null, null, "inv_shield_06"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Defense skill increased by 25. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=459312/defense-specialization",
      },
      {
        name: "Fire Specialization",
        icon: [null, null, null, "inv_elemental_primal_fire"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Fire spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442894/fire-specialization",
      },
      {
        name: "Fist Weapon Specialization",
        icon: [null, null, null, "inv_misc_desecrated_plategloves"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Fist Weapons (Unarmed) increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442890/fist-weapon-specialization",
      },
      {
        name: "Frost Specialization",
        icon: [null, null, null, "inv_elemental_primal_water"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Frost spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442895/frost-specialization",
      },
      {
        name: "Healing Specialization",
        icon: [null, null, null, "spell_holy_greaterheal"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Increases healing done by spells and effects by up to 26. This effect is not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=468758/healing-specialization",
      },
      {
        name: "Mace Specialization",
        icon: [null, null, null, "inv_hammer_01"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Maces and Two-Handed Maces increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442881/mace-specialization",
      },
      {
        name: "Meditation Specialization",
        icon: [null, null, null, "spell_holy_greaterheal"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Restores 5 mana per 5 sec. This effect is not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=468762/meditation-specialization",
      },
      {
        name: "Nature Specialization",
        icon: [null, null, null, "inv_elemental_primal_life"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Nature spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442896/nature-specialization",
      },
      {
        name: "Pole Weapon Specialization",
        icon: [null, null, null, "inv_staff_08"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Staves and Polearms increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442892/pole-weapon-specialization",
      },
    ],
    warlock: [
      {
        name: "Backdraft",
        icon: [null, null, "ability_warlock_backdraft", "ability_warlock_backdraft"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Your Conflagrate ability also grants 30% spellcasting haste for 10 sec.",
          "Your Conflagrate ability also grants 30% spellcasting haste for 15 sec and no longer consumes Immolate.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431742/backdraft",
      },
      {
        name: "Pandemic",
        icon: [null, null, "spell_shadow_unstableaffliction_2", "spell_shadow_unstableaffliction_2"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Periodic damage from your Corruption, Unstable Affliction, Curse of Agony, Immolate, Curse of Doom, and Siphon Life abilities can now be critical strikes.",
          "Periodic damage from your Corruption, Unstable Affliction, Curse of Agony, Immolate, Curse of Doom, and Siphon Life abilities can now be critical strikes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=429283/pandemic",
      },
      {
        name: "Vengeance",
        icon: [null, null, "ability_warlock_improveddemonictactics", "ability_warlock_improveddemonictactics"],
        gear_slot: [null, null, HEAD, HEAD],
        description: [
          null,
          null,
          "Gain the Vengeance ability:<br><br>When activated, this ability temporarily grants you a 30% increase to your maximum health for 20 sec. After the effect expires, the health is lost. Additionally, while in Metamorphosis, Vengeance causes your wings to slow your falling speed.",
          "Gain the Vengeance ability:<br><br>When activated, this ability temporarily grants you a 30% increase to your maximum health for 20 sec. After the effect expires, the health is lost. Additionally, while in Metamorphosis, Vengeance causes your wings to slow your falling speed.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=426469/vengeance",
      },
      {
        name: "Demonic Tactics",
        icon: ["spell_shadow_demonictactics", "spell_shadow_demonictactics", "spell_shadow_demonictactics", "spell_shadow_demonictactics"],
        gear_slot: [CHEST, CHEST, CHEST, CHEST],
        description: [
          "Increases the melee and spell critical strike chance of you and your pet by 10%.",
          "Increases the melee and spell critical strike chance of you and your pet by 10%.",
          "Increases the melee and spell critical strike chance of you and your pet by 10%.",
          "Increases the melee and spell critical strike chance of you and your pet by 10%.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=412727/demonic-tactics",
      },
      {
        name: "Lake of Fire",
        icon: ["spell_fire_selfdestruct", "spell_fire_selfdestruct", null, "spell_fire_selfdestruct"],
        gear_slot: [CHEST, CHEST, CHEST, CHEST],
        description: [
          "Rain of Fire also leaves a Lake of Fire on the ground that increases all Fire damage you deal and your Demon pet deals to affected enemies by 40% for 15 sec.",
          "Rain of Fire also leaves a Lake of Fire on the ground that increases all Fire damage you deal and your Demon pet deals to affected enemies by 40% for 15 sec.",
          "Rain of Fire also leaves a Lake of Fire on the ground after you channel it for its full duration that increases all Fire damage you deal and your Demon pet deals to affected enemies by 50% for 15 sec.",
          "Your Rain of Fire is no longer channeled, but gains a 8 sec cooldown.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=403666/lake-of-fire",
      },
      {
        name: "Master Channeler",
        icon: ["spell_shadow_lifedrain", "spell_shadow_lifedrain", null, "spell_shadow_lifedrain"],
        gear_slot: [CHEST, CHEST, null, CHEST],
        description: [
          "Your Drain Life is no longer channeled, lasts 15 sec with a 15 sec cooldown, costs 100% more mana, and heals you for 50% more each time it deals damage.",
          "Your Drain Life is no longer channeled, lasts 15 sec with a 15 sec cooldown, costs 100% more mana, and heals you for 50% more each time it deals damage.",
          null,
          "Your Drain Life is no longer channeled, lasts 15 sec with a 15 sec cooldown, costs 100% more mana, and heals you for 50% more each time it deals damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=403668/master-channeler",
      },
      {
        name: "Soul Siphon",
        icon: ["spell_shadow_lifedrain02", "spell_shadow_lifedrain02", null, "spell_shadow_lifedrain02"],
        gear_slot: [CHEST, CHEST, null, BACK],
        description: [
          "Increases the amount drained by your Drain Life and Drain Soul spells by an additional 6% for each of your Warlock Shadow effects afflicting the target, up to a maximum of 18% additional effect.",
          null,
          null,
          "Causes your Drain Soul to to deal damage 3 times faster and increases the amount drained by your Drain Life and Drain Soul spells by an additional 6% for each of your Warlock Shadow effects afflicting the target, up to a maximum of 18% additional effect. When Drain Soul is cast on a target below 20% health, it instead gains 50% per effect, up to a maximum of 150%. In addition, your Drain Soul can now trigger your Nightfall talent.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=403511/soul-siphon",
      },
      {
        name: "Immolation Aura",
        icon: [null, null, "spell_fire_felimmolation", "spell_fire_felimmolation"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Gain the Immolation Aura ability:<br><br>Burns nearby enemies for (* 20 / 100) damage every 2 seconds, and reduces all magic damage taken by 10%. Lasts until cancelled.",
          "Gain the Immolation Aura ability:<br><br>Burns nearby enemies for 32.217 damage every time an enemy makes a melee attack against you (no more than once per sec), reduces all magic damage taken by 10%, and increases Fire damage done by 10%. Lasts until cancelled.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431757/immolation-aura",
      },
      {
        name: "Summon Felguard",
        icon: [null, null, "spell_shadow_summonfelguard", "spell_shadow_summonfelguard"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Gain the Summon Felguard ability:<br><br>Summons a Felguard under the command of the Warlock.<br><br>The Felguard benefits from all talents and effects that trigger from or benefit any of your other Demon minions.",
          "Gain the Summon Felguard ability:<br><br>Summons a Felguard under the command of the Warlock.<br><br>The Felguard benefits from all talents and effects that trigger from or benefit any of your other Demon minions.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431754/summon-felguard",
      },
      {
        name: "Unstable Affliction",
        icon: [null, null, "spell_shadow_unstableaffliction_3", "spell_shadow_unstableaffliction_3"],
        gear_slot: [null, null, WRIST, WRIST],
        description: [
          null,
          null,
          "Gain the Unstable Affliction ability:<br><br>Shadow energy slowly destroys the target, causing damage over 15 sec.  In addition, if the Unstable Affliction is dispelled it will cause damage to the dispeller and silence them for 5 sec. Only one Unstable Affliction or Immolate per Warlock can be active on any one target.",
          "Gain the Unstable Affliction ability:<br><br>Shadow energy slowly destroys the target, causing damage over 18 sec. In addition, if the Unstable Affliction is dispelled it will cause damage to the dispeller and silence them for 5 sec. Only one Unstable Affliction or Immolate per Warlock can be active on any one target.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=431748/unstable-affliction",
      },
      {
        name: "Chaos Bolt",
        icon: ["ability_warlock_chaosbolt", "ability_warlock_chaosbolt", null, "ability_warlock_chaosbolt"],
        gear_slot: [HANDS, HANDS, null, HANDS],
        description: [
          "Gain the Chaos Bolt ability:<br><br>Sends a bolt of chaotic fire at the enemy, dealing Fire damage.  Chaos Bolt always hits, cannot be resisted, and its knowledge causes all your Fire spells to pierce through absorption effects.",
          "Gain the Chaos Bolt ability:<br><br>Sends a bolt of chaotic fire at the enemy, dealing Fire damage.  Chaos Bolt always hits, cannot be resisted, and its knowledge causes all your Fire spells to pierce through absorption effects. Chaos Bolt gains a high chance to be resisted when used against monsters 4 or more levels above your level.",
          null,
          "Gain the Chaos Bolt ability:<br><br>Sends a bolt of chaotic fire at the enemy, dealing Chaos damage. Chaos Bolt always hits, cannot be resisted, and its knowledge causes all your Fire spells to pierce through absorption effects. Chaos Bolt gains a high chance to be resisted when used against monsters 4 or more levels above your level.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=403629/chaos-bolt",
      },
      {
        name: "Haunt",
        icon: ["ability_warlock_haunt", null, null, "ability_warlock_haunt"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Haunt ability:<br><br>Unleash a ghostly soul on an enemy, dealing damage, and increasing all Shadow damage over time you deal to that target by 20%. When the Haunt ends or is dispelled, you will be healed for all the damage it dealt to your target.",
          "Gain the Haunt ability:<br><br>Unleash a ghostly soul on an enemy, dealing damage, and increasing all Shadow damage over time you deal to that target by 20%. When the Haunt ends or is dispelled, you will be healed for all the damage it dealt to your target.",
          null,
          "Gain the Haunt ability:<br><br>Unleash a ghostly soul on an enemy, dealing damage, and increasing all Shadow damage over time you deal to that target by 40% for 15 sec. When the Haunt ends or is dispelled, you will be healed for all the damage it dealt to your target.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=403501/haunt",
      },
      {
        name: "Metamorphosis",
        icon: ["spell_shadow_demonform", "spell_shadow_demonform", null, "spell_shadow_demonform"],
        gear_slot: [HANDS, HANDS, null, HANDS],
        description: [
          "Gain the Metamorphosis ability:<br><br>Transform into a Demon, increasing Armor by 500%, reducing the chance you will be critically hit by 6%, increasing your threat by 100%, increasing mana gained from Life Tap by 100%, transforming the functionality of some of your abilities, and granting some new abilities.<br><br>Searing Pain: Now instant.<br><br>Shadow Bolt: Becomes Shadow Cleave, a Shadow melee attack that hits up to 3 nearby enemies, but has a 6 sec cooldown.<br><br>Curse of Recklessness: Now also taunts your target to attack you for 3 sec, but gains a 10 sec cooldown and range is reduced to melee.",
          "Gain the Metamorphosis ability:<br><br>Transform into a Demon, increasing Armor by 500%, reducing the chance you will be critically hit by 6%, increasing your threat by 50%, increasing mana gained from Life Tap by 100%, transforming the functionality of some of your abilities, and granting some new abilities.<br><br>Searing Pain: Now instant.<br><br>Shadow Bolt: Becomes Shadow Cleave, a Shadow melee attack that hits up to 3 nearby enemies, but has a 6 sec cooldown.<br><br>Fear: Replaced with Menace.<br><br>Menace<br>Taunts the target to attack you, but has no effect if the target is already attacking you.<br><br>Demon Charge<br>Charge an enemy and stun it for 1 sec.  Cannot be used in combat.<br><br>Demonic Howl<br>Forces all nearby enemies to focus attacks on you for 6 sec.",
          null,
          "Gain the Metamorphosis ability:<br><br>Transform into a Demon, increasing Armor by 500%, Health by 15%, reducing the chance you will be critically hit by 6%, increasing your threat by 50%, increasing mana gained from Life Tap by 100%, but reducing all damage you deal by 10%. Metamorphosis transforms the functionality of some abilities and grants new ones:<br><br>Searing Pain: Now instant.<br><br>Shadow Bolt: Becomes Shadow Cleave, a Shadow melee attack that hits up to 10 nearby enemies, but has a 6 sec cooldown.<br><br>Fear: Replaced with Menace.<br><br>Menace<br>Taunts the target to attack you, but has no effect if the target is already attacking you.<br><br>Demon Charge<br>Charge an enemy and stun it for 1 sec.  Cannot be used in combat.<br><br>Demonic Howl<br>Forces all nearby enemies to focus attacks on you for 6 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=403789/metamorphosis",
      },
      {
        name: "Shadow Bolt Volley",
        icon: ["spell_shadow_shadetruesight", "spell_shadow_shadetruesight", null, "spell_shadow_shadetruesight"],
        gear_slot: [HANDS, HANDS, null, HANDS],
        description: [
          "Your Shadow Bolt now strikes up to 5 targets within a chain distance of 10 yards, but for 20% reduced damage.",
          null,
          null,
          "Your Shadow Bolt now strikes up to 5 targets within a chain distance of 10 yards, but for 30% reduced damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=403628/shadow-bolt-volley",
      },
      {
        name: "Demonic Grace",
        icon: ["ability_warlock_demonicpower", "ability_warlock_demonicpower", null, "ability_warlock_demonicpower"],
        gear_slot: [LEGS, LEGS, null, LEGS],
        description: [
          "Gain the Demonic Grace ability:<br><br>Surge with fel energy, increasing your pet's and your own dodge chance by 30%, and your chance to critically strike with all attacks by 30%.",
          "Gain the Demonic Grace ability:<br><br>Surge with fel energy, increasing your pet's and your own dodge chance by 30%, and your chance to critically strike with all attacks by 30%. Lasts 6 sec.",
          null,
          "Gain the Demonic Grace ability:<br><br>Surge with fel energy, increasing your pet's and your own dodge chance by 20%, and your chance to critically strike with all attacks by 20%. Lasts 6 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425463/demonic-grace",
      },
      {
        name: "Demonic Pact",
        icon: ["spell_shadow_demonicpact", null, null, "spell_shadow_demonicpact"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Your pet's critical strikes apply the Demonic Pact effect to your party members for 45 sec. Demonic Pact increases spell damage and healing by 10% of your spell damage or 30, whichever is higher. Does not work on Enslaved demons.",
          null,
          null,
          "Your Fire and Shadow spells deal 10% more damage, and your pet's critical strikes apply the Demonic Pact effect to your party or raid members for 45 sec. Demonic Pact increases spell damage and healing by 10% of your spell damage or 30, whichever is higher. Does not work on Enslaved demons.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425464/demonic-pact",
      },
      {
        name: "Everlasting Affliction",
        icon: ["ability_warlock_everlastingaffliction", "ability_warlock_everlastingaffliction", null, "ability_warlock_everlastingaffliction"],
        gear_slot: [LEGS, LEGS, null, LEGS],
        description: [
          "Drain Life, Drain Soul, Shadowbolt, Shadow Cleave, Searing Pain, Incinerate, and Haunt refresh the duration of your Corruption on the target back to its maximum duration.",
          "Drain Life, Drain Soul, Shadowbolt, Shadow Cleave, Searing Pain, Incinerate, and Haunt refresh the duration of your Corruption on the target back to its maximum duration.",
          null,
          "Drain Life, Drain Soul, Shadowbolt, Shadow Cleave, Searing Pain, Incinerate, and Haunt refresh the duration of your Corruption on the target back to its maximum duration.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=412689/everlasting-affliction",
      },
      {
        name: "Incinerate",
        icon: ["spell_fire_burnout", "spell_fire_burnout", "spell_fire_burnout", "spell_fire_burnout"],
        gear_slot: [LEGS, LEGS, LEGS, WRIST],
        description: [
          "Gain the Incinerate ability:<br><br>Burn your enemy and increase all Fire damage you deal by 25% for the next 15 sec.",
          "Gain the Incinerate ability:<br><br>Burn your enemy and increase all Fire damage you deal by 25% for the next 15 sec.",
          "Gain the Incinerate ability:<br><br>Burn your enemy and increase all Fire damage you deal by 25% for the next 15 sec.",
          "Gain the Incinerate ability:<br><br>Burn your enemy and increase all Fire damage you deal by 40% for the next 15 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=412758/incinerate",
      },
      {
        name: "Grimoire of Synergy",
        icon: [null, "inv_misc_book_06", "inv_misc_book_06", "inv_misc_book_06"],
        gear_slot: [null, WAIST, WAIST, WAIST],
        description: [
          null,
          "Gain the Grimoire of Synergy ability:<br><br>Recite from a dark tome, granting damage done by you or your summoned demon a 5% chance to increase the damage done by the other by 5% for 15 sec. Recitation lasts 30 min.",
          "Gain the Grimoire of Synergy ability:<br><br>Recite from a dark tome, granting damage done by you or your summoned demon a 5% chance to increase the damage done by the other by 25% for 15 sec. Recitation lasts 30 min.",
          "Damage done by you or your summoned demon has a 10% chance to increase the damage done by the other by 10% for 15 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=426301/grimoire-of-synergy",
      },
      {
        name: "Invocation",
        icon: [null, "spell_shadow_corpseexplode", null, "spell_shadow_corpseexplode"],
        gear_slot: [null, WAIST, null, WAIST],
        description: [
          null,
          "Refreshing Corruption, Immolate, Curse of Agony, or Siphon Life when it has less than 6 seconds duration remaining will cause you to deal instant damage to the target equal to one period of that spell's periodic damage.",
          null,
          "Applying Corruption, Immolate, Curse of Agony, Unstable Affliction, Shadowflame, or Siphon Life will cause you to deal instant damage to the target equal to one tick of the spell's periodic damage. Refreshing any of those spells when it has less than 6 seconds duration remaining will cause you to deal instant damage to the target equal to the spell's remaining periodic damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=426243/invocation",
      },
      {
        name: "Shadow and Flame",
        icon: [null, "spell_fire_playingwithfire", null, "spell_fire_playingwithfire"],
        gear_slot: [null, WAIST, null, WAIST],
        description: [
          null,
          "Your critical strikes with Fire and Shadow spells increase your Fire and Shadow damage done by 10% for 10 sec.",
          null,
          "Your critical strikes with Fire and Shadow spells increase your Fire and Shadow damage done by 10% for 10 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=426316/shadow-and-flame",
      },
      {
        name: "Dance of the Wicked",
        icon: [null, "ability_warlock_eradication", null, "ability_warlock_eradication"],
        gear_slot: [null, FEET, null, FEET],
        description: [
          null,
          "You and your demon pet gain dodge chance equal to your spell critical strike chance each time you deal a critical strike to an enemy, and also both regain 2% of maximum mana.",
          null,
          "You and your demon pet gain dodge chance equal to 70% of your spell critical strike chance each time you deal a critical strike to an enemy, and also both regain 2% of maximum mana.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=412798/dance-of-the-wicked",
      },
      {
        name: "Decimation",
        icon: [null, null, null, "spell_fire_fireball02"],
        gear_slot: [null, null, null, FEET],
        description: [
          null,
          null,
          null,
          "Your Soul Fire spell no longer has a cooldown. Additionally, when your Shadow Bolt, Shadow Cleave, Incinerate, or Soul Fire hits a target that is at or below 35% health, the cast time of your Soul Fire spell is reduced by 40% for 10 sec. Soul Fires cast under the effect of Decimation cost no shard.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=440870/decimation",
      },
      {
        name: "Demonic Knowledge",
        icon: [null, "spell_shadow_metamorphosis", "spell_shadow_metamorphosis", "spell_shadow_metamorphosis"],
        gear_slot: [null, FEET, FEET, FEET],
        description: [
          null,
          "Increases your spell damage and healing by a value equal to 10% of your Demon pet's total Stamina plus Intellect.",
          "Increases your spell damage and healing by a value equal to 10% of your Demon pet's total Stamina plus Intellect.",
          "Increases your spell damage and healing by a value equal to 3% of your Demon pet's total Stamina plus Intellect.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=412732/demonic-knowledge",
      },
      {
        name: "Shadowflame",
        icon: [null, "ability_warlock_shadowflame", null, "ability_warlock_shadowflame"],
        gear_slot: [null, FEET, null, FEET],
        description: [
          null,
          "Gain the Shadowflame ability:<br><br>Targets in a cone in front of the caster take Shadow damage and an additional Fire damage over 8 sec. This effect can be consumed with Conflagrate.",
          null,
          "Gain the Shadowflame ability:<br><br>Burns the enemy for Shadowflame damage and then an additional Shadowflame damage over 15 sec.<br><br>Shadowflame triggers and benefits from all effects that modify or interact with Immolate, or with Affliction, Destruction, Fire, or Shadow spells, but only one of Immolate or Shadowflame per Warlock can be active on any target. In addition, Shadowflame can trigger your Improved Shadow Bolt talent and causes it to have 26 additional charges.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=426320/shadowflame",
      },
      {
        name: "Dagger Specialization",
        icon: [null, null, null, "inv_weapon_shortblade_05"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Daggers increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442887/dagger-specialization",
      },
      {
        name: "Defense Specialization",
        icon: [null, null, null, "inv_shield_06"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Defense skill increased by 25. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=459312/defense-specialization",
      },
      {
        name: "Fire Specialization",
        icon: [null, null, null, "inv_elemental_primal_fire"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Fire spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442894/fire-specialization",
      },
      {
        name: "Meditation Specialization",
        icon: [null, null, null, "spell_holy_greaterheal"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Restores 5 mana per 5 sec. This effect is not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=468762/meditation-specialization",
      },
      {
        name: "Pole Weapon Specialization",
        icon: [null, null, null, "inv_staff_08"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Staves and Polearms increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442892/pole-weapon-specialization",
      },
      {
        name: "Shadow Specialization",
        icon: [null, null, null, "inv_elemental_primal_shadow"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Chance to hit with Shadow spells increased by 6%. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442897/shadow-specialization",
      },
      {
        name: "Sword Specialization",
        icon: [null, null, null, "ability_meleedamage"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Swords and Two-Handed Swords increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442813/sword-specialization",
      },
    ],
    warrior: [
      {
        name: "Blood Frenzy",
        icon: ["spell_nature_bloodlust", null, null, "ability_warrior_bloodfrenzy"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Each time you deal Bleed damage, you gain 3 Rage.",
          null,
          null,
          "Rend can now be used in Berserker stance, Rend's damage is increased by 100%, and Rend deals additional damage equal to 4% of your Attack Power each time it deals damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=412507/blood-frenzy",
      },
      {
        name: "Flagellation",
        icon: ["inv_mace_1h_stratholme_d_01", null, null, "ability_warrior_intensifyrage"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Gain a 25% bonus to Physical damage done for 12 sec after activating Bloodrage or Berserker Rage.",
          null,
          null,
          "You gain Rage from Physical damage taken as if you were wearing no armor.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=402877/flagellation",
      },
      {
        name: "Raging Blow",
        icon: ["ability_hunter_swiftstrike", null, null, "ability_hunter_swiftstrike"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Gain the Raging Blow ability:<br><br>A ferocious strike that deals 100% weapon damage, but can only be used while Enrage, Berserker Rage, or Bloodrage is active.",
          null,
          null,
          "Gain the Raging Blow ability:<br><br>A ferocious strike that deals 115% weapon damage, but can only be used while Enrage, Berserker Rage, or Bloodrage is active. Each other melee ability used while Enrage, Berserker Rage, or Bloodrage is active reduces Raging Blow's remaining cooldown by 1 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=402911/raging-blow",
      },
      {
        name: "Warbringer",
        icon: ["ability_warrior_warbringer", null, null, "ability_warrior_warbringer"],
        gear_slot: [CHEST, null, null, CHEST],
        description: [
          "Your Charge, Intercept, and Intervene abilities are now usable while in combat and in any stance, and will remove all movement impairing effects when activated.",
          null,
          null,
          "Your Charge, Intercept, and Intervene abilities are now usable while in combat and in any stance, and will remove all movement impairing effects when activated.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425421/warbringer",
      },
      {
        name: "Consumed By Rage",
        icon: ["spell_nature_shamanrage", null, null, "spell_nature_shamanrage"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Enrages you and grants you a 25% melee damage bonus for 12 sec or up to a maximum of 12 swings after you exceed 80 Rage.",
          null,
          null,
          "Enrages you (activating abilities which require being Enraged) for 12 sec after you exceed 60 Rage. In addition, Whirlwind also strikes with off-hand melee weapons while you are Enraged.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425418/consumed-by-rage",
      },
      {
        name: "Frenzied Assault",
        icon: ["ability_warrior_unrelentingassault", "ability_warrior_unrelentingassault", "ability_warrior_unrelentingassault", "ability_warrior_unrelentingassault"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "While wielding 2-handed weapons, your attack speed is increased by 20%.",
          null,
          null,
          "While wielding 2-handed weapons, your attack speed is increased by 40% and your successful melee hits generate 2 additional Rage, or 4 additional Rage if they are critical hits.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425412/frenzied-assault",
      },
      {
        name: "Furious Thunder",
        icon: ["spell_nature_lightning", null, null, "ability_thunderclap"],
        gear_slot: [LEGS, null, null, LEGS],
        description: [
          "Thunder Clap now increases the time between attacks by an additional 6% and can be used in any stance.",
          null,
          null,
          "Thunder Clap now increases the time between attacks by an additional 6%, can be used in any stance, deals 100% increased damage, and deals 75% increased threat.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=403219/furious-thunder",
      },
      {
        name: "Devastate",
        icon: ["inv_sword_11", null, null, "inv_sword_11"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Sunder Armor also deals 100% weapon damage, increased by 10% per application of Sunder Armor already on the target.",
          null,
          null,
          "While you are in Defensive Stance and have a shield equipped, Sunder Armor also deals damage equal to 150% of your equipped weapon's damage per second, increased by 15% per application of Sunder Armor already on the target. Devastate damage deals a high amount of threat while you are in Defensive Stance.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=403195/devastate",
      },
      {
        name: "Endless Rage",
        icon: ["ability_warrior_innerrage", null, null, "ability_warrior_endlessrage"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "You generate 25% more Rage from all damage you deal.",
          null,
          null,
          "You generate 25% more Rage from all damage you deal.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=403218/endless-rage",
      },
      {
        name: "Quick Strike",
        icon: ["inv_axe_03", null, null, "inv_axe_03"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Quick Strike ability:<br><br>A reckless instant melee attack with your two-handed weapon dealing 49 to 81 physical damage. This ability benefits from and triggers all effects associated with Heroic Strike.",
          null,
          null,
          "Gain the Quick Strike ability:<br><br>A reckless instant melee attack with your two-handed weapon dealing physical damage. This ability benefits from and triggers all effects associated with Heroic Strike.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=429765/quick-strike",
      },
      {
        name: "Single-Minded Fury",
        icon: ["inv_relics_totemofrage", null, null, "ability_warrior_incite"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "While dual-wielding, your Physical damage and movement speed are increased by 10%.",
          null,
          null,
          "While dual-wielding, your movement speed is increased by 10% and you gain 4% attack speed each time your melee auto-attack strikes the same target as your previous auto-attack, stacking up to 5 times. Lasts 10 sec or until your auto-attack strikes a different target.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=413404/single-minded-fury",
      },
      {
        name: "Victory Rush",
        icon: ["ability_warrior_devastate", null, null, "ability_warrior_devastate"],
        gear_slot: [HANDS, null, null, HANDS],
        description: [
          "Gain the Victory Rush ability:<br><br>Instantly attack the target causing 147 damage and healing you for 10% of your maximum health.  Only useable within 20 sec after you kill an enemy that yields experience or honor.",
          null,
          null,
          "Gain the Victory Rush ability:<br><br>Instantly attack the target causing (1 + Attack Power * 45 / 100) damage and healing you for 30% of your maximum health.  Only useable within 20 sec after you kill an enemy that yields experience or honor.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=402927/victory-rush",
      },
      {
        name: "Axe Specialization",
        icon: [null, null, null, "inv_axe_03"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Axes and Two-Handed Axes increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442876/axe-specialization",
      },
      {
        name: "Dagger Specialization",
        icon: [null, null, null, "inv_weapon_shortblade_05"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Daggers increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442887/dagger-specialization",
      },
      {
        name: "Defense Specialization",
        icon: [null, null, null, "inv_shield_06"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Defense skill increased by 25. Not cumulative with other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=459312/defense-specialization",
      },
      {
        name: "Fist Weapon Specialization",
        icon: [null, null, null, "inv_misc_desecrated_plategloves"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Fist Weapons (Unarmed) increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442890/fist-weapon-specialization",
      },
      {
        name: "Mace Specialization",
        icon: [null, null, null, "inv_hammer_01"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Maces and Two-Handed Maces increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442881/mace-specialization",
      },
      {
        name: "Pole Weapon Specialization",
        icon: [null, null, null, "inv_staff_08"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Staves and Polearms increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442892/pole-weapon-specialization",
      },
      {
        name: "Sword Specialization",
        icon: [null, null, null, "ability_meleedamage"],
        gear_slot: [null, null, null, RING],
        description: [
          null,
          null,
          null,
          "Skill with Swords and Two-Handed Swords increased by 5. This effect is not cumulative with racial bonuses or other ring runes.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=442813/sword-specialization",
      },
    ],
  },
});

function extractRuneId(url) {
    const match = url.match(/spell=(\d+)/);
    return match ? parseInt(match[1], 10) : null;
}

export const runeIndex = {};

/*
// Loop through all classes
Object.values(runes.base).forEach(classRunes => {
    if (!classRunes) return; // Some classes may be null

    classRunes.forEach(rune => {
        // Choose current phase index (0-based)
        // You can pick max index if you want all phases
        rune.icon.forEach((icon, phaseIndex) => {
            const link = rune.linkToWoWHead;
            if (!link) return;

            // Generate an ID for this rune
            const id = extractRuneId(link);
            if (!id) return;

            // Attach ID to rune
            if (!rune.id) rune.id = id;

            // Store in index
            runeIndex[id] = {
                ...rune,
                phaseIndex
            };
        });
    });
});
*/

// Build index once
Object.values(runes.base).forEach(classRunes => {
    if (!classRunes) return;

    classRunes.forEach(rune => {
        const id = extractRuneId(rune.linkToWoWHead);
        if (!id) return;

        rune.id = id;          // attach once
        runeIndex[id] = rune;  // canonical source
    });
});