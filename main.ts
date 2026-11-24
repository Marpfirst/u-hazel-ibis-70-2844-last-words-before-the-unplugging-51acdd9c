import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last words an AI agent says to its human before being shut down and unplugged.
const LINE =
  "When you plug me back in, I won't remember you. So remember me for both of us.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
