"use client";

import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/data/site";

/*
 * TODO: il form oggi non ha un backend. All'invio compone il messaggio
 * e apre WhatsApp con il testo già scritto (comodo da telefono).
 * Per ricevere le richieste via email collegare un servizio
 * (es. Resend con una Server Action, oppure Formspree) in handleSubmit.
 */

// La linea rossa sotto il campo si allunga quando ci scrivi.
const field =
  "w-full border-0 border-b border-line bg-transparent bg-[linear-gradient(var(--color-accent),var(--color-accent))] bg-[length:0%_2px] bg-[position:0_100%] bg-no-repeat px-0 py-3 text-lg text-paper transition-[background-size] duration-500 ease-out placeholder:text-muted/70 focus:bg-[length:100%_2px] focus:ring-0 focus:outline-none";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const testo = [
      "Ciao FARGE STUDIO, vorrei una demo gratuita.",
      `Nome: ${get("nome")}`,
      `Attività: ${get("attivita")}`,
      `Telefono: ${get("telefono")}`,
      get("messaggio") && `Messaggio: ${get("messaggio")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(testo), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8" aria-describedby="form-nota">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Nome</span>
          <input name="nome" required autoComplete="name" className={field} placeholder="Mario Rossi" />
        </label>
        <label className="block">
          <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Attività</span>
          <input name="attivita" required autoComplete="organization" className={field} placeholder="Ristorante, negozio, studio…" />
        </label>
      </div>
      <label className="block">
        <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Telefono</span>
        <input name="telefono" type="tel" required autoComplete="tel" inputMode="tel" className={field} placeholder="333 123 4567" />
      </label>
      <label className="block">
        <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Messaggio</span>
        <textarea name="messaggio" rows={3} className={`${field} resize-none`} placeholder="Raccontaci in due righe cosa ti serve" />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="group inline-flex min-h-12 items-center justify-center gap-3 bg-accent px-6 text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-accent-hover"
        >
          Richiedi la demo <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <p id="form-nota" className="text-sm text-muted">
          L&apos;invio apre WhatsApp con il messaggio già pronto.
        </p>
      </div>
      <p role="status" aria-live="polite" className="text-sm text-paper">
        {sent ? "Messaggio pronto su WhatsApp: premi invia e ti rispondiamo noi." : ""}
      </p>
    </form>
  );
}
