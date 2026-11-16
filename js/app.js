/* About me page - Vue 3 (Options API) + Vuetify + Animate.css, frontend only */
const ICONS = {
  close: "svg:M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
  enter: "svg:M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.59L5.83,13H21V7H19Z",
  theme: "svg:M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z",
  left: "svg:M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",
  right: "svg:M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z",
  replay: "svg:M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13A8,8 0 0,0 12,5Z",
  out: "svg:M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z",
  dots: "svg:M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",
  play: "svg:M8,5.14V19.14L19,12.14L8,5.14Z",
  flash: "svg:M7,2V13H10V22L17,10H13L17,2H7Z",
  grid: "svg:M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z",
  copy: "svg:M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",
  up: "svg:M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
  lock: "svg:M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",
};

const ME = {
  name: "Sebastian Bissert",
  role: "Full-stack software developer",
  loc: "Bavaria, Germany",
  email: "sebi@thesebi.dev",
  head: "I build software and hunt phishing sites",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sebastian-b-8a8920226" },
    { label: "GitHub", url: "https://github.com/Dev-Sebi" },
    { label: "GitLab", url: "https://gitlab.com/ytsebi659" },
  ],
  stats: [["7+", "years at StorTrec Group / Jiliti"], ["5+", "years as threat intelligence volunteer"], ["100+", "malicious domains taken down"], ["5", "mods and plugins on Modrinth"]],
  exp: [
    { from: "Jul 2024", to: "now", role: "Software Developer", org: "StorTrec Group / Jiliti Germany", place: "Niedernberg", text: "Full-stack web software for the company. Steps in to lead the work when needed." },
    { from: "Jul 2022", to: "Jul 2024", role: "Repair Technician", org: "StorTrec Group / Jiliti Germany", place: "Niedernberg", text: "Storage hardware diagnostics, multi-stage drive testing and failure analysis, using Linux diagnostic environments and automated test systems." },
    { from: "Sep 2019", to: "Aug 2022", role: "Trainee", org: "StorTrec Group / Jiliti Germany", place: "Niedernberg", text: "Apprenticeship as IT Systems Technician with C#, C++ and software distribution (OPSI). Installed servers in data centers in and around Frankfurt." },
    { from: "Jul 2021", to: "now", role: "Cyber Threat Intelligence and Malware Analysis Volunteer", org: "Vaccinator Security", place: "remote", text: "Investigates phishing infrastructure, malware and threat actors, and helps coordinate takedowns." },
  ],
  groups: [
    { id: "work", title: "Work", lede: "Built at StorTrec Group / Jiliti", items: [
      { name: "Workflow Automation Engine", status: "Active", text: "Runs the company's business processes automatically in the background.", points: ["Decides which step comes next and checks every workflow for dead ends before it runs", "Stores rules such as \"only if the order is urgent\", and rules can contain further rules", "Exchanges data with the company's ERP system (Sage X3), so nothing is typed twice", "Turned the old Visio drawings into diagrams and tasks the team can work from"], tags: ["NestJS", "BullMQ", "Fastify", "MongoDB", "Nx"] },
      { name: "Workspace, field service platform", status: "Active", text: "The platform our field service teams plan and do their work in.", points: ["Notifications that reach people by push, inside the app or by email", "A map editor to draw the area each service team covers", "Automatic tests that catch errors before a release", "Moves existing data safely when the software changes", "A setup script that gets a new developer running quickly"], tags: ["Vue 3", "Vuetify", "NestJS", "Socket.io", "Redis"] },
      { name: "AI-assisted dev tooling", status: "Ongoing", text: "Tools that let AI take over routine work for the team.", points: ["A tuned Claude Code setup with its own rules and helpers", "Short commands that write merge request texts, weekly summaries, code reviews, translations and tickets", "Recurring chores such as fixing failed pipelines and merge conflicts are automated with the help of AI", "A language model that runs locally (llama-server with Qwen3-Coder)"], tags: ["Claude Code", "MCP", "llama-server"] },
    ] },
    { id: "security", title: "Security research", lede: "Volunteer work since 2021", items: [
      { name: "Vaccinator Security", status: "Since 2021", text: "Volunteer cyber threat intelligence and malware analysis.", points: ["Tracked down phishing sites, malware and the people behind them", "Helped get more than 100 malicious domains taken offline", "Took malware apart to see what it does", "Researched attackers using publicly available information", "Built my own tools to detect malware and analyse threats"], tags: ["CTI", "Reverse engineering", "OSINT", "VMs"] },
      { name: "AppSec in my own projects", status: "Ongoing", text: "Hardening for everything I run myself.", points: ["Secure logins, request limits and fixes against injected code", "Hardened web servers and blocked known bad networks", "Reported security holes I found to their owners responsibly"], tags: ["XSS", "nmap", "nginx"] },
    ] },
    { id: "web", title: "Web platforms", lede: "My own products", items: [
      { name: "valforge.gg / VAL ASCII", status: "Live", text: "Valorant community hub, growing since 2025.", points: ["Live now: a creator and a gallery for ASCII art", "Next: player tracker, dashboard, map heatmaps and a crosshair database", "Moved from Firebase to my own server"], tags: ["Vue 3", "Socket.IO", "MongoDB", "Docker", "nginx"] },
      { name: "Valorant Helper", status: "Pending API approval by Riot Games", text: "Windows desktop app with live match intel for all 10 players.", points: ["Shows ranks, peak ranks, skins, form and win chance", "Rank history, top agents and maps per player", "Discord status, a phone view and autostart", "Keeps data on the PC, so it asks the game servers as little as possible"], tags: ["Electron", "Vue 3", "Vite", "socket.io", "chart.js"] },
    ] },
    { id: "games", title: "Games and mods", lede: "Published on Modrinth", items: [
      { name: "Minecraft mods", status: "Published", text: "Three Fabric mods, a data pack and a Paper plugin.", points: ["Item Searchbar: a search bar in every inventory", "Pickup Filter: stop picking up chosen items", "Simple Block Randomizer: randomises placed blocks", "Decorative Player Heads, as data pack and as Paper plugin"], tags: ["Fabric", "Paper", "Java"] },
      { name: "Sudoku game", status: "In development", text: "My own Sudoku game.", tags: ["Own project"] },
    ] },
    { id: "freelance", title: "Freelance and hosting", lede: "Client work and my own servers", items: [
      { name: "Ofen Leibfried", status: "Client site", url: "https://ofen-leibfried.de", text: "Website I built for a family business.", points: ["Built and hosted by me from start to finish", "Runs in its own sealed-off environment with its own database"], tags: ["Docker", "MongoDB"] },
      { name: "Discord bots", status: "Custom", text: "Custom bots for Discord servers.", tags: ["Discord.js"] },
      { name: "Self-hosting", status: "Running", text: "An Ubuntu home server and a Strato VPS on Docker, with self-hosted n8n and GitLab tooling.", tags: ["Docker", "n8n", "GitLab"] },
    ] },
  ],
  skills: [
    ["Top skills", "JavaScript, TypeScript, full-stack, cybersecurity, Claude Code and subagents"],
    ["Backend", "Node.js, NestJS, Fastify, Express, BullMQ, Socket.io"],
    ["Frontend", "Vue 3, Vuetify, Vite, Pinia, Electron"],
    ["Data", "MongoDB, Mongoose, Redis"],
    ["DevOps", "Docker, nginx, certbot, systemd, Linux, WSL, Nx / pnpm, GitLab"],
    ["Security", "Threat intelligence, malware analysis, reverse engineering, OSINT, phishing investigation, XSS"],
    ["Other languages", "C#, C++, Java, Python"],
    ["Enterprise and IT", "HCL Domino, OPSI, software distribution, hardware diagnostics and repair"],
  ],
  mods: [["Item Searchbar", "Fabric mod", "Search bar in every inventory, highlights matches"], ["Pickup Filter", "Fabric mod", "Stops you picking up chosen items, rotten flesh for example"], ["Simple Block Randomizer", "Fabric mod", "Randomises placed blocks for natural builds"], ["Decorative Player Heads", "Data pack", "Decorative heads for building"], ["Ultimate Decorative Player Heads", "Paper plugin", "Server-side version of the data pack"], ["Sudoku game", "Own game", "In development"]],
  short: "Full-stack developer at StorTrec Group / Jiliti and volunteer threat researcher since 2021. I started on the repair bench.",
};


