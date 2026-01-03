// race-class-combos.js

import { classes } from '../classes.js';
import { weaponItems } from './weapon-items.js';
import { armor } from './armor.js';

let DEATHKNIGHT = classes.DEATHKNIGHT;
let DRUID = classes.DRUID;
let HUNTER = classes.HUNTER;
let MAGE = classes.MAGE;
let PALADIN = classes.PALADIN;
let PRIEST = classes.PRIEST;
let ROGUE = classes.ROGUE;
let SHAMAN = classes.SHAMAN;
let WARLOCK = classes.WARLOCK;
let WARRIOR = classes.WARRIOR;

let DAGGER = weaponItems.ONE_HANDED.DAGGER;
let FIST_WEAPON = weaponItems.ONE_HANDED.FIST_WEAPON;
let ONE_HANDED_AXE = weaponItems.ONE_HANDED.AXE;
let ONE_HANDED_FLAIL = weaponItems.ONE_HANDED.MISCELLANEOUS.FLAIL;
let ONE_HANDED_MACE = weaponItems.ONE_HANDED.MACE;
let ONE_HANDED_STAFF = weaponItems.ONE_HANDED.STAFF;
let ONE_HANDED_SWORD = weaponItems.ONE_HANDED.SWORD;
let WARGLAIVE = weaponItems.ONE_HANDED.MISCELLANEOUS.WARGLAIVE;
let MOONGLAIVE = weaponItems.ONE_HANDED.MISCELLANEOUS.MOONGLAIVE;
let POLEARM = weaponItems.TWO_HANDED.POLEARM;
let TWO_HANDED_AXE = weaponItems.TWO_HANDED.AXE;
let TWO_HANDED_FLAIL = weaponItems.TWO_HANDED.MISCELLANEOUS.FLAIL;
let TWO_HANDED_MACE = weaponItems.TWO_HANDED.MACE;
let TWO_HANDED_STAFF = weaponItems.TWO_HANDED.STAFF;
let TWO_HANDED_SWORD = weaponItems.TWO_HANDED.SWORD;
let UMBRA_CRESCENT = weaponItems.TWO_HANDED.MISCELLANEOUS.UMBRA_CRESCENT;
let BOW = weaponItems.RANGED.BOW;
let CROSSBOW = weaponItems.RANGED.CROSSBOW;
let GUN = weaponItems.RANGED.GUN;
let WAND = weaponItems.RANGED.WAND;
let THROWN_DAGGER = weaponItems.RANGED.THROWN.DAGGER;
let THROWN_AXE = weaponItems.RANGED.THROWN.AXE;
let THROWN_HAMMER = weaponItems.RANGED.THROWN.HAMMER;
let THROWN_SPEAR = weaponItems.RANGED.THROWN.SPEAR;
let THROWN_GLAIVE = weaponItems.RANGED.THROWN.GLAIVE;
let THROWN_VIAL = weaponItems.RANGED.THROWN.VIAL;
let MISCELLANEOUS = weaponItems.OTHER.MISCELLANEOUS.GENERAL;
let MISCELLANEOUS_ENGINEERING = weaponItems.OTHER.MISCELLANEOUS.ENGINEERING;
let MISCELLANEOUS_ALCHEMY = weaponItems.OTHER.MISCELLANEOUS.ALCHEMY;
let OFF_HAND = armor.OTHER.OFF_HAND;
let BUCKLER = armor.OTHER.SHIELD.BUCKLER;
let TARGE = armor.OTHER.SHIELD.TARGE;
let HEATER = armor.OTHER.SHIELD.HEATER;
let TOWER = armor.OTHER.SHIELD.TOWER;
let KITE = armor.OTHER.SHIELD.KITE;
let IDOL = armor.RELICS.IDOL;
let LIBRAM = armor.RELICS.LIBRAM;
let WARD = armor.RELICS.WARD;

let CLOTH = armor.TYPES.CLOTH;
let LEATHER = armor.TYPES.LEATHER;
let MAIL = armor.TYPES.MAIL;
let PLATE = armor.TYPES.PLATE;

