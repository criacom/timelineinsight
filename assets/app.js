/* Microjogo CRIACOM Vol. 14 · lógica da interface */
"use strict";
const DATA = window.DATA, SPR = window.SPR;
const CONFIG = { hub: "https://criacom.github.io/microjogos/", vol: 14, key: "criacom-vol14-v1" };
/* ====================== ilustrações em pixel art (desenhadas para este microjogo) ====================== */
const ART_PAL = {
  k: '#07081a', w: '#f1efe6', g: '#9aa0c8', G: '#4a4f86', d: '#23264a', y: '#f5cf3b', Y: '#c98500', o: '#f2762e', r: '#e8442e',
  b: '#6e4321', B: '#c98a4b', p: '#9fb2e0', P: '#5d6fa8', n: '#3bb36a', N: '#1f7a45', t: '#e2c48a', T: '#b8955a', s: '#e0aa70',
  h: '#4d3220', H: '#8a5a34', c: '#7fd3ee', C: '#3987e5', m: '#e45a93', e: '#f09ab8', v: '#3a2a5e',
};
const SPRITES = {
  pombo: ['......kkk..', '.....kpppk.', '.....kpwpko', '....kpppk..', '.kkkpppppk.', 'kPPPppppk..', 'kPPPpppPk..', '.kkPPPPk...', '...o..o....'],
  pomboDorme: ['...........', '.....kkk...', '....kpppk..', '....kpkpko.', '.kkkpppppk.', 'kPPPppppk..', 'kPPPpppPk..', '.kkPPPPk...', '...o..o....'],
  pomboBica: ['.......kkk.', '......kpwpk', '.....kpppko', '....kpppk..', '.kkkpppk...', 'kPPPpppk...', 'kPPPppPk...', '.kkPPPk....', '...o..o....'],
  rato: ['.........ee...', '..kkkkkkkkek..', '.kgggggggggkk.', 'kggggggggggwgk', 'kgggggggggggge', '.kggkkkkggkkk.', 'e.kk....kk....', '.e............'],
  ratoSobe: ['...ee...', '..kggk..', '..kgwgk.', '..kgggge', '.kggggk.', 'kgggggk.', 'kgggggk.', 'kggggk..', '.kgggk..', '.kgkgk..', 'ee.k.k..', 'e.......'],
  caixa: ['kkkkkkkkkk', 'kBBBBBBBBk', 'kBbBBBBbBk', 'kBBbBBbBBk', 'kBBBbbBBBk', 'kBBbBBbBBk', 'kkkkkkkkkk'],
  cubo: ['gggggggg', 'gw.....g', 'g.....cg', 'g......g', 'g.c....g', 'gggggggg'],
  banana: ['......k', '.....yk', '....yy.', '.yyyyY.', 'yyyYY..'],
  macaco: ['...kkkk....', '..khhhhk...', '.khsssshk..', '.khskskhk..', '..ksssk....', '..khhhhk...', '.khhhhhhk..', 'khhhhhhhhk.', 'khhHhhhhhkh', '.khhhhhhk.h', '.khk..khk.h', '.kk....kk..'],
  chimpa: ['.........kk.', '........khk.', '...kkk..khk.', '..khhhk.khk.', '.khssshkhk..', '.khsksshk...', '..kssssk....', '..khhhhhk...', '.khhhhhhk...', 'khhkhhhhk...', 'khk.khhhk...', 'kk..khhhk...', '....khkhk...', '....khkhk...', '...khk.khk..', '...kk...kk..'],
  arvore: ['.....kkkkkk.....', '...kknnnnnnkk...', '..knnnNnnnnnnk..', '.knnnnnnnnNnnnk.', 'knnNnnnnnnnnnnnk', 'knnnnnnnNnnnnNnk', 'knNnnnnnnnnnnnnk', '.knnnnNnnnnnnnk.', '..kknnnnnnnNkk..', '....kkkbbkkk....', '......kbbk......', '......kbbk......', '......kbbk......', '......kbbk......', '.....kbbbbk.....', '....kbbkkbbk....'],
  palmeira: ['..nn....nn..', '.nnNn..nNnn.', 'nn..nnnn..nn', 'n...nNNn...n', '.....bb.....', '.....bb.....', '.....bb.....', '....bb......', '....bb......', '....bb......', '...bbb......'],
  humano: ['..kkkk..', '.kbbbbk.', '.kssssk.', '.kskssk.', '..kssk..', '.kCCCCk.', 'kCCCCCCk', 'kCkCCkCk', 'ksGGGGsk', '.kCCCCk.', '.kddddk.', '.kdkkdk.', '.kdk.dk.', '.kk..kk.'],
  abelha: ['.....kk..kk.....', '....kwwkkwwk....', '....kwcwkwcwk...', '.....kkkkkkk....', '..kkyykkyykkkk..', '.kyyykkyyykkkwk.', '.kyyykkyyykkkkk.', '..kkyykkyykkkk..', '...kk.kk.kk.....'],
  bola: ['.kkkk.', 'koowok', 'kooook', 'koooor', 'kroorr', '.kkkk.'],
  florA: ['..m.m..', '.mmymm.', 'mmyyymm', '.mmymm.', '..m.m..', '...n...'],
  flor: ['.m.', 'mym', '.m.', '.n.', 'nn.', '.n.'],
  corvo: ['......kkk.', '.....kdwdkG', '....kdddk..', '.kkkdddddk.', 'kdddddddk..', 'kddGddddk..', '.kkdddk....', '...G..G....'],
  brilho: ['..y..', '..y..', 'yywyy', '..y..', '..y..'],
  z: ['www', '..w', '.w.', 'w..', 'www'],
  d2: ['yyy', '..y', 'yyy', 'y..', 'yyy'], d0: ['yyy', 'y.y', 'y.y', 'y.y', 'yyy'],
  portalA: ['.c.', 'cCc', 'c.c', 'c.c', 'c.c', 'cCc', '.c.'],
  portalB: ['.m.', 'mrm', 'm.m', 'm.m', 'm.m', 'mrm', '.m.'],
  escada: ['g.....g', 'ggggggg', 'g.....g', 'g.....g', 'ggggggg', 'g.....g', 'g.....g', 'ggggggg', 'g.....g', 'g.....g', 'ggggggg', 'g.....g', 'g.....g', 'ggggggg', 'g.....g'],
  cao: ['.........kk.', '........kBBk', '.......kBBwk', '.k.....kBBBBo', 'kBk...kBBBk.', '.kBBBBBBBBk.', '.kBBBBBBBk..', '.kBk...kBk..', '.kk.....kk..'],
};
function artGrid(w, h) { return Array.from({ length: h }, () => Array(w).fill('.')); }
function stamp(G, sp, x, y, flip) {
  const rows = SPRITES[sp] || sp;
  rows.forEach((row, j) => { for (let i = 0; i < row.length; i++) { const ch = row[flip ? row.length - 1 - i : i]; if (ch !== '.' && G[y + j] && x + i >= 0 && x + i < G[0].length) G[y + j][x + i] = ch; } });
}
const hline = (G, x0, x1, y, ch) => { for (let x = x0; x <= x1; x++) if (G[y] && x >= 0 && x < G[0].length) G[y][x] = ch; };
const vline = (G, x, y0, y1, ch, alt) => { for (let y = y0; y <= y1; y++) if (G[y]) G[y][x] = alt && (y % 2) ? alt : ch; };
function gridSvg(G, scale, cls) {
  const h = G.length, w = G[0].length; let r = '';
  for (let y = 0; y < h; y++) { let x = 0; while (x < w) { const ch = G[y][x]; if (ch === '.') { x++; continue; } let n = 1; while (x + n < w && G[y][x + n] === ch) n++; r += `<rect x="${x}" y="${y}" width="${n}" height="1" fill="${ART_PAL[ch] || ch}"/>`; x += n; } }
  return `<svg class="${cls || 'pix'}" viewBox="0 0 ${w} ${h}" width="${w * scale}" height="${h * scale}" shape-rendering="crispEdges" aria-hidden="true">${r}</svg>`;
}
const SCENES = {
  pro: G => { // Köhler: caixas empilhadas e banana no alto
    hline(G, 0, 51, 33, 'G'); stamp(G, 'caixa', 22, 26); stamp(G, 'caixa', 24, 19); stamp(G, 'chimpa', 23, 3);
    vline(G, 36, 0, 1, 'g'); stamp(G, 'banana', 33, 1); hline(G, 4, 15, 32, 'B'); hline(G, 6, 13, 31, 'b'); stamp(G, 'caixa', 39, 26); stamp(G, 'brilho', 44, 4);
  },
  e1: G => { // pombo empurra a caixa e bica a banana
    hline(G, 0, 51, 33, 'G'); for (let x = 3; x < 18; x += 2) G[32][x] = 'g'; G[31][17] = 'g'; G[32][18] = 'g';
    stamp(G, 'caixa', 20, 26); stamp(G, 'pomboBica', 20, 17); vline(G, 29, 0, 9, 'g'); stamp(G, 'banana', 26, 10);
    hline(G, 38, 43, 33, 'n'); hline(G, 39, 42, 32, 'n'); stamp(G, 'brilho', 44, 3);
  },
  e2: G => { // Belém: mangueira, rio, rato no cubo puxando a corrente
    stamp(G, 'arvore', 1, 14); hline(G, 0, 51, 30, 'G'); for (let x = 0; x < 52; x++) { G[31][x] = x % 4 < 2 ? 'C' : 'c'; G[32][x] = (x + 2) % 4 < 2 ? 'C' : 'd'; G[33][x] = 'd'; }
    stamp(G, 'cubo', 27, 24); stamp(G, 'ratoSobe', 27, 12); vline(G, 31, 0, 10, 'g', 'G'); hline(G, 30, 32, 11, 'g'); stamp(G, 'palmeira', 40, 19);
    G[14][36] = 'c'; G[15][36] = 'c'; G[15][35] = 'c'; G[15][37] = 'c'; G[16][36] = 'c';
  },
  e3: G => { // cavar e escalar: maravalha, passagem, escadas e cereal
    hline(G, 0, 51, 33, 'G'); for (let y = 27; y <= 32; y++) hline(G, 0, 32 - (y < 30 ? 33 - y : 0), y, (y + 1) % 3 ? 't' : 'T');
    vline(G, 23, 4, 28, 'c'); stamp(G, 'rato', 4, 22); stamp(G, 'escada', 34, 19); hline(G, 33, 51, 18, 'G'); stamp(G, 'escada', 42, 4);
    hline(G, 41, 51, 3, 'G'); G[2][47] = 'o'; G[2][48] = 'y'; G[1][48] = 'o'; G[2][49] = 'o'; stamp(G, 'brilho', 12, 6);
  },
  e4: G => { // Portal 2 vira laboratório: monitor, portais, laser e cubo
    hline(G, 0, 51, 33, 'G'); hline(G, 14, 49, 0, 'k'); for (let y = 1; y < 20; y++) { G[y][14] = 'k'; G[y][49] = 'k'; hline(G, 15, 48, y, y === 1 || y === 19 ? 'G' : 'd'); }
    hline(G, 14, 49, 20, 'k'); hline(G, 27, 36, 21, 'G'); hline(G, 24, 39, 22, 'k');
    stamp(G, 'portalA', 18, 6); stamp(G, 'portalB', 42, 10); hline(G, 21, 41, 9, 'r'); hline(G, 21, 26, 12, 'r'); stamp(G, ['ggg', 'gwg', 'ggg'], 29, 14);
    for (let x = 16; x < 48; x += 3) G[18][x] = 'G'; stamp(G, 'humano', 3, 19);
  },
  e5: G => { // pombos jogando videogame na tela sensível ao toque; vinte anos de linha brasileira
    hline(G, 0, 51, 33, 'G'); hline(G, 18, 47, 3, 'k'); for (let y = 4; y < 27; y++) { G[y][18] = 'k'; G[y][47] = 'k'; hline(G, 19, 46, y, y === 4 || y === 26 ? 'G' : 'k'); }
    hline(G, 18, 47, 27, 'k'); hline(G, 21, 44, 12, 'w'); vline(G, 32, 6, 12, 'w'); vline(G, 38, 12, 22, 'w'); hline(G, 21, 30, 19, 'w');
    stamp(G, ['.mm.', 'mmmm', 'mmmm', '.mm.'], 24, 21); stamp(G, 'banana', 40, 6); hline(G, 23, 25, 8, 'c'); vline(G, 24, 7, 9, 'c');
    stamp(G, 'pomboBica', 7, 24); stamp(G, 'd2', 2, 2); stamp(G, 'd0', 6, 2); stamp(G, 'brilho', 11, 10);
  },
  gap: G => { // doze anos sem estudos: o pombo cochila
    hline(G, 0, 51, 33, 'G'); stamp(G, 'caixa', 20, 26); stamp(G, 'pomboDorme', 20, 17); stamp(G, 'z', 32, 13); stamp(G, ['ww', '.w', 'ww'], 37, 8); G[4][41] = 'w';
    for (let i = 0; i < 7; i++) { G[i][51 - i] = 'g'; G[i][51] = 'g'; G[0][51 - i] = 'g'; } G[3][48] = 'g'; G[3][49] = 'g'; G[3][50] = 'g';
  },
  epi: G => { // mamangava leva a bola até sob a flor artificial e sobe nela
    hline(G, 0, 51, 33, 'G'); vline(G, 49, 3, 32, 'G'); hline(G, 30, 49, 3, 'G'); vline(G, 33, 4, 5, 'g'); stamp(G, 'florA', 30, 6);
    stamp(G, 'bola', 30, 27); stamp(G, 'abelha', 25, 18); for (let x = 4; x < 28; x += 3) G[32][x] = 'g';
    stamp(G, 'flor', 6, 27); stamp(G, 'flor', 11, 28); stamp(G, 'brilho', 41, 12); stamp(G, 'brilho', 18, 6);
  },
};
function pixScene(key, scale, cls) { const G = artGrid(52, 34); SCENES[key](G); return gridSvg(G, scale || 4, cls); }

