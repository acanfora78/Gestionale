import { Button } from "./Button";
import { Timecode } from "./Timecode";

const righe = ["Prima", "lo vedi.", "Poi decidi"];

/**
 * Apertura del sito come l'inizio di un film:
 * il letterbox si apre, il titolo sale riga per riga, timecode che scorre.
 * Solo CSS (più un piccolo timecode), per non rallentare il primo caricamento.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-titolo" className="relative isolate overflow-hidden">
      {/* Luce rossa e vignettatura */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-[20%] -bottom-[30%] h-[80vmax] w-[80vmax] rounded-full bg-[radial-gradient(circle,rgba(225,6,0,0.35)_0%,rgba(225,6,0,0.08)_40%,transparent_70%)] motion-safe:animate-[drift_14s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-paper/10 to-transparent" />
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
          <Timecode />
        </div>

        <div className="flex flex-1 flex-col justify-center py-12">
          <p className="fade-in mb-8 text-xs font-semibold tracking-[0.25em] text-muted uppercase [--d:1s]">
            Digital agency · Campania
          </p>
          <h1 id="hero-titolo" className="display text-[clamp(3.5rem,16vw,13.5rem)]">
            {righe.map((r, i) => (
              <span key={r} className="rise">
                <span style={{ "--d": `${0.55 + i * 0.12}s` } as React.CSSProperties}>
                  {r}
                  {i === righe.length - 1 && <span className="text-accent">.</span>}
                </span>
              </span>
            ))}
          </h1>
          <p className="fade-in mt-10 max-w-xl text-lg text-muted md:text-xl [--d:1.1s]">
            Siti, e-commerce, app, branding e contenuti per attività che vogliono crescere. Ti mostriamo una demo
            gratuita del tuo nuovo progetto prima di chiederti qualsiasi cosa.
          </p>
          <div className="fade-in mt-10 flex flex-col gap-3 sm:flex-row [--d:1.25s]">
            <Button href="#lavori" variant="outline">
              Guarda i lavori
            </Button>
            <Button href="#contatti" arrow>
              Richiedi una demo gratuita
            </Button>
          </div>
        </div>

        <div aria-hidden="true" className="fade-in flex items-end justify-between text-[11px] font-semibold tracking-[0.25em] text-muted uppercase [--d:1.4s]">
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