/** Animates a block with Animate.css once it scrolls into view: value = animation name, .stagger = one child after the other. */
const reveal = {
  mounted(el, binding) {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { return; }
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) { return; }
    const kids = binding.modifiers.stagger ? [...el.children] : [el];
    for (const k of kids) { k.classList.add("rv"); }
    el._io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) { return; }
      kids.forEach((k, i) => { k.classList.remove("rv"); k.style.animationDelay = i * 90 + "ms"; k.classList.add("animate__animated", "animate__" + (binding.value || "fadeInUp")); });
      el._io.disconnect();
    }, { rootMargin: "0px 0px -8% 0px" });
    el._io.observe(el);
  },
  unmounted(el) { el._io?.disconnect(); },
};

/** Adds the class "on" once the element has scrolled into view. */
const seen = {
  mounted(el) {
    if (!("IntersectionObserver" in window)) { el.classList.add("on"); return; }
    el._seen = new IntersectionObserver((entries) => { if (entries[0].isIntersecting) { el.classList.add("on"); el._seen.disconnect(); } }, { rootMargin: "0px 0px -15% 0px" });
    el._seen.observe(el);
  },
  unmounted(el) { el._seen?.disconnect(); },
};

/** Decodes the element's text from random characters, left to right, once it is on screen. */
const scramble = {
  mounted(el) {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { return; }
    const text = el.textContent; const pool = "01<>/{}[]#$_";
    el.setAttribute("aria-label", text);
    el._scr = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) { return; }
      el._scr.disconnect();
      const t0 = performance.now();
      const tick = (now) => {
        const done = Math.floor((now - t0) / 45);
        el.textContent = [...text].map((ch, i) => (i < done || ch === " " ? ch : pool[Math.floor(Math.random() * pool.length)])).join("");
        if (done < text.length) { requestAnimationFrame(tick); }
      };
      requestAnimationFrame(tick);
    }, { rootMargin: "0px 0px -12% 0px" });
    el._scr.observe(el);
  },
  unmounted(el) { el._scr?.disconnect(); },
};

const meMixin = { inject: ["jump", "copyEmail"], data: () => ({ me: ME, icons: ICONS }) };

const XLinks = {
  name: "XLinks", mixins: [meMixin], props: { variant: { type: String, default: "tonal" } },
  template: `<span class="xl"><v-btn v-for="l in me.links" :key="l.label" :href="l.url" target="_blank" rel="noopener" :variant="variant" rounded :append-icon="icons.out">{{ l.label }}</v-btn><v-btn :variant="variant" rounded :append-icon="icons.copy" aria-label="Copy email address" @click="copyEmail"><span class="xl__mail">{{ me.email }}</span></v-btn></span>`,
};

/* ── SVG artworks, all drawn in code and all reacting to the pointer ── */
/**
 * @param {PointerEvent} e pointer event on an svg
 * @param {number} w viewBox width
 * @param {number} h viewBox height
 * @returns {number[]} pointer position in viewBox units
 */
function loc(e, w = 240, h = 180) {
  const r = e.currentTarget.getBoundingClientRect();
  return [((e.clientX - r.left) / r.width) * w, ((e.clientY - r.top) / r.height) * h];
}

