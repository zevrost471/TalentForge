import { customRacesByFaction, customClassesByRace, raceBaseData } from '../../db/custom/races.js';
import { newFactions, FACTION_DESCRIPTIONS } from '../../db/custom/factions.js';

const FACTIONS_TO_SHOW = [
    newFactions.ALLIANCE,
    newFactions.HORDE,
    newFactions.FORSAKEN,
    newFactions.NIGHT_ELVES,
    newFactions.ILLIDARI,
    newFactions.NEUTRAL,
];

const RACE_DISPLAY_NAMES = {
    darkfallen: 'Undead (Darkfallen)',
};

const FACTION_STYLES = {
    [newFactions.ALLIANCE]: {
        // WC3 image assets
        headerType: 'simple', wc3Race: 'human',
        bg: 'header-back.gif', left: 'header-left.gif', title: 'headers/humans.gif', right: 'header-right.gif',
        // CSS header
        accent: '#213478', accentDim: 'rgba(33,52,120,0.12)',
        nameColor: '#6a84c8',
        description: FACTION_DESCRIPTIONS[newFactions.ALLIANCE],
        subHeading: 'text-blue-400', subLine: 'border-blue-800/50',
    },
    [newFactions.HORDE]: {
        // WC3 image assets
        headerType: 'split', wc3Race: 'orc',
        bg: 'header-bg.gif', leftOuter: 'header-left.gif', leftInner: 'header-mid-left.gif',
        title: 'headers/orcs.gif', rightInner: 'header-mid-right.gif', rightOuter: 'header-right.gif',
        // CSS header
        accent: '#9c2423', accentDim: 'rgba(156,36,35,0.14)',
        nameColor: '#d4706f',
        description: FACTION_DESCRIPTIONS[newFactions.HORDE],
        subHeading: 'text-red-400', subLine: 'border-red-900/50',
    },
    [newFactions.FORSAKEN]: {
        // WC3 image assets
        headerType: 'split', wc3Race: 'undead',
        bg: 'header-bg-left.gif', leftOuter: 'header-left.gif', leftInner: 'header-left-left.gif',
        title: 'headers/undead.gif', rightInner: 'header-right-right.gif', rightOuter: 'header-right.gif',
        // CSS header
        accent: '#272a60', accentDim: 'rgba(39,42,96,0.13)',
        nameColor: '#7a80cc',
        description: FACTION_DESCRIPTIONS[newFactions.FORSAKEN],
        subHeading: 'text-indigo-400', subLine: 'border-indigo-900/50',
    },
    [newFactions.NIGHT_ELVES]: {
        // WC3 image assets
        headerType: 'simple', wc3Race: 'nightelf',
        bg: 'header-back.gif', left: 'header-left.gif', title: 'headers/nightelves.gif', right: 'header-right.gif',
        // CSS header
        accent: '#3c345b', accentDim: 'rgba(60,52,91,0.12)',
        nameColor: '#9d8fcc',
        description: FACTION_DESCRIPTIONS[newFactions.NIGHT_ELVES],
        subHeading: 'text-purple-400', subLine: 'border-purple-900/50',
    },
    [newFactions.ILLIDARI]: {
        // CSS header
        accent: '#23a008', accentDim: 'rgba(35,160,8,0.13)',
        nameColor: '#5ddb3a',
        description: FACTION_DESCRIPTIONS[newFactions.ILLIDARI],
        subHeading: 'text-green-400', subLine: 'border-green-900/50',
    },
    [newFactions.NEUTRAL]: {
        // CSS header
        accent: '#cc943e', accentDim: 'rgba(204,148,62,0.12)',
        nameColor: '#e8c07a',
        description: FACTION_DESCRIPTIONS[newFactions.NEUTRAL],
        subHeading: 'text-amber-400', subLine: 'border-amber-900/50',
    },
};

// WC3 image-based header logic lives in ./wc3-headers.js

