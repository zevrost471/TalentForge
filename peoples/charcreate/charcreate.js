import { customRacesByFaction, customClassesByRace, raceBaseData } from '../../db/custom/races.js';
import { CUSTOM_CLASS_DESCRIPTIONS } from '../../db/classes.js';
import { newFactions, FACTION_DESCRIPTIONS } from '../../db/custom/factions.js';
// import { assembleBackground } from './blp-decoder.js';

const ALLIANCE    = newFactions.ALLIANCE;
const HORDE       = newFactions.HORDE;
const FORSAKEN    = newFactions.FORSAKEN;
const NIGHT_ELVES = newFactions.NIGHT_ELVES;
const ILLIDARI    = newFactions.ILLIDARI;
const NEUTRAL     = newFactions.NEUTRAL;

const FACTIONS = [ALLIANCE, HORDE, FORSAKEN, NIGHT_ELVES, ILLIDARI, NEUTRAL];

const FACTION_ICONS = {
    [ALLIANCE]:    '../../assets/icons/factions/inv_misc_tournaments_banner_human.jpg',
    [HORDE]:       '../../assets/icons/factions/inv_misc_tournaments_banner_orc.jpg',
    [FORSAKEN]:    '../../assets/icons/factions/inv_misc_tournaments_banner_scourge.jpg',
    [NIGHT_ELVES]: '../../assets/icons/factions/inv_misc_tournaments_banner_nightelf.jpg',
    [ILLIDARI]:    '../../assets/icons/factions/achievement_faction_illidari.jpg',
    [NEUTRAL]:     '../../assets/icons/inv/inv_misc_coin_01.jpg',
};

const FACTION_INFO = {
    [ALLIANCE]:    { tab: 'Alliance',    accent: '#213478', aRgb: '33,52,120',   text: '#6a84c8', bg: 'linear-gradient(160deg, #0c1230 0%, #060814 100%)' },
    [HORDE]:       { tab: 'Horde',       accent: '#9c2423', aRgb: '156,36,35',   text: '#d4706f', bg: 'linear-gradient(160deg, #280a0a 0%, #100404 100%)' },
    [FORSAKEN]:    { tab: 'Forsaken',    accent: '#272a60', aRgb: '39,42,96',     text: '#7a80cc', bg: 'linear-gradient(160deg, #0e0f28 0%, #07080f 100%)' },
    [NIGHT_ELVES]: { tab: 'Night Elves', accent: '#3c345b', aRgb: '60,52,91',    text: '#9d8fcc', bg: 'linear-gradient(160deg, #1a0f2e 0%, #0d0718 100%)' },
    [ILLIDARI]:    { tab: 'Illidan\'s Forces',    accent: '#23a008', aRgb: '35,160,8',    text: '#5ddb3a', bg: 'linear-gradient(160deg, #091a04 0%, #040d02 100%)' },
    [NEUTRAL]:     { tab: 'Neutral',     accent: '#cc943e', aRgb: '204,148,62',  text: '#e8c07a', bg: 'linear-gradient(160deg, #2a1c08 0%, #120e04 100%)' },
};

const RACE_DISPLAY_NAMES = { darkfallen: 'Undead (Darkfallen)' };

