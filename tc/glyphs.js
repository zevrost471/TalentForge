// glyphs.js
//
// WotLK / Cataclysm glyph selection UI and persistence. Extracted from
// talent-calculator.js, mirroring runes.js: shared state/data/helpers come from
// the sibling modules, and the post-change URL refresh comes from url-sync.js (a
// leaf module), so this module never imports the calculator back.

import { currentState, talentTreeData } from './state.js';
import { glyphs } from '../db/glyphs.js';
import { getCurrentExpansion } from './version-util.js';
import { getDomElements } from './dom-elements.js';
import { updateURLHash } from './url-sync.js';

const { glyphsWrapper } = getDomElements();

// Resolve a glyph object from its id when decoding a build string. Searches the
// class's base glyphs and the expansion-specific glyphs for the given type.
export function findGlyphByIdForBuild(id, expansion, classKey, type) {
    const candidates = [
        ...(glyphs.base?.[classKey]?.[type] || []),
        ...(glyphs[expansion]?.[classKey]?.[type] || [])
    ];

    return candidates.find(g => Number(g.id) === Number(id)) || null;
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

function positionGlyphTooltip(tooltip, cursorX, cursorY) {
    const offset = 14;
    const margin = 8;
    const preferredWidth = 288;

    const left = cursorX + offset;
    const maxWidth = Math.max(120, Math.min(preferredWidth, window.innerWidth - left - margin));
    tooltip.style.left = left + "px";
    tooltip.style.maxWidth = maxWidth + "px";

    const tooltipHeight = tooltip.offsetHeight || 120;
    const top = (cursorY + offset + tooltipHeight <= window.innerHeight - margin)
        ? cursorY + offset
        : Math.max(margin, cursorY - offset - tooltipHeight);
    tooltip.style.top = top + "px";
}

function getGlyphTooltip(glyph, typeKey, classKey) {
    const lines = [];

    const fullName = glyph.name.startsWith("Glyph of") ? glyph.name : `Glyph of ${glyph.name}`;
    lines.push(`<div class="text-[15px] text-white">${fullName}</div>`);

    const typeLabel = typeKey.charAt(0).toUpperCase() + typeKey.slice(1) + " Glyph";
    lines.push(`<div class="text-sm text-gray-400">${typeLabel}</div>`);

    const classDisplayName =
        talentTreeData[currentState.version]?.classes?.[classKey]?.name ||
        (classKey.charAt(0).toUpperCase() + classKey.slice(1));
    lines.push(`<div class="text-sm text-white">Requires ${classDisplayName}</div>`);

    const level = glyph.level ?? glyph.requiresLevel;
    if (level) {
        lines.push(`<div class="text-sm text-white">Requires Level ${level}</div>`);
    }

    const desc = glyph.description;
    if (Array.isArray(desc) && desc.length > 0) {
        lines.push(`<div class="mt-1 text-sm text-yellow-300">${desc.join(" ")}</div>`);
    } else if (typeof desc === "string" && desc) {
        lines.push(`<div class="mt-1 text-sm text-yellow-300">${desc}</div>`);
    }

    return lines.join("\n");
}

export function renderGlyphsContainer() {

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
            slot.style.position = "relative"; // needed for absolute tooltip positioning

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

            // Tooltip hover — listeners wired once here; selectGlyph injects [data-glyph-tooltip]
            slot.addEventListener("mouseenter", (e) => {
                const tooltip = slot.querySelector("[data-glyph-tooltip]");
                if (!tooltip) return;
                tooltip.classList.remove("hidden");
                positionGlyphTooltip(tooltip, e.clientX, e.clientY);
            });
            slot.addEventListener("mousemove", (e) => {
                const tooltip = slot.querySelector("[data-glyph-tooltip]");
                if (tooltip && !tooltip.classList.contains("hidden")) {
                    positionGlyphTooltip(tooltip, e.clientX, e.clientY);
                }
            });
            slot.addEventListener("mouseleave", () => {
                const tooltip = slot.querySelector("[data-glyph-tooltip]");
                if (tooltip) tooltip.classList.add("hidden");
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

    const currentClass =
        talentTreeData[currentState.version]?.classes?.[playerClass]?.name || playerClass;

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

    const tooltipDiv = document.createElement("div");
    tooltipDiv.setAttribute("data-glyph-tooltip", "");
    tooltipDiv.className = "hidden fixed z-50 p-2 bg-black border border-gray-600 rounded text-sm shadow-lg pointer-events-none";
    tooltipDiv.innerHTML = getGlyphTooltip(glyphData, typeKey, currentState.class);

    slot.appendChild(img);
    slot.appendChild(name);
    slot.appendChild(tooltipDiv);

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

export function loadSavedGlyphs() {
    const glyphs = currentState.glyphs || {};
    for (const typeKey in glyphs) {
        glyphs[typeKey].forEach((glyphData, index) => {
            if (glyphData) {
                selectGlyph(typeKey, index, glyphData);
            }
        });
    }
}