function renderHeader(s, factionName) {
    return `
        <div class="mb-6" style="border-left: 4px solid ${s.accent}; padding-left: 1.25rem;">
            <div style="background: linear-gradient(to right, ${s.accentDim}, transparent); padding: 0.75rem 1rem 0.75rem 0; border-radius: 0 0.375rem 0.375rem 0;">
                <span style="font-size:1.75rem; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:${s.nameColor};">${factionName}</span>
            </div>
            <div style="height:1px; background: linear-gradient(to right, ${s.accent}, transparent); margin-top:2px; opacity:0.6;"></div>
            <p style="margin-top:0.75rem; font-size:0.875rem; line-height:1.6; color:rgba(209,213,219,0.75);">${s.description}</p>
        </div>
    `;
}

function getRaceIconUrl(icon) {
    if (!icon) return '';
    if (icon.startsWith('http')) return icon;
    if (icon.startsWith('assets/')) return `../../${icon}.jpg`;
    return `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`;
}

function getClassIconUrl(className) {
    const overrides = {
        'Hunter': 'inv_spear_02', /*inv_throwingaxe_03, inv_throwingaxe_04, inv_axe_20, inv_axe_20_inverted, inv_spear_02*/
        'Marksman': 'classicon_hunter',
        'Tinker': 'inv_10_engineering_manufacturedparts_gear_uprez',
        'Witch Doctor': 'inv_staff_goldfeathered_01',
        'Runemaster': 'spell_fire_sealoffire',
    };
    const key = overrides[className] ?? `classicon_${className.toLowerCase().replace(/\s+/g, '')}`;
    return `https://wow.zamimg.com/images/wow/icons/large/${key}.jpg`;
}

