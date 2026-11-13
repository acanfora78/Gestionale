import type { Metadata } from "next";
import Link from "next/link";
import { DatiTitolare, LegalPage } from "@/components/Legal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Note legali",
  description: "Chi gestisce il sito FARGE STUDIO, condizioni d'uso, diritti d'autore e condizioni della demo gratuita.",
  alternates: { canonical: "/note-legali" },
};

/*
 * Note legali e condizioni d'uso.
 * Riferimenti: art. 35 DPR 633/1972 (P.IVA sul sito), art. 2250 c.c. (dati societari),
 * D.Lgs. 70/2003 art. 7 (informazioni generali del prestatore), L. 633/1941 (diritto d'autore),
 * D.Lgs. 206/2005 (Codice del consumo, pratiche commerciali corrette).
 * TODO: le condizioni della demo gratuita qui sotto sono una proposta, vanno confermate.
 */
export default function NoteLegali() {
  return (
    <LegalPage titolo="Note legali" intro="Chi c'è dietro questo sito e a quali condizioni puoi usarlo.">
      <h2>1. Chi gestisce il sito</h2>
      <DatiTitolare />
      <p>
        {site.nome} offre servizi di web design e sviluppo, e-commerce, branding, gestione social, video e automazioni
        per attività e imprese.
      </p>

      <h2>2. Contenuti e diritto d&apos;autore</h2>
      <p>
        Testi, grafica, animazioni, illustrazioni, codice e impaginazione di questo sito sono di {site.nome} e sono
        protetti dalla legge sul diritto d&apos;autore (L. 633/1941). Non possono essere copiati, riprodotti o
        riutilizzati senza autorizzazione scritta, salvo gli usi consentiti dalla legge.
      </p>

      <h2>3. Lavori e marchi dei clienti</h2>
      <p>
        I progetti mostrati nella sezione Lavori sono stati realizzati da {site.nome} per i rispettivi clienti. Nomi,
        loghi, marchi, fotografie e contenuti presenti in quei progetti appartengono ai rispettivi titolari e sono
        riprodotti al solo scopo di documentare il lavoro svolto.
      </p>
      <ul>
        <li>
          Le schermate dei siti sono state acquisite alla data di pubblicazione del lavoro: i siti possono essere
          cambiati nel frattempo.
        </li>
        <li>
          Le immagini indicate come <strong>«Schema illustrativo»</strong> sono rappresentazioni grafiche realizzate da
          noi per spiegare un progetto, non schermate reali del prodotto.
        </li>
        <li>
          Il sito non riporta recensioni, numeri o risultati dei clienti. Ogni progetto ha obiettivi e risultati propri.
        </li>
      </ul>
      <p>
        Se sei titolare di un contenuto mostrato qui e vuoi che venga modificato o rimosso, scrivi a{" "}
        <a href={`mailto:${site.contatti.email}`}>{site.contatti.email}</a>: provvediamo nel più breve tempo possibile.
      </p>

      <h2>4. La demo gratuita</h2>
      <ul>
        <li>La demo è gratuita: non ti viene chiesto alcun pagamento per riceverla e vederla.</li>
        <li>Richiederla non ti obbliga ad acquistare nulla né a firmare un contratto.</li>
        <li>
          La demo è una bozza dimostrativa, non il prodotto finito. Tempi, funzioni e costi del lavoro definitivo
          vengono concordati per iscritto in un preventivo, solo se decidi di procedere.
        </li>
        <li>
          Fino a un eventuale accordo la demo resta di proprietà di {site.nome} e non può essere utilizzata, copiata o
          messa online.
        </li>
        <li>
          Valutiamo ogni richiesta e ci riserviamo di non realizzare la demo, ad esempio per attività fuori dai nostri
          ambiti o in periodi di forte carico di lavoro.
        </li>
      </ul>

      <h2>5. Prezzi e preventivi</h2>
      <p>
        Il sito non è un negozio online e non consente di acquistare o pagare. Le informazioni pubblicate non
        costituiscono un&apos;offerta contrattuale: prezzi e condizioni sono indicati in un preventivo personalizzato.
      </p>

      <h2>6. Uso del sito e responsabilità</h2>
      <p>
        Facciamo il possibile perché le informazioni siano corrette e aggiornate e perché il sito funzioni senza
        interruzioni, ma non possiamo garantirlo in ogni momento. Nei limiti consentiti dalla legge, non rispondiamo di
        danni derivanti dall&apos;uso del sito o dall&apos;impossibilità di usarlo. Restano fermi i diritti che la legge
        riconosce ai consumatori.
      </p>

      <h2>7. Link a siti esterni</h2>
      <p>
        Il sito contiene link a siti di terzi (siti dei clienti, WhatsApp, social network). Non controlliamo quei siti e
        non siamo responsabili dei loro contenuti né del modo in cui trattano i dati.
      </p>

      <h2>8. Privacy e cookie</h2>
      <p>
        Il trattamento dei dati personali è descritto nella <Link href="/privacy">Privacy</Link>; gli strumenti tecnici
        usati dal sito nella <Link href="/cookie">Cookie policy</Link>.
      </p>

      <h2>9. Legge applicabile</h2>
      <p>
        Queste note sono regolate dalla legge italiana. Per le controversie con i consumatori è competente il giudice
        del luogo di residenza o domicilio del consumatore, come previsto dal Codice del consumo.
      </p>
    </LegalPage>
  );
}
