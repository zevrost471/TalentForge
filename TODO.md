## 📌 To-Do List
### 🔹 Tier 1: High Priority / Foundation Features

These should be done first because other features depend on them or they fix core issues.

1. Export/Share Links (Compress Build Data into URL)

    - Core to sharing builds.

    - Dependency: Required before Import Links (Task 2).

    - Add glyphs/runes to build data in build export feature

2. Import Links (Parse Shared Build URL)

    - Depends on Task 1.

3. Fix Responsive Layout Issue

    - Trees should never overflow their container at smaller screen widths.
    - Some class buttons are not fully visible at smaller screen widths. ✅
    - Glyph selection list is not fully visible at smaller screen widths.

4. Fix ```renderLevelTimeline``` not appearing when a build is loaded ✅

    - Important bug fix for consistency.

5. Code Optimization (Refactor, DRY, Modularize)

    - Will make future features easier to implement.

6. Fix issue concerning talents not displaying when patch 1.10 is selected ✅

7. Add top navigation bar that includes Overview, Talent Calculator and Database

    - A JS toggle so the active tab updates dynamically
    - A Database dropdown that appears on hover
        - Sub-tab "Character" inside "Database" for Classes, Races and Spells
        - Sub-tab "World" inside "Database" for Factions
    - A content switching loader so each tab switches the main UI
    - Integration with existing dynamic container elements
    - A URL hash (#overview) so tabs persist on page reload

8. Finish Cataclysm talent trees & glyphs ✅

9. Fix main panel not displaying when loading a build where glyphs are selected and talents are not selected (Cataclysm-only)

10. Fix glyph not displaying when it is selected before choosing spec (Cataclysm-only)

### 🔹 Tier 2: Medium Priority / Usability Enhancements

These improve the user experience significantly.

1. Multi-Build Tabs (View multiple builds in one session)

    - Useful for comparison.

    - Depends on stable save/load system.

2. Premade/Saved Builds Loader

    - Builds on Export/Import and Save/Load features.

3. Add Titles/Tooltips to Buttons (Save, Load, Export, etc.)

    - Improves clarity for first-time users.

4. Add Popup for Loading Builds

    - Should be implemented similar to export popup.

5. Keyboard Shortcuts

    - Quality of life feature for advanced users.

### 🔹 Tier 3: Extra UI & Customization Features

Nice-to-have, improves personalization but not critical.

1. Option to Set Favorite Versions (Quick Access)

    - Depends on version/expansion selection system.

2. Add Button to Print Build (Print-Friendly Trees + Summary)

3. Add Option to Change Color Theme of UI

    - Could include a Warcraft-style palette switcher.

4. Add Option to Change Layout of UI (Drag/Drop Boxes)

    - More complex, should wait until UI is stable.

5. Change Browser Tab Icon (Favicon) ✅

6. Change Font to Better Match Warcraft Theme

7. Add Cataclysm Spec Selection Panel & expansion-specific talent logic ✅

8. Improve ```renderLevelTimeline``` to reflect a more realistic leveling timeline

    - Define lowest level at which a talent can be lowered to
    - Define lowest level at which a talent from a secondary tree can be lowered to (Cataclysm-specific)

### 🔹 Tier 4: Content & Informational Features

1. Patch History View

    - Show changes in talents across versions.

2. Patch Notes Viewer

    - Separate UI panel that displays patch-specific notes.

    - Tracks all changes from one patch to another.

    - Includes notes for specific talent trees or individual talents and abilities.

    - Should allow filtering by class, tree, or patch version.

3. Class abilities interface (just like WoWHead)

    - Should only be visible once you choose a class

4. Tooltip Word Search

    - Search for keywords across all talents.

5. Leveling Planner

    - Plan talents per level (depends on timeline display).

6. Add vanilla patch for Season of Discovery and add rune system to it

### 🔹 Future Considerations

- Persistent State per Class

    - Keep builds when switching expansion/class.

### 🔹 Excluded (Won’t Do)

- ❌ Undo/Redo system.