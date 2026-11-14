"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Film, Play } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import type { Project } from "@/data/projects";

export default function HeroReel({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        id="showreel"
        className="group relative mx-auto max-w-md scroll-mt-28 lg:max-w-none"
      >
        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-royal-400/20 via-transparent to-royal-600/10 opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative block w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900 text-left shadow-2xl shadow-black/60 outline-none transition-all duration-500 hover:border-royal-400/40 focus-visible:ring-2 focus-visible:ring-royal-400"
          aria-label={`Reproducir ${project.title}`}
        >
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover opacity-80 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-royal-400/10 via-transparent to-transparent" />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur">
                <span className="size-1.5 animate-pulse rounded-full bg-royal-400" />
                Destacado · {project.format}
              </span>
              <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-zinc-300 backdrop-blur">
                {project.orientation === "vertical"
                  ? "9:16 · Vertical"
                  : "16:9 · Horizontal"}
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="relative flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-royal-400/60 group-hover:bg-royal-400 group-hover:text-ink-950">
                <span className="absolute inset-0 animate-ping rounded-full border border-white/20 opacity-30" />
                <Play className="ml-1 size-7 fill-current" />
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-royal-300">
                {project.category}
              </p>
              <div className="mt-1 flex items-end justify-between gap-4">
                <h2 className="text-xl font-medium text-white">
                  {project.title}
                </h2>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                  <Clock className="size-3.5" />
                  {project.duration}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </button>

        <div className="mt-4 flex items-center justify-between px-1">
          <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            <Film className="size-3.5 text-royal-400" />
            Proyecto destacado
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            01 / 06
          </p>
        </div>
      </div>

      {open && (
        <VideoModal project={project} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
