// sod-runes.js

export const runes = Object.freeze({
  base: {
    deathknight: null,
    druid: [
      {
        name: "Gale Winds",
        icon: [null, null, "spell_frost_windwalkon", "ability_druid_galewinds"],
        gear_slot: [null, null, "head", "head"],
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
        gear_slot: [null, null, "head", "head"],
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
        gear_slot: [null, null, "head", "head"],
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
        gear_slot: [null, null, null, "back"],
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
        gear_slot: [null, null, null, "back"],
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
        gear_slot: [null, null, null, "back"],
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
        gear_slot: ["chest", null, null, "chest"],
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
        gear_slot: ["chest", null, null, "chest"],
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
        gear_slot: ["chest", null, null, "chest"],
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
        gear_slot: ["chest", null, null, "chest"],
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
        gear_slot: [null, null, "wrist", "wrist"],
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
        gear_slot: [null, null, "wrist", "wrist"],
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
        gear_slot: [null, null, "wrist", "wrist"],
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
        gear_slot: ["hands", null, null, "hands"],
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
        icon: [null, null, null, "inv_misc_bone_taurenskull_01"],
        gear_slot: ["legs", null, null, "hands"],
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
        gear_slot: ["hands", null, null, "hands"],
        description: [
          "Gain the Sunfire ability:<br><br>Burns the enemy for (130 */ 100) to (152 */ 100) Nature damage and then an additional (65 * 4 */ 100) Nature damage over 12 sec.",
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
        gear_slot: ["hands", null, null, "hands"],
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
        gear_slot: [null, "waist", null, "waist"],
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
        gear_slot: [null, "waist", null, "waist"],
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
        gear_slot: [null, "waist", null, "waist"],
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
        gear_slot: ["hands", null, null, "legs"],
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
        gear_slot: ["legs", null, null, "legs"],
        description: [
          null,
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
        gear_slot: ["legs", null, null, "legs"],
        description: [
          null,
          "Finishing move that increases physical damage done by 30% while in Cat Form.  Lasts longer per combo point.",
          null,
          "Gain the Savage Roar ability:<br><br>Finishing move that increases physical damage done by 30% while in Cat Form. Lasts longer per combo point:<br>1 point : 14 seconds<br>2 points: 19 seconds<br>3 points: 24 seconds<br>4 points: 29 seconds<br>5 points: 34 seconds",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409819/savage-roar",
      },
      {
        name: "Starsurge",
        icon: ["spell_arcane_arcane03", null, null, "spell_arcane_arcane03"],
        gear_slot: ["legs", null, null, "legs"],
        description: [
          null,
          "Launch surging stellar energies that causes (381 / 100 *) to (467 / 100 *) Arcane damage.",
          null,
          "Gain the Starsurge ability:<br><br>Launch surging stellar energies that cause 24.374 to 29.877 Arcane damage, and increases the damage done by your next 1 Starfire cast by 80% for 15 sec.<br><br>Starsurge benefits from and triggers most talents and effects that trigger or benefit from Wrath or Starfire.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=424715/starsurge",
      },
      {
        name: "Dreamstate",
        icon: [null, "spell_nature_sleep", null, "ability_druid_dreamstate"],
        gear_slot: [null, "feet", null, "feet"],
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
        gear_slot: [null, "feet", null, "feet"],
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
        gear_slot: [null, "feet", null, "feet"],
        description: [
          null,
          "When activated, this grants you 30% of your maximum health for 20 sec. After the effect expires, the health is lost. Useable in any form.",
          null,
          "Gain the Survival Instincts ability:<br><br>When activated, this grants you 30% of your maximum health and increases all non-Physical healing you deal by 20% for 20 sec. After the effect expires, the health is lost. Useable in all forms except Moonkin Form.<br><br>In addition, you regenerate 5 rage every time you dodge while in Bear Form or Dire Bear Form, 10 energy while in Cat Form, or 1% of your maximum mana while in any other form.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409809/survival-instincts",
      },
      {
        name: "Arcane Specialization",
        icon: [null, null, null, "inv_elemental_primal_mana"],
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, "head", "head"],
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
        gear_slot: [null, null, "head", "head"],
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
        gear_slot: [null, null, "head", "head"],
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
        gear_slot: [null, null, null, "back"],
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
        gear_slot: [null, null, null, "back"],
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
        gear_slot: [null, null, null, "back"],
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
        gear_slot: ["chest", null, null, null],
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
        gear_slot: ["hands", "hands", "hands", "chest"],
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
        gear_slot: ["chest", "chest", "chest", "chest"],
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
        gear_slot: [null, "chest", "chest", null],
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
        gear_slot: ["chest", "chest", "chest", "chest"],
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
        gear_slot: ["chest", "chest", "chest", "chest"],
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
        gear_slot: [null, null, "wrist", "wrist"],
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
        gear_slot: [null, null, "wrist", "wrist"],
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
        gear_slot: [null, null, "wrist", "wrist"],
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
        gear_slot: ["hands", "hands", "hands", "hands"],
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
        gear_slot: ["hands", "hands", "hands", "hands"],
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
        gear_slot: [null, null, null, "hands"],
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
        gear_slot: ["hands", "hands", "hands", "hands"],
        description: [
          "Gain the Explosive Shot ability:<br><br>You fire an explosive charge into the enemy target, dealing (Ranged attack power * 0.14 + 103 / 100 *)-(Ranged attack power * 0.14 + 155 / 100 *) Fire damage. The charge will blast the target every second for an additional 2 sec. Cooldown shared with Arcane Shot.",
          "Gain the Explosive Shot ability:<br><br>You fire an explosive charge into the enemy target, dealing (Ranged attack power * 0.039 + 36 / 100 *)-(Ranged attack power * 0.039 + 54 / 100 *) Fire damage to all enemies within 8 yards. The charge will deal damage again every second for an additional 2 sec.",
          "Gain the Explosive Shot ability:<br><br>You fire an explosive charge into the enemy target, dealing [Ranged attack power * 0.039 + 41 / 100 * (2.976264 + 0.641066 * 60 + 0.022519 * 60 * 60)]-[Ranged attack power * 0.039 + 63 / 100 * (2.976264 + 0.641066 * 60 + 0.022519 * 60 * 60)] Fire damage to all enemies within 8 yards. The charge will deal damage again every second for an additional 2 sec.",
          "Gain the Explosive Shot ability:<br><br>You fire an explosive charge into the enemy target, dealing [rangedAttackPower * 0.039 + 62 / 100 * (2.976264 + 0.641066 * 60 + 0.022519 * 60 * 60)]-[rangedAttackPower * 0.039 + 94 / 100 * (2.976264 + 0.641066 * 60 + 0.022519 * 60 * 60)] Fire damage to all enemies within 8 yards. The charge will deal damage again every second for an additional 2 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=409978/explosive-shot",
      },
      {
        name: "Aspect of the Viper",
        icon: [null, "ability_hunter_aspectoftheviper", null, null],
        gear_slot: [null, "waist", null, null],
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
        gear_slot: [null, "waist", "waist", "waist"],
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
        gear_slot: [null, "waist", "waist", "waist"],
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
        gear_slot: [null, "waist", "waist", "waist"],
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
        gear_slot: ["legs", "legs", "legs", "legs"],
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
        gear_slot: ["legs", "legs", "legs", null],
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
        gear_slot: [null, null, null, "legs"],
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
        gear_slot: ["legs", "legs", "legs", "legs"],
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
        gear_slot: ["legs", "legs", "legs", "legs"],
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
        gear_slot: [null, "feet", "feet", "feet"],
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
        gear_slot: [null, "feet", "feet", null],
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
        gear_slot: [null, "feet", "feet", "feet"],
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
        gear_slot: [null, null, null, "feet"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, "head", "head"],
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
        gear_slot: [null, null, "head", "head"],
        description: [
          null,
          null,
          "Gain the Deep Freeze ability:<br><br>Stuns the target for 5 sec.  Only usable on Frozen targets.  Deals (462 */ 100) to (538 */ 100) damage to targets permanently immune to Stun.",
          "Gain the Deep Freeze ability:<br><br>Stuns the target for 5 sec. Only usable on Frozen targets. Deals 803.032 to 935.132 damage to targets permanently immune to Stun. This damage benefits from, but does not consume, stacks of Glaciate.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=429303/deep-freeze",
      },
      {
        name: "Hot Streak",
        icon: [null, null, null, "ability_mage_hotstreak"],
        gear_slot: [null, null, null, "head"],
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
        gear_slot: [null, null, "head", "head"],
        description: [
          null,
          null,
          "Gain the Temporal Anomaly ability:<br><br>Launches an orb of temporal energy which slowly moves forward and every 2 sec grants all nearby party members a shield absorbing (100 */ 100) damage for 15 sec.",
          "Gain the Temporal Anomaly ability:<br><br>Launches an orb of temporal energy which slowly moves forward and every 2 sec grants all nearby party members a shield absorbing 173.816 damage for 15 sec. This shield accumulates additional value if party members remain near the orb.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=429305/temporal-anomaly",
      },
      {
        name: "Burnout",
        icon: ["ability_mage_burnout", null, null, "ability_mage_burnout"],
        gear_slot: ["chest", null, null, "chest"],
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
        gear_slot: ["chest", null, null, "chest"],
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
        gear_slot: ["chest", null, null, "chest"],
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
        name: "Balefire Bolt",
        icon: [null, null, "classic_spell_fire_elementaldevastation", "spell_fire_firebolt"],
        gear_slot: [null, null, "wrist", "wrist"],
        description: [
          null,
          null,
          "Gain the Balefire Bolt ability:<br><br>Unleash a reality-distorting burst of raw magic at your enemy, dealing (* 280 / 100) to (* 420 / 100) Spellfire damage.  Each time you cast Balefire Bolt, the damage of your next Balefire Bolt within 30 sec will be increased by 10% and your Spirit will be decreased by 10% for 30 sec, both stacking up to 10 times. If your Spirit reaches 0 as consequence, you will immediately die. This spell will be checked against the lower of the target's Arcane and Fire resists.",
          "Gain the Balefire Bolt ability:<br><br>Unleash a reality-distorting burst of raw magic at your enemy, dealing 486.686 to 730.029 Chimeric damage.<br><br>Increasing your Balefire Bolt and Pyroblast damage by 25%, decreasing your Spirit by 20%, and stacking up to 5 times for 30 sec. If your Spirit reaches 0, you die.<br><br>This spell will be checked against the lower of the target's Arcane, Fire, and Frost resists.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=429310/balefire-bolt",
      },
      {
        name: "Displacement",
        icon: [null, null, "ability_hunter_displacement", "ability_hunter_displacement"],
        gear_slot: [null, null, "wrist", "wrist"],
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
        gear_slot: [null, null, "wrist", "wrist"],
        description: [
          null,
          null,
          "Gain the Molten Armor ability:<br><br>Causes (10 / 100 *) Fire damage when hit, increases your spell critical strike chance by 5%, and reduces the chance you are critically hit by 5%.  Only one type of Armor spell can be active on the Mage at any time.  Lasts 30 min.",
          "Gain the Molten Armor ability:<br><br>Causes 17.382 Fire damage when hit, increases your spell critical strike chance by 5%, and reduces the chance you are critically hit by 5%. Only one type of Armor spell can be active on the Mage at any time. Lasts 30 min.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=429307/molten-armor",
      },
      {
        name: "Rewind Time",
        icon: [null, null, null, "spell_holy_borrowedtime"],
        gear_slot: [null, null, null, "wrist"],
        description: [
          null,
          null,
          null,
          "Your current target with your Temporal Beacon instantly heals all damage taken over the last 5 seconds. Ineffective on targets that did not have a Temporal Beacon 5 seconds ago.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401734/rewind-time",
      },
      {
        name: "Arcane Blast",
        icon: [null, null, null, "spell_arcane_blast"],
        gear_slot: [null, null, null, "hands"],
        description: [
          null,
          null,
          null,
          "Gain the Arcane Blast ability:<br><br>Blasts the target with energy, dealing 787.388 to 916.013 Arcane damage. Each time you cast Arcane Blast, the damage of all other Arcane spells is increased by 15% and mana cost of Arcane Blast is increased by 175%. Effect stacks up to 4 times and lasts 6 sec or until any other Arcane damage spell is cast.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401729/arcane-blast",
      },
      {
        name: "Ice Lance",
        icon: [null, null, null, "spell_frost_frostblast"],
        gear_slot: [null, null, null, "hands"],
        description: [
          null,
          null,
          null,
          "Gain the Ice Lance ability:<br><br>Deals 95.599 to 112.981 Frost damage to an enemy target. Causes 400% damage against Frozen targets.<br><br>When your other frost spells deal damage to a non-player controlled target, they increase the target's damage taken from your next Ice Lance by 20%. This effect stacks up to 5 times and requires the Winter's Chill talent.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401732/ice-lance",
      },
      {
        name: "Living Bomb",
        icon: [null, null, null, "ability_mage_livingbomb"],
        gear_slot: [null, null, null, "hands"],
        description: [
          null,
          null,
          null,
          "Gain the Living Bomb ability:<br><br>The target becomes a Living Bomb, taking 590.976 Fire damage over 12 sec. After 12 sec or when the spell is dispelled, the target explodes dealing 297.226 Fire damage to all enemies within 10 yards.<br><br>Living Bomb benefits from all talents and effects that trigger from or modify Scorch.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401731/living-bomb",
      },
      {
        name: "Frostfire Bolt",
        icon: [null, null, null, "ability_mage_frostfirebolt"],
        gear_slot: [null, null, null, "waist"],
        description: [
          null,
          null,
          null,
          "Gain the Frostfire Bolt ability:<br><br>Launches a bolt of frostfire at the enemy, causing 564.903 to 658.764 Frostfire damage, slowing movement speed by 40% and causing an additional 62.574 Frostfire damage over 9 sec. This spell will be checked against the lower of the target's Frost and Fire resists and counts as both Frost and Fire damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401735/frostfire-bolt",
      },
      {
        name: "Missile Barrage",
        icon: [null, null, null, "ability_mage_missilebarrage"],
        gear_slot: [null, null, null, "waist"],
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
        gear_slot: [null, null, null, "waist"],
        description: [
          null,
          null,
          null,
          "Gain the Spellfrost Bolt ability:<br><br>Launches a bolt of spellfrost at the enemy, causing 530.14 to 617.048 Spellfrost damage and slowing movement speed by 40% for 9 sec. This spell will be checked against the lower of the target's Frost and Arcane resists and counts as both Frost and Arcane damage.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=415734/spellfrost-bolt",
      },
      {
        name: "Arcane Surge",
        icon: [null, null, null, "spell_arcane_arcanetorrent"],
        gear_slot: [null, null, null, "legs"],
        description: [
          null,
          null,
          null,
          "Gain the Arcane Surge ability:<br><br>Unleash all of your remaining mana in a surge of energy focused at the target dealing 392.825 to 458.875 Arcane damage, increased by up to 300% based on your mana remaining. Afterward, your normal mana regeneration is activated and increased by 300% for 8 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425168/arcane-surge",
      },
      {
        name: "Icy Veins",
        icon: [null, null, null, "spell_frost_coldhearted"],
        gear_slot: [null, null, null, "legs"],
        description: [
          null,
          null,
          null,
          "Gain the Icy Veins ability:<br><br>Hastens your spellcasting, increasing spell casting speed by 20% and reduces the pushback suffered from damaging attacks while casting by 100%. Lasts 20 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=425169/icy-veins",
      },
      {
        name: "Living Flame",
        icon: [null, null, null, "spell_fire_masterofelements"],
        gear_slot: [null, null, null, "legs"],
        description: [
          null,
          null,
          null,
          "Gain the Living Flame ability:<br><br>Summons a spellfire flame that moves toward the target, leaving a trail of spellfire. This trail deals 173.816 Spellfire damage every second to nearby enemies. Lasts 10 sec.",
        ],
        linkToWoWHead:
          "https://www.wowhead.com/classic/spell=401744/living-flame",
      },
      {
        name: "Brain Freeze",
        icon: [null, null, null, "ability_mage_brainfreeze"],
        gear_slot: [null, null, null, "feet"],
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
        gear_slot: [null, null, null, "feet"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        name: "Axe Specialization",
        icon: [null, null, null, "inv_axe_03"],
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        name: "Dagger Specialization",
        icon: [null, null, null, "inv_weapon_shortblade_05"],
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
    rogue: [
      {
        name: "Dagger Specialization",
        icon: [null, null, null, "inv_weapon_shortblade_05"],
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        name: "Axe Specialization",
        icon: [null, null, null, "inv_axe_03"],
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        name: "Dagger Specialization",
        icon: [null, null, null, "inv_weapon_shortblade_05"],
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        name: "Axe Specialization",
        icon: [null, null, null, "inv_axe_03"],
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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
        gear_slot: [null, null, null, "ring"],
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