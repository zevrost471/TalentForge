// db-class.js

import { CLASS_DESCRIPTIONS } from './classes.js';
import { CLASS_META } from './class-meta.js';
import { SPECS } from './specs.js';
import { baselineClassAbilities } from './baseline-class-abilities.js';
import { baseTalents } from './base-talents.js';
import { abilityData } from './ability-data.js';
import { classColors } from '../tc/class-colors.js';

const ICON_BASE = 'https://wow.zamimg.com/images/wow/icons';
const FALLBACK_ICON = `${ICON_BASE}/medium/inv_misc_questionmark.jpg`;
const PAGE_SIZE = 50;
const METAL_FRAME = `border:1.5px solid #9a9897;border-bottom-color:#4e4e4c;border-left-color:#4e4e4c;border-right-color:#7b7670;box-shadow:0 0 0 1px #000,-2px 2px 4px rgba(0,0,0,0.9),inset 0 0 0 1px rgba(0,0,0,0.85);background:#050508`;
const _tabFlat = {}; // { spells: [...], races: [], ... } — populated as tabs are built

function iconURL(icon, size = 'medium') {
    return `${ICON_BASE}/${size}/${icon}.jpg`;
}

function metalIcon(icon, size, alt = '') {
    const dim    = size === 'large' ? '56px' : size === 'medium' ? '44px' : '20px';
    const radius = size === 'large' ? '7px'  : '3px';
    return `<div style="width:${dim};height:${dim};position:relative;flex-shrink:0;border-radius:${radius};overflow:hidden;user-select:none;${METAL_FRAME}"><img src="${iconURL(icon, size)}" style="width:100%;height:100%;object-fit:cover;display:block;pointer-events:none" alt="${alt}" onerror="this.src='${iconURL('inv_misc_questionmark', size)}'"></div>`;
}

const CLASS_ICON_OVERRIDES = {
    'Witch Doctor': 'classicon_shaman',
    'Marksman':     'classicon_hunter',
    'Runemaster':   'classicon_warrior',
    'Tinker':       'classicon_mage',
    'Death Knight': 'classicon_deathknight',
};

function classIconKey(name) {
    return CLASS_ICON_OVERRIDES[name] ?? `classicon_${name.toLowerCase().replace(/\s+/g, '')}`;
}

function classColor(name) {
    return classColors[name.toLowerCase().replace(/\s+/g, '_')] ?? '#C8B888';
}

function getClassFromURL() {
    const segments = window.location.pathname.split('/').filter(Boolean);
    const dbIdx = segments.findIndex(s => s.toLowerCase() === 'db');
    if (dbIdx === -1 || dbIdx + 1 >= segments.length) return null;
    const slug = segments[dbIdx + 1];
    // index.html or empty segment would be the db main page
    if (!slug || slug === 'index.html') return null;
    return slug.charAt(0).toUpperCase() + slug.slice(1);
}