const ArtDrive = {
  name: "ArtDrive",
  data: () => ({ ang: -40 }),
  methods: {
    /** @param {PointerEvent} e @returns {void} */
    move(e) { const [x, y] = loc(e); this.ang = Math.max(-78, Math.min(-18, (Math.atan2(x - 196, -(y - 146)) * 180) / Math.PI)); },
  },
  template: `
  <svg viewBox="0 0 240 180" class="a-drive" role="img" aria-label="Hard drive with a moving head" @pointermove="move" @pointerleave="ang = -40">
    <rect class="a-f" x="8" y="8" width="224" height="164" rx="14" />
    <g class="a-spin"><circle class="a-f" cx="98" cy="88" r="64" /><circle class="a-l a-m" cx="98" cy="88" r="50" /><circle class="a-l a-m" cx="98" cy="88" r="36" /><path class="a-l a-m" d="M98 26v20" /></g>
    <circle class="a-f" cx="98" cy="88" r="12" /><circle class="a-accf" cx="98" cy="88" r="3" />
    <g class="a-arm" :style="{ transform: 'rotate(' + ang + 'deg)' }"><path class="a-l a-acc" style="stroke-width:5" d="M196 146V60" /><rect class="a-accf" x="189" y="48" width="14" height="14" rx="3" /></g>
    <circle class="a-f" cx="196" cy="146" r="10" />
    <circle v-for="p in [[22, 22], [218, 22], [22, 158], [218, 158]]" :key="p.join()" class="a-l a-m" :cx="p[0]" :cy="p[1]" r="3" />
  </svg>`,
};

const ArtGraph = {
  name: "ArtGraph",
  data: () => ({
    hot: "", nodes: { a: [28, 90], b: [92, 42], c: [92, 138], d: [156, 74], e: [156, 150], f: [212, 106] },
    edges: [["a", "b"], ["a", "c"], ["b", "d"], ["c", "d"], ["c", "e"], ["d", "f"], ["e", "f"]],
  }),
  computed: {
    /** @returns {Set<string>} the hovered node and everything downstream of it */
    lit() {
      const seen = new Set(); const todo = this.hot ? [this.hot] : [];
      while (todo.length) { const n = todo.pop(); if (!seen.has(n)) { seen.add(n); for (const e of this.edges) { if (e[0] === n) { todo.push(e[1]); } } } }
      return seen;
    },
  },
  methods: {
    /** @param {string[]} e edge as [from, to] @returns {string} curve between the two nodes */
    path(e = ["a", "a"]) { const p = this.nodes[e[0]]; const q = this.nodes[e[1]]; const m = (p[0] + q[0]) / 2; return "M" + (p[0] + 15) + " " + p[1] + "C" + m + " " + p[1] + " " + m + " " + q[1] + " " + (q[0] - 15) + " " + q[1]; },
  },
  template: `
  <svg viewBox="0 0 240 180" class="a-graph" :class="{ 'is-hot': hot }" role="img" aria-label="Workflow graph" @pointerleave="hot = ''">
    <path v-for="e in edges" :key="e.join()" class="a-l" :class="lit.has(e[0]) && lit.has(e[1]) ? 'a-acc' : 'a-m'" :d="path(e)" />
    <g v-for="(p, k) in nodes" :key="k" class="a-node" :class="{ lit: lit.has(k) }" @pointerenter="hot = k">
      <rect class="a-f" :x="p[0] - 15" :y="p[1] - 11" width="30" height="22" rx="7" /><circle :cx="p[0]" :cy="p[1]" r="2.5" />
    </g>
  </svg>`,
};

const ArtRadar = {
  name: "ArtRadar",
  data: () => ({ ang: 40, timer: null, blips: [[152, 50], [178, 100], [90, 58], [68, 114], [136, 132], [100, 96], [158, 82], [112, 36], [60, 76]].map((p) => ({ x: p[0], y: p[1], down: false })) }),
  computed: { /** @returns {number} blips already taken down */ done() { return this.blips.filter((b) => b.down).length; } },
  beforeUnmount() { clearTimeout(this.timer); },
  methods: {
    /** @param {PointerEvent} e @returns {void} */
    move(e) {
      const [x, y] = loc(e);
      this.ang = (Math.atan2(x - 120, -(y - 90)) * 180) / Math.PI;
      for (const b of this.blips) { if (Math.hypot(b.x - x, b.y - y) < 15) { b.down = true; } }
      if (this.done === this.blips.length && !this.timer) { this.timer = setTimeout(() => { for (const b of this.blips) { b.down = false; } this.timer = null; }, 1600); }
    },
  },
  template: `
  <svg viewBox="0 0 240 180" class="a-radar" role="img" aria-label="Radar with threat blips" @pointermove="move">
    <circle class="a-f" cx="120" cy="90" r="80" /><circle class="a-l a-m" cx="120" cy="90" r="54" /><circle class="a-l a-m" cx="120" cy="90" r="28" />
    <path class="a-l a-m" d="M40 90h160M120 10v160" />
    <path class="a-l a-acc a-sweep" style="stroke-width:2" d="M120 90V10" :style="{ transform: 'rotate(' + ang + 'deg)' }" />
    <template v-for="(b, i) in blips" :key="i">
      <path v-if="b.down" class="a-l a-m" :d="'M' + (b.x - 4) + ' ' + (b.y - 4) + 'l8 8m0 -8l-8 8'" />
      <circle v-else class="a-accf" :cx="b.x" :cy="b.y" r="3.5" />
    </template>
    <text class="a-t" x="4" y="176">{{ done }} / {{ blips.length }} down</text>
  </svg>`,
};