function hasGenderDifference(raceId) {
    const data = customClassesByRace[raceId];
    if (!data?.genderVariants) return false;
    const m = data.genderVariants.male || {};
    const f = data.genderVariants.female || {};
    const mExtra = [...(m.additionalAvailableAtStart || []), ...(m.additionalAvailableThroughUnlock || [])];
    const fExtra = [...(f.additionalAvailableAtStart || []), ...(f.additionalAvailableThroughUnlock || [])];
    return mExtra.length > 0 || fExtra.length > 0;
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

function renderClassRow(classList, dimmed = false) {
    if (!classList.length) return '';
    return classList.map(cls => `
        <div class="relative group ${dimmed ? 'opacity-30' : 'opacity-50'} hover:opacity-100 transition-opacity">
            <img src="${getClassIconUrl(cls)}" alt="${cls}"
                 class="w-8 h-8 rounded border border-gray-600 group-hover:border-yellow-400 transition-colors cursor-default"
                 onerror="this.style.display='none'">
            <span class="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5
                         bg-gray-900 border border-gray-600 text-gray-200 text-xs px-1.5 py-0.5 rounded
                         whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                ${cls}
            </span>
        </div>
    `).join('');
}

function renderClassSection(raceId, gender) {
    const { available, unlock } = getClassesForGender(raceId, gender);
    const unlockDivider = unlock.length > 0 ? `
        <div class="w-full flex items-center gap-2 my-1">
            <div class="flex-1 border-t border-gray-700"></div>
            <span class="text-xs text-gray-500 italic">unlock</span>
            <div class="flex-1 border-t border-gray-700"></div>
        </div>
        ${renderClassRow(unlock, true)}
    ` : '';
    return `
        <div class="flex flex-wrap gap-2 items-end">
            ${renderClassRow(available)}
            ${unlockDivider}
        </div>
    `;
}

function renderRaceCard(raceId, isAllied) {
    const base = raceBaseData[raceId];
    const data = customClassesByRace[raceId];
    if (!base) return '';

    const hasDiff = hasGenderDifference(raceId);
    const variants = base.genderVariants || [];
    const maleVariant = variants.find(v => v.gender === 'male') || variants[0];
    const femaleVariant = variants.find(v => v.gender === 'female');

    const maleIconUrl = getRaceIconUrl(maleVariant?.icon);
    const femaleIconUrl = femaleVariant ? getRaceIconUrl(femaleVariant.icon) : maleIconUrl;

    const alliedBadge = isAllied
        ? `<span class="text-xs bg-gray-700 text-gray-400 px-1.5 py-0.5 rounded ml-2 border border-gray-600">Allied</span>`
        : '';

    const showToggle = !!femaleVariant;
    const genderToggle = showToggle ? `
        <div class="flex gap-1 mt-1.5">
            <button class="gender-btn px-2 py-0.5 text-xs rounded border border-yellow-500 text-yellow-400"
                    data-race="${raceId}" data-gender="male" data-active="true">♂</button>
            <button class="gender-btn px-2 py-0.5 text-xs rounded border border-gray-600 text-gray-400"
                    data-race="${raceId}" data-gender="female" data-active="false">♀</button>
        </div>
    ` : '';

    let classContent;
    if (hasDiff) {
        classContent = `
            <div class="gender-classes" data-race="${raceId}" data-gender="male">
                ${renderClassSection(raceId, 'male')}
            </div>
            <div class="gender-classes hidden" data-race="${raceId}" data-gender="female">
                ${renderClassSection(raceId, 'female')}
            </div>
        `;
    } else if (data) {
        classContent = renderClassSection(raceId, 'male');
    } else {
        classContent = `<p class="text-xs text-gray-500 italic">No class data</p>`;
    }

    return `
        <div class="tf-panel-flat rounded-lg p-4 flex flex-col gap-3">
            <div class="flex items-center gap-3">
                <img class="race-icon w-12 h-12 rounded border border-gray-600 object-contain bg-gray-800"
                     src="${maleIconUrl}"
                     data-male-icon="${maleIconUrl}"
                     data-female-icon="${femaleIconUrl}"
                     data-race="${raceId}"
                     alt="${base.name}"
                     onerror="this.onerror=null;this.src='https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'">
                <div>
                    <div class="flex items-center flex-wrap gap-1">
                        <span class="font-semibold text-gray-100">${RACE_DISPLAY_NAMES[raceId] ?? base.name}</span>
                        ${alliedBadge}
                    </div>
                    ${genderToggle}
                </div>
            </div>

            <div class="classes-section">
                ${classContent}
            </div>

            <div class="pt-2 border-t border-gray-700">
                <p class="text-xs text-gray-600 italic">Racial abilities — coming soon</p>
            </div>
        </div>
    `;
}

function renderFaction(faction) {
    const factionRaces = customRacesByFaction[faction];
    if (!factionRaces) return '';
    const s = FACTION_STYLES[faction];
    if (!s) return '';

    const baseHTML = (factionRaces.base || []).map(id => renderRaceCard(id, false)).join('');
    const alliedHTML = (factionRaces.allied || []).map(id => renderRaceCard(id, true)).join('');

    return `
        <section class="mb-12">
            ${renderHeader(s, faction)}

            <div class="mb-6">
                <h3 class="text-xs font-semibold ${s.subHeading} uppercase tracking-widest mb-3 pb-1 border-b ${s.subLine}">Playable Races</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    ${baseHTML}
                </div>
            </div>

            ${alliedHTML ? `
            <div>
                <h3 class="text-xs font-semibold ${s.subHeading} uppercase tracking-widest mb-3 pb-1 border-b ${s.subLine}">Allied Races</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    ${alliedHTML}
                </div>
            </div>
            ` : ''}
        </section>
    `;
}

function init() {
    const container = document.getElementById('peoples-container');
    if (!container) return;

    container.innerHTML = FACTIONS_TO_SHOW.map(renderFaction).join('');

    container.addEventListener('click', e => {
        const btn = e.target.closest('.gender-btn');
        if (!btn) return;

        const raceId = btn.dataset.race;
        const gender = btn.dataset.gender;
        const card = btn.closest('.tf-panel-flat');

        card.querySelectorAll('.gender-btn').forEach(b => {
            const isActive = b.dataset.gender === gender;
            b.classList.toggle('border-yellow-500', isActive);
            b.classList.toggle('text-yellow-400', isActive);
            b.classList.toggle('border-gray-600', !isActive);
            b.classList.toggle('text-gray-400', !isActive);
        });

        card.querySelectorAll('.gender-classes').forEach(div => {
            div.classList.toggle('hidden', div.dataset.gender !== gender);
        });

        const raceImg = card.querySelector(`.race-icon[data-race="${raceId}"]`);
        if (raceImg) {
            raceImg.onerror = function() { this.onerror=null; this.src='https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'; };
            raceImg.src = gender === 'male' ? raceImg.dataset.maleIcon : raceImg.dataset.femaleIcon;
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