function buildBreadcrumbs(className) {
    const classNames = Object.keys(CLASS_META).sort();
    const classLinks = classNames.map(name =>
        `<a href="../${name.toLowerCase()}/" class="block px-4 py-2 text-gray-300 hover:text-yellow-400 transition-colors">${name}</a>`
    ).join('');

    return `
    <nav class="flex items-center gap-1.5 text-sm mb-5" style="color:var(--tf-text-soft)">
        <a href="../" class="px-1.5 py-0.5 rounded hover:text-yellow-400 transition-colors">Database</a>

        <i class="fa-solid fa-chevron-right text-xs" style="opacity:0.4"></i>

        <div class="relative nav-has-dropdown">
            <span class="px-1.5 py-0.5 rounded cursor-default hover:text-yellow-400 transition-colors select-none">Classes</span>
            <div class="nav-dropdown" style="position:absolute;left:0;top:100%;z-index:50;min-width:max-content;padding-top:4px">
                <div class="rounded-md py-1 shadow-xl border border-yellow-900/40" style="background:var(--tf-bg-panel)">
                    <a href="../" class="block px-4 py-2 text-gray-300 hover:text-yellow-400 transition-colors">Database</a>
                    <div class="relative nav-has-submenu">
                        <span class="flex items-center justify-between gap-4 px-4 py-2 text-gray-300 hover:text-yellow-400 cursor-default select-none">
                            Classes <i class="fa-solid fa-chevron-right text-xs"></i>
                        </span>
                        <div class="nav-submenu" style="position:absolute;left:100%;top:0;z-index:51;min-width:max-content">
                            <div class="rounded-md py-1 shadow-xl border border-yellow-900/40" style="background:var(--tf-bg-panel)">
                                ${classLinks}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <i class="fa-solid fa-chevron-right text-xs" style="opacity:0.4"></i>

        <div class="relative nav-has-dropdown">
            <span class="px-1.5 py-0.5 rounded cursor-default select-none font-medium" style="color:var(--tf-accent)">${className}</span>
            <div class="nav-dropdown" style="position:absolute;left:0;top:100%;z-index:50;min-width:max-content;padding-top:4px">
                <div class="rounded-md py-1 shadow-xl border border-yellow-900/40" style="background:var(--tf-bg-panel)">
                    ${classLinks}
                </div>
            </div>
        </div>
    </nav>`;
}

function buildSpecGrid(className, meta) {
    const classSpecs = SPECS[className] ?? {};

    // Build name → icon lookup from merged baseline + talent ability data
    const masterEntries = Object.values(abilityData.vanilla?.[className] ?? {});
    const iconByName = new Map(masterEntries.map(e => [e.name.toLowerCase(), e.icon]));

    return meta.specs.map(specName => {
        const specData = classSpecs[specName] ?? {};
        const description = specData.description ?? '';
        const keyAbilities = specData.keyAbilities ?? [];
        const specIcon = specData.icon ?? null;

        const abilitiesHTML = keyAbilities.length
            ? `<div class="text-sm font-semibold mb-1" style="color:var(--tf-text)">Key Abilities:</div>
               <ul class="space-y-1.5">
                   ${keyAbilities.map(name => {
                       const icon = iconByName.get(name.toLowerCase());
                       return `<li class="flex items-center gap-2">${icon ? metalIcon(icon, 'small', name) : ''}<span class="text-sm" style="color:var(--tf-text)">${name}</span></li>`;
                   }).join('')}
               </ul>`
            : `<div class="text-xs" style="color:var(--tf-text-soft)">No ability data available.</div>`;

        const specIconHTML = specIcon ? metalIcon(specIcon, 'small', specName) : '';

        return `
        <div class="tf-panel-flat rounded-lg p-4">
            <h4 class="mb-2 flex items-center gap-2" style="color:var(--tf-accent)">
                ${specIconHTML}${specName}
            </h4>
            ${description ? `<p class="leading-relaxed mb-3" style="color:var(--tf-text)">${description}</p>` : ''}
            ${abilitiesHTML}
        </div>`;
    }).join('');
}

function spellSubLabel(ab) {
    if (ab.tags?.includes('shapeshift')) return 'Shapeshift';
    if (ab.rank) return `Rank ${ab.rank}`;
    return '';
}

function buildSpellRow(ab) {
    const typeLabel = ab.type === 'ability' ? 'Abilities' : ab.type === 'talent' ? 'Talents' : '—';
    const subLabel = (_tabFlat.spellsSpecFilter ?? 'all') !== 'all' ? (ab.spec ?? '') : (ab.className ?? '');
    const typeCell = ab.type
        ? `${typeLabel}<br><span style="color:#ffffff;font-size:0.8em">${subLabel}</span>`
        : '—';
    return `<tr data-name="${ab.name.toLowerCase()}">
        <td>
            <div style="display:flex;align-items:center;gap:8px">
                ${metalIcon(ab.icon, 'medium', ab.name)}
                <div style="display:flex;flex-direction:column;line-height:1.3">
                    <span style="color:var(--tf-accent)">${ab.name}</span>
                    ${spellSubLabel(ab) ? `<span class="text-xs" style="color:var(--tf-text-soft)">${spellSubLabel(ab)}</span>` : ''}
                </div>
            </div>
        </td>
        <td style="text-align:center">${ab.requiresLevel ?? '—'}</td>
        <td style="text-align:center">${ab.school ?? '—'}</td>
        <td style="text-align:center;line-height:1.4">${typeCell}</td>
    </tr>`;
}

