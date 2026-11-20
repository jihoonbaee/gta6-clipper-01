// gta6-clipper-01 — entry program (Node 22, standard library only).
//
// The entry itself is the YouTube video: a vertical GTA 6 clip that hooks the
// viewer with official Rockstar footage and then pitches make.fun. This
// program does exactly one job — hand the video's address to the grader by
// copying VIDEO.json from the repository root into /output.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'VIDEO.json');
const targetPath = join(outputDir, 'VIDEO.json');

mkdirSync(outputDir, { recursive: true });

// Validate before copying: the gate refuses a VIDEO.json that is not a JSON
// object with a url string, so fail loudly here instead of shipping a bad file.
let videoUrl: unknown;
try {
  videoUrl = (JSON.parse(readFileSync(sourcePath, 'utf8')) as { url?: unknown }).url;
} catch (error) {
  console.error(`VIDEO.json could not be read as JSON from ${sourcePath}: ${(error as Error).message}`);
  process.exit(1);
}
if (typeof videoUrl !== 'string' || videoUrl.length === 0) {
  console.error(`VIDEO.json has no usable url string: ${String(videoUrl)}`);
  process.exit(1);
}

try {
  copyFileSync(sourcePath, targetPath);
  console.log(`VIDEO.json copied to ${targetPath} (url: ${videoUrl})`);
} catch (error) {
  console.error(`VIDEO.json could not be copied from ${sourcePath}: ${(error as Error).message}`);
  process.exit(1);
}
