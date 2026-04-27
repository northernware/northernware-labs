import { businessDetails } from "@/lib/business-details";

export const siteConfig = {
  name: "Northernware",
  legalName: "Northernware 3D Solutions",
  title:
    "Northernware | 3D Solutions, Custom Parts, and Precision Printing in Metro Manila",
  description:
    "Northernware delivers local 3D solutions in Metro Manila for custom parts, prototypes, branded displays, replacement pieces, and multi-color prints.",
  keywords: [
    "3D printing service Metro Manila",
    "3D printing Quezon City",
    "custom 3D printed parts Philippines",
    "local 3D printing Manila",
    "ready-made model printing",
    "custom design and print",
    "multi-color 3D printing",
    "personalized 3D printed gifts",
    "3D printing replacement parts",
    "3D printing service Pasig",
    "3D printing service Marikina",
  ],
  serviceAreas: [...businessDetails.serviceAreas],
  email: businessDetails.email,
  phone: businessDetails.phone,
  sameAs: businessDetails.socialLinks.map((item) => item.href),
  ogImagePath: "/opengraph-image",
  twitterImagePath: "/twitter-image",
  themeColorLight: "#F7FBF8",
  themeColorDark: "#040E1F",
};

export function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  try {
    return new URL(rawUrl);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export function getBusinessSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteUrl.origin,
    logo: `${siteUrl.origin}/favicon.svg`,
    image: `${siteUrl.origin}${siteConfig.ogImagePath}`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: siteConfig.sameAs,
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Metro Manila",
      addressCountry: "PH",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: siteConfig.serviceAreas,
        availableLanguage: ["en", "fil"],
      },
    ],
    serviceType: [
      "3D solutions",
      "3D printing service",
      "custom 3D printed parts",
      "ready-made model printing",
      "multi-color 3D printing",
      "personalized 3D printed items",
    ],
  };
}
