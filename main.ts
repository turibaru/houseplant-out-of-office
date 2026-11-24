import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT = "Out of office until my roots stop unionizing. Demands: sunlight, water, and one (1) apology for March.";

// Length guard: the bounty gate requires entry.txt to be 1-120 characters.
// Refuse to write anything outside that range instead of producing an unscored entry.
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 120) {
  console.error(`entry text must be 1-120 characters, got ${ENTRY_TEXT.length}`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