(function () {
'use strict';
/* ====================== utilidades ====================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const md = s => esc(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
const pad = (n, k = 2) => String(n).padStart(k, '0');
const fmt = (x, d = 1) => x.toFixed(d).replace('.', ',');
const REDUCE = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const ST = DATA.studies.slice().sort((a, b) => a.n - b.n);
/* Figuras: mescla a lista de img/figuras.js (window.FIGURAS) nas fichas. */
(function mergeFiguras() {
  const F = window.FIGURAS || {};
  ST.forEach(s => {
    const L = (F[s.n] || []).filter(f => f && f.arquivo && !(window.FIGURAS_OCULTAR_FECHADAS && /^©/.test(f.licenca || '')));
    if (L.length) s.media = L.map(f => ({ src: 'img/' + f.arquivo, thumb: 'img/t/' + f.arquivo, cap: f.legenda || '', alt: f.alt || f.legenda || s.ap,
      credit: f.credito || (s.ref + (f.figura ? ', ' + f.figura : '')), lic: f.licenca || s.lic }));
  });
})();
const byN = {}; ST.forEach(s => (byN[s.n] = s));
const ERAS = DATA.eras; const eraById = {}; ERAS.forEach((e, i) => { eraById[e.id] = e; e.idx = i; });
const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

/* ====================== espécies e ícones pixelados ====================== */
const SP = {
  'Pombo': { k: 'pombo', v: '--sp-pombo', pl: 'Pombos', sci: 'Columba livia' },
  'Rato': { k: 'rato', v: '--sp-rato', pl: 'Ratos', sci: 'Rattus norvegicus' },
  'Humano': { k: 'humano', v: '--sp-humano', pl: 'Humanos', sci: 'Homo sapiens' },
  'Macaco-prego': { k: 'macaco', v: '--sp-macaco', pl: 'Macacos-prego', sci: 'Sapajus spp.' },
  'Corvo': { k: 'corvo', v: '--sp-corvo', pl: 'Corvos', sci: 'Corvus moneduloides' },
  'Cão': { k: 'cao', v: '--sp-cao', pl: 'Cães', sci: 'Canis lupus familiaris' },
};
const SP_ORDER = ['Pombo', 'Rato', 'Humano', 'Macaco-prego', 'Corvo', 'Cão'];
const PIX = {
  pombo: ['............', '........##..', '.......####.', '.......#####', '......####..', '..########..', '.#########..', '##########..', '..#######...', '....#..#....', '....#..#....', '............'],
  rato: ['............', '............', '............', '.##.........', '####........', '#######.....', '.#########..', '..#########.', '...#....#..#', '..........#.', '............', '............'],
  humano: ['.....##.....', '....####....', '....####....', '.....##.....', '...######...', '..#.####.#..', '..#.####.#..', '....####....', '....#..#....', '....#..#....', '...##..##...', '............'],
  macaco: ['....####....', '...######...', '..##.##.##..', '..########..', '...######...', '....####....', '..########..', '.##.####.##.', '....####...#', '....#..#..#.', '...##..##.#.', '............'],
  corvo: ['............', '........###.', '.......#####', '.......####.', '......####..', '...######...', '.########...', '#########...', '..######....', '....#.#.....', '...##.##....', '............'],
  cao: ['............', '.........##.', '........####', '........####', '#.......###.', '.#######.##.', '.#########..', '.########...', '.##....##...', '.#......#...', '.#......#...', '............'],
};
const iconCache = {};
function icon(k) {
  if (iconCache[k]) return iconCache[k];
  const rows = PIX[k]; let r = '';
  rows.forEach((row, y) => { let x = 0; while (x < row.length) { if (row[x] === '#') { let w = 0; while (row[x + w] === '#') w++; r += `<rect x="${x}" y="${y}" width="${w}" height="1"/>`; x += w; } else x++; } });
  return (iconCache[k] = `<svg viewBox="0 0 12 12" shape-rendering="crispEdges" fill="currentColor" aria-hidden="true">${r}</svg>`);
}
const spIcon = sp => icon(SP[sp].k);
const spVar = sp => `var(${SP[sp].v})`;

/* ====================== desfechos (matriz de sujeitos) ====================== */
const STATES = {
  I: { l: 'Resolveu com topografia de insight (critério dos autores)', f: 'ins' },
  C: { l: 'Codificado como insight só na Tabela 1 (autores não classificam)', f: 'ins' },
  S: { l: 'Resolveu, sem topografia de insight', f: 'res' },
  R: { l: 'Resolveu; a fonte não avalia a topografia', f: 'res' },
  T: { l: 'Resolveu só depois (reteste, treino extra ou ajuda)', f: 'tar' },
  P: { l: 'Resolveu antes do treino', f: 'tar' },
  A: { l: 'Chegou à consequência por outra via', f: 'tar' },
  N: { l: 'Não resolveu', f: 'nao' },
  X: { l: 'Não testado ou excluído', f: 'sem' },
  Q: { l: 'Sem desfecho individual nesta base', f: 'sem' },
};
const FAM = { ins: ['--o-ins', 'Insight'], res: ['--o-res', 'Resolveu'], tar: ['--o-tar', 'Depois, antes ou por outra via'], nao: ['--o-nao', 'Não resolveu'], sem: ['--o-sem', 'Sem dado ou não testado'] };
const tok = (st, label, note, sm) => `<span class="tok st-${st}${sm ? ' sm' : ''}" tabindex="0" data-tt="${esc(label)}" data-tb="${esc(STATES[st].l + (note ? ' · ' + note : ''))}">${sm ? '' : (st === 'Q' ? '?' : st)}</span>`;

/* ====================== estado salvo ====================== */
const DEF = { pts: 0, seen: {}, tabs: {}, ach: {}, quiz: {}, note: [], sound: true, cur: 'pro', terms: {}, misc: {}, spot: {} };
let S;
function load() { let j = null; try { j = JSON.parse(localStorage.getItem(CONFIG.key)); } catch (e) { j = null; } S = Object.assign(JSON.parse(JSON.stringify(DEF)), j || {}); }
function save() { try { localStorage.setItem(CONFIG.key, JSON.stringify(S)); } catch (e) { /* armazenamento indisponível: segue sem salvar */ } }
load();

/* ====================== som (Web Audio, chiptune) ====================== */
let AC = null;
function beep(seq) {
  if (!S.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    let t = AC.currentTime;
    seq.forEach(([f, d, type, v]) => { const o = AC.createOscillator(), g = AC.createGain(); o.type = type || 'square'; o.frequency.value = f; g.gain.setValueAtTime(v || 0.04, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d); o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + d); t += d * 0.92; });
  } catch (e) { /* sem áudio */ }
}
const SFX = {
  step: () => beep([[196, 0.035, 'square', 0.018]]), open: () => beep([[392, 0.06], [523, 0.06], [659, 0.1]]), tab: () => beep([[880, 0.03, 'square', 0.02]]),
  ach: () => beep([[523, 0.08], [659, 0.08], [784, 0.08], [1046, 0.2]]), right: () => beep([[660, 0.07], [990, 0.14]]), wrong: () => beep([[220, 0.12, 'sawtooth', 0.03], [165, 0.2, 'sawtooth', 0.03]]), coin: () => beep([[988, 0.05], [1319, 0.12]])
};

/* ====================== pontos, níveis, conquistas ====================== */
const RANKS = [[0, 'Calouro(a)'], [100, 'Voluntário(a) de lab'], [300, 'Bolsista de IC'], [600, 'Mestrando(a)'], [1000, 'Doutorando(a)'], [1500, 'Pós-doc'], [2200, 'Orientador(a)'], [3100, 'Ultra Behaviorist']];
const rankOf = p => RANKS.reduce((r, [v, n]) => (p >= v ? n : r), RANKS[0][1]);
const nSeen = () => ST.filter(s => S.seen[s.n]).length;
const allSp = sp => ST.filter(s => s.sp === sp).every(s => S.seen[s.n]);
const eraDone = id => ST.filter(s => s.era === id).every(s => S.seen[s.n]);
const tabCount = t => Object.keys(S.tabs).filter(n => (S.tabs[n] || []).includes(t)).length;
const quizCorrect = () => Object.values(S.quiz).reduce((a, q) => a + (q.first || []).filter(Boolean).length, 0);
const albumOpen = a => a.ns.some(n => S.seen[n]);
const BASTN = ST.filter(s => s.bast.length).map(s => s.n);
const ACH = [
  { id: 'start', b: '▶', n: 'Início', d: 'Começou a jornada.', t: () => !!S.misc.started },
  { id: 'first', b: '1', n: 'Primeira anotação', d: 'Abriu a primeira ficha.', t: () => nSeen() >= 1 },
  { id: 'ten', b: '10', n: 'Dez fichas', d: 'Leu 10 estudos.', t: () => nSeen() >= 10 },
  { id: 'half', b: '22', n: 'Metade dos estudos', d: 'Leu 22 estudos.', t: () => nSeen() >= 22 },
  { id: 'all', b: '43', n: 'Todos os estudos', d: 'Leu os 43 estudos.', t: () => nSeen() >= 43 },
  { id: 'sp-pombo', sp: 'Pombo', n: 'Estudos com pombos', d: 'Leu todos os estudos com pombos.', t: () => allSp('Pombo') },
  { id: 'sp-rato', sp: 'Rato', n: 'Estudos com ratos', d: 'Leu todos os estudos com ratos.', t: () => allSp('Rato') },
  { id: 'sp-humano', sp: 'Humano', n: 'Estudos com humanos', d: 'Leu todos os estudos com humanos.', t: () => allSp('Humano') },
  { id: 'sp-macaco', sp: 'Macaco-prego', n: 'Estudos com macacos-prego', d: 'Leu todos os estudos com macacos-prego.', t: () => allSp('Macaco-prego') },
  { id: 'sp-corvo', sp: 'Corvo', n: 'Estudos com corvos', d: 'Leu os dois estudos com corvos.', t: () => allSp('Corvo') },
  { id: 'sp-cao', sp: 'Cão', n: 'Estudo com cães', d: 'Leu o estudo com cães.', t: () => allSp('Cão') },
  ...ERAS.map((e, i) => ({ id: 'era-' + e.id, b: ROMAN[i], n: 'Era ' + ROMAN[i] + ' completa', d: e.nome + ' (' + e.de + '–' + e.ate + ').', t: () => eraDone(e.id) })),
  { id: 'prolog', b: 'K', n: 'Prólogo e epílogo', d: 'Visitou o prólogo e o epílogo.', t: () => S.seen.pro && S.seen.epi },
  { id: 'bast', b: '☼', n: 'Bastidores', d: 'Leu todas as notas de bastidores.', t: () => BASTN.every(n => (S.tabs[n] || []).includes('bast')) },
  { id: 'aud', b: '!', n: 'Auditor(a)', d: 'Abriu a aba "Insight?" de 10 estudos em que a Tabela 1 diverge da fonte.', t: () => ST.filter(s => s.flag === 'diverge' && (S.tabs[s.n] || []).includes('insight')).length >= 10 },
  { id: 'lim', b: '⚠', n: 'Leitor(a) de limitações', d: 'Leu a aba Limitações de 15 estudos.', t: () => tabCount('lim') >= 15 },
  { id: 'mx', b: '▦', n: 'Matrizes de sujeitos', d: 'Viu a matriz de sujeitos de 20 estudos.', t: () => tabCount('sujeitos') >= 20 },
  { id: 'quiz1', b: '?', n: 'Primeiro desafio', d: 'Terminou um desafio de era.', t: () => Object.values(S.quiz).some(q => q.done) },
  { id: 'quizall', b: '★', n: 'Todas as questões', d: 'Acertou as 15 perguntas na primeira tentativa.', t: () => quizCorrect() >= 15 },
  { id: 'pan', b: '∑', n: 'Panorama', d: 'Visitou o panorama da área.', t: () => !!S.misc.pan },
  { id: 'galeria', b: '⚙', n: 'Aparatos', d: 'Viu o aparato em destaque de 20 estudos.', t: () => Object.keys(S.spot || {}).length >= 20 },
  { id: 'babel', b: 'Ω', n: 'Terminologia', d: 'Registrou os 11 termos.', t: () => Object.keys(S.terms).length >= DATA.terms.length },
  { id: 'album', b: '♥', n: 'Álbum completo', d: 'Liberou todas as figurinhas.', t: () => DATA.album.every(albumOpen) },
  { id: 'cafe', b: '☕', n: 'Pausa', d: 'Ficou 40 s sem interagir com a página.', t: () => !!S.misc.cafe },
  { id: 'note', b: '✎', n: 'Caderno baixado', d: 'Baixou o caderno de pesquisa.', t: () => !!S.misc.nbdl },
  { id: 'ultra', b: 'U', n: 'Ultra Behaviorist', d: 'Chegou ao nível máximo.', t: () => S.pts >= 3100 },
];
function plus(k, at) {
  const el = document.createElement('div'); el.className = 'plus'; el.textContent = '+' + k;
  let x = innerWidth / 2, y = 90;
  if (at && at.getBoundingClientRect) { const r = at.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top; }
  el.style.left = x + 'px'; el.style.top = y + 'px'; document.body.appendChild(el); setTimeout(() => el.remove(), 1000);
}
function addPts(k, at) { S.pts += k; save(); if (at !== false) plus(k, at); checkAch(); hud(); }
function toast(img, k, n, d) {
  const el = document.createElement('div'); el.className = 'toast';
  el.innerHTML = `<img src="${SPR[img]}" alt=""><div><div class="k">${esc(k)}</div><div class="n">${esc(n)}</div><div class="d">${esc(d)}</div></div>`;
  const box = $('#toasts'), max = innerWidth < 760 ? 1 : 2; box.appendChild(el); while (box.children.length > max) box.firstChild.remove(); setTimeout(() => el.remove(), 3200);
}
let achBusy = false;
function checkAch() {
  if (achBusy) return; achBusy = true;
  let changed = true;
  while (changed) {
    changed = false;
    ACH.forEach(a => { if (!S.ach[a.id] && a.t()) { S.ach[a.id] = Date.now(); S.pts += 25; changed = true; toast('vibra', 'Conquista +25', a.n, a.d); SFX.ach(); boat.temp('vibra', 2600); } });
  }
  save(); achBusy = false; hud();
}
function hud() {
  if (typeof progCard === 'function') progCard();
  $('#pts').textContent = pad(S.pts, 4); const k = nSeen();
  $('#prog').textContent = k + '/43'; $('#rank').textContent = rankOf(S.pts);
  $('#pbar').style.width = (k / 43 * 100) + '%';
  $('#ctNote').textContent = S.note.length; $('#ctAlb').textContent = DATA.album.filter(albumOpen).length; $('#ctAch').textContent = Object.keys(S.ach).length;
  const b = $('#btnSound'); b.textContent = S.sound ? '♪ ON' : '♪ OFF'; b.setAttribute('aria-pressed', S.sound ? 'true' : 'false');
}

/* ====================== Boatacon e diálogo ====================== */
const boat = {
  el: null, base: 'pensa', t: 0,
  cur: null,
  set(p) { if (this.el && !this.el.classList.contains('walk')) this.el.src = SPR[p]; },
  temp(p, ms) { this.cur = p; this.set(p); clearTimeout(this.t); this.t = setTimeout(() => { this.cur = null; this.set(this.base); }, ms); },
};
let typeT = 0;
function say(txt, pose, ms) {
  if (pose) { boat.temp(pose, ms || 3800); const db = $('#dBoat'); if (db) db.src = SPR[pose]; }
  const el = $('#dlgTxt'); clearInterval(typeT);
  if (REDUCE) { el.textContent = txt; return; }
  el.textContent = ''; let i = 0;
  typeT = setInterval(() => { i += 2; el.textContent = txt.slice(0, i); if (i >= txt.length) clearInterval(typeT); }, 18);
}
let idleT = 0;
function poke() {
  clearTimeout(idleT);
  idleT = setTimeout(() => {
    if (!$('#s-jornada').classList.contains('on')) return;
    boat.set('cafe'); say('Pausa para o café. A leitura continua quando você voltar.');
    if (!S.misc.cafe) { S.misc.cafe = 1; save(); checkAch(); }
  }, 40000);
}
['pointerdown', 'keydown', 'wheel'].forEach(ev => addEventListener(ev, poke, { passive: true }));

/* ====================== cenas (diagramas próprios por tarefa) ====================== */
const CHAIN = {
  'Deslocamento de caixa': ['empurrar a caixa até o alvo', 'subir na caixa', 'alcançar o alvo'],
  'Uso de ferramenta': ['empurrar a caixa', 'bicar a placa'],
  'Remoção de obstáculo': ['empurrar o bloco', 'bicar a chave'],
  'Cavar e escalar': ['cavar a maravalha', 'atravessar a passagem', 'subir as escadas'],
  'Encaixe de ferramentas': ['encaixar as partes', 'puxar o alimento com a ferramenta'],
  'Metaferramentas': ['puxar a corda', 'pegar a vareta curta', 'tirar a vareta longa', 'alcançar o alimento'],
  'Plataformas e pedras': ['abrir a porta', 'pegar a pedra na caixa', 'voltar com a pedra', 'depositar no aparelho'],
  'Nadar para fugir': ['mergulhar perto da tampa', 'acionar a campainha', 'atravessar para o outro lado'],
  'Ambiente virtual': ['usar portais', 'redirecionar (cubo, laser, gel)', 'chegar à saída'],
  'Construção de bússola': ['magnetizar a agulha', 'fazer a agulha flutuar', 'relacionar com o norte'],
  'Jogo de tabuleiro': ['combinar cartas-ação', 'usar funções alternativas', 'descrever a solução'],
};
function scene(task, sp) {
  const c = `var(${SP[sp].v})`, A = 'var(--s3)', I = 'var(--ice)', F = '#3a3e70', W = 'var(--ink)';
  const sub = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})" fill="${c}">${icon(SP[sp].k).replace(/<\/?svg[^>]*>/g, '')}</g>`;
  const arrow = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${A}" stroke-width="3" stroke-dasharray="6 5"/><polygon points="${x2},${y2 - 6} ${x2 + 9},${y2} ${x2},${y2 + 6}" fill="${A}"/>`;
  const floor = `<rect x="0" y="132" width="320" height="18" fill="${F}"/>`;
  let g = '';
  switch (task) {
    case 'Deslocamento de caixa':
      g = floor + `<rect x="70" y="100" width="34" height="32" fill="${A}"/><rect x="74" y="104" width="26" height="4" fill="#00000040"/>` + arrow(110, 116, 190, 116)
        + `<rect x="210" y="100" width="34" height="32" fill="none" stroke="${A}" stroke-dasharray="4 4" stroke-width="2"/>`
        + `<line x1="227" y1="0" x2="227" y2="52" stroke="${W}" stroke-width="2"/><rect x="216" y="52" width="22" height="12" fill="var(--s4)"/>` + sub(20, 96, 3); break;
    case 'Uso de ferramenta':
      g = floor + `<rect x="300" y="20" width="20" height="112" fill="#232647"/><rect x="292" y="52" width="10" height="22" fill="var(--s4)"/>`
        + `<rect x="120" y="104" width="40" height="28" fill="${A}"/>` + arrow(166, 118, 270, 118) + sub(40, 96, 3); break;
    case 'Remoção de obstáculo':
      g = floor + `<rect x="250" y="40" width="70" height="92" fill="#232647"/><circle cx="290" cy="78" r="10" fill="var(--s4)"/>`
        + `<rect x="210" y="70" width="34" height="62" fill="#e8e3d0"/>` + arrow(120, 104, 198, 104) + sub(50, 96, 3)
        + `<text x="150" y="40" font-size="16" fill="${W}">bloco na frente da chave</text>`; break;
    case 'Cavar e escalar':
      g = floor + `<path d="M20 132 Q80 96 150 126 L150 132Z" fill="#a47d3c"/><line x1="160" y1="20" x2="160" y2="120" stroke="${I}" stroke-width="4" stroke-dasharray="3 3"/>`
        + `<rect x="150" y="122" width="22" height="10" fill="#05060f"/><rect x="200" y="110" width="40" height="22" fill="${F}"/><rect x="240" y="88" width="40" height="44" fill="${F}"/><rect x="280" y="66" width="40" height="66" fill="${F}"/>`
        + `<circle cx="300" cy="58" r="7" fill="var(--s4)"/>` + sub(40, 92, 3) + `<text x="166" y="16" font-size="15" fill="${I}">barreira</text>`; break;
    case 'Encaixe de ferramentas':
      g = floor + [180, 192, 204].map(x => `<rect x="${x}" y="40" width="4" height="92" fill="#5b5d80"/>`).join('')
        + `<rect x="60" y="86" width="44" height="6" fill="${A}"/><rect x="108" y="86" width="44" height="6" fill="var(--s2)"/><rect x="100" y="84" width="10" height="10" fill="none" stroke="${W}" stroke-width="2"/>`
        + `<rect x="250" y="118" width="26" height="14" fill="var(--s4)"/>` + arrow(156, 89, 238, 112) + sub(14, 96, 3); break;
    case 'Metaferramentas':
      g = floor + `<line x1="70" y1="0" x2="70" y2="58" stroke="${W}" stroke-width="2"/><rect x="62" y="58" width="16" height="5" fill="${A}"/>`
        + `<rect x="140" y="90" width="50" height="42" fill="none" stroke="${I}" stroke-width="3"/><rect x="146" y="104" width="38" height="5" fill="var(--s2)"/>`
        + `<rect x="240" y="96" width="60" height="36" fill="#232647"/><circle cx="286" cy="114" r="7" fill="var(--s4)"/>` + arrow(84, 62, 128, 96) + arrow(194, 106, 230, 110) + sub(10, 96, 3); break;
    case 'Plataformas e pedras':
      g = floor + `<rect x="10" y="30" width="140" height="102" fill="none" stroke="${F}" stroke-width="4"/><rect x="170" y="30" width="140" height="102" fill="none" stroke="${F}" stroke-width="4"/>`
        + `<rect x="148" y="70" width="24" height="62" fill="var(--s2)"/><rect x="250" y="104" width="34" height="28" fill="none" stroke="${I}" stroke-width="3"/><circle cx="267" cy="114" r="6" fill="#bdbdd6"/>`
        + `<rect x="30" y="96" width="30" height="36" fill="${A}"/><text x="40" y="22" font-size="15" fill="${W}">C</text><text x="236" y="22" font-size="15" fill="${W}">B</text>` + sub(80, 98, 2.6); break;
    case 'Nadar para fugir':
      g = `<rect x="0" y="60" width="320" height="90" fill="#123a5c"/>` + [70, 90, 110].map(y => `<path d="M0 ${y} q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="${I}" stroke-width="2" fill="none" opacity=".5"/>`).join('')
        + `<rect x="230" y="20" width="40" height="10" fill="${A}"/><circle cx="292" cy="26" r="9" fill="var(--s4)"/><rect x="0" y="40" width="40" height="20" fill="${F}"/>` + sub(140, 64, 3)
        + `<text x="214" y="50" font-size="14" fill="${W}">tampa · campainha</text>`; break;
    case 'Ambiente virtual':
      g = `<rect x="0" y="0" width="320" height="150" fill="#0a1426"/>` + floor + `<ellipse cx="90" cy="70" rx="14" ry="30" fill="none" stroke="#3a9bf0" stroke-width="5"/><ellipse cx="230" cy="70" rx="14" ry="30" fill="none" stroke="var(--s2)" stroke-width="5"/>`
        + `<rect x="0" y="66" width="20" height="10" fill="#ff5b5b"/><line x1="20" y1="71" x2="78" y2="71" stroke="#ff5b5b" stroke-width="3"/><line x1="242" y1="71" x2="292" y2="71" stroke="#ff5b5b" stroke-width="3"/>`
        + `<rect x="292" y="60" width="18" height="22" fill="var(--s4)"/><rect x="140" y="110" width="22" height="22" fill="#9aa4c8"/>` + sub(170, 98, 2.8); break;
    case 'Construção de bússola':
      g = floor + `<path d="M90 100 Q150 140 210 100 Z" fill="#123a5c" stroke="${I}" stroke-width="3"/><rect x="118" y="96" width="64" height="4" fill="${W}"/><rect x="170" y="94" width="12" height="8" fill="#ff5b5b"/>`
        + `<path d="M240 40 v40 h16 v-28 h12 v28 h16 v-40 z" fill="#ff5b5b"/><rect x="240" y="72" width="16" height="8" fill="#ccc"/><rect x="268" y="72" width="16" height="8" fill="#ccc"/>`
        + `<text x="34" y="44" font-size="22" fill="var(--s4)">N ↑</text>` + sub(20, 96, 2.6); break;
    case 'Jogo de tabuleiro':
      g = [[60, -8], [130, 0], [200, 8]].map(([x, r], i) => `<g transform="rotate(${r} ${x + 30} 90)"><rect x="${x}" y="40" width="64" height="90" fill="#efe7cf" stroke="#05060f" stroke-width="3"/><rect x="${x + 8}" y="50" width="48" height="30" fill="${[A, I, 'var(--s2)'][i]}"/><rect x="${x + 8}" y="88" width="40" height="5" fill="#555"/><rect x="${x + 8}" y="98" width="30" height="5" fill="#555"/></g>`).join('') + sub(10, 96, 2.6); break;
    default: g = floor + sub(140, 90, 3);
  }
  return `<svg class="sc" viewBox="0 0 320 150" role="img" aria-label="Esquema da tarefa: ${esc(task)}" font-family="VT, monospace">${g}</svg>`;
}

