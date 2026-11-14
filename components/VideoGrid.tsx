"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Play,
  RectangleHorizontal,
  RectangleVertical,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";
import VideoModal from "@/components/VideoModal";
import type { Project } from "@/data/projects";

const FILTERS = [
  { value: "all", label: "Todos" },
  { value: "long", label: "YouTube Long-form" },
  { value: "short", label: "Shorts / Reels" },
] as const;

type FilterValue = (typeof FILTERS)[number]["value"];

const isVertical = (project: Project) =>
  project.orientation === "vertical" || project.format === "Short-form";

export default function VideoGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const counts = useMemo(
    () => ({
      all: projects.length,
      long: projects.filter((project) => project.format === "Long-form")
        .length,
      short: projects.filter((project) => project.format === "Short-form")
        .length,
    }),
    [projects],
  );

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter((project) =>
      activeFilter === "long"
        ? project.format === "Long-form"
        : project.format === "Short-form",
    );
  }, [activeFilter, projects]);

  return (
    <section
      id="trabajos"
      className="relative scroll-mt-24 border-t border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-royal-300">
              Trabajos · 2024—2026
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ediciones seleccionadas
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
            YouTube long-form, Shorts y Reels. Piezas pensadas para retener,
            explicar y verse nativas en cualquier pantalla.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          <SlidersHorizontal className="mr-1 size-4 text-zinc-600" />
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-all ${
                  isActive
                    ? "border-royal-400 bg-royal-500 text-white shadow-[0_0_30px_-10px] shadow-royal-500/80"
                    : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/25 hover:text-white"
                }`}
              >
                {filter.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[9px] ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "bg-white/5 text-zinc-500"
                  }`}
                >
                  {counts[filter.value]}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-zinc-500">
            No hay proyectos en este formato todavía.
          </p>
        )}
      </div>

      {selected && (
        <VideoModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const vertical = isVertical(project);
  const [imageError, setImageError] = useState(false);
  const isInstagram = project.platform === "instagram";
  const showInstagramFallback =
    isInstagram && (!project.thumbnail || imageError);

  return (
    <button
      type="button"
      onClick={onOpen}
      style={{ animationDelay: `${index * 60}ms` }}
      className={`group flex w-full animate-fade-up flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left backdrop-blur-xl outline-none transition-all duration-500 hover:-translate-y-1 hover:border-royal-400/40 hover:bg-white/[0.05] hover:shadow-[0_28px_80px_-30px] hover:shadow-royal-500/40 focus-visible:ring-2 focus-visible:ring-royal-400 ${
        vertical
          ? "mx-auto max-w-[320px] self-start sm:mx-0 sm:max-w-none"
          : "self-start"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          vertical ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        {showInstagramFallback ? (
          <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.35),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(29,78,216,0.22),transparent_50%),linear-gradient(160deg,#0c0c10_0%,#09090b_55%,#101827_100%)]">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-25" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
              <span className="flex size-16 items-center justify-center rounded-full border border-royal-400/40 bg-royal-500/20 text-white shadow-[0_0_50px_-10px] shadow-royal-500/70 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                <Play className="ml-1 size-6 fill-current" />
              </span>
              <span className="rounded-full border border-royal-400/25 bg-royal-500/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-royal-200 backdrop-blur">
                Instagram Reel
              </span>
            </div>
          </div>
        ) : (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-royal-500/0 transition-colors duration-500 group-hover:bg-royal-500/10" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-4">
          <span className="max-w-[68%] truncate rounded-full border border-white/15 bg-black/55 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-200 backdrop-blur">
            {project.client}
          </span>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-200 backdrop-blur">
            {vertical ? (
              <RectangleVertical className="size-3 text-royal-300" />
            ) : (
              <RectangleHorizontal className="size-3 text-royal-300" />
            )}
            {vertical ? "9:16" : "16:9"}
          </span>
        </div>

        {!showInstagramFallback && (
          <span className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
            <Play className="ml-0.5 size-5 fill-current" />
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
          {project.duration && (
            <span className="rounded-md border border-white/10 bg-black/70 px-2 py-1 font-mono text-[10px] font-medium text-white backdrop-blur">
              {project.duration}
            </span>
          )}
          {project.metrics && (
            <span className="inline-flex items-center gap-1 rounded-full border border-royal-400/30 bg-royal-500/20 px-2.5 py-1 font-mono text-[10px] font-semibold text-royal-200 backdrop-blur">
              <TrendingUp className="size-3" />
              {project.metrics}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-royal-300">
          {project.category}
        </p>
        <h3 className="mt-2 line-clamp-2 text-base leading-snug font-medium text-white transition-colors group-hover:text-royal-200 sm:text-lg">
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-zinc-400"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/5 pt-4">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
            {vertical ? (
              <RectangleVertical className="size-3" />
            ) : (
              <RectangleHorizontal className="size-3" />
            )}
            {project.format}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 transition-colors group-hover:text-royal-300">
            Ver video
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </button>
  );
}
