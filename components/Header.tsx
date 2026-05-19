"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <span className="flex items-center gap-2.5 font-bold text-lg text-brand-text">
      <span
        aria-hidden="true"
        className="relative inline-block w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue"
      >
        <span className="absolute inset-1.5 rounded-full bg-white" />
        <span className="absolute inset-[10px] rounded-full bg-gradient-to-br from-brand-purple to-brand-blue" />
      </span>
      <span>Точка роста</span>
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            : "bg-transparent",
        )}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between"
          aria-label="Главная навигация"
        >
          <a
            href="#hero"
            aria-label="Точка роста — на главную"
            className="rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
          >
            <Logo />
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-brand-muted hover:text-brand-purple transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden -mr-2 p-2 text-brand-text rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
            onClick={() => setOpen(true)}
            aria-label="Открыть меню"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[60] md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Закрыть меню"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
          className={cn(
            "absolute inset-0 bg-black/30 transition-opacity duration-300 cursor-default",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <aside
          className={cn(
            "absolute top-0 right-0 bottom-0 w-[88%] max-w-sm bg-white shadow-2xl transition-transform duration-300 flex flex-col",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-black/5">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="-mr-2 p-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              aria-label="Закрыть меню"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <ul className="p-4 flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="block py-4 px-4 text-xl font-semibold text-brand-text rounded-2xl hover:bg-brand-bg transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}
