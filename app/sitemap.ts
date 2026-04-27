import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-config";
import { policyDocuments } from "@/lib/policies";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl.origin,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...policyDocuments.map((document) => ({
      url: `${siteUrl.origin}${document.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
