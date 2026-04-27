import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { fileHandlingPolicy } from "@/lib/policies";

export const metadata: Metadata = {
  title: fileHandlingPolicy.title,
  description: fileHandlingPolicy.description,
  alternates: { canonical: fileHandlingPolicy.path },
};

export default function FileHandlingPolicyPage() {
  return <LegalPage document={fileHandlingPolicy} />;
}
