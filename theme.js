const THEME_STORAGE_KEY = "talentforgeTheme";

export function initThemeSelector() {
    const themeSelect = document.getElementById("theme-select");
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "original";

    applyTheme(savedTheme);

    if (themeSelect) {
        themeSelect.value = savedTheme;

        themeSelect.addEventListener("change", () => {
            applyTheme(themeSelect.value);
        });
    }
}

export function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
}