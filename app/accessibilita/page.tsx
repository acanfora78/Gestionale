import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/Legal";
import { site } from "@/data/site";

export const metadata: Metadata = pageMetadata("/accessibilita", "Accessibilità", "L'impegno di FARGE STUDIO per un sito utilizzabile da tutti e come segnalare un problema.");

/*
 * Dichiarazione volontaria: la dichiarazione di accessibilità AgID è obbligatoria
 * per la PA e per le grandi imprese (L. 4/2004), e l'European Accessibility Act
 * (D.Lgs. 82/2022) esenta le microimprese di servizi. La pubblichiamo comunque
 * per trasparenza. Non dichiara una conformità certificata: descrive cosa è stato fatto.
 */
export default function Accessibilita() {
  return (
    <LegalPage titolo="Accessibilità" intro="Vogliamo che questo sito sia utilizzabile da più persone possibile.">
      <h2>Il nostro impegno</h2>
      <p>
        Progettiamo il sito prendendo come riferimento le linee guida internazionali WCAG 2.1, livello AA. Non abbiamo
        ancora fatto verificare il sito da un ente esterno, quindi non dichiariamo una conformità certificata.
      </p>

      <h2>Cosa abbiamo fatto</h2>
      <ul>
        <li>Testi con contrasto elevato su fondo scuro.</li>
        <li>Navigazione completa da tastiera, con il punto attivo sempre evidenziato.</li>
        <li>Link «Vai al contenuto» all&apos;inizio di ogni pagina.</li>
        <li>Titoli, elenchi ed etichette dei campi leggibili dagli screen reader.</li>
        <li>Testo alternativo sulle immagini che trasmettono informazioni.</li>
        <li>
          Animazioni disattivate in automatico se nel tuo dispositivo è attiva l&apos;opzione «Riduci movimento». Nessun
          contenuto lampeggia più di tre volte al secondo.
        </li>
        <li>Pagine utilizzabili da telefono, anche ingrandendo il testo.</li>
      </ul>

      <h2>Limiti che conosciamo</h2>
      <ul>
        <li>Il sito ha molte animazioni: se ti danno fastidio, attiva «Riduci movimento» nelle impostazioni del dispositivo.</li>
        <li>Le schermate dei siti dei clienti sono immagini: il loro contenuto è descritto solo in sintesi.</li>
      </ul>

      <h2>Segnalaci un problema</h2>
      <p>
        Se trovi un ostacolo o non riesci a usare una parte del sito, scrivi a{" "}
        <a href={`mailto:${site.contatti.email}`}>{site.contatti.email}</a> o chiama il{" "}
        <a href={`tel:+${site.contatti.whatsapp}`}>{site.contatti.telefonoVisibile}</a>. Ti rispondiamo e, se
        possibile, correggiamo.
      </p>
    </LegalPage>
  );
}
