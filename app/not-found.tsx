import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Scena tagliata al montaggio",
  robots: { index: false },
};

/** 404 in stile cinema: un ciak con la scena scartata. */
export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="letterbox-top" />
      <div aria-hidden="true" className="letterbox-bottom" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(225,6,0,0.18)_0%,transparent_60%)]"
      />
      <div className="container-x flex min-h-[75svh] flex-col justify-center py-20">
        {/* Ciak */}
        <div aria-hidden="true" className="mb-10 w-full max-w-sm border border-line font-mono text-xs tracking-[0.2em] text-muted uppercase">
          <div className="h-5 bg-[repeating-linear-gradient(135deg,#f2f2f2_0_14px,#0a0a0a_14px_28px)]" />
          <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
            <span className="p-3">Sc. 404</span>
            <span className="p-3">Take 00</span>
            <span className="p-3 text-accent">Scartata</span>
          </div>
          <div className="p-3">Regia: FΛRGE STUDIO™</div>
        </div>

        <p className="mb-6 text-xs font-semibold tracking-[0.25em] text-muted uppercase">Errore 404</p>
        <h1 className="display text-[clamp(3rem,11vw,8.5rem)]">
          Scena tagliata
          <br />
          al montaggio<span className="text-accent">.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted">
          Questa pagina non è arrivata al montaggio finale: forse il link è sbagliato o la pagina è stata spostata.
        </p>
        <div className="mt-10">
          <Button href="/" arrow>
            Torna alla home
          </Button>
        </div>
      </div>
    </section>
  );
}