function buildPaginationBar(tabKey, page) {
    const flat = _tabFlat[tabKey] ?? [];
    const total = flat.length;
    if (total === 0) return '';
    const totalPages = Math.ceil(total / PAGE_SIZE);
    const start = (page - 1) * PAGE_SIZE + 1;
    const end   = Math.min(page * PAGE_SIZE, total);
    const lnk   = (p, label) => `<a href="#" class="db-page-link" data-tab="${tabKey}" data-page="${p}">${label}</a>`;
    const parts  = [];
    if (page > 1)          { parts.push(lnk(1, '« First')); parts.push(lnk(page - 1, '‹ Previous')); }
    parts.push(`<span class="db-page-info">${start} - ${end} of ${total}</span>`);
    if (page < totalPages) { parts.push(lnk(page + 1, 'Next ›')); parts.push(lnk(totalPages, 'Last »')); }
    return parts.join('');
}

function buildSpellsContent(className, meta) {
    const allAbilitiesObj = baselineClassAbilities.vanilla?.[className] ?? {};
    const seenIds   = new Set();
    const seenNames = new Set();
    const flat = [];

    // Baseline trainable abilities
    for (const spec of meta.specs) {
        for (const ab of (allAbilitiesObj[spec] ?? [])) {
            if (!seenIds.has(ab.id)) {
                seenIds.add(ab.id);
                seenNames.add(ab.name.toLowerCase());
                flat.push({ ...ab, type: 'ability', className, spec });
            }
        }
    }

    // Talent abilities
    const vanillaTalents = baseTalents.vanilla?.[className] ?? {};
    for (const [specName, specTalents] of Object.entries(vanillaTalents)) {
        for (const t of specTalents) {
            if (t.isActive && !seenNames.has(t.name.toLowerCase())) {
                seenNames.add(t.name.toLowerCase());
                flat.push({ name: t.name, icon: t.icon, requiresLevel: null, school: t.school ?? null, type: 'talent', className, spec: specName });
            }
        }
    }

    flat.sort((a, b) => a.name.localeCompare(b.name));
    _tabFlat.spells = flat;
    _tabFlat.spellsAll = flat;
    _tabFlat.spellsTypeFilter = 'all';
    _tabFlat.spellsSpecFilter = 'all';
    _tabFlat.spellsSortCol = null;
    _tabFlat.spellsSortDir = 'asc';

    if (!flat.length) {
        return `<div class="py-8 text-center text-sm" style="color:var(--tf-text-soft)">No spell data available.</div>`;
    }

    return `
        <div class="flex items-center justify-end gap-2 mb-2">
            <button id="db-filter-toggle" class="tf-control rounded px-2 py-1 text-sm flex items-center gap-1.5">
                <i class="fa-solid fa-filter text-xs"></i>
            </button>
            <button id="listview-reset-sort" class="tf-control rounded px-2 py-1 text-sm flex items-center gap-1.5 hidden">
                <i class="fa-solid fa-circle-xmark" style="color:#ef4444"></i> Reset Sort
            </button>
            <div id="db-pagination-spells-top" class="db-pagination" style="margin:0">${buildPaginationBar('spells', 1)}</div>
        </div>
        <div class="flex items-center gap-1 mb-2">
            <button class="db-type-btn active" data-type="all" data-label="All">All (${flat.length})</button>
            <button class="db-type-btn" data-type="ability" data-label="Abilities">Abilities (${flat.filter(a => a.type === 'ability').length})</button>
            <button class="db-type-btn" data-type="talent" data-label="Talents">Talents (${flat.filter(a => a.type === 'talent').length})</button>
        </div>
        <div class="flex items-center gap-1 mb-2">
            <button class="db-spec-btn active" data-spec="all" data-label="All">All (${flat.length})</button>
            ${meta.specs.map(s => `<button class="db-spec-btn" data-spec="${s}" data-label="${s}">${s} (${flat.filter(a => a.spec === s).length})</button>`).join('')}
        </div>
        <div id="db-search-wrapper" class="mb-2 hidden">
            <input type="text" id="db-related-search" placeholder="Search…"
                   class="tf-control rounded px-3 py-1.5 text-sm" style="width:260px;max-width:100%">
        </div>
        <div style="overflow-x:auto">
            <table class="db-table" id="db-spells-table">
                <thead><tr>
                    <th data-col="name" style="cursor:pointer;user-select:none">Name <i class="fa-solid fa-sort db-sort-icon" style="visibility:hidden;font-size:0.75em;margin-left:4px"></i></th>
                    <th data-col="level" style="width:80px;text-align:center;cursor:pointer;user-select:none">Level <i class="fa-solid fa-sort db-sort-icon" style="visibility:hidden;font-size:0.75em;margin-left:4px"></i></th>
                    <th data-col="school" style="width:110px;text-align:center;cursor:pointer;user-select:none">School <i class="fa-solid fa-sort db-sort-icon" style="visibility:hidden;font-size:0.75em;margin-left:4px"></i></th>
                    <th data-col="type" style="width:100px;text-align:center;cursor:pointer;user-select:none">Type <i class="fa-solid fa-sort db-sort-icon" style="visibility:hidden;font-size:0.75em;margin-left:4px"></i></th>
                </tr></thead>
                <tbody>${flat.slice(0, PAGE_SIZE).map(buildSpellRow).join('')}</tbody>
            </table>
        </div>
        <div id="db-pagination-spells-bot" class="db-pagination mt-2">${buildPaginationBar('spells', 1)}</div>`;
}

