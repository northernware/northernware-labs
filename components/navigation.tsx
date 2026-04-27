"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BrandLockup } from "@/components/brand";
import type { NavItem } from "@/lib/site-data";
import { ThemeToggle } from "@/components/theme-toggle";

type NavigationProps = {
  items: NavItem[];
};

export function Navigation({ items }: NavigationProps) {
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentHash = window.location.hash;

    if (items.some((item) => item.href === currentHash)) {
      setActiveId(currentHash);
      return;
    }

    setActiveId("");
  }, [items]);

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveId(`#${visibleEntries[0].target.id}`);
        } else if (window.scrollY < 120) {
          setActiveId("");
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    setMenuOpen(false);
  }, [activeId]);

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      setActiveId(items.some((item) => item.href === currentHash) ? currentHash : "");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [items]);

  const navItemClass = (isActive: boolean) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-accent-500 text-slate-950 shadow-[0_10px_24px_rgba(34,197,94,0.2)] dark:bg-accent-500 dark:text-slate-950"
        : "text-body hover:bg-accent-50 hover:text-accent-800 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
    }`;

  const mobileNavItemClass = (isActive: boolean) =>
    `rounded-2xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-accent-500 text-slate-950 shadow-[0_10px_24px_rgba(34,197,94,0.2)] dark:bg-accent-500 dark:text-slate-950"
        : "text-body hover:bg-accent-50 hover:text-accent-800 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
    }`;

  function handleNavClick(href: string) {
    setActiveId(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/82">
      <div className="container-shell py-3">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <Link href="#top" className="flex min-w-0 flex-1 items-center gap-3 pr-2">
            <BrandLockup
              className="min-w-0"
              markClassName="h-10 w-10"
              nameClassName="truncate text-[0.78rem] sm:text-sm"
              taglineClassName="hidden sm:block"
            />
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/90 p-1 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none xl:flex">
            {items.map((item) => {
              const isActive = activeId === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navItemClass(isActive)}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link href="#quote" className="btn-primary hidden xl:inline-flex">
              Request a Quote
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-ink shadow-sm transition hover:border-accent-200 hover:bg-accent-50 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100 dark:shadow-none dark:hover:border-slate-700 dark:hover:bg-slate-800 xl:hidden"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="mt-4 grid gap-2 rounded-[1.5rem] border border-slate-200 bg-white/95 p-3 shadow-card dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-none xl:hidden">
            <Link href="#quote" className="btn-primary w-full" onClick={() => setMenuOpen(false)}>
              Request a Quote
            </Link>
            {items.map((item) => {
              const isActive = activeId === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={mobileNavItemClass(isActive)}
                  onClick={() => {
                    handleNavClick(item.href);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
