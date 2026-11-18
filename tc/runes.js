// runes.js
//
// Season of Discovery rune selection UI and persistence. Extracted from
// talent-calculator.js. Shared state/data/helpers come from the sibling modules,
// and the post-change URL refresh comes from url-sync.js (a leaf module), so this
// module never imports the calculator back.

import { currentState } from './state.js';
import { runes } from '../db/sod-runes.js';
import { SOD_PHASE_SLOTS, getSoDPhaseIndex, formatSlotName } from './sod-data.js';
import { capitalize } from './tooltip-format.js';
import { getDomElements } from './dom-elements.js';
import { updateURLHash } from './url-sync.js';

const { runesWrapper } = getDomElements();

function initCurrentRunes() {
    if (!currentState.runes) {
        currentState.runes = {};
    }

    if (currentState.version !== "1.15") return;

    const phase = currentState.phase || 1;
    const slots = SOD_PHASE_SLOTS[phase] || [];

    slots.forEach(slot => {
        if (!(slot in currentState.runes)) {
            currentState.runes[slot] = null;
        }
    });

    // Clean up removed slots when changing phase
    Object.keys(currentState.runes).forEach(slot => {
        if (!slots.includes(slot)) {
            delete currentState.runes[slot];
        }
    });
}

export function renderRunesContainer() {
    if (currentState.version !== "1.15") return;

    const playerClass = currentState.class;
    if (!playerClass) return;

    initCurrentRunes();
    runesWrapper.innerHTML = "";
    runesWrapper.style.display = "block";

    // === Main section ===
    const section = document.createElement("div");
    section.classList.add("glyph-type-section");

    const header = document.createElement("h3");
    header.textContent = "Runes";
    section.appendChild(header);

    const phase = currentState.phase || 1;
    const slotKeys = SOD_PHASE_SLOTS[phase].filter(slot => slot in currentState.runes);
    const rowSizes = computeRuneRows(slotKeys.length);

    let index = 0;

    rowSizes.forEach(rowSize => {

        // === Slots container ===
        const row = document.createElement("div");
        row.classList.add("glyph-slots");

        for (let i = 0; i < rowSize; i++) {
            const slotKey = slotKeys[index++];

            const slot = document.createElement("div");
            slot.classList.add("glyph-slot");
            slot.dataset.slot = slotKey;

            // Placeholder content
            const placeholderImg = document.createElement("img");
            placeholderImg.src = "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_empty.jpg";
            placeholderImg.alt = "Empty Slot";

            // Text wrapper
            const textWrapper = document.createElement("div");
            textWrapper.style.display = "flex";
            textWrapper.style.flexDirection = "column";

            // Slot name ("Legs", "Chest", "Hands", etc.)
            const slotName = document.createElement("span");
            slotName.classList.add("glyph-slot-type");
            slotName.textContent = formatSlotName(slotKey);

            const placeholderText = document.createElement("span");
            placeholderText.classList.add("glyph-slot-name");
            placeholderText.textContent = "Empty";

            textWrapper.appendChild(slotName);
            textWrapper.appendChild(placeholderText);

            slot.appendChild(placeholderImg); 
            slot.appendChild(textWrapper);

            slot.addEventListener("click", () => {
                openRuneSelection(slotKey, playerClass);
            });

            row.appendChild(slot);
        }

        section.appendChild(row);
    });

    runesWrapper.appendChild(section);
}

function openRuneSelection(slotKey, playerClass) {
    const runeList = getAvailableRunesForSlot(playerClass, slotKey);
    renderRuneSelectionList(runeList, slotKey);
}

function getAvailableRunesForSlot(playerClass, slotKey) {
    const phaseIndex = getSoDPhaseIndex();
    const classRunes = runes.base[playerClass] || [];

    return classRunes.filter(rune => {
        const slot = rune.gear_slot?.[phaseIndex];
        const desc = rune.description?.[phaseIndex];
        const icon = rune.icon?.[phaseIndex];

        // Must exist this phase
        if (!slot || !desc || !icon) return false; // also should require name to exist

        // Ring special case
        if (slotKey.startsWith("ring")) {
            return slot === "ring";
        }

        return slot === slotKey;
    }).map(rune => ({
        id: rune.id
    }));
}

function resolveRuneForPhase(runeId, phaseIndex, playerClass) {
    const classRunes = runes.base[playerClass] || [];

    return classRunes.find(r =>
        r.id === runeId &&
        r.gear_slot?.[phaseIndex] &&
        r.description?.[phaseIndex] &&
        r.icon?.[phaseIndex]
    );
}