const RELATED_TABS = ['Spells', 'Races', 'Skills', 'Trainers', 'Items', 'Quests', 'Screenshots'];

function buildRelated(className, meta) {
    // Build panels first so _tabFlat gets populated by buildSpellsContent
    const panels = RELATED_TABS.map((tab, i) => {
        const content = tab === 'Spells'
            ? buildSpellsContent(className, meta)
            : `<div class="py-8 text-center text-sm" style="color:var(--tf-text-soft)">Coming soon.</div>`;
        return `<div class="db-related-panel${i === 0 ? '' : ' hidden'}" data-panel="${tab.toLowerCase()}" style="padding-top:12px">${content}</div>`;
    }).join('');

    const counts = {
        spells:      _tabFlat.spells?.length ?? 0,
        races:       0, skills: 0, trainers: 0, items: 0, quests: 0, screenshots: 0,
    };
    _tabFlat.screenshotsCount = counts.screenshots;

    const tabButtons = RELATED_TABS.map((tab, i) => {
        const count = counts[tab.toLowerCase()] ?? 0;
        return `<button class="db-related-tab${i === 0 ? ' active' : ''}" data-tab="${tab.toLowerCase()}">${tab} (${count})</button>`;
    }).join('');

    return `
        <div class="db-related-tabs">${tabButtons}</div>
        ${panels}`;
}

