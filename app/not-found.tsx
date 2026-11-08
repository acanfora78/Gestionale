import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70svh] flex-col justify-center py-20">
      <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-muted uppercase">Errore 404</p>
      <h1 className="display text-[clamp(3rem,12vw,9rem)]">
        Pagina non trovata<span className="text-accent">.</span>
      </h1>
      <div className="mt-10">
        <Button href="/" arrow>
          Torna alla home
        </Button>
      </div>
    </section>
  );
}
