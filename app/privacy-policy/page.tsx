import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { privacyPolicy } from "@/lib/policies";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: { canonical: privacyPolicy.path },
};

export default function PrivacyPolicyPage() {
  return <LegalPage document={privacyPolicy} />;
}
