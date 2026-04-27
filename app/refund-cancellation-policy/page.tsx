import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { refundPolicy } from "@/lib/policies";

export const metadata: Metadata = {
  title: refundPolicy.title,
  description: refundPolicy.description,
  alternates: { canonical: refundPolicy.path },
};

export default function RefundCancellationPolicyPage() {
  return <LegalPage document={refundPolicy} />;
}
