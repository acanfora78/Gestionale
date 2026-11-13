"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { emailLink, site, whatsappLink } from "@/data/site";

/*
 * Il form non ha un server: compone il messaggio e lo apre
 * su WhatsApp oppure nell'app email del visitatore, già compilato,
 * indirizzato ai contatti in data/site.ts. Il visitatore deve solo premere "Invia".
 * Per ricevere le richieste senza passaggi (invio diretto) servirebbe
 * un servizio email, es. Resend con una Server Action.
 */

// La linea rossa sotto il campo si allunga quando ci scrivi.
const field =
  "w-full border-0 border-b border-line bg-transparent bg-[linear-gradient(var(--color-accent),var(--color-accent))] bg-[length:0%_2px] bg-[position:0_100%] bg-no-repeat px-0 py-3 text-lg text-paper transition-[background-size] duration-500 ease-out placeholder:text-muted/70 focus:bg-[length:100%_2px] focus:ring-0 focus:outline-none";

export function ContactForm() {
  const [sent, setSent] = useState<"" | "whatsapp" | "email">("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const canale = submitter?.value === "email" ? "email" : "whatsapp";
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

    if (canale === "email") {
      window.location.href = emailLink(testo, `Richiesta demo gratuita — ${get("attivita")}`);
    } else {
      window.open(whatsappLink(testo), "_blank", "noopener,noreferrer");
    }
    setSent(canale);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8" aria-describedby="form-nota">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-nome" className="block text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            Nome
          </label>
          <input id="cf-nome" name="nome" required autoComplete="name" className={field} placeholder="Mario Rossi" />
        </div>
        <div>
          <label htmlFor="cf-attivita" className="block text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            Attività
          </label>
          <input id="cf-attivita" name="attivita" required autoComplete="organization" className={field} placeholder="Ristorante, negozio, studio…" />
        </div>
      </div>
      <div>
        <label htmlFor="cf-telefono" className="block text-xs font-semibold tracking-[0.2em] text-muted uppercase">
          Telefono
        </label>
        <input id="cf-telefono" name="telefono" type="tel" required autoComplete="tel" inputMode="tel" className={field} placeholder="333 123 4567" />
      </div>
      <div>
        <label htmlFor="cf-messaggio" className="block text-xs font-semibold tracking-[0.2em] text-muted uppercase">
          Messaggio
        </label>
        <textarea id="cf-messaggio" name="messaggio" rows={3} className={`${field} resize-none`} placeholder="Raccontaci in due righe cosa ti serve" />
      </div>
      <div className="flex items-start gap-3 text-sm text-muted">
        <input
          id="cf-privacy"
          type="checkbox"
          name="privacy"
          required
          defaultChecked={false}
          className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-accent)]"
        />
        <label htmlFor="cf-privacy">
          Ho letto l&apos;
          <Link href="/privacy" className="text-paper underline underline-offset-4 hover:text-accent">
            informativa privacy
          </Link>{" "}
          e chiedo di essere ricontattato per la demo gratuita.
        </label>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          name="canale"
          value="whatsapp"
          className="group inline-flex min-h-12 items-center justify-center gap-3 bg-accent px-6 text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-accent-hover"
        >
          Invia su WhatsApp <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <button
          type="submit"
          name="canale"
          value="email"
          className="inline-flex min-h-12 items-center justify-center gap-3 border border-paper/30 px-6 text-sm font-semibold tracking-wide uppercase transition-colors hover:border-paper hover:bg-paper hover:text-ink"
        >
          Invia per email
        </button>
      </div>
      <p id="form-nota" className="-mt-4 text-sm text-muted">
        Si apre WhatsApp o la tua app email con il messaggio già pronto: devi solo premere invia.
      </p>
      <p role="status" aria-live="polite" className="text-sm text-paper">
        {sent === "whatsapp" && "Messaggio pronto su WhatsApp: premi invia e ti rispondiamo noi."}
        {sent === "email" && (
          <>
            Email pronta: premi invia. Se non si è aperto nulla, scrivici a{" "}
            <a href={`mailto:${site.contatti.email}`} className="underline underline-offset-4">
              {site.contatti.email}
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
