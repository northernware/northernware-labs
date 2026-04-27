import Link from "next/link";

import { BrandLockup } from "@/components/brand";
import { ThemeToggle } from "@/components/theme-toggle";
import type { PolicyDocument } from "@/lib/policies";

type LegalPageProps = {
  document: PolicyDocument;
};

export function LegalPage({ document }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="container-shell flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <BrandLockup
              markClassName="h-10 w-10"
              nameClassName="text-[0.78rem] sm:text-sm"
              taglineClassName="text-[0.6rem] sm:text-[0.62rem]"
            />
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/#quote" className="btn-primary hidden sm:inline-flex">
              Request a Quote
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16 sm:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none sm:p-10">
              <p className="eyebrow">Policy</p>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {document.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-body">
                {document.description}
              </p>
              <p className="mt-3 text-sm text-body">Last updated: {document.lastUpdated}</p>

              <div className="mt-10 space-y-8">
                {document.sections.map((section) => (
                  <section
                    key={section.title}
                    className="rounded-[1.75rem] border border-slate-200/80 bg-mist/60 p-6 dark:border-slate-800 dark:bg-slate-950/50"
                  >
                    <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-body sm:text-base">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets?.length ? (
                      <ul className="mt-5 space-y-3 text-sm leading-7 text-ink">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-accent-500" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="mt-10 rounded-[1.75rem] bg-[linear-gradient(135deg,_#0f172a_0%,_#081426_60%,_#0b1f3a_100%)] p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-200">
                  Need clarification?
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">
                  If your order has unusual dimensions, licensing questions, or a special
                  fulfillment request, send the quote form with details and we&apos;ll review
                  the practical next step before production begins.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link href="/#quote" className="btn-primary w-full sm:w-auto">
                    Open Quote Form
                  </Link>
                  <Link href="/#contact" className="btn-secondary w-full sm:w-auto">
                    View Contact Options
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
