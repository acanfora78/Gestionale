/**
 * Tutti i lavori del portfolio.
 *
 * Per aggiungere un lavoro: copia un oggetto qui sotto, cambia i campi
 * e lancia `npm run screenshots` per generare le immagini.
 * Leggi il README per i dettagli.
 */

export type Immagine = {
  /** Percorso dentro /public, es. "/works/sudditalia/desktop.jpg" */
  src: string;
  alt: string;
  tipo: "desktop" | "mobile";
  width: number;
  height: number;
};

export type Work = {
  /** Usato nell'URL: /lavori/[slug] e nella cartella /public/works/[slug] */
  slug: string;
  nome: string;
  settore: string;
  /** URL del sito live. Lascia "TODO_URL" se non c'è ancora. */
  url: string;
  piattaforma: string;
  servizi: string[];
  /** Una riga, mostrata nella card. */
  descrizioneBreve: string;
  /** Testo della pagina case study. Ogni elemento è un paragrafo. */
  descrizione: string[];
  /** Obiettivo del cliente, mostrato nel case study. */
  obiettivo: string;
  /** Cosa abbiamo fatto, elenco puntato nel case study. */
  cosaAbbiamoFatto: string[];
  immagini: Immagine[];
  /**
   * Di quante schermate scorrere per il secondo screenshot (default 1).
   * Serve a inquadrare una sezione precisa del sito. Facoltativo.
   */
  secondaVista?: { desktop?: number; mobile?: number };
  /**
   * Logo del cliente (SVG chiaro, in /public). Facoltativo.
   * Se il lavoro non ha screenshot, la copertina mostra il logo.
   */
  logo?: string;
  /** Tipo di progetto mostrato come etichetta, es. "Web app". Facoltativo. */
  tipo?: string;
  /** Illustrazione da usare in copertina quando non ci sono screenshot. Facoltativo. */
  illustrazione?: "prenotazione-lettini";
  inEvidenza: boolean;
};

/** Dimensioni degli screenshot generati da scripts/screenshots.ts */
export const SCREENSHOT = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
} as const;

/** Genera la lista standard di immagini prodotta dallo script. */
function screenshots(slug: string, nome: string): Immagine[] {
  const d = SCREENSHOT.desktop;
  const m = SCREENSHOT.mobile;
  return [
    { src: `/works/${slug}/desktop.jpg`, alt: `${nome}: homepage su desktop`, tipo: "desktop", ...d },
    { src: `/works/${slug}/desktop-2.jpg`, alt: `${nome}: sezione interna su desktop`, tipo: "desktop", ...d },
    { src: `/works/${slug}/mobile.jpg`, alt: `${nome}: homepage su smartphone`, tipo: "mobile", ...m },
    { src: `/works/${slug}/mobile-2.jpg`, alt: `${nome}: sezione interna su smartphone`, tipo: "mobile", ...m },
  ];
}

