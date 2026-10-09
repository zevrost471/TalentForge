// races.js

import { classes, customClasses } from "../classes.js";
import { newFactions } from "./factions.js";

// const ARTISAN = classes.ARTISAN;
const DEATHKNIGHT = classes.DEATHKNIGHT;
const DRUID = classes.DRUID;
const HUNTER = classes.HUNTER;
const MAGE = classes.MAGE;
const PALADIN = classes.PALADIN;
const PRIEST = classes.PRIEST;
const ROGUE = classes.ROGUE;
const SHAMAN = classes.SHAMAN;
const WARLOCK = classes.WARLOCK;
const WARRIOR = classes.WARRIOR;
const MARKSMAN = customClasses.MARKSMAN;
const TINKER = customClasses.TINKER;
const WITCH_DOCTOR = customClasses.WITCH_DOCTOR;

const ALLIANCE = newFactions.ALLIANCE;
const HORDE = newFactions.HORDE;
const FORSAKEN = newFactions.FORSAKEN;
const NIGHT_ELVES = newFactions.NIGHT_ELVES;
const ILLIDARI = newFactions.ILLIDARI;
const NEUTRAL = newFactions.NEUTRAL;

const FALLBACK_ICON = "inv_misc_questionmark";

export const raceBaseData = Object.freeze({
  human: {
    id: "human",
    name: "Human",
    genderVariants: [
      {
        gender: "male",
        icon: "achievement_character_human_male",
      },
      {
        gender: "female",
        icon: "achievement_character_human_female",
      },
    ],
  },
  dwarf: {
    id: "dwarf",
    name: "Dwarf",
    genderVariants: [
      {
        gender: "male",
        icon: "achievement_character_dwarf_male",
      },
      {
        gender: "female",
        icon: "achievement_character_dwarf_female",
      },
    ],
  },
  gnome: {
    id: "gnome",
    name: "Gnome",
    genderVariants: [
      {
        gender: "male",
        icon: "achievement_character_gnome_male",
      },
      {
        gender: "female",
        icon: "achievement_character_gnome_female",
      },
    ],
  },
  high_elf: {
    id: "high_elf",
    name: "High Elf",
    genderVariants: [
      {
        gender: "male",
        icon: "assets/icons/races/achievement_character_highelf_male_3",
      },
      {
        gender: "female",
        icon: "assets/icons/races/achievement_character_highelf_female_3",
      },
    ],
  },
  orc: {
    id: "orc",
    name: "Orc",
    genderVariants: [
      {
        gender: "male",
        icon: "achievement_character_orc_male",
      },
      {
        gender: "female",
        icon: "achievement_character_orc_female",
      },
    ],
  },
  tauren: {
    id: "tauren",
    name: "Tauren",
    genderVariants: [
      {
        gender: "male",
        icon: "achievement_character_tauren_male",
      },
      {
        gender: "female",
        icon: "achievement_character_tauren_female",
      },
    ],
  },
  troll: {
    id: "troll",
    name: "Troll",
    genderVariants: [
      {
        gender: "male",
        icon: "achievement_character_troll_male",
      },
      {
        gender: "female",
        icon: "achievement_character_troll_female",
      },
    ],
  },
  ogre: {
    id: "ogre",
    name: "Ogre",
    genderVariants: [
      {
        gender: "male",
        icon: "achievement_reputation_ogre",
      },
    ],
  },
  undead: {
    id: "undead",
    name: "Undead",
    genderVariants: [
      {
        gender: "male",
        icon: "achievement_character_undead_male",
      },
      {
        gender: "female",
        icon: "achievement_character_undead_female",
      },
    ],
  },
  darkfallen: {
    id: "darkfallen",
    name: "Darkfallen",
    genderVariants: [
      {
        gender: "male",
        icon: "assets/icons/races/achievement_character_dark_ranger_male_2",
      },
      {
        gender: "female",
        icon: "assets/icons/races/achievement_character_dark_ranger_female_2",
      },
    ],
  },
  night_elf: {
    id: "night_elf",
    name: "Night Elf",
    genderVariants: [
      {
        gender: "male",
        icon: "achievement_character_nightelf_male",
      },
      {
        gender: "female",
        icon: "achievement_character_nightelf_female",
      },
    ],
  },
  night_elf_illidari: {
    id: "night_elf_illidari",
    name: "Night Elf",
    genderVariants: [
      {
        gender: "male",
        icon: "assets/icons/races/character_night_elf_male",
      },
      {
        gender: "female",
        icon: "achievement_character_nightelf_female",
      },
    ],
  },
  furbolg: {
    id: "furbolg",
    name: "Furbolg",
    genderVariants: [
      {
        gender: "male",
        icon: "assets/icons/races/character_furbolg_1",
      },
      /*
      {
        gender: "female",
        icon: "assets/icons/races/character_furbolg_1",
      },
      */
    ],
  },
  blood_elf: {
    id: "blood_elf",
    name: "Blood Elf",
    genderVariants: [
      {
        gender: "male",
        icon: "achievement_character_bloodelf_male",
      },
      {
        gender: "female",
        icon: "achievement_character_bloodelf_female",
      },
    ],
  },
  draenei: {
    id: "draenei",
    name: "Draenei",
    genderVariants: [
      {
        gender: "male",
        icon: "achievement_reputation_ashtonguedeathsworn",
      },
    ],
  },
  goblin: {
    id: "goblin",
    name: "Goblin",
    genderVariants: [
      {
        gender: "male",
        icon: "assets/icons/races/character_goblin_male_2",
      },
      {
        gender: "female",
        icon: "assets/icons/races/character_goblin_female_2",
      },
    ],
  },
  naga: {
    id: "naga",
    name: "Naga",
    genderVariants: [
      {
        gender: "male",
        icon: "assets/icons/races/naga_myrmidon_royal_guard_wc3",
      },
      {
        gender: "female",
        icon: "assets/icons/races/sea_witch_wc3",
      },
    ],
  },
});

