import type { Metadata } from "next";
import Link from "next/link";
import { DatiTitolare, LegalPage } from "@/components/Legal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Informativa sul trattamento dei dati personali ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679.",
  alternates: { canonical: "/privacy" },
};

/*
 * Informativa privacy (GDPR artt. 13-14, D.Lgs. 196/2003).
 * Descrive il sito COSÌ COM'È OGGI: nessun analytics, nessun cookie di profilazione,
 * form che apre WhatsApp/email del visitatore senza inviare dati a un server.
 * Se aggiungi analytics, pixel, newsletter, mappe o un form con invio diretto,
 * questa pagina e la cookie policy vanno aggiornate PRIMA di metterli online.
 * TODO: completare titolare e sede in data/site.ts e far rivedere il testo a un consulente.
 */
export default function Privacy() {
  return (
    <LegalPage
      titolo="Privacy"
      intro="Informativa sul trattamento dei dati personali ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003."
    >
      <h2>1. Titolare del trattamento</h2>
      <DatiTitolare />
      <p>Per qualsiasi richiesta sui tuoi dati puoi scrivere ai recapiti qui sopra.</p>

      <h2>2. Quali dati trattiamo</h2>
      <h3>Dati di navigazione</h3>
      <p>
        Il sito è ospitato da {site.legale.hosting}. Come per ogni sito web, i sistemi che lo fanno funzionare
        registrano in automatico alcuni dati tecnici: indirizzo IP, data e ora della richiesta, pagina richiesta, tipo
        di browser e di dispositivo. Questi dati servono solo a far funzionare il sito e a garantirne la sicurezza; non
        li usiamo per identificarti né per profilarti.
      </p>
      <h3>Dati che ci invii tu</h3>
      <p>
        Se ci contatti tramite WhatsApp, email, telefono o compilando il modulo di contatto, trattiamo i dati che
        scegli di comunicarci: nome, nome dell&apos;attività, numero di telefono, indirizzo email e contenuto del
        messaggio.
      </p>
      <p>
        <strong>Come funziona il modulo:</strong> il modulo di contatto non invia i tuoi dati a un nostro server. Compone
        il messaggio e apre WhatsApp oppure la tua app di posta, dove sei tu a decidere se inviarlo. Riceviamo i dati
        solo quando premi invio in quelle applicazioni.
      </p>
      <h3>Dati che non raccogliamo</h3>
      <p>
        Il sito non usa strumenti di statistica (analytics), pixel pubblicitari, cookie di profilazione o tracciamento
        tra siti diversi. Non ti chiediamo e ti invitiamo a non inviarci dati particolari (salute, opinioni politiche,
        convinzioni religiose e simili). Il sito non è rivolto a minori di 14 anni.
      </p>

      <h2>3. Perché li trattiamo e su quale base</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Finalità</th>
              <th scope="col">Base giuridica</th>
              <th scope="col">Conservazione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rispondere alle tue richieste, preparare la demo gratuita e un eventuale preventivo</td>
              <td>Misure precontrattuali richieste da te (art. 6.1.b GDPR)</td>
              <td>Fino a 24 mesi dall&apos;ultimo contatto, se non nasce un rapporto di lavoro</td>
            </tr>
            <tr>
              <td>Gestire il rapporto con i clienti (contratti, fatture, assistenza)</td>
              <td>Esecuzione del contratto (art. 6.1.b) e obblighi di legge (art. 6.1.c)</td>
              <td>10 anni per i documenti contabili e fiscali</td>
            </tr>
            <tr>
              <td>Funzionamento e sicurezza del sito</td>
              <td>Legittimo interesse (art. 6.1.f)</td>
              <td>Per il tempo previsto dal fornitore di hosting, di norma pochi giorni o settimane</td>
            </tr>
            <tr>
              <td>Difenderci o far valere un diritto in caso di contestazioni</td>
              <td>Legittimo interesse (art. 6.1.f)</td>
              <td>Per la durata della contestazione e i termini di prescrizione</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Non ti inviamo newsletter né comunicazioni promozionali senza il tuo consenso. Non prendiamo decisioni
        automatizzate e non facciamo profilazione.
      </p>
      <p>
        Comunicarci i tuoi dati è facoltativo, ma senza un recapito non possiamo risponderti né preparare la demo.
      </p>

      <h2>4. A chi comunichiamo i dati</h2>
      <p>I dati non vengono venduti né diffusi. Possono essere trattati, per nostro conto o come titolari autonomi, da:</p>
      <ul>
        <li>{site.legale.hosting}, che ospita il sito;</li>
        <li>il fornitore della nostra casella di posta elettronica (Google Ireland Ltd., servizio Gmail);</li>
        <li>WhatsApp Ireland Ltd. (gruppo Meta), se scegli di scriverci su WhatsApp;</li>
        <li>il nostro commercialista e i consulenti, per gli obblighi contabili e fiscali;</li>
        <li>autorità pubbliche, quando la legge lo impone.</li>
      </ul>

      <h2>5. Trasferimento fuori dall&apos;Unione Europea</h2>
      <p>
        Alcuni di questi fornitori hanno sede o server negli Stati Uniti. In quel caso il trasferimento avviene sulla
        base della decisione di adeguatezza della Commissione Europea (EU-U.S. Data Privacy Framework) oppure delle
        clausole contrattuali standard approvate dalla Commissione.
      </p>

      <h2>6. I tuoi diritti</h2>
      <p>In qualsiasi momento puoi chiederci di:</p>
      <ul>
        <li>sapere se trattiamo tuoi dati e riceverne copia (accesso);</li>
        <li>correggerli o aggiornarli (rettifica);</li>
        <li>cancellarli (oblio), nei casi previsti;</li>
        <li>limitarne il trattamento;</li>
        <li>riceverli in un formato leggibile e trasferirli ad altri (portabilità);</li>
        <li>opporti al trattamento basato sul legittimo interesse;</li>
        <li>revocare un consenso eventualmente dato, senza effetti sul passato.</li>
      </ul>
      <p>
        Per esercitare questi diritti (artt. 15-22 GDPR) scrivi a{" "}
        <a href={`mailto:${site.contatti.email}`}>{site.contatti.email}</a>. Rispondiamo entro un mese. È gratuito.
      </p>
      <p>
        Se ritieni che il trattamento violi la legge puoi presentare reclamo al Garante per la protezione dei dati
        personali (
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
          www.garanteprivacy.it
        </a>
        ) o rivolgerti al giudice.
      </p>

      <h2>7. Cookie</h2>
      <p>
        Il sito usa solo strumenti tecnici necessari al funzionamento. I dettagli sono nella{" "}
        <Link href="/cookie">Cookie policy</Link>.
      </p>

      <h2>8. Modifiche</h2>
      <p>
        Possiamo aggiornare questa informativa, ad esempio se cambiano la legge o i servizi del sito. La data in alto
        indica l&apos;ultima versione.
      </p>
    </LegalPage>
  );
}
