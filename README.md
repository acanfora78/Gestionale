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
- `illustrazione: "prenotazione-lettini"`: copertina con schema della piscina e telefono con l'app (sempre etichettata "Schema illustrativo"). Nel case study aggiunge la sezione "L'applicazione". Qualsiasi campo testuale che inizia con `TODO` non viene mostrato nel case study.

## Rifare gli screenshot

```bash
npm run screenshots              # tutti i lavori
npm run screenshots vs-shop      # solo uno (o più slug separati da spazio)
```

Per ogni lavoro con URL lo script salva in `public/works/[slug]/`:
`desktop.jpg` e `desktop-2.jpg` (1440px), `mobile.jpg` e `mobile-2.jpg` (390px, retina).
Aspetta 5 secondi per video e animazioni e prova a chiudere i banner cookie. Se uno screenshot non viene bene, rilancia lo script per quel lavoro.

La prima volta su un computer nuovo serve il browser di Playwright: `npx playwright install chromium`.
Se vuoi usare un Chromium già installato: `CHROMIUM_PATH=/percorso/chromium npm run screenshots`.

## Il form contatti

Il form oggi non ha un backend: all'invio apre WhatsApp con il messaggio già compilato. Per ricevere le richieste via email va collegato un servizio (es. Resend o Formspree) in `components/ContactForm.tsx`.