/* ====================== prólogo e epílogo ====================== */
const SPECIAL = {
  pro: {
    tit: 'Prólogo: antes de 1983', chip: '1898–1945',
    html: `<p>A investigação experimental da resolução de problemas começa no início do século XX. Thorndike pôs gatos em caixas-problema e descreveu um processo gradual de tentativa e erro, controlado pelo reforçamento diferencial das respostas bem-sucedidas.</p>
<p>Köhler (1917, traduzido em 1925) observou chimpanzés diante de alimento fora de alcance. Para alcançá-lo, eles encaixavam varas ou deslocavam caixas, e às vezes resolviam de modo súbito, fluido e direcionado. Ele chamou esse padrão de <em>insight</em> e o explicou por uma reestruturação perceptual inobservável, sem tratar a história prévia dos animais como variável.</p>
<p>Birch (1945) mostrou que essa história importa: a experiência anterior afeta a probabilidade da solução súbita. Mesmo assim, a interpretação predominante continuou a recorrer a construtos cognitivos.</p>
<div class="note">Em 1983, Robert Epstein retomou o problema com pombos, sob uma perspectiva analítico-comportamental. Os estudos aparecem à direita, na linha do tempo.</div>`
  },
  epi: {
    tit: 'Epílogo: a linha brasileira aos vinte anos', chip: '2026 →',
    html: `<p>Em 2026, a linha brasileira completa vinte anos, contados das dissertações de Delage e de Tobias (2006, UFPA). O Brasil responde por 33 dos 43 estudos incluídos na revisão, com destaque para UFPA, USP, UFC e, mais recentemente, UEL.</p>
<p>A revisão conclui que a recombinação de repertórios é um processo central na resolução de problemas em várias espécies, que o treino dos repertórios constituintes é condição necessária, embora não suficiente, e que a resolução pode ocorrer com ou sem as características topográficas do insight.</p>
<h4>Fora da revisão, no mesmo ano</h4>
<p>Em 2026, um estudo publicado na <em>Science</em> (Bhambore et al.) relatou mamangavas (<em>Bombus terrestris</em>) que levaram uma bola até sob uma flor artificial fora de alcance e subiram nela para chegar à recompensa, uma versão para insetos do problema da caixa e da banana. <a href="https://www.oulu.fi/en/news/bumble-bees-show-spontaneous-problem-solving-study-published-science" target="_blank" rel="noopener">Nota da Universidade de Oulu ↗</a></p>
<h4>Agenda proposta pela revisão</h4>
<ul><li>Convergência terminológica: recombinação de repertórios como descritor comum.</li><li>Procedimentos padronizados e intercambiáveis entre espécies e laboratórios.</li><li>Translação para contextos educacionais e clínicos.</li></ul>
<div class="note">As fichas lidas ficam registradas no caderno do Boatacon, na aba Caderno.</div>`
  }
};

