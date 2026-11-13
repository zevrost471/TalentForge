// ability-tooltip.js
// Builds tooltip HTML for db related list items, matching the TC tooltip visual format.

function formatCooldown(cooldown) {
    if (!cooldown) return '';
    if (cooldown >= 3600) return `${cooldown / 3600} hr cooldown`;
    if (cooldown >= 60)   return `${cooldown / 60} min cooldown`;
    return `${cooldown} sec cooldown`;
}

function getRangeText(range, minRange, maxRange) {
    if (range === null && minRange && maxRange) return `${minRange} - ${maxRange} yd range`;
    if (range === 0) return 'Melee Range';
    if (range > 0)   return `${range} yd range`;
    return '';
}

// Mirrors TC's getResourceText — classKey uses underscores ('death_knight'), not camelCase.
function getResourceText(classKey, spentResource, percentageOfBaseMana, resourceType, expansion) {
    if (!spentResource) return '';
    switch (classKey) {
        case 'warrior':
            return `${spentResource} Rage`;
        case 'rogue':
            return `${spentResource} Energy`;
        case 'death_knight':
            return `${spentResource} Runic Power`;
        case 'hunter':
            if (expansion === 'cataclysm') return `${spentResource} Focus`;
            break; // fall through to mana default
        case 'druid':
            if (resourceType === 2) return `${spentResource} Rage`;
            if (resourceType === 3) return `${spentResource} Energy`;
            break; // fall through to mana default
    }
    return percentageOfBaseMana
        ? `${spentResource}% of base mana`
        : `${spentResource} Mana`;
}

// Mirrors TC's getRequirementText — classKey uses underscores ('death_knight').
function getRequirementText(ab, classKey) {
    const requirements = [];

    // Weapon requirements
    if (ab.requiresWeapon === 1) requirements.push('Requires Melee Weapon');
    if (ab.requiresWeapon === 2) requirements.push('Requires Ranged Weapon');
    if (!ab.requiresWeapon && ab.requires1HWeapon) requirements.push('Requires One-Handed Melee Weapon');

    // Druid forms
    if (classKey === 'druid') {
        const druidForms = [];
        if (ab.requiresCatForm)      druidForms.push('Cat Form');
        if (ab.requiresBearForm)     druidForms.push('Bear Form');
        if (ab.requiresDireBearForm) druidForms.push('Dire Bear Form');
        if (ab.requiresMoonkinForm)  druidForms.push('Moonkin Form');
        if (druidForms.length > 0)   requirements.push(`Requires ${druidForms.join(', ')}`);
    }

    // Warrior stances
    if (classKey === 'warrior') {
        const stanceMap = { 1: 'Battle Stance', 2: 'Defensive Stance', 3: 'Berserker Stance' };
        const stances = Array.isArray(ab.requiresStance)
            ? ab.requiresStance.map(s => stanceMap[s]).filter(Boolean)
            : ab.requiresStance ? [stanceMap[ab.requiresStance]].filter(Boolean) : [];
        if (stances.length > 0) requirements.push(`Requires ${stances.join(', ')}`);
    }

    // Priest shadowform
    if (classKey === 'priest' && ab.requiresShadowform) requirements.push('Requires Shadowform');

    // Rogue stealth
    if (classKey === 'rogue' && ab.requiresStealth) requirements.push('Requires Stealth');

    // Warlock reagents
    if (classKey === 'warlock' && ab.requiresSoulShard) requirements.push('Reagents:<br>&nbsp;&nbsp;Soul Shard');

    // Shaman tools
    if (classKey === 'shaman') {
        if (ab.requiresWaterTotem) requirements.push('Tools:<br>&nbsp;&nbsp;Water Totem');
        if (ab.requiresFireTotem)  requirements.push('Tools:<br>&nbsp;&nbsp;Fire Totem');
        if (ab.requiresAirTotem)   requirements.push('Tools:<br>&nbsp;&nbsp;Air Totem');
        if (ab.requiresEarthTotem) requirements.push('Tools:<br>&nbsp;&nbsp;Earth Totem');
    }

    return requirements.join('<br>');
}

function buildActiveRows(ab, classKey, expansion) {
    const lines = [];
    const resourceText = getResourceText(classKey, ab.spentResource, ab.percentageOfBaseMana, ab.resourceType, expansion);
    const rangeText = getRangeText(ab.range, ab.minRange, ab.maxRange);
    if (resourceText && rangeText) {
        lines.push(`<div class="flex justify-between text-sm text-white"><span>${resourceText}</span><span>${rangeText}</span></div>`);
    } else if (resourceText) {
        lines.push(`<div class="text-sm text-white">${resourceText}</div>`);
    } else if (rangeText) {
        lines.push(`<div class="text-sm text-white">${rangeText}</div>`);
    }
    let castText = '';
    if (ab.nextMelee) {
        castText = 'Next Melee';
    } else if (ab.isInstant || !ab.castTime) {
        castText = 'Instant cast';
    } else if (ab.isChanneled) {
        castText = `Channeled (${ab.castTime} sec cast)`;
    } else {
        castText = `${ab.castTime} sec cast`;
    }
    const cooldownText = formatCooldown(ab.cooldown);
    lines.push(`<div class="flex justify-between text-sm text-white"><span>${castText}</span><span>${cooldownText}</span></div>`);
    return lines;
}

export function buildAbilityTooltip(ab, className, expansion) {
    // Match TC classKey convention: lowercase with underscores ('death_knight')
    const classKey = className.toLowerCase().replace(/\s+/g, '_');
    const lines = [];

    lines.push(`<div class="text-[15px] text-white">${ab.name}</div>`);

    if (ab.type === 'talent') {
        lines.push(`<div class="text-sm text-gray-400">Talent</div>`);
    }

    if (ab.isActive) {
        lines.push(...buildActiveRows(ab, classKey, expansion));
    }

    lines.push(`<div class="text-sm text-white">Requires ${className}</div>`);
    if (ab.requiresLevel) {
        lines.push(`<div class="text-sm text-white">Requires Level ${ab.requiresLevel}</div>`);
    }

    const reqText = getRequirementText(ab, classKey);
    if (reqText) {
        lines.push(`<div class="text-sm text-white">${reqText}</div>`);
    }

    if (ab.description) {
        const raw = Array.isArray(ab.description) ? ab.description.join('<br>') : ab.description;
        const level = ab.requiresLevel ?? 1;
        let descHtml = raw;
        if (ab.scaling) {
            for (const [key, fn] of Object.entries(ab.scaling)) {
                if (typeof fn === 'function') {
                    descHtml = descHtml.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), fn(level) ?? '?');
                }
            }
        }
        lines.push(`<div class="mt-1 text-sm text-yellow-300">${descHtml}</div>`);
    }

    return lines.join('\n');
}
