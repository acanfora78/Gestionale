import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { works } from "@/data/works";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...works.map((w) => ({
      url: `${site.url}/lavori/${w.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
