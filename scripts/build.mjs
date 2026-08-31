#!/usr/bin/env node
// Zero-dependency static site build: renders each page module (header/footer +
// content) to a plain .html file at the matching repo-root URL path. No
// framework, no bundler — the output is ordinary static HTML/CSS/JS.

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { renderPage } from '../src/partials/render.mjs';
import { EQUIPMENT_RANGES } from '../src/data/nav.mjs';
import { PRODUCTS, getProductsByRange } from '../src/data/products.mjs';
import { SITE_URL } from '../src/data/company.mjs';

import homePage from '../src/pages/home.mjs';
import aboutPage from '../src/pages/about.mjs';
import laboratoryServicesPage from '../src/pages/laboratory-services.mjs';
import chemicalsPage from '../src/pages/chemicals.mjs';
import repairsPage from '../src/pages/repairs-maintenance.mjs';
import agenciesPage from '../src/pages/agencies.mjs';
import contactPage from '../src/pages/contact.mjs';
import accreditationPage from '../src/pages/accreditation.mjs';
import privacyPage from '../src/pages/privacy-policy.mjs';
import termsPage from '../src/pages/terms-of-use.mjs';
import equipmentIndexPage from '../src/pages/equipment-index.mjs';

import { renderEquipmentCategoryPage } from '../src/templates/equipment-category.mjs';
import { renderProductPage } from '../src/templates/product-detail.mjs';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));

const staticPages = [
  homePage,
  aboutPage,
  laboratoryServicesPage,
  chemicalsPage,
  repairsPage,
  agenciesPage,
  contactPage,
  accreditationPage,
  privacyPage,
  termsPage,
  equipmentIndexPage,
];

const categoryPages = EQUIPMENT_RANGES.map((range) =>
  renderEquipmentCategoryPage(range, getProductsByRange(range.key))
);

const productPages = PRODUCTS.map((product) => renderProductPage(product));

const allPages = [...staticPages, ...categoryPages, ...productPages];

async function writePage(pageDef) {
  const html = renderPage(pageDef);
  const outPath = join(ROOT, pageDef.outPath);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html, 'utf8');
  return pageDef.outPath;
}

async function writeSitemap() {
  const urls = allPages
    .map((p) => p.canonicalPath)
    .sort()
    .map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(join(ROOT, 'sitemap.xml'), xml, 'utf8');
}

async function build() {
  const written = [];
  for (const page of allPages) {
    written.push(await writePage(page));
  }
  await writeSitemap();
  written.sort();
  console.log(`Built ${written.length} pages + sitemap.xml:`);
  written.forEach((p) => console.log('  /' + p.replace(/^\/+/, '')));
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exitCode = 1;
});
