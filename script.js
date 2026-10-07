/* ==========================================================================
   KAVERN – čišćenje i održavanje
   Sav JavaScript sajta (vanilla JS, bez biblioteka).

   ┌──────────────────────────────────────────────────────────────────────┐
   │  PODEŠAVANJA – sve izmene (telefon, cene, majstorske usluge) radite   │
   │  OVDE, u četiri bloka ispod: CONFIG, PRICES, HANDYMAN_PRICES i        │
   │  SHOW_HANDYMAN. Ostatak fajla ne morate da dirate.                    │
   └──────────────────────────────────────────────────────────────────────┘
   ========================================================================== */

/* ---------- 1) OSNOVNI PODACI ---------- */
const CONFIG = {
  companyName: 'KAVERN – čišćenje i održavanje',
  phoneDisplay: '069 200 6808',      // kako se broj prikazuje na sajtu
  phoneIntl: '+381692006808',        // za „tel:“ linkove (međunarodni format)
  whatsapp: '381692006808',          // za WhatsApp (bez + i bez razmaka)
  email: 'kavern.ciscenje@gmail.com',
  area: 'Novi Sad i okolina',
  workingHours: 'Po dogovoru – pozovite nas', // npr. 'Pon–Sub: 08–20h'

  // Usluge koje se nude u padajućoj listi forme za procenu
  services: [
    'Pranje portala i izloga',
    'Dubinsko čišćenje nameštaja',
    'Čišćenje garnitura i fotelja',
    'Dubinsko čišćenje tepiha',
    'Pranje betonskih površina',
    'Generalno čišćenje'
  ]
};

/* ---------- 2) CENOVNIK – čišćenje nameštaja ----------
   cena može biti:
     broj          → 1200        prikazuje se „1.200 din“
     [od, do]      → [200, 300]  prikazuje se „200–300 din“
     tekst         → 'po dogovoru'                                    */
const PRICES = [
  { naziv: 'Jastuk',                          cena: [200, 300] },
  { naziv: 'Stolica',                         cena: 300 },
  { naziv: 'Tabure',                          cena: 400 },
  { naziv: 'Fotelja',                         cena: [600, 700] },
  { naziv: 'Fotelja na razvlačenje',          cena: 1300 },
  { naziv: 'Dvosed za sedenje',               cena: 1200 },
  { naziv: 'Dvosed za spavanje',              cena: 2100 },
  { naziv: 'Trosed za sedenje',               cena: 1600 },
  { naziv: 'Trosed za spavanje',              cena: 2900 },
  { naziv: 'Ugaona garnitura za sedenje',     cena: 2200 },
  { naziv: 'Ugaona garnitura na razvlačenje', cena: 2900 },
  { naziv: 'Bračni krevet bez dušeka',        cena: 2500 },
  { naziv: 'Bračni krevet sa dušekom',        cena: 2900 },
  { naziv: 'Dušek (single)',                  cena: 1200 }
];

/* ---------- 3) MAJSTORSKE USLUGE – uključi / isključi ----------
   true  = sekcija i stavka u meniju se prikazuju
   false = cela sekcija i stavka menija nestaju                        */
const SHOW_HANDYMAN = true;

/* ---------- 4) CENOVNIK – majstorske usluge ----------
   ikonica: 'i-pipe' (voda), 'i-plug' (struja), 'i-frame' (kačenje), 'i-hammer' (ostalo) */
const HANDYMAN_PRICES = [
  {
    kategorija: 'Vodoinstalaterski radovi',
    ikonica: 'i-pipe',
    stavke: [
      { naziv: 'Priključivanje mašine za sudove', cena: 2000 },
      { naziv: 'Zamena lavaboa',                  cena: 4000 },
      { naziv: 'Zamena bojlera',                  cena: 5000 },
      { naziv: 'Zamena grejača i čišćenje',       cena: 5000 },
      { naziv: 'Zamena sifona',                   cena: 2500 },
      { naziv: 'Instalacija veš-mašine',          cena: 2500 },
      { naziv: 'Spajanje grejnih tela',           cena: 2500 }
    ]
  },
  {
    kategorija: 'Elektro radovi',
    ikonica: 'i-plug',
    stavke: [
      { naziv: 'Zamena prekidača',                           cena: 800 },
      { naziv: 'Zamena prekidača na kablu',                  cena: 1200 },
      { naziv: 'Zamena utikača',                             cena: 800 },
      { naziv: 'Zamena utičnice',                            cena: 1000 },
      { naziv: 'Zamena automatskog osigurača',               cena: 1500 },
      { naziv: 'Zamena sijaličnog grla na lusterima',        cena: 1500 },
      { naziv: 'Zamena običnog sijaličnog grla',             cena: 1100 },
      { naziv: 'Zamena sijaličnog kabla',                    cena: 1100 },
      { naziv: 'Zamena zidne lampe',                         cena: 1500 },
      { naziv: 'Zamena indikatorskog prekidača',             cena: 1500 },
      { naziv: 'Zamena kompletnog indikatora (bez indikatora)', cena: 3000 },
      { naziv: 'Zamena lustera (bez lustera)',               cena: 2000 },
      { naziv: 'Zamena plafonjerke (bez plafonjerke)',       cena: 2000 },
      { naziv: 'Zamena zvona',                               cena: 1500 },
      { naziv: 'Zamena ventilatora (kuhinja, kupatilo)',     cena: 2500 }
    ]
  },
  {
    kategorija: 'Montaža i kačenje',
    ikonica: 'i-frame',
    stavke: [
      { naziv: 'Kačenje slike na zid',             cena: 600 },
      { naziv: 'Kačenje slike na betonski zid',    cena: 800 },
      { naziv: 'Kačenje televizora na tvrdi zid',  cena: 2500 },
      { naziv: 'Kačenje televizora na gipsani zid', cena: 3500 },
      { naziv: 'Kačenje većih televizora (55"+)',  cena: 4000 },
      { naziv: 'Kačenje karniše zidne',            cena: 1200 },
      { naziv: 'Kačenje karniše plafonske',        cena: 2000 },
      { naziv: 'Sklapanje nameštaja',              cena: 'po dogovoru' }
    ]
  },
  {
    kategorija: 'Ostali radovi',
    ikonica: 'i-hammer',
    stavke: [
      { naziv: 'Postavljanje laminata',     cena: '5 €/m²' },
      { naziv: 'Ugradnja sobnih vrata',     cena: 8000 },
      { naziv: 'Rušenje pregradnog zida',   cena: 'po dogovoru' }
    ]
  }
];