function renderRuneSelectionList(runeList, slotKey) {
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

    // Filter out runes that are already selected in other slots of the same type
    let selectedRunes = [];

    if (slotKey.startsWith("ring")) {
        selectedRunes = Object.entries(currentState.runes)
            .filter(([key, rune]) =>
                key.startsWith("ring") &&
                key !== slotKey &&
                rune
            )
            .map(([key, rune]) => rune.id);
    }

    const availableRunes = runeList.filter(
        rune => !selectedRunes.includes(rune.id)
    );

    // Create popup
    const popup = document.createElement("div");
    popup.id = "glyph-selection-popup";
    popup.classList.add("glyph-selection-popup");

    const currentClass = currentState.class;

    const header = document.createElement("div");
    header.classList.add("glyph-selection-header");
    header.textContent = 
        `Select ${formatSlotName(slotKey)} Rune for ${capitalize(currentClass)}`;
    popup.appendChild(header);

    // Create the table container
    const table = document.createElement("div");
    table.classList.add("glyph-selection-table");

    // Table header row
    const headerRow = document.createElement("div");
    headerRow.classList.add("glyph-table-row", "glyph-table-header");

    ["Name", "Description"].forEach((label, colIndex) => {
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
            // sort runes
            sortRuneRows(table, colIndex, ascending);

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

    // None option
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
    noneDesc.textContent = "Remove the rune from this slot.";

    noneRow.append(noneNameCell, noneDesc);

    // Click to clear rune
    noneRow.addEventListener("click", (e) => {
        e.stopPropagation();
        removeRune(slotKey);
        if (popup) popup.remove();
        if (overlay) overlay.remove();
        document.body.classList.remove("body-no-scroll");
    });

    table.appendChild(noneRow);

    availableRunes.forEach(entry => {
        const phaseIndex = getSoDPhaseIndex();
        const rune = resolveRuneForPhase(entry.id, phaseIndex, currentState.class);
        if (!rune) return;

        const row = document.createElement("div");
        row.classList.add("glyph-table-row", "glyph-list-item");
        row.style.cursor = "pointer";

        const nameCell = document.createElement("div");
        nameCell.classList.add("glyph-table-cell", "glyph-name-cell");

        const icon = document.createElement("img");
        icon.src = `https://wow.zamimg.com/images/wow/icons/large/${rune.icon[phaseIndex]}.jpg`;
        icon.alt = rune.name;
        icon.classList.add("glyph-icon");

        const nameText = document.createElement("span");
        nameText.classList.add("glyph-name");
        nameText.textContent = `${rune.name}`;
        nameCell.append(icon, nameText);

        const descCell = document.createElement("div");
        descCell.classList.add("glyph-table-cell", "glyph-desc");
        descCell.innerHTML = rune.description[phaseIndex];

        row.append(nameCell, descCell);

        // Click to select rune
        row.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent closing the popup immediately
            selectRune(slotKey, entry.id);
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
            if (!popup.contains(e.target) && !e.target.closest(".rune-slot")) {
                popup.remove();
                overlay.remove();
                document.body.classList.remove("body-no-scroll"); // restore scrolling
                document.removeEventListener("click", outsideClickHandler);
            }
        };
        document.addEventListener("click", outsideClickHandler);
    }, 0);
}

function sortRuneRows(table, columnIndex, ascending = true) {
    // Get all rune rows except the "None" row
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

function selectRune(slotKey, runeId) {
    if (!runeId) return;

    // store minimal stable state
    currentState.runes[slotKey] = { id: runeId };

    const phaseIndex = getSoDPhaseIndex();
    const rune = resolveRuneForPhase(
        runeId,
        phaseIndex,
        currentState.class
    );
    if (!rune) return;

    // Find the slot element
    const slot = runesWrapper.querySelector(
        `.glyph-slot[data-slot="${slotKey}"]`
    );
    if (!slot) return;

    // Clear existing content
    slot.innerHTML = "";

    // icon
    const img = document.createElement("img");
    img.src = `https://wow.zamimg.com/images/wow/icons/large/${rune.icon[phaseIndex]}.jpg`;
    img.alt = rune.name;

    const textWrapper = document.createElement("div");
    textWrapper.style.display = "flex";
    textWrapper.style.flexDirection = "column";

    const slotName = document.createElement("span");
    slotName.classList.add("glyph-slot-type");
    slotName.textContent = formatSlotName(slotKey);

    const runeName = document.createElement("span");
    runeName.classList.add("glyph-slot-name");
    runeName.textContent = rune.name;

    textWrapper.appendChild(slotName);
    textWrapper.appendChild(runeName);

    slot.appendChild(img);
    slot.appendChild(textWrapper);

    updateURLHash();
}

function removeRune(slotKey) {
    // Clear rune from state
    currentState.runes[slotKey] = null;

    // Find the slot element
    const slot = runesWrapper.querySelector(
        `.glyph-slot[data-slot="${slotKey}"]`
    );
    if (!slot) return;

    // Clear slot UI
    slot.innerHTML = "";

    const placeholderImg = document.createElement("img");
    placeholderImg.src = "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_empty.jpg";
    placeholderImg.alt = "Empty Slot";

    // Text wrapper
    const textWrapper = document.createElement("div");
    textWrapper.style.display = "flex";
    textWrapper.style.flexDirection = "column";

    // Slot name ("Legs", "Chest", "Hands", etc.)
    const slotName = document.createElement("span");
    slotName.classList.add("glyph-slot-type");
    slotName.textContent = formatSlotName(slotKey);

    const placeholderText = document.createElement("span");
    placeholderText.classList.add("glyph-slot-name");
    placeholderText.textContent = "Empty";

    textWrapper.appendChild(slotName);
    textWrapper.appendChild(placeholderText);

    slot.appendChild(placeholderImg);
    slot.appendChild(textWrapper);

    updateURLHash();
}

function computeRuneRows(total) {
    const rows = [];
    let remaining = total;

    while (remaining > 0) {
        if (remaining === 1) {
            // Prevent orphan: take one from previous row
            rows[rows.length - 1]--;
            rows.push(2);
            break;
        }

        if (remaining <= 4) {
            rows.push(remaining);
            break;
        }

        rows.push(4);
        remaining -= 4;
    }

    return rows;
}

export function loadSavedRunes() {
    const selectedRunes = currentState.runes || {};
    for (const slotKey in selectedRunes) {
        const runeData = selectedRunes[slotKey];
        if (runeData && runeData.id) {
            selectRune(slotKey, runeData.id);
        }
    }
}
