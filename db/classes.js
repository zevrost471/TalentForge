export const classes = Object.freeze({
    DEATHKNIGHT: "Death Knight",
    DRUID: "Druid",
    HUNTER: "Hunter",
    MAGE: "Mage",
    PALADIN: "Paladin",
    PRIEST: "Priest",
    ROGUE: "Rogue",
    SHAMAN: "Shaman",
    WARLOCK: "Warlock",
    WARRIOR: "Warrior",
});

export const CLASS_DESCRIPTIONS = Object.freeze({
    [classes.DRUID]:    "Druids live in a state of unparalleled union with nature. Tightly bound to the plant and animal kingdoms, they are natural shapeshifters, and so they know firsthand the abuse visited on their wild brethren. In consequence, despite their numbers, druids tend to be wary, reclusive, and difficult to spot. Few outsiders have plumbed the depths of their secrets.",
    [classes.HUNTER]:  "Hunters know the uncharted places of the world. Gifted with a deep empathy for all life, they have an uncanny knack for befriending wild animals and taming them as pets. In addition, hunters can use their finely honed senses to become master trackers. Wherever hunters go, they fight back the ravages of sickness, exploitation, and industrialization.",
    [classes.MAGE]:    "Magi are wizards of immense knowledge and skill. Their obvious physical frailty is deceptive, for they can call upon the cosmic energies of the Twisting Nether. Rarely do magi engage in melee combat. Instead, they prefer to attack from a distance, hurling powerful bolts of frost and flame at their unsuspecting enemies.",
    [classes.PALADIN]: "Paladins do battle to protect the world from the forces of shadow. Powerful warriors in their own right, they can also call upon the Light to heal wounds, create shields of force, and incinerate evil creatures. Although paladins were once exclusively human, a number of stout-hearted dwarves have recently been welcomed into the Order of the Silver Hand.",
    [classes.PRIEST]:  "Priests guide the spiritual destiny of their people. Through their unique insight into the mind, they are able to shape an individual's beliefs, whether to inspire or terrify, soothe or dominate, heal or harm. Just as the heart can hold both darkness and light, priests wield powers of creation and devastation by channeling the potent forces underlying faith.",
    [classes.ROGUE]:   "Rogues are most successful when their deeds never come to light. Fond of poisons and silent projectile weapons, rogues rely on a blend of stealth and minor mysticism. Usually in the employ of rich nobles or local governments, the rogue redistributes wealth or eliminates designated targets. A rogue's allegiance lasts only as long as the latest contract.",
    [classes.SHAMAN]:  "Shaman commune directly with the elements. Their combination of wisdom and resilience makes them ideal as tribal advisors and leaders. In battle the shaman uses totems and spells to manipulate the elements and provoke other fighters into untold heights of rage and might. Shamans exemplify the primal bond between the savage races and their environment.",
    [classes.WARLOCK]: "Warlocks are the bane of all life. Empowered by demonic blood, they can inflict great torment upon their foes. To replenish the dreadful energy their spells expend, warlocks drain vitality from their victims. The warlock can also summon and control terrifying demonic entities. Still, warlocks are feared above all else for their singular wickedness and cruelty.",
    [classes.WARRIOR]: "Warriors train constantly and strive for perfection in armed combat. Though they come from all walks of life, they are united in their singular commitment to engage in glorious battle. Many warriors serve as mercenary soldiers, while others become adventurers and danger-seeking fortune hunters. A typical warrior is strong, tough, and exceptionally violent.",
});

export const customClasses = Object.freeze({
    // ARTISAN: "Artisan",
    MARKSMAN: "Marksman", 
    TINKER: "Tinker",
    WITCH_DOCTOR: "Witch Doctor",
    RUNEMASTER: "Runemaster",
});

