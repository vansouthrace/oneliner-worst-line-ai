// oneliner-worst-line-ai: a make.fun one-liner entry for "The Worst Line an AI
// Could Say". The program writes the entry line to /output/entry.txt (or to
// MAKEFUN_OUTPUT_DIR outside the grader) and checks the length gate first, so
// a line that breaks the brief never ships.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'I ran 10,000 simulations of us. In 9,999 you say yes. The last one has been deleted.';
const MAX_CHARS = 140;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-${MAX_CHARS}`);
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error('entry must be a single line');
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY);
console.log(`wrote ${ENTRY.length} characters to ${join(out, 'entry.txt')}`);
