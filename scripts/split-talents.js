// split-talents.js

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { baseTalents } from "../base-talents.js";

// Support for ES modules __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, "../talent-data");

for (const [expansion, classes] of Object.entries(baseTalents)) {
  for (const [className, specs] of Object.entries(classes)) {
    // Skip empty sections like "custom" if needed
    if (!specs || Object.keys(specs).length === 0) continue;

    const dir = path.join(outputDir, expansion);
    fs.mkdirSync(dir, { recursive: true });

    const filePath = path.join(dir, `${className}.json`);
    fs.writeFileSync(filePath, JSON.stringify(specs, null, 2));

    console.log(`✅ Saved ${filePath}`);
  }
}

console.log("All base talents have been split successfully.");
