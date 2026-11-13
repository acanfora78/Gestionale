import type { Metadata } from "next";

/**
 * Metadata di una pagina con canonical e og:url propri.
 * Gli URL relativi diventano assoluti su site.url (https://fargestudio.it) grazie a metadataBase nel layout.
 * Next sostituisce l'intero oggetto openGraph del layout, quindi va ripetuto qui.
 */
export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "it_IT",
      siteName: "FΛRGE STUDIO™",
      url: path,
      title: `${title} — FΛRGE STUDIO™`,
      description,
    },
  };
}
