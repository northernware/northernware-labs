import Link from "next/link";

import { BrandLockup } from "@/components/brand";
import { FloatingQuoteButton } from "@/components/floating-quote-button";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckIcon,
  ClockIcon,
  CubeIcon,
  GearIcon,
  LayersIcon,
  MailIcon,
  MessageIcon,
  PhoneIcon,
  PinIcon,
  SparkIcon,
  TargetIcon,
  TruckIcon,
  WrenchIcon,
} from "@/components/icons";
import { Navigation } from "@/components/navigation";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import {
  contactDetails,
  footerLinks,
  galleryItems,
  heroStats,
  legalLinks,
  materialGuides,
  navigationItems,
  pricingItems,
  processSteps,
  sameAsLinks,
  serviceItems,
  trustBadges,
} from "@/lib/site-data";

const serviceIcons = [CubeIcon, WrenchIcon, SparkIcon, LayersIcon];
const processIcons = [MessageIcon, CheckIcon, ClockIcon, TruckIcon];
const contactIcons = [MessageIcon, MailIcon, PhoneIcon, PinIcon];
const heroFeatureItems = [
  {
    title: "Precise",
    description: "Every layer. Every detail.",
    Icon: TargetIcon,
  },
  {
    title: "Custom",
    description: "Made for your exact needs.",
    Icon: CubeIcon,
  },
  {
    title: "Fast Turnaround",
    description: "Quick prints. On time.",
    Icon: BoltIcon,
  },
  {
    title: "Endless Possibilities",
    description: "From prototypes to practical parts.",
    Icon: GearIcon,
  },
];