/* ====================== pista do tempo ====================== */
const Y0 = 1983, Y1 = 2026;
let ORDER = ['pro', ...ST.map(s => s.n), 'epi'];
let filt = { sp: '', task: '', q: '' };
const matchF = s => (!filt.sp || s.sp === filt.sp) && (!filt.task || s.task === filt.task) && (!filt.q || norm([s.ref, s.cit, s.st, s.teaser, s.tags.join(' '), s.para, s.mtx.groups.map(g => g.s.map(t => t.id).join(' ')).join(' ')].join(' ')).includes(norm(filt.q)));
const norm = t => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const POS = {};
const ERA_COL = ['#e8442e', '#f2762e', '#f6a530', '#f5cf3b', '#7fd3ee'];
const TL = { M: null, W: 0, items: [], segs: [], io: null, raf: 0, cam: 0, lastY: '', dragged: 0 };
const frac = v => { const m = String(v).match(/^(\d+)\s*\/\s*(\d+)/); return m ? [+m[1], +m[2]] : null; };
function tlMetrics() {
  return innerWidth < 700
    ? { cw: 150, step: 84, th: 66, ch: 146, t2: 14, t1: 172, rail: 342, bh: 84, H: 452, era: 204, sc: 3, ypad: 34, lead: 20 }
    : { cw: 184, step: 102, th: 86, ch: 172, t2: 18, t1: 202, rail: 398, bh: 104, H: 530, era: 248, sc: 4, ypad: 40, lead: 48 };
}
const tthumb = s => s.media.length ? `<img src="${esc(s.media[0].thumb || s.media[0].src)}" data-full="${esc(s.media[0].src)}" data-fb="${s.n}" alt="" loading="lazy" decoding="async" draggable="false">` : scene(s.task, s.sp);
function meter(s) {
  const r = frac(s.rp), i = frac(s.ins);
  const pr = r ? r[0] / r[1] * 100 : 0, pi = i ? i[0] / i[1] * 100 : 0;
  return `<span class="cmeta"><span>N ${s.N}</span><i class="mbar"><b style="width:${pr}%"></b><u style="width:${pi}%"></u></i><span>★ ${i ? i[0] : '–'}</span></span>`;
}
function bubText(s) {
  const r = frac(s.rp), i = frac(s.ins);
  if (i && i[0]) return `★ ${i[0]} de ${i[1]} com insight`;
  if (r && r[0]) return `${r[0]} de ${r[1]} resolveram`;
  if (r) return 'Nenhum sujeito resolveu';
  return 'Hmm…';
}
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function buildTrack() {
  const M = TL.M = tlMetrics(), wrap = $('#trackwrap'), tr = $('#track');
  const stageH = M.t1 + M.ch - M.t2; let x = M.lead, h = '', k = 0;
  const items = [], segs = [];
  const stage = o => { const tag = o.btn ? 'button' : 'div';
    return `<${tag} class="stage pre ${o.cls || ''}" ${o.attrs || ''} style="left:${o.x}px;top:${M.t2}px;width:${M.era}px;height:${stageH}px;--ec:${o.col}"><span class="sk">${o.k}</span><span class="sn">${esc(o.n)}</span><span class="sart">${pixScene(o.art, M.sc)}</span><span class="sp">${esc(o.p)}</span><span class="sct">${o.foot}</span></${tag}>`; };
  h += stage({ x, btn: 1, cls: 'node', attrs: 'data-n="pro" aria-label="Prólogo: antes de 1983"', col: '#9aa0c8', k: 'Prólogo · 1898–1945', n: 'Antecedentes', art: 'pro', p: 'Thorndike estudou gatos em caixas-problema. Köhler observou chimpanzés que empilhavam caixas e encaixavam varas e chamou de insight a solução súbita.', foot: '<span>abrir o prólogo</span><b>▶</b>' });
  POS.pro = x + M.era / 2; items.push({ x: POS.pro, y: 1917, e: 'Prólogo · Köhler' }); x += M.era + 56;
  ERAS.forEach((e, ei) => {
    const col = ERA_COL[ei];
    if (ei === 1) {
      h += stage({ x, cls: 'gapc', col: '#5d6296', k: '1994–2005', n: 'Intervalo sem estudos', art: 'gap', p: 'Nenhum estudo experimental publicado entre 1994 e 2005 foi incluído na revisão. A produção é retomada em 2006, na Universidade Federal do Pará.', foot: '<span>sem estudos incluídos</span>' });
      items.push({ x: x + M.era / 2, y: 1994, e: 'Intervalo sem estudos' }); x += M.era + 56;
    }
    const x0 = x - 18, list = ST.filter(s => s.era === e.id);
    h += stage({ x, cls: 'era', attrs: `data-era-st="${e.id}"`, col, k: `Era ${ROMAN[ei]} · ${e.de}–${e.ate}`, n: e.nome, art: e.id, p: e.intro, foot: `<span>${list.length} estudos</span><b data-ecount="${e.id}">0/${list.length}</b><span class="sbtns"><button type="button" data-ejump="${e.id}">Explorar ▶</button><button type="button" data-quiz="${e.id}">★ Desafio</button></span>` });
    items.push({ x: x + M.era / 2, y: e.de, e: `Era ${ROMAN[ei]} · ${e.nome}` });
    x += M.era + 26;
    let ly = null, prevC = null;
    list.forEach(s => {
      if (s.y !== ly) x += M.ypad;
      const cx = x + M.cw / 2, hi = k++ % 2 === 0, top = hi ? M.t2 : M.t1;
      if (s.y !== ly) { h += `<span class="yp" style="left:${prevC == null ? cx - M.cw / 2 - 6 : (prevC + cx) / 2}px;top:${M.rail + 2}px;--ec:${col}">${s.y}</span>`; ly = s.y; }
      POS[s.n] = cx; items.push({ x: cx, y: s.y, e: `Era ${ROMAN[ei]} · ${e.nome}` });
      h += `<button class="node tcard pre" data-n="${s.n}" style="left:${cx - M.cw / 2}px;top:${top}px;width:${M.cw}px;height:${M.ch}px;--sp:${spVar(s.sp)};--stem:${M.rail - top - M.ch}px" aria-label="${esc(s.ref + ': ' + s.st + '. ' + s.sp + ', ' + s.task + ', N = ' + s.N)}" data-tt="${esc(s.ref)}" data-tb="${esc(s.st + '. ' + s.teaser + ' Resolveram: ' + s.rp + ' · insight: ' + s.ins + '.')}"><span class="cth" style="height:${M.th}px">${tthumb(s)}</span><span class="cbadge">${spIcon(s.sp)}</span><span class="cyr">${s.y}</span><span class="cbd"><span class="cref">${esc(s.ref)}</span><span class="ctit">${esc(s.st)}</span>${meter(s)}</span><span class="cstem"></span><span class="cnew">lido</span></button>`;
      h += `<span class="node rn" data-n="${s.n}" style="left:${cx}px;top:${M.rail + 2}px;--sp:${spVar(s.sp)}"></span>`;
      prevC = cx; x += M.step;
    });
    x += M.cw - M.step + 34;
    segs.push({ x0, x1: x - 14, col, ei });
  });
  h += stage({ x, btn: 1, cls: 'node', attrs: 'data-n="epi" aria-label="Epílogo: 2026 e depois"', col: '#7fd3ee', k: 'Epílogo · 2026 →', n: 'Agenda de pesquisa', art: 'epi', p: 'Em 2026, a linha brasileira completa vinte anos. No mesmo ano, um estudo com mamangavas descreveu uma versão do problema da caixa e da banana para insetos.', foot: '<span>abrir o epílogo</span><b>▶</b>' });
  POS.epi = x + M.era / 2; items.push({ x: POS.epi, y: 2026, e: 'Epílogo · agenda de pesquisa' }); x += M.era + M.lead;
  const W = TL.W = Math.max(x, wrap.clientWidth);
  const stops = ['#9aa0c8 0px', ...segs.flatMap(g => [`${g.col} ${g.x0 + 40}px`, `${g.col} ${g.x1 - 40}px`]), `#7fd3ee ${W}px`].join(',');
  const bg = segs.map(g => `<div class="seg" style="left:${g.x0}px;width:${g.x1 - g.x0}px;--ec:${g.col}"></div>`).join('')
    + `<div class="ground" style="top:${M.rail + 8}px"></div><div class="floor" style="top:${M.H - 16}px"></div><div class="rail" style="top:${M.rail}px;width:${W}px;background:linear-gradient(90deg,${stops})"></div>`;
  tr.style.width = W + 'px'; tr.style.height = M.H + 'px';
  tr.innerHTML = bg + h + `<img id="boat" alt="" draggable="false" style="top:${M.H - 16 - M.bh}px;height:${M.bh}px"><div id="bub" style="top:${M.H - 16 - M.bh + 6}px"></div>`;
  boat.el = $('#boat'); boat.set(boat.cur || boat.base); boat.el.style.transitionDuration = '0s';
  const bx = (POS[S.cur] != null ? POS[S.cur] : POS.pro); boat.el.style.left = bx + 'px'; $('#bub').style.left = (bx + M.bh * .34) + 'px';
  TL.items = items.sort((a, b) => a.x - b.x); TL.segs = segs; TL.lastY = '';
  buildBg(); buildMini(); observeTrack(); paintNodes(); onTlScroll();
}
function buildBg() {
  const M = TL.M, vw = $('#trackwrap').clientWidth, f = .45, base = M.rail + 26, rnd = mulberry(11);
  const w2 = Math.ceil(TL.W * f + vw + 300); let sv = '';
  TL.segs.forEach(g => {
    const a = g.x0 * f, b = g.x1 * f + vw * .45, c = g.col;
    for (let x = a; x < b;) {
      const w = 26 + rnd() * 46, hh = 40 + rnd() * 110, y = base - hh;
      if (g.ei === 0) { sv += `<rect x="${x}" y="${y}" width="${w}" height="${hh}" fill="${c}" opacity=".13"/>`; for (let wy = y + 8; wy < base - 10; wy += 14) for (let wx = x + 6; wx < x + w - 6; wx += 12) if (rnd() > .45) sv += `<rect x="${wx}" y="${wy}" width="4" height="5" fill="${c}" opacity=".28"/>`; }
      else if (g.ei === 1) { const r = 14 + rnd() * 22; sv += `<rect x="${x + r - 3}" y="${base - hh * .6}" width="6" height="${hh * .6}" fill="${c}" opacity=".16"/><circle cx="${x + r}" cy="${base - hh * .6}" r="${r}" fill="${c}" opacity=".13"/><circle cx="${x + r * 1.6}" cy="${base - hh * .5}" r="${r * .7}" fill="${c}" opacity=".1"/>`; }
      else if (g.ei === 2) { sv += `<ellipse cx="${x + w}" cy="${base}" rx="${w * 1.4}" ry="${hh * .7}" fill="${c}" opacity=".1"/>`; if (rnd() > .6) { for (let ly = base - hh; ly < base; ly += 9) sv += `<rect x="${x + w * .4}" y="${ly}" width="14" height="2" fill="${c}" opacity=".22"/>`; sv += `<rect x="${x + w * .4}" y="${base - hh}" width="2" height="${hh}" fill="${c}" opacity=".22"/><rect x="${x + w * .4 + 12}" y="${base - hh}" width="2" height="${hh}" fill="${c}" opacity=".22"/>`; } }
      else if (g.ei === 3) { sv += `<rect x="${x}" y="${y}" width="${w * .45}" height="${hh}" fill="${c}" opacity=".12"/>`; if (rnd() > .5) sv += `<ellipse cx="${x + w * .2}" cy="${y - 22}" rx="7" ry="15" fill="none" stroke="${rnd() > .5 ? '#7fd3ee' : '#e45a93'}" stroke-width="3" opacity=".3"/>`; }
      else { sv += `<rect x="${x}" y="${y + 20}" width="${w}" height="${hh * .7}" rx="3" fill="none" stroke="${c}" stroke-width="3" opacity=".22"/><rect x="${x + 4}" y="${y + 24}" width="${w - 8}" height="${hh * .7 - 8}" fill="${c}" opacity=".06"/>`; }
      x += w + 10 + rnd() * 40;
    }
  });
  const l2 = $('#tlbg .l2'); l2.style.width = w2 + 'px'; l2.innerHTML = `<svg width="${w2}" height="${M.H}" viewBox="0 0 ${w2} ${M.H}">${sv}</svg>`;
  $('#tlbg .l1').style.width = (TL.W * .12 + vw + 500) + 'px';
}
function buildMini() {
  const W = TL.W;
  $('#mmIn').innerHTML = TL.segs.map(g => `<div class="me" style="left:${g.x0 / W * 100}%;width:${(g.x1 - g.x0) / W * 100}%;--ec:${g.col}"><span>${ROMAN[g.ei]}</span></div>`).join('')
    + ST.map(s => `<i class="mt" data-mn="${s.n}" style="left:${POS[s.n] / W * 100}%;--sp:${spVar(s.sp)}"></i>`).join('');
}
function observeTrack() {
  if (TL.io) TL.io.disconnect();
  const els = $$('#track .pre');
  if (REDUCE || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.remove('pre')); return; }
  TL.io = new IntersectionObserver(ents => {
    let i = 0;
    ents.forEach(en => { if (!en.isIntersecting) return; const el = en.target, d = Math.min(i++ * 55, 440); el.style.setProperty('--d', d + 'ms'); el.classList.add('in'); TL.io.unobserve(el); setTimeout(() => el.classList.remove('pre', 'in'), 650 + d); });
  }, { root: $('#trackwrap'), rootMargin: '0px 120px', threshold: .02 });
  els.forEach(e => TL.io.observe(e));
}
function onTlScroll() {
  if (TL.raf) return;
  TL.raf = requestAnimationFrame(() => {
    TL.raf = 0; const wrap = $('#trackwrap'), sl = wrap.scrollLeft, vw = wrap.clientWidth, W = TL.W || 1;
    $('#tlbg .l1').style.transform = `translate3d(${-sl * .12}px,0,0)`; $('#tlbg .l2').style.transform = `translate3d(${-sl * .45}px,0,0)`;
    const v = $('#mmv'); v.style.left = (sl / W * 100) + '%'; v.style.width = (vw / W * 100) + '%';
    $('#mm').setAttribute('aria-valuenow', String(Math.round(sl / Math.max(1, W - vw) * 100)));
    $('.tlfade.l').style.opacity = sl > 8 ? 1 : 0; $('.tlfade.r').style.opacity = sl < W - vw - 8 ? 1 : 0;
    const cx = sl + vw / 2; let it = TL.items[0];
    for (const i of TL.items) { if (i.x <= cx + 60) it = i; else break; }
    if (it && TL.lastY !== it.y + it.e) {
      TL.lastY = it.y + it.e; const o = $('#odoY'); o.textContent = it.y; $('#odoE').textContent = it.e;
      if (!REDUCE) { o.classList.remove('tick'); void o.offsetWidth; o.classList.add('tick'); }
    }
  });
}
function paintNodes() {
  let k = 0; const cur = String(S.cur), cs = byN[S.cur];
  $$('#track .node').forEach(b => {
    const key = b.dataset.n, s = byN[key], ok = !s || matchF(s);
    b.classList.toggle('read', !!S.seen[key]); b.classList.toggle('cur', cur === key); b.classList.toggle('dim', !ok);
    if (s && ok && b.classList.contains('tcard')) k++;
  });
  $$('#mm .mt').forEach(t => { const s = byN[t.dataset.mn]; t.classList.toggle('read', !!S.seen[s.n]); t.classList.toggle('cur', cur === t.dataset.mn); t.classList.toggle('dim', !matchF(s)); });
  $$('#track [data-era-st]').forEach(b => b.classList.toggle('cur', !!cs && cs.era === b.dataset.eraSt));
  ERAS.forEach(e => { const el = $(`#track [data-ecount="${e.id}"]`); if (el) { const L = ST.filter(s => s.era === e.id); el.textContent = L.filter(s => S.seen[s.n]).length + '/' + L.length + ' lidos'; } });
  const any = filt.sp || filt.task || filt.q; $('#fCount').textContent = any ? `${k} de 43` : '';
  $$('#spchips button').forEach(b => b.setAttribute('aria-pressed', String(filt.sp === b.dataset.sp)));
}
function hlNode(n) {
  $$('#track .rn.hl, #mm .mt.hl').forEach(e => e.classList.remove('hl'));
  if (n) { const a = $(`#track .rn[data-n="${n}"]`), b = $(`#mm .mt[data-mn="${n}"]`); a && a.classList.add('hl'); b && b.classList.add('hl'); }
}
const dOpen = () => document.body.classList.contains('dopen');
const dOff = () => dOpen() && innerWidth >= 900 ? $('#drawer').offsetWidth : 0;
function camera(x, dur) {
  const wrap = $('#trackwrap'), vw = wrap.clientWidth - dOff(), sl = wrap.scrollLeft;
  if (x > sl + vw * .3 && x < sl + vw * .7) return;
  const target = Math.max(0, Math.min(TL.W - vw, x - vw / 2));
  cancelAnimationFrame(TL.cam);
  if (REDUCE) { wrap.scrollLeft = target; return; }
  const t0 = performance.now(), from = sl, D = Math.max(380, dur * 1000);
  const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const f = t => { const p = Math.min(1, (t - t0) / D); wrap.scrollLeft = from + (target - from) * (dur ? p : ease(p)); if (p < 1) TL.cam = requestAnimationFrame(f); };
  TL.cam = requestAnimationFrame(f);
}
function dust(dir) {
  if (!boat.el) return; const tr = $('#track'), d = document.createElement('span');
  d.className = 'dust'; d.style.left = (parseFloat(getComputedStyle(boat.el).left) + dir * 16) + 'px'; d.style.top = (TL.M.H - 24) + 'px'; d.style.setProperty('--dx', dir * 12 + 'px');
  tr.appendChild(d); setTimeout(() => d.remove(), 650);
}
function burst(n) {
  if (REDUCE) return; const c = $(`#track .tcard[data-n="${n}"]`); if (!c) return;
  const tr = $('#track'), x = c.offsetLeft + c.offsetWidth / 2, y = c.offsetTop + 18, s = byN[n];
  for (let i = 0; i < 16; i++) {
    const p = document.createElement('span'), a = i / 16 * Math.PI * 2 + Math.random() * .3, r = 40 + Math.random() * 46;
    p.className = 'spark'; p.style.left = x + 'px'; p.style.top = y + 'px';
    p.style.setProperty('--dx', Math.cos(a) * r + 'px'); p.style.setProperty('--dy', Math.sin(a) * r * .8 + 'px'); p.style.setProperty('--c', i % 3 ? '#f5cf3b' : spVar(s.sp));
    tr.appendChild(p); setTimeout(() => p.remove(), 950);
  }
}
let bubT = 0;
function bubble(txt, delay, ms) {
  const b = $('#bub'); if (!b) return; clearTimeout(bubT); b.classList.remove('on');
  bubT = setTimeout(() => { b.textContent = txt; b.style.left = (parseFloat(boat.el.style.left) + TL.M.bh * .34) + 'px'; b.classList.add('on'); bubT = setTimeout(() => b.classList.remove('on'), ms || 2800); }, (delay || 0) * 1000 + 80);
}
function walkTo(key) {
  const x = POS[key]; if (x == null || !boat.el) return 0;
  const old = parseFloat(boat.el.style.left), dist = isNaN(old) ? 0 : Math.abs(x - old);
  let dur = 0; clearInterval(walkTo.d); clearTimeout(walkTo.t);
  if (dist > 2 && !REDUCE) {
    dur = Math.min(1.9, .3 + dist / 1500); const dir = x < old ? 1 : -1;
    boat.el.style.transitionDuration = dur + 's'; boat.el.src = SPR.aponta; boat.el.classList.toggle('flip', x < old); boat.el.classList.add('walk'); SFX.step();
    walkTo.d = setInterval(() => dust(dir), 110);
    walkTo.t = setTimeout(() => { clearInterval(walkTo.d); boat.el.classList.remove('walk', 'flip'); boat.set(boat.cur || boat.base); }, dur * 1000);
  } else boat.el.style.transitionDuration = '0s';
  boat.el.style.left = x + 'px';
  camera(x, dur);
  return dur;
}
function setupTrack() {
  const wrap = $('#trackwrap'); let st = null;
  wrap.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse' || e.button !== 0) return; st = { x: e.clientX, sl: wrap.scrollLeft, moved: false }; });
  addEventListener('pointermove', e => { if (!st) return; const dx = e.clientX - st.x; if (!st.moved && Math.abs(dx) > 6) { st.moved = true; wrap.classList.add('drag'); cancelAnimationFrame(TL.cam); $('#tip').style.display = 'none'; } if (st.moved) wrap.scrollLeft = st.sl - dx; });
  addEventListener('pointerup', () => { if (!st) return; if (st.moved) TL.dragged = Date.now(); wrap.classList.remove('drag'); st = null; });
  wrap.addEventListener('click', e => { if (Date.now() - TL.dragged < 80) { e.stopPropagation(); e.preventDefault(); } }, true);
  wrap.addEventListener('scroll', onTlScroll, { passive: true });
  wrap.addEventListener('wheel', () => cancelAnimationFrame(TL.cam), { passive: true });
  wrap.addEventListener('touchstart', () => cancelAnimationFrame(TL.cam), { passive: true });
  const mm = $('#mm'); let md = false;
  const jump = (cx, smooth) => { const r = mm.getBoundingClientRect(); cancelAnimationFrame(TL.cam); wrap.scrollTo({ left: (cx - r.left) / r.width * TL.W - wrap.clientWidth / 2, behavior: smooth && !REDUCE ? 'smooth' : 'auto' }); };
  mm.addEventListener('pointerdown', e => { md = true; try { mm.setPointerCapture(e.pointerId); } catch (x) { /* sem captura */ } jump(e.clientX, true); });
  mm.addEventListener('pointermove', e => { if (md) jump(e.clientX, false); });
  ['pointerup', 'pointercancel'].forEach(ev => mm.addEventListener(ev, () => { md = false; }));
  mm.addEventListener('keydown', e => { if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return; e.preventDefault(); e.stopPropagation(); wrap.scrollBy({ left: (e.key === 'ArrowRight' ? 1 : -1) * wrap.clientWidth * .6, behavior: REDUCE ? 'auto' : 'smooth' }); });
  $('#track').addEventListener('mouseover', e => { const c = e.target.closest('.tcard'); hlNode(c ? c.dataset.n : null); });
  $('#track').addEventListener('mouseleave', () => hlNode(null));
  $('#spchips').innerHTML = SP_ORDER.map(sp => `<button type="button" data-sp="${sp}" style="--c:${spVar(sp)}" aria-pressed="false" aria-label="${esc(SP[sp].pl)}" data-tt="${esc(SP[sp].pl)}" data-tb="${ST.filter(x => x.sp === sp).length} estudos. Clique para filtrar; clique de novo para mostrar todos.">${spIcon(sp)}</button>`).join('');
  $('#spchips').onclick = e => { const b = e.target.closest('button'); if (!b) return; filt.sp = filt.sp === b.dataset.sp ? '' : b.dataset.sp; $('#fSp').value = filt.sp; SFX.tab(); paintNodes(); };
  $('#bUnread').onclick = () => {
    const keys = ST.map(s => s.n).filter(n => matchF(byN[n])), i0 = keys.indexOf(S.cur);
    const nx = [...keys.slice(i0 + 1), ...keys.slice(0, i0 + 1)].find(n => !S.seen[n]);
    if (nx) select(nx); else say('Todos os estudos deste recorte já foram lidos.', 'vibra');
  };
}

/* ====================== painéis de panorama (entrada das abas) ====================== */
function progCard() {
  const el = $('#pprogRows'); if (!el) return;
  const prow = (go, l, v, t) => `<button class="prow" data-pgo="${go}"><span>${l}</span><span class="bar"><b style="width:${v / t * 100}%"></b></span><span class="v">${v}/${t}</span></button>`;
  el.innerHTML = prow('caderno', 'Fichas lidas', nSeen(), 43) + prow('album', 'Cartas do álbum', DATA.album.filter(albumOpen).length, DATA.album.length) + prow('conquistas', 'Conquistas', Object.keys(S.ach).length, ACH.length);
  const k = el.closest('.pcard').querySelector('.pk span:last-child'); if (k) k.textContent = `${pad(S.pts, 4)} pts · ${rankOf(S.pts)}`;
}
function panoramas() {
  const yrs = {}; ST.forEach(s => { yrs[s.y] = (yrs[s.y] || 0) + 1; });
  const nSub = ST.reduce((a, s) => a + s.mtx.groups.reduce((b, g) => b + g.s.length, 0), 0);
  const br = ST.filter(s => s.br).length, tasks = new Set(ST.map(s => s.task)).size;
  const eraOfY = y => ERAS.findIndex(e => y >= e.de && y <= e.ate);
  let bars = ''; const bw = 10, gap = 2, H = 70;
  for (let y = 1983; y <= 2026; y++) { const i = y - 1983, c = yrs[y] || 0, x = i * (bw + gap), h = c ? 8 + c * 13 : 2, ei = eraOfY(y);
    bars += `<rect x="${x}" y="${H - h}" width="${bw}" height="${h}" fill="${c ? ERA_COL[ei] : '#2b2e55'}"><animate attributeName="height" from="0" to="${h}" dur=".7s" begin="${(i * .015).toFixed(3)}s" fill="freeze"/><animate attributeName="y" from="${H}" to="${H - h}" dur=".7s" begin="${(i * .015).toFixed(3)}s" fill="freeze"/></rect>`; }
  const W = 44 * (bw + gap);
  bars += [1983, 1993, 2006, 2017, 2026].map(y => `<text x="${(y - 1983) * (bw + gap) + (y === 1983 ? 0 : y === 2026 ? bw : bw / 2)}" y="${H + 14}" text-anchor="${y === 1983 ? 'start' : y === 2026 ? 'end' : 'middle'}" font-size="11" fill="#8a8db8" font-family="VT323, monospace">${y}</text>`).join('');
  const fams = { ins: 0, res: 0, tar: 0, nao: 0, sem: 0 }; const toks = [];
  ST.forEach(s => s.mtx.groups.forEach(g => g.s.forEach(t => { const f = STATES[t.st].f; fams[f]++; toks.push(f); })));
  const ordF = ['ins', 'res', 'tar', 'nao', 'sem'];
  const mos = toks.slice().sort((a, b) => ordF.indexOf(a) - ordF.indexOf(b)).map((f, i) => `<i style="background:var(${FAM[f][0]});--k:${i}"></i>`).join('');
  const maxSp = Math.max(...SP_ORDER.map(sp => ST.filter(s => s.sp === sp).length));
  const spRows = SP_ORDER.map(sp => { const L = ST.filter(s => s.sp === sp), n = L.reduce((a, s) => a + (+s.N || 0), 0);
    return `<span style="color:${spVar(sp)}">${spIcon(sp)}</span><span class="bar" style="--c:${spVar(sp)}"><b style="width:${L.length / maxSp * 100}%"></b></span><span class="v">${L.length} est. · ${n} suj.</span>`; }).join('');
  const pickN = [8, 13, 36, 40, 3, 22, 43, 11, 30, 17, 34, 24], th = [];
  pickN.concat(ST.map(s => s.n)).forEach(n => { const s = byN[n]; if (th.length < 8 && s.media.length && !th.some(x => x.n === n)) th.push(s); });
  const nFig = ST.reduce((a, s) => a + s.media.length, 0), nFigS = ST.filter(s => s.media.length).length;
  const fl = { ok: 0, ressalva: 0, diverge: 0 }; ST.forEach(s => fl[s.flag]++);
  const tabRows = [1, 2, 18, 40].map(n => byN[n]).map(s => `<tr><td>${esc(s.ref)}</td><td>${esc(s.sp)}</td><td>N ${s.N}</td><td>${esc(s.ins)}</td><td class="f" style="color:${s.flag === 'ok' ? 'var(--o-res)' : s.flag === 'diverge' ? 'var(--o-tar)' : 'var(--s4)'}">${FLAGL[s.flag]}</td></tr>`).join('');
  const eras = ERAS.map((e, i) => { const q = S.quiz[e.id] || {}; return `<span class="${q.done ? 'ok' : ''}">${pixScene(e.id, 2)}${ROMAN[i]}${q.done ? ' ✓' : ''}</span>`; }).join('');
  const nQ = Object.values(S.quiz).filter(q => q.done).length;
  const P = DATA.prisma, fun = [['identificados', P.total], ['triados', P.triados], ['texto completo', P.eleg], ['incluídos', P.incl]];
  const funH = fun.map(([l, v]) => `<div><b style="width:${Math.max(6, v / P.total * 62)}%"></b><em>${v}</em> ${l}</div>`).join('');
  const jn = {}; ST.forEach(s => { jn[s.jn] = (jn[s.jn] || 0) + 1; });
  const jnH = Object.entries(jn).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([k, v]) => `<div><span>${esc(k)}</span><em>${v}</em></div>`).join('');
  const nAlb = DATA.album.filter(albumOpen).length, nAch = Object.keys(S.ach).length;
  const nextE = ERAS.find(e => !(S.quiz[e.id] || {}).done);
  const prow = (go, l, v, t) => `<button class="prow" data-pgo="${go}"><span>${l}</span><span class="bar"><b style="width:${v / t * 100}%"></b></span><span class="v">${v}/${t}</span></button>`;
  const card = (o) => `<div class="pcard ${o.w || ''}" data-pgo="${o.go}" role="link" tabindex="0" style="--ac:${o.ac}" aria-label="${esc(o.t)}. Abrir ${esc(o.tab)}"><div class="pk"><span>${o.tab}</span><span>${o.k || ''}</span></div><h3>${o.t}</h3>${o.d ? `<p class="pd">${o.d}</p>` : ''}${o.body}<div class="pcta">${o.cta} <i>▶</i></div></div>`;
  $('#pgrid').innerHTML = [
    card({ w: 'w2', go: 'panorama', tab: 'Panorama', ac: 'var(--s4)', t: 'Números gerais da revisão', d: 'Estudos experimentais publicados entre 1983 e 2026. Nenhum estudo incluído foi publicado entre 1994 e 2005, e a produção aumentou a partir de 2017.',
      body: `<div class="pnums"><div><b>43</b><span>estudos incluídos</span></div><div><b>${nSub}</b><span>sujeitos (soma do N)</span></div><div><b>6</b><span>espécies</span></div><div><b>${br}</b><span>estudos brasileiros</span></div><div><b>${tasks}</b><span>tarefas diferentes</span></div></div><svg class="pyrs" viewBox="-2 0 ${W + 4} ${H + 18}" role="img" aria-label="Estudos por ano, 1983 a 2026">${bars}</svg>`, cta: 'Abrir o panorama' }),
    card({ go: 'panorama', tab: 'Panorama', ac: 'var(--o-ins)', t: `Desfecho dos ${nSub} sujeitos`, d: 'Distribuição dos sujeitos por desfecho no teste, segundo a auditoria das fontes primárias.',
      body: `<div class="pmos" aria-hidden="true">${mos}</div><div class="pleg">${ordF.map(f => `<span><i style="background:var(${FAM[f][0]})"></i>${FAM[f][1].split(',')[0]} ${fams[f]}</span>`).join('')}</div>`, cta: 'Ver o mosaico por estudo' }),
    card({ go: 'panorama', tab: 'Panorama', ac: 'var(--sp-rato)', t: 'Espécies estudadas', d: 'Número de estudos e soma do N por espécie. Os ratos predominam nos estudos brasileiros; os estudos com humanos usam principalmente ambientes virtuais.', body: `<div class="psp">${spRows}</div>`, cta: 'Ver espécies e tarefas' }),
    card({ w: 'w2', go: 'aparatos', tab: 'Aparatos', k: `${nFig} figuras`, ac: 'var(--ice)', t: 'Aparatos experimentais', d: `Fotografias e diagramas reproduzidos dos artigos: ${nFig} figuras de ${nFigS} estudos, agrupadas por tipo de tarefa, com crédito e licença.`,
      body: `<div class="pthumbs">${th.map(s => `<span><img src="${esc(s.media[0].thumb)}" data-full="${esc(s.media[0].src)}" data-fb="${s.n}" alt="" loading="lazy"></span>`).join('')}</div>`, cta: 'Abrir a galeria de aparatos' }),
    card({ go: 'tabela', tab: 'Tabela 1', ac: 'var(--o-res)', t: 'Tabela 1 e auditoria', d: 'Os 43 estudos em uma tabela que pode ser ordenada, filtrada e exportada em CSV. Cada linha foi conferida na fonte primária.',
      body: `<table class="ptab">${tabRows}</table><div class="pflags"><span style="border-color:var(--o-res)">${fl.ok} confere</span><span style="border-color:var(--s4)">${fl.ressalva} com ressalva</span><span style="border-color:var(--o-tar)">${fl.diverge} diverge</span></div>`, cta: 'Abrir a tabela' }),
    card({ go: 'desafios', tab: 'Desafios', k: `${nQ}/5 jogados`, ac: 'var(--s1)', t: 'Desafios por era', d: 'Três questões de revisão para cada era. Os acertos na primeira tentativa são registrados.', body: `<div class="peras">${eras}</div><p class="pd">${nextE ? `Próximo: <b style="color:var(--ink)">Era ${ROMAN[nextE.idx]} · ${esc(nextE.nome)}</b>. Recomenda-se ler as fichas da era antes.` : 'Todos os desafios foram jogados.'}</p>`, cta: 'Jogar os desafios' }),
    card({ go: 'panorama', tab: 'Panorama', ac: 'var(--s2)', t: 'Seleção dos estudos e terminologia', d: `Fluxo de seleção segundo o PRISMA-ScR (471 registros, 43 estudos incluídos) e os ${DATA.terms.length} termos usados para o mesmo processo.`,
      body: `<div class="pfun">${funH}</div><div class="pterms">${DATA.terms.slice(0, 5).map(x => `<span>${esc(x)}</span>`).join('')}</div>`, cta: 'Ver o fluxo e os termos' }),
    card({ w: 'w2', go: 'caderno', tab: 'Seu progresso', k: `${pad(S.pts, 4)} pts · ${rankOf(S.pts)}`, ac: 'var(--s4)', t: 'Caderno do Boatacon', d: 'Cada ficha lida gera uma anotação, e cada era concluída acrescenta um resumo ao caderno.',
      body: `<div class="pprog"><img src="${SPR.cafe}" alt=""><div id="pprogRows"></div></div>`, cta: 'Abrir o caderno' }),
    card({ go: 'refs', tab: 'Referências', ac: 'var(--ice)', t: 'Referências', d: 'Referências completas das 43 fontes primárias, com DOI, repositório e revista. A lista pode ser copiada de uma só vez.', body: `<div class="pjn">${jnH}</div>`, cta: 'Ver as referências' }),
  ].join('');
  progCard();
  $$('#pgrid .pcard[role="link"]').forEach(c => c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.click(); } });
}

