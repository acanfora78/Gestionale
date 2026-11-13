/**
 * Illustrazione animata in stile cartone: il titolare al lavoro al portatile.
 * Capelli corti scuri, barba, felpa nera. SVG + CSS, nessun JavaScript.
 * Animazioni (classi c-* in globals.css): occhi che scorrono lo schermo e sbattono,
 * mani che battono sui tasti, luce dello schermo, codice che sale, vapore del caffè.
 * `uid` deve essere diverso per ogni copia nella stessa pagina (id SVG unici).
 */
const SKIN = "#e0a47b";
const SKIN_SHADE = "#c98a62";
const HAIR = "#17110e";
const BEARD = "#2a1b14";
const HOODIE = "#151515";
const HOODIE_LINE = "#343434";
const RED = "#e10600";

export function WorkingCartoon({ uid, className = "", title }: { uid: string; className?: string; title?: string }) {
  const glow = `glow-${uid}`;
  const screen = `screen-${uid}`;
  return (
    <svg
      viewBox="0 0 640 520"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <radialGradient id={glow} cx="50%" cy="45%" r="55%">
          <stop offset="0" stopColor={RED} stopOpacity="0.38" />
          <stop offset="1" stopColor={RED} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={screen} cx="50%" cy="100%" r="80%">
          <stop offset="0" stopColor="#bfe6ff" stopOpacity="0.28" />
          <stop offset="1" stopColor="#bfe6ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Alone rosso dietro */}
      <circle cx="320" cy="250" r="250" fill={`url(#${glow})`} />

      {/* Codice e riquadri che salgono dallo schermo */}
      <g fontFamily="var(--font-display)" fontWeight="700">
        <g className="c-float" style={{ animationDelay: "0s" }}>
          <rect x="84" y="210" width="96" height="60" rx="8" fill="#161616" stroke="#3a3a3a" strokeWidth="2" />
          <rect x="94" y="222" width="46" height="8" rx="4" fill={RED} />
          <rect x="94" y="238" width="74" height="6" rx="3" fill="#4a4a4a" />
          <rect x="94" y="250" width="58" height="6" rx="3" fill="#4a4a4a" />
        </g>
        <text className="c-float" style={{ animationDelay: "1.1s" }} x="486" y="210" fontSize="40" fill="#f2f2f2">
          {"</>"}
        </text>
        <text className="c-float" style={{ animationDelay: "2s" }} x="120" y="150" fontSize="34" fill={RED}>
          {"{ }"}
        </text>
        <g className="c-float" style={{ animationDelay: "2.7s" }}>
          <rect x="478" y="96" width="84" height="54" rx="8" fill="#161616" stroke="#3a3a3a" strokeWidth="2" />
          <circle cx="496" cy="114" r="7" fill="#2ec4d6" />
          <rect x="510" y="110" width="40" height="7" rx="3.5" fill="#4a4a4a" />
          <rect x="488" y="130" width="62" height="8" rx="4" fill={RED} />
        </g>
      </g>

      {/* Felpa nera con cappuccio */}
      <ellipse cx="320" cy="312" rx="104" ry="44" fill="#0d0d0d" stroke={HOODIE_LINE} strokeWidth="3" />
      <path
        d="M150 470 C150 352 214 300 320 300 C426 300 490 352 490 470 Z"
        fill={HOODIE}
        stroke={HOODIE_LINE}
        strokeWidth="3"
      />
      <path d="M298 330 L294 380 M342 330 L346 380" stroke="#4a4a4a" strokeWidth="4" strokeLinecap="round" />

      {/* Collo */}
      <path d="M294 262 h52 v46 q-26 18 -52 0 Z" fill={SKIN_SHADE} />

      {/* Testa */}
      <g className="c-head">
        {/* Orecchie */}
        <ellipse cx="250" cy="214" rx="11" ry="19" fill={SKIN} stroke={SKIN_SHADE} strokeWidth="3" />
        <ellipse cx="390" cy="214" rx="11" ry="19" fill={SKIN} stroke={SKIN_SHADE} strokeWidth="3" />
        {/* Viso */}
        <path d="M252 196 C252 132 388 132 388 196 L388 232 C388 280 356 300 320 300 C284 300 252 280 252 232 Z" fill={SKIN} />
        {/* Barba */}
        <path
          d="M252 214 C256 244 268 252 282 248 C296 240 344 240 358 248 C372 252 384 244 388 214 L388 234 C388 282 356 302 320 302 C284 302 252 282 252 234 Z"
          fill={BEARD}
        />
        {/* Baffi e labbra */}
        <path d="M290 250 C304 236 336 236 350 250 C336 244 304 244 290 250 Z" fill={BEARD} stroke={BEARD} strokeWidth="5" strokeLinejoin="round" />
        <path d="M304 260 q16 7 32 0" fill="none" stroke="#c9837a" strokeWidth="5" strokeLinecap="round" />
        {/* Sfumatura laterale dei capelli */}
        <path d="M252 214 C248 176 254 158 266 146 L270 196 Z M388 214 C392 176 386 158 374 146 L370 196 Z" fill="#3b2c25" />
        {/* Capelli: ciuffo corto in avanti */}
        <path
          d="M258 186 C244 120 286 96 324 98 C366 96 402 124 384 188 C380 166 370 152 352 154 C338 150 330 162 312 158 C294 160 286 150 276 160 C266 166 260 176 258 186 Z"
          fill={HAIR}
        />
        <path d="M286 118 q10 -8 22 -8 M330 108 q14 0 24 8" fill="none" stroke="#3a2c25" strokeWidth="4" strokeLinecap="round" />
        {/* Sopracciglia */}
        <path className="c-brows" d="M270 190 q20 -12 40 -3 M330 187 q20 -9 40 3" fill="none" stroke={HAIR} strokeWidth="8" strokeLinecap="round" />
        {/* Occhi */}
        <g className="c-blink">
          <ellipse cx="291" cy="210" rx="14" ry="10" fill="#fff" />
          <ellipse cx="349" cy="210" rx="14" ry="10" fill="#fff" />
          <g className="c-eyes">
            <circle cx="291" cy="213" r="6.5" fill="#1b1410" />
            <circle cx="349" cy="213" r="6.5" fill="#1b1410" />
            <circle cx="293" cy="211" r="2" fill="#fff" />
            <circle cx="351" cy="211" r="2" fill="#fff" />
          </g>
        </g>
        {/* Naso */}
        <path d="M318 214 q-9 22 0 28 q8 4 14 -1" fill="none" stroke={SKIN_SHADE} strokeWidth="4" strokeLinecap="round" />
        {/* Luce dello schermo sul viso */}
        <ellipse className="c-screenlight" cx="320" cy="276" rx="66" ry="40" fill={`url(#${screen})`} />
      </g>

      {/* Scrivania */}
      <rect x="30" y="458" width="580" height="14" rx="5" fill="#242424" />
      <rect x="46" y="472" width="548" height="48" fill="#121212" />

      {/* Ciak sulla scrivania */}
      <g transform="translate(64 404)">
        <rect y="16" width="86" height="42" rx="4" fill="#101010" stroke="#4a4a4a" strokeWidth="2" />
        <g className="c-clap">
          <rect width="86" height="14" rx="3" fill="#f2f2f2" />
          <path d="M10 0 l10 14 M30 0 l10 14 M50 0 l10 14 M70 0 l10 14" stroke="#101010" strokeWidth="7" />
        </g>
        <rect x="10" y="28" width="40" height="5" rx="2.5" fill="#4a4a4a" />
        <rect x="10" y="40" width="60" height="5" rx="2.5" fill="#4a4a4a" />
      </g>

      {/* Tazza con vapore */}
      <g>
        <path className="c-steam" d="M520 398 q-8 -12 0 -24 q8 -12 0 -24" fill="none" stroke="#8a8a8a" strokeWidth="4" strokeLinecap="round" />
        <path className="c-steam" style={{ animationDelay: "1.2s" }} d="M538 402 q-8 -12 0 -24 q8 -12 0 -24" fill="none" stroke="#8a8a8a" strokeWidth="4" strokeLinecap="round" />
        <rect x="504" y="412" width="50" height="46" rx="8" fill={RED} />
        <path d="M554 422 q20 0 20 14 q0 14 -20 12" fill="none" stroke={RED} strokeWidth="7" />
      </g>

      {/* Portatile visto da dietro, con la Λ che si illumina */}
      <path d="M176 458 h288 l12 10 h-312 Z" fill="#3a3a3a" />
      <rect x="204" y="322" width="232" height="138" rx="12" fill="#2a2a2a" stroke="#474747" strokeWidth="3" />
      <path className="c-logo" d="M296 420 L316 362 h8 l20 58 h-12 l-12 -38 l-12 38 Z" fill={RED} />

      {/* Mani sui tasti */}
      <g className="c-hand" style={{ animationDelay: "0s" }}>
        <path d="M150 440 q14 -22 44 -8 l6 26 h-52 Z" fill={HOODIE} stroke={HOODIE_LINE} strokeWidth="3" />
        <ellipse cx="196" cy="452" rx="16" ry="11" fill={SKIN} stroke={SKIN_SHADE} strokeWidth="3" />
      </g>
      <g className="c-hand" style={{ animationDelay: "0.09s" }}>
        <path d="M490 440 q-14 -22 -44 -8 l-6 26 h52 Z" fill={HOODIE} stroke={HOODIE_LINE} strokeWidth="3" />
        <ellipse cx="444" cy="452" rx="16" ry="11" fill={SKIN} stroke={SKIN_SHADE} strokeWidth="3" />
      </g>
      {/* Tic dei tasti */}
      <g className="c-ticks" stroke="#f2f2f2" strokeWidth="3" strokeLinecap="round">
        <path d="M172 424 l-8 -10 M190 418 l0 -12 M452 418 l0 -12 M470 424 l8 -10" />
      </g>
    </svg>
  );
}
