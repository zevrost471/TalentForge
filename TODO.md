## 📌 To-Do List
### 🔹 Tier 1: High Priority / Foundation Features

These should be done first because other features depend on them or they fix core issues.

1. Export/Share Links (Compress Build Data into URL)

    - Core to sharing builds.

    - Dependency: Required before Import Links (Task 2).

2. Import Links (Parse Shared Build URL)

    - Depends on Task 1.

3. Fix Responsive Layout Issue

    - Trees should never overflow their container at smaller screen widths.

4. Fix ```renderLevelTimeline``` not appearing when a build is loaded

    - Important bug fix for consistency.

5. Code Optimization (Refactor, DRY, Modularize)

    - Will make future features easier to implement.

### 🔹 Tier 2: Medium Priority / Usability Enhancements

These improve the user experience significantly.

6. Multi-Build Tabs (View multiple builds in one session)

    - Useful for comparison.

    - Depends on stable save/load system.

7. Premade/Saved Builds Loader

    - Builds on Export/Import and Save/Load features.

8. Add Titles/Tooltips to Buttons (Save, Load, Export, etc.)

    - Improves clarity for first-time users.

9. Add Popup for Loading Builds

    - Should be implemented similar to export popup.

10. Keyboard Shortcuts

    - Quality of life feature for advanced users.

### 🔹 Tier 3: Extra UI & Customization Features

Nice-to-have, improves personalization but not critical.

11. Option to Set Favorite Versions (Quick Access)

    - Depends on version/expansion selection system.

12. Add Button to Print Build (Print-Friendly Trees + Summary)

13. Add Option to Change Color Theme of UI

    - Could include a Warcraft-style palette switcher.

14. Add Option to Change Layout of UI (Drag/Drop Boxes)

    - More complex, should wait until UI is stable.

15. Change Browser Tab Icon (Favicon) ✅

16. Change Font to Better Match Warcraft Theme

### 🔹 Tier 4: Content & Informational Features

17. Patch History View

    - Show changes in talents across versions.

18. Patch Notes Viewer

    - Separate UI panel that displays patch-specific notes.

    - Tracks all changes from one patch to another.

    - Includes notes for specific talent trees or individual talents and abilities.

    - Should allow filtering by class, tree, or patch version.

19. Tooltip Word Search

    - Search for keywords across all talents.

20. Leveling Planner

    - Plan talents per level (depends on timeline display).

### 🔹 Future Considerations

- Persistent State per Class

    - Keep builds when switching expansion/class.

### 🔹 Excluded (Won’t Do)

- ❌ Undo/Redo system.