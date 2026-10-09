// WC3-style image-based faction headers.
// Assets downloaded from classic.battle.net/war3/ live in assets/icons/ui/war3/{race}/.
// Not currently used by peoples.js — preserved here for potential future use.
// To re-enable: import { WC3_FACTION_STYLES, renderHeaderWC3 } from './wc3-headers.js'
// and call renderHeaderWC3(WC3_FACTION_STYLES[faction]) inside renderFaction().

export const WC3_BASE = '../assets/icons/ui/war3';

export const WC3_FACTION_STYLES = {
    ALLIANCE: {
        headerType: 'simple',
        wc3Race: 'human',
        bg: 'header-back.gif',
        left: 'header-left.gif',
        title: 'headers/humans.gif',
        right: 'header-right.gif',
    },
    HORDE: {
        headerType: 'split',
        wc3Race: 'orc',
        bg: 'header-bg.gif',
        leftOuter: 'header-left.gif',
        leftInner: 'header-mid-left.gif',
        title: 'headers/orcs.gif',
        rightInner: 'header-mid-right.gif',
        rightOuter: 'header-right.gif',
    },
    FORSAKEN: {
        headerType: 'split',
        wc3Race: 'undead',
        bg: 'header-bg-left.gif',
        leftOuter: 'header-left.gif',
        leftInner: 'header-left-left.gif',
        title: 'headers/undead.gif',
        rightInner: 'header-right-right.gif',
        rightOuter: 'header-right.gif',
    },
    NIGHT_ELVES: {
        headerType: 'simple',
        wc3Race: 'nightelf',
        bg: 'header-back.gif',
        left: 'header-left.gif',
        title: 'headers/nightelves.gif',
        right: 'header-right.gif',
    },
};

export function renderHeaderWC3(s) {
    const r = `${WC3_BASE}/${s.wc3Race}`;
    if (s.headerType === 'simple') {
        return `
            <div style="background:url('${r}/${s.bg}') repeat-x center;width:100%;display:flex;align-items:center;overflow:hidden;" class="mb-6">
                <img src="${r}/${s.left}" style="display:block;flex-shrink:0;">
                <div style="flex:1;text-align:center;">
                    <img src="${r}/${s.title}" style="display:block;margin:0 auto;">
                </div>
                <img src="${r}/${s.right}" style="display:block;flex-shrink:0;">
            </div>
        `;
    }
    return `
        <div style="display:flex;width:100%;align-items:stretch;overflow:hidden;" class="mb-6">
            <div style="flex:1;background:url('${r}/${s.bg}') repeat-x center;display:flex;align-items:center;overflow:hidden;">
                <img src="${r}/${s.leftOuter}" style="display:block;flex-shrink:0;">
                <div style="flex:1;"></div>
                <img src="${r}/${s.leftInner}" style="display:block;flex-shrink:0;">
            </div>
            <div style="flex-shrink:0;">
                <img src="${r}/${s.title}" style="display:block;">
            </div>
            <div style="flex:1;background:url('${r}/${s.bg}') repeat-x center;display:flex;align-items:center;overflow:hidden;">
                <img src="${r}/${s.rightInner}" style="display:block;flex-shrink:0;">
                <div style="flex:1;"></div>
                <img src="${r}/${s.rightOuter}" style="display:block;flex-shrink:0;">
            </div>
        </div>
    `;
}
