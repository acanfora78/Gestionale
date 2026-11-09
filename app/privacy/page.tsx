import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Informativa sul trattamento dei dati personali di FARGE STUDIO.",
  alternates: { canonical: "/privacy" },
};

/*
 * TODO: questa è una bozza di struttura, NON un'informativa valida.
 * Va sostituita con il testo definitivo (titolare, base giuridica,
 * tempi di conservazione, diritti dell'interessato, eventuali cookie
 * e servizi terzi come WhatsApp, Vercel Analytics, form provider).
 */
export default function Privacy() {
  return (
    <article className="container-x max-w-3xl py-20 md:py-28">
      <h1 className="display text-[clamp(3rem,10vw,6rem)]">Privacy</h1>
      <div className="mt-10 space-y-6 text-lg text-paper/85">
        <p>
          Titolare del trattamento: {site.ragioneSociale.startsWith("TODO") ? site.nome : site.ragioneSociale}, P.IVA {site.piva}. Contatto:{" "}
          <a href={`mailto:${site.contatti.email}`} className="underline underline-offset-4 hover:text-accent">
            {site.contatti.email}
          </a>
          .
        </p>
        <p>
          Questo sito non usa cookie di profilazione. I dati che ci invii tramite il form o WhatsApp (nome, attività,
          telefono, messaggio) sono usati solo per risponderti e per preparare la demo richiesta.
        </p>
        <p className="text-muted">Informativa completa in aggiornamento.</p>
      </div>
    </article>
  );
}
