// class-screenshots.js
// Maps class name → expansion key → array of screenshot filenames.
// Files live in assets/db-screenshots/.

const CLASS_SCREENSHOTS = Object.freeze({
    Druid: {
        vanilla: ['912054-druid.jpg'],
    },
});

export function getClassScreenshots(className, expansion) {
    return CLASS_SCREENSHOTS[className]?.[expansion] ?? [];
}