const RACE_DESCRIPTIONS = {
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

/* CLASS_DESCRIPTIONS — replaced by CUSTOM_CLASS_DESCRIPTIONS from ../../db/classes.js
const CLASS_DESCRIPTIONS = {
    'Death Knight': "Once fallen heroes raised into undeath, Death Knights channel runic power and the chill of the grave to devastate their enemies. They are the Lich King's most dangerous creation - now freed to make destruction their own.",
    'Druid': "Druids are guardians of the natural order, shapeshifters who draw power from the Emerald Dream and the ancient ley lines of Azeroth. Their strength flows not from conquest, but from balance.",
    'Hunter': "Hunters are masters of the wilds, tracking prey across any terrain and commanding loyal beasts in battle. They hold more knowledge of Azeroth's wild places than any library ever could.",
    'Mage': "Mages bend the fundamental forces of arcane magic to their will - summoning fire, frost, and pure energy with a thought. Their power is immense, and their mistakes catastrophic.",
    'Marksman': "Where hunters read the land, Marksmanship is a discipline of precision and patience. Every shot is calculated, every target studied - and when the arrow flies, it does not miss.",
    'Paladin': "Paladins are holy warriors who wield the Light as both sword and shield. Bound to a strict code of justice, they stand at the threshold between faith and fury.",
    'Priest': "Priests wield the power of holy light and divine shadow to mend wounds, break minds, and inspire the faithful. Whether servant of the Light or conduit of the Void, their will is their greatest weapon.",
    'Rogue': "Rogues deal in information, leverage, and the well-placed blade. Patient, pragmatic, and invisible until the moment they choose otherwise - they live in the spaces between trust and consequence.",
    'Runemaster': "Runemasters carve ancient symbols of power into weapons and armor, shaping reality through the old language of creation itself. Equal parts scholar and warrior, they fight with patience and inevitability.",
    'Shaman': "Shamans commune directly with the elemental spirits of Azeroth - fire, water, earth, and air - calling them as allies and intermediaries between mortals and the spirit world.",
    'Tinker': "Tinkers are engineers who've made technology their weapon of war. Deploying gadgets, bombs, and mechanical constructs, they turn creativity into carnage in ways no blacksmith ever imagined.",
    'Warlock': "Warlocks practice forbidden arts, binding demons to their will and harnessing fel energy for power that corrupts as much as it empowers. Effective. Dangerous. Useful.",
    'Warrior': "Warriors fight through raw strength and relentless discipline. No magic, no tricks - just the mastery of steel, the endurance of stone, and the will to outlast everything that stands against them.",
    'Witch Doctor': "Witch Doctors are mystical practitioners of voodoo and ancient ritual magic, calling on ancestor spirits and the loa to bless allies or curse enemies. Their ways are old, their methods unsettling, and their power genuine.",
};
*/

// Race backgrounds — populated asynchronously from BLP files in assets/dressupframe/
// Races without a BLP entry fall back to the faction gradient.
// const RACE_BACKGROUNDS = {};

// Maps race IDs to the BLP base filename (tiles 1–4 are appended automatically)
// const BLP_BACKGROUNDS = {
//     human:      'dressupbackground-human',
//     dwarf:      'dressupbackground-dwarf',
//     orc:        'dressupbackground-orc',
//     undead:     'dressupbackground-scourge',
//     darkfallen: 'dressupbackground-scourge',
//     tauren:     'dressupbackground-tauren',
//     night_elf:  'dressupbackground-nightelf',
//     blood_elf:  'dressupbackground-bloodelf',
// };

const RACE_BACKGROUNDS = {
    human:      '../../assets/charcreate-bgs/elwynn_3.jpg',
    dwarf:      '../../assets/charcreate-bgs/dun_morogh_2.jpg',
    gnome:      '../../assets/charcreate-bgs/dun_morogh_3.jpg',
    high_elf:   '../../assets/charcreate-bgs/queldanil_lodge.jpg',
    orc:        '../../assets/charcreate-bgs/durotar.jpg',
    tauren:     '../../assets/charcreate-bgs/mulgore_5.jpg',
    troll:      '../../assets/charcreate-bgs/durotar_4.jpg',
    ogre:       '../../assets/charcreate-bgs/dustwallow-marsh_4.jpg',
    undead:     '../../assets/charcreate-bgs/tirisfal_2.jpg',
    darkfallen: '../../assets/charcreate-bgs/ghostlands.jpg',
    night_elf:  '../../assets/charcreate-bgs/teldrassil.jpg',
    furbolg:    '../../assets/charcreate-bgs/darkshore_3.jpg',
    blood_elf:  '../../assets/charcreate-bgs/eversong-woods_2.jpg',
    naga:       '../../assets/charcreate-bgs/zoram_strand.jpg',
    draenei:    '../../assets/charcreate-bgs/blasted_lands.jpg',
    goblin:     '../../assets/charcreate-bgs/ratchet.jpg',
};

const ALL_CLASSES = [
    'Death Knight', 'Druid', 'Hunter', 'Mage', 'Marksman', 'Paladin',
    'Priest', 'Rogue', 'Runemaster', 'Shaman', 'Tinker', 'Warlock',
    'Warrior', 'Witch Doctor',
];

const state = { raceId: 'human', gender: 'male', className: getClassesForGender('human', 'male').available[0] ?? null, unlockEnabled: false, factionPage: 0 };

// WoW UI color palette
const W = {
    panelBg:          'rgba(4,4,8,0.72)',
    border:           '#4e3608',
    bright:           '#c9a227',
    gold:             '#ffd700',
    amber:            '#d4a017',
    text:             '#e8e0d0',
    dim:              '#5a4c2e',
    veryDim:          '#2a2218',
    locked:           '#191410',
    metalTop:         '#9a9897',
    metalFrame:       'border:1.5px solid #9a9897;border-bottom-color:#4e4e4c;border-left-color:#4e4e4c;border-right-color:#7b7670;box-shadow:0 0 0 1px #000,-2px 2px 4px rgba(0,0,0,0.9),inset 0 0 0 1px rgba(0,0,0,0.85)',
    metalFramePanel:  'border:1.5px solid #9a9897;border-bottom-color:#4e4e4c;border-left-color:#4e4e4c;border-right-color:#7b7670;box-shadow:0 0 0 1px #000,-2px 2px 4px rgba(0,0,0,0.9),inset 0 0 0 1px rgba(0,0,0,0.85),inset 0 0 24px rgba(0,0,0,0.55)',
};

// ——— Helpers ———

function getFactionForRace(raceId) {
    for (const faction of FACTIONS) {
        const d = customRacesByFaction[faction];
        if (!d) continue;
        if ([...(d.base || []), ...(d.allied || [])].includes(raceId)) return faction;
    }
    return ALLIANCE;
}

function getRaceIconUrl(icon) {
    if (!icon) return '';
    if (icon.startsWith('http')) return icon;
    if (icon.startsWith('assets/')) return `../../${icon}.jpg`;
    return `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`;
}

function getClassIconUrl(className) {
    const overrides = {
        'Hunter': 'inv_spear_02',
        'Marksman': 'classicon_hunter',
        'Tinker': 'inv_10_engineering_manufacturedparts_gear_uprez',
        'Witch Doctor': 'inv_staff_goldfeathered_01',
        'Runemaster': 'spell_fire_sealoffire',
    };
    const key = overrides[className] ?? `classicon_${className.toLowerCase().replace(/\s+/g, '')}`;
    return `https://wow.zamimg.com/images/wow/icons/large/${key}.jpg`;
}

function hasGenderVariant(raceId) {
    return raceBaseData[raceId]?.genderVariants?.some(v => v.gender === 'female') ?? false;
}

function getClassesForGender(raceId, gender) {
    const data = customClassesByRace[raceId];
    if (!data) return { available: [], unlock: [] };
    const variant = data.genderVariants?.[gender] || {};
    return {
        available: [...data.availableAtStart, ...(variant.additionalAvailableAtStart || [])].sort(),
        unlock: [...data.availableThroughUnlock, ...(variant.additionalAvailableThroughUnlock || [])].sort(),
    };
}

function getClassStatus(className) {
    const { available, unlock } = getClassesForGender(state.raceId, state.gender);
    if (available.includes(className)) return 'available';
    if (unlock.includes(className)) return state.unlockEnabled ? 'unlock' : 'locked';
    return 'locked';
}

// ——— Renderers ———

function renderRacePanel() {
    const page         = state.factionPage;
    const COLS         = 3;
    const totalPages   = Math.ceil(FACTIONS.length / COLS);
    const canPrev      = page > 0;
    const canNext      = page < totalPages - 1;
    const visibleFactions = FACTIONS.slice(page * COLS, page * COLS + COLS);

    // Fix height to the tallest page so switching pages doesn't resize the panel.
    // Column layout: padding-top(3px) + header(3em) + n*gap(6px) + n*icon(60px) + padding-bottom(40px)
    // = calc(3em + (43 + n*66)px)
    const globalMaxRaces = Math.max(...FACTIONS.map(f => {
        const ids = [...(customRacesByFaction[f]?.base || []), ...(customRacesByFaction[f]?.allied || [])];
        return state.gender === 'female' ? ids.filter(id => hasGenderVariant(id)).length : ids.length;
    }));
    const panelMinH = `calc(3em + ${43 + globalMaxRaces * 66}px)`;

    const arrowBtn = (action, enabled, label) => `
        <button data-action="${action}" ${!enabled ? 'disabled' : ''}
                style="flex-shrink:0; width:16px; align-self:stretch; display:flex; align-items:center; justify-content:center;
                       background:rgba(4,4,8,0.6); border:1px solid ${enabled ? W.border : 'rgba(78,54,8,0.3)'}; border-radius:4px;
                       cursor:${enabled ? 'pointer' : 'default'}; padding:0; transition:all 0.15s;
                       color:${enabled ? W.gold : W.dim};">
            <i class="fa-solid ${label}" style="font-size:0.6rem; pointer-events:none;"></i>
        </button>`;

    /* Banner image paths (commented out)
    const BANNER_IMAGES = [
        '../../assets/charcreate-ui/banners_1.jpg',
        '../../assets/charcreate-ui/banners_2.jpg',
    ];
    const bannerImg = BANNER_IMAGES[page] ?? BANNER_IMAGES[0];
    */

    const columns = visibleFactions.map(faction => {
        const info = FACTION_INFO[faction];
        const raceIds = [
            ...(customRacesByFaction[faction]?.base   || []),
            ...(customRacesByFaction[faction]?.allied || []),
        ];

        const icons = raceIds.map(raceId => {
            const base = raceBaseData[raceId];
            if (!base) return '';
            if (state.gender === 'female' && !hasGenderVariant(raceId)) return '';
            const variant = base.genderVariants?.find(v => v.gender === state.gender) || base.genderVariants?.find(v => v.gender === 'male') || base.genderVariants?.[0];
            const iconUrl     = getRaceIconUrl(variant?.icon);
            const sel         = raceId === state.raceId;
            const displayName = RACE_DISPLAY_NAMES[raceId] ?? base.name;

            return `
                <button data-action="select-race" data-race-id="${raceId}"
                        style="position:relative; width:60px; height:60px; flex-shrink:0; border-radius:7px; overflow:hidden; cursor:pointer; ${W.metalFrame}; background:#050508; padding:0; display:block; transition:all 0.15s;">
                    <img src="${iconUrl}" alt="${displayName}"
                         style="width:100%; height:100%; object-fit:contain; display:block;"
                         onerror="this.onerror=null;this.src='https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'">
                    ${sel ? `<div style="position:absolute;inset:0;box-shadow:inset 0 0 7px rgba(255,215,0,1),inset 0 0 7px rgba(255,215,0,1),inset 0 0 7px rgba(255,215,0,1),inset 0 0 7px rgba(255,215,0,1);pointer-events:none;z-index:1;"></div>` : ''}
                    ${sel ? `<span style="position:absolute; bottom:0; left:0; right:0; text-align:center; font-size:0.65rem; font-family:'Philosopher',serif; color:${W.gold}; padding:1px 2px; line-height:1.2; display:block; z-index:2; text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;">${displayName}</span>` : ''}
                </button>
            `;
        }).join('');

        return `
            <div style="flex:1; min-width:0; display:flex; flex-direction:column; align-items:center; gap:6px; position:relative; z-index:0; padding:3px 3px 40px 3px;">
                <div style="position:absolute; inset:0 16px; background:linear-gradient(to bottom, rgba(${info.aRgb},1) 0%, rgba(${info.aRgb},0.6) 100%); clip-path:polygon(0% 0%, 100% 0%, 100% 88%, 50% 100%, 0% 88%); filter:drop-shadow(0 0 3px rgba(${info.aRgb},0.35)); z-index:-1; pointer-events:none;"></div>
                <div style="position:relative; width:100%; text-align:center; padding-bottom:4px; height:3em; flex-shrink:0; display:flex; align-items:center; justify-content:center; overflow:hidden;">
                    <span style="font-size:1.1rem; font-weight:700; letter-spacing:0.04em; color:${W.gold}; line-height:1.2; display:block; overflow-wrap:break-word; font-family:'Philosopher',serif; -webkit-text-stroke:0.5px #000; text-shadow:1px 1px 0 #000;">${info.tab}</span>
                </div>
                ${icons}
            </div>
        `;
    }).join('');

    return `
        <div style="display:flex; gap:3px; align-items:stretch;">
            ${arrowBtn('prev-faction-page', canPrev, 'fa-chevron-left')}
            <div style="flex:1; display:flex; gap:8px; min-width:0; min-height:${panelMinH};">
                ${columns}
            </div>
            ${arrowBtn('next-faction-page', canNext, 'fa-chevron-right')}
        </div>
    `;
    /* Banner image backgrounds (commented out)
    return `
        <div style="display:flex; gap:3px; align-items:stretch;">
            ${arrowBtn('prev-faction-page', canPrev, 'fa-chevron-left')}
            <div style="flex:1; min-width:0; display:grid; grid-template-areas:'stack'; border-radius:4px; overflow:hidden;">
                <img src="${bannerImg}" alt="" style="grid-area:stack; width:100%; height:auto; display:block; align-self:start; pointer-events:none;">
                <div style="grid-area:stack; display:flex; gap:0; min-width:0; align-items:flex-start;">
                    ${columns}
                </div>
            </div>
            ${arrowBtn('next-faction-page', canNext, 'fa-chevron-right')}
        </div>
    `;
    */
}

function renderGenderButtons() {
    if (!hasGenderVariant(state.raceId)) return `<div style="height:52px;"></div>`;

    return `
        <div style="display:flex; justify-content:center; gap:10px; padding:4px 0;">
            ${['male', 'female'].map(g => {
                const active = state.gender === g;
                const src = g === 'male'
                    ? '../../assets/icons/ui/wow/ui_charactercreate_gender_male.jpg'
                    : '../../assets/icons/ui/wow/ui_charactercreate_gender_female.jpg';
                return `
                    <button data-action="select-gender" data-gender="${g}"
                            style="position:relative; width:calc((100% - 18px) / 7); aspect-ratio:1/1; border-radius:7px; overflow:hidden; cursor:pointer; border:none; padding:0; transition:all 0.15s;">
                        <img src="${src}" alt="${g}" style="width:100%; height:100%; object-fit:cover; display:block;"
                             onerror="this.onerror=null;this.parentElement.innerHTML='<span style=\'display:block;text-align:center;font-size:1.6rem;line-height:42px;color:${active ? W.gold : W.dim};\'>${g === 'male' ? '&#9794;' : '&#9792;'}</span>'">
                        ${active ? `<div style="position:absolute;inset:0;box-shadow:inset 0 0 7px rgba(255,215,0,1),inset 0 0 7px rgba(255,215,0,1),inset 0 0 7px rgba(255,215,0,1),inset 0 0 7px rgba(255,215,0,1);pointer-events:none;z-index:1;"></div>` : ''}
                        ${active ? `<span style="position:absolute; bottom:0; left:0; right:0; text-align:center; font-size:0.65rem; color:${W.gold}; padding:1px 2px; line-height:1.4; display:block; z-index:2; text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;">${g === 'male' ? 'Male' : 'Female'}</span>` : ''}
                    </button>
                `;
            }).join('')}
        </div>
    `;
}

function renderClassGrid() {

    const items = ALL_CLASSES.map(cls => {
        const status = getClassStatus(cls);
        const sel = cls === state.className;
        let imgStyle, cursor, events;

        if (status === 'locked') {
            imgStyle = 'brightness(0.15) grayscale(1)';
            cursor = 'not-allowed'; events = 'pointer-events:none;';
        } else {
            imgStyle = '';
            cursor = 'pointer'; events = '';
        }

        return `
            <div data-action="${status !== 'locked' ? 'select-class' : ''}" data-class="${cls}"
                 style="position:relative; aspect-ratio:1/1; border-radius:7px; overflow:hidden; cursor:${cursor}; ${events} ${W.metalFrame}; filter:${imgStyle}; transition:all 0.15s;">
                <img src="${getClassIconUrl(cls)}" alt="${cls}"
                     style="width:100%; height:100%; object-fit:cover; display:block;"
                     onerror="this.style.display='none'">
                ${sel ? `<div style="position:absolute;inset:0;box-shadow:inset 0 0 7px rgba(255,215,0,1),inset 0 0 7px rgba(255,215,0,1),inset 0 0 7px rgba(255,215,0,1),inset 0 0 7px rgba(255,215,0,1);pointer-events:none;z-index:1;"></div>` : ''}
                ${sel ? `<span style="position:absolute; bottom:0; left:0; right:0; text-align:center; font-size:0.65rem; font-family:'Philosopher',serif; color:${W.gold}; padding:1px 2px; line-height:1.2; display:block; z-index:2; text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;">${cls}</span>` : ''}
            </div>
        `;
    }).join('');

    return `
        <div>
            <div style="display:grid; grid-template-columns:repeat(7,1fr); gap:3px;">
                ${items}
            </div>
        </div>
    `;
}

function renderPortrait() {
    const faction = getFactionForRace(state.raceId);
    const info = FACTION_INFO[faction];
    const bgUrl = RACE_BACKGROUNDS[state.raceId];
    const bgStyle = bgUrl ? `background:transparent;` : `background:${info.bg};`;
    const glowLayer = !bgUrl
        ? `<div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 35%, rgba(${info.aRgb},0.07) 0%, transparent 65%);"></div>` : '';

    return `
        <div style="position:relative; width:100%; height:100%; ${bgStyle}">
            ${glowLayer}
        </div>
    `;
}

function renderDescriptions() {
    const faction = getFactionForRace(state.raceId);
    const info = FACTION_INFO[faction];
    const base = raceBaseData[state.raceId];
    const displayName = RACE_DISPLAY_NAMES[state.raceId] ?? base?.name ?? '';
    const raceVariant = base?.genderVariants?.find(v => v.gender === state.gender)
        || base?.genderVariants?.find(v => v.gender === 'male')
        || base?.genderVariants?.[0];
    const raceIconUrl = getRaceIconUrl(raceVariant?.icon);
    const factionDesc = FACTION_DESCRIPTIONS[faction] ?? '';
    const raceDesc = RACE_DESCRIPTIONS[state.raceId] ?? '';
    const classDesc = state.className ? (CUSTOM_CLASS_DESCRIPTIONS[state.className] ?? '') : null;

    // WoW-style panel border colours
    const panelBg     = 'rgba(4,4,8,0.72)';
    const medallionSize = 44;
    const medallionOffset = 10; // how many px it pokes above/left of the panel

    const wowBox = (iconUrl, iconBg, title, body, bodyFallback) => `
        <div style="position:relative; flex:1; min-height:0; display:flex; flex-direction:column; padding-top:${medallionOffset + 4}px;">
            <!-- Medallion -->
            <div style="position:absolute; top:0; left:4px; z-index:2;
                        width:${medallionSize}px; height:${medallionSize}px; border-radius:7px;
                        background:${iconBg};
                        ${W.metalFrame};
                        overflow:hidden; flex-shrink:0;">
                ${iconUrl
                    ? `<img src="${iconUrl}" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.style.display='none'">`
                    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:700;color:${W.gold};text-shadow:0 0 6px rgba(0,0,0,0.9);">${title.charAt(0)}</div>`
                }
            </div>
            <!-- Panel (scroll container) -->
            <div class="wow-scroll" style="flex:1; min-height:0; overflow-y:auto; scroll-behavior:auto;
                        background:${panelBg};
                        ${W.metalFramePanel};
                        border-radius:7px;
                        padding:6px 28px 8px 8px;">
                <!-- Title -->
                <div style="font-size:1.1rem; font-weight:700; letter-spacing:0.07em; font-family:'Philosopher',serif; color:${W.gold}; margin-bottom:4px; padding-left:${medallionSize + 8}px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; -webkit-text-stroke:0.5px #000; text-shadow:1px 1px 0 #000;">
                    ${title}
                </div>
                <div style="height:1px; background:linear-gradient(to right,${W.metalTop},${W.metalTop}44,transparent); margin-bottom:6px; margin-left:${medallionSize + 8}px;"></div>
                <!-- Body -->
                <div style="font-size:0.82rem; color:${body ? W.text : W.dim}; line-height:1.68; font-style:${body ? 'normal' : 'italic'}; font-family:'Philosopher',serif; text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;">
                    ${body || bodyFallback || 'No description available.'}
                </div>
            </div>
        </div>
    `;

    return `
        <div style="display:flex; flex-direction:column; gap:14px; height:100%; padding:4px 2px 2px 2px;">
            ${wowBox(FACTION_ICONS[faction] ?? null, info.bg, info.tab, factionDesc, '')}
            ${wowBox(raceIconUrl, '#1e1608', displayName, raceDesc, 'No description available.')}
            ${wowBox(
                state.className ? getClassIconUrl(state.className) : null,
                '#1e1608',
                state.className ?? 'Class',
                classDesc,
                'Select a class to view its description.'
            )}
        </div>
    `;
}

function render() {
    const container = document.getElementById('charcreate-container');
    if (!container) return;

    const raceBg = RACE_BACKGROUNDS[state.raceId];
    if (raceBg) {
        container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.15)), url('${raceBg}')`;
        container.style.backgroundSize = 'cover';
        container.style.backgroundRepeat = 'no-repeat';
        container.style.backgroundPosition = 'center center';
    } else {
        container.style.backgroundImage = '';
    }
    container.style.fontFamily = '"Palatino Linotype", Palatino, "Book Antiqua", serif';

    container.innerHTML = `
        <div style="display:flex; height:100%;">

            <!-- Left panel -->
            <div style="width:28%; display:flex; flex-direction:column; padding:10px 8px; user-select:none;">
                <div style="flex:1; display:flex; flex-direction:column; gap:8px; overflow-y:auto;
                            background:rgba(4,4,8,0.72); box-shadow:inset 0 0 30px rgba(0,0,0,0.65);
                            border:2px solid ${W.border}; padding:10px 8px;
                            scrollbar-width:thin; scrollbar-color:${W.border} transparent;">
                    ${renderRacePanel()}
                    <div style="height:1px; background:${W.border}; opacity:0.5;"></div>
                    ${renderGenderButtons()}
                    <div style="position:relative; height:26px;">
                    <button data-action="toggle-unlock"
                            style="position:absolute; right:0; top:0; background:none; border:none; padding:3px 4px; cursor:pointer; color:${state.unlockEnabled ? W.gold : W.text}; font-size:0.75rem; transition:color 0.15s; visibility:${getClassesForGender(state.raceId, state.gender).unlock.length > 0 ? 'visible' : 'hidden'}; width:26px; text-align:center;">
                        <i class="fa-solid fa-fw ${state.unlockEnabled ? 'fa-lock-open' : 'fa-lock'}"></i>
                    </button>
                </div>
                    ${renderClassGrid()}
                </div>
            </div>

            <!-- Center portrait -->
            <div style="width:50%; position:relative; overflow:hidden;">
                ${renderPortrait()}
            </div>

            <!-- Right description panel -->
            <div style="width:22%; padding:10px 20px 10px 8px; overflow:hidden;">
                ${renderDescriptions()}
            </div>

        </div>
    `;
    setupCustomScrollbars(container);
}

