import { ArrowUpRight, Play, TrendingUp } from "lucide-react";
import HeroReel from "@/components/HeroReel";
import type { Project } from "@/data/projects";

const stats = [
  { value: "2", label: "Años editando" },
  { value: "3", label: "Herramientas core" },
  { value: "1%", label: "Mejora diaria" },
];

export default function Hero({
  featuredProject,
}: {
  featuredProject: Project;
}) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-royal-400/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-royal-600/10 blur-[100px]" />
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-royal-400/20 bg-royal-400/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-royal-300">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-royal-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-royal-400" />
            </span>
            Editor de video · Estudiante de informática
          </div>

          <h1 className="mt-7 text-5xl leading-[0.95] font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Editor de video y estudiante de informática. Transformo metraje en{" "}
            <span className="text-gradient-royal">piezas con alto poder de retención</span>.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Dos años editando para YouTube y redes sociales. Trabajo con
            Premiere Pro, After Effects y Photoshop. Sin ruido: estructura,
            ritmo y decisiones que sostienen la atención.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#trabajos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-royal-400 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-royal-300 hover:shadow-[0_0_40px_-8px] hover:shadow-royal-400/60"
            >
              Ver proyectos
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#showreel"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-zinc-200 backdrop-blur transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Play className="size-4 fill-current text-royal-400" />
              Ver showreel
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            <TrendingUp className="size-3.5 text-royal-400" />
            1% mejor cada día · trabajo en silencio
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/5 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <HeroReel project={featuredProject} />
        </div>
      </div>
    </section>
  );
}
