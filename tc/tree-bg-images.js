// tree-bg-images.js

const baseUrl = "https://wow.zamimg.com/images/wow/talents/backgrounds";

const backgroundImageIds = {
    druid: { Balance: 283, "Feral Combat": 281, Restoration: 282 },
    hunter: {
        "Beast Mastery": 361,
        Marksmanship: 363,
        Survival: 362,
        "Ranged Combat": 363,
        Outdoorsmanship: 362
    },
    mage: { Arcane: 81, Fire: 41, Frost: 61 },
    paladin: { Holy: 382, Protection: 383, Retribution: 381 },
    priest: { Discipline: 201, Holy: 202, Shadow: 203 },
    rogue: { Assassination: 182, Combat: 181, Subtlety: 183 },
    shaman: { Elemental: 261, Enhancement: 263, Restoration: 262 },
    warlock: { Affliction: 302, Demonology: 303, Destruction: 301 },
    warrior: { Arms: 161, Fury: 164, Protection: 163 },
    deathknight: { Blood: 398, Frost: 399, Unholy: 400 }
};

export const backgroundImages = Object.fromEntries(
    Object.entries(backgroundImageIds).map(([cls, specs]) => {
        const expansion = cls === "deathknight" ? "wrath" : "classic";
        const specEntries = Object.fromEntries(
            Object.entries(specs).map(([spec, id]) => [
                spec,
                `${baseUrl}/${expansion}/${id}.jpg`
            ])
        );
        return [cls, specEntries];
    })
);