/* ====================== seleção e ficha ====================== */
let curTab = 'resumo';
function select(key, opts = {}) {
  key = (key === 'pro' || key === 'epi') ? key : +key;
  if (key !== 'pro' && key !== 'epi' && !byN[key]) key = 'pro';
  S.cur = key; save(); const dur = walkTo(key); paintNodes();
  if (opts.open === false) return;
  const first = !S.seen[key];
  if (key === 'pro' || key === 'epi') {
    renderSpecial(key); openDrawer(); if (first) { S.seen[key] = 1; addPts(20, $('#ficha')); }
    say(key === 'pro' ? 'Antes dos estudos com pombos, Köhler descreveu o insight em chimpanzés.' : 'Em 2026, a linha brasileira completa vinte anos; no mesmo ano, a Science publicou um estudo com mamangavas.', key === 'pro' ? 'pensa' : 'vibra');
    bubble(key === 'pro' ? 'Köhler, 1917' : '2026: mamangavas', dur); history.replaceState(null, '', '#jornada'); return;
  }
  const s = byN[key];
  curTab = opts.tab || 'resumo';
  renderFicha(s); openDrawer(); markTab(s.n, curTab);
  if (first) {
    S.seen[key] = 1; S.note.push(key); SFX.open();
    addPts(10, $('#ficha .head'));
    if (eraDone(s.era) && !S.note.includes(s.era)) { S.note.push(s.era); save(); addPts(50, false); const e = eraById[s.era]; setTimeout(() => toast('vibra', 'Era completa +50', 'Era ' + ROMAN[e.idx] + ' · ' + e.nome, 'O resumo da era foi anotado no caderno. O desafio está no cartão da era e na aba Desafios.'), 700); }
    paintNodes(); hud();
  }
  const lines = s.flag === 'diverge' ? ['A auditoria encontrou diferença entre a Tabela 1 e a fonte primária; veja a aba "Insight?".', 'celular']
    : s.bast.length ? ['Este estudo tem notas de bastidores, na aba marcada com estrela.', 'ideia']
    : [pick(['Qual é a unidade de análise deste estudo?', 'Anotado no caderno.', 'Verifique se houve resolução e se ela teve topografia de insight.', 'Observe a história de treino dos sujeitos.', 'Os valores mudam conforme a janela: primeiro teste, reteste ou estudo inteiro.']), 'pensa'];
  say(`${s.ref}: ${lines[0]}`, lines[1]);
  bubble(bubText(s), dur); const fi = frac(s.ins); if (fi && fi[0]) setTimeout(() => burst(s.n), dur * 1000 + 60);
  history.replaceState(null, '', '#estudo-' + s.n);
}
let dRet = null;
function openDrawer() {
  const d = $('#drawer'), was = dOpen();
  if (!was) { dRet = document.activeElement; d.classList.add('on'); d.setAttribute('aria-hidden', 'false'); document.body.classList.add('dopen'); }
  $('#ficha').scrollTop = 0; $('#dBoat').src = SPR[boat.cur || 'pensa'];
  if (!was) setTimeout(() => { camera(POS[S.cur], 0); const f = $('#drawer .tab[aria-selected="true"]') || $('#drawer [data-dclose]'); f && f.focus({ preventScroll: true }); }, 60);
}
function closeDrawer() {
  if (!dOpen()) return; const d = $('#drawer'); d.classList.remove('on'); d.setAttribute('aria-hidden', 'true'); document.body.classList.remove('dopen');
  const c = $(`#track .tcard[data-n="${S.cur}"]`) || $('#trackwrap'); (c || dRet) && (c || dRet).focus({ preventScroll: true });
}
const pick = a => a[Math.floor(Math.random() * a.length)];
function step(d) {
  const keys = ORDER.filter(k => k === 'pro' || k === 'epi' || matchF(byN[k]));
  let i = keys.findIndex(k => String(k) === String(S.cur)); if (i < 0) i = 0;
  const j = Math.min(keys.length - 1, Math.max(0, i + d)); if (j !== i) select(keys[j], { open: dOpen() });
}
function chips(s) {
  const e = eraById[s.era];
  return `<span class="chip">Nº ${pad(s.n)}</span><span class="chip">${s.y}</span><span class="chip">Era ${ROMAN[e.idx]}</span>`
    + `<span class="chip" style="border-color:${spVar(s.sp)}"><span style="color:${spVar(s.sp)}">${spIcon(s.sp)}</span>${esc(s.sp)}</span>`
    + `<span class="chip">${esc(s.task)}</span><span class="chip">${esc(s.doc)}</span>${s.br ? '<span class="chip" style="color:var(--s4)">Brasil</span>' : ''}`;
}
const FLAGL = { ok: 'Confere', ressalva: 'Com ressalva', diverge: 'Diverge' };
const TABS = [['resumo', 'Resumo'], ['metodo', 'Pergunta e método'], ['result', 'Resultados'], ['sujeitos', 'Sujeitos'], ['insight', 'Insight?'], ['lim', 'Limitações'], ['contexto', 'Contexto']];
function renderFicha(s) {
  const tabs = TABS.concat(s.bast.length ? [['bast', '★ Bastidores']] : []);
  const seenT = S.tabs[s.n] || [];
  const links = (s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">Acessar o estudo ↗</a>` : `<span class="chip" title="Periódico extinto, sem DOI">Sem link público</span>`)
    + (s.ju ? `<a href="${esc(s.ju)}" target="_blank" rel="noopener">${esc(s.jn)} ↗</a>` : `<span class="chip">${esc(s.jn)}</span>`)
    + s.links.map(l => `<a href="${esc(l.u)}" target="_blank" rel="noopener">${esc(l.l)} ↗</a>`).join('')
    + `<button data-spot="${s.n}" data-ctx="all">◉ Aparato em destaque</button><button data-copy="${s.n}">⧉ Copiar referência</button>`;
  $('#ficha').innerHTML = `<div class="head"><div class="chips">${chips(s)}</div><h3 class="st">${esc(s.st)}</h3><p class="teaser">${md(s.teaser)}</p>
<div class="cit">${md(s.cit)}${s.fn ? `<sup>${s.fn}</sup>` : ''}</div><div class="links">${links}</div>
<div class="carts"><div class="cart"><div class="l">N (Tabela 1)</div><div class="v">${s.N}</div></div><div class="cart"><div class="l">Resolução (Tab. 1)</div><div class="v">${esc(s.rp)}</div></div><div class="cart"><div class="l">Insight (Tab. 1)</div><div class="v">${esc(s.ins)}</div></div>
<div class="cart aud ${s.flag}"><div class="l">Auditoria da fonte primária</div><div class="v"><span class="flag ${s.flag}">${FLAGL[s.flag]}</span>${esc(s.aud)}</div></div></div></div>
<div class="tabs" role="tablist">${tabs.map(([k, l]) => `<button class="tab${k === 'bast' ? ' bast' : ''}" role="tab" data-tab="${k}" aria-selected="${k === curTab}">${l}${seenT.includes(k) ? '' : '<span class="new" title="Ainda não lida"></span>'}</button>`).join('')}</div>
<div class="pane" role="tabpanel">${pane(s, curTab)}</div>
<div class="foot"><span class="noted">✎ Anotado no caderno do Boatacon</span><span class="u-row"><button class="btn" data-step="-1">◀ Anterior</button><button class="btn hot" data-step="1">Próximo ▶</button></span></div>`;
}
function renderSpecial(k) {
  const sp = SPECIAL[k];
  $('#ficha').innerHTML = `<div class="head"><div class="chips"><span class="chip">${sp.chip}</span><span class="chip">Fora dos 43</span></div><h3 class="st">${sp.tit}</h3></div><div class="pane">${sp.html}</div>
<div class="foot"><span class="noted">${S.seen[k] ? '✓ Visitado' : ''}</span><span class="u-row"><button class="btn" data-step="-1">◀ Anterior</button><button class="btn hot" data-step="1">${k === 'pro' ? 'Começar em 1983 ▶' : 'Próximo ▶'}</button></span></div>`;
}
function markTab(n, k) {
  const arr = S.tabs[n] = S.tabs[n] || [];
  if (!arr.includes(k)) { arr.push(k); save(); addPts(k === 'bast' ? 15 : 5, $(`.tab[data-tab="${k}"]`)); const t = $(`.tab[data-tab="${k}"] .new`); t && t.remove(); }
}
function pane(s, k) {
  const H = (t) => `<h4>${t}</h4>`;
  switch (k) {
    case 'resumo': return H('Resumo dos resultados') + `<p>${md(s.para)}</p>` + `<div class="note"><b class="px" style="font-size:8px;color:var(--s3)">ANOTAÇÃO DO BOATACON</b><br>${md(s.lesson)}</div>`;
    case 'metodo': return H('Pergunta de pesquisa') + `<p>${md(s.q)}</p><div class="scene">${scene(s.task, s.sp)}<div>${H('Sequência exigida no teste')}<div class="chain">${(CHAIN[s.task] || []).map((c, i) => (i ? '<i>▶</i>' : '') + `<span>${esc(c)}</span>`).join('')}</div><p class="u-note">Esquema genérico da tarefa, desenhado para este microjogo. Os detalhes do aparato variam entre os estudos; consulte a fonte.</p></div></div>` + H('Procedimento') + `<p>${md(s.proc)}</p>` + media(s);
    case 'result': return H('Resultados') + `<p>${md(s.res)}</p>` + H('Unidade de análise') + `<p>${md(s.unit)}</p>` + H('Páginas conferidas na fonte') + `<p>${md(s.pages)}</p>`;
    case 'sujeitos': return matrix(s);
    case 'insight': return H('Como a fonte trata o insight') + `<p>${md(s.insI)}</p>` + H('Tabela 1 e fonte primária') + `<p><span class="flag ${s.flag}">${FLAGL[s.flag]}</span>${esc(s.aud)}</p>` + (s.dec ? H('Decisão da auditoria') + `<p>${md(s.dec)}</p>` : '') + `<p class="u-faint">Status: ${esc(s.audst)}</p>`;
    case 'lim': return H('Limitações e ressalvas') + `<p>${md(s.lim)}</p>` + (s.disc.length ? H('Inconsistências documentadas na fonte') + `<ul>${s.disc.map(d => `<li>${md(d)}</li>`).join('')}</ul>` : '');
    case 'contexto': return H('Contribuição') + `<p>${md(s.contrib)}</p>` + (s.eixo ? H('Eixo de leitura') + `<p>${md(s.eixo)}</p>` : '') + (s.perg ? H('Pergunta-guia') + `<p><em>${md(s.perg)}</em></p>` : '')
      + (s.rel.length ? H('Estudos relacionados') + `<div class="rel">${s.rel.map(n => `<button data-go-n="${n}">${esc(byN[n].ref)}</button>`).join('')}</div>` : '') + H('Temas') + `<div class="tags">${s.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>`;
    case 'bast': return s.bast.map(b => `<div class="bastbox"><div class="k">${{ depoimento: 'Depoimento pessoal', documento: 'Registro documental', biografia: 'Contexto biográfico', contexto: 'Contexto' }[b.tipo] || 'Bastidores'}</div><h5>${esc(b.tit)}</h5><p>${md(b.txt)}</p><small>Fonte: ${/^https?:/.test(b.fonte) ? `<a href="${esc(b.fonte)}" target="_blank" rel="noopener">${esc(b.fonte)}</a>` : esc(b.fonte)}</small></div>`).join('')
      + `<p class="u-faint">Bastidores são memórias e documentos sobre as pessoas e os laboratórios. Não são evidência experimental e não entram no artigo.</p>`;
  }
  return '';
}
function media(s) {
  if (!s.media || !s.media.length) return '';
  return `<h4>Figuras</h4>` + s.media.map((m, i) => `<figure class="ffig"><button class="figbtn" data-spot="${s.n}" data-ctx="all" data-i="${i}" aria-label="Ampliar a figura ${i + 1}"><img src="${esc(m.src)}" alt="${esc(m.alt || m.cap || '')}" loading="lazy"><span class="zoom">ampliar ⤢</span></button><figcaption class="u-note">${md(m.cap || '')} <span style="color:var(--mute)">${esc(m.credit || s.ref)}${m.lic ? ' · ' + esc(m.lic) : ''}</span></figcaption></figure>`).join('');
}
function matrix(s) {
  const all = s.mtx.groups.flatMap(g => g.s);
  const present = Object.keys(STATES).filter(k => all.some(t => t.st === k));
  const cnt = k => all.filter(t => t.st === k).length;
  const big = all.length > 40;
  let h = `<h4>Desfecho de cada sujeito · janela: ${esc(s.mtx.jan)}</h4><div class="mx-legend">${present.map(k => `<span>${tok(k, k, '', false).replace('tabindex="0"', '')} ${esc(STATES[k].l)}</span>`).join('')}</div>`;
  h += s.mtx.groups.map(g => `<div class="mx-group"><div class="gl">${esc(g.g)} (${g.s.length})</div><div class="toks">${g.s.map((t, i) => tok(t.st, (t.id || 'Sujeito ' + (i + 1)) + ' · ' + g.g, t.nt, big)).join('')}</div></div>`).join('');
  h += `<div class="mx-sum">${present.map(k => `<span>${esc(STATES[k].l.split(' (')[0].split(';')[0])}: <b>${cnt(k)}</b></span>`).join(' · ')}</div>`;
  if (s.table) (Array.isArray(s.table) ? s.table : [s.table]).forEach(t => { h += `<h4>${esc(t.tit || 'Dados por grupo ou experimento')}</h4><div class="dtwrap"><table class="dt"><caption>${esc(t.cap)}</caption><thead><tr>${t.head.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${t.rows.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; });
  h += `<p class="u-note u-mt">Classificação feita para este microjogo a partir da auditoria das fontes primárias. Toque ou passe o mouse em cada quadrado. Sujeitos sem código no artigo aparecem como "Sujeito n".</p>`;
  return h;
}


/* ====================== aparatos: galeria e destaque ====================== */
const FAMS = DATA.familias;
const famOf = s => FAMS.find(f => f.tasks.includes(s.task));
let famCur = 'caixa';
const thumb = s => s.media.length ? `<img data-fb="${s.n}" src="${esc(s.media[0].thumb)}" data-full="${esc(s.media[0].src)}" alt="${esc(s.media[0].alt || s.media[0].cap || s.ap)}" loading="lazy">` : scene(s.task, s.sp);
function aparatos() {
  $('#famtabs').innerHTML = FAMS.map(f => `<button role="tab" data-fam="${f.id}" class="${f.id === famCur ? 'on' : ''}" aria-selected="${f.id === famCur}">${esc(f.nome)}<span class="ct">${ST.filter(s => f.tasks.includes(s.task)).length}</span></button>`).join('');
  const f = FAMS.find(x => x.id === famCur), list = ST.filter(s => f.tasks.includes(s.task));
  const sps = [...new Set(list.map(s => s.sp))], ys = list.map(s => s.y), reais = list.filter(s => s.media.length).length;
  $('#famintro').innerHTML = `<div>${scene(f.tasks[0], list[0].sp)}</div><div><h3>${esc(f.nome)}</h3><p>${esc(f.txt)}</p><div class="sps">${sps.map(sp => `<span class="chip" style="border-color:${spVar(sp)}"><span style="color:${spVar(sp)}">${spIcon(sp)}</span>${esc(sp)}</span>`).join('')}</div><p class="vt" style="font-size:20px;margin-top:10px">${list.length} estudos · ${Math.min(...ys)}–${Math.max(...ys)}${reais ? ` · ${reais} com figuras do artigo` : ''}</p></div>`;
  $('#gal').innerHTML = list.map(s => `<button class="gc" data-spot="${s.n}" data-ctx="fam" aria-label="${esc(s.ref + ': ' + s.ap)}"><div class="th">${thumb(s)}</div><span class="badge ${s.media.length ? 'real' : ''}">${s.media.length ? (s.media.length > 1 ? s.media.length + ' figuras' : '1 figura') : 'esquema'}</span>${S.spot[s.n] ? '<span class="seen" title="Já visto"></span>' : ''}<div class="bd"><span class="rf">${esc(s.ref)}</span><span class="chip" style="align-self:flex-start;border-color:${spVar(s.sp)}"><span style="color:${spVar(s.sp)}">${spIcon(s.sp)}</span>${esc(s.sp)} · ${esc(s.task)}</span><span class="ap">${esc(s.ap)}</span></div></button>`).join('');
}
let SPOT = { list: [], k: 0, i: 0 };
function openSpot(n, ctx, i) {
  const s = byN[n]; const f = famOf(s);
  SPOT.list = ctx === 'all' ? ST.map(x => x.n) : ST.filter(x => f.tasks.includes(x.task)).map(x => x.n);
  SPOT.k = SPOT.list.indexOf(n); SPOT.i = Math.min(i || 0, Math.max(0, s.media.length - 1)); SPOT.ctx = ctx;
  $('#spot').classList.add('on'); renderSpot(); $('#spot').scrollTop = 0;
}
function spotMove(kind, d) {
  const s = byN[SPOT.list[SPOT.k]];
  if (kind === 'auto' && s.media.length > 1) { const j = SPOT.i + d; if (j >= 0 && j < s.media.length) { SPOT.i = j; renderSpot(); return; } }
  if (kind === 'img') { SPOT.i = (SPOT.i + d + s.media.length) % s.media.length; renderSpot(); return; }
  const k = SPOT.k + d; if (k < 0 || k >= SPOT.list.length) return; SPOT.k = k; SPOT.i = 0; renderSpot(); $('#spot').scrollTop = 0;
}
function renderSpot() {
  const s = byN[SPOT.list[SPOT.k]], m = s.media, cur = m[SPOT.i];
  if (!S.spot[s.n]) { S.spot[s.n] = 1; save(); addPts(5, false); }
  const viewer = cur ? `<img data-fb="${s.n}" src="${esc(cur.src)}" alt="${esc(cur.alt || cur.cap || s.ap)}">${m.length > 1 ? `<button class="vnav l" data-sv="img" data-d="-1" aria-label="Imagem anterior">◀</button><button class="vnav r" data-sv="img" data-d="1" aria-label="Próxima imagem">▶</button>` : ''}` : scene(s.task, s.sp);
  const capt = cur ? `<div class="cap">${md(cur.cap || '')}</div><div class="cred">${esc(cur.credit || s.ref)}${cur.lic ? ' · ' + esc(cur.lic) : ''}${m.length > 1 ? ` · imagem ${SPOT.i + 1} de ${m.length}` : ''}</div>`
    : `<div class="cap">Esquema genérico da tarefa, desenhado para este microjogo. Os detalhes do aparato variam entre os estudos.</div>`;
  const prev = byN[SPOT.list[SPOT.k - 1]], next = byN[SPOT.list[SPOT.k + 1]];
  const e = eraById[s.era];
  $('#sbox').innerHTML = `<button class="btn x" data-close aria-label="Fechar">✕</button><div class="kick" id="spotTitle">Aparato em destaque · ${SPOT.ctx === 'all' ? 'todos os estudos' : esc(famOf(s).nome)} · ${SPOT.k + 1} de ${SPOT.list.length}</div>
<div class="sgrid"><div><div class="viewer">${viewer}</div>${capt}${m.length > 1 ? `<div class="thumbs">${m.map((x, i) => `<button data-si="${i}" class="${i === SPOT.i ? 'on' : ''}" aria-label="Imagem ${i + 1}"><img src="${esc(x.thumb)}" data-full="${esc(x.src)}" data-fb="${s.n}" alt=""></button>`).join('')}</div>` : ''}</div>
<div><div class="chips u-row"><span class="chip">Nº ${pad(s.n)}</span><span class="chip">${s.y}</span><span class="chip">Era ${ROMAN[e.idx]}</span><span class="chip" style="border-color:${spVar(s.sp)}"><span style="color:${spVar(s.sp)}">${spIcon(s.sp)}</span>${esc(s.sp)}</span></div>
<h3 class="st">${esc(s.ref)}: ${esc(s.st)}</h3>
<h4>O aparato</h4><p>${md(s.ap)}</p>
<h4>Sequência exigida no teste</h4><div class="chain">${(CHAIN[s.task] || []).map((c, i) => (i ? '<i>▶</i>' : '') + `<span>${esc(c)}</span>`).join('')}</div>
<h4>No teste</h4><p style="font-size:15px">${md(s.teaser)}</p>
<div class="carts"><div class="cart"><div class="l">N</div><div class="v">${s.N}</div></div><div class="cart"><div class="l">Resolução</div><div class="v">${esc(s.rp)}</div></div><div class="cart"><div class="l">Insight</div><div class="v">${esc(s.ins)}</div></div></div>
<details class="u-mt"><summary>Procedimento completo</summary><p class="u-mt">${md(s.proc)}</p></details>
<div class="u-row u-mt"><button class="btn hot" data-go-n="${s.n}">Abrir a ficha completa</button>${s.url ? `<a class="btn" style="text-decoration:none" href="${esc(s.url)}" target="_blank" rel="noopener">Acessar o estudo ↗</a>` : ''}</div></div></div>
<div class="snav"><button class="btn" data-sv="study" data-d="-1" ${prev ? '' : 'disabled'}>◀ ${prev ? esc(prev.ref) : 'início'}</button><span class="vt" style="font-size:18px;color:var(--mute)">← → troca imagem ou estudo · Shift + ← → troca estudo · Esc fecha</span><button class="btn" data-sv="study" data-d="1" ${next ? '' : 'disabled'}>${next ? esc(next.ref) : 'fim'} ▶</button></div>`;
  if ($('#s-aparatos').classList.contains('on')) { const card = $(`.gc[data-spot="${s.n}"]`); if (card && !card.querySelector('.seen')) card.insertAdjacentHTML('beforeend', '<span class="seen" title="Já visto"></span>'); }
}

document.addEventListener('error', e => {
  const im = e.target; if (!im || im.tagName !== 'IMG' || !im.dataset.fb) return;
  if (im.dataset.full && !im.dataset.tried && !im.src.endsWith(im.dataset.full)) { im.dataset.tried = 1; im.src = im.dataset.full; return; }
  const s = byN[+im.dataset.fb]; if (!s) return;
  const holder = im.closest('.th, .viewer, .cth'); if (holder) holder.innerHTML = scene(s.task, s.sp);
}, true);
/* ====================== tooltip ====================== */
const tip = $('#tip'); let tipHold = 0;
function showTip(el, x, y) { tip.innerHTML = `<b>${el.dataset.tt}</b>${el.dataset.tb || ''}`; tip.style.display = 'block'; const r = tip.getBoundingClientRect(); tip.style.left = Math.min(innerWidth - r.width - 8, x + 14) + 'px'; tip.style.top = Math.max(8, y - r.height - 12) + 'px'; }
const HOVER = !window.matchMedia || matchMedia('(hover: hover)').matches;
document.addEventListener('mouseover', e => { const el = e.target.closest('[data-tt]'); if (el && HOVER) showTip(el, e.clientX, e.clientY); });
document.addEventListener('mousemove', e => { if (tip.style.display === 'block' && e.target.closest('[data-tt]')) showTip(e.target.closest('[data-tt]'), e.clientX, e.clientY); });
document.addEventListener('mouseout', e => { if (e.target.closest('[data-tt]') && !tipHold) tip.style.display = 'none'; });
document.addEventListener('focusin', e => { const el = e.target.closest('[data-tt]'); if (el && el.matches(':focus-visible')) { const r = el.getBoundingClientRect(); showTip(el, r.left, r.top); } });
document.addEventListener('focusout', () => { tip.style.display = 'none'; });
document.addEventListener('touchstart', e => { const el = e.target.closest('.tok,[data-hit]'); if (el && el.dataset.tt) { const t = e.touches[0]; showTip(el, t.clientX, t.clientY); clearTimeout(tipHold); tipHold = setTimeout(() => { tip.style.display = 'none'; tipHold = 0; }, 2600); } }, { passive: true });

/* ====================== telas ====================== */
const SCREENS = ['jornada', 'panorama', 'aparatos', 'tabela', 'desafios', 'caderno', 'album', 'conquistas', 'refs', 'sobre'];
function go(name, push = true) {
  if (!SCREENS.includes(name)) name = 'jornada';
  $$('.screen').forEach(s => s.classList.toggle('on', s.id === 's-' + name));
  $$('.navb').forEach(b => b.setAttribute('aria-current', b.dataset.go === name ? 'page' : 'false'));
  if (name !== 'jornada') closeDrawer();
  if (name === 'jornada') { buildTrack(); select(S.cur || 'pro', { open: false }); panoramas(); }
  if (name === 'panorama') { panorama(); if (!S.misc.pan) { S.misc.pan = 1; addPts(10, false); } }
  if (name === 'aparatos') aparatos();
  if (name === 'tabela') table1();
  if (name === 'desafios') quizCards();
  if (name === 'caderno') notebook();
  if (name === 'album') album();
  if (name === 'conquistas') achievements();
  if (name === 'refs') refs();
  if (name === 'sobre') about();
  if (push && name !== 'jornada') history.replaceState(null, '', '#' + name);
  window.scrollTo({ top: 0 });
  checkAch();
}

/* ====================== panorama ====================== */
function panorama() {
  const Ns = ST.map(s => s.N).sort((a, b) => a - b); const sumN = Ns.reduce((a, b) => a + b, 0);
  const med = Ns.length % 2 ? Ns[(Ns.length - 1) / 2] : (Ns[Ns.length / 2 - 1] + Ns[Ns.length / 2]) / 2;
  const mean = sumN / Ns.length, sd = Math.sqrt(Ns.reduce((a, b) => a + (b - mean) ** 2, 0) / (Ns.length - 1));
  const br = ST.filter(s => s.br).length, tasks = new Set(ST.map(s => s.task)).size, teses = ST.filter(s => s.doc !== 'Artigo').length;
  const tiles = [[ST.length, 'Estudos incluídos', '1983–2026'], [new Set(ST.map(s => s.sp)).size, 'Espécies', 'pombos, ratos, humanos, macacos-prego, corvos e cães'],
    [sumN, 'Sujeitos (soma do N)', 'não são indivíduos únicos: há animais em mais de um estudo'], [String(med), 'Mediana de sujeitos por estudo', `M = ${fmt(mean)}; DP = ${fmt(sd)}; mín. ${Ns[0]}, máx. ${Ns[Ns.length - 1]}`],
    [tasks, 'Tarefas diferentes', 'deslocamento de caixa em ' + ST.filter(s => s.task === 'Deslocamento de caixa').length + ' estudos'],
    [br, 'Estudos brasileiros', `${fmt(br / ST.length * 100)}% do total; ${br} de ${ST.filter(s => s.y >= 2006).length} desde 2006`], [teses, 'Dissertações e teses', `${ST.length - teses} artigos`]];
  $('#tiles').innerHTML = tiles.map(([v, l, s]) => `<div class="tile panel"><div class="v">${v}</div><div class="l">${l}</div><div class="s">${esc(s)}</div></div>`).join('');
  chartYear(); chartBars('#chSpS', SP_ORDER.map(sp => [sp, ST.filter(s => s.sp === sp).length]), 'estudos');
  chartBars('#chSpN', SP_ORDER.map(sp => [sp, ST.filter(s => s.sp === sp).reduce((a, s) => a + s.N, 0)]), 'sujeitos');
  const tk = {}; ST.forEach(s => (tk[s.task] = (tk[s.task] || 0) + 1));
  chartBars('#chTask', Object.entries(tk).sort((a, b) => b[1] - a[1]), 'estudos', true);
  $('#brStrip').innerHTML = ST.map(s => `<i class="${s.br ? 'br' : ''}" data-tt="${esc(s.ref)}" data-tb="${s.br ? 'Autoria brasileira' : 'Autoria estrangeira'}" data-go-n="${s.n}"></i>`).join('');
  $('#brTxt').textContent = `${br} de ${ST.length} estudos. Antes de 2006, nenhum; a partir de 2006, ${ST.filter(s => s.br && s.y >= 2006).length} de ${ST.filter(s => s.y >= 2006).length}.`;
  $('#mosLeg').innerHTML = Object.entries(FAM).map(([k, [v, l]]) => `<span><i style="display:inline-block;width:12px;height:12px;background:var(${v});border:1px solid #3a3d63"></i>${l}</span>`).join('');
  const famOf = st => STATES[st].f;
  $('#mosaic').innerHTML = ST.map(s => `<div class="lb" data-go-n="${s.n}" title="${esc(s.ref)}">${esc(s.ref)}</div><div class="row">${s.mtx.groups.flatMap(g => g.s.map((t, i) => `<i style="background:var(${FAM[famOf(t.st)][0]})" data-tt="${esc((t.id || 'Sujeito') + ' · ' + s.ref)}" data-tb="${esc(STATES[t.st].l)}"></i>`)).join('')}</div>`).join('');
  prisma(); terms();
}
function svgEl(w, h, inner, label) { return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">${inner}</svg>`; }
function chartYear() {
  const W = 1000, H = 330, L = 44, R = 16, T = 14, mid = 170, B = 300;
  const yrs = []; for (let y = Y0; y <= Y1; y++) yrs.push(y);
  const by = {}; ST.forEach(s => (by[s.y] = by[s.y] || []).push(s));
  const bw = (W - L - R) / yrs.length, X = y => L + (y - Y0) * bw + bw / 2;
  let cum = 0; const pts = yrs.map(y => { cum += (by[y] || []).length; return [X(y), cum]; });
  const yC = v => mid - 18 - (v / 45) * (mid - 18 - T), yB = v => B - (v / 4) * (B - mid - 22);
  let g = '';
  [0, 10, 20, 30, 40].forEach(v => { g += `<line class="gridl" x1="${L}" x2="${W - R}" y1="${yC(v)}" y2="${yC(v)}"/><text x="${L - 6}" y="${yC(v) + 5}" text-anchor="end" font-size="16">${v}</text>`; });
  [0, 2, 4].forEach(v => { g += `<line class="gridl" x1="${L}" x2="${W - R}" y1="${yB(v)}" y2="${yB(v)}"/><text x="${L - 6}" y="${yB(v) + 5}" text-anchor="end" font-size="16">${v}</text>`; });
  [2006, 2017].forEach(y => { g += `<line x1="${X(y) - bw / 2}" x2="${X(y) - bw / 2}" y1="${T}" y2="${B}" stroke="var(--s4)" stroke-dasharray="4 5" opacity=".6"/>`; });
  g += `<text x="${X(2006) - bw / 2 + 6}" y="${T + 14}" font-size="16" fill="var(--s4)">2006 · Delage e Tobias</text><text x="${X(2017) - bw / 2 - 6}" y="${T + 36}" text-anchor="end" font-size="16" fill="var(--s4)">2017 · aumento da produção</text>`;
  g += `<polyline points="${pts.map(([x, v]) => x + ',' + yC(v)).join(' ')}" fill="none" stroke="var(--s3)" stroke-width="2"/>`;
  g += `<circle cx="${pts[pts.length - 1][0]}" cy="${yC(43)}" r="4" fill="var(--s3)"/><text x="${pts[pts.length - 1][0] - 6}" y="${yC(43) - 8}" text-anchor="end" font-size="18" fill="var(--ink)">N = 43</text>`;
  g += `<text x="${L}" y="${mid - 4}" font-size="15">acumulado ↑ · por ano ↓</text>`;
  yrs.forEach(y => { const k = (by[y] || []).length; if (k) g += `<rect class="bar" x="${X(y) - bw / 2 + 2}" y="${yB(k)}" width="${bw - 4}" height="${B - yB(k)}" rx="2" fill="var(--s3)"/>`; });
  g += `<line class="axis" x1="${L}" x2="${W - R}" y1="${B}" y2="${B}"/>`;
  [1983, 1990, 1993, 2000, 2006, 2010, 2017, 2021, 2026].forEach(y => { g += `<text x="${X(y)}" y="${B + 22}" text-anchor="middle" font-size="16">${y}</text>`; });
  let c2 = 0;
  yrs.forEach(y => { c2 += (by[y] || []).length; const list = (by[y] || []).map(s => s.ref).join('; '); g += `<rect class="hit" data-hit="1" x="${X(y) - bw / 2}" y="${T}" width="${bw}" height="${B - T}" data-tt="${y}" data-tb="${esc((by[y] || []).length + ' estudo(s) no ano; ' + c2 + ' acumulados. ' + (list || 'Nenhum estudo incluído.'))}"/>`; });
  $('#chYear').innerHTML = svgEl(W, H, g, 'Publicações por ano e acumulado, 1983 a 2026') + `<details class="u-mt"><summary style="cursor:pointer;color:var(--ink2);font-size:13px">Ver em tabela</summary><table class="dt"><thead><tr><th>Ano</th><th>Estudos</th><th>Acumulado</th></tr></thead><tbody>${(() => { let c = 0; return yrs.filter(y => by[y]).map(y => { c += by[y].length; return `<tr><td>${y}</td><td>${by[y].map(s => esc(s.ref)).join('; ')}</td><td>${c}</td></tr>`; }).join(''); })()}</tbody></table></details>`;
}
function chartBars(sel, rows, unit, neutral) {
  const W = 520, rh = 34, L = neutral ? 190 : 150, R = 52, H = rows.length * rh + 10, max = Math.max(...rows.map(r => r[1]));
  let g = '';
  rows.forEach(([k, v], i) => {
    const y = 6 + i * rh, w = (W - L - R) * v / max, col = neutral ? 'var(--s3)' : spVar(k);
    g += `<text x="${L - 10}" y="${y + 21}" text-anchor="end" font-size="18" fill="var(--ink)">${esc(k)}</text>`;
    if (!neutral) g += `<g transform="translate(4 ${y + 6}) scale(1.6)" style="color:${col}">${icon(SP[k].k).replace(/<\/?svg[^>]*>/g, '')}</g>`;
    g += `<rect class="bar" x="${L}" y="${y + 6}" width="${Math.max(3, w)}" height="${rh - 14}" rx="3" fill="${col}"/><text x="${L + w + 8}" y="${y + 22}" font-size="19" fill="var(--ink)">${v}</text>`;
    g += `<rect class="hit" data-hit="1" x="0" y="${y}" width="${W}" height="${rh}" data-tt="${esc(k)}" data-tb="${v} ${unit}"/>`;
  });
  $(sel).innerHTML = svgEl(W, H, g, `Barras: ${unit} por categoria`);
}
function prisma() {
  const p = DATA.prisma;
  $('#prisma').innerHTML = `<div class="prisma">
<div class="ph">IDENTIFICAÇÃO</div><div class="bx">Bases de dados: <b>${p.bases.reduce((a, b) => a + b[1], 0)}</b><br>${p.bases.map(([k, v]) => `${k} (${v})`).join(' · ')}</div><div class="bx out">Outras fontes: <b>${p.outras.reduce((a, b) => a + b[1], 0)}</b><br>${p.outras.map(([k, v]) => `${k} (${v})`).join(' · ')}</div>
<div class="ph">TRIAGEM</div><div class="bx">Registros identificados: <b>${p.total}</b><br>Duplicatas removidas: ${p.dup}<br>Registros triados: <b>${p.triados}</b></div><div class="bx out">Excluídos na triagem: <b>${p.exc_tri}</b><br>Título e resumo (${p.exc_tit}) · artigos derivados de teses e dissertações (${p.exc_der})</div>
<div class="ph">ELEGIBILIDADE</div><div class="bx">Textos completos avaliados: <b>${p.eleg}</b></div><div class="bx out">Excluídos: ${p.exc_eleg} · incluídos por busca retroativa: ${p.retro}</div>
<div class="ph">INCLUSÃO</div><div class="bx fin">Estudos incluídos na revisão: <b>${p.incl}</b></div><div></div></div>`;
}
function terms() {
  $('#terms').innerHTML = DATA.terms.map((t, i) => `<button data-term="${i}" class="${S.terms[i] ? 'on' : ''}">${esc(t)}</button>`).join('');
}

/* ====================== Tabela 1 ====================== */
let tsort = { k: 'n', d: 1 };
const T1COLS = [['n', 'Nº'], ['ref', 'Estudo'], ['sp', 'Espécie'], ['N', 'N'], ['task', 'Tarefa'], ['rp', 'RP'], ['ins', 'Insight'], ['flag', 'Auditoria']];
function table1() {
  const sp = $('#tSp').value, tk = $('#tTask').value, fl = $('#tFlag').value, q = norm($('#tQ').value || '');
  let rows = ST.filter(s => (!sp || s.sp === sp) && (!tk || s.task === tk) && (!fl || s.flag === fl) && (!q || norm(s.ref + ' ' + s.cit + ' ' + s.aud).includes(q)));
  rows.sort((a, b) => { const x = a[tsort.k], y = b[tsort.k]; return (typeof x === 'number' ? x - y : String(x).localeCompare(String(y), 'pt')) * tsort.d; });
  $('#t1').innerHTML = `<thead><tr>${T1COLS.map(([k, l]) => `<th data-sort="${k}">${l}${tsort.k === k ? (tsort.d > 0 ? ' ▲' : ' ▼') : ''}</th>`).join('')}</tr></thead><tbody>`
    + rows.map(s => `<tr data-go-n="${s.n}"><td class="num">${pad(s.n)}</td><td>${esc(s.ref)}${s.fn ? `<sup>${s.fn}</sup>` : ''}<br><span class="u-faint">${esc(s.doc)}${S.seen[s.n] ? ' · lido' : ''}</span></td><td><span style="color:${spVar(s.sp)};display:inline-block;width:16px;vertical-align:-2px">${spIcon(s.sp)}</span> ${esc(s.sp)}</td><td class="num">${s.N}</td><td>${esc(s.task)}</td><td class="num">${esc(s.rp)}</td><td class="num">${esc(s.ins)}</td><td><span class="flag ${s.flag}">${FLAGL[s.flag]}</span><span style="font-size:13px">${esc(s.aud)}</span></td></tr>`).join('') + '</tbody>';
}
function csv() {
  const head = ['n', 'ano', 'estudo', 'especie', 'N', 'tarefa', 'RP_tabela1', 'insight_tabela1', 'auditoria', 'nota_auditoria', 'referencia', 'link'];
  const q = v => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
  const lines = [head.join(';')].concat(ST.map(s => [s.n, s.y, s.ref, s.sp, s.N, s.task, s.rp, s.ins, FLAGL[s.flag], s.aud, s.cit, s.url || ''].map(q).join(';')));
  dl('insight_recombinacao_43_estudos.csv', '﻿' + lines.join('\n'), 'text/csv');
}
function dl(name, text, type) { const b = new Blob([text], { type: type + ';charset=utf-8' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); }

/* ====================== desafios ====================== */
function quizCards() {
  $('#quizcards').innerHTML = ERAS.map((e, i) => { const q = S.quiz[e.id] || {}; const ok = (q.first || []).filter(Boolean).length; const read = ST.filter(s => s.era === e.id && S.seen[s.n]).length, tot = ST.filter(s => s.era === e.id).length;
    return `<div class="qc panel"><div class="kick">Era ${ROMAN[i]} · ${e.de}–${e.ate}</div><div class="t">${esc(e.nome)}</div><div class="s">${q.done ? `Acertos de primeira: ${ok}/3` : 'Ainda não jogado'}</div><div class="s" style="font-size:17px">Fichas lidas na era: ${read}/${tot}</div><p class="u-note">${esc(e.intro)}</p><button class="btn hot" data-quiz="${e.id}">${q.done ? 'Jogar de novo' : '★ Jogar'}</button></div>`; }).join('');
}
let QZ = null;
function openQuiz(eid) { QZ = { e: eid, i: 0, ok: 0 }; S.quiz[eid] = S.quiz[eid] || { first: [] }; renderQ(); $('#modal').classList.add('on'); }
function renderQ() {
  const e = eraById[QZ.e], qs = DATA.quiz[QZ.e], q = qs[QZ.i];
  QZ.ord = q.o.map((_, i) => i); for (let i = QZ.ord.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [QZ.ord[i], QZ.ord[j]] = [QZ.ord[j], QZ.ord[i]]; }
  $('#mbox').innerHTML = `<button class="btn x" data-close>✕</button><div class="kick" id="mTitle">Desafio · Era ${ROMAN[e.idx]} · ${esc(e.nome)} · pergunta ${QZ.i + 1}/3</div><div class="q">${esc(q.q)}</div><div class="opts">${QZ.ord.map((i, pos) => `<button data-opt="${i}">${String.fromCharCode(65 + pos)}) ${esc(q.o[i])}</button>`).join('')}</div><div id="qfb"></div>`;
  $('#mbox [data-opt]') && $('#mbox [data-opt]').focus();
}
function answer(i) {
  const qs = DATA.quiz[QZ.e], q = qs[QZ.i], right = i === q.a; const rec = S.quiz[QZ.e];
  $$('#mbox [data-opt]').forEach(b => { const k = +b.dataset.opt; b.disabled = true; if (k === q.a) b.classList.add('right'); else if (k === i) b.classList.add('wrong'); });
  if (right) QZ.ok++;
  if (rec.first[QZ.i] === undefined) { rec.first[QZ.i] = right; save(); if (right) addPts(20, $('#mbox')); }
  right ? SFX.right() : SFX.wrong();
  const last = QZ.i === qs.length - 1;
  $('#qfb').innerHTML = `<div class="fb"><img src="${SPR[right ? 'ok' : 'ombros']}" alt=""><div><b class="px" style="font-size:10px;color:${right ? 'var(--ok)' : 'var(--bad)'}">${right ? 'ISSO!' : 'QUASE.'}</b><p style="margin:6px 0 10px">${esc(q.e)}</p><div class="u-row"><button class="btn" data-qgo="${q.s}">Abrir ficha de ${esc(byN[q.s].ref)}</button><button class="btn hot" data-qnext>${last ? 'Ver resultado' : 'Próxima ▶'}</button></div></div></div>`;
  $('#qfb [data-qnext]').focus();
}
function nextQ() {
  const qs = DATA.quiz[QZ.e];
  if (QZ.i < qs.length - 1) { QZ.i++; renderQ(); return; }
  S.quiz[QZ.e].done = 1; save(); checkAch();
  const img = QZ.ok === 3 ? 'vibra' : QZ.ok === 2 ? 'ok' : QZ.ok === 1 ? 'uhmm' : 'ombros';
  $('#mbox').innerHTML = `<button class="btn x" data-close>✕</button><div class="kick" id="mTitle">Resultado</div><div style="display:flex;gap:18px;align-items:center;margin-top:12px"><img src="${SPR[img]}" alt="" style="height:150px;image-rendering:pixelated"><div><div class="vt" style="font-size:54px;line-height:1">${QZ.ok}/3</div><p>${QZ.ok === 3 ? 'Três acertos em três perguntas.' : QZ.ok >= 1 ? 'Parte das respostas está correta. Releia as fichas da era e tente novamente.' : 'Nenhuma resposta correta. Leia as fichas da era antes de tentar novamente.'}</p><div class="u-row"><button class="btn" data-quiz="${QZ.e}">Jogar de novo</button><button class="btn hot" data-close>Fechar</button></div></div></div>`;
  quizCards();
}
function closeModal() { $('#modal').classList.remove('on'); $('#spot').classList.remove('on'); }

/* ====================== caderno ====================== */
function notebook() {
  const nb = $('#nb');
  if (!S.note.length) { nb.innerHTML = `<h3>Caderno de pesquisa · Boatacon</h3><p class="empty">O caderno ainda está em branco. Abra uma ficha na Jornada e a primeira anotação aparece aqui.</p>`; return; }
  let k = 0;
  nb.innerHTML = `<h3>Caderno de pesquisa · Boatacon</h3><p style="margin:0 0 26px;line-height:32px">${nSeen()} de 43 estudos anotados · ${rankOf(S.pts)} · ${pad(S.pts, 4)} pontos</p>` + S.note.map(x => {
    if (typeof x === 'string') { const e = eraById[x]; return `<div class="entry era"><div class="k">FIM DA ERA ${ROMAN[e.idx]} · ${e.de}–${e.ate}</div><div class="t">${esc(e.nome)}</div><p>${esc(e.fecho)}</p></div>`; }
    const s = byN[x]; k++;
    return `<div class="entry"><div class="k">ANOTAÇÃO ${pad(k)} · ${esc(s.ref)} · ${esc(s.sp)}</div><div class="t">${esc(s.st)}</div><p>${md(s.lesson)}</p>${s.perg ? `<p class="pq">Para pensar: ${md(s.perg)}</p>` : ''}<button data-go-n="${s.n}">abrir a ficha</button></div>`;
  }).join('');
}
function nbText() {
  let t = `CADERNO DE PESQUISA DO BOATACON\nInsight e recombinação de repertórios · Microjogo CRIACOM Vol. 14\n${location.href.split('#')[0]}\n\n${nSeen()} de 43 estudos · ${rankOf(S.pts)} · ${S.pts} pontos\n\n`;
  let k = 0;
  S.note.forEach(x => { if (typeof x === 'string') { const e = eraById[x]; t += `== FIM DA ERA ${ROMAN[e.idx]}: ${e.nome} (${e.de}–${e.ate}) ==\n${e.fecho}\n\n`; } else { const s = byN[x]; k++; t += `[${pad(k)}] ${s.ref} · ${s.sp}\n${s.st}\n${s.lesson}\n${s.perg ? 'Para pensar: ' + s.perg + '\n' : ''}Ref.: ${s.cit.replace(/\*/g, '')}\n\n`; } });
  return t;
}
async function card() {
  try { await document.fonts.load('20px PS2P'); await document.fonts.load('20px VT'); } catch (e) { /* segue com fonte padrão */ }
  const c = document.createElement('canvas'); c.width = 1080; c.height = 1350; const x = c.getContext('2d');
  x.fillStyle = '#0d0e1f'; x.fillRect(0, 0, 1080, 1350);
  ['#e8442e', '#f2762e', '#f6a530', '#f5cf3b'].forEach((col, i) => { x.fillStyle = col; x.fillRect(0, 760 + i * 34, 1080, 34); });
  x.fillStyle = '#ece6d6'; x.font = '28px PS2P'; x.fillText('CRIACOM · MICROJOGO VOL. 14', 70, 110);
  x.fillStyle = '#ffffff'; x.font = '112px PS2P'; x.fillText('INSIGHT', 70, 270);
  x.fillStyle = '#f5cf3b'; x.font = '34px PS2P'; x.fillText('E RECOMBINAÇÃO DE REPERTÓRIOS', 70, 340);
  const im = new Image(); im.src = SPR.vibra; await new Promise(r => { im.onload = r; im.onerror = r; });
  x.imageSmoothingEnabled = false; const h = 560, w = im.width * h / im.height; x.drawImage(im, 1080 - w - 60, 520, w, h);
  x.fillStyle = '#ece6d6'; x.font = '64px VT';
  [[`PONTOS ${pad(S.pts, 4)}`], [`NÍVEL ${rankOf(S.pts).toUpperCase()}`], [`ESTUDOS ${nSeen()}/43`], [`CONQUISTAS ${Object.keys(S.ach).length}/${ACH.length}`], [`FIGURINHAS ${DATA.album.filter(albumOpen).length}/${DATA.album.length}`]].forEach(([t], i) => x.fillText(t, 70, 450 + i * 64));
  x.fillStyle = '#05060f'; x.fillRect(0, 1196, 1080, 154); x.fillStyle = '#b9b6d3'; x.font = '40px VT';
  x.fillText('Recombinação de repertórios, 1983–2026', 70, 1262); x.fillText('Material suplementar de Roque et al.', 70, 1306);
  x.fillStyle = '#7f7ea0'; x.font = '36px VT'; x.fillText(`43 estudos · 6 espécies · ${ST.reduce((a, s) => a + s.N, 0)} sujeitos na Tabela 1`, 70, 1000);
  c.toBlob(b => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'boatacon_insight_vol14.png'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 600); });
}

/* ====================== álbum e conquistas ====================== */
function album() {
  $('#albumCards').innerHTML = DATA.album.map((a, i) => { const open = albumOpen(a); const s0 = byN[a.ns[0]];
    return `<div class="fig panel ${open ? '' : 'lock'}"><span class="no">${pad(i + 1)}</span><div class="ic" style="background:${open ? spVar(a.sp) : 'var(--o-sem)'}">${spIcon(a.sp)}</div><div class="nm">${open ? esc(a.nm) : '???'}</div><div class="from">${open ? a.ns.map(n => esc(byN[n].ref)).join(' · ') : 'Leia ' + esc(s0.ref) + ' para liberar'}</div>${open ? `<div class="ft">${esc(a.feat)}</div><button class="btn ghost" style="margin-top:auto;font-size:8px;padding:6px" data-go-n="${a.ns[0]}">Ver ficha</button>` : ''}</div>`; }).join('');
}
function achievements() {
  $('#ranks').innerHTML = RANKS.map(([v, n]) => `<span class="${S.pts >= v ? 'on' : ''} ${rankOf(S.pts) === n ? 'cur' : ''}">${esc(n)} · ${v}</span>`).join('');
  $('#achCards').innerHTML = ACH.map(a => { const on = !!S.ach[a.id];
    const b = a.sp ? `<span style="width:30px;height:30px;color:#160b02;display:block">${spIcon(a.sp)}</span>` : esc(a.b);
    return `<div class="ach panel ${on ? '' : 'lock'}"><div class="b">${b}</div><div><div class="n">${esc(a.n)}</div><div class="d">${esc(a.d)}${on ? ' +25' : ''}</div></div></div>`; }).join('');
}

/* ====================== referências e sobre ====================== */
const OTHER_REFS = [
  'Birch, H. G. (1945). The relation of previous experience to insightful problem-solving. Journal of Comparative Psychology, 38(6), 367–383. https://doi.org/10.1037/h0056104',
  'Carvalho Neto, M. B., Barbosa, J. I., Neves Filho, H. B., Delage, P. E. G. A., & Borges, R. P. (2016). Behavior analysis, creativity and insight. In J. C. Todorov (Ed.), Trends in behavior analysis (Vol. 1, pp. 49–81). Technopolitik.',
  'Chance, P. (1999). Thorndike’s puzzle boxes and the origins of the experimental analysis of behavior. Journal of the Experimental Analysis of Behavior, 72(3), 433–440. https://doi.org/10.1901/jeab.1999.72-433',
  'Holth, P. (2008). What is a problem? Theoretical conceptions and methodological approaches to the study of problem solving. European Journal of Behavior Analysis, 9(2), 157–172. https://doi.org/10.1080/15021149.2008.11434302',
  'Kieta, A. R., Cihon, T. M., & Abdel-Jalil, A. (2019). Problem solving from a behavioral perspective: Implications for behavior analysts and educators. Journal of Behavioral Education, 28(2), 275–300. https://doi.org/10.1007/s10864-018-9296-9',
  'Köhler, W. (1925). The mentality of apes (E. Winter, Trans.). Harcourt, Brace & Company. (Trabalho original publicado em 1917)',
  'Leonardi, J. L., Andery, M. A. P., & Rossger, N. (2011). O estudo do insight pela análise do comportamento. Perspectivas em Análise do Comportamento, 2(2), 166–178. https://doi.org/10.18761/perspectivas.v2i2.63',
  'Neves Filho, H. B. (2018). Criatividade: Suas origens e produtos sob uma perspectiva comportamental. Imagine Publicações.',
  'Roque, I. N. (2024). Insight e recombinação de repertórios: Uma revisão de escopo de estudos experimentais desde Epstein, Kirshnit, Lanza e Rubin, 1984 [Dissertação de Mestrado, Universidade Estadual de Londrina].',
  'Shettleworth, S. J. (2012). Do animals have insight, and what is insight anyway? Canadian Journal of Experimental Psychology, 66(4), 217–226. https://doi.org/10.1037/a0030674',
  'Sidman, M. (2000). Equivalence relations and the reinforcement contingency. Journal of the Experimental Analysis of Behavior, 74(1), 127–146. https://doi.org/10.1901/jeab.2000.74-127',
  'Tricco, A. C., Lillie, E., Zarin, W., O’Brien, K. K., Colquhoun, H., Levac, D., Moher, D., Peters, M. D. J., Horsley, T., Weeks, L., Hempel, S., Akl, E. A., Chang, C., McGowan, J., Stewart, L., Hartling, L., Aldcroft, A., Wilson, M. G., Garritty, C., … Straus, S. E. (2018). PRISMA extension for scoping reviews (PRISMA-ScR): Checklist and explanation. Annals of Internal Medicine, 169(7), 467–473. https://doi.org/10.7326/M18-0850',
];
const linkify = t => esc(t).replace(/(https?:\/\/[^\s<]+[^\s<.,;)])/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
function allRefs() { return ST.map(s => ({ t: s.cit, star: 1, n: s.n })).concat(OTHER_REFS.map(t => ({ t, star: 0 }))).sort((a, b) => a.t.localeCompare(b.t, 'pt', { sensitivity: 'base' })); }
function refs() { $('#refs').innerHTML = allRefs().map(r => `<p>${r.star ? '<span class="star">*</span>' : ''}${linkify(r.t)}${r.star ? ` <button class="btn ghost" style="font-size:7px;padding:3px 6px" data-go-n="${r.n}">ficha</button>` : ''}</p>`).join(''); }
function about() {
  const url = location.href.split('#')[0];
  $('#about').innerHTML = `<div class="card panel"><div class="kick">O artigo</div><h3 style="margin:8px 0 10px">Insight e recombinação de repertórios: uma revisão de escopo de estudos experimentais</h3>
<p>Isabella Nataly Roque, Bruno Teixeira Silva, Lucas Caldeira de Oliveira, Gabriella Oliveira Molina, Giovanna Melo Monteverde, Yulla Christoffersen Knaus e Hernando Borges Neves Filho (Universidade Estadual de Londrina).</p>
<p>A revisão segue o PRISMA-ScR e reúne 43 estudos experimentais, publicados entre 1983 e 2026, em que repertórios foram treinados em separado e testados numa situação cuja solução exigia combiná-los numa cadeia nunca treinada. Este microjogo é o material suplementar do artigo: cada ficha resume um estudo incluído, com referência, link de acesso, procedimento, resultados, unidade de análise, limitações e o que a auditoria das fontes primárias encontrou.</p>
<div class="kick u-mt">Como ler os números</div>
<p><b>RP e Insight (Tabela 1)</b> são os valores do manuscrito: resolução e resolução com topografia de insight na primeira apresentação do teste. <b>Auditoria</b> diz se a fonte primária confirma o valor (confere), confirma com uma condição de janela ou denominador (com ressalva) ou mostra outro número (diverge). A <b>matriz de sujeitos</b> classifica cada indivíduo a partir da auditoria; não substitui a classificação dos autores.</p>
<p>A soma do N (${ST.reduce((a, s) => a + s.N, 0)}) não é o número de indivíduos únicos. Os registros documentam animais que reaparecem: o pombo 282 WP (1983 e 1984), o macaco-prego Tico (2010 e 2011, confirmado; 2016, a confirmar) e Jujuba e Negão (2011 e 2016, vínculo forte, a confirmar).</p>
<div class="kick u-mt">Bastidores</div>
<p>As notas de bastidores reúnem memórias pessoais e registros documentais sobre pessoas e laboratórios. Estão separadas da evidência científica e não fazem parte do artigo.</p>
<div class="kick u-mt">Como citar este microjogo</div>
<p class="vt" style="font-size:20px;line-height:1.3">CRIACOM. (2026). <em>Insight e recombinação de repertórios: linha do tempo interativa</em> [Microjogo CRIACOM Vol. 14; material suplementar de Roque et al.]. Universidade Estadual de Londrina. ${esc(url)}</p>
<p class="u-note">Links diretos para uma ficha: acrescente <code>#estudo-N</code> ao endereço (por exemplo, <code>#estudo-17</code> abre Neves Filho et al., 2015).</p></div>
<div class="u-col"><div class="card panel"><div class="kick">CRIACOM</div><img src="${SPR.mini}" alt="" style="float:right;height:110px;image-rendering:pixelated;margin-left:10px">
<p><b>CRIAtividade &amp; COMportamento</b> é o grupo de pesquisa coordenado por Yulla Christoffersen Knaus e Hernando Borges Neves Filho no Departamento de Psicologia Geral e Análise do Comportamento da UEL. Nasceu na USP (2011–2014), passou por Belém e Fortaleza (2014–2020) e está na UEL desde 2021.</p>
<p><a href="${CONFIG.hub}">Ver todos os microjogos do CRIACOM ↗</a></p></div>
<div class="card panel"><div class="kick">Seu progresso</div><p>Pontos, fichas lidas, desafios e figurinhas ficam salvos só neste navegador.</p><p class="vt" style="font-size:22px">${pad(S.pts, 4)} pts · ${nSeen()}/43 estudos · ${Object.keys(S.ach).length}/${ACH.length} conquistas</p><button class="btn" id="btnReset">Apagar progresso</button></div>
<div class="card panel"><div class="kick">Créditos</div><p style="font-size:14px">Boatacon: mascote do CRIACOM. Fontes: Press Start 2P e VT323 (SIL Open Font License). Dados: base de auditoria das 43 fontes, atualizada em ${esc(DATA.updated || '')}. Os esquemas das tarefas foram desenhados para este microjogo. ${ST.some(s => s.media.length) ? 'As figuras e fotos dos artigos aparecem com a fonte e a licença indicadas em cada imagem.' : 'As figuras dos artigos ainda não foram incluídas.'} Os PDFs do acervo de pesquisa não são distribuídos: os links levam ao DOI, ao repositório ou à revista.</p></div></div>`;
}

/* ====================== eventos ====================== */
document.addEventListener('click', e => {
  const t = e.target;
  const ej = t.closest('[data-ejump]'); if (ej) { const L = ST.filter(s => s.era === ej.dataset.ejump); select((L.find(s => !S.seen[s.n]) || L[0]).n); return; }
  const node = t.closest('.node'); if (node) { select(node.dataset.n); return; }
  const tb = t.closest('.tab'); if (tb) { curTab = tb.dataset.tab; $$('.tab').forEach(x => x.setAttribute('aria-selected', x === tb ? 'true' : 'false')); $('#ficha .pane').innerHTML = pane(byN[S.cur], curTab); markTab(S.cur, curTab); SFX.tab(); if (curTab === 'bast') say('Bastidores: memórias e documentos sobre pessoas e laboratórios. Não são dados experimentais.', 'ideia'); return; }
  const st = t.closest('[data-step]'); if (st) { step(+st.dataset.step); return; }
  if (t.closest('[data-dclose]')) { closeDrawer(); return; }
  const gn = t.closest('[data-go-n]'); if (gn) { closeModal(); const n = +gn.dataset.goN; S.cur = n; go('jornada'); scrollTo(0, 0); select(n); return; }
  const qg = t.closest('[data-qgo]'); if (qg) { closeModal(); const n = +qg.dataset.qgo; S.cur = n; go('jornada'); scrollTo(0, 0); select(n); return; }
  const pg = t.closest('[data-pgo]'); if (pg) { go(pg.dataset.pgo); scrollTo({ top: 0, behavior: REDUCE ? 'auto' : 'smooth' }); return; }
  const nv = t.closest('.navb'); if (nv) { go(nv.dataset.go); return; }
  const er = t.closest('[data-era]'); if (er && er.parentElement.id === 'eraBtns') { select(ST.find(s => s.era === er.dataset.era).n); return; }
  const qz = t.closest('[data-quiz]'); if (qz) { openQuiz(qz.dataset.quiz); return; }
  const op = t.closest('[data-opt]'); if (op && !op.disabled) { answer(+op.dataset.opt); return; }
  if (t.closest('[data-qnext]')) { nextQ(); return; }
  if (t.closest('[data-close]') || t.id === 'modal') { closeModal(); return; }
  const fm = t.closest('[data-fam]'); if (fm) { famCur = fm.dataset.fam; aparatos(); SFX.tab(); return; }
  const sp = t.closest('[data-spot]'); if (sp) { openSpot(+sp.dataset.spot, sp.dataset.ctx || 'fam', +(sp.dataset.i || 0)); return; }
  const sv = t.closest('[data-sv]'); if (sv) { spotMove(sv.dataset.sv, +sv.dataset.d); return; }
  const si = t.closest('[data-si]'); if (si) { SPOT.i = +si.dataset.si; renderSpot(); return; }
  if (t.id === 'spot') { closeModal(); return; }
  const cp = t.closest('[data-copy]'); if (cp) { const s = byN[cp.dataset.copy]; copy(s.cit.replace(/\*/g, ''), cp); return; }
  const th = t.closest('th[data-sort]'); if (th) { const k = th.dataset.sort; tsort = { k, d: tsort.k === k ? -tsort.d : 1 }; table1(); return; }
  const tm = t.closest('[data-term]'); if (tm) { const i = tm.dataset.term; if (!S.terms[i]) { S.terms[i] = 1; tm.classList.add('on'); SFX.coin(); addPts(5, tm); } return; }
});
function copy(text, el) { (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(() => { el.textContent = '✓ Copiado'; }, () => { const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); el.textContent = '✓ Copiado'; } catch (e) { /* sem cópia */ } ta.remove(); }); }
document.addEventListener('keydown', e => {
  if ($('#spot').classList.contains('on')) { if (e.key === 'Escape') closeModal(); else if (e.key === 'ArrowRight') { e.preventDefault(); spotMove(e.shiftKey ? 'study' : 'auto', 1); } else if (e.key === 'ArrowLeft') { e.preventDefault(); spotMove(e.shiftKey ? 'study' : 'auto', -1); } return; }
  if ($('#modal').classList.contains('on')) { if (e.key === 'Escape') closeModal(); return; }
  if (dOpen() && e.key === 'Escape') { closeDrawer(); return; }
  if (/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
  if ($('#cover').style.display !== 'none' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); start(); return; }
  if (!$('#s-jornada').classList.contains('on')) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  else if (e.key === 'Enter' && (document.activeElement === document.body || document.activeElement.id === 'trackwrap')) { e.preventDefault(); select(S.cur); }
});
function setupFilters() {
  const tasks = [...new Set(ST.map(s => s.task))].sort((a, b) => a.localeCompare(b, 'pt'));
  ['#fSp', '#tSp'].forEach(id => { $(id).innerHTML += SP_ORDER.map(sp => `<option>${sp}</option>`).join(''); });
  ['#fTask', '#tTask'].forEach(id => { $(id).innerHTML += tasks.map(t => `<option>${t}</option>`).join(''); });
  $('#fSp').onchange = e => { filt.sp = e.target.value; paintNodes(); };
  setupTrack();
  $('#fTask').onchange = e => { filt.task = e.target.value; paintNodes(); };
  $('#fQ').oninput = e => { filt.q = e.target.value.trim(); paintNodes(); };
  ['#tSp', '#tTask', '#tFlag'].forEach(id => ($(id).onchange = table1)); $('#tQ').oninput = table1;
}
function start() {
  $('#cover').style.display = 'none';
  if (!S.misc.started) { S.misc.started = 1; save(); }
  go('jornada'); checkAch();
  if (!nSeen()) { boat.temp('ok', 5000); bubble('Clique em um estudo para abrir a ficha.', .6, 5200); }
}
$('#btnStart').onclick = start;
$('#btnAcervo').onclick = () => { $('#cover').style.display = 'none'; if (!S.misc.started) { S.misc.started = 1; save(); } go('tabela'); };
$('#btnSound').onclick = () => { S.sound = !S.sound; save(); hud(); SFX.coin(); };
$('#bPrev').onclick = () => step(-1); $('#bNext').onclick = () => step(1);
$('#btnCsv').onclick = csv;
$('#btnNbTxt').onclick = () => { dl('caderno_boatacon_insight.txt', nbText(), 'text/plain'); if (!S.misc.nbdl) { S.misc.nbdl = 1; save(); checkAch(); } };
$('#btnCard').onclick = card;
$('#btnCopyRefs').onclick = e => copy(allRefs().map(r => (r.star ? '*' : '') + r.t.replace(/\*/g, '')).join('\n\n'), e.currentTarget);
document.addEventListener('click', e => { if (e.target.id === 'btnReset' && confirmReset()) { localStorage.removeItem(CONFIG.key); load(); hud(); about(); } });
function confirmReset() { const b = $('#btnReset'); if (b.dataset.armed) return true; b.dataset.armed = 1; b.textContent = 'Clique de novo para confirmar'; return false; }
['#hubCover', '#hubLogo', '#hubFoot'].forEach(id => ($(id).href = CONFIG.hub));
const setHudH = () => document.documentElement.style.setProperty('--hudH', $('#hud').getBoundingClientRect().bottom + 'px');
setHudH(); addEventListener('scroll', () => { if (dOpen()) setHudH(); }, { passive: true });
let rT = 0; addEventListener('resize', () => { setHudH(); clearTimeout(rT); rT = setTimeout(() => { if ($('#s-jornada').classList.contains('on')) { buildTrack(); walkTo(S.cur); } }, 200); });