export const raceClassCombos = [
    {
        id: "teachings_of_the_moknathal",
        title: "Teachings of the Mok'Nathal",
        icon: "ability_hunter_beastwithin",
        requiresLevel: 40,
        characterLabel: /* Level X Orc Hunter [*/"Beastmaster"/*] (Player) */,
        requiresPointsinSpec: [31, "Beast Mastery"],
        requiresPointsInTalents: 
        {
            "Beast Mastery": 
            [
                ["Spirit Bond", 2], 
                ["Bestial Wrath", 1], 
            ]
        },
        requiresReputation: null,
        applicableTo: { race: ["Orc (Male)"], class: [HUNTER] },
        canWield: [ONE_HANDED_AXE, THROWN_AXE],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER],
        focus: "Melee-oriented beast handling that blends warrior techniques with primal ferocity in close combat.",
        keySpells: [
            "Aspect of the Beast",
            "Kill Command",
            "Bestial Wrath",
            "Master's Call",
            "Call of the Wild",
            "Flanking Strike"
        ],
        description: "Use: Teaches you to hunt like a true Mok'Nathal, fighting in the thick of battle alongside your beasts. You abandon the Marksmanship specialization and give up the use of ranged \
            weapons except for thrown weapons, embracing Beast Mastery as your sole focus. Your prowess is strengthened by melee techniques drawn from the Arms and Fury Warrior trees, including Cleave, \
            Rend and Overpower. Your skill with thrown weapons is honed, increasing Throw's attack speed by 30% and allowing you to Throw while moving. You also gain the ability to call upon additional \
            animal companions for a short time, overwhelming your enemies with the raw force of the wild.",
        removedSpells: [
            "Frost Trap", 
            "Freezing Trap", 
            "Immolation Trap", 
            "Explosive Trap",
            "Arcane Shot",
            "Auto-Shot",
            "Concussive Shot",
            "Distracting Shot",
            "Multi-Shot",
            "Hunter's Mark",
            "Flare",
            "Serpent Sting",
            "Viper Sting",
            "Scorpid Sting",
            "Volley"
        ],
        addedSpells: [
            "Master's Call",
            "Call of the Wild",
            "Flanking Strike"
        ],
        borrowedSpells: {
            Warrior: 
            [
            "Cleave",
            "Rend",
            "Overpower"
            ]
        },
        removedSpecs: ["Marksmanship"],
        limitedSpecs: null,
        notes: "These hunters are trained in the ways of the Mok'Nathal, combining feral instinct with disciplined melee combat — they are durable, aggressive, and can always count on their beast \
            companions to face any adversity they encounter.",
        availableAt: ["tbc", "wotlk"],
        heroTier: "Path of the Beast"
    },
    {
        id: "dark_rangers_covenant",
        title: "Dark Ranger's Covenant",
        icon: "spell_shadow_painspike",
        requiresLevel: 40,
        characterLabel: /* Level X Undead High Elf Hunter [*/"Dark Ranger"/*] (Player) */,
        requiresPointsinSpec: [31, "Marksmanship"],
        requiresReputation: null,
        applicableTo: { race: ["Undead High Elf (Female)"], class: [HUNTER] },
        canWield: [DAGGER, ONE_HANDED_SWORD, BOW],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER, MAIL],
        focus: "Ranged combat that replaces attunement to the wilds with silence, control, and necrotic arrows.",
        keySpells: [
            "Aimed Shot",
            "Auto Shot",
            "Multi-Shot",
            "Silence",
            "Drain Life",
            "Black Arrow",
            // Cold Arrow,
            // Evasion
        ],
        description: "Use: Binds you to the path of the Dark Ranger. You forsake primal instincts and sever your bond to the wilds. Beast Mastery is no longer an option. Only undead pets may answer your \
            call. Crude traps and animal poisons are abandoned in favor of those fitting a cold and merciless hunter.<br><br>\
            Your focus shifts to stealth, control and shadow magic. Your auto shot now deals Shadow damage, allowing it to bypass armor. You learn Silence, allowing you to suppress spellcasting in a \
            targeted area, and Drain Life, a channeled spell that siphons health from your enemy.<br><br>\
            You also gain access to Black Arrow, enhancing your ranged attacks with shadow energy. While the effect is active, enemies struck down by your arrows may briefly rise to serve your will.",
        removedSpells: [
            "Frost Trap", 
            "Freezing Trap", 
            "Immolation Trap", 
            "Explosive Trap", 
            "Serpent Sting", 
            "Viper Sting", 
            "Scorpid Sting", 
            "Tame Beast", 
            "Mend Pet", 
            "Revive Pet", 
            "Aspect of the Hawk", 
            "Aspect of the Monkey", 
            "Aspect of the Beast", 
            "Aspect of the Wild", 
            "Aspect of the Cheetah", 
            "Aspect of the Pack"
        ],
        addedSpells: [
            "Silence",
            "Drain Life",
            "Black Arrow"
        ],
        removedSpecs: ["Beast Mastery"],
        limitedSpecs: null,
        notes: "Cold, calculating, and cunning archers taught by the Dark Rangers and serving under the banner of the banshee queen.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Silence"
    },
    /*
    {
        id: "grimoire_of_demon_hunting",
        title: "Grimoire of Demon Hunting",
        icon: "spell_fire_immolation",
        requiresLevel: 40,
        requiresPointsinSpec: null,
        requiresReputation: null,
        applicableTo: { race: ["Night Elf (Male)"], class: ["Warrior"] },
        laterOn: { race: ["Blood Elf (Male)"], class: ["Warrior"], expansion: ["tbc"] },
        canWield: ["One-Handed Warglaive", "Thrown (Warglaive)"],
        canDualWield: true,
        focus: "Fel-enhanced melee combat that trades heavy armor and protection for agility, evasion, and burning vengeance.",
        keySpells: [
            "Sinister Strike",
            "Evasion",
            "Mana Burn",
            "Immolation Aura",
            "Mind Lock",
            "Soul Siphon"
        ],
        description: "Use: Binds you to the path of the Demon Hunter. You forsake the Protection specialization and heavy armor, embracing agility, fel magic, and disciplined fury. You abandon brute-force techniques such as Mortal Strike and Bloodthirst, retaining only those melee skills that reflect a swift, evasive fighting style. You gain access to Evasion and Mana Burn, and unlock Immolation Aura — a fel shroud that scorches nearby enemies, dampens magic, and fuels your fire-touched strikes. Shields and mail armor are no longer available to you, but in their place you become a living weapon - elusive, fel-charged, and relentless.",
        removedSpells: [
            "Heroic Strike",
            "Shield Block", 
            "Shield Slam", 
            "Defensive Stance",
            "Battle Stance",
            "Berserker Stance",
            "Berserker Rage",
        ],
        addedSpells: [
            "Mana Burn",
            "Immolation Aura"
        ],
        removedSpecs: ["Protection"],
        limitedSpecs: [21, "Arms"],
        notes: "Training under the pupils of Illidan, these Demon Hunter initiates are swift, magic-burning rogue combatants channeling fel energy in melee combat.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Vengeance"
    },
    */
    /*
    {
        id: "grimoire_of_demon_hunting",
        title: "Grimoire of Demon Hunting",
        icon: "spell_fire_immolation",
        requiresLevel: 40,
        requiresPointsinSpec: null,
        requiresReputation: null,
        applicableTo: { race: ["Night Elf (Male)"], class: [ROGUE, WARRIOR] },
        laterOn: { race: ["Blood Elf (Male)"], class: [ROGUE, WARRIOR], expansion: ["tbc"] },
        canWield: [ONE_HANDED_WARGLAIVE, FIST_WEAPON, THROWN_WARGLAIVE],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER],
        focus: "Fel-enhanced melee combat that trades heavy armor and protection for agility, evasion, and burning vengeance.",
        keySpells: [
            "Sinister Strike",
            "Evasion",
            "Mana Burn",
            "Immolation Aura",
            "Mind Lock",
            "Soul Siphon",
            "Throw"
        ],
        description: "Use: Binds you to the path of the Demon Hunter. You forsake the Protection specialization and heavy armor, embracing agility, fel magic, and disciplined fury. You abandon brute-force techniques such as Mortal Strike and Bloodthirst, retaining only those melee skills that reflect a swift, evasive fighting style. You gain access to Evasion and Mana Burn, and unlock Immolation Aura — a fel shroud that scorches nearby enemies, dampens magic, and fuels your fire-touched strikes. Shields and mail armor are no longer available to you, but in their place you become a living weapon - elusive, fel-charged, and relentless.",
        removedSpells: {
            Rogue: 
            [
            "Vanish",
            "Poisons",
            "Garrote",
            "Rupture",
            "Eviscerate",
            "Backstab",
            "Kidney Shot",
            "Cheap Shot",
            "Blind",
            "Kick",
            "Sap",
            "Gouge",
            "Pick Lock",
            "Pick Pocket",
            "Distract",
            "Feint",
            "Sprint",
            "Disarm Trap"
            ],
            Warrior: 
            [
            "Defensive Stance",
            "Battle Stance",
            "Berserker Stance",
            "Heroic Strike",
            "Shield Slam",
            "Shield Bash",
            "Slam",
            "Thunder Clap",
            "Demoralizing Shout",
            "Challenging Shout",
            "Pummel",
            "Recklessness",
            "Bloodrage",
            "Berserker Rage",
            "Overpower",
            "Sunder Armor"
            ],
        },
        addedSpells: [
            "Mana Burn",
            "Immolation Aura",
            "Mind Lock",
            "Soul Siphon"
        ],
        borrowedSpells: {
            Rogue: 
            [
            "Sinister Strike",
            "Slice and Dice",
            "Evasion",
            "Expose Armor",
            "Ambush",
            "Stealth",
            "Safe Fall",
            "Detect Traps"
            ],
            Warrior: 
            [
            "Cleave",
            "Whirlwind",
            "Rend",
            "Charge",
            "Hamstring",
            "Intercept",
            "Taunt",
            "Mocking Blow",
            "Disarm",
            "Execute",
            "Intimidating Shout",
            "Battle Shout",
            "Revenge"
            ]
        },
        removedSpecs: null,
        removedSpecificTalents: {
            Rogue: 
            {
                Assassination: ["Improved Eviscerate", "Vile Poisons", "Improved Poisons", "Improved Kidney Shot"],
                Combat: ["Improved Gouge", "Improved Backstab", "Improved Sprint", "Improved Kick", "Dagger Specialization", "Mace Specialization", "Fist Weapon Specialization"],
                Subtlety: ["Sleight of Hand", "Elusiveness", "Improved Sap", "Dirty Deeds"]
            },
        },
        limitedSpecs: null,
        notes: "Training under the pupils of Illidan, these Demon Hunter initiates are swift, magic-burning rogue combatants channeling fel energy in melee combat.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Vengeance"
    },
    */
    {
        id: "grimoire_of_demon_hunting",
        title: "Grimoire of Demon Hunting",
        icon: "spell_fire_immolation",
        requiresLevel: 40,
        characterLabel: /* Level X Night Elf Rogue [*/"Demon Hunter"/*] (Player) */,
        requiresPointsinSpec: [31, "Combat"],
        requiresReputation: null,
        applicableTo: { race: ["Night Elf (Male)"], class: [ROGUE] },
        laterOn: { race: ["Blood Elf (Male)"], class: [ROGUE], expansion: ["tbc"] },
        canWield: [WARGLAIVE, ONE_HANDED_SWORD, FIST_WEAPON, THROWN_GLAIVE],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER],
        focus: "Fel-enhanced melee combat that trades heavy armor and protection for agility, evasion, and burning vengeance.",
        keySpells: [
            "Sinister Strike",
            "Evasion",
            "Mana Burn",
            "Immolation Aura",
            "Mind Lock",
            "Soul Siphon",
            "Throw",
            "Sense Demons",
            "Sense Undead"
        ],
        description: "Use: Binds you to the path of the Demon Hunter. You forsake the Protection specialization and heavy armor, embracing agility, fel magic, and disciplined fury. You abandon brute-force \
            techniques such as Mortal Strike and Bloodthirst, retaining only those melee skills that reflect a swift, evasive fighting style. You gain access to Evasion and Mana Burn, and unlock Immolation \
            Aura — a fel shroud that scorches nearby enemies, dampens magic, and fuels your fire-touched strikes. Shields and mail armor are no longer available to you, but in their place you become a \
            living weapon - elusive, relentless, and charged with demonic power.",
        removedSpells: {
            Rogue: 
            [
            "Vanish",
            "Poisons",
            "Garrote",
            "Rupture",
            "Eviscerate",
            "Backstab",
            "Kidney Shot",
            "Cheap Shot",
            "Blind",
            "Kick",
            "Sap",
            "Gouge",
            "Pick Lock",
            "Pick Pocket",
            "Distract",
            "Feint",
            "Sprint",
            "Disarm Trap"
            ],
           /*
            Warrior: 
            [
            "Defensive Stance",
            "Battle Stance",
            "Berserker Stance",
            "Heroic Strike",
            "Shield Slam",
            "Shield Bash",
            "Slam",
            "Hamstring",
            "Cleave",
            "Thunder Clap",
            "Demoralizing Shout",
            "Challenging Shout",
            "Pummel",
            "Recklessness",
            "Bloodrage",
            "Berserker Rage",
            "Overpower",
            "Sunder Armor"
            ],
            */
        },
        addedSpells: [
            "Mana Burn",
            "Immolation Aura",
            "Mind Lock",
            "Soul Siphon",
            "Sense Demons",
            "Sense Undead"
        ],
        borrowedSpells: {
            /*
            Rogue: 
            [
            "Sinister Strike",
            "Slice and Dice",
            "Evasion",
            "Expose Armor",
            "Ambush",
            "Stealth",
            "Safe Fall",
            "Detect Traps"
            ],
            */
            Warrior: 
            [
            "Whirlwind",
            "Rend",
            "Charge",
            "Intercept",
            "Taunt",
            "Mocking Blow",
            "Disarm",
            "Execute",
            "Intimidating Shout",
            "Battle Shout",
            "Revenge"
            ]
        },
        removedSpecs: null,
        removedSpecificTalents: {
            Rogue: 
            {
                Assassination: ["Improved Eviscerate", "Vile Poisons", "Improved Poisons", "Improved Kidney Shot"],
                Combat: ["Improved Gouge", "Improved Backstab", "Improved Sprint", "Improved Kick", "Dagger Specialization", "Mace Specialization"],
                Subtlety: ["Sleight of Hand", "Elusiveness", "Improved Sap", "Dirty Deeds"]
            },
            /*
            Warrior: 
            {
                Arms: [
                    "Improved Heroic Strike", "Tactical Mastery", "Improved Thunder Clap", "Improved Overpower", "Anger Management", "Deep Wounds", "Two-Handed Weapon Specialization",
                    "Impale", "Axe Specialization", "Mace Specialization", "Polearm Specialization", "Improved Hamstring"
                ],
                Fury: [
                    "Booming Voice", "Improved Demoralizing Shout", "Improved Cleave", "Blood Craze", "Improved Battle Shout", "Improved Slam", "Death Wish", "Improved Berserker Rage", "Bloodthirst"
                ],
                Protection: [
                    "Shield Specialization", "Improved Bloodrage", "Toughness", "Iron Will", "Last Stand", "Improved Shield Block", "Improved Sunder Armor", "Improved Shield Wall", 
                    "Concussion Blow", "One-Handed Weapon Specialization", "Shield Slam"
                ]
            },
            */
        },
        borrowedSpecificTalents: {
            /*
            Rogue: 
            {
                Assassination: [
                    "Ruthlessness", "Improved Slice and Dice", "Relentless Strikes", "Seal Fate", "Vigor"
                ],
                Combat: [
                    "Improved Sinister Strike", "Lightning Reflexes", "Deflection", "Precision", "Riposte", "Dual Wield Specialization", "Sword Specialization", 
                    "Fist Weapon Specialization"
                ],
                Subtlety: [
                    "Serrated Blades", "Heightened Senses"
                ]
            },
            */
            Warrior: 
            {
                Arms: [
                    "Improved Charge", "Sweeping Strikes", "Mortal Strike", 
                ],
                Fury: [
                    "Improved Execute", "Improved Intercept", "Flurry",
                ],
                Protection: [
                    "Anticipation", "Improved Taunt",
                ]
            },
        },
        limitedSpecs: null,
        notes: "Training under the pupils of Illidan, these Demon Hunter initiates are swift, magic-burning rogue combatants channeling fel energy in melee combat.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Vengeance"
    },
    {
        id: "scroll_of_the_blademaster",
        title: "Scroll of the Blademaster",
        icon: "ability_whirlwind",
        requiresLevel: 40,
        characterLabel: /* Level X Orc Warrior [*/"Blademaster"/*] (Player) */,
        requiresPointsinSpec: [31, "Arms"],
        requiresReputation: ["Burning Blade", "Exalted"],
        applicableTo: { race: ["Orc (Male)"], class: [WARRIOR] },
        canWield: [TWO_HANDED_SWORD, THROWN_DAGGER],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER, MAIL],
        focus: "Mastery of precision swordsmanship enhanced by discipline and illusion, favoring speed, deception, and ruthless efficiency over brute strength.",
        keySpells: [
            "Whirlwind",
            "Sweeping Strikes",
            "Wind Walk",
            "Mirror Image",
        ],
        description: "Use: Trains you in the path of the elite swordsmen bound to the Burning Blade clan. You forsake the Protection specialization, shields, and most heavy armor — especially on the chest \
            and shoulders. You fight with speed, illusion, and precision, gaining access to Wind Walk and Mirror Image. You strike with refined precision through Whirlwind and Sweeping Strikes, favoring \
            blades over brute force. You are no longer a front-line brute, but a ghost on the battlefield—swift, disciplined, and deadly.",
        removedSpells: [
            "Shield Bash",
            "Shield Block", 
            "Shield Wall",
            "Berserker Stance",
            "Berserker Rage",
            "Recklessness",
            "Thunder Clap",
        ],
        addedSpells: [
            "Wind Walk",
            "Mirror Image",
        ],
        removedSpecs: null,
        limitedSpecs: null,
        notes: "Agile, elusive, and deadly. These apprentice swordsmen embody the Burning Blade's blend of martial precision and honor.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of the Blade"
    },
    {
        id: "tome_of_the_mountain_king",
        title: "Tome of the Mountain King",
        icon: "ability_racial_avatar",
        requiresLevel: 40,
        characterLabel: /* Level X Dwarf Warrior [*/"Mountain King"/*] (Player) */,
        requiresPointsinSpec: null,
        requiresReputation: null,
        applicableTo: { race: ["Dwarf (Male)"], class: [WARRIOR] },
        canWield: [ONE_HANDED_AXE, ONE_HANDED_MACE, THROWN_HAMMER],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER, MAIL, PLATE],
        focus: "An unyielding combat style rooted in dwarven fortitude and might, wielding heavy weapons and thunderous strikes to crush foes.",
        keySpells: [
            "Stoneform",
            "Thunder Clap",
            "Storm Bolt",
        ],
        description: "Use: Trains you in the ways of the Thanes, the unyielding warriors of Khaz Modan. You abandon shield tactics and swords, favoring the crushing power of axes and hammers in combat. Your \
            style blends unshakable endurance with fierce offense, focusing on direct engagement and raw strength. You also gain access to Storm Bolt, a powerful concussive strike that exemplifies dwarven \
            might. You are trained to endure where others fall, channeling the very stone of the mountain into your strikes.",
        removedSpells: [
            "Shield Block", "Shield Slam", "Defensive Stance", "Whirlwind"
        ],
        addedSpells: [
            "Storm Bolt",
        ],
        addedPassives: [
            "Strength Advancement",  
            "Giant Slayer"           // additional damage against Giant enemies
        ],
        removedSpecs: null,
        limitedSpecs: [21, "Protection"],
        notes: "Stoic, commanding, and indomitable. These aspiring warriors focus on raw physical dominance and the heritage of Khaz Modan.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of the Mountain"
    },
    {
        id: "sigil_of_the_warden",
        title: "Sigil of the Warden",
        icon: "ability_rogue_findweakness",
        requiresLevel: 40,
        characterLabel: /* Level X Night Elf Rogue [*/"Warden"/*] (Player) */,
        requiresPointsinSpec: [31, "Assassination"],
        requiresReputation: null,
        applicableTo: { race: ["Night Elf (Female)"], class: [ROGUE] },
        canWield: [DAGGER, UMBRA_CRESCENT, THROWN_DAGGER, OFF_HAND],
        canDualWield: null,
        armorTypes: [CLOTH, LEATHER, MAIL, PLATE],
        focus: "Disciplined pursuit and retribution through precise, lawful strikes — justice delivered by blade, shadow, and grace.",
        keySpells: [
            "Shadowmeld",
            "Fan of Knives",
            "Blink",
            "Shadow Strike",
            "Slow Poison"
        ],
        description: "Use: Trains you in the ways of the Wardens, the enforcers of Kaldorei justice. You retain your rogue training, but abandon cruel or dishonorable methods. Abilities like Vanish, Pick \
            Pocket, Sap, Blind, Garrote, and Rupture are no longer part of your arsenal. You wield only elegant weapons and favor swift pursuit and inescapable justice through techniques such as Fan of \
            Knives, Blink, and Shadow Strike. Steeped in tradition, you hunt fugitives not from the shadows, but from purpose.",
        removedSpells: [
            "Vanish", 
            "Pick Pocket", 
            "Sap", 
            "Blind", 
            "Garrote", 
            "Rupture"
        ],
        addedSpells: [
            "Fan of Knives",
            "Blink",
            "Shadow Strike",
        ],
        removedSpecs: null,
        limitedSpecs: null,
        notes: "These disciplined enforcers embody the Watchers' balance of stealth and conviction in service of Kaldorei justice.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Justice"
    },
    {
        id: "way_of_the_forest",
        title: "Way of the Forest",
        icon: "ability_trueshot",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Marksmanship"],
        requiresReputation: ["Silverwing Sentinels", "Exalted"],
        applicableTo: { race: ["Night Elf (Female)"], class: [HUNTER] },
        canWield: [POLEARM, ONE_HANDED_SWORD, MOONGLAIVE, THROWN_GLAIVE, BOW, BUCKLER, KITE],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER, MAIL],
        focus: "Marksmanship perfected through discipline and unity with the wilds — a hunter's path defined by swiftness, precision, and command of the battlefield.",
        keySpells: [
            "Auto Shot",
            "Shadowmeld",
            "Trueshot Aura",
            "Scout",           // "Eyes of the Beast"
            "Searing Arrows",
            "Sentinel",
            "Throw"
        ],
        description: "Use: Trains you in the way of the proud archers of Kalimdor who strike swiftly and vanish into the forest's embrace. You deepen your focus on Marksmanship, drawing strength from the \
            cunning and speed of your kin. You gain the ability to summon a scouting owl to reveal distant threats, ignite your arrows with magical fire, and inspire nearby allies with your precision. You \
            fight as a disciplined hunter—silent, swift, and deadly from the shadows.",
        removedSpells: [
            "Frost Trap",
            "Freezing Trap",
            "Immolation Trap",
            "Explosive Trap",
            "Arcane Shot",
            "Mongoose Bite",
            "Raptor Strike"
        ],
        addedSpells: [
            "Scout",
            "Searing Arrows",
            "Ensnare"           // net trap
        ],
        removedSpecs: null,
        limitedSpecs: null,
        notes: "Members of the Sentinel Army and vigilant guardians of Ashenvale who embody grace, accuracy, and woodland warfare.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Cunning"
    },
    {
        id: "verdant_oath_of_the_grove",
        title: "Verdant Oath of the Grove",
        icon: "spell_nature_stranglevines",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Balance"],
        requiresReputation: null,
        applicableTo: { race: ["Night Elf (Male)"], class: [DRUID] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, OFF_HAND, IDOL],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER],
        focus: "Total devotion to the living forest — channeling nature's wrath and renewal without reliance on shapeshifting or moonlit arcana.",
        keySpells: [
            "Entangling Roots",
            "Thorns",
            "Force of Nature",
            "Wrath",
            "Healing Touch",
            "Spore Cloud",
            "Sleep",
            "Strangle Vines",
            "Barkskin"
        ],
        description: "Use: Binds you to the path of nature's ancient wardens. You abandon the power of the moon and sever your ties to the feral forms, devoting yourself wholly to the will of the \
            forest.<br><br>\
            Your Balance spells deepen in power and purpose. Wrath becomes an extension of your will, allowing you to cast it without effort, and in the heat of battle, your strikes may grant the clarity \
            to instantly call upon healing energies. You command treants to defend the wilds, ensnare enemies with living roots, and channel nature's grace through a revitalized Tranquility.<br><br>\
            No longer a shapeshifter nor arcanist, you stand as a devoted follower of the of the Keepers - resolute, and rooted in the ancient rhythms of the land.",
        removedSpells: [
            "Starfire", 
            "Moonfire", 
            "Faerie Fire", 
            "Rejuvenation", 
            "Bear Form", 
            "Cat Form", 
            "Travel Form", 
            "Aquatic Form"
        ],
        removedSpecs: ["Feral Combat"],
        limitedSpecs: null,
        notes: "Emulating the path taught by the Keepers of the Grove, these druids stand rooted in balance, commanding treants and life's restorative flow.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of the Grove"
    },
    {
        id: "omen_of_spirits",
        title: "Omen of Spirits",
        icon: "spell_shaman_spiritlink",
        requiresLevel: 40,
        characterLabel: /* Level X Tauren Priest [*/"Spirit Walker"/*] (Player) */,
        requiresPointsinSpec: null,
        requiresReputation: null,
        applicableTo: { race: ["Tauren (Male)"], class: [PRIEST] },
        canWield: [ONE_HANDED_STAFF, ONE_HANDED_AXE, OFF_HAND],
        canDualWield: false,
        armorTypes: [CLOTH],
        focus: "Communion with ancestral spirits to heal, protect, and transcend the mortal realm — balancing life and memory through spiritual harmony.",
        keySpells: [
            "Ethereal Form",
            "Binding Heal",
            "Dispel Magic",
            "Spirit Link",
            "Ancestral Spirit",
            "Kindred Spirits"
        ],
        description: "Use: Guides you on the path of the Spirit Walker, reclusive mystics who walk between the physical and spiritual worlds. You set aside all shadow magic and overt displays of faith, \
            forgoing spells like Holy Nova, Smite, Holy Fire, Resurrection, and Power Word: Shield. Instead, you channel ancestral rites to link allies, dispel harmful enchantments, and restore fallen kin. \
            You also gain the ability to shift into Ethereal Form, becoming temporarily immune to physical harm. Your spirit-touched form is naturally resistant to hostile spells and weakening effects. You \
            are no longer merely a priest — you are a vessel of memory and myth.",
        removedSpells: [
            "Holy Nova", "Smite", "Holy Fire", "Prayer of Healing", "Inner Fire", "Resurrection", 
            "Power Word: Shield", "Power Word: Fortitude", "Mind Blast", "Mind Control", "Shadow Word: Pain", 
            "Psychic Scream", "Mana Burn", "Shadow Protection", "Mind Vision", "Mind Soothe"
        ],
        removedSpecs: ["Discipline", "Holy", "Shadow"],
        limitedSpecs: null,
        newSpecs: [["custom1"]],
        notes: "These reclusive mystics bridge the physical and ethereal worlds, serving as living conduits of Tauren ancestral memory.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of the Wanderer"
    },
    {
        id: "tinkers_instruction_manual",
        title: "Tinker's Instruction Manual",
        icon: "inv_misc_enggizmos_27",
        requiresLevel: 40,
        characterLabel: /* Level X Goblin Hunter/Warrior [*/"Tinker"/*] (Player) */,
        requiresPointsinSpec: null,
        requiresReputation: ["Gadgetzan", "Exalted"],
        requiresProfession: ["Goblin Engineering"],
        applicableTo: { race: ["Goblin"], class: [HUNTER, WARRIOR] },    
        canWield: [OFF_HAND, MISCELLANEOUS_ENGINEERING],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER, MAIL],
        focus: "Experimental combat powered by mechanical ingenuity, trading martial tradition for bombs, bots, and reckless innovation.",
        keySpells: {
            Shared: [
                "Cluster Rockets",            // AoE bombardment
                "Pocket Factory",             // Deploy Clockwerk Goblins
                "Rocket Jumpers"              
            ],
            Hunter: [
                "Build Sentry Turret",        // Replaces pet functionality
                "Rocket Ammo",                // Enhances ranged attacks with explosive payloads
                /* "Explosive Trap Mk.II", */       // Explosive deployable
                "Sensor Array",
                "Proximity Bomb",
                "Suppression Device",
                "Land Mine"
            ],
            /*
            Rogue: [
                "Concealment Cloak",         // Brief full stealth via device (short duration)          
                "Smoke Bomb",                // Deploys smoke field for cover and escape
                "Noxious Bomb"
            ],
            */
            Warrior: [
                "Mecha-Suit",                // Temporary exosuit boosting defense and attack speed
                "Overload",                  // Temporarily overclocks weapons for massive bursts
                "Gyro-Boosters"              // Increases mobility and slam power
            ]
        },
        description: "Use: Trains you in the unconventional craft of the Tinker, trading traditional combat mastery for explosive ingenuity. You forgo most class spells in favor of mechanical gadgets and \
            deployables - some tailored to your class's unique strengths. Create rocket bombardments, automated Clockwerk Goblins, and other devices that turn the tide of battle with ingenuity and \
            explosive power. Though your inventions may sometimes backfire, your spirit never falters. Your true strength lies in your ingenuity and the wonders of your workshop.",
        removedSpells: {
            Hunter: [
                // Beasts and nature attunement replaced by mechanized pets
                "Tame Beast", "Mend Pet", "Revive Pet", 
                // Aspects replaced by gadget buffs or mechanical augments
                "Aspect of the Hawk", "Aspect of the Monkey", "Aspect of the Beast", 
                "Aspect of the Wild", "Aspect of the Cheetah", "Aspect of the Pack",
                // Traps replaced by mechanical deployables
                "Immolation Trap", "Freezing Trap", "Frost Trap", "Explosive Trap",
                // Natural tracking replaced by sensor arrays
                "Track Beasts", "Track Undead", "Track Humanoids", "Track Hidden",
                // Magic archery skills and poisoned arrows are removed
                "Volley", "Serpent Sting", "Wyvern Sting", "Viper Sting", "Scorpid Sting"
            ],
            /*
            Rogue: [
                // Removes tools of close combat
                "Backstab", "Eviscerate", "Slice and Dice",
                // Subtlety and deceit abandoned — Tinker fights openly with gadgets
                "Stealth", "Vanish", 
                // Poisoning and bleeds replaced by explosive or electric tools
                "Garrote", "Rupture", "Envenom", "Deadly Poison", "Crippling Poison", 
                "Wound Poison", "Mind-numbing Poison",
                // Evasion and acrobatics replaced by mechanical defense
                "Evasion", "Sprint"
            ],
            */
            Warrior: [
                // Rage management abandoned
                "Charge", "Intercept", "Bloodrage", "Berserker Rage",
                // Shield and melee weapon mastery dropped in favor of gadgets
                "Revenge", "Overpower", "Whirlwind", "Execute", "Heroic Strike",
                // Replace stances
                "Berserker Stance", "Defensive Stance",
                // Shouts replaced by mechanical devices
                "Battle Shout", "Commanding Shout", "Demoralizing Shout", 
                "Intimidating Shout",
                // 
                "Thunder Clap"
            ]
        },
        removedSpecs: {
            Hunter: ["Beast Mastery", "Marksmanship", "Survival"],
            /* Rogue: ["Assassination", "Combat", "Subtlety"], */
            Warrior: ["Arms", "Fury", "Protection"]
        },
        limitedSpecs: null,
        notes: "Ingenious goblin combat engineers who rely on gadgets and explosives rather than brute strength, agility or stealth. Apprentices of the great Tinkerers of Kezan and Gadgetzan.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Ingenuity"
    },
    {
        id: "teachings_of_the_first_circle",
        title: "Teachings of the First Circle",
        icon: "spell_nature_bloodlust",
        requiresLevel: 40,
        requiresPointsinSpec: null,
        requiresReputation: null,
        applicableTo: { race: ["Orc (Male)"], class: [SHAMAN] },
        canWield: [ONE_HANDED_MACE, FIST_WEAPON, OFF_HAND],
        canDualWield: null,
        armorTypes: [CLOTH, LEATHER],
        focus: "Rekindling the primal bond with the elements — commanding lightning, fury, and cleansing power to lead allies in battle and punish foes.",
        keySpells: [
            "Bloodlust",
            "Purge",
            "Lightning Shield",
            "Earth Bind",
            "Lightning Storm"
        ],
        description: "Use: Trains you in the elemental traditions preserved by the first shaman of the New Horde, who rekindled their connection to the elemental spirits after casting off the shadows of \
            demonic influence. These teachings emphasize raw elemental force and traditional rituals over the broader, modern shamanic practices.<br><br>\
            You forgo several restorative abilities in favor of ancestral techniques that embody a more aggressive form of support. Master the power to strip enchantments and hinder enemies with Purge, \
            shield allies in volatile Lightning Shields, and awaken their fury through Bloodlust. Through these rites, you carry forward the orcs' true bond with the elements: fierce, untamed, and \
            honorable.",
        removedSpells: [
            "Windfury Totem", "Tremor Totem", "Grace of Air Totem", "Mana Spring Totem", 
            "Frost Resistance Totem", "Fire Resistance Totem", "Nature Resistance Totem", 
            "Tranquil Air Totem", "Grounding Totem", "Magma Totem", "Healing Stream Totem", 
            "Stoneskin Totem", "Stoneclaw Totem", "Earthbind Totem", "Disease Cleansing Totem", 
            "Poison Cleansing Totem", "Strength of Earth Totem", "Windwall Totem", 
            "Flametongue Totem", "Sentry Totem", "Fire Nova Totem", "Searing Totem"
        ],
        removedSpecs: null,
        limitedSpecs: [21, "Restoration"],
        notes: "These shamans honor the primal heritage of the Orcs, wielding elemental power with intensity and discipline. They are fierce protectors, relentless in combat, and champions of the ancient \
            ways.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of the First Circle"
    },
    {
        id: "rite_of_the_headhunter",
        title: "Rite of the Headhunter",
        icon: "inv_spear_03",
        requiresLevel: 40,
        characterLabel: /* Level X Troll Warrior [*/"Headhunter"/*] (Player) */,
        requiresPointsinSpec: [31, "Fury"],
        requiresReputation: null,
        applicableTo: { race: ["Troll (Male)"], class: [WARRIOR] },
        canWield: [POLEARM, THROWN_SPEAR],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER],
        focus: "Savage and relentless combat — combining thrown weapons, berserking fury, and primal endurance to dominate the battlefield.",
        keySpells: [
            "Throw",
            "Sunder Armor",
            "Hamstring",
            "Execute",
            "Recklessness",
            "Berserk",
            "Raging Blow"
        ],
        description: "Use: Trains you in the fierce ways of the headhunters, warriors who exchange typical class tactics for brutal strength and unwavering stamina. You forsake the Protection \
            specialization and heavy armor and set aside defensive tactics to focus on powerful throws, rapid regeneration, and tapping into a berserking state that fuels relentless combat. Certain warrior \
            abilities such as Sunder Armor, Hamstring, Execute, and Raging Blow can now be used at range, allowing you to embody the Headhunter's deadly weapon-throwing combat style while maintaining your \
            warrior tenacity. You can now also hurl thrown weapons automatically allowing you to generate Rage and maintain pressure from afar. This path embraces the primal spirit of the Darkspear tribe, \
            combining precision and tenacity on the battlefield.",
        removedSpells: [
            "Heroic Strike",
            "Cleave",
            "Slam",
            "Charge",
            "Pummel",
            "Rend",
            "Shield Wall",
            "Shield Bash",
            "Shield Block", 
            "Defensive Stance", 
            "Thunder Clap", 
            "Demoralizing Shout",
            "Commanding Shout", 
            "Challenging Shout", 
            "Revenge",
            "Whirlwind"
        ],
        addedSpells: [
            "Berserk",
            "Raging Blow",
            "Snake Trap",
            "Bear Trap",
            "Raptor Strike",
            "Tracking Humanoids",
            "Tracking Hidden",
            "Tracking Undead",
            "Tracking Giants",
            "Tracking Elementals",
            "Tracking Dragonkin",
            "Tracking Demons",
            "Tracking Beasts"
        ],
        removedSpecs: ["Protection"],
        limitedSpecs: [21, "Arms"],
        notes: "These Troll warriors embrace their tribal heritage, combining deadly precision, berserking rage, and unmatched endurance. Headhunters strike with both melee and ranged force, embodying the \
            relentless spirit of the Darkspear tribe.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Tenacity"
    },
    {
        id: "the_knights_code",
        title: "The Knight's Code",
        icon: "inv_sword_05",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Arms"],
        requiresReputation: null,
        applicableTo: { race: ["Human (Male)"], class: [WARRIOR] },
        canWield: [ONE_HANDED_SWORD, TWO_HANDED_SWORD, ONE_HANDED_FLAIL, TWO_HANDED_FLAIL, ONE_HANDED_MACE, TWO_HANDED_MACE, CROSSBOW, TARGE, HEATER],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER, MAIL, PLATE],
        focus: "Mastery of disciplined warfare — leading the charge with precision strikes, mounted tactics, and unwavering fortitude on the battlefield.",
        keySpells: [
            "Charge",
            "Heroic Strike",
            "Overpower",
            "Shield Block",
            "Shield Bash"
        ],
        description: "Use: Trains you in the disciplined martial tradition of the Knights of Lordaeron—elite warriors whose strength lies in precision, mobility, and battlefield control. You adhere to a \
            strict code of combat, trading brute savagery for tactical prowess and measured strikes. This path enhances your battlefield role through short bursts of mounted mobility and empowers key Arms \
            abilities such as Heroic Strike and Overpower when charging into battle atop your steed.",
        removedSpells: [
            "Berserker Stance", 
            "Whirlwind", 
            "Recklessness", 
            "Berserker Rage", 
            "Bloodrage", 
            "Thunder Clap", 
            "Intimidating Shout", 
            "Demoralizing Shout"
        ],
        removedSpecs: null,
        limitedSpecs: [11, "Fury"],
        notes: "These knights uphold the proud martial traditions of Lordaeron, blending disciplined technique with courage and fortitude. They excel at leading charges, controlling the battlefield, and \
            striking decisively both on foot and mounted, embodying the honor and resolve of their order.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Knighthood"
    },
    {
        id: "codex_of_the_undying",
        title: "Codex of the Undying",
        icon: "spell_shadow_requiem",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Affliction"],
        requiresReputation: null,
        applicableTo: { race: ["Human, Undead, Gnome"], class: [WARLOCK] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, DAGGER, OFF_HAND, WAND],
        canDualWield: false,
        armorTypes: [CLOTH],
        focus: "Mastery of unholy and necrotic forces — commanding skeletal minions, draining life, and afflicting foes with cruel, relentless magic.",
        keySpells: [
            "Siphon Life",
            "Corruption",
            "Drain Soul",
            "Unholy Frenzy",
            "Cripple",
            "Raise Dead"
        ],
        description: "Use: Unlocks the forbidden teachings of the Necromancers — once brilliant minds of Dalaran, now bound in service to death itself. You abandon the paths of Destruction and Demonology, \
            forsaking demonic power in favor of dominion over the dead and mastery of cold, unfeeling magic.<br><br>\
            Through this codex, you wield unholy rites to raise skeletal minions from fallen corpses, shatter your enemies' strength with cruel hexes, and afflict chosen allies with frenzies so violent they \
            devour their own vitality. The biting frost of forbidden arcana is yours to command, as you draw from the full arsenal of Frost Mage spells to chill the living and empower the dead.<br><br>\
            Those who follow this path embrace death not as an end, but as a source of unending power.",
        removedSpells: [
            "Summon Voidwalker", "Summon Succubus", "Summon Imp", "Summon Felhunter", "Summon Felsteed", 
            "Curse of Doom", "Ritual of Doom", "Inferno", "Soul Fire", "Hellfire", "Immolate", 
            "Enslave Demon", "Create Firestone", "Curse of Tongues", "Create Healthstone", "Demon Armor", 
            "Demon Skin", "Searing Pain", "Rain of Fire"
        ],
        keySpells: [
            "Unholy Frenzy",
            "Cripple",
            "Raise Dead"
        ],
        removedSpecs: ["Demonology", "Destruction"],
        limitedSpecs: null,
        newSpecs: [["Frost", "Mage"]],
        notes: "These necromantic practitioners embrace the forbidden arts, raising skeletal minions, siphoning life from the living, and manipulating frost-touched dark magic. They are relentless and \
            unfeeling, wielding death itself as a weapon to command the battlefield and terrify their foes.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of the Dead"
    },
    {
        id: "loas_ancient_tablet",
        title: "Loa's Ancient Tablet",
        icon: "ability_mount_jungletiger",
        requiresLevel: 40,
        requiresPointsinSpec: null,
        requiresReputation: null,
        applicableTo: { race: ["Troll (Male)"], class: [PRIEST] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, DAGGER, OFF_HAND],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER],
        focus: "Communion with the Loa — channeling the blessings and wrath of ancient spirits to heal allies, curse enemies, and invoke primal transformations.",
        keySpells: [
            "Abolish Magic",
            "Heal",
            "Aspect of the Loa"
        ],
        description: "Use: Trains you in the ancient ways of the Loa worshippers, devote mystics who call upon the spirit of a powerful animal god they pay reverence to. Forsaking typical holy and shadow \
            magics, you draw strength from an ancestral Loa, channeling their primal power. In dire moments, you may transform briefly into the avatar of your chosen Loa - gaining enhanced movement, \
            increased damage, or resistance to crowd control. You retain core healing and dispelling abilities but forsake overt divine or shadow spells, walking the delicate balance between spirit and \
            flesh.",
        removedSpells: [
            "Dispel Magic", "Smite", "Flash Heal", "Holy Fire", "Power Word: Shield", 
            "Power Word: Fortitude", "Prayer of Fortitude", "Psychic Scream", "Mind Blast", 
            "Shadow Word: Pain", "Shackle Undead", "Mind Soothe", "Mana Burn", "Resurrection"
        ],
        removedSpecs: ["Discipline", "Holy", "Shadow"],
        limitedSpecs: null,
        newSpecs: [["custom2"]],
        notes: "Troll priests who follow this path forsake the Light and the Shadow, instead invoking Loa spirits to guide their will. Their magic blends restoration, hexes, and transformation, shifting \
            fluidly between healing allies and cursing foes. In battle, they may embody the aspect of their chosen Loa as a living avatar.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Invocation"
    },
    {
        id: "the_riflemens_creed",
        title: "The Riflemen's Creed",
        icon: "ability_hunter_snipershot",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Marksmanship"],
        requiresReputation: null,
        applicableTo: { race: ["Dwarf (Male)"], class: [HUNTER] },
        canWield: [ONE_HANDED_AXE, DAGGER, POLEARM, GUN],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER],
        focus: "Mastery of precision marksmanship and disciplined defense — the embodiment of Khaz Modan's finest riflemen, who hold the line through accuracy, patience, and unwavering resolve.",
        keySpells: [
            "Aimed Shot",
            "Auto-Shot",
            "Hunter's Mark"
        ],
        description: "Use: Trains you in the disciplined craft of the Dwarven Riflemen, stalwart protectors of the mountain kingdom of Khaz Modan. You rely exclusively on guns and forgo abilities like \
            Arcane Shot, Volley and all stings, focusing instead on precision marksmanship and battlefield control, standing firm against any foe with unyielding resolve. All traps may be used in combat, \
            though arming them takes time.<br><br>\
            Equipped with armor-piercing rounds, your Aimed Shot deals 20% additional critical strike damage against marked targets. Additionally, critical hits with Aimed Shot reduce the target's armor by \
            750 per critical hit, stacking up to 3 times. This effect lasts 25 seconds and does not stack with Sunder Armor or Expose Armor. Additionally, your attacks ignore a portion of your target's \
            armor, increasing physical damage dealt.<br><br>\
            Your Shot abilities gain 2% increased critical strike chance for every second you remain stationary, starting after 2 seconds of not moving, and stacking every second up to 5 times. While \
            moving, you will lose 1 stack per second.<br><br>\
            Your shots land with deadly purpose, echoing the unyielding resolve of Khaz Modan's finest marksmen.",
        removedSpells: [
            "Arcane Shot", 
            "Volley", 
            "Serpent Sting", 
            "Viper Sting", 
            "Scorpid Sting", 
            "Aspect of the Hawk", 
            "Aspect of the Monkey", 
            "Aspect of the Beast", 
            "Aspect of the Wild", 
            "Aspect of the Cheetah", 
            "Aspect of the Pack"
        ],
        removedSpecs: null,
        limitedSpecs: null,
        newSpecs: null,
        notes: "Dwarven hunters who follow this creed are masters of focus and fortitude, relying on skill and discipline rather than instinct or magic. They stand firm in battle, anchoring their allies \
            with unyielding fire from afar.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Precision"
    },
    {
        id: "codex_of_northshire",
        title: "Codex of Northshire",
        icon: "spell_holy_blessedlife",
        requiresLevel: 40,
        requiresPointsinSpec: null,
        requiresReputation: ["Stormwind", "Exalted"],
        applicableTo: { race: ["Human (Male)"], class: [PRIEST] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, ONE_HANDED_MACE, OFF_HAND],
        canDualWield: false,
        armorTypes: [CLOTH],
        focus: "Devotion to the Light and service to Stormwind — embodying the virtues of faith, compassion, and protection to heal the wounded and stand unbroken against darkness.",
        keySpells: [
            "Smite",
            "Holy Fire",
            "Heal",
            "Greater Heal",
            "Holy Lance",
            "Invisibility",
            "Far Seeing"
        ],
        description: "Use: Embrace the calling of the Northshire clergy, whose sacred mission is to heal, protect, and uplift the people of Stormwind and spirit of humanity. As a priest devoted to the \
            Light, you forsake all Shadow spells and talents, walking a path of clarity and compassion. You gain full access to both the Holy and Discipline specializations, using divine magic to mend \
            wounds, shield allies, and maintain the spiritual resolve of your companions — honoring the legacy of Stormwind's faithful. Dispel Magic now deals heavy damage to summoned creatures and Inner \
            Fire is now castable on allies to increase their armor and spell damage for a short time.",
        removedSpells: [
            "Mind Blast", "Mana Burn", "Psychic Scream", "Shadow Word: Pain", "Mind Control", "Fade"
        ],
        removedSpecs: ["Shadow"],
        limitedSpecs: null,
        newSpecs: null,
        notes: "The clerics of Northshire Abbey dedicate their lives to the Light's purest teachings. They serve as healers, guardians, and beacons of hope for the people of Stormwind, wielding divine \
            magic to restore body and spirit alike.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of the Pure"
    },
    {
        id: "scroll_of_sanctified_flame",
        title: "Scroll of Sanctified Flame",
        icon: "spell_holy_innerfire",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Discipline"],
        requiresReputation: null,
        applicableTo: { race: ["High Elf (Male), Blood Elf (Male)"], class: [PRIEST] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, ONE_HANDED_MACE, OFF_HAND, WAND],
        canDualWield: false,
        armorTypes: [CLOTH],
        focus: "Graceful mastery of restorative magic — weaving Light and arcane precision into healing arts that sustain allies and dismantle corruption upon the battlefield.",
        keySpells: [
            "Heal",
            "Dispel Magic",
            "Inner Fire",
            "Power Infusion", 
            "Light of the Sunwell"
        ],
        description: "Use: Trains you in the refined techniques of the Quel'dorei battle medics — practitioners who channel the Light with discipline and purpose. You restore vitality not through faith \
            alone, but through the measured harmony of Light and arcane will.<br><br>\
            Dispel Magic now burns away enemy enchantments with radiant precision, dealing heavy damage to summoned creatures and removing harmful magic from allies. Inner Fire may now be cast on others, \
            enhancing their spell damage and armor for a short time.",
        removedSpells: [
            "Shadow Word: Pain", "Mind Blast", "Psychic Scream"
        ],
        removedSpecs: ["Shadow"],
        limitedSpecs: null,
        newSpecs: null,
        notes: "High and Blood Elf priests are battlefield healers and tacticians, using their mastery of the Light tempered by arcane discipline to preserve life and order amid chaos. Their magic is \
            elegant and efficient, designed to sustain their allies while unraveling hostile enchantments with surgical precision.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Equilibrium"
    },
    {
        id: "totem_of_war",
        title: "Totem of War",
        icon: "spell_shaman_totemrecall",
        requiresLevel: 40,
        requiresPointsinSpec: [[31, "Survival"], [31, "Arms"]],
        requiresReputation: null,
        applicableTo: { race: ["Tauren (Male)"], class: [HUNTER, WARRIOR] },
        canWield: [TWO_HANDED_MACE, ONE_HANDED_MACE, TWO_HANDED_FLAIL, ONE_HANDED_FLAIL, TWO_HANDED_AXE, ONE_HANDED_AXE, POLEARM, THROWN_AXE, THROWN_SPEAR, KITE, HEATER],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER],
        focus: "The embodiment of Tauren strength guided by ancestral wisdom — uniting the hunter's instinct and the warrior's resolve in sacred balance.",
        keySpells: {
            Shared: [
                "Pulverize",
                "War Stomp",
                "Endurance Aura",
                "Bull Rush"
            ]
        },
        description: "Use: Walk the path of the brave, where hunter's instinct and warrior's might become one. Rooted in Tauren tradition, this creed honors raw strength and natural wisdom.<br><br>\
            Hunters who follow this path forsake all ranged and trap abilities, as well as the Marksmanship specialization. They now generate Focus instead of Mana, and may wield maces and certain types of \
            shields. \
            Warriors relinquish plate armor, instead wearing mail or leather in line with tribal custom. Both Hunters and Warriors abandon the use of swords and daggers.<br><br>\
            Certain abilities are shared between the two classes. Hunters learn Slam, Overpower, and Pummel, while Warriors acquire Counterattack, tracking skills, and the Survival talent Surefooted. \
            Both classes gain Pulverize, a passive chance on melee attacks to deal area damage, echoing the force of the Tauren warstomp.<br><br>\
            Bound to the land and shaped by battle, these warriors embody balance, instinct, and unshakable honor.",
        removedSpells: {
            Hunter: [
                "Frost Trap", 
                "Freezing Trap", 
                "Immolation Trap", 
                "Explosive Trap",
                "Arcane Shot",
                "Auto-Shot",
                "Concussive Shot",
                "Distracting Shot",
                "Multi-Shot",
                "Hunter's Mark",
                "Flare",
                "Serpent Sting",
                "Viper Sting",
                "Scorpid Sting",
                "Volley",
                "Aspect of the Hawk",
                "Aspect of the Monkey"
            ],
            Warrior: [
                "Thunder Clap",
                "Recklessness",
                "Bloodrage",
                "Mocking Blow"
            ]
        },
        addedSpells: {
            Hunter: [
                "Raptor Strike",
                "Readiness",
                // borrowed spells:
                "Slam",
                "Overpower",
                "Pummel",
                "Disarm"
            ],
            Warrior: [
                // borrowed spells:
                "Counterattack",
                "Readiness",
                "Tracking Humanoids",
                "Tracking Hidden",
                "Tracking Undead",
                "Tracking Giants",
                "Tracking Elementals",
                "Tracking Dragonkin",
                "Tracking Demons",
                "Tracking Beasts"
            ]
        },
        removedSpecs: ["Marksmanship"],
        limitedSpecs: null,
        newSpecs: null,
        notes: "These warriors walk the Earthmother's path of strength through harmony. They do not fight for glory but for balance, wielding their might as both hunters and warriors. Each strike echoes \
            the thunder of their ancestors' hooves, uniting discipline, instinct, and reverence in every blow.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of the Brave"
    },
    {
        id: "codex_of_the_forgotten_shadow",
        title: "Codex of the Forgotten Shadow",
        icon: "spell_shadow_shadowembrace",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Shadow"],
        requiresReputation: null,
        applicableTo: { race: ["Undead"], class: [PRIEST] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, DAGGER, ONE_HANDED_MACE, OFF_HAND, WAND],
        canDualWield: false,
        armorTypes: [CLOTH],
        focus: "Balance through darkness — mastery of pain, discipline, and death's quiet wisdom in pursuit of true understanding.",
        keySpells: [
            "Devouring Plague",
            "Mind Blast",
            "Shadow Word: Pain",
            "Vampiric Touch", 
            "Mind Flay"
        ],
        description: "Use: Embrace the teachings of the Cult of the Forgotten Shadow, forsaking the Light to pursue the dark clarity of balance through shadow.<br><br>\
            Your Holy spells are limited to the most basic healing arts: Heal, Lesser Heal and Renew remain accessible, but all other Holy spells are unavailable. Your dominion over shadow magic is \
            strengthened, increasing all healing done by your Shadow spells. You also learn Vampiric Touch.<br><br>\
            With each tick of Mind Flay, you risk triggering Shadow Overreach, a brief surge of energy that locks your Holy spells but grants immunity to silence and movement impairing effects and reduces \
            the pushback suffered from damaging attacks. This effect lasts 6 seconds.",
        removedSpells: [
            "Prayer of Healing", "Prayer of Fortitude", "Greater Heal", "Inner Fire", "Flash Heal", 
            "Smite", "Resurrection", "Holy Fire"
        ],
        removedSpecs: ["Holy"],
        limitedSpecs: null,
        newSpecs: null,
        notes: "The Forsaken who follow the Forgotten Shadow seek power through discipline and detachment. They view pain, doubt, and death as steps toward true equilibrium, embracing shadow as both weapon \
            and teacher.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Dark Clarity"
    },
    {
        id: "way_of_the_earth",
        title: "Way of the Earth",
        icon: "spell_nature_natureresistancetotem",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Restoration"],
        requiresReputation: null,
        applicableTo: { race: ["Tauren"], class: [SHAMAN] },
        canWield: [ONE_HANDED_STAFF, ONE_HANDED_MACE, FIST_WEAPON, OFF_HAND, BUCKLER],
        canDualWield: null,
        armorTypes: [CLOTH, LEATHER],
        focus: "Harmony with the Earthmother — channeling the strength of stone, water, and wind to heal, protect, and endure through all trials.",
        keySpells: [
            "Healing Surge",
            "Healing Stream Totem",
            "Mana Spring Totem",
            "Strength of Earth Totem",
            "Earth Shock",
            "Rockbiter Weapon", 
            "Windfury Weapon"
        ],
        description: "Use: Walk the sacred path of the Earthmother, drawing strength from earth, water, and wind to heal and protect your kin. You shun the wild flames, storm's fury and the icy touch, \
            choosing instead the steady embrace of nature's nurturing forces.<br><br>\
            Lightning spells and fire totems are forsaken, honoring the calm, enduring power of the land. Each healing touch quickens the pulse of your totems. Against those bound by your Earthbind Totem, \
            Earth Shock strikes with unerring critical force.<br><br>Your spirit flows freely — allowing two totems of the same element to stand strong together, deepening your connection to the \
            Earthmother's blessings.",
        removedSpells: [
            "Lightning Bolt", "Lightning Shield", "Flame Shock", "Frost Resistance Totem", 
            "Magma Totem", "Flametongue Totem", "Fire Nova Totem", "Searing Totem", 
            "Flametongue Weapon", "Ancestral Spirit", "Purge", "Frost Shock", 
            "Frostbrand Weapon"
        ],
        removedSpecs: null,
        limitedSpecs: null,
        newSpecs: null,
        notes: "Tauren shamans walk in deep communion with the land, their power flowing from patience and balance rather than fury. Each totem they place is a prayer to the Earthmother, a vow of harmony \
            and strength.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of the Earth"
    },
    {
        id: "grimoire_of_the_soulbinder",
        title: "Grimoire of the Soulbinder",
        icon: "spell_shadow_haunting",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Affliction"],
        requiresReputation: null,
        applicableTo: { race: ["Orc (Male)"], class: [WARLOCK] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, DAGGER, OFF_HAND, KITE],
        canDualWield: false,
        armorTypes: [CLOTH],
        focus: "Command over death's shadow — reviving the ancient necrolyte tradition of binding spirits, wielding sorrow and decay as instruments of dominion.",
        keySpells: [
            "Shadow Spear",
            "Raise Dead",
            "Dark Vision",
            "Unholy Armor"
        ],
        description: "Use: You follow the path of the Orcish necrolytes, binders of souls who command dark powers tied to the earth's shadow. These ancient practitioners raise the dead and bind fallen \
            warriors to their will.<br><br>\
            You abandon the demonic arts of demonology but retain access to Affliction and Destruction, channeling shadow and ruin through forbidden ceremonies passed down from the temples of old. In place \
            of demonic summons, you learn four necrolyte rituals: Shadow Spear, a soul-warped bolt of torment; Raise Dead, summoning skeletal thralls from fallen corpses; Dark Vision, extending your gaze \
            through shadow beyond reach; and Unholy Armor, shielding allies with the suffering of bound spirits. Your shadow spells deal 10% increased damage, empowered by your communion with death itself.",
        removedSpells: [
            "Summon Voidwalker", "Summon Succubus", "Summon Imp", "Summon Felhunter", 
            "Summon Felsteed", "Summon Dreadsteed", "Inferno", "Enslave Demon", "Soul Fire", 
            "Rain of Fire", "Hellfire", "Create Firestone", "Curse of Tongues", "Banish",
            "Curse of Doom", "Ritual of Doom", "Sense Demons", "Demon Armor", "Demon Skin"
        ],
        removedSpecs: ["Demonology"],
        limitedSpecs: null,
        newSpecs: null,
        notes: "Once servants of dark temples, the necrolytes of old bound the spirits of the fallen to their will. In the new Horde, their few disciples walk a quieter path — mastering death not for \
            conquest, but for remembrance and control.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Soulbinding"
    },
    {
        id: "sigil_of_superior_summoning",
        title: "Sigil of Superior Summoning",
        icon: "spell_nature_removecurse",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Demonology"],
        requiresReputation: null,
        applicableTo: { race: ["Human, Gnome"], class: [WARLOCK] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, DAGGER, OFF_HAND, WAND],
        canDualWield: false,
        armorTypes: [CLOTH],
        focus: "Disciplined dominion over the vile creatures of the Twisting Nether — transforming demonic summoning into an exacting science of control, efficiency, and power.",
        keySpells: [
            "Enslave Demon",
            "Inferno",
            "Summon Voidwalker", 
            "Summon Succubus", 
            "Summon Imp", 
            "Summon Felhunter",
            "Hand of Gul'dan"
        ],
        description: "Use: Harness the full might of demonic summoning, bolstering your control over your minions and enhancing your Demonology spells.<br><br>\
            Your command over demons improves. Enslave Demon lasts longer, and summoned demons deal increased damage and have increased health while under your control. Additionally, the Inferno spell \
            deals increased damage and has a shorter cooldown.<br><br>\
            Additionally, you gain access to Hand of Gul'dan, a powerful spell that deals Shadowflame damage and summons wild imps to fight alongside you for a short duration.",
        removedSpells: null,
        removedSpecs: null,
        limitedSpecs: null,
        newSpecs: null,
        notes: "Demonology approached more as an arcane discipline rather than devotion to darkness (although not always). They summon and bind demons through intellect and preparation, seeking perfection \
            in control where others find only ruin.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Demonic Control"
    },
    {
        id: "compendium_of_the_violet_citadel",
        title: "Compendium of the Violet Citadel",
        icon: "spell_holy_arcaneintellect",
        requiresLevel: 50,
        requiresPointsinSpec: [41, "Frost or Arcane"],
        requiresReputation: null,
        applicableTo: { race: ["Human"], class: [MAGE] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, ONE_HANDED_SWORD, OFF_HAND, WAND],
        canDualWield: false,
        armorTypes: [CLOTH],
        focus: "Disciplined mastery of the arcane — embodying the Kirin Tor's pursuit of knowledge, precision, and the orderly perfection of magical law.",
        keySpells: [
            "Polymorph",
            "Invisibility",
            "Slow",
            "Blizzard",
            "Summon Water Elemental", 
            "Brilliance Aura",
            "Time Stop",
            "Arcane Brilliance",
            // "Fireball",
            "Frostbolt",
            // Insight -> Comprehension -> Enlightenment
        ],
        description: "Use: Embrace the refined magical discipline of the mages of Dalaran.<br><br>\
            Studied and scribed within the halls of the Violet Citadel, this tome embodies the disciplined wisdom of the Kirin Tor. Its pages instruct in precise elemental invocation and controlled arcane \
            application, hallmarks of Dalaran's highest magical doctrine.<br><br>\
            If you choose the Frost specialization, you learn Summon Water Elemental, conjuring a powerful elemental ally to fight at your side for 45 seconds. It casts Waterbolt from range, slowing \
            enemies with each hit. The elemental shares your critical strike chance and has a moderate cooldown.<br><br>\
            If you choose the Arcane specialization instead, you learn Brilliance Aura, a passive enchantment that increases the mana regeneration of all party members by 10% of the Mage's mana \
            regeneration.",
        removedSpells: [
            "Flamestrike", "Scorch", "Teleport: Darnassus", "Blink"
        ],
        removedSpecs: null,
        limitedSpecs: null,
        newSpecs: null,
        notes: "The mages of Dalaran see power not as chaos to be tamed, but as truth to be understood. Through study and restraint, they weave the forces of frost and arcana into perfect harmony, \
            upholding the Citadel's centuries-old pursuit of enlightened magic.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of the Kirin Tor"
    },
    {
        id: "mark_of_the_claw",
        title: "Mark of the Claw",
        icon: "ability_racial_bearform",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Feral Combat"],
        requiresReputation: null,
        applicableTo: { race: ["Night Elf (Male)"], class: [DRUID] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, FIST_WEAPON, OFF_HAND, IDOL],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER],
        focus: "Feral guardianship in service of the wild — embracing the spirit of the bear to protect, endure, and channel nature's wrath through unwavering strength.",
        keySpells: [
            "Bear Form",
            "Maul",
            "Mangle",
            "Swipe",
            "Savage Roar"
        ],
        description: "Use: Embrace the ancient teachings of the Druids of the Claw, guardians who adopt the totem of the bear to defend the wildlands of Kalimdor with ferocious resilience. You forsake Cat \
            Form, devoting yourself fully to become the living embodiment of endurance and primal wrath.<br><nr>Maul, Mangle, Swipe and Rejuvenation now generate increased threat. Each successful cast in \
            Bear Form awakens your regenerative instincts, reducing the cooldown of Frenzied Regeneration by a small amount.<br><br>\
            You learn Savage Roar, a thunderous bellow that surges from your ursine form, rallying nearby allies and increasing their physical damage by 10% for 15 seconds. You also gain increased mana \
            regeneration outside Bear Form, allowing you to shift between defense and restoration with natural rhythm.<br><br>\
            Through tooth, claw, and spirit, you stand as an ancient guardian of the wild—unyielding, feral, and bound to the will of the forest.",
        removedSpells: [
            "Travel Form", "Aquatic Form", "Cat Form", "Rip", "Claw", "Shred", "Rake", 
            "Ravage", "Cower", "Pounce", "Prowl", "Feline Grace", "Dash", "Ferocious Bite", 
            "Tiger's Fury", "Track Humanoids", "Abolish Poison", "Regrowth", "Rebirth", 
            "Tranquility", "Hurricane", "Starfire", "Moonfire", "Wrath", "Entangling Roots", 
            "Thorns", "Remove Curse", "Faerie Fire", "Barkskin", "Teleport: Moonglade"
        ],
        removedSpecs: null,
        limitedSpecs: null,
        newSpecs: null,
        notes: "The Druids of the Claw are ancient sentinels of balance, their forms shaped by the power of Ursoc and the wild heart of the forest.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of the Claw"
    },
    {
        id: "compendium_of_arcane_ingenuity",
        title: "Compendium of Arcane Ingenuity",
        icon: "spell_arcane_blast_nightborne",
        requiresLevel: 50,
        requiresPointsinSpec: [41, "Arcane"],
        requiresReputation: null,
        applicableTo: { race: ["Gnome"], class: [MAGE] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, ONE_HANDED_SWORD, OFF_HAND, WAND],
        canDualWield: false,
        armorTypes: [CLOTH],
        focus: "Invention through intellect — perfecting Arcane magic with precision, calculation, and boundless curiosity to transform raw energy into refined power.",
        keySpells: [
            "Arcane Blast",
            "Arcane Missiles",
            "Arcane Explosion"
        ],
        description: "Use: Unlock the refined arcane specialization practiced by the most inventive spellweavers of Gnomeregan. You focus your efforts on precise Arcane magic, gaining access to Arcane \
            Blast, a fast, high-output spell that grows stronger with each successive cast. Fire and Frost spells remain usable, though your options from those schools are limited.<br><br>\
            Arcane Missiles now channels at twice the speed, unleashing rapid bursts of arcane energy. However, it can only be cast while under the effect of Missile Barrage, a new reactive state \
            triggered by Arcane Blast, Fireball, or Frostbolt. Additionally, each missile fired by Arcane Missiles now has a chance to trigger Clearcasting, instead of only once per cast.<br><br>\
            This path celebrates the ingenuity and focus of Gnomish mages—balancing control, efficiency, and firepower in a style uniquely their own.",
        removedSpells: [
            "Flamestrike", "Scorch", "Teleport: Darnassus", "Blink", "Frost Nova", "Cone of Cold", "Frost Armor", "Ice Armor", "Blizzard",
        ],
        removedSpecs: null,
        limitedSpecs: null,
        newSpecs: null,
        notes: "Gnomish mages approach the Arcane as both science and art, dissecting its mysteries with tireless experimentation. Where others see danger in unstable energies, Gnomes see potential for \
            innovation and mastery.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Ingenuity"
    },
    {
        id: "apothecarys_field_journal",
        title: "Apothecary's Field Journal",
        icon: "inv_potion_19",
        requiresLevel: 40,
        characterLabel: /* Level X Undead Rogue [*/"Apothecary"/*] (Player) */,
        requiresPointsinSpec: null,
        requiresPointsInTalents: 
        { 
            Assassination: 
            [
                ["Vile Poisons", 5], 
                ["Improved Poisons", 5], 
                ["Master Poisoner", 2]
            ]
        },
        requiresReputation: ["Royal Apothecary Society", "Exalted"],
        requiresProfession: "Potion Master (Alchemy)",
        applicableTo: { race: ["Undead"], class: [ROGUE] },
        canWield: [DAGGER, OFF_HAND, MISCELLANEOUS_ALCHEMY, THROWN_DAGGER, THROWN_VIAL],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER],
        focus: "Refinement through decay — mastering the alchemical arts of the Forsaken to weaponize corruption, toxin, and plague in service of dark perfection.",
        keySpells: [
            "Poisons",
            "Deadly Poison",
            "Crippling Poison",
            "Mind-numbing Poison",
            "Volatile Brew",
            "Toxic Mixture"
        ],
        description: "Use: Trains you in the volatile fieldwork of the apothecaries, masters of toxins, flasks, and battlefield experimentation. Merging the arts of assassination with the alchemical \
            sciences, you gain access to a specialized set of alchemy recipes that allow you to concoct volatile brews and toxic mixtures, which may be thrown in combat as tools of disruption, damage, or \
            control.<br><br>\
            Your deep understanding of toxins increases the effectiveness of your poisons, and you become more resistant to poison effects as a result of your long exposure to toxic compounds and \
            obsessive experimentation.<br><br>\
            However, your prolonged focus on studies as an apothecary comes at a cost: you suffer a penalty to your weapon skill with all weapons, reflecting a loss in martial sharpness, and your physical \
            agility is slightly diminished. Your dodge and parry chance are also diminished.<br><br>\
            In battle, you are no longer just a killer — but a walking experiment, unpredictable, persistent, and steeped in the alchemy of undeath.",
        removedSpells: [
            "Vanish", "Evasion", "Sprint", "Safe Fall", "Detect Traps", "Disarm Trap"
        ],
        removedSpecs: null,
        removedSpecificTalents: {
            Assassination: [],
            Combat: ["Lightning Reflexes", "Improved Sprint"],
            Subtlety: []
        },
        limitedSpecs: null,
        newSpecs: null,
        notes: "The apothecaries of the Royal Society blend science and death in equal measure, viewing every toxin as a revelation and every corpse as data. The rogues that walk this path wield poisons \
            and plagues with clinical precision, embodying the Forsaken's relentless pursuit of dark knowledge.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Volatility"
    },
    {
        id: "oath_of_the_shadow_hunter",
        title: "Oath of the Shadow Hunter",
        icon: "spell_shadow_ritualofsacrifice",
        requiresLevel: 40,
        requiresPointsinSpec: null,
        requiresPointsInTalents: null,
        requiresReputation: null,
        requiresProfession: null,
        applicableTo: { race: ["Troll (Male)"], class: [HUNTER] },
        canWield: [ONE_HANDED_SWORD, WARGLAIVE, DAGGER, POLEARM, OFF_HAND, THROWN_GLAIVE, THROWN_DAGGER, THROWN_SPEAR, BOW, WARD],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER, MAIL],
        focus: "Masters of voodoo who wield the blessings and curses of the Loa to heal allies, curse foes, and guide their kin between shadow and light.",
        keySpells: [
            "Throw",
            "Healing Wave",
            "Healing Surge",
            "Hex",
            "Serpent Ward",
            "Blessings of the Loa", 
            "Superior Tracking"
        ],
        description: "Use: Embrace the ceremonial path of the Shadow Hunters, revered masters of voodoo magics who balance the arts of healing, hexing, and spirit-born warfare. You abandon the \
            Marksmanship and Beast Mastery specializations, along with the use of bows, crossbows, guns, and traps. Also, you no longer have a pet by your side. Instead, you wield thrown weapons and \
            channel your spirit powers.<br><br>\
            You gain access to a suite of spells drawn from tradition, including Healing Wave, Healing Surge, Cure Poison, and Cure Disease. You may also invoke Hex, transforming enemies into helpless \
            critters, and conjure multiple Serpent Wards — stationary spirit totems that spit fiery energy at your foes.<br><br>\
            Guided by the whispers of the spirits, you walk the shadowed path.",
        removedSpells: [
            "Frost Trap", "Freezing Trap", "Immolation Trap", "Explosive Trap", "Arcane Shot",
            "Auto-Shot", "Concussive Shot", "Distracting Shot", "Multi-Shot", "Hunter's Mark",
            "Flare", "Volley", "Tame Beast", "Feed Pet", "Revive Pet", "Call Pet", "Mend Pet", 
            "Dismiss Pet", "Serpent Sting", "Viper Sting", "Scorpid Sting"
        ],
        removedSpecs: ["Beast Mastery", "Marksmanship", "Survival"],
        removedSpecificTalents: null,
        limitedSpecs: null,
        newSpecs: ["Shadow"],
        notes: "Shadow Hunters embody the spiritual heart of the trolls — warriors who weave faith and hex into a single creed. Each strike and chant is an offering to the Loa, and every battle, a ritual. \
            They walk the line between life and death, spirit and flesh, as true servants of their primal gods.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Primal Reverence"
    },
    {
        id: "field_manual_of_the_saboteur",
        title: "Field Manual of the Saboteur",
        icon: "ability_warrior_riposte",
        requiresLevel: 40,
        characterLabel: /* Level X Dwarf Rogue [*/"Saboteur"/*] (Player) */,
        requiresPointsinSpec: [21, "Combat"],
        requiresPointsInTalents: null,
        requiresReputation: null,
        requiresProfession: "Engineering (225)",
        applicableTo: { race: ["Dwarf"], class: [ROGUE] },
        canWield: [DAGGER, ONE_HANDED_AXE, ONE_HANDED_MACE, THROWN_DAGGER, THROWN_AXE, GUN, BUCKLER],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER],
        focus: "Dwarven saboteurs are hardened combat rogues who rely on engineering, grit, and precision firepower rather than stealth or finesse. They excel in close-quarters disruption, battlefield \
            control, and exploiting enemy weaknesses through sheer mechanical ingenuity.",
        keySpells: [
            "Cragshot",
            "Quick Draw",
            "Smoke Bomb",     // Deploys smoke field for cover and escape
            "Riposte",
            "Expose Armor",
            "Blade Flurry",
            "Adrenaline Rush"
        ],
        description: "Use: Trains you in the rugged tactics of the dwarven saboteurs of Ironforge — rogues who trade finesse for grit, firepower, and battlefield cunning. You forsake stealth and bleeds, \
            favoring axes, explosives, and sturdy dwarven resilience.<br><br>\
            You gain access to exclusive engineering recipes like Smoke Bomb and new gun techniques: Cragshot, a finishing move that stuns and shares a cooldown with Kidney Shot; and Quick Draw, a rapid \
            ranged strike triggered by certain melee attacks. You also learn Stout Reflexes, reducing your chance to be hit by melee and ranged attacks by 3%.<br><br>\
            In exchange, you abandon abilities tied to shadow and subtlety, such as Vanish and Safe Fall. The saboteur fights in the open — blasting, disabling, and enduring with unyielding dwarven \
            resolve.",
        removedSpells: [
            "Vanish", "Safe Fall"
        ],
        removedSpecs: null,
        removedSpecificTalents: null,
        limitedSpecs: null,
        newSpecs: null,
        notes: "A pragmatic rogue specialization rooted in Dwarven engineering culture. The Saboteur replaces stealth-based play with front-line control and sustained aggression. Think bombs, gunfire, and \
            stubborn defiance — a combatant who thrives amid the chaos of battle rather than lurking in the shadows.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Sabotage"
    },
    {
        id: "handbook_of_opportunistic_assault",
        title: "Handbook of Opportunistic Assault",
        icon: "ability_rogue_ambush",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Assassination"],
        requiresPointsInTalents: null,
        requiresReputation: null,
        requiresProfession: null,
        applicableTo: { race: ["Orc (Female)"], class: [ROGUE] },
        canWield: [DAGGER, FIST_WEAPON, THROWN_DAGGER],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER],
        focus: "Predatory cunning refined into lethal precision — striking from the shadows, exploiting weakness, and finishing foes before they can strike back.",
        keySpells: [
            "Backstab",
            "Ambush",
            "Envenom"
        ],
        description: "Use: Trains you in the silent, deadly arts practiced by assassins such as Garona Halforcen — master of stealth, precision, and lethal strikes from the shadows. Embracing \
            assassination as your sole purpose, you require only the use of daggers and fist weapons, honing your reflexes to deadly perfection.<br><br>\
            Your Backstab and Ambush cost less Energy, while your Envenom has an increased chance to apply poisons for an extended duration based on combo points. Additionally, your attacks deal increased \
            damage to enemies suffering from Bleed effects, exploiting every wound with ruthless efficiency.<br><br>\
            To focus on stealth and precision, you limit heavy weapons and forgo abilities like Slice and Dice and Riposte. Silent and deadly, you strike swiftly and vanish before retaliation, leaving \
            only whispers of your passage.",
        removedSpells: [
            
        ],
        removedSpecs: null,
        removedSpecificTalents: null,
        limitedSpecs: null,
        newSpecs: null,
        notes: "Assassins among the Orcs embody the pragmatism of the old Horde — strength tempered by cunning. They favor decisive kills over drawn-out combat, guided by instinct and patience rather than \
            rage. To them, every strike is both warcraft and survival.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Treachery"
    },
    {
        id: "teachings_of_endless_strife",
        title: "Teachings of Endless Strife",
        icon: "spell_shadow_unholystrength",
        requiresLevel: 40,
        requiresPointsinSpec: null,
        requiresPointsInTalents: null,
        requiresReputation: null,
        requiresProfession: null,
        applicableTo: { race: ["Undead"], class: [WARRIOR] },
        canWield: [TWO_HANDED_SWORD, ONE_HANDED_SWORD, ONE_HANDED_MACE, ONE_HANDED_AXE, FIST_WEAPON, POLEARM, TARGE, HEATER, TOWER, THROWN_DAGGER, CROSSBOW],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER, MAIL, PLATE],
        focus: "Endurance through suffering — embracing torment as strength, turning agony into fuel, and fighting without mercy or fear of death.",
        keySpells: [
            "Revenge",
            "Execute",
            "Unholy Frenzy"
        ],
        description: "Use: Teaches you the grim tenacity and ruthless combat doctrine of the Forsaken. These warriors do not guard life — they endure suffering, harvest pain, and strike without pity. You \
            don't require any specific specialization, instead embracing any means of violence that serves your relentless advance.<br><br>\
            Revenge deals increased damage. Melee attacks have a chance to enable Execute regardless of enemy health. While above 85 Rage, you are immune to fear. You also gain Unholy Frenzy, inducing \
            yourself into a killing frenzy for a short period of time, increasing attack speed by 20% and allowing 10% of physical damage dealt to be returned as health, but reducing the effectiveness of \
            external healing during the effect. Finally, your Rage decays more slowly, allowing you to sustain momentum between engagements.<br><br>\
            All abilities that previously required only Defensive Stance can now also be used in Battle Stance, except those that require a shield.<br><br>\
            In return, you give up Heroic Strike and Intervene and your base Agility is reduced. The Forsaken warrior seeks neither glory nor valor — only victory through suffering.",
        removedSpells: [
            "Heroic Strike", "Intervene"
        ],
        removedSpecs: null,
        removedSpecificTalents: null,
        limitedSpecs: null,
        newSpecs: null,
        notes: "Forsaken warriors fight not for glory, but for vindication. Their flesh may fail, but will and hatred endure. Each wound only deepens their resolve, each scar another reminder that death is \
            no longer an end — only a weapon.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Relentlessness"
    },
    {
        id: "creed_of_the_pit_fighter",
        title: "Creed of the Pit Fighter",
        icon: "ability_demonhunter_bloodlet",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Combat"],
        requiresPointsInTalents: { 
            Assassination: 
            [
                ["Malice", 5], 
                ["Ruthlessness", 5], 
                ["Relentless Strikes", 1]
            ],
            Combat: 
            [
                ["Improved Slice and Dice", 3], 
                ["Adrenaline Rush", 1]
            ],
        },
        requiresReputation: null,
        requiresProfession: null,
        applicableTo: { race: ["Orc (Male)"], class: [ROGUE] },
        canWield: [ONE_HANDED_SWORD, ONE_HANDED_MACE, ONE_HANDED_AXE, FIST_WEAPON, THROWN_DAGGER, THROWN_AXE],
        canDualWield: true,
        armorTypes: [CLOTH, LEATHER],
        focus: "A brutal expression of orcish endurance. Pit Fighters thrive on punishment, channeling every blow into greater ferocity until nothing remains but blood, rage, and triumph.",
        keySpells: [
            "Adrenaline Rush",
            "Slice and Dice",
            "Deadly Throw",
            "Sprint"
        ],
        description: "Use: Trains you in the brutal combat tactics of orc pit fighters — rogues who reject stealth and subtlety for open bloodshed. You master direct combat through fierce strikes and raw \
            endurance, relying on axes, swords, and fist weapons to overwhelm foes through relentless aggression.<br><br>\
            Adrenaline Rush now has a 3-minute cooldown and also grants immunity to fear effects. Each critical hit you land gives you 2 energy. Slice and Dice no longer requires combo points, lasting 15 \
            seconds with a 10-second cooldown and usable within 5 seconds of landing a melee critical hit. Sprint now lasts 6 seconds with a 2-minute cooldown, reflecting your battle fury. You also gain \
            access to Deadly Throw, allowing you to deal damage while also slowing targets from afar.<br><br>\
            Your dodge chance is reduced slightly and your parry chance is increased by the same amount. All Subtlety abilities except Blind are removed, reflecting your disregard for subtlety in favor of \
            direct, unrelenting violence.",
        removedSpells: [
            "Ambush", "Backstab", "Vanish", "Evasion", "Distract", "Sap", "Garrote", "Feint", "Safe Fall", "Detect Traps", "Disarm Trap", "Pick Pocket"
        ],
        removedSpecs: ["Subtlety"],
        limitedSpecs: null,
        newSpecs: null,
        notes: "Born in the fighting pits, these orcs learned that survival demanded more than skill — it demanded defiance. To them, the fight never ends until one stands alone amid the broken.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Brutality"
    },
    /*
    {
        id: "field_manual_on_heavy_ordnance",
        title: "Field Manual on Heavy Ordnance",
        icon: "inv_musket_04",
        requiresLevel: 40,
        requiresPointsinSpec: null,
        requiresPointsInTalents: null,
        requiresReputation: null,
        requiresProfession: "Engineering (225)",
        applicableTo: { race: ["Dwarf (Male)"], class: [HUNTER] },
        canWield: [MISCELLANEOUS_ENGINEERING, GUN],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER, MAIL],
        focus: "Mastery of explosives and heavy ordnance - trading precision and attunement with the wilds for battlefield demolition.",
        keySpells: [
            "Flare",
            "Explosive Shot",
            "Explosive Trap",
            "Bursting Shot",
            "Lock and Load",
            "Mortar Team"
        ],
        description: "Use: Trains you in the art of Dwarven siegecraft perfected by the stalwart Mortar Teams of Ironforge. This allows you to become a munitions expert armed with exploding shells to blast enemy ranks from afar. You employ high-caliber weaponry, tactical traps, and artillery to bombard enemy lines with raw destructive power.<br><br>\
            You gain access to Explosive Shot and Explosive Trap, defining your offensive style with bursts of area damage. The Flare ability is also available for flushing out hidden foes. Your traps benefit from increased triggering range and reduced cooldown. Your ranged auto attacks have a 8% chance to trigger Lock and Load, causing your next Explosive Shot to cost no focus and trigger no cooldown. You also gain access to Bursting Shot, a concussive blast that damages enemies ahead.<br><br>\
            You can also summon a Dwarven companion to assist you temporarily in battle by deploying a launcher that bombards enemies from long range. In addition, your explosive attacks benefit from Fragmentation Shards, increasing damage dealt to lightly armored enemies.<br><br>\
            All Beast Mastery talents and pet abilities are disabled. Arcane Shot, Multi-Shot, and Tranquilizing Shot are removed, as you rely on concussive blasts and incendiary payloads rather than precise marksmanship.",
        removedSpells: [
            "Frost Trap", 
            "Freezing Trap", 
            // precision 
            "Arcane Shot", 
            "Volley", 
            "Distracting Shot", 
            "Tranquilizing Shot", 
            "Multi-Shot", 
            "Hunter's Mark", 
            // pet-related abilities
            "Tame Beast", 
            "Feed Pet", 
            "Revive Pet", 
            "Call Pet", 
            "Mend Pet", 
            "Dismiss Pet", 
            // poisons
            "Serpent Sting", 
            "Viper Sting", 
            "Scorpid Sting", 
            // survival
            "Feign Death", 
            "Raptor Strike", 
            "Mongoose Bite", 
            "Disengage", 
            "Wing Clip",
            // tracking
            "Tracking Humanoids", 
            "Tracking Hidden", 
            "Tracking Undead", 
            "Tracking Giants", 
            "Tracking Elementals", 
            "Tracking Dragonkin", 
            "Tracking Demons", 
            "Tracking Beasts",
            // aspects
            "Aspect of the Hawk", 
            "Aspect of the Monkey", 
            "Aspect of the Beast", 
            "Aspect of the Wild", 
            "Aspect of the Cheetah", 
            "Aspect of the Pack"
        ],
        removedSpecs: ["Beast Mastery"],
        removedSpecificTalents: {
            Marksmanship: 
            [
                "Improved Hunter's Mark", 
                "Aimed Shot",
                "Improved Arcane Shot",
                "Hawk Eye",
                "Improved Serpent Sting",
                "Scatter Shot",
                "Barrage",
                "Improved Scorpid Sting",
                "Trueshot Aura",
            ],
            Survival: 
            [
                "Monster Slaying",
                "Humanoid Slaying",
                "Deflection",
                "Savage Strikes",
                "Improved Wing Clip",
                "Survivalist",
                "Deterrence",
                "Improved Feign Death",
                "Killer Instinct",
                "Counterattack",
                "Lightning Reflexes",
                "Wyvern Sting",
            ],
        },
        addedSpecificTalents: {
            General: 
            [
                ["Steady Frame", 3],           // reduces pushback while casting ranged attacks and arming traps
                ["Blast Radius", 3],           // increases the area of effect of your traps
                ["Bursting Shot", 1],          // concussive blast damaging enemies in a cone and snaring them for 4 sec
                ["Impact Rounds", 2],          // increases the movement speed reduction of your concussive shot and the range of your bursting shot
                ["Imbued Gunpowder", 3],       // increases your ranged attack power
                ["Dragonhide Armor", 3],       // increased armor value and resistance
                ["Mortar Team", 1],            // summon a dwarven companion to assist you temporarily in battle by deploying a launcher that bombards enemies from long range. each launch has a cast time of 3 sec and requires the player to be stationary. duration 30 sec
                ["Mortar Tactics", 2],         // increases the damage and range of your mortar team attacks
                ["Incendiary Compound", 2],    // your explosive shells are modified, making your ranged attacks ignite the target, dealing minor fire damage over time
                ["Cluster Charges", 3],        // increases the number of times your explosive shot explodes
                ["Chain Reaction", 1]          // your explosive shot has a chance to set off a chain reaction, refreshing the effect of your trap on the target
            ],
            Marksmanship: 
            [
                ["Reinforced Shells", 5],      // increases damage of your explosive shot and steady shot
                ["Fragmentation Shards", 3],   // increases the armor penetration of your ranged attacks
                ["Quick Load", 1],             // bursting shot cooldown immediately reset when you fall below 40% health
                ["Lock and Load", 3],          // chance on ranged auto attacks to not consume focus or trigger cooldown on explosive shot
                ["Stabilized Barrel", 2],      // reduces the cast time duration of your steady shot 
                ["Barrage", 2],                // causes your explosive shot to hit 1/2 additional nearby targets
                ["Overcharged Rounds", 2],     // every auto shot has a chance to fire an overcharged round that deals additional fire damage
                ["Mechanized Reload", 1]       // reduces the cast time of your auto shot after standing still for 3 sec
            ],
            Survival: 
            [
                ["Tempered Fuse", 3],          // increases damage of your traps
                ["Combat Experience", 2],      // additional focus and health regeneration
                ["Resourcefulness", 3],        // reduces focus cost and cooldown of all trap abilities
                ["Kindling Flare", 1],         // flare radius increased 
                ["Master Tactician", 5],       // chance to increase critical strike chance after a successful ranged attack
                ["Readiness", 1],              // reset cooldowns of all abilities
                ["Short Fuse", 2],             // reduces the arming time of your traps
                ["High Explosive Trap", 1]     // your explosive trap now also knocks enemies away
            ],
        },
        limitedSpecs: null,
        newSpecs: null,
        notes: "Inspired by the famed Mortar Teams, these fearless hunters trade finesse for fire and force, turning the art of war into an engineering triumph.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Demolition"
    },
    */
    {
        id: "field_manual_on_heavy_ordnance",     // saboteur, sapper, demolitionist, grenadier, bombardier, munitions expert
        title: "Field Manual on Heavy Ordnance",
        icon: "inv_musket_04",
        requiresLevel: 40,
        characterLabel: /* Level X Dwarf Hunter [*/"Demolitionist"/*] (Player) */,
        requiresPointsinSpec: null,
        requiresPointsInTalents: null,
        requiresReputation: null,
        requiresProfession: "Engineering (225)",
        applicableTo: { race: ["Dwarf (Male)"], class: [HUNTER] },
        canWield: [MISCELLANEOUS_ENGINEERING, GUN],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER, MAIL],
        focus: "Mastery of explosives and heavy ordnance and taste for battlefield demolition.",
        keySpells: [
            "Flare",
            "Explosive Shot",
            "Explosive Trap",
            "Bursting Shot",
            "Lock and Load",
            "Mortar Team"
        ],
        description: "Use: Trains you in the art of Dwarven siegecraft perfected by the stalwart Mortar Teams and Demolition Squads of Ironforge. This allows you to become a munitions expert armed with \
            exploding shells to blast enemy ranks from afar. You employ high-caliber weaponry, tactical traps, and artillery to bombard enemy lines with raw destructive power.<br><br>\
            You gain access to Explosive Shot and Explosive Trap, defining your offensive style with bursts of area damage. The Flare ability is also available for flushing out hidden foes. Your traps \
            benefit from increased triggering range and reduced cooldown. Your ranged auto attacks have a 8% chance to trigger Lock and Load, causing your next Explosive Shot to cost no focus and trigger \
            no cooldown. You also gain access to Bursting Shot, a concussive blast that damages enemies ahead.<br><br>\
            You can also summon a Dwarven companion to assist you temporarily in battle by deploying a launcher that bombards enemies from long range. In addition, your explosive attacks benefit from \
            Fragmentation Shards, increasing damage dealt to lightly armored enemies.<br><br>\
            You rely on concussive blasts and incendiary payloads.",
        removedSpells: [

        ],
        addedSpells: [
            "Flare",
            "Explosive Shot",
            "Explosive Trap",
            "Bursting Shot",
            "Lock and Load",
            "Mortar Team"
        ],
        borrowedSpells: {
            Hunter: 
            [
            "Auto Shot",
            "Steady Shot",
            "Concussive Shot",
            "Distracting Shot",
            "Immolation Trap",
            "Explosive Trap"
            ]
        },
        removedSpecs: null,
        removedSpecificTalents: {

        },
        addedSpecificTalents: {
            General: 
            [
                ["Steady Frame", 3],           // reduces pushback while casting ranged attacks and arming traps
                ["Blast Radius", 3],           // increases the area of effect of your traps
                ["Bursting Shot", 1],          // concussive blast damaging enemies in a cone and snaring them for 4 sec
                ["Impact Rounds", 2],          // increases the movement speed reduction and the range of your bursting shot
                ["Imbued Gunpowder", 3],       // increases your ranged attack power
                ["Dragonhide Armor", 3],       // increased armor value and resistance
                ["Mortar Team", 1],            // summon a dwarven companion to assist you temporarily in battle by deploying a launcher that bombards enemies from long range. each launch has a cast time of 3 sec and requires the player to be stationary. duration 30 sec
                ["Mortar Tactics", 2],         // increases the damage and range of your mortar team attacks
                ["Incendiary Compound", 2],    // your explosive shells are modified, making your ranged attacks ignite the target, dealing minor fire damage over time
                ["Cluster Charges", 3],        // increases the number of times your explosive shot explodes
                ["Chain Reaction", 1]          // your explosive shot has a chance to set off a chain reaction, refreshing the effect of your trap on the target
            ],
            "Munition Expertise": 
            [
                ["Efficiency", 5],                      // reduces the focus cost of your shots by 3/6/9/12/15%
                ["Reinforced Shells", 5],               // increases damage of your explosive shot and steady shot
                ["Fragmentation Shards", 3],            // increases the armor penetration of your ranged attacks
                ["Quick Load", 1],                      // bursting shot cooldown immediately reset when you fall below 40% health
                ["Lock and Load", 3],                   // chance on ranged auto attacks to not consume focus or trigger cooldown on explosive shot
                ["Stabilized Barrel", 2],               // reduces the cast time duration of your steady shot 
                ["Barrage", 2],                         // causes your explosive shot to hit 1/2 additional nearby targets
                ["Overcharged Rounds", 2],              // every auto shot has a chance to fire an overcharged round that deals additional fire damage
                ["Ranged Weapon Specialization", 3],    // increases damage dealt with ranged weapons by 1/2/3%
                ["Mechanized Reload", 1]                // reduces the cast time of your auto shot after standing still for 3 sec
            ],
            "Demolition Expertise": 
            [
                ["Entrapment", 5],             // gives your traps a 5/10/15/20/25% chance to entrap the target, preventing them from moving for 5 sec
                ["Tempered Fuse", 3],          // increases critical strike damage bonus of your traps
                ["Combat Experience", 2],      // additional focus and health regeneration
                ["Clever Traps", 2],           // increases the duration and damage of your traps by 15/30%
                ["Resourcefulness", 3],        // reduces focus cost and cooldown of all trap abilities
                ["Kindling Flare", 1],         // flare radius increased 
                ["Trap Mastery", 2]            // decreases the chance enemies will resist trap effects by 5/10%
                ["Surefooted", 3],             // increases the chance movement impairing effects will be resisted by an additional 5/10/15%
                ["Master Tactician", 5],       // chance to increase critical strike chance after a successful ranged attack
                ["Readiness", 1],              // reset cooldowns of all abilities
                ["Short Fuse", 2],             // reduces the arming time of your traps
                ["High Explosive Trap", 1]     // your explosive trap now also knocks enemies away
            ],
        },
        limitedSpecs: null,
        newSpecs: null,
        notes: "Inspired by the famed Mortar Teams, these fearless artificers operate on the front lines, wielding explosive ingenuity to transform raw firepower and engineering skill into a devastating \
            art of war.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Demolition"
    },
    {
        id: "book_of_withering_rime",
        title: "Book of Withering Rime",
        icon: "spell_shadow_darkritual",
        requiresLevel: 40,
        requiresPointsinSpec: [31, "Frost"],
        requiresPointsInTalents: null,
        requiresReputation: null,
        requiresProfession: null,
        applicableTo: { race: ["Undead"], class: [MAGE] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, ONE_HANDED_MACE, DAGGER, OFF_HAND, WAND],
        canDualWield: false,
        armorTypes: [CLOTH],
        focus: "Necromantic frost magic — wielding the chilling powers of undeath to sap vitality, corrupt healing, and unleash relentless shadowfrost upon your enemies.",
        keySpells: [
            "Frostbolt",
            "Ice Lance",
            "Frost Nova",
            "Cone of Cold",
            "Withering Chill"        
        ],
        description: "Use: Unbound by life and conventional magic, you wield frost magic twisted by shadows and death. Drawing on the cold of undeath, you master Frost and Shadow magics while forgoing \
            fire magic, illusions and mundane conjurations. Polymorph and Conjure Food or Drink are no longer available.<br><br>\
            Your signature spell, Withering Chill, afflicts targets with a necrotic frost that reduces healing received by 25% for 12 seconds and deals periodic Shadowfrost damage, based on the target's \
            lower Shadow or Frost resistance. The damage does not break effects like Frost Nova. If the afflicted target dies, it explodes in a burst of Shadowfrost damage, dealing damage of the type \
            enemies are most vulnerable to.<br><br>\
            Your passive Devour the Cold grants you 2% mana regeneration per second for 8 seconds whenever an enemy affected by Withering Chill dies. This effect cannot stack but its duration can be \
            extended by 8 seconds.<br><br>\
            The living crumble under the cold. The dead wield it without mercy.",
        removedSpells: [
            "Fireball", "Pyroblast", "Flamestrike", "Scorch", "Portal: Orgrimmar", "Teleport: Orgrimmar", 
            "Portal: Thunder Bluff", "Teleport: Thunder Bluff", "Conjure Food", "Conjure Water", 
            "Conjure Mana Ruby", "Polymorph", "Arcane Brilliance", "Arcane Explosion"
        ],
        removedSpecs: ["Fire"],
        limitedSpecs: [21, "Arcane"],
        newSpecs: null,
        notes: "These forsaken mages channel the frigid void between life and death, wielding frost not as a force of nature, but as a weapon of unrelenting decay.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Rime"
    },
    {
        id: "witch_doctors_tablet_of_nefarious_teachings",
        title: "Witch Doctor's Tablet of Nefarious Teachings",
        icon: "spell_nature_nullward",
        requiresLevel: 40,
        characterLabel: /* Level X Troll Warlock [*/"Witch Doctor"/*] (Player) */,
        requiresPointsinSpec: null,
        requiresPointsInTalents: null,
        requiresReputation: null,
        requiresProfession: "Alchemy (225)",
        applicableTo: { race: ["Troll (Male)"], class: [WARLOCK] },
        canWield: [TWO_HANDED_STAFF, ONE_HANDED_STAFF, ONE_HANDED_MACE, DAGGER, OFF_HAND, MISCELLANEOUS_ALCHEMY, WAND, WARD],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER],
        focus: "Both feared and respected — the mysterious arts of the Troll witch doctors are steeped in dark rituals, curses, and alchemical concoctions that manipulate the forces of life and death.",
        keySpells: [
            "Sentry Ward",
            "Stasis Trap Ward",
            "Healing Ward",
            "Sleep",
            "Shrink",
            "Special Brew",
            "Rage Potion",
            "Shadow Bolt",
            "Siphon Life",
            "Amplify Curse",
            "Shadow Pact",
            "Evil Eye"
        ],
        description: "Use: Embrace the dark magic and alchemical arts practiced by the Troll witch doctors, masters of chemical manipulation, they brew concoctions designed to augment their own powers and \
            those of their allies. You forsake the Demonology and Destruction specializations, focusing instead on Affliction and the mystical arts of voodoo.<br><br>\
            You gain access to a suite of spells: Sentry Ward, which provides vision of an area and detects invisible enemies; Stasis Trap Ward, which stuns approaching enemies when triggered; and Healing \
            Ward, which restores a portion of nearby allies' health over time. You also learn Sleep and Shrink, controlling enemy movement and power, and Special Brew, an alchemical concoction that \
            temporarily increases your spell power and reduces the casting time of your spells.<br><br>\
            Your Affliction spells are enhanced: Amplify Curse increases the potency of your curses, while Siphon Life drains more health from your targets. You also gain increased resistance to shadow and \
            nature damage.<br><br>\
            Walking the path of the witch doctor means embracing a forbidden knowledge which is both feared and respected.",
        removedSpells: [
            "Summon Voidwalker", "Summon Succubus", "Summon Imp", "Summon Felhunter", 
            "Summon Felsteed", "Summon Dreadsteed", "Inferno", "Enslave Demon", "Soul Fire", 
            "Rain of Fire", "Hellfire", "Create Firestone", "Curse of Tongues", "Banish",
            "Curse of Doom", "Ritual of Doom", "Ritual of Summoning", "Sense Demons", 
            "Demon Armor", "Demon Skin", "Immolate", "Death Coil", "Fear", "Howl of Terror", 
            "Banish", "Corruption", "Drain Soul", "Drain Life", "Drain Mana", "Curse of Agony",
            "Curse of Recklessness"
        ],
        removedSpecs: ["Demonology", "Destruction"],
        removedSpecificTalents: {
            Affliction: 
            [
                "Improved Corruption", 
                "Improved Drain Soul",
                "Improved Drain Life",
                "Improved Curse of Agony", 
                "Fel Concentration",
                "Nightfall", 
                "Improved Drain Mana",
                "Shadow Mastery",
                "Dark Pact"
            ]
        },
        limitedSpecs: null,
        newSpecs: null,
        notes: "Savage and nefarious in the extreme - these dastardly magic users are adept at manipulating the chemical processes within their fellow warriors in order to augment their combat abilities.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Nefariousness"
    },
    /*
    {
        id: "alchemical_",
        title: "",
        icon: "inv_potion_112",
        requiresLevel: 40,
        requiresPointsinSpec: null,
        requiresPointsInTalents: null,
        requiresReputation: null,
        requiresProfession: "Alchemy (225)",
        applicableTo: { race: ["Goblin"], class: [ARTIFICER] },
        canWield: [OFF_HAND, MISCELLANEOUS_ALCHEMY, THROWN_VIAL],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER],
        focus: "",
        keySpells: [
            "Call Ogre Slave",
            "Healing Spray",
            "Chemical Rage",
            "Acid Bomb",
            "Transmute Extraction",
        ],
        description: "Use: Embrace the unstable battlefield chemistry of the Goblin Alchemist. You fight as a pair: a Goblin master directing volatile concoctions while your Ogre counterpart delivers raw physical might. You forsake traditional defensive and weapon-based abilities, focusing instead on chemically enhanced aggression and area-control brews.<br><br>\
            You gain access to specialized alchemical abilities: Healing Spray, which releases waves of restorative mist that heal allies in a target area; Chemical Rage, which triggers a chemically induced rampage that greatly increases attack and movement speed; and Acid Bomb, which hurls a volatile flask that reduces enemy armor and deals damage over time in a splash radius.<br><br>\
            You also learn Transmute — when you land a killing blow, you harvest reactive compounds from the fallen foe, granting a small amount of bonus gold and temporarily increasing your attack power.<br><br>\
            Walking the path of the Goblin Alchemist, you weaponize unstable brews and brute strength alike, turning every fight into an opportunity for chemical experimentation.",
        removedSpells: [
            "Battle Stance",
            "Defensive Stance",
            "Berserker Stance",
            "Retaliation",
            "Whirlwind",
            "Shield Bash",
            "Shield Block",
            "Shield Wall",
            "Heroic Strike",
            "Revenge",
            "Intercept",
            "Charge",
            "Thunder Clap",
            "Hamstring",
        ],
        removedSpecs: ["Arms"],
        removedSpecificTalents: {
            Fury: 
            [
                "Improved Intercept",
            ],
            Protection: 
            [
                "Shield Specialization",
                "Improved Shield Block",
                "Improved Revenge",
                "Improved Shield Wall",
                "Improved Shield Bash",
                "Shield Slam"
            ]
        },
        limitedSpecs: [16, "Protection"],
        newSpecs: null,
        notes: "When it comes to biological warfare, corrosive compounds, and chemically enhanced brute force, the Goblin Alchemist and his Ogre stand unmatched.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: ""
    },
    */
    {
        id: "manual_of_alchemical_warfare",
        title: "Manual of Alchemical Warfare",
        icon: "inv_potion_112",
        requiresLevel: 40,
        characterLabel: /* Level X Goblin Rogue [*/"Alchemist"/*] (Player) */,
        requiresPointsinSpec: null,
        requiresPointsInTalents: null,
        requiresReputation: null,
        requiresProfession: "Alchemy (225)",
        applicableTo: { race: ["Goblin"], class: [ROGUE] },
        canWield: [DAGGER, OFF_HAND, MISCELLANEOUS_ALCHEMY, THROWN_VIAL],
        canDualWield: false,
        armorTypes: [CLOTH, LEATHER],
        focus: "Battlefield chemistry, volatile brews, and Ogre-assisted frontline disruption.",
        keySpells: [
            "Call Ogre Slave",
            "Healing Spray",
            "Chemical Rage",
            "Acid Bomb",
            "Transmute",
        ],
        description: "Use: Embrace the unstable battlefield chemistry of the Goblin Alchemist. You fight as a pair: a Goblin master directing volatile concoctions while your Ogre counterpart delivers raw \
            physical might. The Ogre also serves as your personal mount, carrying you into and through battle.<br><br>You retain key combat techniques of your trade — such as the use of poisons, Blind, \
            Kick, Detect Traps, and Feint. Poisons are now prepared in thrown vials instead of coated in a melee weapon, allowing you to deliver their effects at range through your mixtures and chemical \
            flasks.<br><br>\
            You gain access to specialized alchemical abilities: Healing Spray, which releases waves of restorative mist that heal allies in a target area; Chemical Rage, which triggers a chemically \
            induced rampage that greatly increases attack and movement speed of your Ogre Slave; and Acid Bomb, which hurls a volatile flask that reduces enemy armor and deals damage over time in a splash \
            radius.<br><br>\
            You also learn Transmute — when you land a killing blow on your target, you have a chance to transform it into gold.<br><br>\
            Walking the path of the Goblin Alchemist, you weaponize unstable brews and brute strength alike, turning every fight into an opportunity for chemical experimentation.",
        removedSpells: [

        ],
        addedSpells: [
            "Call Ogre Slave",
            "Healing Spray",
            "Chemical Rage",
            "Acid Bomb",
            "Transmute",
        ],
        addedGuardianSpells: {
            Warrior: 
            [
                "Taunt",
                "Slam",
                "Pummel",
                "Battle Shout"
            ]
        },
        removedSpecs: [
            "Elixir Master"
        ],
        removedSpecificTalents: null,
        keptOnlySpecificTalents: {
            Assassination: ["Vile Poisons", "Improved Poisons"],
            Combat: [],
            Subtlety: ["Sleight of Hand"],
        },
        addedGuardianSpecificTalents: {
            Warrior: {
                Arms: 
                [
                    "Anger Management",
                ],
                Fury: 
                [
                    "Unbridled Wrath",
                    "Piercing Howl",
                    "Blood Craze",
                    "Improved Battle Shout",
                    "Enrage",
                    "Improved Slam",
                    "Death Wish"
                ],
                Protection: 
                [
                    "Toughness",
                    "Iron Will",
                    "Defiance",
                    "Improved Taunt"
                ],
            }
        },
        limitedSpecs: [],
        newSpecs: null,
        notes: "When it comes to biological warfare, corrosive compounds, and chemically enhanced brute force, the Goblin Alchemist and his Ogre stand unmatched.",
        availableAt: ["vanilla", "tbc", "wotlk"],
        heroTier: "Path of Duality"
    },
]