import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { termsOfService } from "@/lib/policies";

export const metadata: Metadata = {
  title: termsOfService.title,
  description: termsOfService.description,
  alternates: { canonical: termsOfService.path },
};

export default function TermsOfServicePage() {
  return <LegalPage document={termsOfService} />;
}