function setupCustomScrollbars(container) {
    container.querySelectorAll('.wow-scrollbar-track').forEach(el => el.remove());

    const ARROW_H = 14;
    const THUMB_H = 16;

    function makeArrowBtn(dir) {
        const btn = document.createElement('div');
        btn.className = 'wow-arrow-btn';
        btn.style.cssText = `position:relative;flex-shrink:0;height:${ARROW_H}px;background:#0c0804;border-${dir === 'up' ? 'bottom' : 'top'}:1px solid #2e1c08;cursor:pointer;display:flex;align-items:center;justify-content:center;`;

        const circle = document.createElement('div');
        circle.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:9px;height:9px;background:#3a0903;border-radius:50%;pointer-events:none;';

        const tri = document.createElement('div');
        tri.style.cssText = dir === 'up'
            ? 'position:relative;z-index:1;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-bottom:4px solid #846b18;margin-top:-1px;pointer-events:none;'
            : 'position:relative;z-index:1;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #846b18;margin-bottom:-1px;pointer-events:none;';

        btn.appendChild(circle);
        btn.appendChild(tri);
        return { btn, tri, circle };
    }

    container.querySelectorAll('.wow-scroll').forEach(panel => {
        const wrapper = panel.parentElement;

        const track = document.createElement('div');
        track.className = 'wow-scrollbar-track';
        track.style.cssText = 'position:absolute;right:3px;width:20px;z-index:3;background:#0c0804;border:1px solid #2e1c08;border-radius:3px;box-shadow:inset 1px 0 4px rgba(0,0,0,0.85);overflow:hidden;display:flex;flex-direction:column;';

        const { btn: upBtn,   tri: upTri,   circle: upCircle }   = makeArrowBtn('up');
        const { btn: downBtn, tri: downTri, circle: downCircle } = makeArrowBtn('down');

        const thumbArea = document.createElement('div');
        thumbArea.style.cssText = 'flex:1;position:relative;min-height:0;overflow:hidden;';

        const thumb = document.createElement('div');
        thumb.className = 'wow-scrollbar-thumb';
        thumb.style.cssText = 'position:absolute;left:1px;right:1px;height:16px;background:#4d4a42;border-radius:2px;cursor:pointer;top:0;';

        thumbArea.appendChild(thumb);
        track.appendChild(upBtn);
        track.appendChild(thumbArea);
        track.appendChild(downBtn);
        wrapper.appendChild(track);

        function syncBounds() {
            const pw = panel.getBoundingClientRect();
            const ww = wrapper.getBoundingClientRect();
            track.style.top    = (pw.top  - ww.top  + 2) + 'px';
            track.style.height = (pw.height - 4) + 'px';
        }

        function syncThumb() {
            const { scrollTop, scrollHeight, clientHeight } = panel;
            const scrollable = scrollHeight - clientHeight;
            if (scrollable <= 0) { track.style.display = 'none'; return; }
            track.style.display = '';

            const areaH   = thumbArea.clientHeight;
            const travelH = Math.max(0, areaH - THUMB_H);
            thumb.style.top = Math.round(scrollTop / scrollable * travelH) + 'px';

            const atTop    = scrollTop <= 0;
            const atBottom = scrollTop >= scrollable - 1;
            upTri.style.borderBottomColor = atTop    ? '#424242' : '#846b18';
            upCircle.style.display        = atTop    ? 'none'    : 'flex';
            downTri.style.borderTopColor  = atBottom ? '#424242' : '#846b18';
            downCircle.style.display      = atBottom ? 'none'    : 'flex';
        }

        syncBounds();
        syncThumb();
        panel.addEventListener('scroll', syncThumb);

        upBtn.addEventListener('click',   e => { e.stopPropagation(); panel.scrollTop -= 40; });
        downBtn.addEventListener('click', e => { e.stopPropagation(); panel.scrollTop += 40; });

        thumb.addEventListener('mousedown', e => {
            e.preventDefault();
            e.stopPropagation();
            const startY      = e.clientY;
            const startScroll = panel.scrollTop;
            const scrollable  = panel.scrollHeight - panel.clientHeight;
            const travelH     = Math.max(0, thumbArea.clientHeight - THUMB_H);
            const move = ev => { panel.scrollTop = startScroll + (ev.clientY - startY) / travelH * scrollable; };
            const up   = ()  => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); };
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        });

        thumbArea.addEventListener('click', e => {
            if (e.target === thumb) return;
            const rect    = thumbArea.getBoundingClientRect();
            const clickY  = e.clientY - rect.top;
            const travelH = Math.max(0, thumbArea.clientHeight - THUMB_H);
            panel.scrollTop = Math.max(0, Math.min(1, clickY / travelH)) * (panel.scrollHeight - panel.clientHeight);
        });
    });
}

