// expansions.js
// Expansion metadata: colors and icon generator using the WoW logo mark.

export const EXPANSION_COLORS = Object.freeze({
    vanilla:   '#c0915f',
    tbc:       '#2da203',
    wotlk:     '#68b9cf',
    cataclysm: '#cc4a17',
    forever:   '#1c8bcb',
    peoples:   '#c9a634',
});

// Returns an inline SVG string of the WoW icon mark in the expansion's color.
// Pass colorOverride to use a different fill (e.g. 'var(--tf-bg)' for active state).
export function expansionIcon(key, size = 20, colorOverride = null) {
    const color = colorOverride ?? EXPANSION_COLORS[key] ?? '#aaaaaa';
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 20 20.005" aria-hidden="true">
        <g transform="translate(-46 -45.925)">
            <path d="M66,55.952a10.3,10.3,0,0,0-1.752-5.686V47.819a.143.143,0,0,0-.133-.133H61.667a9.953,9.953,0,0,0-11.3,0H47.919a.118.118,0,0,0-.133.133v2.414a10,10,0,0,0,0,11.4v2.414a.143.143,0,0,0,.133.133h2.448a10.061,10.061,0,0,0,11.371-.033h2.414a.153.153,0,0,0,.133-.167h0V61.571A9.913,9.913,0,0,0,66,55.952Zm-18.676,0a8.662,8.662,0,1,1,8.662,8.662h0A8.647,8.647,0,0,1,47.324,55.952Z" fill="${color}"/>
            <path d="M134.9,157.9h3.271a6.129,6.129,0,0,0-.1,1.124c.133,1.452,1.09,5.486,1.09,5.486l1.552-6.276,1.59,6.148s.957-5.424.957-5.786a1.014,1.014,0,0,0-.4-.7h3.471a3.57,3.57,0,0,0-.99,1.586c-.3,1.19-1.357,7.2-1.357,7.571a2.213,2.213,0,0,0,.4,1.09h-3.238a4.052,4.052,0,0,0,.1-.89c0-.562-.5-3.171-.5-3.171s-.662,2.71-.662,3.2a1.9,1.9,0,0,0,.2.857h-3.271s.629-.462.629-.89c-.067-1.224-1.786-7.6-1.919-8.1A2.071,2.071,0,0,0,134.9,157.9Z" transform="translate(-84.667 -106.643)" fill="${color}"/>
        </g>
    </svg>`;
}
