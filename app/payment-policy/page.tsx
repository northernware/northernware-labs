import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { paymentPolicy } from "@/lib/policies";

export const metadata: Metadata = {
  title: paymentPolicy.title,
  description: paymentPolicy.description,
  alternates: { canonical: paymentPolicy.path },
};

export default function PaymentPolicyPage() {
  return <LegalPage document={paymentPolicy} />;
}