const ArtAscii = {
  name: "ArtAscii",
  data: () => ({ px: -99, py: -99 }),
  computed: {
    /** @returns {string[]} ten rows of characters, denser near the pointer */
    rows() {
      const ramp = ".·:-=+*#%@"; const out = [];
      for (let y = 0; y < 10; y++) {
        let s = "";
        for (let x = 0; x < 32; x++) {
          let v = 0.26 + 0.22 * Math.sin(x * 0.42 + y * 0.7) + 0.12 * Math.cos(y * 1.1 - x * 0.2);
          v += Math.max(0, 1 - Math.hypot(x - this.px, (y - this.py) * 1.9) / 7) * 0.8;
          s += ramp[Math.max(0, Math.min(9, Math.round(v * 9)))];
        }
        out.push(s);
      }
      return out;
    },
  },
  methods: { /** @param {PointerEvent} e @returns {void} */ move(e) { const [x, y] = loc(e); this.px = (x / 240) * 32; this.py = (y / 180) * 10; } },
  template: `
  <svg viewBox="0 0 240 180" class="a-ascii" role="img" aria-label="ASCII art that reacts to the pointer" @pointermove="move" @pointerleave="px = -99">
    <rect class="a-f" x="1" y="1" width="238" height="178" rx="10" />
    <text v-for="(r, i) in rows" :key="i" x="12" :y="23 + i * 16.2" textLength="216" lengthAdjust="spacingAndGlyphs">{{ r }}</text>
  </svg>`,
};

const ArtBlocks = {
  name: "ArtBlocks",
  data: () => ({ hot: -1, h: [2, 1, 3, 1, 1, 2, 1, 2, 3, 1, 2, 1, 1, 2, 1, 1] }),
  computed: {
    /** @returns {object[]} cubes with their three faces, back to front */
    cubes() {
      const out = [];
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          const id = i * 4 + j; const x = 120 + (i - j) * 26; const y = 62 + (i + j) * 13; const t = y - this.h[id] * 9;
          out.push({ id, z: i + j, top: [x, t - 13, x + 26, t, x, t + 13, x - 26, t].join(" "), left: [x - 26, t, x, t + 13, x, y + 13, x - 26, y].join(" "), right: [x + 26, t, x, t + 13, x, y + 13, x + 26, y].join(" ") });
        }
      }
      return out.sort((a, b) => a.z - b.z);
    },
  },
  methods: { /** @returns {void} */ shuffle() { this.h = this.h.map(() => 1 + Math.floor(Math.random() * 4)); } },
  template: `
  <svg viewBox="0 0 240 180" class="a-blocks" role="img" aria-label="Isometric blocks" @pointerleave="hot = -1" @click="shuffle">
    <g v-for="c in cubes" :key="c.id" class="a-cube" :class="{ hot: hot === c.id }" @pointerenter="hot = c.id">
      <polygon class="a-f a-left" :points="c.left" /><polygon class="a-f a-right" :points="c.right" /><polygon class="a-f a-top" :points="c.top" />
    </g>
  </svg>`,
};

const ArtRack = {
  name: "ArtRack",
  data: () => ({ hot: -1 }),
  template: `
  <svg viewBox="0 0 240 180" class="a-rack" role="img" aria-label="Server rack" @pointerleave="hot = -1">
    <rect class="a-f" x="40" y="8" width="160" height="164" rx="8" />
    <g v-for="i in 5" :key="i" class="a-unit" :class="{ hot: hot === i }" @pointerenter="hot = i">
      <rect class="a-f" x="50" :y="i * 30 - 12" width="140" height="24" rx="4" />
      <circle v-for="k in 3" :key="k" :class="k === 1 || hot === i ? 'a-accf' : 'a-led'" :cx="52 + k * 10" :cy="i * 30" r="2.5" />
      <path class="a-l a-m" :d="'M108 ' + (i * 30 - 3) + 'h70M108 ' + (i * 30 + 3) + 'h70'" />
    </g>
  </svg>`,
};

const ARTS = {
  bench: ["ArtDrive", "The drive head follows your pointer"], work: ["ArtGraph", "Hover a node to trace its path"],
  security: ["ArtRadar", "Sweep over the blips to take them down"], web: ["ArtAscii", "Move across to brighten the characters"],
  games: ["ArtBlocks", "Hover to lift a block, click to shuffle"], freelance: ["ArtRack", "Hover a server to pull it out"],
};
const XArt = {
  name: "XArt", components: { ArtDrive, ArtGraph, ArtRadar, ArtAscii, ArtBlocks, ArtRack },
  props: { kind: { type: String, default: "bench" } },
  computed: { /** @returns {string[]} component name and caption */ a() { return ARTS[this.kind] || ARTS.bench; } },
  template: `<figure class="art"><component :is="a[0]" /><figcaption>{{ a[1] }}</figcaption></figure>`,
};

const BGS = [
  { s: 24, w: 2, d: "M12 12h.01" }, { s: 32, w: 1, d: "M0 31.5H32" }, { s: 40, w: 1, d: "M20 16v8M16 20h8" }, { s: 40, w: 1, d: "M40 .5H.5V40" }, { s: 80, w: 1, d: "M.5 0V80" },
  { s: 120, w: 1, d: "M60 52v16M52 60h16" }, { s: 24, w: 1, d: "M0 24L24 0" }, { s: 16, w: 1.5, d: "M8 8h.01" }, { s: 96, w: 1, d: "M48 20a28 28 0 1 0 .01 0" }, { s: 48, w: 2, d: "M24 24h.01" },
];

/* ── Keynote and its variations: one component, composed from layout modules by a recipe ── */
const KNum = {
  name: "KNum", props: { s: { type: String, required: true } },
  data() { const m = /^(\d+)(.*)$/.exec(this.s) || [0, "0", this.s]; return { target: Number(m[1]), suffix: m[2], n: Number(m[1]), io: null }; },
  mounted() {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { return; }
    this.io = new IntersectionObserver((entries) => { if (entries[0].isIntersecting) { this.io.disconnect(); this.count(); } });
    this.io.observe(this.$el);
  },
  beforeUnmount() { this.io?.disconnect(); },
  methods: {
    /** Counts from zero to the target in about a second. @returns {void} */
    count() {
      const start = performance.now();
      const tick = (now) => { const t = Math.min(1, (now - start) / 1000); this.n = Math.round(this.target * (1 - Math.pow(1 - t, 3))); if (t < 1) { requestAnimationFrame(tick); } };
      this.n = 0; requestAnimationFrame(tick);
    },
  },
  template: `<b>{{ n }}{{ suffix }}</b>`,
};

