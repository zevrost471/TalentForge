// db-config.js — shared expansion/class availability data for DB pages

export const EXPANSION_ORDER = ['vanilla', 'tbc', 'wotlk', 'cataclysm', 'forever', 'peoples'];

// URL hash slug used per expansion (e.g. #classic/classes/hunter).
export const EXPANSION_URL_SLUG = {
    vanilla:   'classic',
    tbc:       'tbc',
    wotlk:     'wotlk',
    cataclysm: 'cataclysm',
    forever:   'forever',
    peoples:   'peoples',
};
export const URL_SLUG_TO_EXPANSION = Object.fromEntries(
    Object.entries(EXPANSION_URL_SLUG).map(([exp, slug]) => [slug, exp])
);

// Earliest expansion a class is available in.
export const CLASS_AVAILABILITY = {
    druid:        'vanilla',
    hunter:       'vanilla',
    mage:         'vanilla',
    paladin:      'vanilla',
    priest:       'vanilla',
    rogue:        'vanilla',
    shaman:       'vanilla',
    warlock:      'vanilla',
    warrior:      'vanilla',
    death_knight: 'wotlk',
    witch_doctor: 'peoples',
    tinker:       'peoples',
    marksman:     'peoples',
    runemaster:   'peoples',
};

// Expansions where a class is explicitly unavailable despite passing the min-exp check.
export const CLASS_EXCLUDED_EXPANSIONS = {
    death_knight: new Set(['forever']),
};

// All DB classes in display order
export const ALL_DB_CLASSES = [
    { slug: 'death_knight', name: 'Death Knight' },
    { slug: 'druid',        name: 'Druid' },
    { slug: 'hunter',       name: 'Hunter' },
    { slug: 'mage',         name: 'Mage' },
    { slug: 'marksman',     name: 'Marksman' },
    { slug: 'paladin',      name: 'Paladin' },
    { slug: 'priest',       name: 'Priest' },
    { slug: 'rogue',        name: 'Rogue' },
    { slug: 'runemaster',   name: 'Runemaster' },
    { slug: 'shaman',       name: 'Shaman' },
    { slug: 'tinker',       name: 'Tinker' },
    { slug: 'warlock',      name: 'Warlock' },
    { slug: 'warrior',      name: 'Warrior' },
    { slug: 'witch_doctor', name: 'Witch Doctor' },
];

// 'peoples' is a parallel custom expansion, not a WoW timeline sequel.
// - Classes with minExp 'peoples' are exclusive to it.
// - All other classes (including death_knight) appear in peoples.
export function isClassAvailableInExpansion(classSlug, expansion) {
    if (CLASS_EXCLUDED_EXPANSIONS[classSlug]?.has(expansion)) return false;
    const minExp = CLASS_AVAILABILITY[classSlug] ?? 'vanilla';
    if (minExp === 'peoples') return expansion === 'peoples';
    if (expansion === 'peoples') return true;
    const minIdx = EXPANSION_ORDER.indexOf(minExp);
    const curIdx = EXPANSION_ORDER.indexOf(expansion);
    if (minIdx === -1 || curIdx === -1) return true;
    return curIdx >= minIdx;
}
