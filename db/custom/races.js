// races.js

import { classes, customClasses } from "../classes.js";
import { newFactions } from "./factions.js";

// const ARTISAN = classes.ARTISAN;
const DEATH_KNIGHT = classes.DEATH_KNIGHT;
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
const RUNEMASTER = customClasses.RUNEMASTER;

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
        icon: "assets/icons/races/achievement_reputation_ogre",
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
        icon: "assets/icons/races/achievement_character_dark_ranger_female_3",
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
        icon: "assets/icons/races/achievement_reputation_furbolg_2",
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
        icon: "assets/icons/races/achievement_reputation_draenei_3",
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
        icon: "assets/icons/races/achievement_reputation_naga_1",
      },
      {
        gender: "female",
        icon: "assets/icons/races/naga_sea_witch_wc3_2",
      },
    ],
  },
});

const HUMAN = raceBaseData.human.id;
const DWARF = raceBaseData.dwarf.id;
const NIGHTELF = raceBaseData.night_elf.id;
// const NIGHTELF_ILLIDARI = raceBaseData.night_elf_illidari.id;
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

export const RACE_DESCRIPTIONS = {
    human: "Humans are a young race, and thus highly versatile, mastering the arts of combat, craftsmanship, and magic with stunning efficiency. The humans' valor and optimism have led them to build some of the world's greatest kingdoms. In this troubled era, after generations of conflict, humanity seeks to rekindle its former glory and forge a shining new future.",
    dwarf: "In ages past the dwarves cared only for riches taken from the earth's depths. Then records surfaced of a god-like race said to have given the dwarves life... and an enchanted birthright. Driven to learn more, the dwarves devoted themselves to the pursuit of lost artifacts and ancient knowledge. Today dwarven archaeologists are scattered throughout the globe.",
    gnome: "Though small in stature, the gnomes of Khaz Modan have used their great intellect to secure a place in history. Indeed, their subterranean kingdom, Gnomeregan, was once a marvel of steam-driven technology. Even so, due to a massive trogg invasion, the city was lost. Now its builders are vagabonds in the dwarven lands, aiding their allies as best they can.",
    high_elf: "The high elves of Quel'Thalas were once proud guardians of the magical Sunwell. When the Scourge shattered their kingdom, they fled in small numbers to the lands of the Alliance, carrying little more than grief and a bond to arcane magic they cannot sever. Survivors now, they seek to rebuild what was taken from them.",
    orc: "The orc race originated on the planet Draenor. A peaceful people with shamanic beliefs, they were enslaved by the Burning Legion and forced into war with the humans of Azeroth. Although it took many years, the orcs finally escaped the demons' corruption and won their freedom. To this day they fight for honor in an alien world that hates and reviles them.",
    tauren: "Always the tauren strive to preserve the balance of nature and heed the will of their goddess, the Earth Mother. Recently attacked by murderous centaur, the tauren would have been wiped out, save for a chance encounter with the orcs, who helped defeat the interlopers. To honor this blood-debt, the tauren joined the Horde, solidifying the two races' friendship.",
    troll: "Once at home in the jungles of Stranglethorn Vale, the fierce trolls of the Darkspear tribe were pushed out by warring factions. Eventually the trolls befriended the orcish Horde, and Thrall, the orcs' young warchief, convinced the trolls to travel with him to Kalimdor. Though they cling to their shadowy heritage, the Darkspear trolls hold a place of honor in the Horde.",
    ogre: "Though long dismissed as brutish and simple, the ogres who have joined the Horde have proven themselves cunning warriors and reliable allies. Massive in frame and relentless in battle, they bring a raw power to the Horde that few other races can match. Their patience for enemies is short—and their strength is without equal.",
    undead: "Free of the Lich King's grasp, the Forsaken seek to overthrow his rule. Led by the banshee queen Sylvanas, they hunger for vengeance against the Scourge. Humans, too, have become the enemy, relentless in their drive to purge all undead from the land. In a world that shows them neither mercy nor welcome, the Forsaken have learned to rely on no one but themselves.",
    darkfallen: "The darkfallen were elves of Quel'Thalas, felled by the Scourge and raised as undead servants to Arthas Menethil. Freed from the Lich King's will, they walk a bitter road between the life they lost and the death they were forced to endure. Stripped of warmth but not of will, they make their way in a world that has no place for them.",
    night_elf: "Ten thousand years ago, the night elves founded a vast empire, but their reckless use of primal magic brought them to ruin. In grief, they withdrew to the forests and remained isolated there until the return of their ancient enemy, the Burning Legion. With no other choice, the night elves emerged at last from their seclusion to fight for their place in the new world.",
    furbolg: "Ancient beyond reckoning, the furbolg once served as guardians of Azeroth's primordial forests. When the corruption of the Third War swept through the woodlands, many fell to madness. Those who survived and recovered are few, humbled by what they nearly became—and fiercely devoted to ensuring it never happens again.",
    blood_elf: "When the Scourge shattered Quel'Thalas and destroyed the Sunwell, the high elves who remained were left without the source of their power - and starving for magic. Renaming themselves blood elves in memory of their fallen kin, they followed their prince Kael'thas Sunstrider to Outland in search of a new source of power to ease their hunger.",
    naga: "Ten thousand years ago, the highborne night elves were swallowed by the seas when the Well of Eternity was destroyed. The Old Gods transformed them into the naga: serpentine, powerful, and ageless. Long hidden in the deep places of the world, they have risen again to serve Illidan, answering a call as old as their transformation.",
    draenei: "The draenei were hunted to near extinction when the orcish Horde driven mad by demonic corruption razed their settlements. The survivors fled into the broken wastes of Outland, hiding in its ruins for years without number. Few remain, but those who have emerged from hiding are hardened by loss and driven by a purpose that has not dulled with time.",
    goblin: "The goblins of the Steamwheedle Cartel are among the world's most prolific merchants, engineers, and opportunists. They have no king, no homeland, and no loyalty that gold cannot buy. In a world at war, they see only profit—and in every disaster, an investment opportunity.",
};

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
    base: [/*NIGHTELF_ILLIDARI,*/ BLOODELF, NAGA, DRAENEI],
    allied: [],
  },
  [NEUTRAL]: {
    base: [GOBLIN],
    allied: [],
  },
});

