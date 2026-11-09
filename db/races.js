// races.js

import { classes } from "./classes.js";
import { classicFactions as factions } from "./factions.js";

export const races = Object.freeze({
    HUMAN: "Human",
    DWARF: "Dwarf",
    NIGHTELF: "Night Elf",
    GNOME: "Gnome",
    DRAENEI: "Draenei",
    ORC: "Orc",
    TAUREN: "Tauren",
    TROLL: "Troll",
    UNDEAD: "Undead",
    BLOODELF: "Blood Elf",
});

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

const ALLIANCE = factions.ALLIANCE;
const HORDE = factions.HORDE;

const FALLBACK_ICON = "inv_misc_questionmark";

export const raceBaseData = Object.freeze({
  human:     { name: "Human",     icons: { male: "achievement_character_human_male",     female: "achievement_character_human_female"     } },
  dwarf:     { name: "Dwarf",     icons: { male: "achievement_character_dwarf_male",     female: "achievement_character_dwarf_female"     } },
  night_elf: { name: "Night Elf", icons: { male: "achievement_character_nightelf_male",  female: "achievement_character_nightelf_female"  } },
  gnome:     { name: "Gnome",     icons: { male: "achievement_character_gnome_male",     female: "achievement_character_gnome_female"     } },
  draenei:   { name: "Draenei",   icons: { male: "achievement_character_draenei_male",   female: "achievement_character_draenei_female"   } },
  orc:       { name: "Orc",       icons: { male: "achievement_character_orc_male",       female: "achievement_character_orc_female"       } },
  tauren:    { name: "Tauren",    icons: { male: "achievement_character_tauren_male",    female: "achievement_character_tauren_female"    } },
  troll:     { name: "Troll",     icons: { male: "achievement_character_troll_male",     female: "achievement_character_troll_female"     } },
  undead:    { name: "Undead",    icons: { male: "achievement_character_undead_male",    female: "achievement_character_undead_female"    } },
  blood_elf: { name: "Blood Elf", icons: { male: "achievement_character_bloodelf_male",  female: "achievement_character_bloodelf_female"  } },
});

const HUMAN    = "human";
const DWARF    = "dwarf";
const NIGHTELF = "night_elf";
const GNOME    = "gnome";
const DRAENEI  = "draenei";
const ORC      = "orc";
const TAUREN   = "tauren";
const TROLL    = "troll";
const UNDEAD   = "undead";
const BLOODELF = "blood_elf";

export const classicPlayableRaces = Object.freeze([
  HUMAN, DWARF, NIGHTELF, GNOME, ORC, TAUREN, TROLL, UNDEAD,
]);

export const tbcPlayableRaces = Object.freeze([
  HUMAN, DWARF, NIGHTELF, GNOME, DRAENEI, ORC, TAUREN, TROLL, UNDEAD, BLOODELF,
]);

export const classicRacesByFaction = Object.freeze({
  [ALLIANCE]: [HUMAN, DWARF, NIGHTELF, GNOME],
  [HORDE]: [ORC, TAUREN, TROLL, UNDEAD],
});

export const tbcRacesByFaction = Object.freeze({
  [ALLIANCE]: [HUMAN, DWARF, NIGHTELF, GNOME, DRAENEI],
  [HORDE]: [ORC, TAUREN, TROLL, UNDEAD, BLOODELF],
});

export const availableClassesByRace = Object.freeze({
  human: [MAGE, PALADIN, PRIEST, ROGUE, WARLOCK, WARRIOR],
  dwarf: [HUNTER, PALADIN, PRIEST, ROGUE, WARRIOR],
  gnome: [MAGE, ROGUE, WARLOCK, WARRIOR],
  night_elf: [DRUID, HUNTER, PRIEST, ROGUE, WARRIOR],
  draenei: [HUNTER, MAGE, PALADIN, PRIEST, SHAMAN, WARRIOR],
  orc: [HUNTER, ROGUE, SHAMAN, WARLOCK, WARRIOR],
  tauren: [DRUID, HUNTER, SHAMAN, WARRIOR],
  troll: [HUNTER, MAGE, PRIEST, ROGUE, SHAMAN, WARRIOR],
  undead: [MAGE, PRIEST, ROGUE, WARLOCK, WARRIOR],
  blood_elf: [HUNTER, MAGE, PALADIN, PRIEST, ROGUE, WARLOCK, WARRIOR],
});

export const wotlkExtraClassesByRace = Object.freeze(
  Object.fromEntries(tbcPlayableRaces.map(id => [id, [DEATH_KNIGHT]]))
);

export function getAllRaces() {
  return Object.values(raceBaseData);
}

export function getRaceById(id) {
  return raceBaseData[id] || null;
}

export function getRaceIcon(raceId, gender = 'male') {
  return raceBaseData[raceId]?.icons?.[gender] ?? FALLBACK_ICON;
}

export function getClassicRacesByFaction(faction) {
  const ids = classicRacesByFaction[faction];
  if (!ids) return [];
  return ids.map(id => raceBaseData[id]).filter(Boolean);
}

export function getTBCRacesByFaction(faction) {
  const ids = tbcRacesByFaction[faction];
  if (!ids) return [];
  return ids.map(id => raceBaseData[id]).filter(Boolean);
}
