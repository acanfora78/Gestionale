/**
 * Genera gli screenshot di ogni lavoro in data/works.ts.
 *
 *   npm run screenshots            -> tutti i lavori
 *   npm run screenshots sudditalia   -> solo i lavori indicati (slug)
 *
 * Salva in public/works/[slug]/:
 *   desktop.jpg, desktop-2.jpg (1440px)   mobile.jpg, mobile-2.jpg (390px)
 * I lavori senza URL vengono saltati e segnalati.
 */
import { chromium, devices, type Browser, type Page } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { works, hasUrl, SCREENSHOT, type Work } from "../data/works";

const OUT_DIR = path.join(process.cwd(), "public", "works");
// Attesa per video in hero, intro animate e font.
const SETTLE_MS = 5000;

const viewports = {
  desktop: {
    viewport: SCREENSHOT.desktop,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
  },
  mobile: {
    ...devices["iPhone 13"],
    viewport: SCREENSHOT.mobile,
    deviceScaleFactor: 2,
  },
} as const;

/** Chiude i banner più comuni (cookie, popup newsletter). Best effort. */
async function dismissOverlays(page: Page) {
  const labels = [/accett/i, /accept/i, /ok, ho capito/i, /consenti/i, /chiudi/i, /close/i, /salta intro/i];
  for (const label of labels) {
    const btn = page.getByRole("button", { name: label }).first();
    if (await btn.isVisible().catch(() => false)) {
      await btn.click({ timeout: 2000 }).catch(() => {});
      await page.waitForTimeout(500);
    }
  }
  await page.keyboard.press("Escape").catch(() => {});
}

async function shoot(browser: Browser, work: Work, kind: keyof typeof viewports, dir: string) {
  const context = await browser.newContext({ ...viewports[kind], locale: "it-IT" });
  const page = await context.newPage();
  try {
    await page.goto(work.url, { waitUntil: "load", timeout: 60_000 });
    await page.waitForTimeout(SETTLE_MS);
    await dismissOverlays(page);
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(dir, `${kind}.jpg`), type: "jpeg", quality: 82 });

    // Seconda vista: una schermata più in basso.
    // Di default una schermata più in basso; ogni lavoro può indicare quante (secondaVista).
    const h = Math.round(viewports[kind].viewport.height * (work.secondaVista?.[kind] ?? 1));
    await page.mouse.wheel(0, h);
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), h);
    await page.waitForTimeout(2500);
    await page.screenshot({ path: path.join(dir, `${kind}-2.jpg`), type: "jpeg", quality: 82 });
  } finally {
    await context.close();
  }
}

async function main() {
  const only = process.argv.slice(2);
  const selected = only.length ? works.filter((w) => only.includes(w.slug)) : works;
  const skipped: string[] = [];
  const failed: string[] = [];

  const browser = await chromium.launch(
    process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
  );

  for (const work of selected) {
    if (!hasUrl(work)) {
      skipped.push(work.slug);
      console.warn(`⚠  ${work.slug}: nessun URL (${work.url}), saltato`);
      continue;
    }
    const dir = path.join(OUT_DIR, work.slug);
    await mkdir(dir, { recursive: true });
    for (const kind of ["desktop", "mobile"] as const) {
      try {
        await shoot(browser, work, kind, dir);
        console.log(`✓  ${work.slug} ${kind}`);
      } catch (err) {
        failed.push(`${work.slug} (${kind})`);
        console.error(`✗  ${work.slug} ${kind}: ${(err as Error).message}`);
      }
    }
  }

  await browser.close();

  console.log("\nFatto.");
  if (skipped.length) console.log(`Saltati senza URL: ${skipped.join(", ")}`);
  if (failed.length) {
    console.log(`Falliti: ${failed.join(", ")}`);
    process.exitCode = 1;
  }
}

main();
