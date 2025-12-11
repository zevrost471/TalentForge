// talent-calculator.js

import { classColors } from '../class-colors.js';
import { patchOptions } from '../db/patches.js';
import { talentsAttributedByVersion } from '../base-talents-per-patch.js';
import { glyphs, glyphIndex } from '../db/glyphs.js';
import { cataSpecCards } from '../ctc-tree-summary-cards.js';
import { backgroundImages } from './tree-bg-images.js';
import { defaultIcons, cataOverrides } from '../tree-icons.js';
import { getDomElements } from './dom-elements.js';
import '../talent-patch-changes.js';
import { baselineClassAbilities } from '../db/baseline-class-abilities.js';

const {
  headerEl,
  captionEl,
  selectClassHeader,
  expansionSelect,
  versionSelect,
  applyVersionBtn,
  pointsBox,
  customVersionOptions,
  customPoints,
  classButtons,
  pointsSpentEl,
  pointsTotalEl,
  pointsBar,
  resetTalentsBtn,
  talentContainer,
  talentTrees,
  talentPlaceholder,
  cataSpecSelectionPanel,
  timelineWrapper,
  glyphsWrapper,
  buildNameInput,
  saveBuildBtn,
  importBuildBtn,
  buildsList,
  sidebar,
  toggleSidebarButton,
  sidebarContent,
  talentSection,
  talentWrapper,
  toggleBuildManagerButton,
  buildManagerWrapper,
  buildManagerContent
} = getDomElements();

// Event listeners
// versionSelect.addEventListener("change", handleVersionChange);
customPoints.addEventListener("change", handleCustomPointsChange);
classButtons.forEach((btn) => btn.addEventListener("click", handleClassSelect));
resetTalentsBtn.addEventListener("click", resetTalents);
saveBuildBtn.addEventListener("click", saveBuild);
importBuildBtn.addEventListener("click", importBuild);

let selectedExpansion = null;
let selectedPatch = null;

expansionSelect.addEventListener("change", () => {
    selectedExpansion = expansionSelect.value;
    versionSelect.innerHTML = '<option value="" disabled selected>Select patch</option>';
    versionSelect.disabled = true;

    if (patchOptions[selectedExpansion]) {
        patchOptions[selectedExpansion].forEach(patch => {
            const opt = document.createElement("option");
            opt.value = patch.value;
            opt.textContent = patch.label;
            versionSelect.appendChild(opt);
        });
        versionSelect.disabled = false;
    }

    applyVersionBtn.classList.add("hidden"); // Hide until patch selected
});

versionSelect.addEventListener("change", () => {
    selectedPatch = versionSelect.value;
    if (selectedExpansion && selectedPatch) {
        applyVersionBtn.classList.remove("hidden");
    }
});

applyVersionBtn.addEventListener("click", () => {
    if (!selectedPatch) return;
    versionSelect.value = selectedPatch;
    handleVersionChange();
});

let isCollapsed = false;

toggleSidebarButton.addEventListener('click', () => {
    isCollapsed = !isCollapsed;

    if (isCollapsed) {
        sidebar.classList.remove('lg:w-1/4', 'w-full');
        sidebar.classList.add('w-12');
        sidebarContent.classList.add('hidden');
        toggleSidebarButton.title = "Show Sidebar";

        // Make talent area centered
        talentSection.classList.remove('lg:w-3/4');
        talentSection.classList.add('w-full', 'justify-center');
    } else {
        sidebar.classList.remove('w-12');
        sidebar.classList.add('w-full', 'lg:w-1/4');
        sidebarContent.classList.remove('hidden');
        toggleSidebarButton.title = "Hide Sidebar";

        // Restore talent layout
        talentSection.classList.remove('w-full', 'justify-center');
        talentSection.classList.add('lg:w-3/4');
    }
});

const icon = toggleBuildManagerButton.querySelector("i");

toggleBuildManagerButton.addEventListener("click", () => {
    const isExpanded = toggleBuildManagerButton.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
        // Collapse
        const contentHeight = buildManagerContent.offsetHeight;
        buildManagerWrapper.style.maxHeight = `${contentHeight}px`;
        requestAnimationFrame(() => {
            buildManagerWrapper.style.maxHeight = "0px";
        });

        toggleBuildManagerButton.setAttribute("aria-expanded", "false");
        icon.style.transform = "rotate(-90deg)"; // point right
        toggleBuildManagerButton.title = "Expand Build Manager";
    } else {
        // Expand
        const contentHeight = buildManagerContent.scrollHeight;
        buildManagerWrapper.style.maxHeight = `${contentHeight}px`;

        toggleBuildManagerButton.setAttribute("aria-expanded", "true");
        icon.style.transform = "rotate(0deg)"; // point down
        toggleBuildManagerButton.title = "Collapse Build Manager";
    }
});

// Reset URL hash on page load
window.addEventListener('DOMContentLoaded', function () {
    if (location.hash) location.hash = '';
});

// Disable all class buttons on initial load
classButtons.forEach((btn) => {
    btn.disabled = true;
    btn.classList.add("opacity-50", "cursor-not-allowed");
});

// Base specialization data for vanilla versions
const baseTreeData = {
    maxPoints: 51,
    classes: {
        druid: { name: "Druid", trees: ["Balance", "Feral Combat", "Restoration"] },
        hunter: {
            name: "Hunter",
            trees: ["Beast Mastery", "Marksmanship", "Survival"]
        },
        mage: { name: "Mage", trees: ["Arcane", "Fire", "Frost"] },
        paladin: { name: "Paladin", trees: ["Holy", "Protection", "Retribution"] },
        priest: { name: "Priest", trees: ["Discipline", "Holy", "Shadow"] },
        rogue: { name: "Rogue", trees: ["Assassination", "Combat", "Subtlety"] },
        shaman: {
            name: "Shaman",
            trees: ["Elemental", "Enhancement", "Restoration"]
        },
        warlock: {
            name: "Warlock",
            trees: ["Affliction", "Demonology", "Destruction"]
        },
        warrior: { name: "Warrior", trees: ["Arms", "Fury", "Protection"] },
        deathknight: { name: "Death Knight", trees: ["Blood", "Frost", "Unholy"] }
    }
};

// Define versions that share the same data
const sharedVersions = [
    "0.12",
    "1.1",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "1.6",
    "1.7",
    "1.8",
    "1.9",
    "1.10",
    "1.11",
    "1.12",
    "1.13",
    "2.4",
    "3.2.0",
    "3.3.5",
    "4.3.5",
    "custom1",
    "1.0.0e",
    "1.16.0t",
    "1.16.1t",
    "1.17.2t"
];

const talentTreeData = {};

sharedVersions.forEach((version) => {
    // Clone the baseTreeData
    talentTreeData[version] = JSON.parse(JSON.stringify(baseTreeData));

    // Assign expansion-specific maxPoints
    if (version.startsWith("4.")) {
        talentTreeData[version].maxPoints = 41; // Cataclysm
    } else if (version.startsWith("3.")) {
        talentTreeData[version].maxPoints = 71; // Wrath of the Lich King
    } else if (version.startsWith("2.") || version.endsWith("e")) {
        talentTreeData[version].maxPoints = 61; // The Burning Crusade
    } else {
        talentTreeData[version].maxPoints = 51; // Vanilla & others
    }
});

// Modify just 1.11 (e.g., remove one tree from Priest)
// talentTreeData["1.11"].classes.priest.trees = ["Discipline", "Holy"];  // Shadow not yet available

talentTreeData["0.12"].classes.hunter.trees = [
    "Beast Mastery",
    "Ranged Combat",
    "Outdoorsmanship"
];

const mageTrees = ["Arcane", "Frost", "Fire"];

["0.12", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "1.10"].forEach(version => {
    talentTreeData[version].classes.mage.trees = mageTrees;
});

let currentState = {
    version: null,
    class: null,
    pointsSpent: 0,
    pointsTotal: 51,
    talents: {},
    builds: [],
    talentOrder: [],
    glyphs: {}
};

// const talents = talentsAttributedByVersion[currentState.version]?.[currentState.class]?.[treeName] || [];

// Load saved builds from localStorage
loadBuilds();

// Functions
function getTalents(version, classKey, treeName) {
    return talentsAttributedByVersion[version]?.[classKey]?.[treeName] || [];
}

/*
function canLearnTalent(talent, classKey, treeName) {
    const treePoints = getTreePoints(classKey, treeName);
    const requirementsMet = talent.requiresTalents
        ? currentState.talents?.[classKey]?.[treeName]?.[talent.requiresTalents] > 0
        : true;

    return treePoints >= talent.row * 5 && requirementsMet;
}
*/

function canLearnTalent(talent, classKey, treeName) {
    const currentRank =
        currentState.talents[classKey]?.[treeName]?.[talent.id] || 0;
    const totalPointsInTree = getTotalPointsInTree(classKey, treeName);

    // Don't allow learning if already maxed
    if (currentRank >= talent.ranks) return false;

    // 1. Tier requirement
    const requiredPoints = talent.row * 5;
    if (totalPointsInTree < requiredPoints) return false;

    // 2. Specific dependency check
    if (talent.requiresTalents) {
        const requiredId = talent.requiresTalents;
        const requiredTalent = getTalentById(classKey, treeName, requiredId);
        const requiredPoints = requiredTalent?.ranks || 0;
        const spent = currentState.talents[classKey]?.[treeName]?.[requiredId] || 0;

        if (spent < requiredPoints) return false;
    }

    return true;
}

/*
function getTreePoints(tree) {
    if (!currentState.class || !currentState.talents[currentState.class])
        return 0;
    const treeTalents = currentState.talents[currentState.class][tree];
    return Object.values(treeTalents).reduce((sum, points) => sum + points, 0);
}
*/

function getTreePoints(classKey, treeName) {
    const tree = currentState.talents?.[classKey]?.[treeName] || {};
    return Object.values(tree).reduce((sum, val) => sum + val, 0);
}

function getTalentTooltip(talent, currentRank, classKey, treeName, showNextRank = true) {
    if (!talent) return "";

    const lines = [];

    // === HEADER ===
    // 1. Talent Name
    lines.push(`<div class="text-[15px] text-white">${talent.name}</div>`);

    // 2. "Talent" label
    lines.push(`<div class="text-sm text-gray-400">Talent</div>`);

    if (talent.isActive) {

        // 3. Resource spent & range
        const resourceText = getResourceText(classKey, talent.spentResource, talent.absoluteSpent, talent.resourceType);
        const rangeText = getRangeText(talent.range, talent.minRange, talent.maxRange);

        // flex container: resource spent on left, range on right
        if (resourceText && rangeText) {
            lines.push(`
                <div class="flex justify-between text-sm text-white">
                    <span>${resourceText}</span>
                    <span>${rangeText}</span>
                </div>
            `);
        } else if (resourceText) {
            // Only resource → left
            lines.push(`
                <div class="text-sm text-white">
                    ${resourceText}
                </div>
            `);
        } else if (rangeText) {
            // Only range → left
            lines.push(`
                <div class="text-sm text-white">
                    ${rangeText}
                </div>
            `);
        }

        // 4. Cast type & cooldown
        let castText = "";
        if (!talent.castTime) {
            // No cast time = Instant
            castText = "Instant cast";
        } else if (talent.isChanneled) {
            // Has cast time + flagged channeled
            castText = `Channeled (${talent.castTime} sec cast)`;
        } else {
            // Has cast time but not channeled
            castText = `${talent.castTime} sec cast`;
        }

        let cooldownText = formatCooldown(talent.cooldown);

        // flex container: cast type on left, cooldown on right
        lines.push(`
            <div class="flex justify-between text-sm text-white">
                <span>${castText}</span>
                <span>${cooldownText}</span>
            </div>
        `);
    }

    // 5. "Requires [Class]"
    const classDisplayName = talentTreeData[currentState.version].classes[classKey].name;
    lines.push(`<div class="text-sm text-white">Requires ${classDisplayName}</div>`);

    // 6. Weapon requirement
    const weaponReqText = getRequirementText(talent);
    if (weaponReqText) {
        lines.push(`<div class="text-sm text-white">${weaponReqText}</div>`);
    }

    // 7. Description
    if (Array.isArray(talent.description)) {
        // Case A: [template, values] format (old)
        if (
            typeof talent.description[0] === "string" &&
            talent.description.length === 2 &&
            typeof talent.description[1] === "object"
        ) {
            const [template, values] = talent.description;
            const getFilledDescription = (rank) => {
                return template.replace(/\{(\w+)\}/g, (_, key) => {
                    const val = values?.[key];
                    if (Array.isArray(val)) {
                        return val[Math.max(0, Math.min(rank - 1, val.length - 1))];
                    }
                    if (typeof val === "object" && val.base !== undefined && val.perRank !== undefined) {
                        return (val.base + val.perRank * (rank - 1)).toFixed(1);
                    }
                    return val ?? "?";
                });
            };

            const currentDesc = getFilledDescription(currentRank || 1);
            lines.push(`<div class="text-sm text-yellow-300">${currentDesc}</div>`);

            if (showNextRank && currentRank > 0 && currentRank < talent.ranks) {
                const nextDesc = getFilledDescription(currentRank + 1);
                lines.push(`<div class="mt-2 text-sm text-white">Next rank:</div>`);
                lines.push(`<div class="text-sm text-yellow-300">${nextDesc}</div>`);
            }
        }
        // Case B: Full per-rank string array (new)
        else if (talent.description.length > 1 && talent.description.every(d => typeof d === "string")) {
            const rankIndex = Math.max(0, Math.min((currentRank || 1) - 1, talent.description.length - 1));
            const currentDesc = talent.description[rankIndex];

            lines.push(`<div class="text-sm text-yellow-300">${currentDesc}</div>`);

            // Only show next rank if showNextRank === true
            if (showNextRank && currentRank > 0 && currentRank < talent.ranks) {
                const nextDesc = talent.description[rankIndex + 1];
                lines.push(`<div class="mt-2 text-sm text-white">Next rank:</div>`);
                lines.push(`<div class="text-sm text-yellow-300">${nextDesc}</div>`);
            }
        }
        // Case C: Fallback for unexpected formats
        else {
            lines.push(`<div class="text-sm text-yellow-300">${talent.description.join("<br>")}</div>`);
        }
    }
    // Case D: Simple string
    else if (typeof talent.description === "string") {
        lines.push(`<div class="text-sm text-yellow-300">${talent.description}</div>`);
    }

    // 8. Lock requirements
    const canLearn = canLearnTalent(talent, classKey, treeName);
    if (!canLearn) {
        const requiredPoints = talent.row * 5;
        const totalInTree = getTotalPointsInTree(classKey, treeName);
        if (totalInTree < requiredPoints) {
            lines.push(`<div class="mt-2 text-sm text-red-400">Requires ${requiredPoints} points in ${treeName} Talents</div>`);
        }

        if (talent.requiresTalents) {
            const reqTalent = getTalentById(classKey, treeName, talent.requiresTalents);
            if (reqTalent) {
                const spent = currentState.talents[classKey]?.[treeName]?.[reqTalent.id] || 0;
                if (spent < reqTalent.ranks) {
                    const pointLabel = reqTalent.ranks === 1 ? "point" : "points";
                    lines.push(
                        `<div class="text-sm text-red-400">Requires ${reqTalent.ranks} ${pointLabel} in ${reqTalent.name}</div>`
                    );
                }
            }
        }
    }

    // 9. Show rank
    if (showNextRank) {
        lines.push(`<div class="mt-2 text-sm text-white">Rank: ${currentRank}/${talent.ranks}</div>`);
    }

    // === WRAP IN STYLED TOOLTIP CONTAINER ===
    return lines.join("\n");
}