const ACC = { blue: ["#0a5fd6", "#5aa2ff"], green: ["#0b7a43", "#4fd18b"], orange: ["#c2410c", "#ff8a4c"], pink: ["#b0127a", "#ff6ac1"], teal: ["#0b7a7a", "#3fd0d0"], red: ["#c8102e", "#ff6b6b"], indigo: ["#3b3bd6", "#8f9bff"], amber: ["#8a5a00", "#ffc24a"], lime: ["#3f6b00", "#b4e04a"] };

const KShell = {
  name: "KShell", mixins: [meMixin], inject: ["nextAccent", "deploy"],
  data: () => ({ q: "", lines: [{ cmd: "help" }, { out: "whoami  work  security  projects  skills  contact  accent  deploy  clear" }], quick: ["whoami", "work", "security", "skills", "contact", "accent", "deploy"] }),
  methods: {
    /** @param {string} c command name @returns {string} the answer printed for it */
    answer(c = "") {
      const g = this.me.groups;
      const table = {
        help: "whoami  work  security  projects  skills  contact  accent  deploy  clear",
        whoami: this.me.name + ", " + this.me.role.toLowerCase() + " in " + this.me.loc,
        work: g[0].items.map((p) => p.name).join("\n"),
        security: "5+ years of volunteer threat research\n100+ malicious domains taken down",
        projects: [...g[2].items, ...g[3].items].map((p) => p.name + "  (" + p.status.toLowerCase() + ")").join("\n"),
        skills: this.me.skills[0][1],
        contact: this.me.email + "\n" + this.me.links.map((l) => l.label + "  " + l.url.replace("https://", "")).join("\n"),
      };
      if (c === "accent") { return "accent set to " + this.nextAccent(); }
      if (c === "deploy") { this.deploy(); return "deployed on a Friday. nothing broke."; }
      if (c.startsWith("sudo")) { return "permission denied. nice try."; }
      return Object.hasOwn(table, c) ? table[c] : "command not found: " + c + ". type help";
    },
    /** @param {string} raw typed or tapped command @returns {void} */
    exec(raw = "") {
      const c = raw.trim().toLowerCase();
      this.q = "";
      if (!c) { return; }
      if (c === "clear") { this.lines = []; return; }
      this.lines.push({ cmd: c }, { out: this.answer(c) });
      this.$nextTick(() => { const b = this.$refs.body; if (b) { b.scrollTop = b.scrollHeight; } });
    },
  },
  template: `
  <div class="sh">
    <div class="sh__quick"><v-chip v-for="c in quick" :key="c" size="small" variant="tonal" @click="exec(c)">{{ c }}</v-chip></div>
    <div class="sh__win" @click="$refs.inp.focus()">
      <div ref="body" class="sh__body" aria-live="polite"><template v-for="(l, i) in lines" :key="i"><p v-if="l.cmd">{{ l.cmd }}</p><pre v-else class="animate__animated animate__fadeIn animate__faster">{{ l.out }}</pre></template></div>
      <form class="sh__in" @submit.prevent="exec(q)"><label for="sh-input">$</label><input id="sh-input" ref="inp" v-model="q" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="help" aria-label="Terminal command"></form>
    </div>
  </div>`,
};

const EDU = "Franz-Oberthuer-Schule Würzburg, 2019 to 2022, vocational training alongside the IT Systems Technician apprenticeship";
const ART_OF = { work: "work", security: "security", web: "web", games: "games", freelance: "freelance" };

/* ── The page: label column left, hairline rows right, details open in place ── */
const VRows = {
  name: "VRows", mixins: [meMixin], components: { KNum, KShell },
  data: () => ({ edu: EDU, artOf: ART_OF }),
  methods: { /** @param {number} i section index @returns {string} two-digit section number */ no(i = 0) { return String(i).padStart(2, "0"); } },
  template: `
  <div class="pg r">
    <header class="hero" data-sec="Intro">
      <div class="animate__animated animate__fadeInLeft"><p class="eye eye--typed" :style="{ '--n': (me.role + ' in ' + me.loc).length }">{{ me.role }} in {{ me.loc }}</p><h1 :aria-label="me.head"><span v-for="(w, i) in me.head.split(' ')" :key="i" class="hw" :style="{ '--i': i }" aria-hidden="true">{{ w }}&nbsp;</span></h1><p class="lede">{{ me.short }}</p><x-links /></div>
      <x-art kind="bench" class="animate__animated animate__fadeInRight" />
    </header>
    <p class="r-facts" v-reveal="'fadeIn'"><template v-for="(s, i) in me.stats" :key="s[1]"><k-num :s="s[0]" /> {{ s[1] }}<template v-if="i < 2">, </template><template v-else-if="i === 2"> and </template></template>.</p>
    <section class="r-sec" data-sec="Experience" v-reveal="'fadeInUp'">
      <div class="r-side"><h2><span>01</span><i v-scramble>Experience</i></h2></div>
      <ul class="r-list r-rail" v-seen><li v-for="(e, i) in me.exp" :key="e.role" class="r-exp" :class="{ now: e.to === 'now' }" :style="{ '--i': i }"><div><h3>{{ e.role }}</h3><p class="r-exp__org">{{ e.org }}, {{ e.place }}</p></div><p class="r-exp__t">{{ e.text }}</p><span class="mono">{{ e.from }} to {{ e.to }}</span></li></ul>
    </section>
    <section v-for="(g, i) in me.groups" :key="g.id" class="r-sec" :data-sec="g.title" v-reveal="'fadeInUp'">
      <div class="r-side"><h2><span>{{ no(i + 2) }}</span><i v-scramble>{{ g.title }}</i></h2><p>{{ g.lede }}</p><x-art :kind="artOf[g.id]" /></div>
      <div class="r-list">
        <details v-for="p in g.items" :key="p.name" class="r-it">
          <summary><span class="r-it__n">{{ p.name }}</span><span class="r-it__t">{{ p.text }}</span><span class="mono">{{ p.status }}</span><span class="r-it__x" aria-hidden="true"></span></summary>
          <div class="r-it__b"><ul v-if="p.points" class="pts"><li v-for="t in p.points" :key="t">{{ t }}</li></ul><p class="mono">{{ p.tags.join(" / ") }}</p><a v-if="p.url" class="r-go" :href="p.url" target="_blank" rel="noopener">{{ p.url.replace("https://", "") }}<v-icon :icon="icons.out" size="14" /></a></div>
        </details>
      </div>
    </section>
    <section class="r-sec" data-sec="Skills" v-reveal="'fadeInUp'">
      <div class="r-side"><h2><span>07</span><i v-scramble>Skills</i></h2></div>
      <dl class="r-list r-dl"><div v-for="s in me.skills" :key="s[0]"><dt>{{ s[0] }}</dt><dd>{{ s[1] }}</dd></div></dl>
    </section>
    <section class="r-sec" data-sec="Terminal" v-reveal="'fadeInUp'">
      <div class="r-side"><h2><span>08</span><i v-scramble>Terminal</i></h2><p>Type a command or tap one.</p></div>
      <k-shell />
    </section>
    <footer class="r-sec" data-sec="Contact" v-reveal="'fadeInUp'">
      <div class="r-side"><h2><span>09</span><i v-scramble>Contact</i></h2></div>
      <div class="r-list r-contact">
        <button aria-label="Copy email address" @click="copyEmail"><span class="mono">Email</span><b class="sel">{{ me.email }}</b><v-icon :icon="icons.copy" size="18" /></button>
        <a v-for="l in me.links" :key="l.label" :href="l.url" target="_blank" rel="noopener"><span class="mono">{{ l.label }}</span><b>{{ l.url.replace("https://", "").replace("www.", "") }}</b><v-icon :icon="icons.out" size="18" /></a>
        <p><span class="mono">Based in</span>{{ me.loc }}</p>
        <p><span class="mono">Education</span>{{ edu }}</p>
      </div>
    </footer>
  </div>`,
};



