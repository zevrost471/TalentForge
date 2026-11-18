// url-sync.js
//
// Reflects the current build in the URL hash. The build string itself is produced by
// build-codec.js; this module only reads the current version/class and writes
// location.hash, so feature modules can call updateURLHash without importing — or
// being imported by — the calculator.

import { currentState } from './state.js';
import { generateBuildString } from './build-codec.js';

// Reflect the current build in location.hash.
export function updateURLHash() {
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