function getCataBaseTalentTooltip(talent, classKey) {
    if (!talent) return "";

    const lines = [];

    // 1. Talent Name
    let talentName = talent.name || "";
    if (talentName.startsWith("Mastery: ")) {
        talentName = talentName.replace("Mastery: ", ""); // strip prefix
    }
    lines.push(`<div class="text-[15px] text-white">${talentName}</div>`);

    // 2. "Talent" label
    lines.push(`<div class="text-sm text-gray-400">Talent</div>`);

    if (talent.isActive) {

        // 3. Resource spent & range
        const resourceText = getResourceText(classKey, talent.spentResource, null, null);
        const rangeText = getRangeText(talent.range, null, null);

        // flex container: resource spent on left, range on right
        if (resourceText && rangeText) {
            lines.push(`
                <div class="flex justify-between text-sm text-white">
                    <span>${resourceText}</span>
                    <span>${rangeText}</span>
                </div>
            `);
        } else if (resourceText) {
            // Only resource → left
            lines.push(`
                <div class="text-sm text-white">
                    ${resourceText}
                </div>
            `);
        } else if (rangeText) {
            // Only range → left
            lines.push(`
                <div class="text-sm text-white">
                    ${rangeText}
                </div>
            `);
        }

        // 4. Cast type & cooldown
        let castText = "";
        if (!talent.castTime) {
            // No cast time = Instant
            castText = "Instant cast";
        } else if (talent.isChanneled) {
            // Has cast time + flagged channeled
            castText = `Channeled (${talent.castTime} sec cast)`;
        } else {
            // Has cast time but not channeled
            castText = `${talent.castTime} sec cast`;
        }

        let cooldownText = formatCooldown(talent.cooldown);

        // flex container: cast type on left, cooldown on right
        lines.push(`
            <div class="flex justify-between text-sm text-white">
                <span>${castText}</span>
                <span>${cooldownText}</span>
            </div>
        `);
    }

    // 5. "Requires [Class]"
    const classDisplayName = talentTreeData[currentState.version].classes[classKey].name;
    lines.push(`<div class="text-sm text-white">Requires ${classDisplayName}</div>`);

    // 6. Weapon requirement
    if (talent.requiresWeapon) {
        const weaponReqText = getRequirementText(talent);
        if (weaponReqText) {
            lines.push(`<div class="text-sm text-white">${weaponReqText}</div>`);
        }
    }

    // 7. Description
    if (Array.isArray(talent.description)) {
        lines.push(`<div class="text-sm text-yellow-300">${talent.description.join("<br>")}</div>`);
    } else if (typeof talent.description === "string") {
        lines.push(`<div class="text-sm text-yellow-300">${talent.description}</div>`);
    } else {
        lines.push(`<div class="text-sm text-yellow-300 italic">No description available</div>`);
    }

    return lines.join("\n");
}