export const works: Work[] = [
  {
    slug: "osteria-il-tormentone",
    nome: "Osteria Il Tormentone",
    settore: "Ristorazione",
    url: "https://osteriatormentone.it",
    // TODO: confermare la tecnologia usata
    piattaforma: "Sito su misura",
    servizi: ["Web Design & Development", "Prenotazioni online"],
    // TODO_DESCRIZIONE: testi proposti guardando il sito live, da confermare
    descrizioneBreve:
      "Ristorante a conduzione familiare a Scafati: un sito che porta dritto alla prenotazione del tavolo.",
    descrizione: [
      "Osteria Il Tormentone è un ristorante a conduzione familiare a Scafati, con una cucina di tradizione napoletana.",
      "Abbiamo realizzato un sito su misura che racconta la storia della famiglia e accompagna il cliente fino alla prenotazione: un modulo semplice che si conclude su WhatsApp, direttamente con il ristorante.",
    ],
    obiettivo:
      "Trasformare chi cerca il ristorante online in un tavolo prenotato, in pochi tocchi dal telefono.",
    cosaAbbiamoFatto: [
      "Design e sviluppo su misura",
      "Prenotazione del tavolo online",
      "Conferma diretta su WhatsApp",
      "Sezione sulla storia del ristorante",
      "Contatti, telefono e indicazioni",
    ],
    // Seconda immagine sulla sezione prenotazione
    secondaVista: { desktop: 1.62, mobile: 3.1 },
    immagini: screenshots("osteria-il-tormentone", "Osteria Il Tormentone"),
    inEvidenza: true,
  },
  {
    slug: "sudditalia",
    nome: "Sudditalia",
    settore: "Streetwear & denim",
    url: "https://sudditalia.it",
    piattaforma: "Shopify",
    servizi: ["E-commerce Shopify", "Web Design"],
    descrizioneBreve:
      "Brand streetwear e denim 100% Made in Italy, con collezioni stagionali ed edizioni limitate.",
    descrizione: [
      "Sudditalia è un brand streetwear e denim “100% Made in Italy”.",
      "L'e-commerce Shopify si apre con un video, presenta le collezioni stagionali e le edizioni limitate, e affianca allo shop un blog e il collegamento con i social.",
    ],
    obiettivo:
      "Dare al brand uno shop con un'identità forte, capace di raccontare le collezioni e spingere le uscite in edizione limitata.",
    cosaAbbiamoFatto: [
      "E-commerce su Shopify",
      "Video di apertura",
      "Collezioni stagionali",
      "Sezione edizioni limitate",
      "Blog",
      "Collegamento con i social",
    ],
    immagini: screenshots("sudditalia", "Sudditalia"),
    inEvidenza: true,
  },
  {
    slug: "korme",
    nome: "Korme",
    settore: "Piscina · Prenotazioni",
    tipo: "Web app",
    // TODO: inserire l'URL dell'app Korme, poi lanciare `npm run screenshots korme`
    url: "TODO_URL",
    // TODO: confermare la tecnologia usata per l'app
    piattaforma: "Web app di prenotazione",
    servizi: ["Web App", "Sistema di prenotazione", "UX/UI Design"],
    descrizioneBreve:
      "Un'applicazione per prenotare online i lettini in piscina, direttamente dal telefono.",
    // TODO: confermare e completare con le funzioni reali dell'app
    descrizione: [
      "Korme offre lettini a bordo piscina e voleva che i clienti potessero prenotarli online.",
      "Abbiamo strutturato un'applicazione di prenotazione: il cliente sceglie il giorno, vede i lettini disponibili e prenota il suo posto online. Korme ha tutte le prenotazioni in un unico posto.",
    ],
    // TODO: confermare l'obiettivo con il cliente
    obiettivo:
      "Far prenotare i lettini online in pochi tocchi e avere tutti i posti sotto controllo in un'unica app.",
    // TODO: confermare l'elenco con le funzioni reali dell'app
    cosaAbbiamoFatto: [
      "Struttura e flusso dell'applicazione",
      "Prenotazione online dei lettini",
      "Scelta del giorno e del posto",
      "Interfaccia pensata per lo smartphone",
      "Logo e identità visiva",
    ],
    logo: "/works/korme/logo.svg",
    illustrazione: "prenotazione-lettini",
    // Nessuno screenshot finché manca l'URL: la copertina mostra logo e schema della piscina.
    immagini: [],
    inEvidenza: true,
  },
  {
    slug: "alfano",
    nome: "Alfano Cars",
    settore: "Automotive",
    url: "https://alfano.vercel.app",
    piattaforma: "Sito su misura (Vercel)",
    servizi: ["Web Design & Development"],
    // TODO_DESCRIZIONE: testo proposto da FARGE dopo aver visto il sito live, da confermare
    descrizioneBreve:
      "Vendita e noleggio auto a Pompei dal 1985: un sito su misura per showroom, stock e servizi.",
    // TODO_DESCRIZIONE: testo proposto, da confermare
    descrizione: [
      "Alfano Cars si occupa di vendita e noleggio auto a Pompei dal 1985: noleggio con o senza conducente, auto per matrimoni ed eventi, furgoni, moto ed e-bike.",
      "Abbiamo progettato un sito su misura dal tono premium: un'intro animata, lo showroom con le vetture in sede, la sezione stock e i servizi, con la richiesta di informazioni sempre a portata di mano.",
    ],
    // TODO_DESCRIZIONE: obiettivo proposto, da confermare
    obiettivo:
      "Presentare showroom e servizi con un'immagine all'altezza delle vetture, e trasformare le visite in richieste di informazioni.",
    // TODO_DESCRIZIONE: elenco proposto in base al sito live, da confermare
    cosaAbbiamoFatto: [
      "Design e sviluppo su misura",
      "Intro animata",
      "Showroom con le vetture in sede",
      "Sezione stock auto",
      "Pagina servizi: vendita, noleggio, cerimonie",
      "Richiesta informazioni e contatti",
    ],
    immagini: screenshots("alfano", "Alfano Cars"),
    inEvidenza: true,
  },
];

export function hasUrl(work: Work): boolean {
  return /^https?:\/\//.test(work.url);
}

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

/** Lavori in evidenza prima, poi gli altri, nell'ordine del file. */
export function getWorksOrdered(): Work[] {
  return [...works].sort((a, b) => Number(b.inEvidenza) - Number(a.inEvidenza));
}
