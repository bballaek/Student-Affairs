import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const root = process.cwd();
const inputPng = path.join(root, "public", "logo.png");
const outDir = path.join(root, "public");

async function writePng(filename, size) {
  const outPath = path.join(outDir, filename);
  const buf = await sharp(inputPng)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  await fs.writeFile(outPath, buf);
  return buf;
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  const png16 = await writePng("favicon-16x16.png", 16);
  const png32 = await writePng("favicon-32x32.png", 32);
  const png48 = await writePng("favicon-48x48.png", 48);

  await writePng("apple-touch-icon.png", 180);
  await writePng("android-chrome-192x192.png", 192);
  await writePng("android-chrome-512x512.png", 512);

  const ico = await toIco([png16, png32, png48]);
  await fs.writeFile(path.join(outDir, "favicon.ico"), ico);

  // Keep Next.js app router favicon route in sync
  const appFaviconPath = path.join(root, "src", "app", "favicon.ico");
  await fs.writeFile(appFaviconPath, ico);

  console.log("Favicons generated in public/ and src/app/favicon.ico");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