/* ── Command palette (Design B) ───────────────────────────────── */
const CmdBox = {
  name: "CmdBox",
  props: { commands: { type: Array, required: true } },
  emits: ["close"],
  data: () => ({ q: "", active: 0, icons: ICONS }),
  computed: {
    /** @returns {object[]} commands matching the query */
    items() {
      const q = this.q.trim().replace(/^[/>]/, "").toLowerCase();
      if (!q) { return this.commands; }
      return this.commands.filter((c) => (c.title + " " + c.desc + " " + (c.keys || "")).toLowerCase().includes(q));
    },
    /** @returns {{name: string, items: object[]}[]} items in display groups */
    groups() {
      const out = [];
      for (const it of this.items) {
        let g = out.find((x) => x.name === it.group);
        if (!g) { g = { name: it.group, items: [] }; out.push(g); }
        g.items.push(it);
      }
      return out;
    },
  },
  watch: { items() { this.active = 0; } },
  mounted() { this.$nextTick(() => { this.$refs.input?.focus(); }); },
  methods: {
    /** @param {object} it command @returns {number} index in the flat list */
    idx(it = {}) { return this.items.indexOf(it); },
    /** @param {object} it command to execute @returns {void} */
    run(it = {}) { this.$emit("close"); it.run?.(); },
    /** @param {KeyboardEvent} e key event from the input @returns {void} */
    onKey(e) {
      const n = this.items.length;
      if (e.key === "ArrowDown" && n) { this.active = (this.active + 1) % n; e.preventDefault(); }
      else if (e.key === "ArrowUp" && n) { this.active = (this.active - 1 + n) % n; e.preventDefault(); }
      else if (e.key === "Enter" && this.items[this.active]) { this.run(this.items[this.active]); }
      else if (e.key === "Escape") { e.stopPropagation(); if (this.q) { this.q = ""; } else { this.$emit("close"); } }
      this.$nextTick(() => { this.$el.querySelector(".cmd-item--active")?.scrollIntoView({ block: "nearest" }); });
    },
  },
  template: `
  <div class="cmd-box" role="dialog" aria-modal="true" aria-label="Command prompt">
    <div class="cmd-input">
      <span class="cmd-input__prompt">&gt;</span>
      <input id="cmd-input" ref="input" v-model="q" type="text" placeholder="Type a section or command" autocomplete="off" spellcheck="false" aria-label="Command" @keydown="onKey">
      <span v-if="!q" class="cmd-caret" aria-hidden="true"></span>
      <v-btn :icon="icons.close" size="x-small" variant="text" aria-label="Close" @click="$emit('close')" />
    </div>
    <div class="cmd-list">
      <template v-for="g in groups" :key="g.name">
        <div class="cmd-group">{{ g.name }}</div>
        <div v-for="it in g.items" :key="g.name + it.title" class="cmd-item" :class="{ 'cmd-item--active': idx(it) === active }" @mouseenter="active = idx(it)" @click="run(it)">
          <span class="cmd-item__box"><v-icon v-if="it.icon" :icon="it.icon" size="16" /><template v-else>{{ it.box }}</template></span>
          <div class="cmd-item__text"><div class="cmd-item__title">{{ it.title }}</div><div class="cmd-item__desc">{{ it.desc }}</div></div>
          <span v-if="it.kbd" class="kbd">{{ it.kbd }}</span>
          <v-icon v-else :icon="icons.enter" size="14" style="opacity:.5" />
        </div>
      </template>
      <div v-if="!items.length" class="cmd-empty">Nothing matches "{{ q }}". Try skills, accent or deploy.</div>
    </div>
    <div class="cmd-foot"><span><span class="kbd">↑↓</span>move</span><span><span class="kbd">Enter</span>open</span><span><span class="kbd">Esc</span>close</span><span><span class="kbd">Right-click</span>page menu</span></div>
  </div>`,
};

