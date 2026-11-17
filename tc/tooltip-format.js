// tooltip-format.js
//
// Pure/stateless formatting helpers for talent tooltips and searchable text.
// These were extracted from talent-calculator.js as the first modularization step.
// They take everything they need as arguments (no module state, no DOM) so they
// can be tested and reused independently. Callers pass in `expansion`
// (from getCurrentExpansion()) and `classKey` where those were previously read
// from shared state.

// Resource cost line (e.g. "15 Rage", "80 Mana", "11% of base mana").
export function getResourceText(expansion, classKey, spentResource, absoluteSpent, resourceType) {
    if (!spentResource) return "";

    switch (classKey) {
        case "warrior":
            return `${spentResource} Rage`;

        case "rogue":
            return `${spentResource} Energy`;

        case "death_knight":
            return `${spentResource} Runic Power`;

        case "hunter":
            if (expansion === "cataclysm") {
                return `${spentResource} Focus`;
            }
            // fall through to default (mana) if not Cataclysm

        case "druid":
            if (resourceType === 2) { // Rage for druids (Feral)
                return `${spentResource} Rage`;
            }
            // fall through to default if not Rage

        default:
            // If absoluteSpent is true → show absolute mana cost
            if (absoluteSpent) {
                return `${spentResource} Mana`;
            }
            // Otherwise → show percentage-based mana cost
            return `${spentResource}% of base mana`;
    }
}

// Range line (e.g. "Melee Range", "30 yd range", "5 - 30 yd range").
export function getRangeText(range, minRange, maxRange) {
    // Prefer min/max range when defined
    if (range === null) {
        if (minRange && maxRange) {
            return `${minRange} - ${maxRange} yd range`;
        }
    }

    if (range === 0) return "Melee Range";
    if (range > 0) return `${range} yd range`;
    return "";
}

// Cooldown line (e.g. "6 sec cooldown", "1.5 min cooldown").
export function formatCooldown(cd) {
    if (!cd) return "";
    if (cd % 60 === 0) {
        // whole minutes
        const minutes = cd / 60;
        return `${minutes} min cooldown`;
    } else if (cd > 60) {
        // fractional minutes (e.g. 90 -> 1.5 min)
        const minutes = (cd / 60).toFixed(1);
        return `${minutes} min cooldown`;
    } else {
        // seconds
        return `${cd} sec cooldown`;
    }
}

// Weapon / form / stance / reagent requirement lines. `classKey` replaces the
// previous read of currentState.class.
export function getRequirementText(talent, classKey) {
    const requirements = [];

    // Weapon requirements
    if (talent.requiresWeapon === 1) requirements.push("Requires Melee Weapon");
    if (talent.requiresWeapon === 2) requirements.push("Requires Ranged Weapon");
    if (!talent.requiresWeapon && talent.requires1HWeapon) requirements.push("Requires One-Handed Melee Weapon");

    // Druid forms
    if (classKey === 'druid') {
        const druidForms = [];
        if (talent.requiresCatForm) druidForms.push("Cat Form");
        if (talent.requiresBearForm) druidForms.push("Bear Form");
        if (talent.requiresDireBearForm) druidForms.push("Dire Bear Form");
        if (talent.requiresMoonkinForm) druidForms.push("Moonkin Form");
        if (druidForms.length > 0) requirements.push(`Requires ${druidForms.join(", ")}`);
    }

    // Warrior stances
    if (classKey === 'warrior') {
        if (Array.isArray(talent.requiresStance) && talent.requiresStance.length > 0) {
            const stanceNames = talent.requiresStance.map(s => {
                switch (s) {
                    case 1: return "Battle Stance";
                    case 2: return "Defensive Stance";
                    case 3: return "Berserker Stance";
                    default: return null;
                }
            }).filter(Boolean);
            if (stanceNames.length > 0) requirements.push(`Requires ${stanceNames.join(", ")}`);
        } else if (typeof talent.requiresStance === "number") {
            switch (talent.requiresStance) {
                case 1: requirements.push("Requires Battle Stance"); break;
                case 2: requirements.push("Requires Defensive Stance"); break;
                case 3: requirements.push("Requires Berserker Stance"); break;
            }
        }
    }

    // Priest shadowform
    if (classKey === 'priest') {
        if (talent.requiresShadowform) requirements.push("Requires Shadowform");
    }

    // Rogue stealth
    if (classKey === 'rogue') {
        if (talent.requiresStealth) requirements.push("Requires Stealth");
    }

    // Warlock reagents
    if (classKey === 'warlock') {
        if (talent.requiresSoulShard) requirements.push("Reagents:<br>&nbsp;&nbsp;Soul Shard");
    }

    // Shaman tools
    if (classKey === 'shaman') {
        if (talent.requiresWaterTotem) requirements.push("Tools:<br>&nbsp;&nbsp;Water Totem");
        if (talent.requiresFireTotem) requirements.push("Tools:<br>&nbsp;&nbsp;Fire Totem");
        if (talent.requiresAirTotem) requirements.push("Tools:<br>&nbsp;&nbsp;Air Totem");
        if (talent.requiresEarthTotem) requirements.push("Tools:<br>&nbsp;&nbsp;Earth Totem");
    }

    return requirements.join("<br>");
}

// Normalize <br> variants to newlines and split into trimmed lines.
export function parseTooltipLines(html) {
    return html.replace(/<br\s*\/?>/gi, '\n')
               .split('\n')
               .map(l => l.trim());
}

// Whether a description line should render as a (Cataclysm-only) subheader.
// `expansion` replaces the previous read of getCurrentExpansion().
export function isSubheaderLine(line, expansion) {
    if (expansion !== "cataclysm") {
        // Only Cataclysm has subheaders
        return false;
    }

    // Subheaders never end with punctuation
    if (/[.!?:]$/.test(line)) return false;

    // Subheaders never start with "-"
    if (line.startsWith('-')) return false;

    // Subheaders never start with a digit
    if (/^\d/.test(line)) return false;

    // Must contain letters
    if (!/[a-zA-Z]/.test(line)) return false;

    // Avoid very long paragraphs
    if (line.length > 55) return false;

    return true;
}

// Format a talent description HTML blob into styled tooltip lines.
export function formatTalentTooltipDescription(html, expansion) {
    const lines = parseTooltipLines(html);
    const out = [];

    for (const line of lines) {
        if (!line) {
            // single paragraph break
            out.push('<br>');
            continue;
        }

        if (isSubheaderLine(line, expansion)) {
            out.push(`<div class="text-sm text-white">${line}</div>`);
        } else {
            out.push(`<div class="text-sm text-yellow-300">${line}</div>`);
        }
    }

    return out.join("\n");
}

// Capitalize the first character of a string.
export function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
