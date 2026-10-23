// factions.js

export const oldFactions = Object.freeze({
    ALLIANCE: "Alliance",
    HORDE: "Horde"
});

export const newFactions = Object.freeze({
    ALLIANCE: "Alliance",
    HORDE: "Horde",
    FORSAKEN: "Forsaken",
    NIGHT_ELVES: "Night Elves",
    ILLIDARI: "Illidan's Forces",
    NEUTRAL: "Neutral"
});

export const FACTION_DESCRIPTIONS = Object.freeze({
    [newFactions.ALLIANCE]:    'The Alliance consists of four races: the noble humans, the adventurous dwarves, the ingenious gnomes, and the exiled high elves. Bound by a loathing for all things demonic, they fight to restore order in this war-torn world.',
    [newFactions.HORDE]:       'Four races comprise the Horde: the brutal orcs, the spiritual tauren, the quick-witted trolls, and the single-minded ogres. Beset by enemies on all sides, these proud peoples are bound by strength, honor, and an unyielding will to survive and forge their own destiny.',
    [newFactions.FORSAKEN]:    "Two races make up the Forsaken: the undead humans of Lordaeron and the fallen elves of Quel'Thalas, both torn from their former lives by the Scourge and freed from the Lich King's grasp. Wretched and twisted by the curse of undeath and forever estranged from their past, they defy the fate imposed upon them in a world that fears and despises them.",
    [newFactions.NIGHT_ELVES]: "Two races have kept vigil over Azeroth's ancient places since before memory: the reclusive night elves, also known as \"children of the stars\", and the primal furbolgs, keepers of forgotten groves. Bound by a reverence for nature and a distrust of those who would defile it, they watch over the wild with unyielding resolve.",
    [newFactions.ILLIDARI]:    "Three races answer the call of the Betrayer: blood elves who fled to Outland looking to sate their hunger for magic, the serpentine naga risen from the depths to serve his cause, and draenei survivors who joined seeking vengeance of their own. They wage a war no other faction dares to name, sacrificing everything to fight the Burning Legion on their own terms.",
    [newFactions.NEUTRAL]:     'The neutral goblins pledge allegiance to no king or warchief. They can be hired as mercenaries or form their own bands when the coin is right. Driven by profit and bound by contract alone, they will deal with any buyer willing to pay - though some business relationships come harder than others.',
});