import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { LegalPage } from "@/components/Legal";
import { site } from "@/data/site";

export const metadata: Metadata = pageMetadata("/cookie", "Cookie policy", "Quali cookie e strumenti simili usa il sito FARGE STUDIO: solo tecnici, nessuna profilazione.");

/*
 * Cookie policy (art. 122 D.Lgs. 196/2003, Linee guida del Garante del 10 giugno 2021).
 * Oggi il sito usa SOLO strumenti tecnici: per questo non serve il banner di consenso.
 * Se aggiungi analytics non anonimizzati, pixel, video o mappe incorporati, font o
 * script caricati da terzi, serve un banner con consenso preventivo e questa pagina va aggiornata.
 */
export default function Cookie() {
  return (
    <LegalPage
      titolo="Cookie"
      intro="Informativa sui cookie e sugli strumenti simili, ai sensi dell'art. 122 del D.Lgs. 196/2003 e delle Linee guida del Garante privacy del 10 giugno 2021."
    >
      <h2>In breve</h2>
      <p>
        Questo sito <strong>non usa cookie di profilazione, pubblicitari o di statistica</strong>, né nostri né di terze
        parti. Usa solo strumenti tecnici indispensabili al funzionamento, per i quali la legge non richiede il tuo
        consenso. Per questo non ti mostriamo un banner che chiede di accettare o rifiutare.
      </p>

      <h2>Cosa sono</h2>
      <p>
        I cookie sono piccoli file che un sito salva sul tuo dispositivo. Esistono strumenti simili, come la memoria
        locale del browser (localStorage e sessionStorage), che funzionano allo stesso modo e sono regolati dalle stesse
        norme.
      </p>

      <h2>Cosa usa questo sito</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Tipo</th>
              <th scope="col">A cosa serve</th>
              <th scope="col">Durata</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>farge-intro</td>
              <td>Tecnico, memoria di sessione</td>
              <td>Ricorda che hai già visto l&apos;animazione iniziale, per non ripeterla</td>
              <td>Fino alla chiusura della scheda</td>
            </tr>
            <tr>
              <td>farge-avviso</td>
              <td>Tecnico, memoria locale</td>
              <td>Ricorda che hai chiuso l&apos;avviso informativo sui cookie</td>
              <td>Finché non svuoti i dati del browser</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Questi dati restano sul tuo dispositivo: non contengono informazioni personali e non vengono inviati a noi o ad
        altri.
      </p>

      <h2>Servizi di terze parti</h2>
      <ul>
        <li>
          <strong>Caratteri tipografici:</strong> i font sono salvati sul nostro sito. Il tuo browser non contatta Google
          Fonts né altri servizi esterni per caricarli.
        </li>
        <li>
          <strong>Hosting:</strong> il sito è ospitato da {site.legale.hosting}, che tratta i dati tecnici di navigazione
          descritti nella <Link href="/privacy">Privacy</Link>.
        </li>
        <li>
          <strong>Link esterni:</strong> i pulsanti WhatsApp, i link ai siti dei clienti e ai social ti portano su siti di
          terzi, che hanno proprie regole su cookie e privacy. Finché non clicchi, quei siti non ricevono nulla.
        </li>
      </ul>

      <h2>Come gestirli</h2>
      <p>
        Puoi cancellare o bloccare cookie e memoria locale dalle impostazioni del tuo browser (Chrome, Safari, Firefox,
        Edge). Il sito continua a funzionare: al massimo rivedrai l&apos;animazione iniziale e l&apos;avviso.
      </p>

      <h2>Contatti</h2>
      <p>
        Per domande scrivi a <a href={`mailto:${site.contatti.email}`}>{site.contatti.email}</a>. Titolare e diritti
        sono indicati nella <Link href="/privacy">Privacy</Link>.
      </p>
    </LegalPage>
  );
}