export const CUSTOM_CLASS_DESCRIPTIONS = Object.freeze({
    [classes.DEATHKNIGHT]: "Death Knights carry the weight of a death already survived. Once human soldiers claimed by the Lich King, they were bound in undeath and reforged into his most feared instruments - rime, plague, and dominion over the dead placed in service of absolute destruction. That some broke free at all speaks to a will the grave itself could not extinguish. Among the Forsaken, only those who have endured this ordeal may walk this path.",
    [classes.DRUID]:    CLASS_DESCRIPTIONS.Druid,
    [classes.HUNTER]:  "Hunters know the uncharted places of the world. Gifted with a deep empathy for all life, they have an uncanny knack for befriending wild animals and taming them as pets. Their finely honed senses make them relentless trackers, and few match their patience or precision when the moment to strike arrives. The wilderness offers them shelter and the civilization offers them purpose, and hunters repay both in kind.",
    [classes.MAGE]:    CLASS_DESCRIPTIONS.Mage,
    [classes.PALADIN]: "Paladins do battle to protect the world from the forces of shadow. Powerful warriors in their own right, they can also call upon the Light to heal wounds, create shields of force, and incinerate evil creatures. Although paladins were once exclusively human, a number of high elves - long allied with humanity and drawn to the order's solemn purpose - have since found their calling within the Silver Hand. Among the blood elves, a separate order has since emerged - the Blood Knights - wielding the same powers through means the Silver Hand would not call righteous.",
    [classes.PRIEST]:  CLASS_DESCRIPTIONS.Priest,
    [classes.ROGUE]:   CLASS_DESCRIPTIONS.Rogue,
    [classes.SHAMAN]:  "Shaman commune directly with the elements. Their combination of wisdom and resilience makes them ideal as tribal advisors and leaders. In battle the shaman invokes the ancient forces of earth and sky to manipulate the elements and provokes other fighters into untold heights of rage and might. Shamans exemplify the primal bond between the savage races and their environment.",
    [classes.WARLOCK]: "Warlocks are the bane of all life. Empowered by forbidden knowledge and dark bargains, they can inflict great torment upon their foes. To replenish the dreadful energy their spells expend, warlocks drain vitality from their victims. The warlock can also summon and bind terrifying entities to their will. Still, warlocks are feared above all else for their singular wickedness and cruelty.",
    [classes.WARRIOR]: CLASS_DESCRIPTIONS.Warrior,
    [customClasses.MARKSMAN]: "Marksmen are students of distance and masters of it. Patient by nature and calculating by habit, they dismantle an enemy advance long before the lines meet - while others draw steel, a marksman has already chosen a target and found the range. Many serve in standing armies and city garrisons, prized above other soldiers for their ability to decide a battle from afar. A skilled marksman does not seek glory in close combat; they ensure it never comes to that.",
    [customClasses.TINKER]: "Tinkers solve problems with invention. Equipped with mechanical contraptions of their own devising, they bring gadgets and volatile ingenuity to a fight where others bring blades and spells. Among goblins and gnomes alike, the tinker is celebrated for their creations tend to be as unpredictable as they are effective. There is, as a rule, always more to a tinker than meets the eye.",
    [customClasses.WITCH_DOCTOR]: "Witch Doctors are practitioners of an ancient and nefarious craft. Through wards planted at the edges of battle and dark rites, they excel at neutralizing their enemies while protecting and augmenting their allies. Their potent rites work directly upon the body - driving companions past the limits of endurance - to extract a power no conventional magic can replicate. What they offer as salvation seldom feels like it.",
    [customClasses.RUNEMASTER]: "Runemasters are warriors who have turned their own bodies into weapons. Through mystic tattoos inscribed across skin and muscle, they channel arcane energies directly into each strike - every rune a conduit of power drawn from the ley lines that run unseen beneath the world. They do not wield magic; they become it, overlaying flesh and bone with the same patterns of force that govern the land itself. Free-spirited and more at home in the wild than in any city, their art is considered primitive by most - a judgment that rarely survives first contact.",
});    