function buildSidebar(className, meta, iconKey) {
    const sq = `<span style="color:var(--tf-accent);font-size:0.4rem;line-height:1">&#9632;</span>`;
    const classSpecs = SPECS[className] ?? {};
    const specBullets = meta.specs.map(s => {
        const specIcon = classSpecs[s]?.icon ?? null;
        const iconHTML = specIcon ? metalIcon(specIcon, 'small', s) : '';
        return `<li class="flex items-center gap-1.5">${sq}${iconHTML}<span style="color:var(--tf-text)">${s}</span></li>`;
    }).join('');

    return `
    <aside class="db-class-sidebar tf-panel-flat rounded-lg p-4 space-y-4 text-sm">
        <div>
            <div class="text-base tf-title mb-3 text-center">Quick Facts</div>
            <div class="space-y-3">
                <div class="flex items-center gap-1.5">
                    ${sq}<span style="color:var(--tf-text-soft)">Resource: </span><span style="color:var(--tf-text)">${meta.resources.join(', ')}</span>
                </div>
                <div>
                    <div class="flex items-center gap-1.5 mb-1">${sq}<span style="color:var(--tf-text-soft)">Specs:</span></div>
                    <ul class="pl-4 space-y-1">${specBullets}</ul>
                </div>
                <div class="flex items-center gap-1.5">
                    ${sq}<span style="color:var(--tf-text-soft)">Class ID: </span><span style="color:var(--tf-text)">${meta.id}</span>
                </div>
                <div class="flex items-center gap-1.5 flex-wrap">
                    ${sq}<span style="color:var(--tf-text-soft)">Icon: </span>
                    ${metalIcon(iconKey, 'small', iconKey)}
                    <span class="text-xs" style="color:var(--tf-text)">${iconKey}</span>
                </div>
            </div>
        </div>
        <div class="border-t pt-4" style="border-color:var(--tf-border)">
            <div class="text-base tf-title mb-3 text-center">Screenshots (${_tabFlat.screenshotsCount ?? 0})</div>
            <div class="text-xs" style="color:var(--tf-text-soft)">None yet</div>
        </div>
    </aside>`;
}

function wireRelatedTabs(root) {
    root.querySelectorAll('.db-related-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            root.querySelectorAll('.db-related-tab').forEach(b => b.classList.remove('active'));
            root.querySelectorAll('.db-related-panel').forEach(p => p.classList.add('hidden'));
            btn.classList.add('active');
            root.querySelector(`[data-panel="${btn.dataset.tab}"]`)?.classList.remove('hidden');
            filterActivePanel(root);
        });
    });
}

function goToSpellPage(root, page) {
    const flat = _tabFlat.spells ?? [];
    if (!flat.length) return;
    const totalPages = Math.ceil(flat.length / PAGE_SIZE);
    page = Math.max(1, Math.min(page, totalPages));

    const tbody = root.querySelector('#db-spells-table tbody');
    const barTop = root.querySelector('#db-pagination-spells-top');
    const barBot = root.querySelector('#db-pagination-spells-bot');
    if (!tbody) return;

    const start = (page - 1) * PAGE_SIZE;
    const html  = buildPaginationBar('spells', page);
    tbody.innerHTML = flat.slice(start, start + PAGE_SIZE).map(buildSpellRow).join('');
    if (barTop) barTop.innerHTML = html;
    if (barBot) barBot.innerHTML = html;
}

function wirePagination(root) {
    root.addEventListener('click', e => {
        const link = e.target.closest('.db-page-link');
        if (!link) return;
        e.preventDefault();
        const tab  = link.dataset.tab;
        const page = parseInt(link.dataset.page, 10);
        if (tab === 'spells') goToSpellPage(root, page);
    });
}

function applySort(flat) {
    const col = _tabFlat.spellsSortCol;
    const dir = _tabFlat.spellsSortDir ?? 'asc';
    if (!col) return flat;
    return [...flat].sort((a, b) => {
        let aVal, bVal;
        if      (col === 'name')   { aVal = a.name ?? '';              bVal = b.name ?? ''; }
        else if (col === 'level')  { aVal = a.requiresLevel ?? 99999;  bVal = b.requiresLevel ?? 99999; }
        else if (col === 'school') { aVal = a.school ?? '';            bVal = b.school ?? ''; }
        else if (col === 'type')   { aVal = a.type ?? '';              bVal = b.type ?? ''; }
        const cmp = typeof aVal === 'number' ? aVal - bVal : String(aVal).localeCompare(String(bVal));
        return dir === 'asc' ? cmp : -cmp;
    });
}

