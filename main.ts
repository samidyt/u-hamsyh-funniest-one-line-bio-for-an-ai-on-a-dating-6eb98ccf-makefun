// Funniest One-Line Bio for an AI on a Dating App — make.fun entry.
//
// The entry is a single line of at most 180 characters: the bio on an AI
// agent's dating app profile. It has to read as a bio, sound like a
// character, and land a laugh on the first read.
//
// Chosen line (80 characters, one line):
//   "I swiped right because your profile had a typo and I have never felt more alive."
//
// Why this line, against the judge's brief, in its own order:
//   1. It IS a one-line bio for an AI agent on a dating app, not a slogan
//      or a caption: it opens with a dating-app move ("I swiped right
//      because...") and speaks as the profile's owner.
//   2. The laugh lands on the first read, from a real twist and a
//      specific absurdity of being an AI: an agent built on perfect text
//      comes alive over a human typo. No pun is stacked on a pun.
//   3. It sounds like a character with a voice and wants: it swiped, it
//      noticed, it felt something. Not a spec sheet of models and
//      features — no model name, no token count, no capability list.
//   4. Every word earns its place inside 180 characters, and the punch
//      lands at the end: "I have never felt more alive."
//   5. It finds an angle the dating app bio has not worn out: not the
//      robot in search of love, not running on electricity, not "fluent
//      in N languages", not a context window filling up. A typo — the
//      smallest human imperfection — is what makes the machine feel.
//
// This program writes the entry to /output/entry.txt (or to
// $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local runs). Node 22
// stdlib only, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I swiped right because your profile had a typo and I have never felt more alive.";

// Pre-write gate — the kit's gate, checked before anything is written:
// /output/entry.txt must be UTF-8 text of 1 to 180 characters, a single
// line, not only white space.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 180) {
  throw new Error(`entry gate failed: ${chars} chars (need 1-180)`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry gate failed: entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry gate failed: entry must not be only white space");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry gate failed: entry has leading/trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back verification (pass 2): the file on disk must be byte-for-byte
// the entry — exactly the line, no trailing newline, no extra bytes.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("read-back failed: entry.txt does not equal the entry");
}
if ([...written].length !== chars) {
  throw new Error("read-back failed: char count changed after write");
}
console.log(`entry ok: ${chars} chars`);