// helper to get resource name
function getResourceText(classKey, spentResource, absoluteSpent, resourceType) {

    const currentExpansion = getCurrentExpansion();
    
    if (!spentResource) return "";
    
    switch (classKey) {
        case "warrior": 
            // if (resourceType === 2) { // Rage for warriors
                return `${spentResource} Rage`;
            // }

        case "rogue": 
            // if (resourceType === 3) { // Energy for rogues
                return `${spentResource} Energy`;
            // }

        case "deathknight": 
            // if (resourceType === 4) { // Runic Power for dks
                return `${spentResource} Runic Power`;
            // }

        case "hunter": 
            if (currentExpansion === "cataclysm") {
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

// helper to get range text
function getRangeText(range, minRange, maxRange) {

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

// helper to format cooldowns
function formatCooldown(cd) {
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

function getRequirementText(talent) {
    const requirements = [];

    // Weapon requirements
    if (talent.requiresWeapon === 1) requirements.push("Requires Melee Weapon");
    if (talent.requiresWeapon === 2) requirements.push("Requires Ranged Weapon");
    if (!talent.requiresWeapon && talent.requires1HWeapon) requirements.push("Requires One-Handed Melee Weapon");

    // Druid forms
    if (currentState.class === 'druid') {
        const druidForms = [];
        if (talent.requiresCatForm) druidForms.push("Cat Form");
        if (talent.requiresBearForm) druidForms.push("Bear Form");
        if (talent.requiresDireBearForm) druidForms.push("Dire Bear Form");
        if (druidForms.length > 0) requirements.push(`Requires ${druidForms.join(", ")}`);
    }

    // Warrior stances
    if (currentState.class === 'warrior') {
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

    // Rogue stealth
    if (currentState.class === 'rogue') {
        if (talent.requiresStealth) requirements.push("Requires Stealth");
    }

    // Warlock reagents
    if (currentState.class === 'warlock') {
        if (talent.requiresSoulShard) requirements.push("Reagents:<br>&nbsp;&nbsp;Soul Shard");
    }

    // Shaman tools
    if (currentState.class === 'shaman') {
        if (talent.requiresWaterTotem) requirements.push("Tools:<br>&nbsp;&nbsp;Water Totem");
        if (talent.requiresFireTotem) requirements.push("Tools:<br>&nbsp;&nbsp;Fire Totem");
        if (talent.requiresAirTotem) requirements.push("Tools:<br>&nbsp;&nbsp;Air Totem");
        if (talent.requiresEarthTotem) requirements.push("Tools:<br>&nbsp;&nbsp;Earth Totem");
    }

    return requirements.join(", ");
}

let previousExpansion = null;

function handleVersionChange(loadingBuild = false) {
    const version = versionSelect.value;

    if (!version) {
        // Hide or disable custom options
        customVersionOptions.classList.add("hidden");

        // Disable class buttons
        classButtons.forEach((btn) => (btn.disabled = true));

        // Hide talent points box
        pointsBox.classList.add("hidden");

        return;
    }

    currentState.version = version;

    pointsBox.classList.remove("hidden");

    if (version === "custom") {
        customVersionOptions.classList.remove("hidden");
        currentState.pointsTotal = parseInt(customPoints.value);
    } else {
        customVersionOptions.classList.add("hidden");
        currentState.pointsTotal = talentTreeData[version].maxPoints;
    }

    // Determine expansion from version
    let currentExpansion = "";
    /*
    if ((version.startsWith("1.") && !isNaN(version)) || version.endsWith("t")) 
    currentExpansion = "vanilla";
    else if ((version.startsWith("2.") && !isNaN(version)) || version.endsWith("e")) currentExpansion = "tbc";
    else if (version.startsWith("3.") && !isNaN(version)) 
    currentExpansion = "wotlk";
    else currentExpansion = "custom";
    */

    for (const [expansion, patches] of Object.entries(patchOptions)) {
        if (patches.some(patch => patch.value === version)) {
            currentExpansion = expansion;
            break;
        }
    }

    if (currentExpansion === "wotlk" || currentExpansion === "cataclysm") {
        document.getElementById("deathknight-button").classList.remove("hidden");
    } else {
        document.getElementById("deathknight-button").classList.add("hidden");
    }

    const availableClasses = Object.keys(talentsAttributedByVersion[version] || {});
    if (!availableClasses.includes(currentState.class)) {
        currentState.class = null;
    }

    // Always clear glyphs before checking expansion
    if (glyphsWrapper) {
        glyphsWrapper.innerHTML = "";
        glyphsWrapper.style.display = "none";
    }

    previousExpansion = currentExpansion; // Update tracker

    // Enable class buttons
    classButtons.forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove("opacity-50", "cursor-not-allowed");
    });

    // Reset URL hash when changing version
    if (location.hash) location.hash = "";

    // Reset state
    currentState.pointsSpent = 0;
    currentState.talents = {};
    currentState.talentOrder = [];
    currentState.glyphs = {};

    updatePointsDisplay();

    if (currentExpansion === "cataclysm") {
        // Reset spec each time version is changed (respec flow)
        chosenSpec = null;

        updatePlaceholder();
        if (!loadingBuild) {
            renderSpecSelectionPanel();
        } else {
            renderTalentTrees();
        }
        renderGlyphsContainer();
    } else if (currentExpansion === "wotlk") {
        renderTalentTrees();
        renderGlyphsContainer();
    } else {
        renderTalentTrees();
    }

    updateURLHash();
}

function getExpansionFromPatch(patch) {
    for (const [expansion, patches] of Object.entries(patchOptions)) {
        if (patches.some(p => p.value === patch)) {
            return expansion;
        }
    }
    return "custom";
}

function getCurrentExpansion() {
    const version = currentState.version;
    if (!version) return null;

    for (const [expansion, patches] of Object.entries(patchOptions)) {
        if (patches.some(patch => patch.value === version)) {
            return expansion;
        }
    }

    return null; // or "custom" if you prefer a default value
}

function updatePlaceholder() {
    const currentExpansion = getCurrentExpansion();

    if (!currentState.version) {
        talentPlaceholder.innerHTML = `
                <h2 class="text-2xl text-yellow-400 mb-2">Select a version</h2>
                <p class="text-gray-400">Use the dropdown to choose a game version</p>
                `;
        talentPlaceholder.classList.remove("hidden");
        talentTrees.classList.add("hidden");
        cataSpecSelectionPanel.classList.add("hidden");
        return;
    }

    if (!currentState.class || (currentState.class === "deathknight" && (currentExpansion !== "wotlk" && currentExpansion !== "cataclysm"))) {
        talentPlaceholder.innerHTML = `
                <h2 class="text-2xl text-yellow-400 mb-2">Select a class</h2>
                <p class="text-gray-400">Click on any class icon to start building your talent tree</p>
                `;
        talentPlaceholder.classList.remove("hidden");
        talentTrees.classList.add("hidden");
        cataSpecSelectionPanel.classList.add("hidden");
        return;
    }

    // Hide placeholder if both version and class are selected
    talentPlaceholder.classList.add("hidden");

    if (currentExpansion === "cataclysm") {
        if (!chosenSpec) {
            cataSpecSelectionPanel.classList.remove("hidden");
            talentTrees.classList.add("hidden");
        } else {
            cataSpecSelectionPanel.classList.add("hidden");
            talentTrees.classList.remove("hidden");
        }
    } else {
        cataSpecSelectionPanel.classList.add("hidden");
        talentTrees.classList.remove("hidden");
    }
}

function handleCustomPointsChange() {
    currentState.pointsTotal = parseInt(customPoints.value);
    updatePointsDisplay();

    if (currentState.class) {
        renderTalentTrees();
    }
}

// Tracks the chosen specialization per class in Cataclysm
let chosenSpec = null;

function handleClassSelect(e) {
    const newClassKey = e.currentTarget.dataset.class;

    if (newClassKey) {
        // headerEl?.classList.add("collapsed");
        selectClassHeader?.classList.add("collapsed");
    } else {
        // headerEl?.classList.remove("collapsed");
        selectClassHeader?.classList.remove("collapsed");
    }

    // Reset URL hash when changing class
    if (location.hash) location.hash = "";

    // Reset all state regardless of whether data already exists
    currentState.class = newClassKey;
    currentState.pointsSpent = 0;
    currentState.talentOrder = [];
    currentState.glyphs = {};

    const trees = talentTreeData[currentState.version].classes[newClassKey].trees;

    currentState.talents[newClassKey] = {};

    trees.forEach((tree) => {
        currentState.talents[newClassKey][tree] = {};
    });

    // Always clear glyphs before checking expansion
    if (glyphsWrapper) {
        glyphsWrapper.innerHTML = "";
        glyphsWrapper.style.display = "none";
    }

    // Update active class button
    classButtons.forEach((btn) => {
        const isSelected = btn.dataset.class === newClassKey;
        /*
        btn.classList.toggle("bg-yellow-600", isSelected);
        btn.classList.toggle("text-white", isSelected);
        btn.classList.toggle("bg-gray-700", !isSelected);
        btn.classList.toggle("hover:bg-gray-600", !isSelected);
        */
    });

    updatePointsDisplay();

    const currentExpansion = getCurrentExpansion();

    if (currentExpansion === "cataclysm") {
        // Reset spec each time class is clicked (respec flow)
        chosenSpec = null;

        updatePlaceholder();
        renderSpecSelectionPanel();
        renderGlyphsContainer();
    } else if (currentExpansion === "wotlk") {
        renderTalentTrees();
        renderGlyphsContainer();
    } else {
        renderTalentTrees();
    }

    updateURLHash();
}

function renderSpecSelectionPanel() {

    const classKey = currentState.class;
    const version = currentState.version;

    if (!version || !classKey) return;

    const specs = cataSpecCards?.cataclysm?.[classKey];

    // clear existing UI
    if (cataSpecSelectionPanel) {
        cataSpecSelectionPanel.innerHTML = "";
    }

    if (timelineWrapper) {
        timelineWrapper.innerHTML = "";
    }

    if (!chosenSpec && specs && currentState.pointsSpent === 0) {
        cataSpecSelectionPanel.classList.remove("hidden");
        talentTrees.classList.add("hidden");
    }
    else {
        cataSpecSelectionPanel.classList.add("hidden");
        talentTrees.classList.remove("hidden");
    }

    // === Build header/info box (always visible) ===
    const classData = talentTreeData[version].classes[classKey];
    const trees = classData.trees;

    const treePoints = trees.map(tree => {
        const talents = currentState.talents[classKey]?.[tree] || {};
        return Object.values(talents).reduce((sum, val) => sum + val, 0);
    });
    const totalPoints = treePoints.reduce((a, b) => a + b, 0);

    let requiredLevel;
    if (version.startsWith("4.")) {
        const pointsToLevelMap = [10, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 82, 83, 84, 85];
        requiredLevel = totalPoints === 0 ? "-" : pointsToLevelMap[Math.min(totalPoints - 1, pointsToLevelMap.length - 1)];
    } else {
        requiredLevel = totalPoints === 0 ? "-" : 9 + totalPoints;
    }
    const pointsLeft = currentState.pointsTotal - totalPoints;

    const classIconUrl = `https://wow.zamimg.com/images/wow/icons/large/classicon_${classKey}.jpg`;
    const classColor = classColors[classKey] || "#FFF";

    const headerHTML = `
        <div class="w-full py-4 px-6 rounded-md bg-gray-800 text-gray-100 shadow flex flex-col md:flex-row justify-between items-center gap-4 border border-gray-700">
            <div class="flex items-center gap-3">
                <img src="${classIconUrl}" alt="${classData.name}" class="w-8 h-8 rounded border border-gray-500" />
                <span class="text-lg font-semibold">
                    <span style="color: ${classColor}">${classData.name}:</span>
                    ${treePoints.map((points, i) => `
                        <span class="${points === 0 ? "text-gray-400" : "text-white"}">${points}</span>
                        ${i < treePoints.length - 1 ? '<span class="text-gray-500"> / </span>' : ""}
                    `).join("")}
                </span>
            </div>
            <div class="flex gap-4 text-sm">
                <div>
                    <span class="text-gray-400 font-semibold">Required level:</span>
                    <span class="font-semibold">${requiredLevel}</span>
                </div>
                <div>
                    <span class="text-gray-400 font-semibold">Points left:</span>
                    <span class="font-semibold">${pointsLeft}</span>
                </div>
            </div>
        </div>
    `;
    cataSpecSelectionPanel.insertAdjacentHTML("beforeend", headerHTML);

    // === Container wrapper for spec summary cards ===
    const container = document.createElement("div");
    container.className = "flex flex-col md:flex-row gap-6 justify-center mt-4";

    Object.entries(specs).forEach(([specKey, specInfo]) => {
        // specKey is "Arms" / "Fury" / "Protection"
        // specInfo is the object containing specIcon, primary[], secondary[], specDescription

        const primary = specInfo.primary?.[0] || {};
        const primaryDesc = Array.isArray(primary.description)
            ? primary.description.join(" ")
            : (primary.description || "");

        const secondaryHTML = (specInfo.secondary || [])
            .map(p => {
                const tooltip = getCataBaseTalentTooltip(p, classKey); // <-- Added tooltip for secondary abilities
                const pdesc = Array.isArray(p.description)
                    ? p.description.join(" ")
                    : (p.description || "");
                const iconPath = p.icon ? `https://wow.zamimg.com/images/wow/icons/large/${p.icon}.jpg` : "";
                return `
                    <li class="flex items-center gap-2 mb-2">
                        <!-- Icon with tooltip -->
                        ${iconPath ? `
                        <div class="relative group">    
                            <img src="${iconPath}" alt="${p.name}" class="w-5 h-5 rounded border border-gray-600 cursor-pointer">
                            <!-- Tooltip -->
                            <div class="hidden group-hover:block absolute right-0 top-0 translate-x-full -translate-y-full z-50 pointer-events-none
                                        p-2 bg-black border border-gray-600 rounded w-80">
                                ${tooltip}
                            </div>
                        </div>` : ""}
                        <!-- Name with tooltip -->
                        <div class="relative group inline-block">
                            <strong class="text-sm font-normal cursor-pointer" style="color:#e4cc81;">${p.name}</strong>
                            <!-- <div class="text-sm text-gray-300">${pdesc}</div> -->
                            <!-- Tooltip -->
                            <div class="hidden group-hover:block absolute right-0 top-0 translate-x-full -translate-y-full z-50 pointer-events-none
                                        p-2 bg-black border border-gray-600 rounded w-80">
                                ${iconPath ? `
                                <img src="${iconPath}" 
                                        class="w-10 h-10 rounded border border-gray-600 absolute -top-0 -left-11 z-50 pointer-events-none">
                                ` : ""}
                                <div>
                                    ${tooltip}
                                </div>
                            </div>
                        </div>
                    </li>
                `;
            }).join("");

        const specIconPath = specInfo.specIcon
            ? `https://wow.zamimg.com/images/wow/icons/large/${specInfo.specIcon}.jpg`
            : "";

        // === Spec wrapper ===
        const specWrapper = document.createElement("div");
        specWrapper.className = "flex flex-col items-center";

        // === Spec card ===
        const specEl = document.createElement("div");
        specEl.className = `
            bg-gray-900 p-4 rounded-lg w-[340px] h-[550px]
            shadow-lg border border-gray-700 relative flex flex-col
        `.trim();

        specEl.innerHTML = `
            <!-- Select button at top -->
            <button data-spec="${specKey}"
                class="mb-3 w-full bg-yellow-600 hover:bg-yellow-500
                    text-black text-xl font-semibold px-3 py-2 rounded transition-colors">
                ${specKey}
            </button>

            <!-- Spec icon -->
            <div class="flex flex-col items-center py-6 mb-4 cursor-pointer select-spec" data-spec="${specKey}">
                ${specIconPath ? `
                    <img src="${specIconPath}"
                            class="w-16 h-16 rounded-full border-2 border-gray-600 mb-2
                                transition-transform transform hover:brightness-110"/>
                ` : ""}
            </div>

            <!-- Summary abilities container -->
            <div class="flex flex-col gap-2" style="min-height: 240px; max-height: 240px;">
                <!-- Primary ability -->
                <div class="mt-0 mb-0 flex items-center gap-3">
                    <!-- Icon with tooltip -->
                    ${primary.icon ? `
                    <div class="relative group">
                        <img src="https://wow.zamimg.com/images/wow/icons/large/${primary.icon}.jpg" 
                                class="w-10 h-10 rounded border border-gray-600 cursor-pointer"/>
                        <!-- Tooltip -->
                        <div class="hidden group-hover:block absolute right-0 top-0 translate-x-full -translate-y-full z-50 pointer-events-none
                                    p-2 bg-black border border-gray-600 rounded w-80">
                            ${getCataBaseTalentTooltip(primary, classKey)}
                        </div>
                    </div>` : ""}

                    <!-- Name with tooltip -->
                    <div class="relative group inline-block">
                        <strong class="text-lg font-normal cursor-pointer" style="color:#e4cc81;">${primary.name || ""}</strong>
                        <!-- Tooltip -->
                        <div class="hidden group-hover:block absolute right-0 top-0 translate-x-full -translate-y-full z-50 pointer-events-none
                                    p-2 bg-black border border-gray-600 rounded w-80">
                            ${primary.icon ? `
                            <img src="https://wow.zamimg.com/images/wow/icons/large/${primary.icon}.jpg" 
                                    class="w-10 h-10 rounded border border-gray-600 absolute -top-0 -left-11 z-50 pointer-events-none">
                            ` : ""}
                            <div>
                                ${getCataBaseTalentTooltip(primary, classKey)}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Secondary abilities -->
                <div class="mt-0 mb-8">
                    <ul class="mt-2">${secondaryHTML}</ul>
                </div>
            </div>
            
            <!-- Spec description at bottom -->
            <div class="mt-0">
                <p class="text-sm text-gray-300">
                    ${specInfo.specDescription || ""}
                </p>
            </div>
        `;

        // === Attach click handlers for both select button & icon ===
        specEl.querySelectorAll("[data-spec]").forEach(el => {
            el.addEventListener("click", () => {
                chosenSpec = specKey;
                cataSpecSelectionPanel.classList.add("hidden");
                talentTrees.classList.remove("hidden");
                renderTalentTrees();
                renderGlyphsContainer();
            });
        });

        specWrapper.appendChild(specEl);
        container.appendChild(specWrapper);
    });

    cataSpecSelectionPanel.appendChild(container);
}

const sharedIcon = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAA4ADgDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAAIEBQcIBgMB/8QALxAAAgEDBAECBAUFAQAAAAAAAQIDBAURAAYSITEHEwhBUWEUIjIzcUJSgZHR4f/EABoBAAMAAwEAAAAAAAAAAAAAAAQFBgIDBwH/xAAzEQABAwMBBQUFCQAAAAAAAAABAgMRAAQhMQUSQVFhBhNxkbEUIoHh8SMyM2KCocHR8P/aAAwDAQACEQMRAD8A6Lblsho6KGihVikQyxLEtI7EliSSSWZiSSSSSSdL3PJU1GLBaYJJ2QB6v2kJIPkISPkD2fvj5jUxT0tbFQzzUywU707KslTWyLFBTFjgySs3QCjsDyTgapT1O9bLVtqlqrD6XTzTVMy8KzcrgpLIWUhxAG7Unlj3OiPzcfPM9QVdIZO8BO7oOA6k9BoNSfOsk3CUL7yJI0HCeZ8OHGegqztl2N5pfxE6ESZIVGBHEfMnXlv/ANVfTixW6W13Hc8lTKhCTUVkjaeVx4ZfePGIYP6sPk+B96Q9T9+etmy3G2d0brlqkutvFRHKJYarnTzKVJjmwXQHDKeJXOM9ggmnY2QKBjB+uPOhw+raLpV3gTGkZ9QKEvnHLl7vFnHADh/vDrVtbr+ITeVQRbNkwjZ1qTGIKIqaibA6eWcryZvPjiMdY61peywWveT2vfcLwyxXS3Q1JREwsc4ykgIPzWRHXyf05yc9YHrcdAYB7/nWm/hY3Bd5fSLdlrCVMMFpqEqqGtKlkDS4EsAJOAcKrgAf1OTjIyAgONXZQhWTgmBoceODqZNZJU4fwzBOJ6HFXNvK42KO3tbrgBOrD9mJyHVgQVYMCCjBgGDAhlIBBBAOjVY+SSSST2STkk/fRqnRsS1j7Qbx56U+Y2LbtohUqPOYrOe49/b23Vaaa0bg3PeLrQU0pqIoq2reUCQjHI8iSxAJAznAZsYyc8+aYOSZpW89BBgaRSchGCe8gH+Ne/keNC2lmy6wFOJycxoPIQPrU0pZCsUzrI4oo8o8hJPQY6+yrCjcF/EcgoLEYIORnS7l+x/ka0H8KxtsuwN8pXWSguojqrdK0VXGHXr3ypAPWQQT2CCCQQQSNJrtlLd6pppIE7kY5zOqv3nTFePXSWGC6vQVzPpb6Ty095ob9v2jol25iOZqWerPuXCGSPIMPsOG6DK3LIUHo5wy6tfY2x4dl2DdNHty9Pc7Te5qOSijdwaiMx+57kTqoHeJEJcBQQBkA5US0i1tznM1dKwUdInELxHyAwOgP406p4YYV4QwgAfPHf8An/3TNrZDLDiXZlYM9PWk21+19hspSW21B11JyExuDjBVxPD3Z40wprZkB6ggj+0Hofyf+aNStQ0cKiSSRQD1yJ6/2ev9aNN+8cXkVJO9oe0O0ll9CnI/IFBI6e6PXPOsUU5Qx5RgR40sH5ajaeUIjKc/UaVBVMuQ/efn9NS1p2iYDbaXMEjMaCPSa6UpkyYpxX9wkfTvVsfCruqksO9ai03WdIqO8QpT8n7T3QT7YP2PJ176/MNU9PUmQEBcD6/bRFK6BW4nkvg/b6aWXO0Ld++71JMRkweB/rI8uNabuyF1art14Ch5cj8DFbQvd9t1tqp6XlzkgPF1A7XrPgf91KXCxVt6pKe32m80S3tYYZa6hCFjTRzDmnIEflbjxOcEAnBx+UtmnbnrHuW22+CkqKC0XyKlRUpZLpS+5JAB/SrAhiPHknwMa5+/7s3Let4V+7aq71MN4r3Zpp6aRoyFI48FIOQgXCgf2gDVcLhThSq1ExmdQeWoGNT9Mwdj2LaZQUvD3hoqZB/TiPiTnwzpja+/6Tc/xD3D0yiBum1qqI2+nleT9qWlhkdp48ZB5MrLkEZHBvsTWUtuXu47Uv8ASXvbtfNRXWklEkEsR/MreDnPRBBIKkEMCQQQSNGpN5u7bVuNmSNd2VCesA56a1b+zKbAFurdHiR8fnUBIjxyNHIrI6khlYYII+R0nRo1JU2pUf6x/OnqxDiCV8+NGjVP2fZQ4hZUJj5VoeJEV6YSnXk5x9Bq0Nl+hHqDu/bsd+At9it88YmpjcpXjeeIjIlCqrERnGQxADDsZHejRo3al243dmxbO6gcsE4nJ/gRS6+eWxal5H3sa54gV1Ppv6e7W9OtwDdG8dzWe+NbiZaOht5eVJJ1x7bNlRzwx6RccjxywAIJo0abv7Kt2ld2BgaajrzpKsuOnfdWST4CPIV//9k=";

const iconOverrideById = {};
["spirit_bond_old", "feral_aggression_old"].forEach(id => {
    iconOverrideById[id] = sharedIcon;
});

// actual base64 string

// const talents = getTalents(currentState.version, currentState.class, treeName);

function renderTalentTrees() {
    talentTrees.innerHTML = "";

    const classKey = currentState.class;
    const version = currentState.version;

    // Ensure both version and class are selected
    if (!version || !classKey) {
        updatePlaceholder();
        return;
    }
    updatePlaceholder();

    const classData = talentTreeData[version].classes[classKey];
    const trees = classData.trees;

    // Initialize talents for class if not present
    if (!currentState.talents[classKey]) {
        currentState.talents[classKey] = {};
        trees.forEach((tree) => {
            currentState.talents[classKey][tree] = {};
        });
    }

    // Count points in each tree
    const treePoints = trees.map((tree) => {
        const talents = currentState.talents[classKey]?.[tree] || {};
        return Object.values(talents).reduce((sum, val) => sum + val, 0);
    });

    // Calculate total points spent
    const totalPoints = treePoints.reduce((a, b) => a + b, 0);

    // Calculate required level
    // const requiredLevel = totalPoints === 0 ? "-" : 9 + totalPoints;

    let requiredLevel;
    if (version.startsWith("4.")) {
        // Mapping: number of points spent -> minimum level
        const pointsToLevelMap = [
            10, // 1st point
            11, // 2nd
            13, // 3rd
            15, // 4th
            17, // 5th
            19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 82, 83, 84, 85 // remaining points
        ];

        if (totalPoints === 0) {
            requiredLevel = "-";
        } else {
            // Cap totalPoints to avoid going out of bounds
            const index = Math.min(totalPoints - 1, pointsToLevelMap.length - 1);
            requiredLevel = pointsToLevelMap[index];
        }
    } else {
        // Old logic for other expansions
        requiredLevel = totalPoints === 0 ? "-" : 9 + totalPoints;
    }

    // Calculate points left
    const pointsLeft = currentState.pointsTotal - totalPoints;

    // Class icon URL
    const classIconUrl = `https://wow.zamimg.com/images/wow/icons/large/classicon_${classKey}.jpg`;
    const classColor = classColors[classKey] || "#FFF";

    // Build info box
    const headerHTML = `
                <div class="w-full py-4 px-6 rounded-md bg-gray-800 text-gray-100 shadow flex flex-col md:flex-row justify-between items-center gap-4 border border-gray-700">
                    <div class="flex items-center gap-3">
                        <img src="${classIconUrl}" alt="${classData.name
        }" class="w-8 h-8 rounded border border-gray-500" />
                        <span class="text-lg font-semibold">
                        <span style="color: ${classColor}">${classData.name
        }:</span>
                        ${treePoints
            .map(
                (points, index) => `
                            <span class="${points === 0 ? "text-gray-400" : "text-white"
                    }">${points}</span>
                            ${index < treePoints.length - 1
                        ? '<span class="text-gray-500"> / </span>'
                        : ""
                    }
                        `
            )
            .join("")}
                        </span>
                    </div>
                    <div class="flex gap-4 text-sm">
                        <div>
                            <span class="text-gray-400 font-semibold">Required level:</span>
                            <span class="font-semibold">${requiredLevel}</span>
                        </div>
                        <div>
                            <span class="text-gray-400 font-semibold">Points left:</span>
                            <span class="font-semibold">${pointsLeft}</span>
                        </div>
                    </div>
                </div>
    `;

    talentTrees.innerHTML = headerHTML;

    const container = document.createElement("div");
    container.className = "flex flex-wrap md:flex-row md:items-start gap-6 justify-center mt-4";

    trees.forEach((treeName) => {
        const talents = getTalents(version, classKey, treeName);
        // Determine expansion-specific grid size
        let numRows = 7;
        if (version.startsWith("2.") || version.endsWith("e")) {
            numRows = 9; // TBC
        } else if (version.startsWith("3.")) {
            numRows = 11; // WotLK
        }

        const grid = Array.from({ length: numRows }, () => Array(4).fill(null));

        // Organize talents into grid
        talents.forEach((talent) => {
            grid[talent.row][talent.col] = talent;
        });

        const treeWrapper = document.createElement("div");
        treeWrapper.className = "flex flex-col items-center";

        const treeEl = document.createElement("div");
        treeEl.className =
            "bg-gray-900 h-full p-4 pt-4 pb-1 rounded-lg w-full sm:w-[300px] md:w-[340px] shadow-lg border border-gray-700 flex flex-col items-center";
        treeEl.setAttribute("data-tree-container", treeName);

        // === CHANGE: Lock / gray out non-chosen trees in Cataclysm ===
        let isLocked = false;
        if (version.startsWith("4.") && chosenSpec && treeName !== chosenSpec) {
            const pointsInChosen = treePoints[trees.indexOf(chosenSpec)]; // points spent in chosen tree
            if (pointsInChosen < 31 || requiredLevel < 69) {
                isLocked = true;
                treeEl.classList.add("opacity-40", "pointer-events-none"); // gray out + block clicks
            }
        }
        // === END CHANGE ===

        // Add background image
        const bgImage = backgroundImages?.[classKey]?.[treeName];
        if (bgImage) {
            treeEl.style.backgroundImage = `url(${bgImage})`;
            treeEl.style.backgroundSize = "cover";
            treeEl.style.backgroundPosition = "center";
            treeEl.style.backgroundBlendMode = "overlay";
            treeEl.style.backgroundColor = "rgba(0,0,0,0.35)";
        }

        const pointsInTree = treePoints[trees.indexOf(treeName)];

        const resetTextColor = pointsInTree === 0 ? "text-gray-400" : "text-white";
        const resetBorderColor = "border-2 border-gray-700";

        // Add icon + tree name inside each tree box
        treeEl.innerHTML = `
        <div class="flex items-center justify-between mb-3 px-2 py-1 rounded bg-gray-800 border border-gray-700 w-full">
                <div class="flex items-center gap-2">
                    <img src="https://wow.zamimg.com/images/wow/icons/large/${getTreeIcon(
            classKey,
            treeName,
            version
        )}.jpg"
                        alt="${treeName}" class="w-6 h-6" />
                    <span class="${pointsInTree === 0 ? "text-gray-400" : "text-white"
            } font-medium text-base">${treeName}</span>
                </div>
                <div class="text-base font-semibold ${pointsInTree === 0 ? "text-gray-400" : "text-white"
            }">
                    <span>${pointsInTree}</span>
                    <span> / </span>
                    <span>${currentState.pointsTotal}</span>
                </div>
        </div>
        `;

        // ======= NEW: Wrap the grid in a fixed width div to keep cell spacing tight =======
        const gridWrapper = document.createElement("div");
        gridWrapper.className = "w-[235px] flex flex-col justify-center flex-grow";

        // Render each row (7, 9 or 11 rows depending on expansion)
        grid.forEach((row) => {
            const rowEl = document.createElement("div");
            rowEl.className = "flex justify-center gap-4 mb-4";

            // Render each column (4 cols)
            row.forEach((talent) => {
                const cell = document.createElement("div");
                if (talent && talent.id) {
                    cell.className = "w-12 h-12 flex items-center justify-center rounded border border-gray-700";
                } else {
                    cell.className = "w-12 h-12 flex items-center justify-center rounded"; // no border for empty cells
                }

                if (talent) {
                    const points =
                        currentState.talents?.[classKey]?.[treeName]?.[talent.id] || 0;
                    const unlocked = canLearnTalent(talent, classKey, treeName);
                    const isMaxed = points >= talent.ranks;
                    const tooltipText = getTalentTooltip(
                        talent,
                        points,
                        classKey,
                        treeName,
                        true
                    );

                    let borderClass = "";
                    let rankTextColor = "";

                    const totalPointsSpent = Object.values(currentState.talents[classKey])
                        .flatMap(tree => Object.values(tree))
                        .reduce((sum, val) => sum + val, 0);

                    const maxPointsReached = totalPointsSpent >= currentState.pointsTotal;

                    const reachedMax = unlocked && maxPointsReached && points === 0;

                    if (reachedMax) {
                        borderClass = "border-gray-600 grayscale-[100%] brightness-[100%]";
                        rankTextColor = "text-gray-400";
                    } else if ((!unlocked && !isMaxed)) {
                        borderClass = "border-gray-600 grayscale-[100%] brightness-[100%]";
                        rankTextColor = "text-gray-400";
                    } else if (!isMaxed) {
                        borderClass = "border-green-500 cursor-pointer";
                        rankTextColor = "text-green-400";
                    } else {
                        borderClass = "border-yellow-500 cursor-pointer";
                        rankTextColor = "text-yellow-300";
                    }

                    const showRank = points > 0 || !maxPointsReached;

                    const rankHTML = showRank
                        ? `<div class="absolute bottom-0 right-0 bg-black/70 ${rankTextColor} text-[10px] px-1 rounded border border-black leading-none">
                        ${points}/${talent.ranks}
                        </div>`
                        : "";

                    cell.innerHTML = `
                    <div 
                        class="relative group w-full h-full"
                        data-tree="${treeName}" data-id="${talent.id}"
                    >
                        <div class="talent-icon w-full h-full border rounded ${borderClass} hover:brightness-110"
                                data-tree="${treeName}" data-id="${talent.id}">
                            <img
                                src="${iconOverrideById[talent.id] ||
                            `https://wow.zamimg.com/images/wow/icons/large/${talent.icon}.jpg`
                            }"
                                class="w-full h-full rounded"
                                alt="${talent.name}"
                            />
                            ${rankHTML}
                        </div>

                        <!-- Tooltip -->
                        <div class="hidden group-hover:block absolute right-0 top-0 translate-x-full -translate-y-full z-50
                                    p-2 bg-black border border-gray-600 rounded w-80 text-sm shadow-lg pointer-events-none">
                            ${tooltipText}
                        </div>
                    </div>
                    `;
                }

                rowEl.appendChild(cell);
            });
            // ======= Append each row to the grid wrapper (fixed width container) =======
            gridWrapper.appendChild(rowEl);
        });

        // ======= Append the fixed width grid wrapper to the wider treeEl container =======
        treeEl.appendChild(gridWrapper);

        // Add the treeEl to the wrapper
        treeWrapper.appendChild(treeEl);

        // Create the reset button
        const resetBtn = document.createElement("button");
        resetBtn.className = `
        reset-tree-btn mt-2 w-[310px] bg-gray-900 hover:bg-gray-600 
        ${resetTextColor} ${resetBorderColor}
        text-sm px-3 py-1 rounded flex items-center justify-center gap-2
    `.trim();
        resetBtn.dataset.tree = treeName;
        resetBtn.innerHTML = `
        <i class="fas fa-times text-red-500"></i>
        <span class="font-semibold">Reset</span>
    `;

        // Append the button under the tree box
        treeWrapper.appendChild(resetBtn);

        container.appendChild(treeWrapper);
    });

    talentTrees.appendChild(container);

    // === NEW: render timeline outside talent-wrapper ===
    // Get the top-level timeline wrapper
    if (timelineWrapper) {
        timelineWrapper.innerHTML = ""; // clear any previous timeline
        renderLevelTimeline(timelineWrapper); // render timeline inside top-level wrapper
    }
    // ==================================================

    // Add click handlers
    document.querySelectorAll(".talent-icon").forEach((icon) => {
        icon.addEventListener("click", handleTalentClick);
        icon.addEventListener("contextmenu", handleTalentRightClick);
    });

    // Add per-tree reset handlers
    document.querySelectorAll(".reset-tree-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const treeName = e.currentTarget.dataset.tree;
            resetTree(treeName);
        });
    });

    /*
    trees.forEach(treeName => {
        renderDependencyArrows(treeName, currentState.class, currentState.version);
    });
    */

    // Ensure the layout is painted before rendering arrows

    requestAnimationFrame(() => {
        trees.forEach(treeName => {
            renderDependencyArrows(treeName, currentState.class, currentState.version);
        });
    });

    // === Auto-redraw arrows when the window resizes ===
    let resizeActive = false;

    window.addEventListener("resize", () => {
    if (!resizeActive) {
        resizeActive = true;

        // Continuously re-render until resizing stops
        const loop = () => {
        trees.forEach(treeName => {
            renderDependencyArrows(treeName, currentState.class, currentState.version);
        });

        if (resizeActive) requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }

    // Stop after user finishes resizing
    clearTimeout(window._resizeStopTimeout);
    window._resizeStopTimeout = setTimeout(() => {
        resizeActive = false;
    }, 150);
    });

}

function resetTree(treeName) {
    const classKey = currentState.class;

    if (!classKey || !treeName) return;

    const expansion = getExpansionFromPatch(currentState.version);

    // Check if we're in Cataclysm and resetting the chosen spec tree
    if (expansion === "cataclysm" && treeName === chosenSpec) {
        // Reset all trees instead of just this one
        resetTalents();
        return; // Already handled everything
    }

    // Remove all talents in this tree
    currentState.talents[classKey][treeName] = {};

    // Remove talentOrder entries related to this tree
    currentState.talentOrder = currentState.talentOrder.filter(
        (entry) => entry.tree !== treeName
    );

    // Recalculate total points spent
    const trees = talentTreeData[currentState.version].classes[classKey].trees;
    currentState.pointsSpent = trees.reduce((total, tree) => {
        const treePoints = Object.values(currentState.talents[classKey][tree] || {}).reduce((sum, val) => sum + val, 0);
        return total + treePoints;
    }, 0);

    recalculateTalentOrder();

    updatePointsDisplay();
    renderTalentTrees();
    updateURLHash();
}

function getClassIndex(classKey) {
    const classOrder = [
        "druid",
        "hunter",
        "mage",
        "paladin",
        "priest",
        "rogue",
        "shaman",
        "warlock",
        "warrior",
        "deathknight"
    ];
    return classOrder.indexOf(classKey) + 1;
}

function getTreeIcon(classKey, tree, version) {

    let icon = defaultIcons[classKey]?.[tree]?.icon;

    if (version.startsWith("4.")) {
        // if override exists, replace base
        const override = cataOverrides[classKey]?.[tree]?.icon;
        if (override) icon = override;
    }

    return icon || "inv_misc_questionmark"; // fallback icon
}

function renderDependencyArrows(treeName, classKey, version) {
    const container = document.querySelector(`[data-tree-container="${treeName}"]`);
    if (!container) return;

    // Ensure the container is relatively positioned
    container.style.position = "relative";

    container.querySelectorAll(".arrow").forEach(el => el.remove());

    const talents = getTalents(version, classKey, treeName);

    for (const talent of talents) {
        if (!talent.requiresTalents) continue;

        const requiredId = talent.requiresTalents;
        const requiredTalent = getTalentById(classKey, treeName, requiredId);
        if (!requiredTalent) continue;

        const fromEl = container.querySelector(`[data-id="${requiredId}"]`);
        const toEl = container.querySelector(`[data-id="${talent.id}"]`);
        if (!fromEl || !toEl) continue;

        // Use offsetLeft/Top for container-relative positioning
        const fromCenter = {
            x: fromEl.offsetLeft + fromEl.offsetWidth / 2,
            y: fromEl.offsetTop + fromEl.offsetHeight / 2
        };
        const toCenter = {
            x: toEl.offsetLeft + toEl.offsetWidth / 2,
            y: toEl.offsetTop + toEl.offsetHeight / 2
        };

        const dx = toCenter.x - fromCenter.x;
        const dy = toCenter.y - fromCenter.y;

        let direction = "";
        if (dx === 0 && dy > 0) direction = "down";
        else if (dy === 0 && dx < 0) direction = "left";
        else if (dy === 0 && dx > 0) direction = "right";
        else if (dy > 0 && dx > 0) direction = "down-right";
        else if (dy > 0 && dx < 0) direction = "down-left";
        else continue; // unsupported

        const arrow = document.createElement("div");
        arrow.classList.add("arrow", `arrow-${direction}`);

        const isUnlocked = (currentState.talents[classKey]?.[treeName]?.[requiredId] || 0) >= (requiredTalent.ranks || 1);
        arrow.classList.add(isUnlocked ? "unlocked" : "locked");

        // Position and size the arrow
        if (direction === "down") {
            arrow.style.position = "absolute";
            arrow.style.left = `${fromCenter.x - 4}px`;
            arrow.style.top = `${fromEl.offsetTop + fromEl.offsetHeight}px`;
            arrow.style.width = "7px";
            arrow.style.height = `${toEl.offsetTop - (fromEl.offsetTop + fromEl.offsetHeight)}px`;
        } else if (direction === "left") {
            arrow.style.position = "absolute";
            arrow.style.top = `${fromCenter.y - 4}px`;
            arrow.style.left = `${toEl.offsetLeft + toEl.offsetWidth}px`;
            arrow.style.height = "7px";
            arrow.style.width = `${fromEl.offsetLeft - (toEl.offsetLeft + toEl.offsetWidth)}px`;
        } else if (direction === "right") {
            arrow.style.position = "absolute";
            arrow.style.top = `${fromCenter.y - 4}px`;
            arrow.style.left = `${fromEl.offsetLeft + fromEl.offsetWidth}px`;
            arrow.style.height = "7px";
            arrow.style.width = `${toEl.offsetLeft - (fromEl.offsetLeft + fromEl.offsetWidth)}px`;
        } else if (direction === "down-right" || direction === "down-left") {
            const horizontal = document.createElement("div");
            const vertical = document.createElement("div");
            const isUnlocked = (currentState.talents[classKey]?.[treeName]?.[requiredId] || 0) >= (requiredTalent.ranks || 1);
            horizontal.classList.add("arrow", direction === "down-right" ? "arrow-right" : "arrow-left", isUnlocked ? "unlocked" : "locked");
            vertical.classList.add("arrow", "arrow-down", isUnlocked ? "unlocked" : "locked");


            const horizontalWidth = Math.abs(toCenter.x - fromCenter.x);
            const verticalHeight = Math.abs(toCenter.y - fromCenter.y);

            // Horizontal segment
            horizontal.style.position = "absolute";
            horizontal.style.top = `${fromCenter.y - 10 / 2}px`;
            horizontal.style.height = "7px";
            if (direction === "down-right") {
                horizontal.style.left = `${fromEl.offsetLeft + fromEl.offsetWidth}px`;
                horizontal.style.width = `${toCenter.x - (fromEl.offsetLeft + fromEl.offsetWidth) - 2}px`;
            } else {
                horizontal.style.left = `${toCenter.x + 2}px`;
                horizontal.style.width = `${fromEl.offsetLeft - toCenter.x - 2}px`;
            }

            // Vertical segment
            vertical.style.position = "absolute";
            vertical.style.left = `${toCenter.x - 10 / 2}px`;
            vertical.style.top = `${fromCenter.y - 10 / 2}px`;
            vertical.style.width = "7px";
            vertical.style.height = `${toEl.offsetTop - fromCenter.y + 5}px`;

            container.appendChild(horizontal);
            container.appendChild(vertical);
        }

        container.appendChild(arrow);
    }
}

function createArrowHead(color, direction) {
    const arrowHead = document.createElement("div");
    arrowHead.style.position = "absolute";
    arrowHead.style.width = "0";
    arrowHead.style.height = "0";

    // Use CSS borders to create triangles pointing the right way
    switch (direction) {
        case "down":
            arrowHead.style.borderLeft = "6px solid transparent";
            arrowHead.style.borderRight = "6px solid transparent";
            arrowHead.style.borderTop = `8px solid ${color}`;
            break;
        case "left":
            arrowHead.style.borderTop = "6px solid transparent";
            arrowHead.style.borderBottom = "6px solid transparent";
            arrowHead.style.borderRight = `8px solid ${color}`;
            break;
        case "right":
            arrowHead.style.borderTop = "6px solid transparent";
            arrowHead.style.borderBottom = "6px solid transparent";
            arrowHead.style.borderLeft = `8px solid ${color}`;
            break;
        default:
            // No arrowhead for compound arrows here; handle separately
            break;
    }

    return arrowHead;
}

function getTotalPointsInTree(classKey, treeName) {
    const treeTalents = currentState.talents[classKey]?.[treeName] || {};
    return Object.values(treeTalents).reduce((sum, val) => sum + val, 0);
}

function getTalentById(classKey, treeName, id) {
    const talents = getTalents(currentState.version, classKey, treeName);
    return talents.find((t) => t.id === id);
}

function updatePointsDisplay() {
    pointsSpentEl.textContent = currentState.pointsSpent;
    pointsTotalEl.textContent = currentState.pointsTotal;
    const percent = (currentState.pointsSpent / currentState.pointsTotal) * 100;
    pointsBar.style.width = `${percent}%`;

    if (currentState.pointsSpent >= currentState.pointsTotal) {
        pointsBar.classList.add("bg-red-500");
        pointsBar.classList.remove("bg-yellow-500");
    } else {
        pointsBar.classList.remove("bg-red-500");
        pointsBar.classList.add("bg-yellow-500");
    }
}

function resetTalents() {
    if (!currentState.class) return;

    const trees =
        talentTreeData[currentState.version].classes[currentState.class].trees;
    trees.forEach((tree) => {
        currentState.talents[currentState.class][tree] = {};
    });

    currentState.pointsSpent = 0;

    // Clear level timeline
    currentState.talentOrder = [];

    updatePointsDisplay();
    renderTalentTrees();
    updateURLHash();
}

function saveBuild() {
    if (!currentState.class) {
        alert("Please select a class first");
        return;
    }

    const buildName = buildNameInput.value.trim();
    if (!buildName) {
        alert("Please enter a build name");
        return;
    }

    // Compress the current build into a single string
    /*
    const compressed = compressBuild({
        version: currentState.version,
        class: currentState.class,
        talents: {
        [currentState.class]: currentState.talents[currentState.class]
        }
    });
    */

    /*
    const buildData = {
        name: buildName,
        compressed
    };
    */

    const buildData = {
        name: buildName,
        version: currentState.version,
        class: currentState.class,
        talents: JSON.parse(JSON.stringify(currentState.talents)),
        pointsSpent: currentState.pointsSpent,
        talentOrder: JSON.parse(JSON.stringify(currentState.talentOrder)),
        glyphs: JSON.parse(JSON.stringify(currentState.glyphs))
    };

    // Check if build with this name already exists
    const existingIndex = currentState.builds.findIndex(
        (b) => b.name === buildName
    );
    if (existingIndex !== -1) {
        if (!confirm("A build with this name already exists. Overwrite it?")) {
            return;
        }
        currentState.builds[existingIndex] = buildData;
    } else {
        currentState.builds.push(buildData);
    }

    saveBuildsToStorage();
    renderBuildsList();
    buildNameInput.value = "";
}

function importBuild() {
    const importData = prompt("Paste your build data here:");
    if (!importData) return;

    try {
        const raw = JSON.parse(importData);
        const buildData = {
            ...decompressBuild(raw.compressed),
            name: raw.name || "Imported Build"
        };

        // Validate
        if (!buildData.version || !buildData.class || !buildData.talents) {
            throw new Error("Invalid build data");
        }

        // Set version and trigger logic
        versionSelect.value = buildData.version;
        handleVersionChange(true);

        // Delay to ensure talentTreeData is updated before rendering
        setTimeout(() => {
            const classKey = buildData.class;

            // Set class and talent data
            currentState.class = classKey;
            currentState.talents = JSON.parse(JSON.stringify(buildData.talents));
            currentState.pointsTotal = buildData.pointsTotal || 51;

            currentState.glyphs = JSON.parse(JSON.stringify(buildData.glyphs || {}));

            // Update class button styles
            classButtons.forEach((btn) => {
                const btnClass = btn.dataset.class;
                if (!btnClass) return;

                const isSelected = btnClass === classKey;
                btn.classList.toggle("bg-yellow-600", isSelected);
                btn.classList.toggle("text-white", isSelected);
                btn.classList.toggle("bg-gray-700", !isSelected);
                btn.classList.toggle("hover:bg-gray-600", !isSelected);
            });

            // Recalculate total points spent
            currentState.pointsSpent = 0;
            const trees =
                talentTreeData[currentState.version]?.classes?.[classKey]?.trees || [];

            trees.forEach((tree) => {
                const treeTalents = currentState.talents[classKey][tree];
                if (treeTalents) {
                    currentState.pointsSpent += Object.values(treeTalents).reduce(
                        (sum, p) => sum + p,
                        0
                    );
                }
            });

            updatePointsDisplay();
            renderTalentTrees();
            renderGlyphsContainer();

            alert(`✅ Successfully imported build: ${buildData.name}`);
        }, 20); // Slight delay to wait for version setup
    } catch (e) {
        alert("❌ Error importing build: " + e.message);
        console.error(e);
    }
}

function loadBuilds() {
    const savedBuilds = localStorage.getItem("wowTalentBuilds");
    if (savedBuilds) {
        currentState.builds = JSON.parse(savedBuilds);
        renderBuildsList();
    }
}

function saveBuildsToStorage() {
    localStorage.setItem("wowTalentBuilds", JSON.stringify(currentState.builds));
}

function handleTalentClick(e) {
    const icon = e.currentTarget;
    const tree = icon.dataset.tree;
    const id = icon.dataset.id;
    const classKey = currentState.class;
    const version = currentState.version;

    const talents = getTalents(version, classKey, tree);
    const talent = talents.find((t) => t.id === id);
    const currentPoints = currentState.talents[classKey]?.[tree]?.[id] || 0;

    // if (icon.classList.contains("disabled")) return;

    // Can we learn it?
    if (!canLearnTalent(talent, classKey, tree)) return;

    // Already maxed out globally?
    if (currentState.pointsSpent >= currentState.pointsTotal) return;

    // Already maxed out?
    if (currentPoints >= talent.ranks) return;

    // Add a point
    currentState.talents[classKey][tree][id] = currentPoints + 1;
    currentState.pointsSpent += 1;

    currentState.talentOrder.push({
        id: talent.id,
        tree,
        classKey,
        icon: talent.icon,
        level: getNextTalentLevel()
    });

    recalculateTalentOrder();

    // Update bar and count
    updatePointsDisplay();

    // Re-render
    renderTalentTrees();

    // Update URL
    updateURLHash();
}

function getNextTalentLevel() {
    const expansion = getExpansionFromPatch(currentState.version);
    const order = currentState.talentOrder;

    if (expansion === "cataclysm") {
        // Precomputed Cataclysm talent levels
        const cataLevels = [
            10, 11, 13, 15, 17, 19, 21, 23, 25, 27,
            29, 31, 33, 35, 37, 39, 41, 43, 45, 47,
            49, 51, 53, 55, 57, 59, 61, 63, 65, 67,
            69, 71, 73, 75, 77, 79, 81, 82, 83, 84, 85
        ];
        const index = order.length; // 0-based
        return cataLevels[index] || 85; // fallback to 85 if overflow
    } else {
        // Classic/TBC/WotLK logic: 1 point per level starting at 10
        return order.length > 0
            ? order[order.length - 1].level + 1
            : 10;
    }
}

function handleTalentRightClick(e) {
    e.preventDefault(); // Prevent default right-click menu

    const icon = e.currentTarget;
    const tree = icon.dataset.tree;
    const id = icon.dataset.id;
    const classKey = currentState.class;

    const currentPoints = currentState.talents?.[classKey]?.[tree]?.[id] || 0;

    // Nothing to remove
    if (currentPoints <= 0) return;

    // Clone current talent state in this tree to simulate removal
    const simulated = structuredClone(currentState.talents[classKey][tree]);
    simulated[id] = currentPoints - 1;
    if (simulated[id] === 0) delete simulated[id];

    // Build simulated points per tier
    const tierCounts = Array(11).fill(0); // Supports up to 11 tiers (WotLK)
    const allTalents = getTalents(currentState.version, classKey, tree);

    for (const t of allTalents) {
        const points = simulated[t.id] || 0;
        if (points > 0) {
            tierCounts[t.row] += points;
        }
    }

    // Compute cumulative lower-tier sums for fast checking
    const tierSums = tierCounts.map((_, i) =>
        tierCounts.slice(0, i).reduce((sum, val) => sum + val, 0)
    );

    // Now validate: every active talent must still have required lower-tier points
    for (const t of allTalents) {
        const points = simulated[t.id] || 0;
        if (points > 0) {
            const required = t.row * 5;
            if (tierSums[t.row] < required) {
                return; // Not enough points in lower tiers to support this talent
            }
        }
    }

    // Prevent removal if this talent is a prerequisite for another active talent
    const isRequired = allTalents.some(t => {
        return t.requiresTalents === id && (simulated[t.id] || 0) > 0;
    });

    if (isRequired) return; // Can't remove prerequisite

    // Decrement talent
    currentState.talents[classKey][tree][id] = currentPoints - 1;
    currentState.pointsSpent = Math.max(0, currentState.pointsSpent - 1);

    // Remove the most recent matching entry from talentOrder
    for (let i = currentState.talentOrder.length - 1; i >= 0; i--) {
        const entry = currentState.talentOrder[i];
        if (entry.id === id && entry.tree === tree && entry.classKey === classKey) {
            currentState.talentOrder.splice(i, 1);
            break;
        }
    }

    // Clean up if zero
    if (currentState.talents[classKey][tree][id] === 0) {
        delete currentState.talents[classKey][tree][id];
    }

    recalculateTalentOrder();

    // Update bar and count
    updatePointsDisplay();

    // Re-render
    renderTalentTrees();

    // Update URL
    updateURLHash();
}

function renderBuildsList() {
    buildsList.innerHTML = "";

    if (currentState.builds.length === 0) {
        buildsList.innerHTML =
            '<p class="text-gray-400 text-center py-4">No saved builds yet</p>';
        return;
    }

    currentState.builds.forEach((build, index) => {
        const buildCard = document.createElement("div");
        buildCard.className =
            "build-card bg-gray-700 rounded-md p-3 cursor-pointer hover:bg-gray-600";
        buildCard.innerHTML = `
                            <div class="flex justify-between items-center">
                                <div>
                                    <h3 class="font-semibold">${build.name}</h3>
                                    <p class="text-sm text-gray-400">${getBuildClassAndVersionLabel(
            build
        )}</p>
                                </div>
                                <div class="flex gap-2">
                                    <button title="Load Build" class="load-build-btn px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs" data-index="${index}">
                                        <i class="fas fa-play"></i>
                                    </button>
                                    <button title="Export Build" class="export-build-btn px-2 py-1 bg-green-600 hover:bg-green-700 rounded text-xs" data-index="${index}">
                                        <i class="fas fa-share"></i>
                                    </button>
                                    <button  title="Delete Build" class="delete-build-btn px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-xs" data-index="${index}">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        `;

        buildsList.appendChild(buildCard);
    });

    // Add event listeners to the new buttons
    document.querySelectorAll(".load-build-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            loadBuild(parseInt(btn.dataset.index));
        });
    });

    document.querySelectorAll(".export-build-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            exportBuild(parseInt(btn.dataset.index));
        });
    });

    document.querySelectorAll(".delete-build-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteBuild(parseInt(btn.dataset.index));
        });
    });

    // Clicking anywhere on the card loads the build
    document.querySelectorAll(".build-card").forEach((card) => {
        card.addEventListener("click", () => {
            const index = parseInt(
                card.querySelector(".load-build-btn").dataset.index
            );
            loadBuild(index);
        });
    });
}

function renderLevelTimeline(container) {
    const { class: classKey, talentOrder } = currentState;
    if (!classKey || talentOrder.length === 0) return;

    const orderBox = document.createElement("div");
    orderBox.className =
        "w-full p-3 rounded-lg bg-gray-800 shadow-lg";
    // "w-full mt-6 p-3 rounded bg-gray-800 border border-gray-700 shadow-lg";

    // Add header
    const header = document.createElement("div");
    header.className = "flex justify-between items-center mb-2";

    const title = document.createElement("div");
    title.className = "text-yellow-400 text-base font-semibold";
    title.textContent = "Talent Order";

    const toggleBtn = document.createElement("button");
    toggleBtn.className =
        "text-white p-0.5 rounded transition-colors";
    toggleBtn.title = "Hide Talent Order";
    // toggleBtn.title = "Keep this open to include its data in the link URL.";
    toggleBtn.innerHTML = `<i class="fa fa-angle-down text-base"></i>`;

    header.append(title, toggleBtn);
    orderBox.appendChild(header);

    // Container for the timeline entries
    const itemsContainer = document.createElement("div");
    itemsContainer.className = "flex flex-wrap gap-2 justify-start";
    orderBox.appendChild(itemsContainer);

    // Toggle logic
    toggleBtn.addEventListener("click", () => {
        // Save scroll position before changing layout
        const scrollY = window.scrollY;
        
        const hidden = itemsContainer.classList.toggle("hidden");
        toggleBtn.innerHTML = `<i class="fa fa-angle-${hidden ? "up" : "down"} text-base"></i>`;
        toggleBtn.title = hidden ? "Show Talent Order" : "Hide Talent Order";

        // Restore scroll position after DOM reflow
        requestAnimationFrame(() => window.scrollTo(0, scrollY));
    });

    // Get current expansion
    const expansion = getExpansionFromPatch(currentState.version);

    // Precomputed Cataclysm levels
    const cataLevels = [
        10, 11, 13, 15, 17, 19, 21, 23, 25, 27,
        29, 31, 33, 35, 37, 39, 41, 43, 45, 47,
        49, 51, 53, 55, 57, 59, 61, 63, 65, 67,
        69, 71, 73, 75, 77, 79, 81, 82, 83, 84, 85
    ];

    // Helper: get icon URL
    const getIconUrl = (talent) =>
        iconOverrideById[talent.id] ||
        `https://wow.zamimg.com/images/wow/icons/large/${talent.icon}.jpg`;

    if (expansion === "cataclysm") {
        talentOrder.forEach((entry, index) => {
            const talent = getTalentById(entry.classKey, entry.tree, entry.id);
            if (!talent) return;

            // --- compute rank at this purchase: count occurrences of the same talent up to this index ---
            const occurrenceCount = talentOrder
                .slice(0, index + 1)
                .filter(e =>
                    e.id === entry.id &&
                    e.tree === entry.tree &&
                    e.classKey === entry.classKey
                ).length;

            const level = cataLevels[index] || 85;
            const iconUrl = getIconUrl(talent);

            const tooltipText = getTalentTooltip(
                talent,
                occurrenceCount,
                entry.classKey,
                entry.tree,
                false
            );

            const item = document.createElement("div");
            item.className =
                "relative flex items-center text-sm text-white gap-2 bg-gray-900 px-2 py-1 rounded border border-gray-600";

            // Level
            const levelEl = Object.assign(document.createElement("span"), {
                className: "text-gray-400",
                textContent: level
            });

            // Container for icon + name (tooltip triggers only here)
            const hoverContainer = document.createElement("div");
            hoverContainer.className = "relative group flex items-center gap-1 cursor-pointer";

            // Icon
            const iconEl = Object.assign(document.createElement("img"), {
                src: iconUrl,
                alt: talent.name,
                className: "w-4 h-4 rounded border border-gray-600"
            });

            // Talent name
            const nameEl = Object.assign(document.createElement("span"), {
                className: "text-yellow-400",
                textContent: talent.name
            });

            // Tooltip wrapper
            const tooltipEl = document.createElement("div");
            tooltipEl.className = `
                hidden group-hover:block absolute right-0 top-0 translate-x-full -translate-y-full z-50
                p-2 bg-black border border-gray-600 rounded w-80 text-sm shadow-lg pointer-events-none
            `;
            tooltipEl.innerHTML = tooltipText;

            hoverContainer.append(iconEl, nameEl, tooltipEl);

            // Rank
            const rankEl = Object.assign(document.createElement("span"), {
                className: "text-gray-400 text-xs ml-1",
                textContent: `Rank ${occurrenceCount}`
            });

            item.append(levelEl, hoverContainer, rankEl);
            itemsContainer.appendChild(item);
        });

    } else {

        // ---------- Non-Cataclysm: keep previous grouping logic ----------
        const timeline = [];
        talentOrder.forEach((entry) => {
            const displayLevel = entry.level;
            const last = timeline[timeline.length - 1];
            if (
                last &&
                last.id === entry.id &&
                last.tree === entry.tree &&
                last.classKey === entry.classKey &&
                last.endLevel === displayLevel - 1
            ) {
                last.endLevel = displayLevel;
            } else {
                timeline.push({ ...entry, startLevel: displayLevel, endLevel: displayLevel });
            }
        });

        timeline.forEach((entry) => {
            const talent = getTalentById(entry.classKey, entry.tree, entry.id);
            if (!talent) return;
            const iconUrl = getIconUrl(talent);
            const levelText =
                entry.startLevel === entry.endLevel
                    ? `${entry.startLevel}`
                    : `${entry.startLevel} - ${entry.endLevel}`;

            const item = document.createElement("div");
            item.className =
                "flex items-center text-xs text-white gap-1 bg-gray-900 px-2 py-1 rounded border border-gray-600";

            const iconEl = Object.assign(document.createElement("img"), {
                src: iconUrl,
                alt: talent.name,
                className: "w-4 h-4 rounded"
            });

            const levelEl = Object.assign(document.createElement("span"), {
                textContent: `${levelText}`,
            });

            item.append(iconEl, levelEl);
            itemsContainer.appendChild(item);
        });
    }

    container.appendChild(orderBox);
}

/*
function renderTalentOrderTimeline() {
    const { class: classKey, talentOrder } = currentState;
    if (!classKey || talentOrder.length === 0) return;

    // Container inside talent container
    const talentContainer = document.getElementById("talent-trees");
    if (!talentContainer) return;

    // Look for existing timeline container or create it
    let container = document.getElementById("talent-order-timeline");
    if (!container) {
        container = document.createElement("div");
        container.id = "talent-order-timeline";
        // Insert timeline after talent trees
        talentContainer.parentNode.insertBefore(container, talentContainer.nextSibling);
    }

    // Clear previous timeline
    container.innerHTML = "";

    const orderBox = document.createElement("div");
    orderBox.className =
        "mt-6 p-3 rounded bg-gray-800 border border-gray-700 flex flex-wrap gap-2 justify-start";

    const timeline = [];

    // Group sequential levels for the same talent
    for (const entry of talentOrder) {
        const last = timeline[timeline.length - 1];
        if (
            last &&
            last.id === entry.id &&
            last.tree === entry.tree &&
            last.classKey === entry.classKey &&
            last.endLevel === entry.level - 1
        ) {
            last.endLevel = entry.level;
        } else {
            timeline.push({
                ...entry,
                startLevel: entry.level,
                endLevel: entry.level
            });
        }
    }

    // Render grouped entries
    timeline.forEach((entry) => {
        const talent = getTalentById(entry.classKey, entry.tree, entry.id);
        const iconUrl =
            iconOverrideById[talent.id] ||
            `https://wow.zamimg.com/images/wow/icons/large/${talent.icon}.jpg`;
        const levelText =
            entry.startLevel === entry.endLevel
                ? `${entry.startLevel}`
                : `${entry.startLevel} - ${entry.endLevel}`;

        const item = document.createElement("div");
        item.className =
            "flex items-center text-xs text-white gap-1 bg-gray-900 px-2 py-1 rounded border border-gray-600";
        item.innerHTML = `
            <img src="${iconUrl}" alt="${talent.name}" class="w-4 h-4 rounded" />
            <span>${levelText}</span>
        `;
        orderBox.appendChild(item);
    });

    container.appendChild(orderBox);
}
*/

function recalculateTalentOrder() {
    // Assign levels based on order in talentOrder
    currentState.talentOrder.forEach((entry, index) => {
        entry.level = 10 + index;
    });
}

function initCurrentGlyphs() {
    // currentState.glyphs = {};

    const currentExpansion = getCurrentExpansion(); // "wotlk" or "cataclysm"
    // const classKey = currentState.class;
    const types = [];

    if (currentExpansion === "cataclysm") {
        types.push("prime", "major", "minor");
    } else if (currentExpansion === "wotlk") {
        types.push("major", "minor");
    }

    types.forEach(type => {
        if (!currentState.glyphs[type]) {
            currentState.glyphs[type] = [null, null, null]; // 3 slots
        }
    });
}

function renderGlyphsContainer() {

    const currentExpansion = getCurrentExpansion();
    const playerClass = currentState.class;

    if (!glyphsWrapper || !currentExpansion || !playerClass) return;

    initCurrentGlyphs();

    // Always clear previous content
    glyphsWrapper.innerHTML = "";

    let glyphTypes = [];

    if (currentExpansion === "cataclysm") {
        glyphTypes = ["Prime Glyphs", "Major Glyphs", "Minor Glyphs"];
    } else if (currentExpansion === "wotlk") {
        glyphTypes = ["Major Glyphs", "Minor Glyphs"];
    } else {
        glyphsWrapper.style.display = "none";
        // For any other expansion, don't render glyphs
        return;
    }

    // Show wrapper since glyphs exist for this expansion
    glyphsWrapper.style.display = "block";

    glyphTypes.forEach(type => {
        const section = document.createElement("div");
        section.classList.add("glyph-type-section");

        const header = document.createElement("h3");
        header.textContent = type;
        section.appendChild(header);

        const slots = document.createElement("div");
        slots.classList.add("glyph-slots");

        for (let i = 0; i < 3; i++) {
            const slot = document.createElement("div");
            slot.classList.add("glyph-slot");
            slot.dataset.type = type.toLowerCase().replace(" glyphs", "");
            slot.dataset.index = i;

            // Placeholder content
            const placeholderImg = document.createElement("img");
            placeholderImg.src = "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_empty.jpg";
            placeholderImg.alt = "Empty Slot";

            const placeholderText = document.createElement("span");
            placeholderText.classList.add("glyph-slot-name");
            placeholderText.textContent = "Empty";

            slot.appendChild(placeholderImg);
            slot.appendChild(placeholderText);

            // Event to open glyph selection
            slot.addEventListener("click", () => {
                openGlyphSelection(type, playerClass, i);
            });

            slots.appendChild(slot);
        }

        section.appendChild(slots);
        glyphsWrapper.appendChild(section);
    });
}

function openGlyphSelection(glyphType, playerClass, slotIndex) {

    const allGlyphs = [];

    const typeKey = getGlyphTypeKey(glyphType);

    // Add base glyphs first (if exist)
    if (glyphs.base[playerClass] && glyphs.base[playerClass][typeKey]) {
        allGlyphs.push(...glyphs.base[playerClass][typeKey]);
    }

    // Then expansion-specific glyphs
    const currentExpansion = getCurrentExpansion(); // e.g., "wotlk" or "cataclysm"
    if (glyphs[currentExpansion] && glyphs[currentExpansion][playerClass] && glyphs[currentExpansion][playerClass][typeKey]) {
        allGlyphs.push(...glyphs[currentExpansion][playerClass][typeKey]);
    }

    renderGlyphSelectionList(allGlyphs, glyphType, playerClass, slotIndex);
}

function getGlyphTypeKey(typeString) {
    return typeString.toLowerCase().replace(" glyphs", "");
}

function renderGlyphSelectionList(glyphList, glyphType, playerClass, slotIndex) {
    // Remove existing list and overlay if open
    const existingList = document.getElementById("glyph-selection-popup");
    const existingOverlay = document.getElementById("glyph-overlay");
    if (existingList) existingList.remove();
    if (existingOverlay) existingOverlay.remove();

    // Disable body scroll
    document.body.classList.add("body-no-scroll");

    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "glyph-overlay";
    overlay.classList.add("glyph-overlay");
    document.body.appendChild(overlay);

    // Filter out glyphs that are already selected in other slots of the same type
    const typeKey = getGlyphTypeKey(glyphType);
    const selectedGlyphs = currentState.glyphs[typeKey]
        .filter((g, idx) => g && idx !== slotIndex)
        .map(g => g.name); // store names of already selected glyphs

    const availableGlyphs = glyphList.filter(g => !selectedGlyphs.includes(g.name));

    // Create popup
    const popup = document.createElement("div");
    popup.id = "glyph-selection-popup";
    popup.classList.add("glyph-selection-popup");

    const currentClass = baseTreeData.classes[playerClass]
        ? baseTreeData.classes[playerClass].name
        : playerClass;

    const header = document.createElement("div");
    header.classList.add("glyph-selection-header");
    header.textContent = `Select ${glyphType.replace("Glyphs", "Glyph")} for ${currentClass}`;
    popup.appendChild(header);

    // Create the table container
    const table = document.createElement("div");
    table.classList.add("glyph-selection-table");

    // Table header row
    const headerRow = document.createElement("div");
    headerRow.classList.add("glyph-table-row", "glyph-table-header");

    ["Name", "Description", "Level"].forEach((label, colIndex) => {
        const cell = document.createElement("div");
        cell.classList.add("glyph-table-cell");
        cell.textContent = label;

        let ascending = true;
        const arrow = document.createElement("span");
        arrow.classList.add("glyph-sort-arrow");
        arrow.textContent = "";
        cell.appendChild(arrow);

        cell.style.cursor = "pointer";
        cell.addEventListener("click", () => {
            // sort glyphs
            sortGlyphRows(table, colIndex, ascending);

            // update arrow
            arrow.textContent = ascending ? "▴" : "▾";

            // reset other arrows
            table.querySelectorAll(".glyph-sort-arrow").forEach(a => {
                if (a !== arrow) a.textContent = "";
            });

            ascending = !ascending; // toggle direction
        });

        headerRow.appendChild(cell);
    });

    table.appendChild(headerRow);

    // "None" option row
    const noneRow = document.createElement("div");
    noneRow.classList.add("glyph-table-row", "glyph-list-item", "none-row");
    noneRow.style.cursor = "pointer";

    const noneNameCell = document.createElement("div");
    noneNameCell.classList.add("glyph-table-cell", "glyph-name-cell");

    const noneIcon = document.createElement("img");
    noneIcon.src = "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_empty.jpg";
    noneIcon.alt = "None";
    noneIcon.classList.add("glyph-icon");

    const noneName = document.createElement("div");
    noneName.classList.add("glyph-name");
    noneName.textContent = "None";

    noneNameCell.append(noneIcon, noneName);

    const noneDesc = document.createElement("div");
    noneDesc.classList.add("glyph-table-cell", "glyph-desc");
    noneDesc.textContent = "Remove the glyph from this slot.";

    const noneLevel = document.createElement("div");
    noneLevel.classList.add("glyph-table-cell", "glyph-level");
    noneLevel.textContent = "-";

    noneRow.append(noneNameCell, noneDesc, noneLevel);

    // Click to clear glyph
    noneRow.addEventListener("click", (e) => {
        e.stopPropagation();
        removeGlyph(glyphType, slotIndex);
        if (popup) popup.remove();
        if (overlay) overlay.remove();
        document.body.classList.remove("body-no-scroll");
    });

    table.appendChild(noneRow);

    availableGlyphs.forEach(g => {
        const row = document.createElement("div");
        row.classList.add("glyph-table-row", "glyph-list-item");
        row.style.cursor = "pointer";

        const nameCell = document.createElement("div");
        nameCell.classList.add("glyph-table-cell", "glyph-name-cell");

        const icon = document.createElement("img");
        icon.src = `https://wow.zamimg.com/images/wow/icons/large/${g.icon}.jpg`;
        icon.alt = g.name;
        icon.classList.add("glyph-icon");

        const nameText = document.createElement("span");
        nameText.classList.add("glyph-name");
        nameText.textContent = `Glyph of ${g.name}`;
        nameCell.append(icon, nameText);

        const descCell = document.createElement("div");
        descCell.classList.add("glyph-table-cell", "glyph-desc");
        descCell.textContent = g.description.join(" ");

        const levelCell = document.createElement("div");
        levelCell.classList.add("glyph-table-cell", "glyph-level");
        levelCell.textContent = g.level || "-";

        row.append(nameCell, descCell, levelCell);

        // Click to select glyph
        row.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent closing the popup immediately
            selectGlyph(glyphType, slotIndex, g);
            if (popup) popup.remove();
            if (overlay) overlay.remove();
            document.body.classList.remove("body-no-scroll"); // restore scrolling
        });

        table.appendChild(row);
    });

    popup.appendChild(table);
    document.body.appendChild(popup);

    // Close popup when clicking outside
    setTimeout(() => {
        const outsideClickHandler = (e) => {
            if (!popup.contains(e.target) && !e.target.closest(".glyph-slot")) {
                popup.remove();
                overlay.remove();
                document.body.classList.remove("body-no-scroll"); // restore scrolling
                document.removeEventListener("click", outsideClickHandler);
            }
        };
        document.addEventListener("click", outsideClickHandler);
    }, 0);
}

function sortGlyphRows(table, columnIndex, ascending = true) {
    // Get all glyph rows except the "None" row
    const rows = Array.from(table.querySelectorAll('.glyph-table-row.glyph-list-item'))
        .filter(row => !row.classList.contains('none-row'));

    rows.sort((a, b) => {
        const aText = a.children[columnIndex].textContent.trim();
        const bText = b.children[columnIndex].textContent.trim();

        if (!isNaN(aText) && !isNaN(bText)) {
            return ascending ? aText - bText : bText - aText;
        }
        return ascending
            ? aText.localeCompare(bText)
            : bText.localeCompare(aText);
    });

    // Append in new order, after the header and "None" row
    const headerRow = table.querySelector('.glyph-table-header');
    const noneRow = table.querySelector('.none-row');

    rows.forEach(row => table.appendChild(row));
    if (noneRow) table.insertBefore(noneRow, rows[0]); // keep "None" row on top
}

function selectGlyph(glyphType, slotIndex, glyphData) {
    const typeKey = getGlyphTypeKey(glyphType);

    // Safely overwrite slot in currentState.glyphs
    if (!currentState.glyphs[typeKey]) currentState.glyphs[typeKey] = [null, null, null];
    currentState.glyphs[typeKey][slotIndex] = glyphData;

    const slot = glyphsWrapper.querySelector(`.glyph-slot[data-type="${typeKey}"][data-index="${slotIndex}"]`);
    if (!slot) return;

    slot.innerHTML = ""; // clear placeholder

    const img = document.createElement("img");
    img.src = `https://wow.zamimg.com/images/wow/icons/large/${glyphData.icon}.jpg`;
    img.alt = glyphData.name;

    const name = document.createElement("span");
    name.classList.add("glyph-slot-name");
    name.textContent = `Glyph of ${glyphData.name}`;

    slot.appendChild(img);
    slot.appendChild(name);

    updateURLHash();
}

function removeGlyph(glyphType, slotIndex) {
    const typeKey = getGlyphTypeKey(glyphType);

    if (!currentState.glyphs[typeKey]) return;

    currentState.glyphs[typeKey][slotIndex] = null;

    const slot = glyphsWrapper.querySelector(`.glyph-slot[data-type="${typeKey}"][data-index="${slotIndex}"]`);
    if (!slot) return;

    slot.innerHTML = "";

    const placeholderImg = document.createElement("img");
    placeholderImg.src = "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_empty.jpg";
    placeholderImg.alt = "Empty Slot";

    const placeholderText = document.createElement("span");
    placeholderText.classList.add("glyph-slot-name");
    placeholderText.textContent = "Empty";

    slot.appendChild(placeholderImg);
    slot.appendChild(placeholderText);

    updateURLHash();
}

function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getBuildClassAndVersionLabel(build) {
    if (build.compressed) {
        const [meta] = build.compressed.split(":");
        const [version, classKey] = meta.split("/");
        return `${classKey} - ${version}`;
    }
    return `${build.class || "Unknown"} - ${build.version || "Unknown"}`;
}

function loadBuild(index) {
    const build = currentState.builds[index];
    if (!build || !build.version || !build.class || !build.talents) {
        alert("❌ Invalid build data");
        return;
    }

    // Determine the expansion the build belongs to
    const targetExpansion = getExpansionFromPatch(build.version);

    // Set the expansion first if needed
    if (expansionSelect.value !== targetExpansion) {
        expansionSelect.value = targetExpansion;
        // Trigger change to load the patch/version options
        const event = new Event("change");
        expansionSelect.dispatchEvent(event);
    }

    // Set the version and trigger talent data load
    versionSelect.value = build.version;
    handleVersionChange(true);

    const classKey = build.class;
    currentState.version = build.version;
    currentState.class = classKey;
    currentState.talents = JSON.parse(JSON.stringify(build.talents));

    // Use the maxPoints for the current version
    const versionData = talentTreeData[currentState.version];
    currentState.pointsTotal = versionData ? versionData.maxPoints : 51;
    currentState.pointsSpent = build.pointsSpent || 0;

    // restore talentOrder directly instead of rebuilding
    currentState.talentOrder = build.talentOrder
        ? JSON.parse(JSON.stringify(build.talentOrder))
        : [];

    currentState.glyphs = build.glyphs
        ? JSON.parse(JSON.stringify(build.glyphs))
        : {};

    // Ensure talentOrder keeps original level progression
    if (currentState.talentOrder.length > 0) {
        // If levels already exist, keep them.
        // If missing (old saves), recalc fallback levels.
        const hasLevels = currentState.talentOrder.some(entry => entry.level !== undefined);
        if (!hasLevels) {
            recalculateTalentOrder();
        }
    }

    // Handle custom version display
    if (currentState.version === "custom") {
        customPoints.value = currentState.pointsTotal;
        customVersionOptions.classList.remove("hidden");
    } else {
        customVersionOptions.classList.add("hidden");
    }

    // Style class buttons
    classButtons.forEach((btn) => {
        const isSelected = btn.dataset.class === classKey;
        // btn.classList.toggle("bg-yellow-600", isSelected);
        // btn.classList.toggle("text-white", isSelected);
        // btn.classList.toggle("bg-gray-700", !isSelected);
        // btn.classList.toggle("hover:bg-gray-600", !isSelected);
    });

    // Calculate points spent
    // currentState.pointsSpent = 0;

    const trees = talentTreeData[currentState.version]?.classes?.[classKey]?.trees || [];
    let dominantTree = null;
    let mostPoints = 0;

    trees.forEach((tree) => {
        const treeTalents = currentState.talents[classKey][tree];
        if (treeTalents) {
            const treePoints = Object.values(treeTalents).reduce(
                (sum, pts) => sum + pts,
                0
            );
            // currentState.pointsSpent += treePoints;

            if (treePoints > mostPoints) {
                mostPoints = treePoints;
                dominantTree = tree;
            }
        }
    });

    // Auto-select chosenSpec in Cataclysm
    const expansion = getExpansionFromPatch(build.version);
    if (expansion === "cataclysm" && dominantTree) {
        chosenSpec = dominantTree;
    }

    // Assign levels to talentOrder
    // recalculateTalentOrder();

    updatePointsDisplay();
    renderTalentTrees();
    renderGlyphsContainer();
    loadSavedGlyphs();
    updateURLHash();

    // Set build name in input field
    buildNameInput.value = build.name;

    alert(`✅ Loaded build: ${build.name}`);
}

function loadSavedGlyphs() {
    const glyphs = currentState.glyphs || {};
    for (const typeKey in glyphs) {
        glyphs[typeKey].forEach((glyphData, index) => {
            if (glyphData) {
                selectGlyph(typeKey, index, glyphData);
            }
        });
    }
}

function exportBuild(index) {
    try {
        const build = currentState.builds[index];
        if (!build || !build.version || !build.class) {
            throw new Error("Cannot export: invalid build data.");
        }

        const buildString = generateBuildStringFromBuild(build);

        if (!buildString.replace(/-/g, "")) {
            throw new Error("Cannot export: no talents selected.");
        }

        // Construct full URL
        const baseUrl = window.location.origin + window.location.pathname;
        const fullUrl = `${baseUrl}#${build.version}/${build.class}/${buildString}`;

        navigator.clipboard.writeText(fullUrl);
        showMessage(`Build "${build.name}" copied to clipboard!`);
    } catch (err) {
        showMessage(err.message, true);
    }
}

function showMessage(message, isError = false) {
    const msgBox = document.createElement("div");
    msgBox.className = `fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg text-white z-50 ${isError ? "bg-red-600" : "bg-green-600"
        }`;
    msgBox.innerText = message;

    document.body.appendChild(msgBox);

    setTimeout(() => {
        msgBox.remove();
    }, 3000); // auto-hide after 3 seconds
}

function generateBuildStringFromBuild(build) {
    const { version, class: classKey, talents, glyphs } = build;
    const trees = talentTreeData[version]?.classes?.[classKey]?.trees || [];

    // Get actual talent definitions (with row/col info)
    const classTalents = talentsAttributedByVersion[version]?.[classKey] || {};

    const treeStrings = trees.map((tree) => {
        const treeTalents = classTalents[tree] || [];
        const invested = talents[classKey]?.[tree] || {};

        // Sort by row first, then col
        const sorted = [...treeTalents].sort((a, b) => {
            if (a.row !== b.row) return a.row - b.row;
            return a.col - b.col;
        });

        let s = "";
        let lastNonZero = -1;

        sorted.forEach((talent, idx) => {
            const val = invested[talent.id] || 0;
            s += val;
            if (val > 0) lastNonZero = idx;
        });

        // Trim trailing zeros
        return lastNonZero >= 0 ? s.substring(0, lastNonZero + 1) : "";
    });

    const talentString = treeStrings.join("-");

    // === Glyph String ===
    const expansion = getExpansionFromPatch(version);
    let glyphString = "";

    if (expansion === "wotlk" || expansion === "cataclysm") {
        glyphString = generateGlyphString(glyphs);
    }

    return `${talentString}/${glyphString}`;
}

function decompressBuild(str) {
    const [meta, talentStr] = str.split(":");
    const [version, classKey] = meta.split("/");

    const trees = talentStr.split(";");
    const talents = {
        [classKey]: {}
    };

    trees.forEach((treeBlock) => {
        const [treeName, talentsList] = treeBlock.split("=");
        talents[classKey][treeName] = {};

        if (talentsList) {
            talentsList.split(",").forEach((entry) => {
                const [id, points] = entry.split(".");
                talents[classKey][treeName][id] = parseInt(points, 10);
            });
        }
    });

    // Infer max talent points from the version, fallback to 51 if unknown
    const pointsTotal = talentTreeData[version]?.maxPoints || 51;

    return {
        name: "Imported Build",
        version,
        class: classKey,
        pointsTotal, // You can infer from version if needed
        talents,
        glyphs
    };
}

function deleteBuild(index) {
    if (confirm("Are you sure you want to delete this build?")) {
        currentState.builds.splice(index, 1);
        saveBuildsToStorage();
        renderBuildsList();
    }
}

// ----------------------------
// ERROR HANDLING
// ----------------------------
function showError(message) {
    const errorBox = document.getElementById("build-error-box");
    if (errorBox) {
        errorBox.textContent = message;
        errorBox.classList.remove("hidden");
    } else {
        alert(message); // fallback
    }
}

function clearError() {
    const errorBox = document.getElementById("build-error-box");
    if (errorBox) {
        errorBox.textContent = "";
        errorBox.classList.add("hidden");
    }
}

function generateBuildString() {
    if (!currentState.version || !currentState.class) return "";

    const classKey = currentState.class;
    const version = currentState.version;
    const expansion = getCurrentExpansion();
    const trees = talentTreeData[version]?.classes?.[classKey]?.trees || [];

    // Get actual talent definitions (with row/col info)
    const classTalents = talentsAttributedByVersion[version]?.[classKey] || {};

    const treeStrings = trees.map((tree) => {
        const treeTalents = classTalents[tree] || [];
        const invested = currentState.talents[classKey]?.[tree] || {};

        // Sort talents by row first, then col
        const sorted = [...treeTalents].sort((a, b) => {
            if (a.row !== b.row) return a.row - b.row;
            return a.col - b.col;
        });

        let s = "";
        let lastNonZero = -1;

        sorted.forEach((talent, idx) => {
            const val = invested[talent.id] || 0;
            s += val;
            if (val > 0) lastNonZero = idx;
        });

        // Trim trailing zeros
        return lastNonZero >= 0 ? s.substring(0, lastNonZero + 1) : "";
    });

    const talentString = treeStrings.join("-");

    // === Generate glyph string only for WotLK and Cataclysm ===
    let glyphString = "";

    if (expansion === "wotlk" || expansion === "cataclysm") {
        glyphString = generateGlyphString(currentState.glyphs);
    }

    // === Build final formatted string ===
    return `${talentString}/${glyphString}`;
}

function generateGlyphString(glyphs) {
    const expansion = getCurrentExpansion();
    let types = [];

    if (expansion === "cataclysm") {
        types = ["prime", "major", "minor"];
    } else if (expansion === "wotlk") {
        types = ["major", "minor"];
    } else {
        return "";
    }

    // let hasAnyGlyph = false;

    const segments = types.map(type => {
        const arr = glyphs[type] || [];

        // Always 3 slots
        const ids = [
            arr[0] ? arr[0].id.toString() : "",
            arr[1] ? arr[1].id.toString() : "",
            arr[2] ? arr[2].id.toString() : "",
        ];
        // if (ids.length > 0) hasAnyGlyph = true;

        return ids.join("-"); // join with "-" between slots
    });
    // if (!hasAnyGlyph) return "";

    return segments.join(":");
}

// ----------------------------
// IMPORT BUILD
// Accepts a string like "2.4/paladin/5-503-5500535100233105031051"
// ----------------------------
function importBuildString(hash) {
    clearError();

    if (!hash) {
        showError("Invalid build string: no talents selected.");
        return;
    }

    const parts = hash.split("/");
    if (parts.length < 3) {
        showError("Invalid build string format.");
        return;
    }

    const [version, classKey, treesPart] = parts;
    if (!version || !classKey || !treesPart) {
        showError("Invalid build string format.");
        return;
    }

    const treeStrings = treesPart.split("-");
    if (treeStrings.every(str => str === "")) {
        showError("Invalid build string: no talents selected.");
        return;
    }

    const classData = talentTreeData[version]?.classes[classKey];
    if (!classData) {
        showError("Invalid version or class.");
        return;
    }

    currentState.version = version;
    currentState.class = classKey;
    currentState.talents = { [classKey]: {} };

    classData.trees.forEach((treeName, i) => {
        const str = treeStrings[i] || "";
        currentState.talents[classKey][treeName] = {};
        [...str].forEach((char, j) => {
            const val = parseInt(char, 10);
            if (!isNaN(val) && val > 0) {
                currentState.talents[classKey][treeName][j] = val;
            }
        });
    });

    renderTalentTrees();
    renderGlyphsContainer();
}

// ----------------------------
// UPDATE URL HASH
// ----------------------------
function updateURLHash() {
    if (!currentState.version /* || !currentState.class */) return;

    const version = currentState.version;
    const classKey = currentState.class;
    const buildString = generateBuildString();

    // Only update if there is a valid build string
    if (buildString) {
        location.hash = `${version}/${classKey}/${buildString}`;
    } else if (classKey) {
        location.hash = `${version}/${classKey}`;
    } else if (version) {
        location.hash = `${version}`;
    }
}

// ----------------------------
// HANDLE TALENT PICK / CHANGE
// Call updateURLHash whenever a talent is picked
// ----------------------------
function handleTalentChange() {
    updatePointsDisplay();
    renderTalentTrees();
    updateURLHash();
}