export const customClassesByRace = Object.freeze({
  human: {
    availableAtStart: [MAGE, ROGUE, WARRIOR, PRIEST, PALADIN, MARKSMAN],
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
    availableAtStart: [HUNTER, ROGUE, WARRIOR, MARKSMAN, PRIEST /*, ARTISAN*/],
    availableThroughUnlock: [MAGE /*, RUNEMASTER*/], // runebinder from alpha. priest could be considered as earth-speaker
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
    availableAtStart: [MAGE, ROGUE, WARRIOR, TINKER, MARKSMAN /*, ARTISAN*/],
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
    availableAtStart: [HUNTER, WARRIOR, PRIEST, RUNEMASTER],
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
    availableAtStart: [/*MAGE,*/ HUNTER, WARLOCK, WARRIOR, SHAMAN],
    availableThroughUnlock: [WITCH_DOCTOR],
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
    availableThroughUnlock: [DEATH_KNIGHT],
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
    availableAtStart: [MARKSMAN, ROGUE, PRIEST, WARLOCK, WARRIOR, MAGE],
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
  night_elf: {
    availableAtStart: [/*WARRIOR,*/ ],
    availableThroughUnlock: [],
    genderVariants: {
      male: {
        additionalAvailableAtStart: [DRUID],
        additionalAvailableThroughUnlock: [],
      },
      female: {
        additionalAvailableAtStart: [WARRIOR, ROGUE, MARKSMAN, HUNTER, PRIEST],
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
      /*ARTISAN, */ /*PALADIN */
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
    availableAtStart: [ROGUE, SHAMAN, /*WARLOCK,*/ WARRIOR, PRIEST, HUNTER],
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
        availableThroughUnlock: [HUNTER, DEATH_KNIGHT],
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