/* ── Shell ────────────────────────────────────────────────────── */
const App = {
  name: "App",
  components: { CmdBox, VRows },
  provide() { return { jump: this.jump, copyEmail: this.copyEmail, nextAccent: this.nextAccent, deploy: this.deploy }; },
  data: () => ({ replay: 0, cmd: false, sections: [], icons: ICONS, accPick: ACC.green, bgi: 0, menu: null, toast: false, toastText: "", accents: ACC }),
  computed: {
    /** @returns {object} background pattern on screen */
    bg() { return BGS[this.bgi]; },
    /** @returns {object[]} entries of the right-click menu */
    menuItems() {
      const wide = !window.matchMedia("(max-width: 699px)").matches;
      return [
        ...(wide ? [{ t: "Command prompt", i: ICONS.enter, f: () => { this.cmd = true; } }] : []),
        { t: "Replay entrance", i: ICONS.replay, f: () => { this.replay++; } },
        { t: "Next background pattern", i: ICONS.grid, f: () => { this.bgi = (this.bgi + 1) % BGS.length; } },
        { t: "Back to top", i: ICONS.up, f: () => { window.scrollTo({ top: 0, behavior: "smooth" }); } },
        { t: "Copy email address", i: ICONS.copy, f: this.copyEmail },
        { t: "Deploy on a Friday", i: ICONS.flash, f: () => { this.deploy(this.menu?.x, this.menu?.y); } },
        { t: "Open GitHub profile", i: ICONS.out, href: ME.links[1].url },
        { t: "Super secret button", i: ICONS.lock, href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", f: () => { this.say("Never gonna give you up"); } },
      ];
    },
    /** @returns {object[]} everything the palette can run */
    commands() {
      return [
        ...this.sections.map((s) => ({ group: "On this page", box: "#", title: s, desc: "Scroll to this section", run: () => { this.jump(s); } })),
        { group: "Actions", icon: ICONS.theme, title: "Next accent colour", desc: "Cycle through nine accent colours", kbd: "T", keys: "theme color colour accent", run: this.nextAccent },
        { group: "Actions", icon: ICONS.copy, title: "Copy email address", desc: ME.email, keys: "contact mail", run: this.copyEmail },
        { group: "Actions", icon: ICONS.flash, title: "Deploy on a Friday", desc: "Confetti, nothing else", keys: "confetti party", run: () => { this.deploy(); } },
        { group: "Actions", icon: ICONS.replay, title: "Replay entrance", desc: "Run the page entrance again", kbd: "R", keys: "animation animate", run: () => { this.replay++; } },
      ];
    },
  },
  watch: {
    accPick: { immediate: true, handler(a) { document.documentElement.style.setProperty("--accent", a[1]); } },
    cmd(open) {
      if (open) { this.sections = [...document.querySelectorAll(".stage [data-sec]")].map((el) => el.dataset.sec); }
      else { this.$nextTick(() => { document.querySelector(".pill")?.focus(); }); }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("pointerdown", this.closeMenu);
    window.addEventListener("scroll", this.closeMenu, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onKey);
    window.removeEventListener("pointerdown", this.closeMenu);
    window.removeEventListener("scroll", this.closeMenu);
  },
  methods: {
    /** @param {PointerEvent} e pointer position for the background highlight @returns {void} */
    onPtr(e) {
      this.ptr = [e.clientX, e.clientY];
      if (this.raf) { return; }
      this.raf = requestAnimationFrame(() => {
        this.raf = 0;
        this.$refs.root?.style.setProperty("--mx", this.ptr[0] + "px");
        this.$refs.root?.style.setProperty("--my", this.ptr[1] + "px");
      });
    },
    /** @returns {string} name of the accent now in use */
    nextAccent() {
      const keys = Object.keys(ACC); const i = keys.findIndex((k) => ACC[k] === this.accPick);
      const k = keys[(i + 1) % keys.length]; this.accPick = ACC[k]; return k;
    },
    /** @param {string} text message for the toast @returns {void} */
    say(text = "") { this.toastText = text; this.toast = true; },
    /** @returns {Promise<void>} */
    async copyEmail() {
      try { await navigator.clipboard.writeText(ME.email); this.say("Email address copied"); }
      catch { this.say("Copy is blocked here. Select the address: " + ME.email); }
    },
    /**
     * Confetti burst in the accent colours.
     * @param {number} [x] start x in the viewport
     * @param {number} [y] start y in the viewport
     * @returns {void}
     */
    deploy(x = window.innerWidth / 2, y = window.innerHeight / 3) {
      this.say("Deployed on a Friday. Nothing broke.");
      const c = this.$refs.fx;
      if (!c || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { return; }
      const ctx = c.getContext("2d"); c.width = window.innerWidth; c.height = window.innerHeight;
      const cols = Object.values(ACC).map((a) => a[1]);
      const bits = Array.from({ length: 90 }, () => ({ x, y, vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 13 - 3, r: Math.random() * 6 + 3, c: cols[Math.floor(Math.random() * cols.length)], a: Math.random() * 6 }));
      const t0 = performance.now();
      const frame = (t) => {
        const k = (t - t0) / 1600;
        ctx.clearRect(0, 0, c.width, c.height);
        if (k >= 1) { return; }
        for (const b of bits) { b.vy += 0.45; b.x += b.vx; b.y += b.vy; b.a += 0.2; ctx.save(); ctx.globalAlpha = 1 - k; ctx.translate(b.x, b.y); ctx.rotate(b.a); ctx.fillStyle = b.c; ctx.fillRect(-b.r / 2, -b.r / 2, b.r, b.r * 1.6); ctx.restore(); }
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    },
    /** @param {MouseEvent} e right-click, or a click on the menu button @returns {void} */
    openMenu(e) {
      if (e.type === "click" && this.menu) { this.menu = null; return; }
      if (e.shiftKey || e.target.closest?.("input, textarea, a[href], .ctx")) { return; }
      e.preventDefault();
      const r = e.type === "click" ? e.currentTarget.getBoundingClientRect() : null;
      const x = r ? r.right : e.clientX; const y = r ? r.bottom + 6 : e.clientY;
      this.menu = { x: Math.max(8, Math.min(x, window.innerWidth - 276)), y: Math.max(8, Math.min(y, window.innerHeight - 440)) };
      this.$nextTick(() => { this.$refs.menu?.querySelector(".ctx__it")?.focus(); });
    },
    /** @param {object} it menu entry @returns {void} */
    runMenu(it = {}) { it.f?.(); this.menu = null; },
    /** @param {KeyboardEvent} e key inside the menu @returns {void} */
    menuKey(e) {
      const items = [...this.$refs.menu.querySelectorAll("button, a")]; const i = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { items[(i + 1) % items.length].focus(); e.preventDefault(); }
      else if (e.key === "ArrowUp") { items[(i - 1 + items.length) % items.length].focus(); e.preventDefault(); }
    },
    /** @param {FocusEvent} e focus leaving the menu closes it @returns {void} */
    menuBlur(e) { if (e.relatedTarget && !this.$refs.menu?.contains(e.relatedTarget)) { this.menu = null; } },
    /** @param {Event} e pointer or scroll outside the menu @returns {void} */
    closeMenu(e) { if (this.menu && !this.$refs.menu?.contains(e.target) && !e.target.closest?.(".ctx-btn")) { this.menu = null; } },
    /** @param {string} name value of the section's data-sec attribute @returns {void} */
    jump(name = "") {
      const el = [...document.querySelectorAll(".stage [data-sec]")].find((x) => x.dataset.sec === name);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    /** @param {KeyboardEvent} e global key event @returns {void} */
    onKey(e) {
      const wide = !window.matchMedia("(max-width: 699px)").matches;
      if (e.key === "k" && (e.ctrlKey || e.metaKey) && wide) { this.cmd = !this.cmd; e.preventDefault(); return; }
      if (this.menu) { if (e.key === "Escape") { this.menu = null; document.querySelector(".ctx-btn")?.focus(); } return; }
      if (this.cmd) { if (e.key === "Escape") { this.cmd = false; } return; }
      if (e.ctrlKey || e.metaKey || e.altKey || e.target.closest?.("input, textarea, [contenteditable]")) { return; }
      if (e.key === "/" && wide) { this.cmd = true; e.preventDefault(); }
      else if (e.key === "t" || e.key === "T") { this.nextAccent(); }
      else if (e.key === "r" || e.key === "R") { this.replay++; }
    },
  },
  template: `
  <v-app theme="dark">
    <div ref="root" class="root" @pointermove.passive="onPtr" @contextmenu="openMenu">
      <svg v-for="k in ['bgf__base', 'bgf__hi']" :key="k" class="bgf" :class="k" aria-hidden="true"><defs><pattern :id="k" :width="bg.s" :height="bg.s" patternUnits="userSpaceOnUse"><path :d="bg.d" :style="{ strokeWidth: bg.w }" /></pattern></defs><rect width="100%" height="100%" :fill="'url(#' + k + ')'" /></svg>
      <header class="bar">
        <div class="bar__brand">Sebastian Bissert</div>
        <v-btn :icon="icons.dots" variant="text" size="small" class="ctx-btn" aria-label="Open the page menu" aria-haspopup="menu" @click="openMenu" />
      </header>
      <div class="progress" aria-hidden="true"></div>
      <main class="stage">
        <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
          <v-rows :key="replay" />
        </transition>
      </main>
      <transition name="pill" appear>
        <button v-if="!cmd" class="pill" aria-label="Open command prompt" @click="cmd = true">
          <span class="pill__prompt">&gt;</span><span class="pill__label">commands</span>
          <span class="pill__hint"><span class="kbd">/</span> or <span class="kbd">Ctrl K</span></span>
        </button>
      </transition>
      <canvas ref="fx" class="fxc" aria-hidden="true"></canvas>
      <transition name="ctx"><div v-if="menu" ref="menu" class="ctx" role="menu" aria-label="Page menu" :style="{ left: menu.x + 'px', top: menu.y + 'px' }" @keydown="menuKey" @focusout="menuBlur" @contextmenu.prevent>
        <div class="ctx__sw"><button v-for="(a, k) in accents" :key="k" :style="{ background: a[1] }" :class="{ on: accPick === a }" :aria-label="'Accent ' + k" :title="k" @click="accPick = a"></button></div>
        <component :is="it.href ? 'a' : 'button'" v-for="it in menuItems" :key="it.t" class="ctx__it" role="menuitem" :href="it.href" :target="it.href ? '_blank' : null" :rel="it.href ? 'noopener' : null" @click="runMenu(it)"><v-icon :icon="it.i" size="16" /><span>{{ it.t }}</span></component>
        <p class="ctx__ft">Shift + right-click opens the browser menu</p>
      </div></transition>
      <transition name="scrim"><div v-if="cmd" class="scrim" @click="cmd = false"></div></transition>
      <transition name="pal"><div v-if="cmd" class="cmd-palette"><cmd-box :commands="commands" @close="cmd = false" /></div></transition>
    </div>
    <v-snackbar v-model="toast" timeout="2600" location="top">{{ toastText }}</v-snackbar>
  </v-app>`,
};

const vuetify = Vuetify.createVuetify({
  theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#000000", surface: "#161617", primary: "#f5f5f7" } } } },
});
const app = Vue.createApp(App);
for (const [name, comp] of Object.entries({ XArt, XLinks })) { app.component(name, comp); }
app.directive("reveal", reveal);
app.directive("seen", seen);
app.directive("scramble", scramble);
app.use(vuetify).mount("#app");
