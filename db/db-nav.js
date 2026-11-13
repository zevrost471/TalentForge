// db-nav.js — dynamically updates the top nav Classes submenu based on current expansion

import { ALL_DB_CLASSES, isClassAvailableInExpansion, EXPANSION_URL_SLUG } from './db-config.js';
import { patchOptions } from './patches.js';

const patchToExpansion = {};
for (const [exp, patches] of Object.entries(patchOptions)) {
    patches.forEach(p => { patchToExpansion[p.value] = exp; });
}

document.addEventListener('DOMContentLoaded', () => {
    const version = localStorage.getItem('dbVersion');
    const expansion = (version && patchToExpansion[version])
        || localStorage.getItem('dbExpansion')
        || 'vanilla';
    updateNavClassesSubmenu(expansion);
});

export function updateNavClassesSubmenu(expansion) {
    const dbDropdown = document.querySelector('[data-tab="nav-database"]')
        ?.closest('li')
        ?.querySelector('.nav-submenu .rounded-md');
    if (!dbDropdown) return;

    const available = ALL_DB_CLASSES.filter(c => isClassAvailableInExpansion(c.slug, expansion));
    dbDropdown.innerHTML = available.map(c =>
        `<a href="${_classHref(c.slug)}" class="block px-4 py-2 text-gray-300 hover:text-yellow-400 transition-colors">${c.name}</a>`
    ).join('');
}

function _classHref(slug) {
    const expansion = localStorage.getItem('dbExpansion');
    const token = expansion ? (EXPANSION_URL_SLUG[expansion] ?? expansion) : null;
    const hashPart = token ? `#${token}/classes/${slug}` : `#classes/${slug}`;
    // If already at the DB root, use a hash-only link (no page reload)
    if (/\/db\/?(?:index\.html)?$/.test(window.location.pathname)) return hashPart;
    // Otherwise build path to DB with hash
    const path = window.location.pathname;
    const match = path.match(/^(.*\/db\/)/);
    const dbBase = match ? match[1] : '/db/';
    return `${dbBase}${hashPart}`;
}