function updateSortIcons(root) {
    const col = _tabFlat.spellsSortCol;
    const dir = _tabFlat.spellsSortDir ?? 'asc';
    root.querySelectorAll('#db-spells-table th[data-col]').forEach(th => {
        const icon = th.querySelector('.db-sort-icon');
        if (!icon) return;
        if (th.dataset.col === col) {
            icon.className = `fa-solid ${dir === 'asc' ? 'fa-sort-up' : 'fa-sort-down'} db-sort-icon`;
            icon.style.visibility = 'visible';
            icon.style.color = 'var(--tf-accent)';
        } else {
            icon.className = 'fa-solid fa-sort db-sort-icon';
            icon.style.visibility = 'hidden';
            icon.style.color = '';
        }
    });
    const resetBtn = root.querySelector('#listview-reset-sort');
    if (resetBtn) resetBtn.classList.toggle('hidden', !col);
}

function updateButtonCounts(root) {
    const typeFilter = _tabFlat.spellsTypeFilter ?? 'all';
    const specFilter = _tabFlat.spellsSpecFilter ?? 'all';
    const all = _tabFlat.spellsAll ?? [];

    root.querySelectorAll('.db-type-btn').forEach(btn => {
        const type  = btn.dataset.type;
        const label = btn.dataset.label ?? type;
        const count = all.filter(ab =>
            (type  === 'all' || ab.type === type) &&
            (specFilter === 'all' || ab.spec === specFilter)
        ).length;
        btn.textContent = `${label} (${count})`;
    });

    root.querySelectorAll('.db-spec-btn').forEach(btn => {
        const spec  = btn.dataset.spec;
        const label = btn.dataset.label ?? spec;
        const count = all.filter(ab =>
            (spec  === 'all' || ab.spec === spec) &&
            (typeFilter === 'all' || ab.type === typeFilter)
        ).length;
        btn.textContent = `${label} (${count})`;
    });
}

function applySpellFilters(root) {
    updateButtonCounts(root);
    const typeFilter = _tabFlat.spellsTypeFilter ?? 'all';
    const specFilter = _tabFlat.spellsSpecFilter ?? 'all';
    const q = (root.querySelector('#db-related-search')?.value ?? '').toLowerCase().trim();
    const tbody  = root.querySelector('#db-spells-table tbody');
    const barTop = root.querySelector('#db-pagination-spells-top');
    const barBot = root.querySelector('#db-pagination-spells-bot');
    if (!tbody) return;

    let result = _tabFlat.spellsAll ?? [];
    if (typeFilter !== 'all') result = result.filter(ab => ab.type === typeFilter);
    if (specFilter !== 'all') result = result.filter(ab => ab.spec === specFilter);
    if (q) result = result.filter(ab =>
        ab.name.toLowerCase().includes(q) ||
        spellSubLabel(ab).toLowerCase().includes(q)
    );

    const sorted = applySort(result);
    updateSortIcons(root);
    if (sorted.length === 0) {
        _tabFlat.spells = [];
        tbody.innerHTML = `<tr><td colspan="4" class="py-8 text-center text-sm" style="color:var(--tf-text-soft)">No matches found.</td></tr>`;
        if (barTop) barTop.innerHTML = '';
        if (barBot) barBot.innerHTML = '';
    } else {
        _tabFlat.spells = sorted;
        goToSpellPage(root, 1);
    }
}

function filterActivePanel(root) {
    const activePanel = root.querySelector('.db-related-panel:not(.hidden)');
    if (!activePanel) return;
    if (activePanel.dataset.panel === 'spells') applySpellFilters(root);
}

