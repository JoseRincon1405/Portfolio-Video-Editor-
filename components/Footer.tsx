import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <a href="#inicio" className="inline-flex items-baseline gap-1">
              <span className="font-mono text-base font-semibold tracking-[0.22em] text-white">
                ando
              </span>
              <span className="font-mono text-base font-semibold text-royal-400">
                .
              </span>
            </a>
            <p className="mt-2 text-xs text-zinc-600">
              José Rincón · Editor de video & estudiante de informática
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-500">
            <a href="#trabajos" className="transition-colors hover:text-white">
              Trabajos
            </a>
            <a href="#sobre-mi" className="transition-colors hover:text-white">
              Sobre mí
            </a>
            <a href="#contacto" className="transition-colors hover:text-white">
              Contacto
            </a>
            <a
              href="#inicio"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 transition-colors hover:border-royal-400/40 hover:text-royal-300"
            >
              <ArrowUp className="size-3" />
              Volver arriba
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/5 pt-6 text-[11px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 José Rincón (ando). Todos los derechos reservados.</p>
          <p>1% mejor cada día.</p>
        </div>
      </div>
    </footer>
  );
}
