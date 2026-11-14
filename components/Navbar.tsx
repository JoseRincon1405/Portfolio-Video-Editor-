"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Trabajos", href: "#trabajos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="group flex items-baseline gap-1"
          aria-label="José Rincón (ando) — Inicio"
        >
          <span className="font-mono text-lg font-semibold tracking-[0.22em] text-white">
            ando
          </span>
          <span className="font-mono text-lg font-semibold text-royal-400 transition-transform duration-300 group-hover:scale-125">
            .
          </span>
          <span className="ml-2 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 sm:block">
            video editor
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-royal-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-royal-400 px-5 py-2.5 text-sm font-medium text-ink-950 transition-all hover:bg-royal-300 hover:shadow-[0_0_30px_-5px] hover:shadow-royal-400/50"
          >
            Hablemos
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors hover:border-white/25 hover:text-white md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-royal-400 px-5 py-3 text-sm font-medium text-ink-950"
          >
            Hablemos
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