// function loadBLPBackgrounds() {
//     const baseDir = '../assets/dressupframe/';
//     const entries = Object.entries(BLP_BACKGROUNDS).sort(([a]) => a === state.raceId ? -1 : 0);
//     for (const [raceId, name] of entries) {
//         assembleBackground(baseDir, name)
//             .then(url => {
//                 RACE_BACKGROUNDS[raceId] = url;
//                 if (raceId === state.raceId) render();
//             })
//             .catch(err => console.warn(`BLP load failed (${name}):`, err));
//     }
// }

function init() {
    const container = document.getElementById('charcreate-container');
    if (!container) return;

    const style = document.createElement('style');
    style.textContent = `
        .wow-scroll::-webkit-scrollbar { display: none; }
        .wow-scroll { scrollbar-width: none; -ms-overflow-style: none; }
    `;
    document.head.appendChild(style);

    render();
    // loadBLPBackgrounds();

    container.addEventListener('click', e => {
        const target = e.target.closest('[data-action]');
        if (!target) return;
        const action = target.dataset.action;

        if (action === 'prev-faction-page') {
            if (state.factionPage > 0) { state.factionPage--; render(); }
        } else if (action === 'next-faction-page') {
            const totalPages = Math.ceil(FACTIONS.length / 3);
            if (state.factionPage < totalPages - 1) { state.factionPage++; render(); }
        } else if (action === 'select-race') {
            const raceId = target.dataset.raceId;
            if (!raceId || raceId === state.raceId) return;
            state.raceId = raceId;
            state.unlockEnabled = false;
            if (!hasGenderVariant(raceId)) state.gender = 'male';
            const { available } = getClassesForGender(raceId, state.gender);
            if (!state.className || !available.includes(state.className)) state.className = available[0] ?? null;
            render();
        } else if (action === 'select-gender') {
            const gender = target.dataset.gender;
            if (!gender || gender === state.gender) return;
            state.gender = gender;
            if (gender === 'female' && !hasGenderVariant(state.raceId)) {
                const allRaceIds = FACTIONS.flatMap(f => [
                    ...(customRacesByFaction[f]?.base || []),
                    ...(customRacesByFaction[f]?.allied || []),
                ]);
                state.raceId = allRaceIds.find(id => hasGenderVariant(id)) ?? state.raceId;
            }
            const { available } = getClassesForGender(state.raceId, gender);
            if (!state.className || !available.includes(state.className)) state.className = available[0] ?? null;
            render();
        } else if (action === 'select-class') {
            const cls = target.dataset.class;
            if (!cls) return;
            state.className = cls;
            render();
        } else if (action === 'toggle-unlock') {
            state.unlockEnabled = !state.unlockEnabled;
            if (!state.unlockEnabled) {
                const { available } = getClassesForGender(state.raceId, state.gender);
                if (!state.className || !available.includes(state.className)) state.className = available[0] ?? null;
            }
            render();
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