const HUMAN = raceBaseData.human.id;
const DWARF = raceBaseData.dwarf.id;
const NIGHTELF = raceBaseData.night_elf.id;
const NIGHTELF_ILLIDARI = raceBaseData.night_elf_illidari.id;
const GNOME = raceBaseData.gnome.id;
const ORC = raceBaseData.orc.id;
const TAUREN = raceBaseData.tauren.id;
const TROLL = raceBaseData.troll.id;
const UNDEAD = raceBaseData.undead.id;
const HIGHELF = raceBaseData.high_elf.id;
const OGRE = raceBaseData.ogre.id;
const DARKFALLEN = raceBaseData.darkfallen.id;
const FURBOLG = raceBaseData.furbolg.id;
const BLOODELF = raceBaseData.blood_elf.id;
const DRAENEI = raceBaseData.draenei.id;
const GOBLIN = raceBaseData.goblin.id;
const NAGA = raceBaseData.naga.id;

export const classicPlayableRaces = Object.freeze([
  HUMAN, DWARF, NIGHTELF, GNOME, ORC, TAUREN, TROLL, UNDEAD,
]);

export const customPlayableRaces = Object.freeze([
  HIGHELF, OGRE, DARKFALLEN, FURBOLG, BLOODELF, DRAENEI, GOBLIN,
]);

export const classicRacesByFaction = Object.freeze({
  [ALLIANCE]: {
    races: [HUMAN, DWARF, NIGHTELF, GNOME],
  },
  [HORDE]: {
    races: [ORC, TAUREN, TROLL, UNDEAD],
  },
});

export const customRacesByFaction = Object.freeze({
  [ALLIANCE]: {
    base: [HUMAN, DWARF, GNOME, HIGHELF],
    allied: [],
  },
  [HORDE]: {
    base: [ORC, TAUREN, TROLL, OGRE],
    allied: [],
  },
  [FORSAKEN]: {
    base: [UNDEAD, DARKFALLEN],
    allied: [],
  },
  [NIGHT_ELVES]: {
    base: [NIGHTELF, FURBOLG],
    allied: [],
  },
  [ILLIDARI]: {
    base: [NIGHTELF_ILLIDARI, BLOODELF, NAGA, DRAENEI],
    allied: [],
  },
  [NEUTRAL]: {
    base: [GOBLIN],
    allied: [],
  },
});