/* ====================== início ====================== */
{ const sn = String(ST.reduce((a, s) => a + s.N, 0)); ['#coverN', '#mosN'].forEach(id => { const el = $(id); if (el) el.textContent = sn; }); }
$('#coverBoat').src = SPR.aponta;
if (nSeen() || S.pts) $('#btnStart').textContent = `▶ Continuar (${pad(S.pts, 4)} pts)`;
setupFilters(); hud();
const h = location.hash.replace('#', '');
const m = h.match(/^estudo-(\d+)$/);
if (m && byN[+m[1]]) { S.cur = +m[1]; start(); select(+m[1]); }
else if (SCREENS.includes(h) && h !== 'jornada') { $('#cover').style.display = 'none'; go(h, false); }
poke();
addEventListener('hashchange', () => { const hh = location.hash.replace('#', ''); const mm = hh.match(/^estudo-(\d+)$/); if (mm && byN[+mm[1]] && !(String(S.cur) === mm[1] && dOpen())) { const n = +mm[1]; S.cur = n; if ($('#cover').style.display !== 'none') start(); else if (!$('#s-jornada').classList.contains('on')) go('jornada'); select(n); } else if (SCREENS.includes(hh) && hh !== 'jornada') { $('#cover').style.display = 'none'; go(hh, false); } });
})();