export default function Home() {
  return (
    <main id="top" className="bg-canvas">
      <Navigation items={navigationItems} />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.14),_transparent_18%),linear-gradient(180deg,_#f7fbf8_0%,_#edf7f1_100%)] pb-16 pt-8 text-ink dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.2),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.24),_transparent_18%),linear-gradient(135deg,_#04101f_0%,_#071426_44%,_#020814_100%)] dark:text-white sm:pb-20 sm:pt-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_24%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.1),_transparent_26%)]" />
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-hero-grid bg-[size:36px_36px] opacity-[0.12] dark:opacity-[0.08]" />
        <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-500/12" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent-500/12 blur-3xl dark:bg-accent-500/20" />

        <div className="pointer-events-none absolute right-[-8rem] top-24 hidden lg:block">
          <div className="relative h-[32rem] w-[28rem]">
            <div className="absolute inset-0">
              <svg viewBox="0 0 320 420" className="h-full w-full text-accent-500/10">
                <path
                  d="M192 18 303 82l16 118-74 163-126 39-77-94 53-158 97-132Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M220 54 297 98l12 91-58 135-104 30-63-76 43-129 93-95Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M252 98 306 129l8 68-43 101-80 24-48-59 33-96 76-69Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="container-shell relative">
          <div className="max-w-6xl">
            <span className="inline-flex rounded-full border border-accent-500/30 bg-white/92 px-5 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-accent-800 shadow-[0_10px_24px_rgba(15,23,42,0.06)] backdrop-blur dark:border-accent-500/40 dark:bg-slate-950/55 dark:text-accent-200 dark:shadow-[0_12px_32px_rgba(2,8,20,0.32)]">
              3D Solutions. Limitless Possibilities.
            </span>

            <div className="mt-8 max-w-5xl">
              <h1 className="max-w-5xl text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.06em] text-slate-950 dark:text-white sm:text-[4.6rem] lg:text-[6.8rem]">
                We turn <span className="text-accent-400">ideas</span>
                <br />
                into real, <span className="text-accent-400">functional</span>
                <br />
                3D solutions<span className="text-accent-400">.</span>
              </h1>

              <div className="mt-8 h-1 w-36 rounded-full bg-accent-500" />

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300 sm:text-[1.75rem] sm:leading-[1.35]">
                Custom 3D prints for parts, prototypes, and personal or industrial
                needs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#quote"
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-accent-400 sm:w-auto"
                >
                  Request a Quote
                </Link>
                <Link
                  href="#services"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent-300 hover:bg-accent-50 sm:w-auto dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/82 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    <CheckIcon className="h-4 w-4 text-accent-600 dark:text-accent-300" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 border-t border-slate-200/80 pt-8 dark:border-white/10 sm:mt-16 lg:grid-cols-4 lg:gap-0 lg:pt-10">
            {heroFeatureItems.map((item, index) => {
              const Icon = item.Icon;

              return (
                <div
                  key={item.title}
                  className={`flex gap-4 lg:px-6 ${index > 0 ? "lg:border-l lg:border-slate-200/80 dark:lg:border-white/12" : ""}`}
                >
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-500/20 bg-white/82 text-accent-500 shadow-sm dark:bg-accent-500/8 dark:text-accent-400 dark:shadow-none">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent-800 dark:text-accent-200">
                      {item.title}
                    </p>
                    <p className="mt-2 max-w-[15rem] text-base leading-7 text-slate-700 dark:text-slate-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 min-[520px]:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-200/80 bg-white/88 p-5 shadow-card backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none"
              >
                <p className="text-2xl font-semibold text-slate-950 dark:text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-24">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="Services"
            title="A focused set of services"
            description="Everything is framed around the most common requests, without making the page feel like a catalog."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {serviceItems.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <article
                  key={service.title}
                  className={`card-panel border-slate-200/80 bg-gradient-to-br ${service.accent} ${service.darkAccent} hover:-translate-y-1 hover:shadow-soft dark:border-slate-800/90`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.iconClass}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${service.badgeClass}`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.bullets.slice(0, 2).map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-800 dark:text-slate-100"
                      >
                        <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent-600 dark:text-accent-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="bg-[linear-gradient(180deg,_#f1f8f4_0%,_#f8fcfa_100%)] py-20 dark:bg-[linear-gradient(180deg,_rgba(7,20,38,0.98)_0%,_rgba(4,14,31,1)_100%)] sm:py-24"
      >
        <div className="container-shell grid gap-10 xl:grid-cols-[0.95fr,1.05fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Pricing"
              title="Simple pricing, then a proper quote"
              description="Enough to set expectations, without over-explaining every edge case."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {pricingItems.map((item) => (
                <div key={item.title} className="card-panel hover:-translate-y-1 hover:shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-body">
                    {item.title}
                  </p>
                  <p className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                    {item.range}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none sm:p-8">
              <div className="flex flex-wrap gap-3 text-sm text-body">
                {[
                  "Final price depends on size, print time, and material.",
                  "Rush jobs are possible when schedule allows.",
                  "Payment timing is confirmed with the quote.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-slate-200 bg-mist px-4 py-2 dark:border-slate-800 dark:bg-slate-950/60"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,_#081426_0%,_#0f172a_52%,_#0b1f3a_100%)] text-white shadow-soft dark:shadow-none">
            <div className="border-b border-white/10 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-200">
                Process
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                A smoother order flow
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200">
                Short and clear from inquiry to handoff.
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:p-8">
              {processSteps.map((step, index) => {
                const Icon = processIcons[index];

                return (
                  <div
                    key={step.title}
                    className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:grid-cols-[auto,1fr]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-200">
                          Step {index + 1}
                        </span>
                        <span className="h-px flex-1 bg-white/10" />
                      </div>
                      <h4 className="mt-3 text-lg font-semibold">{step.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-200">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 sm:py-24">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="Materials and Examples"
            title="Practical material choices with a few visual references"
            description="Helpful enough to guide first-time buyers, but still light on the page."
          />

          <div className="grid gap-6 xl:grid-cols-[0.95fr,1.05fr]">
            <div className="grid gap-4">
              {materialGuides.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
                      Common pick
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-body">
                    Best for
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink">{item.bestFor}</p>
                  <p className="mt-4 text-sm leading-6 text-body">{item.note}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {galleryItems.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none"
                >
                  <div className={`relative h-52 bg-gradient-to-br ${item.palette}`}>
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-body">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="quote"
        className="bg-[linear-gradient(180deg,_#f1f8f4_0%,_#f8fcfa_100%)] py-20 dark:bg-[linear-gradient(180deg,_rgba(7,20,38,0.98)_0%,_rgba(4,14,31,1)_100%)] sm:py-24"
      >
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="Quote Request"
            title="Share the essentials and we&apos;ll take it from there"
            description="The form stays detailed where it matters, but the page around it does not get in the way."
          />
          <QuoteForm />
        </div>
      </section>

      <section
        id="contact"
        className="overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_30%),linear-gradient(135deg,_#081426_0%,_#0f172a_46%,_#0b1f3a_100%)] py-20 text-white sm:py-24"
      >
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-200">
                Contact
              </span>
              <h2 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Reach out with a file, a sketch, or a rough idea.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                If you&apos;re not sure what to prepare yet, that&apos;s fine. We can start
                with a message and sort out the details from there.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {sameAsLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactDetails.map((item, index) => {
                const Icon = contactIcons[index];
                const inner = (
                  <>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent-200">
                      {item.title}
                    </p>
                    <p className="mt-2 text-lg font-semibold">{item.value}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">{item.detail}</p>
                  </>
                );

                return item.href ? (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
                  >
                    {inner}
                  </Link>
                ) : (
                  <article
                    key={item.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
                  >
                    {inner}
                  </article>
                );
              })}
            </div>
          </div>

          <footer className="mt-14 border-t border-white/10 pt-8 text-sm text-slate-300">
            <div className="grid gap-8 lg:grid-cols-[1fr,auto,auto]">
              <div>
                <BrandLockup
                  markClassName="h-11 w-11 text-accent-400"
                  nameClassName="text-sm text-white"
                  taglineClassName="text-accent-200"
                />
                <p className="mt-2 max-w-xl leading-6 text-slate-300">
                  Local 3D solutions for practical parts, custom designs, prototypes,
                  and short-run orders across Metro Manila.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">Explore</p>
                <nav className="mt-3 flex flex-col gap-3">
                  {footerLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <p className="font-semibold text-white">Policies</p>
                <nav className="mt-3 flex flex-col gap-3">
                  {legalLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </footer>
        </div>
      </section>

      <FloatingQuoteButton />
    </main>
  );
}
