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
    // Numero WhatsApp in formato internazionale, solo cifre
    whatsapp: "393290211669",
    telefonoVisibile: "+39 329 021 1669",
    email: "morganacanfora5@gmail.com",
    // TODO: profilo Instagram (finché è vuoto il link non compare)
    instagram: "",
  },
  piva: "06367880652",
  /**
   * Dati legali, usati in footer, privacy, cookie e note legali.
   * Finché un campo è vuoto non viene mostrato.
   */
  legale: {
    // TODO: nome e cognome del titolare (ditta individuale) oppure ragione sociale completa
    titolare: "",
    // TODO: sede legale completa (via, numero, CAP, città, provincia)
    sede: "",
    // TODO: numero REA (es. "SA-123456") oppure "non iscritto"; vuoto = non mostrato
    rea: "",
    // TODO: PEC, se c'è
    pec: "",
    // TODO (solo società): numero REA e capitale sociale, es. "REA SA-123456 · Cap. soc. € 10.000 i.v."
    datiSocietari: "",
    // Data dell'ultimo aggiornamento dei testi legali
    aggiornamento: "13 novembre 2026",
    // Dove è ospitato il sito. TODO: aggiornare se cambia hosting
    hosting: "Vercel Inc. (USA)",
  },
} as const;

/** Intestazione legale: titolare (se indicato) oppure il nome dello studio. */
export function titolareLegale(): string {
  return site.legale.titolare ? `${site.legale.titolare} — ${site.nome}` : site.nome;
}

export const whatsappMessaggio =
  "Ciao FARGE STUDIO, vorrei una demo gratuita per la mia attività.";

export function whatsappLink(testo: string = whatsappMessaggio): string {
  return `https://wa.me/${site.contatti.whatsapp}?text=${encodeURIComponent(testo)}`;
}

export const emailOggetto = "Richiesta demo gratuita";

export function emailLink(testo: string = whatsappMessaggio, oggetto: string = emailOggetto): string {
  return `mailto:${site.contatti.email}?subject=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(testo)}`;
}

export const servizi = [
  {
    titolo: "Web Design & Development",
    testo: "Siti e web app veloci, su misura, pensati prima per il telefono. Niente template riciclati.",
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
