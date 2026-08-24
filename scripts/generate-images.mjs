#!/usr/bin/env node
/**
 * Wedlock placeholder image studio.
 * Scans the source for every `/images/...` reference and renders a
 * cohesive, art-directed SVG placeholder in the brand palette.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const SRC = path.join(ROOT, 'src');
const PUB = path.join(ROOT, 'public');

// --- palettes per top-level folder: [deep base, mid tone, accent, cream] ---
const PALETTES = {
  hero: ['#241B14', '#4A3826', '#C9A24B', '#F6EBDA'],
  weddings: ['#261D12', '#6E5722', '#C9A24B', '#F7EDDA'],
  birthdays: ['#2A1913', '#8A4634', '#E2725B', '#FBE8DF'],
  anniversaries: ['#281A1B', '#8A5458', '#D98A90', '#FAEBED'],
  engagements: ['#221216', '#5C242D', '#8E3B47', '#F5E3E1'],
  'family-private': ['#1C211A', '#4C5844', '#7C8B6F', '#EEF0E6'],
  destinations: ['#14201E', '#2C554C', '#8FB39F', '#E9F0E8'],
  events: ['#221A13', '#5C4A2E', '#C9A24B', '#F4EAD7'],
  journal: ['#232019', '#5E5138', '#C9A24B', '#F1EAD9'],
};
const FALLBACK = PALETTES.hero;

const SIZES = [
  { test: /^hero-(main|poster|cta)/, w: 1920, h: 1280 },
  { test: /^hero-/, w: 1600, h: 1200 },
  { test: /^cta-/, w: 1920, h: 1100 },
  { test: /^team-/, w: 1000, h: 1250 },
  { test: /^about-/, w: 1200, h: 1500 },
  { test: /-hero$/, w: 1600, h: 1140 },
];

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function labelFor(file) {
  return file
    .replace(/\.svg$/, '')
    .split('-')
    .filter((w) => !/^\d+$/.test(w))
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function sizeFor(file) {
  const match = SIZES.find((s) => s.test.test(file));
  return match ? [match.w, match.h] : [1400, 1050];
}

function svgFor(relPath) {
  const folder = relPath.split('/')[2] || 'hero';
  const file = path.basename(relPath);
  const [base, mid, accent, cream] = PALETTES[folder] ?? FALLBACK;
  const [w, h] = sizeFor(file);
  const seed = hash(relPath);
  const rnd = (n) => hash(relPath + n) / 4294967295;

  const label = labelFor(file).replace(/^Hero /, '').replace(/Svg$/, '');
  const initial = (label.charAt(0) || 'W').toUpperCase();

  // decorative circles
  const circles = Array.from({ length: 4 }, (_, i) => {
    const cx = Math.round(rnd(seed + i) * w);
    const cy = Math.round(rnd(seed + i * 7) * h);
    const r = Math.round(Math.min(w, h) * (0.1 + rnd(seed + i * 13) * 0.22));
    const opacity = (0.05 + rnd(seed + i * 21) * 0.07).toFixed(3);
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${cream}" opacity="${opacity}"/>`;
  }).join('\n  ');

  const archW = Math.round(w * 0.34);
  const archH = Math.round(h * 0.58);
  const archX = Math.round((w - archW) / 2 + (rnd(seed + 3) - 0.5) * w * 0.18);
  const archY = Math.round(h - archH - h * 0.1);
  const archR = Math.round(archW / 2);

  const bigFont = Math.round(Math.min(w, h) * 0.42);
  const labelFont = Math.round(Math.min(w, h) * 0.055);
  const microFont = Math.round(Math.min(w, h) * 0.024);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${mid}"/>
      <stop offset="0.55" stop-color="${base}"/>
      <stop offset="1" stop-color="${base}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.38" r="0.75">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.5"/>
      <stop offset="0.55" stop-color="${accent}" stop-opacity="0.12"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  ${circles}
  <!-- venue arch motif -->
  <g opacity="0.9">
    <path d="M ${archX} ${archY + archH} L ${archX} ${archY + archR} A ${archR} ${archR} 0 0 1 ${archX + archW} ${archY + archR} L ${archX + archW} ${archY + archH} Z" fill="${accent}" opacity="0.14" stroke="${accent}" stroke-opacity="0.5" stroke-width="2"/>
    <path d="M ${archX + 26} ${archY + archH} L ${archX + 26} ${archY + archR} A ${archR - 26} ${archR - 26} 0 0 1 ${archX + archW - 26} ${archY + archR} L ${archX + archW - 26} ${archY + archH} Z" fill="none" stroke="${cream}" stroke-opacity="0.22" stroke-width="1.5"/>
  </g>
  <text x="50%" y="46%" text-anchor="middle" dominant-baseline="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="${bigFont}" fill="${cream}" opacity="0.13">${initial}</text>
  <text x="50%" y="${h - Math.round(h * 0.13)}" text-anchor="middle" font-family="Georgia, serif" letter-spacing="${Math.round(labelFont * 0.28)}" font-size="${labelFont}" fill="${cream}" opacity="0.92">${label.toUpperCase()}</text>
  <g font-family="Georgia, serif" font-size="${microFont}" fill="${cream}" opacity="0.55" letter-spacing="${Math.round(microFont * 0.5)}">
    <text x="50%" y="${h - Math.round(h * 0.085)}" text-anchor="middle">WEDLOCK · THOUGHTFULLY PRODUCED</text>
  </g>
  <circle cx="50%" cy="${h - Math.round(h * 0.055)}" r="${Math.round(microFont * 0.35)}" fill="${accent}"/>
  <rect width="${w}" height="${h}" filter="url(#grain)" opacity="0.05"/>
</svg>
`;
}

function collect(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      collect(p, out);
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      out.push(p);
    }
  }
  return out;
}

const files = collect(SRC);
const re = /['"`](\/images\/[A-Za-z0-9_\-./]+\.(?:svg|png|jpg|jpeg|webp))['"`]/g;
const refs = new Set();
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = re.exec(text)) !== null) refs.add(m[1]);
}

let created = 0;
for (const rel of refs) {
  const target = path.join(PUB, rel);
  if (rel.endsWith('.svg')) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, svgFor(rel));
    created++;
  }
}

console.log(`[wedlock] scanned ${files.length} source files, found ${refs.size} image refs, rendered ${created} SVG assets.`);
