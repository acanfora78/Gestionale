/**
 * Dati generali dello studio. Tutti i segnaposto sono marcati TODO.
 */

export const site = {
  nome: "FARGE STUDIO",
  // TODO: dominio definitivo (usato per sitemap, canonical e Open Graph)
  url: "https://fargestudio.it",
  descrizione:
    "Digital agency creativa in Campania. Siti, e-commerce, branding e contenuti per attività locali. Prima vedi la demo, poi decidi.",
  luogo: "Campania · Napoli / Scafati",
  contatti: {
    // TODO: numero WhatsApp in formato internazionale, solo cifre (es. 393331234567)
    whatsapp: "390000000000",
    // TODO: numero da mostrare a schermo
    telefonoVisibile: "+39 000 000 0000",
    // TODO: email dello studio
    email: "info@fargestudio.it",
    // TODO: profilo Instagram
    instagram: "https://www.instagram.com/TODO_INSTAGRAM",
    instagramHandle: "@TODO_INSTAGRAM",
  },
  // TODO: Partita IVA
  piva: "TODO_PIVA",
  // TODO: ragione sociale / titolare (per la privacy policy)
  ragioneSociale: "TODO_RAGIONE_SOCIALE",
} as const;

export const whatsappMessaggio =
  "Ciao FARGE STUDIO, vorrei una demo gratuita per la mia attività.";

export function whatsappLink(testo: string = whatsappMessaggio): string {
  return `https://wa.me/${site.contatti.whatsapp}?text=${encodeURIComponent(testo)}`;
}

export const servizi = [
  {
    titolo: "Web Design & Development",
    testo: "Siti veloci, su misura, pensati prima per il telefono. Niente template riciclati.",
  },
  {
    titolo: "E-commerce Shopify",
    testo: "Negozi online pronti a vendere: catalogo, pagamenti, spedizioni. Gestibili in autonomia.",
  },
  {
    titolo: "Branding & Graphic Design",
    testo: "Logo, identità visiva e materiali coordinati, dal biglietto da visita all'insegna.",
  },
  {
    titolo: "Social Media Management",
    testo: "Piano editoriale, grafiche e pubblicazione costante. Un profilo che lavora per te.",
  },
  {
    titolo: "Video & Content",
    testo: "Riprese, montaggio e contenuti per sito e social, nel formato giusto per ogni canale.",
  },
  {
    titolo: "AI & Automazioni",
    testo: "Chatbot, risposte automatiche e flussi che ti tolgono lavoro ripetitivo.",
  },
] as const;

export const metodo = [
  {
    titolo: "Analizziamo",
    testo: "Studiamo la tua attività, il tuo settore e come ti cercano i clienti. Senza impegno.",
  },
  {
    titolo: "Realizziamo la demo",
    testo: "Costruiamo una demo reale del tuo nuovo sito, a nostre spese.",
  },
  {
    titolo: "Te la presentiamo",
    testo: "Te la mostriamo dal vivo o sul telefono. La tocchi con mano, non su un preventivo.",
  },
  {
    titolo: "Decidi tu",
    testo: "Ti convince? Partiamo. Non ti convince? Nessun costo, nessun obbligo.",
  },
] as const;