export const customClassesByRace = Object.freeze({
  human: {
    availableAtStart: [MAGE, ROGUE, WARRIOR, MARKSMAN, PRIEST, PALADIN],
    availableThroughUnlock: [WARLOCK],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  dwarf: {
    availableAtStart: [HUNTER, ROGUE, WARRIOR, MARKSMAN, /*PRIEST,*/ /*ARTISAN*/],
    availableThroughUnlock: [MAGE], // runebinder from alpha. priest could be considered as earth-speaker
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  gnome: {
    availableAtStart: [MAGE, ROGUE, WARLOCK, WARRIOR, TINKER/*, ARTISAN*/],
    availableThroughUnlock: [],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  high_elf: {
    availableAtStart: [HUNTER, MAGE, PRIEST, ROGUE, WARRIOR, MARKSMAN],
    availableThroughUnlock: [/*WARLOCK,*/ PALADIN],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  orc: {
    availableAtStart: [HUNTER, WARRIOR, WARLOCK, SHAMAN, ROGUE],
    availableThroughUnlock: [],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  tauren: {
    availableAtStart: [HUNTER, WARRIOR, PRIEST],
    availableThroughUnlock: [SHAMAN],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  troll: {
    availableAtStart: [HUNTER, PRIEST, WARRIOR, ROGUE, WITCH_DOCTOR],
    availableThroughUnlock: [WARLOCK],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  ogre: {
    availableAtStart: [MAGE, HUNTER, WARLOCK, WARRIOR, SHAMAN, WITCH_DOCTOR],
    availableThroughUnlock: [],
    /*
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
    */
  },
  undead: {
    availableAtStart: [MAGE, PRIEST, ROGUE, WARLOCK, WARRIOR, MARKSMAN],
    availableThroughUnlock: [DEATHKNIGHT],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  darkfallen: {
    availableAtStart: [MARKSMAN, ROGUE],
    availableThroughUnlock: [PRIEST, WARLOCK, WARRIOR],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  night_elf: {
    availableAtStart: [WARRIOR, HUNTER],
    availableThroughUnlock: [],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [DRUID],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [MARKSMAN, ROGUE, PRIEST],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  furbolg: {
    availableAtStart: [HUNTER, SHAMAN, WARRIOR],
    availableThroughUnlock: [],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  night_elf_illidari: {
    availableAtStart: [HUNTER, MAGE, ROGUE, WARLOCK, WARRIOR],
    availableThroughUnlock: [],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  blood_elf: {
    availableAtStart: [HUNTER, MAGE, PRIEST, ROGUE, WARLOCK, WARRIOR, MARKSMAN],
    availableThroughUnlock: [
      /*ARTISAN*/
    ],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  naga: {
    availableAtStart: [],
    availableThroughUnlock: [],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [WARRIOR],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [PRIEST, MAGE, MARKSMAN],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
  draenei: {
    availableAtStart: [ROGUE, SHAMAN, WARLOCK, WARRIOR],
    availableThroughUnlock: [],
    /*
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
    */
  },
  goblin: {
    availableAtStart: [ROGUE, MARKSMAN, WARRIOR, TINKER/*, ARTISAN*/],
    availableThroughUnlock: [WARLOCK],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [],
        additionalAvailableThroughUnlock: [],
      },
    },
  },
});

/*
const bloodElf = races.ILLIDARI.BASE.BLOODELF;
const highElf = races.ALLIANCE.ALLIED.HIGHELF;
const nightElfRegular = races.NIGHTELVES.BASE.NIGHTELF;
const nightElfIllidari = races.ILLIDARI.BASE.NIGHTELF;
*/

export function getAllRaces() {
  return Object.values(raceBaseData);
}

export function getRaceById(id) {
  return raceBaseData[id] || null;
}

export function getRacesByFaction(faction) {
  const factionRaces = customRacesByFaction[faction];
  if (!factionRaces) return [];
  const allIds = [...(factionRaces.base || []), ...(factionRaces.allied || [])];
  return allIds.map(id => raceBaseData[id]).filter(Boolean);
}



/*
export const racesByFaction = Object.freeze({
  ALLIANCE: {
    FACTION_NAME: ALLIANCE,
    BASE: [
      {
        id: "HUMAN",
        name: "Human",
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_character_human_male",
            additionalAvailableAtStart: [PRIEST, PALADIN],
            additionalAvailableThroughUnlock: [],
          },
          {
            gender: "female",
            icon: "achievement_character_human_female",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [PRIEST],
          },
        ],
        availableAtStart: [MAGE, ROGUE, WARLOCK, WARRIOR],
        availableThroughUnlock: [HUNTER, DEATHKNIGHT],
      },
      {
        id: "DWARF",
        name: "Dwarf",
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_character_dwarf_male",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [PRIEST],
          },
          {
            gender: "female",
            icon: "achievement_character_dwarf_female",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [HUNTER, ROGUE, WARRIOR], //ARTISAN
        availableThroughUnlock: [MAGE],
      },
      {
        id: "GNOME",
        name: "Gnome",
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_character_gnome_male",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
          {
            gender: "female",
            icon: "achievement_character_gnome_female",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [MAGE, ROGUE, WARLOCK],  //ARTISAN
        availableThroughUnlock: [WARRIOR],
      },
    ],
    ALLIED: [
      {
        id: "HIGHELF",
        name: "High Elf",
        isAllied: true,
        genderVariants: [
          {
            gender: "male",
            icon: "images/icons/races/achievement_character_highelf_male_3",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
          {
            gender: "female",
            icon: "images/icons/races/achievement_character_highelf_female_3",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [HUNTER, MAGE, PRIEST, ROGUE, WARRIOR],
        availableThroughUnlock: [WARLOCK],
      },
    ],
  },

  HORDE: {
    FACTION_NAME: HORDE,
    BASE: [
      {
        id: "ORC",
        name: "Orc",
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_character_orc_male",
            additionalAvailableAtStart: [SHAMAN],
            additionalAvailableThroughUnlock: [ROGUE],
          },
          {
            gender: "female",
            icon: "achievement_character_orc_female",
            additionalAvailableAtStart: [ROGUE],
            additionalAvailableThroughUnlock: [SHAMAN],
          },
        ],
        availableAtStart: [HUNTER, WARRIOR, WARLOCK],
      },
      {
        id: "TAUREN",
        name: "Tauren",
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_character_tauren_male",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [PRIEST],
          },
          {
            gender: "female",
            icon: "achievement_character_tauren_female",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [HUNTER, WARRIOR],
        availableThroughUnlock: [SHAMAN],
      },
      {
        id: "TROLL",
        name: "Troll",
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_character_troll_male",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
          {
            gender: "female",
            icon: "achievement_character_troll_female",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [HUNTER, PRIEST, WARRIOR],
        availableThroughUnlock: [ROGUE, WARLOCK],
      },
    ],
    ALLIED: [
      {
        id: "OGRE",
        name: "Ogre",
        isAllied: true,
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_reputation_ogre",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [MAGE, WARLOCK, WARRIOR],
        availableThroughUnlock: [SHAMAN],
      },
    ],
  },

  FORSAKEN: {
    FACTION_NAME: FORSAKEN,
    BASE: [
      {
        id: "UNDEAD",
        name: "Undead",
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_character_undead_male",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
          {
            gender: "female",
            icon: "achievement_character_undead_female",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [MAGE, PRIEST, ROGUE, WARLOCK, WARRIOR],
        availableThroughUnlock: [HUNTER],
      },
    ],
    ALLIED: [
      {
        id: "DARKFALLEN",
        name: "Darkfallen",
        isAllied: true,
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_boss_valanar",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
          {
            gender: "female",
            icon: "achievement_boss_lanathel",
            additionalAvailableAtStart: [HUNTER],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [ROGUE, WARLOCK, WARRIOR],
        availableThroughUnlock: [],
      },
    ],
  },

  NIGHTELVES: {
    FACTION_NAME: NIGHT_ELVES,
    BASE: [
      {
        id: "NIGHTELF",
        name: "Night Elf",
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_character_nightelf_male",
            additionalAvailableAtStart: [DRUID],
            additionalAvailableThroughUnlock: [],
          },
          {
            gender: "female",
            icon: "achievement_character_nightelf_female",
            additionalAvailableAtStart: [HUNTER, WARRIOR],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [ROGUE],
        availableThroughUnlock: [],
      },
    ],
    ALLIED: [
      {
        id: "FURBOLG",
        name: "Furbolg",
        isAllied: true,
        genderVariants: [
          {
            gender: "male",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/4/41/IconSmall_Furbolg.gif/revision/latest/scale-to-width-down/16?cb=20211118211011",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
          {
            gender: "female",
            icon: "https://static.wikia.nocookie.net/wowpedia/images/4/41/IconSmall_Furbolg.gif/revision/latest/scale-to-width-down/16?cb=20211118211011",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [HUNTER, SHAMAN, WARRIOR],
        availableThroughUnlock: [],
      },
    ],
  },

  ILLIDARI: {
    FACTION_NAME: ILLIDARI,
    BASE: [
      {
        id: "NIGHTELF_ILLIDARI",
        name: "Night Elf",
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_character_nightelf_male",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
          {
            gender: "female",
            icon: "achievement_character_nightelf_female",
            additionalAvailableAtStart: [HUNTER],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [ROGUE, WARLOCK, WARRIOR],
        availableThroughUnlock: [],
      },
      {
        id: "BLOODELF",
        name: "Blood Elf",
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_character_bloodelf_male",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
          {
            gender: "female",
            icon: "achievement_character_bloodelf_female",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [HUNTER, MAGE, PRIEST, ROGUE, WARLOCK, WARRIOR],
        availableThroughUnlock: [],  //ARTISAN
      },
    ],
    ALLIED: [
      {
        id: "DRAENEI",
        name: "Draenei",
        isAllied: true,
        genderVariants: [
          {
            gender: "male",
            icon: "achievement_character_draenei_male_2",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [ROGUE, SHAMAN, WARLOCK, WARRIOR],
        availableThroughUnlock: [],
      },
    ],
  },

  NEUTRAL: {
    FACTION_NAME: null,
    BASE: [
      {
        id: "GOBLIN",
        name: "Goblin",
        isAllied: false,
        genderVariants: [
          {
            gender: "male",
            icon: "",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
          {
            gender: "female",
            icon: "",
            additionalAvailableAtStart: [],
            additionalAvailableThroughUnlock: [],
          },
        ],
        availableAtStart: [ROGUE, HUNTER, WARRIOR],  //ARTISAN
        availableThroughUnlock: [WARLOCK],
      },
    ],
  },
});
*/