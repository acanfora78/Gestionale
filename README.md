# FΛRGE STUDIO® — sito portfolio

Next.js (App Router) + TypeScript + Tailwind CSS 4 + Framer Motion. Deploy su Vercel.

```bash
npm install
npm run dev          # sviluppo su http://localhost:3000
npm run build        # build di produzione
npm run screenshots  # rigenera gli screenshot dei lavori
```

## Dove sono le cose

| Cosa | File |
| --- | --- |
| Lavori del portfolio | `data/works.ts` |
| Contatti, P.IVA, dominio, servizi, step del metodo | `data/site.ts` |
| Home | `app/page.tsx` |
| Pagina case study | `app/lavori/[slug]/page.tsx` |
| Componenti (`WorkCard`, `Section`, `Button`, `CTA`…) | `components/` |
| Colori e font | `app/globals.css`, `app/layout.tsx` |
| Script screenshot | `scripts/screenshots.ts` |

Cerca `TODO` nel progetto per trovare tutti i segnaposto da completare.

## Aggiungere un nuovo lavoro

1. Apri `data/works.ts` e copia uno dei lavori esistenti in fondo all'array `works`.
2. Compila i campi: `slug` (minuscolo, con trattini, es. `pizzeria-da-mario`), `nome`, `settore`, `url`, `piattaforma`, `servizi`, `descrizioneBreve`, `descrizione`, `obiettivo`, `cosaAbbiamoFatto`, `inEvidenza`.
3. Per le immagini usa `immagini: screenshots("pizzeria-da-mario", "Pizzeria da Mario")`.
4. Lancia `npm run screenshots pizzeria-da-mario`.
5. Fatto: la card compare in home, e la pagina `/lavori/pizzeria-da-mario` e la sitemap si generano da sole.

Se il sito non ha ancora un URL, metti `url: "TODO_URL"` e `immagini: []`: la card mostra un segnaposto.

Campi facoltativi:
- `logo`: SVG chiaro del cliente (es. `/works/korme/logo.svg`). Senza screenshot, la copertina mostra il logo.
- `tipo`: etichetta del progetto, es. `"Web app"`.
- `illustrazione: "prenotazione-lettini"`: copertina con schema della piscina e telefono con l'app (sempre etichettata "Schema illustrativo"). Nel case study aggiunge la sezione "L'applicazione".

Qualsiasi campo testuale che inizia con `TODO` non viene mostrato nel case study.

## Rifare gli screenshot

```bash
npm run screenshots              # tutti i lavori
npm run screenshots sudditalia      # solo uno (o più slug separati da spazio)
```

Per ogni lavoro con URL lo script salva in `public/works/[slug]/`:
`desktop.jpg` e `desktop-2.jpg` (1440px), `mobile.jpg` e `mobile-2.jpg` (390px, retina).
Aspetta 5 secondi per video e animazioni e prova a chiudere i banner cookie. Se uno screenshot non viene bene, rilancia lo script per quel lavoro.

La prima volta su un computer nuovo serve il browser di Playwright: `npx playwright install chromium`.
Se vuoi usare un Chromium già installato: `CHROMIUM_PATH=/percorso/chromium npm run screenshots`.

## Contatti e form

Email, WhatsApp, telefono e P.IVA sono in `data/site.ts`: cambiandoli lì si aggiornano pulsanti, form, footer e privacy.

Il form non ha un server: con "Invia su WhatsApp" o "Invia per email" apre WhatsApp o l'app email di chi lo compila, con il messaggio già scritto e indirizzato a te. Chi scrive deve solo premere invia. Per ricevere le richieste in automatico, senza quel passaggio, serve un servizio email (es. Resend) collegato in `components/ContactForm.tsx`.

## Pagine legali

`/privacy`, `/cookie`, `/note-legali`, `/accessibilita` (in `app/`), con impaginazione comune in `components/Legal.tsx`.
I dati di chi gestisce il sito stanno in `data/site.ts` → `legale`: **titolare, sede, PEC** sono da compilare (finché sono vuoti non compaiono).

I testi descrivono il sito com'è oggi: nessun analytics, nessun cookie di profilazione, font ospitati sul sito, form che non invia dati a un server. Per questo c'è solo un avviso informativo (`components/CookieNotice.tsx`) e non un banner di consenso.
**Se aggiungi analytics, pixel, mappe/video incorporati, newsletter o un form con invio diretto, aggiorna prima privacy e cookie policy e metti un banner di consenso.**
Sono testi standard, non una consulenza legale: falli rivedere da un professionista.

## Animazioni

Quasi tutte sono in CSS (`app/globals.css`, sezioni "Cinema" e "Animazioni extra"); con "riduci movimento" attivo nel sistema si spengono.

- Intro 3-2-1 della home con il cartone animato del titolare al lavoro: `components/Intro.tsx` e `components/WorkingCartoon.tsx`, una volta per sessione (script in `app/layout.tsx`), con pulsante "Salta intro".
- Sipario tra le pagine: `app/template.tsx`.
- Cursore, luce che segue il mouse: `components/Cursor.tsx`. Sui lavori il cursore mostra "Guarda" (`data-cursor="view"`).
- Pulsanti magnetici: `components/Magnetic.tsx`. Card inclinabili: `components/Tilt.tsx`.
- Titoli lettera per lettera: `components/SplitText.tsx` (parole tra `*asterischi*` in rosso). Etichette che si decodificano: `components/Scramble.tsx`.
- Metodo in carrellata orizzontale (desktop, Chrome/Edge/Safari recenti): classi `h-scroll*` in `globals.css`.
