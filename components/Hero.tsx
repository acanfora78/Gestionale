import { Button } from "./Button";
import { Timecode } from "./Timecode";
import { WorkingCartoon } from "./WorkingCartoon";

const righe = ["Prima", "lo vedi.", "Poi decidi"];

/**
 * Apertura del sito come l'inizio di un film:
 * letterbox che si apre, titolo lettera per lettera,
 * graffi e sfarfallio della pellicola, luce che segue il mouse, badge che ruota.
 * Quasi tutto CSS, per non rallentare il primo caricamento.
 */
export function Hero() {
  let n = 0;
  return (
    <section aria-labelledby="hero-titolo" className="relative isolate overflow-hidden">
      {/* Luce rossa (segue il mouse), vignettatura, pellicola */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 transition-transform duration-700 ease-out [transform:translate3d(calc(var(--mx,0)*-3vw),calc(var(--my,0)*-3vh),0)]">
          <div className="absolute -right-[20%] -bottom-[30%] h-[80vmax] w-[80vmax] rounded-full bg-[radial-gradient(circle,rgba(225,6,0,0.38)_0%,rgba(225,6,0,0.08)_40%,transparent_70%)] motion-safe:animate-[drift_14s_ease-in-out_infinite]" />
          <div className="absolute -top-[30%] -left-[25%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_60%)] motion-safe:animate-[drift_18s_ease-in-out_infinite_reverse]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-paper/10 to-transparent" />
        <div className="flicker absolute inset-0 bg-paper" />
        <span className="scratch left-[18%]" />
        <span className="scratch left-[62%] [animation-delay:3.2s] [animation-duration:9s]" />
      </div>

      <div aria-hidden="true" className="letterbox-top" />
      <div aria-hidden="true" className="letterbox-bottom" />

      <div className="container-x relative flex min-h-[calc(100svh-4rem)] flex-col py-6 md:py-8">
        {/* Dati di ripresa */}
        <div aria-hidden="true" className="fade-in flex items-center justify-between text-[11px] font-semibold tracking-[0.25em] text-muted uppercase [--d:1.2s]">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent motion-safe:animate-pulse" />
            Rec
          </span>
          <span className="hidden sm:inline">ISO 800 · 24 FPS · 2.39:1</span>
          <Timecode />
        </div>

        <div className="relative flex flex-1 flex-col justify-center py-12">
          <p className="fade-in mb-8 text-xs font-semibold tracking-[0.25em] text-muted uppercase [--d:1s]">
            Digital agency · Campania
          </p>
          <h1 id="hero-titolo" className="display text-[clamp(3.5rem,16vw,13.5rem)]">
            <span className="sr-only">Prima lo vedi. Poi decidi.</span>
            {righe.map((r, i) => (
              <span key={r} aria-hidden="true" className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                <span className="inline-block">
                  {[...r].map((c) => {
                    const d = 0.5 + n++ * 0.035;
                    return c === " " ? (
                      <span key={n}> </span>
                    ) : (
                      <span key={n} className="char" style={{ "--d": `${d}s` } as React.CSSProperties}>
                        {c}
                      </span>
                    );
                  })}
                </span>
                {i === righe.length - 1 && (
                  <span className="char text-accent" style={{ "--d": `${0.5 + n * 0.035 + 0.15}s` } as React.CSSProperties}>
                    .
                  </span>
                )}
              </span>
            ))}
          </h1>
          <p className="fade-in mt-10 max-w-xl text-lg text-muted md:text-xl [--d:1.3s]">
            Siti, e-commerce, app, branding e contenuti per attività che vogliono crescere. Ti mostriamo una demo
            gratuita del tuo nuovo progetto prima di chiederti qualsiasi cosa.
          </p>
          <div className="fade-in mt-10 flex flex-col gap-3 sm:flex-row [--d:1.45s]">
            <Button href="#lavori" variant="outline">
              Guarda i lavori
            </Button>
            <Button href="#contatti" arrow>
              Richiedi una demo gratuita
            </Button>
          </div>

          {/* Il titolare al lavoro, in versione cartone animato (solo schermi grandi) */}
          <WorkingCartoon
            uid="hero"
            className="fade-in pointer-events-none absolute top-[2%] right-0 hidden w-[30vw] max-w-[440px] xl:block [--d:1.2s]"
          />

          {/* Badge rotante */}
          <a
            href="#metodo"
            aria-label="Scopri come funziona la demo gratuita"
            className="fade-in absolute right-0 bottom-10 hidden h-36 w-36 md:block lg:h-44 lg:w-44 [--d:1.6s]"
          >
            <svg viewBox="0 0 200 200" className="spin-slow h-full w-full" aria-hidden="true">
              <defs>
                <path id="cerchio" d="M100 100m-78 0a78 78 0 1 1 156 0a78 78 0 1 1-156 0" />
              </defs>
              <text fill="currentColor" className="text-paper/70" fontSize="15" fontWeight="600" letterSpacing="5">
                <textPath href="#cerchio">DEMO GRATUITA · PRIMA LO VEDI · POI DECIDI ·</textPath>
              </text>
            </svg>
            <span aria-hidden="true" className="absolute inset-0 grid place-items-center text-3xl text-accent">
              ↓
            </span>
          </a>
        </div>

        <div aria-hidden="true" className="fade-in flex items-end justify-between text-[11px] font-semibold tracking-[0.25em] text-muted uppercase [--d:1.6s]">
          <span>Sc. 01 — Take 01</span>
          <span className="flex items-center gap-3">
            Scorri
            <span className="relative block h-10 w-px overflow-hidden bg-line">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-accent motion-safe:animate-[scrollcue_1.8s_ease-in-out_infinite]" />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
