/**
 * Schema illustrativo di un'app di prenotazione lettini:
 * piscina vista dall'alto con i lettini (liberi, occupati, il tuo)
 * e un telefono con la schermata di prenotazione.
 * Non è uno screenshot: va sempre accompagnato dall'etichetta "Schema illustrativo".
 */

const TURQ = "#2ec4d6";
const RED = "#e10600";

type Stato = "libero" | "occupato" | "tuo";

// Disposizione fissa (niente casualità: stesso disegno a ogni render).
const filaSopra: Stato[] = ["occupato", "libero", "occupato", "occupato", "libero", "libero", "occupato", "libero", "occupato"];
const filaSotto: Stato[] = ["libero", "occupato", "libero", "tuo", "libero", "occupato", "occupato", "libero", "libero"];

function Lettino({ x, y, stato, flip = false }: { x: number; y: number; stato: Stato; flip?: boolean }) {
  const fill = stato === "tuo" ? RED : stato === "occupato" ? "rgba(255,255,255,0.16)" : "none";
  const stroke = stato === "tuo" ? RED : "rgba(255,255,255,0.4)";
  return (
    <g transform={`translate(${x} ${y})${flip ? " rotate(180 30 55)" : ""}`}>
      <rect width="60" height="110" rx="10" fill={fill} stroke={stroke} strokeWidth="3" />
      <line x1="8" y1="34" x2="52" y2="34" stroke={stato === "tuo" ? "#fff" : stroke} strokeWidth="3" />
    </g>
  );
}

export function PoolPlan({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <pattern id="griglia" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
        <radialGradient id="acqua" cx="50%" cy="50%" r="60%">
          <stop offset="0" stopColor={TURQ} stopOpacity="0.28" />
          <stop offset="1" stopColor={TURQ} stopOpacity="0.08" />
        </radialGradient>
      </defs>
      <rect width="1600" height="1000" fill="#0b0d0e" />
      <rect width="1600" height="1000" fill="url(#griglia)" />

      {/* Piscina */}
      <rect x="200" y="360" width="1200" height="290" rx="36" fill="url(#acqua)" stroke={TURQ} strokeOpacity="0.6" strokeWidth="3" />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M240 ${420 + i * 60} q30 -14 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0`}
          fill="none"
          stroke={TURQ}
          strokeOpacity="0.25"
          strokeWidth="2"
        />
      ))}

      {/* Lettini */}
      {filaSopra.map((s, i) => (
        <Lettino key={`a${i}`} x={250 + i * 125} y={200} stato={s} />
      ))}
      {filaSotto.map((s, i) => (
        <Lettino key={`b${i}`} x={250 + i * 125} y={700} stato={s} flip />
      ))}

      {/* Segnaposto del lettino prenotato */}
      <g transform="translate(655 850)">
        <line x1="0" y1="-40" x2="0" y2="0" stroke={RED} strokeWidth="2" />
        <circle cx="0" cy="0" r="6" fill={RED} />
      </g>
    </svg>
  );
}

export function PhoneBooking({ logo, className = "" }: { logo?: string; className?: string }) {
  const giorni = ["OGGI", "DOM", "LUN", "MAR"];
  // 4 righe x 6 lettini
  const griglia: Stato[] = [
    "occupato", "libero", "libero", "occupato", "libero", "occupato",
    "libero", "occupato", "tuo", "libero", "libero", "libero",
    "occupato", "libero", "occupato", "occupato", "libero", "libero",
    "libero", "libero", "libero", "occupato", "libero", "occupato",
  ];
  const font = { fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em" };

  return (
    <svg viewBox="0 0 300 600" className={className} aria-hidden="true">
      <rect x="2" y="2" width="296" height="596" rx="44" fill="#0e0e0e" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
      <rect x="110" y="16" width="80" height="20" rx="10" fill="#000" />

      {logo ? <image href={logo} x="24" y="56" width="110" height="30" preserveAspectRatio="xMinYMid meet" /> : null}
      <circle cx="262" cy="71" r="14" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />

      {giorni.map((g, i) => (
        <g key={g} transform={`translate(${24 + i * 64} 110)`}>
          <rect width="56" height="34" rx="17" fill={i === 0 ? RED : "none"} stroke={i === 0 ? RED : "rgba(255,255,255,0.3)"} strokeWidth="2" />
          <text x="28" y="22" textAnchor="middle" fontSize="11" fill="#fff" style={font}>
            {g}
          </text>
        </g>
      ))}

      <text x="24" y="182" fontSize="12" fill="rgba(255,255,255,0.7)" style={font}>
        SCEGLI IL TUO LETTINO
      </text>

      <rect x="24" y="198" width="252" height="70" rx="12" fill={TURQ} fillOpacity="0.18" stroke={TURQ} strokeOpacity="0.6" strokeWidth="2" />
      <path d="M40 236 q12 -8 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke={TURQ} strokeOpacity="0.5" strokeWidth="2" />

      {griglia.map((s, i) => {
        const col = i % 6;
        const row = Math.floor(i / 6);
        return (
          <rect
            key={i}
            x={30 + col * 41}
            y={286 + row * 46}
            width="30"
            height="38"
            rx="6"
            fill={s === "tuo" ? RED : s === "occupato" ? "rgba(255,255,255,0.18)" : "none"}
            stroke={s === "tuo" ? RED : "rgba(255,255,255,0.4)"}
            strokeWidth="2"
          />
        );
      })}

      <g transform="translate(24 486)" fontSize="10" style={font}>
        <rect width="10" height="10" rx="2" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <text x="16" y="9" fill="rgba(255,255,255,0.7)">LIBERO</text>
        <rect x="82" width="10" height="10" rx="2" fill="rgba(255,255,255,0.3)" />
        <text x="98" y="9" fill="rgba(255,255,255,0.7)">OCCUPATO</text>
        <rect x="182" width="10" height="10" rx="2" fill={RED} />
        <text x="198" y="9" fill="rgba(255,255,255,0.7)">IL TUO</text>
      </g>

      <rect x="24" y="516" width="252" height="52" rx="26" fill={RED} />
      <text x="150" y="547" textAnchor="middle" fontSize="13" fill="#fff" style={font}>
        PRENOTA LETTINO
      </text>
    </svg>
  );
}