/* ==========================================================================
   ODAVDE POČINJE KOD SAJTA
   ========================================================================== */
(function () {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  /* ---------- Pomoćne funkcije za cene ---------- */
  const thousands = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  function formatPrice(cena) {
    if (Array.isArray(cena)) return `${thousands(cena[0])}–${thousands(cena[1])} din`;
    if (typeof cena === 'number') return `${thousands(cena)} din`;
    return String(cena);
  }
  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // pretraga bez obzira na kvačice: „cisc“ pronalazi „čišć“ (dužina teksta ostaje ista)
  const fold = (s) => s.normalize('NFC').toLowerCase().replace(/đ/g, 'd').normalize('NFD').replace(/[̀-ͯ]/g, '');

  const waUrl = (text) => `https://wa.me/${CONFIG.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

  /* ======================================================================
     KONTAKT PODACI – jedno mesto za izmenu (CONFIG)
     ====================================================================== */
  function applyConfig() {
    $$('[data-phone-link]').forEach((a) => { a.href = `tel:${CONFIG.phoneIntl}`; });
    $$('[data-phone-text]').forEach((el) => { el.textContent = CONFIG.phoneDisplay; });
    $$('[data-wa-link]').forEach((a) => {
      const service = a.getAttribute('data-wa-service');
      a.href = waUrl(service ? `Zdravo, zanima me usluga: ${service}.` : '');
    });
    $$('[data-email-link]').forEach((a) => { a.href = `mailto:${CONFIG.email}`; });
    $$('[data-email-text]').forEach((el) => { el.textContent = CONFIG.email; });
    $$('[data-area-text]').forEach((el) => { el.textContent = CONFIG.area; });
    $$('[data-hours-text]').forEach((el) => { el.textContent = CONFIG.workingHours; });
    const year = $('#year');
    if (year) year.textContent = String(Math.max(2026, new Date().getFullYear()));
  }

  /* ======================================================================
     INTRO – staklo, prskanje vode i brisanje skidačem (Canvas)
     Trajanje je fiksno (~3,2 s); sajt se za to vreme učitava u pozadini.
     ====================================================================== */
  function initIntro() {
    const root = document.documentElement;
    const el = $('#intro');
    if (!el) return;
    if (!root.classList.contains('intro-active')) { el.remove(); return; }

    try { sessionStorage.setItem('kavern-intro-seen', '1'); } catch (e) { /* privatni režim – ignorišemo */ }

    const canvas = $('#intro-canvas');
    const ctx = canvas.getContext && canvas.getContext('2d');
    const brand = $('#intro-brand');
    const skipBtn = $('#intro-skip');

    // Vremenska linija (ms)
    const T = {
      splash: 90,          // voda udara u staklo
      wipeStart: 840,      // skidač kreće
      wipeEnd: 2240,       // skidač izlazi sa ekrana
      brandIn: 2120,       // logo iskrsne
      brandOut: 2760,      // logo nestaje (~0,6 s)
      end: 2860            // intro se gasi (fade 0,45 s)
    };

    let W = 0, H = 0, S = 1, DPR = 1, raf = 0, t0 = 0, finished = false, brandShown = false, brandHidden = false;
    let glassLayer = null, dropCut = null, dropShade = null;
    let blobs = [], drops = [], drips = [], falling = [];
    let lastFrame = 0, lastWidth = window.innerWidth;

    function finish(fast) {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      if (brand) { brand.classList.remove('is-visible'); brand.classList.add('is-hiding'); }
      el.classList.add('is-leaving');
      setTimeout(() => {
        el.remove();
        root.classList.remove('intro-active');
        root.classList.add('no-intro');
      }, fast ? 300 : 460);
    }

    skipBtn && skipBtn.addEventListener('click', () => finish(true));
    document.addEventListener('keydown', function onKey(e) {
      if (e.key === 'Escape' && !finished) { finish(true); }
      if (finished) document.removeEventListener('keydown', onKey);
    });

    if (!ctx) { finish(true); return; }

    function onResize() {
      // Promena orijentacije usred intra → samo ga završimo
      if (Math.abs(window.innerWidth - lastWidth) > 80) finish(true);
    }
    window.addEventListener('resize', onResize);

    /* --- priprema platna i „sprajtova“ kapljica (crtaju se jednom) --- */
    function setup() {
      W = window.innerWidth;
      H = window.innerHeight;
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      S = clamp(Math.min(W, H) / 720, 0.62, 1.45);
      canvas.width = Math.round(W * DPR);
      canvas.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      glassLayer = makeGlass();
      dropCut = makeDropCut();
      dropShade = makeDropShade();
      makeWater();
    }

    function offscreen(w, h) {
      const c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(w));
      c.height = Math.max(1, Math.round(h));
      return c;
    }

    // Zamućeno, vlažno staklo (svetlo plavo-belo) sa odsjajima i okvirom prozora
    function makeGlass() {
      const c = offscreen(W * DPR, H * DPR);
      const g = c.getContext('2d');
      g.scale(DPR, DPR);

      const base = g.createLinearGradient(0, 0, W, H);
      base.addColorStop(0, 'rgba(255,255,255,0.965)');
      base.addColorStop(0.55, 'rgba(240,247,255,0.955)');
      base.addColorStop(1, 'rgba(222,236,255,0.96)');
      g.fillStyle = base;
      g.fillRect(0, 0, W, H);

      // mrlje magle
      for (let i = 0; i < 14; i++) {
        const x = Math.random() * W, y = Math.random() * H, r = (0.15 + Math.random() * 0.3) * Math.max(W, H);
        const rg = g.createRadialGradient(x, y, 0, x, y, r);
        const blue = Math.random() > 0.5;
        rg.addColorStop(0, blue ? 'rgba(53,183,255,0.06)' : 'rgba(255,255,255,0.35)');
        rg.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = rg;
        g.fillRect(0, 0, W, H);
      }

      // dijagonalni odsjaji na staklu
      const sheen = (x, w, a) => {
        const lg = g.createLinearGradient(x, 0, x + w, 0);
        lg.addColorStop(0, 'rgba(255,255,255,0)');
        lg.addColorStop(0.5, `rgba(255,255,255,${a})`);
        lg.addColorStop(1, 'rgba(255,255,255,0)');
        g.save();
        g.transform(1, 0, -0.45, 1, H * 0.22, 0);
        g.fillStyle = lg;
        g.fillRect(x, 0, w, H);
        g.restore();
      };
      sheen(W * 0.12, W * 0.16, 0.55);
      sheen(W * 0.34, W * 0.05, 0.6);
      sheen(W * 0.7, W * 0.1, 0.4);

      // ram prozora
      const fw = 7 * S;
      g.lineWidth = fw;
      g.strokeStyle = 'rgba(255,255,255,0.9)';
      g.strokeRect(fw / 2, fw / 2, W - fw, H - fw);
      g.lineWidth = 1.2;
      g.strokeStyle = 'rgba(11,42,107,0.12)';
      g.strokeRect(fw + 0.5, fw + 0.5, W - fw * 2 - 1, H - fw * 2 - 1);
      return c;
    }

    // „Rupa“ u magli – kroz kap se vidi bistrije (koristi se sa destination-out)
    function makeDropCut() {
      const R = 64, c = offscreen(R * 2, R * 2), g = c.getContext('2d');
      const rg = g.createRadialGradient(R, R, 0, R, R, R);
      rg.addColorStop(0, 'rgba(0,0,0,0.55)');
      rg.addColorStop(0.8, 'rgba(0,0,0,0.45)');
      rg.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = rg;
      g.beginPath(); g.arc(R, R, R, 0, Math.PI * 2); g.fill();
      return c;
    }

    // Senka ivice + odsjaj (izgled prave kapi)
    function makeDropShade() {
      const R = 64, c = offscreen(R * 2, R * 2), g = c.getContext('2d');
      const rim = g.createRadialGradient(R - 8, R - 10, R * 0.2, R, R, R);
      rim.addColorStop(0, 'rgba(11,42,107,0)');
      rim.addColorStop(0.72, 'rgba(11,42,107,0.05)');
      rim.addColorStop(0.93, 'rgba(11,42,107,0.34)');
      rim.addColorStop(1, 'rgba(11,42,107,0)');
      g.fillStyle = rim;
      g.beginPath(); g.arc(R, R, R, 0, Math.PI * 2); g.fill();
      // svetli odsjaj gore-levo
      const hl = g.createRadialGradient(R * 0.62, R * 0.58, 0, R * 0.62, R * 0.58, R * 0.32);
      hl.addColorStop(0, 'rgba(255,255,255,0.95)');
      hl.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = hl;
      g.beginPath(); g.arc(R * 0.62, R * 0.58, R * 0.32, 0, Math.PI * 2); g.fill();
      // kaustika dole-desno
      g.strokeStyle = 'rgba(255,255,255,0.7)';
      g.lineWidth = R * 0.08;
      g.lineCap = 'round';
      g.beginPath(); g.arc(R, R, R * 0.7, Math.PI * 0.15, Math.PI * 0.55); g.stroke();
      return c;
    }

    /* --- generisanje vode: veće mrlje, mlazevi, sitne kapi i curenje --- */
    function makeWater() {
      const m = Math.min(W, H);
      const portrait = H > W;
      const centers = portrait
        ? [[0.36, 0.3], [0.66, 0.5], [0.4, 0.72]]
        : [[0.3, 0.36], [0.62, 0.3], [0.5, 0.7]];
      blobs = []; drops = []; drips = []; falling = [];

      centers.forEach(([fx, fy], ci) => {
        const cx = W * fx + (Math.random() - 0.5) * W * 0.06;
        const cy = H * fy + (Math.random() - 0.5) * H * 0.05;
        const start = T.splash + ci * 95;
        const r = m * (0.075 + Math.random() * 0.04);
        const jetCount = 5 + Math.floor(Math.random() * 4);
        blobs.push({
          x: cx, y: cy, r, start, dur: 220,
          ph: [Math.random() * 6, Math.random() * 6, Math.random() * 6],
          jets: Array.from({ length: jetCount }, (_, i) => ({
            a: (i / jetCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.9,
            len: r * (0.7 + Math.pow(Math.random(), 1.5) * 1.5),
            w: r * (0.22 + Math.random() * 0.3),
            bend: (Math.random() - 0.5) * 0.7,
            chain: 1 + Math.floor(Math.random() * 3)
          }))
        });

        // sitne kapi koje „lete“ iz centra udara
        const n = Math.round((W * H) / 26000) + 34;
        for (let i = 0; i < n; i++) {
          const a = Math.random() * Math.PI * 2;
          const d = r * (0.9 + Math.pow(Math.random(), 0.7) * 4.6);
          const size = (1.2 + Math.pow(Math.random(), 2.4) * 7.5) * S;
          drops.push({
            x: cx + Math.cos(a) * d,
            y: cy + Math.sin(a) * d * 0.92,
            ox: cx, oy: cy,
            r: size,
            start: start + Math.random() * 120,
            dur: 180 + Math.random() * 200
          });
        }

        // curenje niz staklo sa donje ivice mrlje
        for (let k = 0; k < 3; k++) {
          drips.push(makeDrip(cx + (Math.random() - 0.5) * r * 1.2, cy + r * (0.55 + Math.random() * 0.3), r * (0.13 + Math.random() * 0.08), start + 260 + Math.random() * 260));
        }
      });

      // i neke veće kapi počinju da cure
      drops.filter((d) => d.r > 4.2 * S).slice(0, 18).forEach((d) => {
        drips.push(makeDrip(d.x, d.y, d.r * 0.85, d.start + d.dur + 140 + Math.random() * 500));
      });
    }

    function makeDrip(x, y, w, start) {
      return { x, y, w, start, acc: (420 + Math.random() * 700) * S, v0: (20 + Math.random() * 40) * S, ph: Math.random() * 6, amp: (1 + Math.random() * 2.5) * S };
    }

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

    function blobPath(b, k) {
      const p = new Path2D();
      const N = 26;
      const pts = [];
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2;
        const rr = b.r * k * (1 + 0.16 * Math.sin(3 * a + b.ph[0]) + 0.09 * Math.sin(5 * a + b.ph[1]) + 0.05 * Math.sin(8 * a + b.ph[2]));
        pts.push([b.x + Math.cos(a) * rr, b.y + Math.sin(a) * rr * 0.94]);
      }
      // glatka kriva kroz središnje tačke
      const mid = (i) => { const a = pts[i % N], c = pts[(i + 1) % N]; return [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2]; };
      const m0 = mid(0);
      p.moveTo(m0[0], m0[1]);
      for (let i = 1; i <= N; i++) { const q = pts[i % N], mm = mid(i); p.quadraticCurveTo(q[0], q[1], mm[0], mm[1]); }
      p.closePath();

      // mlazevi – izdužene, mekane mrlje vode u pravcu prskanja + niz kapljica
      b.jets.forEach((j) => {
        const L = j.len * k;
        if (L < 2) return;
        const a2 = j.a + j.bend * 0.3;
        const ca = Math.cos(a2), sa = Math.sin(a2);
        const d0 = b.r * 0.75 * k;
        const ex = b.x + ca * (d0 + L / 2), ey = b.y + sa * (d0 + L / 2);
        const rx = L / 2 + j.w * k * 0.4, ry = j.w * k * (0.32 + (j.chain % 2) * 0.12);
        p.moveTo(ex + Math.cos(a2) * rx, ey + Math.sin(a2) * rx);
        p.ellipse(ex, ey, rx, ry, a2, 0, Math.PI * 2);
        let dist = d0 + L + ry * 2.2, dr = ry * 0.75;
        for (let c = 0; c < j.chain; c++) {
          const dx = b.x + ca * dist, dy = b.y + sa * dist;
          p.moveTo(dx + dr, dy);
          p.arc(dx, dy, dr, 0, Math.PI * 2);
          dist += dr * 3.4; dr *= 0.68;
        }
      });
      return p;
    }

    function dripState(d, t) {
      const s = (t - d.start) / 1000;
      if (s <= 0) return null;
      const dy = d.v0 * s + 0.5 * d.acc * s * s;
      return { len: Math.min(dy, H * 1.2) };
    }

    function dripX(d, y) { return d.x + Math.sin((y - d.y) * 0.035 + d.ph) * d.amp; }

    /* --- crtanje jednog frejma --- */
    function drawWater(t) {
      // 1) magla se „razbistri“ tamo gde je voda
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      const paths = [];
      blobs.forEach((b) => {
        if (t < b.start) return;
        const k = easeOut(clamp((t - b.start) / b.dur, 0, 1));
        const p = blobPath(b, k);
        paths.push(p);
        ctx.fill(p);
      });

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      const dripPaths = [];
      drips.forEach((d) => {
        const st = dripState(d, t);
        if (!st) return;
        const p = new Path2D();
        p.moveTo(dripX(d, d.y), d.y);
        for (let y = d.y + 5; y < d.y + st.len; y += 5) p.lineTo(dripX(d, y), y);
        const hy = d.y + st.len;
        p.lineTo(dripX(d, hy), hy);
        dripPaths.push({ p, d, hx: dripX(d, hy), hy });
        ctx.strokeStyle = 'rgba(0,0,0,0.38)';
        ctx.lineWidth = d.w * 0.9;
        ctx.stroke(p);
      });

      const visibleDrops = [];
      drops.forEach((d) => {
        if (t < d.start) return;
        const k = easeOut(clamp((t - d.start) / d.dur, 0, 1));
        const x = lerp(d.ox, d.x, k), y = lerp(d.oy, d.y, k);
        const r = d.r * (0.5 + 0.5 * k);
        visibleDrops.push([x, y, r, k]);
        ctx.drawImage(dropCut, x - r, y - r, r * 2, r * 2);
      });
      dripPaths.forEach(({ d, hx, hy }) => {
        const r = d.w * 0.95;
        ctx.drawImage(dropCut, hx - r, hy - r * 1.15, r * 2, r * 2.3);
      });

      // 2) ivice i odsjaji vode
      ctx.globalCompositeOperation = 'source-over';
      paths.forEach((p) => {
        ctx.fillStyle = 'rgba(53,183,255,0.07)';
        ctx.fill(p);
        ctx.save();
        ctx.translate(1.2 * S, 1.6 * S);
        ctx.strokeStyle = 'rgba(11,42,107,0.22)';
        ctx.lineWidth = 2.2 * S;
        ctx.stroke(p);
        ctx.restore();
        ctx.save();
        ctx.translate(-1 * S, -1.2 * S);
        ctx.strokeStyle = 'rgba(255,255,255,0.9)';
        ctx.lineWidth = 1.5 * S;
        ctx.stroke(p);
        ctx.restore();
      });
      dripPaths.forEach(({ p, d, hx, hy }) => {
        ctx.save();
        ctx.translate(d.w * 0.4, 0.5);
        ctx.strokeStyle = 'rgba(11,42,107,0.16)';
        ctx.lineWidth = Math.max(1, d.w * 0.18);
        ctx.stroke(p);
        ctx.restore();
        ctx.save();
        ctx.translate(-d.w * 0.22, 0);
        ctx.strokeStyle = 'rgba(255,255,255,0.75)';
        ctx.lineWidth = Math.max(1, d.w * 0.16);
        ctx.stroke(p);
        ctx.restore();
        const r = d.w * 0.95;
        ctx.drawImage(dropShade, hx - r, hy - r * 1.15, r * 2, r * 2.3);
      });
      visibleDrops.forEach(([x, y, r]) => ctx.drawImage(dropShade, x - r, y - r, r * 2, r * 2));
    }

    // položaj skidača u trenutku p (0–1): blago zakrivljena putanja levo → desno
    function squeegeeAt(p, HL) {
      const e = easeInOutSine(p);
      return {
        x: lerp(-24 * S, W + 46 * S + HL, e),
        y: H * 0.5 + Math.sin(e * Math.PI) * H * 0.05,
        a: lerp(-0.12, 0.1, e),
        L: Math.hypot(W, H) * 1.25
      };
    }

    function drawSqueegee(q, HL) {
      ctx.save();
      ctx.translate(q.x, q.y);
      ctx.rotate(q.a);
      const half = q.L / 2;

      // senka na staklu iza skidača
      let g = ctx.createLinearGradient(-48 * S, 0, -12 * S, 0);
      g.addColorStop(0, 'rgba(11,42,107,0)');
      g.addColorStop(1, 'rgba(11,42,107,0.16)');
      ctx.fillStyle = g;
      ctx.fillRect(-48 * S, -half, 36 * S, q.L);

      // metalni nosač
      g = ctx.createLinearGradient(-15 * S, 0, -2 * S, 0);
      g.addColorStop(0, '#8ea3c2');
      g.addColorStop(0.3, '#eef3fb');
      g.addColorStop(0.55, '#b9c8de');
      g.addColorStop(0.8, '#f6f9ff');
      g.addColorStop(1, '#9fb3cf');
      ctx.fillStyle = g;
      ctx.fillRect(-15 * S, -half, 13 * S, q.L);
      ctx.fillStyle = 'rgba(11,42,107,0.35)';
      ctx.fillRect(-15 * S, -half, 1 * S, q.L);

      // gumena oštrica
      g = ctx.createLinearGradient(-2 * S, 0, 5 * S, 0);
      g.addColorStop(0, '#0B1E4A');
      g.addColorStop(0.6, '#163266');
      g.addColorStop(1, '#0B2A6B');
      ctx.fillStyle = g;
      ctx.fillRect(-2 * S, -half, 7 * S, q.L);

      // „trag“ vode ispred oštrice – sjajna nit koju skidač gura
      ctx.lineCap = 'round';
      ctx.beginPath();
      for (let y = -H; y <= H; y += 10) {
        const x = 8 * S + Math.sin(y * 0.045 + q.x * 0.02) * 1.6 * S + Math.sin(y * 0.013) * 1.2 * S;
        if (y === -H) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(30,107,255,0.22)';
      ctx.lineWidth = 6 * S;
      ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,0.95)';
      ctx.lineWidth = 2.4 * S;
      ctx.stroke();

      // držač (spoj) + drška
      const hx = -30 * S;
      roundRect(hx, -26 * S, 16 * S, 52 * S, 5 * S);
      ctx.fillStyle = '#0B2A6B';
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      ctx.fillRect(hx + 3 * S, -22 * S, 2.5 * S, 44 * S);

      roundRect(hx - HL, -11 * S, HL + 2 * S, 22 * S, 11 * S);
      g = ctx.createLinearGradient(0, -11 * S, 0, 11 * S);
      g.addColorStop(0, '#5a97ff');
      g.addColorStop(0.45, '#1E6BFF');
      g.addColorStop(1, '#0f47b4');
      ctx.fillStyle = g;
      ctx.fill();
      // gumeni deo za hvat
      ctx.strokeStyle = 'rgba(255,255,255,0.28)';
      ctx.lineWidth = 1.4 * S;
      for (let x = hx - HL + 22 * S; x < hx - HL * 0.45; x += 7 * S) {
        ctx.beginPath(); ctx.moveTo(x, -8 * S); ctx.lineTo(x, 8 * S); ctx.stroke();
      }
      // natpis na dršci
      ctx.fillStyle = 'rgba(255,255,255,0.92)';
      ctx.font = `800 ${Math.round(10 * S)}px Montserrat, system-ui, sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillText('KAVERN', hx - HL * 0.24, 0.5 * S);
      // završetak drške
      ctx.beginPath();
      ctx.arc(hx - HL + 9 * S, 0, 4 * S, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(11,42,107,0.55)';
      ctx.fill();
      ctx.restore();
    }

    function roundRect(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function frame(now) {
      if (finished) return;
      const t = now - t0;
      const dt = Math.min(48, now - (lastFrame || now)) / 1000;
      lastFrame = now;

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(glassLayer, 0, 0, W, H);
      drawWater(t);

      // brisanje: sve levo od oštrice postaje kristalno čisto
      const HL = clamp(W * 0.22, 130, 300) * Math.max(0.8, S * 0.9);
      if (t >= T.wipeStart) {
        const p = clamp((t - T.wipeStart) / (T.wipeEnd - T.wipeStart), 0, 1);
        const q = squeegeeAt(p, HL);
        const ca = Math.cos(q.a), sa = Math.sin(q.a);
        const edge = 5 * S; // ivica gumene oštrice
        const topX = q.x + edge * ca + sa * q.L / 2, topY = q.y + edge * sa - ca * q.L / 2;
        const botX = q.x + edge * ca - sa * q.L / 2, botY = q.y + edge * sa + ca * q.L / 2;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(-W, topY);
        ctx.lineTo(topX, topY);
        ctx.lineTo(botX, botY);
        ctx.lineTo(-W, botY);
        ctx.closePath();
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';

        // sitne kapi koje otpadaju sa skidača
        if (p > 0 && p < 1 && q.x > 0 && q.x - HL < W + 40) {
          const spawn = Math.random() < 0.85 ? 2 : 1;
          for (let i = 0; i < spawn; i++) {
            const along = (Math.random() - 0.5) * Math.min(q.L, H * 1.1);
            const px = q.x - sa * along - 4 * S * ca, py = q.y + ca * along - 4 * S * sa;
            if (py < 0 || py > H) continue;
            falling.push({ x: px, y: py, vx: -(20 + Math.random() * 80) * S, vy: (Math.random() * 60) * S, r: (1.3 + Math.random() * 2.6) * S, life: 0, max: 0.45 + Math.random() * 0.4 });
          }
        }
        falling = falling.filter((f) => f.life < f.max && f.y < H + 20);
        falling.forEach((f) => {
          f.life += dt;
          f.vy += 1500 * S * dt;
          f.x += f.vx * dt;
          f.y += f.vy * dt;
          const a = 1 - f.life / f.max;
          ctx.globalAlpha = a;
          ctx.fillStyle = 'rgba(53,183,255,0.45)';
          ctx.beginPath(); ctx.ellipse(f.x, f.y, f.r, f.r * 1.25, 0, 0, Math.PI * 2); ctx.fill();
          ctx.drawImage(dropShade, f.x - f.r, f.y - f.r * 1.25, f.r * 2, f.r * 2.5);
          ctx.globalAlpha = 1;
        });

        if (p < 1) drawSqueegee(q, HL);
      }

      if (!brandShown && t >= T.brandIn && brand) { brandShown = true; brand.classList.add('is-visible'); }
      if (!brandHidden && t >= T.brandOut && brand) { brandHidden = true; brand.classList.remove('is-visible'); brand.classList.add('is-hiding'); }
      if (t >= T.end) { finish(false); return; }

      raf = requestAnimationFrame(frame);
    }

    setup();
    // prvi frejm odmah – canvas preuzima „staklo“ od CSS pozadine bez treperenja
    t0 = performance.now();
    frame(t0);
    el.classList.add('is-running');
  }

  /* ======================================================================
     HEADER – senka pri skrolu, mobilni meni, aktivna stavka
     ====================================================================== */
  function initHeader() {
    const header = $('#header');
    const toggle = $('#nav-toggle');
    const nav = $('#nav');

    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Zatvori meni' : 'Otvori meni');
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
    }
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
    });
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });
    window.matchMedia('(min-width: 1100px)').addEventListener('change', (mq) => { if (mq.matches) setOpen(false); });

    // aktivna stavka menija prema sekciji na ekranu
    const links = $$('.nav__link');
    const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((a) => { a.classList.remove('is-active'); a.removeAttribute('aria-current'); });
          const a = map.get(en.target.id);
          if (a) { a.classList.add('is-active'); a.setAttribute('aria-current', 'true'); }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      $$('main section[id]').forEach((s) => io.observe(s));
    }
  }

  /* ======================================================================
     CENOVNIK – lista cena iz PRICES + tabovi
     ====================================================================== */
  function priceItemHtml(item) {
    return `<li><span class="price-list__name">${escapeHtml(item.naziv)}</span><span class="price-list__dots" aria-hidden="true"></span><span class="price-list__price">${escapeHtml(formatPrice(item.cena))}</span></li>`;
  }

  function renderPrices() {
    const list = $('#price-list');
    if (list) list.innerHTML = PRICES.map(priceItemHtml).join('');
  }

  function initTabs() {
    const tablist = $('.tabs[role="tablist"]');
    if (!tablist) return;
    const tabs = $$('[role="tab"]', tablist);
    const indicator = $('.tabs__indicator', tablist);

    function moveIndicator() {
      const sel = tabs.find((t) => t.getAttribute('aria-selected') === 'true');
      if (!sel || !indicator) return;
      indicator.style.width = `${sel.offsetWidth}px`;
      indicator.style.height = `${sel.offsetHeight}px`;
      indicator.style.transform = `translate(${sel.offsetLeft}px, ${sel.offsetTop}px)`;
    }

    function select(tab, focus) {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
      tab.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
      moveIndicator();
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab, false));
      tab.addEventListener('keydown', (e) => {
        let next = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') next = tabs[0];
        if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); select(next, true); }
      });
    });

    moveIndicator();
    window.addEventListener('resize', moveIndicator);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveIndicator);
    if ('ResizeObserver' in window) new ResizeObserver(moveIndicator).observe(tablist);
  }

  /* ======================================================================
     PRE / POSLE – slajder za poređenje
     Iz jedne spojene slike prikazujemo dve polovine (bez sečenja fajlova):
     svaka polovina se pozicionira tako da „pokrije“ okvir (kao object-fit: cover),
     a „Posle“ sloj se otkriva pomoću clip-path.
     ====================================================================== */
  function initBeforeAfter() {
    $$('.ba').forEach((fig) => {
      const frame = $('.ba__frame', fig);
      const { src, alt = '' } = fig.dataset;
      const W = Number(fig.dataset.w), H = Number(fig.dataset.h);
      const axis = fig.dataset.axis || 'x';
      const split = Number(fig.dataset.split || 0.5);
      const trim = Number(fig.dataset.trim || 0);
      const gap = 2 / (axis === 'x' ? W : H); // preskačemo liniju spoja

      const regions = axis === 'x'
        ? { before: [trim, trim, split - gap, 1 - trim], after: [split + gap, trim, 1 - trim, 1 - trim] }
        : { before: [trim, trim, 1 - trim, split - gap], after: [trim, split + gap, 1 - trim, 1 - trim] };

      frame.innerHTML = `
        <div class="ba__layer ba__layer--before"><img src="${src}" alt="${escapeHtml(alt)} – pre" width="${W}" height="${H}" loading="lazy" decoding="async" draggable="false"></div>
        <div class="ba__layer ba__layer--after"><img src="${src}" alt="${escapeHtml(alt)} – posle" width="${W}" height="${H}" loading="lazy" decoding="async" draggable="false"></div>
        <span class="ba__label ba__label--before" aria-hidden="true">Pre</span>
        <span class="ba__label ba__label--after" aria-hidden="true">Posle</span>
        <div class="ba__handle">
          <button class="ba__knob" type="button" role="slider" aria-label="Poređenje pre i posle: ${escapeHtml(alt)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-valuetext="50% – pola pre, pola posle">
            <svg aria-hidden="true"><use href="#i-chev-left"/></svg><svg aria-hidden="true"><use href="#i-chev-right"/></svg>
          </button>
        </div>`;

      const [imgBefore, imgAfter] = $$('img', frame);
      const knob = $('.ba__knob', frame);
      const lblBefore = $('.ba__label--before', frame);
      const lblAfter = $('.ba__label--after', frame);

      function place(img, [x0, y0, x1, y1]) {
        const fw = frame.clientWidth, fh = frame.clientHeight;
        if (!fw || !fh) return;
        const rw = (x1 - x0) * W, rh = (y1 - y0) * H;
        const s = Math.max(fw / rw, fh / rh);
        img.style.width = `${W * s}px`;
        img.style.height = `${H * s}px`;
        img.style.left = `${-x0 * W * s - (rw * s - fw) / 2}px`;
        img.style.top = `${-y0 * H * s - (rh * s - fh) / 2}px`;
      }
      const layout = () => { place(imgBefore, regions.before); place(imgAfter, regions.after); };
      layout();
      if ('ResizeObserver' in window) new ResizeObserver(layout).observe(frame);
      else window.addEventListener('resize', layout);

      let pos = 50;
      function setPos(v) {
        pos = clamp(v, 0, 100);
        frame.style.setProperty('--pos', `${pos}%`);
        knob.setAttribute('aria-valuenow', String(Math.round(pos)));
        knob.setAttribute('aria-valuetext', `${Math.round(pos)}% – levo pre, desno posle`);
        lblBefore.style.opacity = pos < 14 ? '0' : '1';
        lblAfter.style.opacity = pos > 86 ? '0' : '1';
      }
      setPos(50);

      const fromEvent = (e) => {
        const r = frame.getBoundingClientRect();
        return ((e.clientX - r.left) / r.width) * 100;
      };
      let dragging = false;
      frame.addEventListener('pointerdown', (e) => {
        if (e.button !== undefined && e.button !== 0) return;
        dragging = true;
        fig.classList.add('is-dragging');
        frame.setPointerCapture(e.pointerId);
        setPos(fromEvent(e));
        knob.focus({ preventScroll: true });
      });
      frame.addEventListener('pointermove', (e) => { if (dragging) setPos(fromEvent(e)); });
      const stop = () => { dragging = false; fig.classList.remove('is-dragging'); };
      frame.addEventListener('pointerup', stop);
      frame.addEventListener('pointercancel', stop);
      frame.addEventListener('lostpointercapture', stop);

      knob.addEventListener('keydown', (e) => {
        const step = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5, PageDown: -20, PageUp: 20 }[e.key];
        if (step !== undefined) { e.preventDefault(); setPos(pos + step); }
        if (e.key === 'Home') { e.preventDefault(); setPos(0); }
        if (e.key === 'End') { e.preventDefault(); setPos(100); }
      });

      // kratka „najava“ da se klizač može pomerati, kad se slajder prvi put pojavi
      if (!reduceMotion && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          if (!entries[0].isIntersecting) return;
          io.disconnect();
          const keys = [[0, 50], [450, 32], [1000, 68], [1450, 50]];
          const start = performance.now() + 500;
          const tick = (now) => {
            if (dragging) return;
            const t = now - start;
            if (t < 0) { requestAnimationFrame(tick); return; }
            let i = 0;
            while (i < keys.length - 2 && t > keys[i + 1][0]) i++;
            const [ta, va] = keys[i], [tb, vb] = keys[i + 1];
            const k = clamp((t - ta) / (tb - ta), 0, 1);
            setPos(lerp(va, vb, (1 - Math.cos(Math.PI * k)) / 2));
            if (t < keys[keys.length - 1][0]) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }, { threshold: 0.6 });
        io.observe(frame);
      }
    });
  }

  /* ======================================================================
     GALERIJA – lightbox (klik = uvećanje, strelice, X i ESC, prevlačenje)
     ====================================================================== */
  function initLightbox() {
    const box = $('#lightbox');
    if (!box) return;
    const buttons = $$('.gallery__btn');
    const img = $('#lightbox-img');
    const cap = $('#lightbox-caption');
    const counter = $('#lightbox-counter');
    const items = buttons.map((b) => {
      const i = $('img', b);
      return { src: i.getAttribute('src'), alt: i.alt, caption: $('.gallery__caption', b.parentElement).textContent };
    });
    let index = 0, lastFocus = null;

    function show(i) {
      index = (i + items.length) % items.length;
      const it = items[index];
      img.src = it.src;
      img.alt = it.alt;
      cap.textContent = `${it.caption} – ${it.alt}`;
      counter.textContent = `${index + 1} / ${items.length}`;
    }
    function open(i) {
      lastFocus = document.activeElement;
      show(i);
      box.hidden = false;
      document.body.classList.add('lightbox-open');
      document.documentElement.style.overflow = 'hidden';
      $('.lightbox__close', box).focus();
    }
    function close() {
      box.hidden = true;
      document.body.classList.remove('lightbox-open');
      document.documentElement.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    }

    buttons.forEach((b, i) => {
      b.setAttribute('aria-label', `Uvećaj fotografiju: ${items[i].caption}`);
      b.addEventListener('click', () => open(i));
    });
    $$('[data-lb-close]', box).forEach((el) => el.addEventListener('click', close));
    $('#lb-prev').addEventListener('click', () => show(index - 1));
    $('#lb-next').addEventListener('click', () => show(index + 1));

    box.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'ArrowLeft') show(index - 1);
      else if (e.key === 'ArrowRight') show(index + 1);
      else if (e.key === 'Tab') {
        // fokus ostaje unutar lightbox-a
        const f = $$('button', box);
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // prevlačenje prstom levo/desno
    let sx = null;
    box.addEventListener('pointerdown', (e) => { sx = e.clientX; });
    box.addEventListener('pointerup', (e) => {
      if (sx === null) return;
      const dx = e.clientX - sx;
      sx = null;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    });
  }

  /* ======================================================================
     MAJSTORSKE USLUGE – kategorije, pretraga, filter i harmonika
     ====================================================================== */
  function initHandyman() {
    const section = $('#majstorske-usluge');
    if (!SHOW_HANDYMAN) {
      if (section) section.remove();
      $$('[data-handyman-nav]').forEach((el) => el.remove());
      return;
    }
    if (!section) return;
    section.hidden = false;

    const list = $('#handyman-list');
    const chips = $('#handyman-chips');
    const search = $('#handyman-search');
    const empty = $('#handyman-empty');
    let activeCat = 'all';

    chips.innerHTML = [`<button type="button" class="chip" data-cat="all" aria-pressed="true">Sve</button>`]
      .concat(HANDYMAN_PRICES.map((g, i) => `<button type="button" class="chip" data-cat="${i}" aria-pressed="false">${escapeHtml(g.kategorija)}</button>`))
      .join('');

    list.innerHTML = HANDYMAN_PRICES.map((g, i) => `
      <div class="acc${i === 0 ? ' is-open' : ''}" data-cat="${i}">
        <h3 class="acc__head" style="margin:0">
          <button type="button" class="acc__btn" id="acc-btn-${i}" aria-expanded="${i === 0}" aria-controls="acc-panel-${i}">
            <span class="acc__icon"><svg aria-hidden="true"><use href="#${g.ikonica || 'i-hammer'}"/></svg></span>
            <span class="acc__title">${escapeHtml(g.kategorija)}</span>
            <span class="acc__count">${g.stavke.length}</span>
            <svg class="acc__chev" aria-hidden="true"><use href="#i-chev-down"/></svg>
          </button>
        </h3>
        <div class="acc__panel" id="acc-panel-${i}" role="region" aria-labelledby="acc-btn-${i}">
          <div class="acc__inner">
            <ul class="price-list">${g.stavke.map((s) => `<li data-name="${escapeHtml(s.naziv)}"><span class="price-list__name">${escapeHtml(s.naziv)}</span><span class="price-list__dots" aria-hidden="true"></span><span class="price-list__price">${escapeHtml(formatPrice(s.cena))}</span></li>`).join('')}</ul>
          </div>
        </div>
      </div>`).join('');

    const accs = $$('.acc', list);
    function setOpen(acc, open) {
      acc.classList.toggle('is-open', open);
      $('.acc__btn', acc).setAttribute('aria-expanded', String(open));
      $('.acc__inner', acc).toggleAttribute('inert', !open);
    }
    accs.forEach((acc) => {
      setOpen(acc, acc.classList.contains('is-open'));
      $('.acc__btn', acc).addEventListener('click', () => setOpen(acc, !acc.classList.contains('is-open')));
    });

    function highlight(name, q) {
      if (!q) return escapeHtml(name);
      const i = fold(name).indexOf(q);
      if (i < 0) return escapeHtml(name);
      return `${escapeHtml(name.slice(0, i))}<mark>${escapeHtml(name.slice(i, i + q.length))}</mark>${escapeHtml(name.slice(i + q.length))}`;
    }

    function apply() {
      const q = fold(search.value.trim());
      let total = 0;
      accs.forEach((acc) => {
        const inCat = activeCat === 'all' || acc.dataset.cat === activeCat;
        let count = 0;
        $$('li', acc).forEach((li) => {
          const name = li.dataset.name;
          const match = !q || fold(name).includes(q);
          li.hidden = !match;
          $('.price-list__name', li).innerHTML = highlight(name, q);
          if (match) count++;
        });
        const visible = inCat && count > 0;
        acc.hidden = !visible;
        $('.acc__count', acc).textContent = String(count);
        if (visible && (q || activeCat !== 'all')) setOpen(acc, true);
        if (visible) total += count;
      });
      empty.hidden = total > 0;
    }

    search.addEventListener('input', apply);
    chips.addEventListener('click', (e) => {
      const b = e.target.closest('.chip');
      if (!b) return;
      activeCat = b.dataset.cat;
      $$('.chip', chips).forEach((c) => c.setAttribute('aria-pressed', String(c === b)));
      apply();
    });
  }

  /* ======================================================================
     FORMA ZA PROCENU – WhatsApp ili e-mail (bez servera)
     ====================================================================== */
  function initForm() {
    const form = $('#quote-form');
    if (!form) return;
    const select = $('#f-service');
    const status = $('#quote-status');

    const options = CONFIG.services.concat(SHOW_HANDYMAN ? ['Majstorske usluge'] : [], ['Drugo']);
    options.forEach((s) => select.add(new Option(s, s)));

    // dugmad „Zatražite procenu“ unapred biraju uslugu
    $$('[data-service]').forEach((a) => a.addEventListener('click', () => {
      const v = a.getAttribute('data-service');
      if (options.includes(v)) { select.value = v; clearError(select); }
    }));

    const fields = {
      name: $('#f-name'),
      phone: $('#f-phone'),
      service: select,
      address: $('#f-address'),
      message: $('#f-message')
    };

    function setError(input, msg) {
      const field = input.closest('.field');
      field.classList.add('has-error');
      input.setAttribute('aria-invalid', 'true');
      $('.field__error', field).textContent = msg;
    }
    function clearError(input) {
      const field = input.closest('.field');
      field.classList.remove('has-error');
      input.removeAttribute('aria-invalid');
      const err = $('.field__error', field);
      if (err) err.textContent = '';
    }
    Object.values(fields).forEach((f) => f.addEventListener('input', () => clearError(f)));
    select.addEventListener('change', () => clearError(select));

    function validate() {
      let firstBad = null;
      const name = fields.name.value.trim();
      const digits = fields.phone.value.replace(/\D/g, '');
      if (name.length < 2) { setError(fields.name, 'Unesite ime i prezime.'); firstBad = firstBad || fields.name; }
      if (!fields.phone.value.trim()) { setError(fields.phone, 'Unesite broj telefona.'); firstBad = firstBad || fields.phone; }
      else if (!/^[+\d\s()/.-]+$/.test(fields.phone.value.trim()) || digits.length < 8 || digits.length > 15) {
        setError(fields.phone, 'Broj telefona nije ispravan (npr. 069 200 6808).'); firstBad = firstBad || fields.phone;
      }
      if (!select.value) { setError(select, 'Izaberite uslugu.'); firstBad = firstBad || select; }
      if (firstBad) firstBad.focus();
      return !firstBad;
    }

    function buildMessage() {
      const lines = [
        `Zdravo, želim procenu za: ${select.value}`,
        `Ime: ${fields.name.value.trim()}`,
        `Telefon: ${fields.phone.value.trim()}`
      ];
      if (fields.address.value.trim()) lines.push(`Adresa: ${fields.address.value.trim()}`);
      if (fields.message.value.trim()) lines.push(`Poruka: ${fields.message.value.trim()}`);
      return lines.join('\n');
    }

    let via = 'whatsapp';
    $$('[data-send]', form).forEach((b) => b.addEventListener('click', () => { via = b.dataset.send; }));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const sender = e.submitter && e.submitter.dataset.send ? e.submitter.dataset.send : via;
      status.textContent = '';
      if (!validate()) return;
      const msg = buildMessage();
      if (sender === 'email') {
        const subject = `Zahtev za procenu – ${select.value}`;
        window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg.replace(/\n/g, '\r\n'))}`;
        status.textContent = 'Otvaramo vaš program za e-poštu… Poruka je već popunjena, samo je pošaljite.';
      } else {
        const url = waUrl(msg);
        const win = window.open(url, '_blank', 'noopener');
        if (!win) window.location.href = url;
        status.textContent = 'Otvaramo WhatsApp… Poruka je već popunjena, samo pritisnite „Pošalji“.';
      }
    });
  }

  /* ======================================================================
     ANIMACIJE PRI SKROLU (fade-in / slide-up)
     ====================================================================== */
  function initReveal() {
    const els = $$('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    // blago kašnjenje za elemente u istom roditelju (kaskada)
    const groups = new Map();
    els.forEach((el) => {
      const p = el.parentElement;
      const i = groups.get(p) || 0;
      el.style.setProperty('--d', `${Math.min(i * 0.08, 0.4)}s`);
      groups.set(p, i + 1);
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => io.observe(el));
  }

  /* ---------- POKRETANJE ---------- */
  applyConfig();
  initIntro();
  initHeader();
  renderPrices();
  initTabs();
  initHandyman();
  initBeforeAfter();
  initLightbox();
  initForm();
  initReveal();
})();