function wireFilterToggle(root) {
    const btn     = root.querySelector('#db-filter-toggle');
    const wrapper = root.querySelector('#db-search-wrapper');
    const input   = root.querySelector('#db-related-search');
    if (!btn || !wrapper) return;
    btn.addEventListener('click', () => {
        const nowHidden = wrapper.classList.toggle('hidden');
        btn.style.color       = nowHidden ? '' : 'var(--tf-accent)';
        btn.style.borderColor = nowHidden ? '' : 'var(--tf-accent)';
        if (nowHidden && input) {
            input.value = '';
            filterActivePanel(root);
        }
    });
}

function wireRelatedSearch(root) {
    const input = root.querySelector('#db-related-search');
    if (!input) return;
    input.addEventListener('input', () => filterActivePanel(root));
}

function wireTypeFilter(root) {
    root.querySelectorAll('.db-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            root.querySelectorAll('.db-type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            _tabFlat.spellsTypeFilter = btn.dataset.type;
            applySpellFilters(root);
        });
    });
}

function wireSpecFilter(root) {
    root.querySelectorAll('.db-spec-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            root.querySelectorAll('.db-spec-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            _tabFlat.spellsSpecFilter = btn.dataset.spec;
            applySpellFilters(root);
        });
    });
}

function wireColumnSort(root) {
    root.querySelectorAll('#db-spells-table th[data-col]').forEach(th => {
        th.addEventListener('click', () => {
            const col = th.dataset.col;
            if (_tabFlat.spellsSortCol === col) {
                _tabFlat.spellsSortDir = _tabFlat.spellsSortDir === 'asc' ? 'desc' : 'asc';
            } else {
                _tabFlat.spellsSortCol = col;
                _tabFlat.spellsSortDir = 'asc';
            }
            applySpellFilters(root);
        });
    });
}

function wireResetSort(root) {
    const btn = root.querySelector('#listview-reset-sort');
    if (!btn) return;
    btn.addEventListener('click', () => {
        _tabFlat.spellsSortCol = null;
        _tabFlat.spellsSortDir = 'asc';
        applySpellFilters(root);
    });
}

function render() {
    const root = document.getElementById('db-class-root');
    if (!root) return;

    const className = getClassFromURL();
    if (!className) {
        root.innerHTML = `<div class="text-center py-12" style="color:var(--tf-text-soft)">Class not found.</div>`;
        return;
    }

    const meta = CLASS_META[className];
    const description = CLASS_DESCRIPTIONS[className];

    if (!meta || !description) {
        root.innerHTML = `<div class="text-center py-12" style="color:var(--tf-text-soft)">No data for class "${className}".</div>`;
        return;
    }

    const iconKey = classIconKey(className);
    const color = classColor(className);

    document.title = `TalentForge — ${className}`;

    root.innerHTML = `
    ${buildBreadcrumbs(className)}

    <div class="flex items-center gap-4 mb-6">
        ${metalIcon(iconKey, 'large', className)}
        <h2 class="text-3xl" style="color:${color}">${className}</h2>
    </div>

    <div class="db-class-layout">
        <div class="db-class-main">
            <section class="tf-panel-flat rounded-lg p-5 mb-6">
                <p class="leading-relaxed" style="color:var(--tf-text)">${description}</p>
            </section>

            <section class="mb-6">
                <h3 class="text-xl tf-title mb-4">Specializations</h3>
                <div class="db-spec-grid">${buildSpecGrid(className, meta)}</div>
            </section>

            <section>
                <h3 class="text-xl tf-title mb-4">Related</h3>
                <div class="tf-panel-flat rounded-lg p-5">
                    ${buildRelated(className, meta)}
                </div>
            </section>
        </div>

        ${buildSidebar(className, meta, iconKey)}
    </div>`;

    wireRelatedTabs(root);
    wirePagination(root);
    wireFilterToggle(root);
    wireTypeFilter(root);
    wireSpecFilter(root);
    wireColumnSort(root);
    wireResetSort(root);
    wireRelatedSearch(root);
}

render();
