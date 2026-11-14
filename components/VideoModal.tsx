"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Clock,
  RectangleHorizontal,
  RectangleVertical,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import type { Project } from "@/data/projects";

function getInstagramEmbedUrl(url: string) {
  const match = url.match(/instagram\.com\/(reel|p|tv)\/([^/?#]+)/);

  if (!match) return url;

  return `https://www.instagram.com/${match[1]}/${match[2]}/embed`;
}

export default function VideoModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const vertical =
    project.orientation === "vertical" || project.format === "Short-form";
  const isInstagram =
    project.platform === "instagram" ||
    project.videoUrl.includes("instagram.com");
  const embedUrl = isInstagram
    ? getInstagramEmbedUrl(project.videoUrl)
    : project.videoUrl;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
    >
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink-950/90 backdrop-blur-md"
      />

      <div
        className={`relative z-10 max-h-[92vh] w-full animate-modal-in overflow-y-auto rounded-2xl border border-white/10 bg-ink-950/90 shadow-2xl shadow-black/80 backdrop-blur-2xl sm:rounded-3xl ${
          vertical ? "max-w-2xl" : "max-w-4xl"
        }`}
      >
        <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b border-white/5 bg-ink-950/90 px-5 py-4 backdrop-blur-xl sm:px-7">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-royal-300">
                {project.category}
              </p>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                {vertical ? (
                  <RectangleVertical className="size-2.5" />
                ) : (
                  <RectangleHorizontal className="size-2.5" />
                )}
                {project.format}
              </span>
              {project.metrics && (
                <span className="inline-flex items-center gap-1 rounded-full border border-royal-400/25 bg-royal-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-royal-200">
                  <TrendingUp className="size-2.5" />
                  {project.metrics}
                </span>
              )}
            </div>
            <h3
              id={`modal-title-${project.id}`}
              className="mt-1.5 text-lg font-semibold text-white sm:text-xl"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Cerrar video"
          >
            <X className="size-4" />
          </button>
        </div>

        <div
          className={
            vertical
              ? "flex justify-center bg-black/50 px-4 py-5 sm:px-6"
              : "bg-black"
          }
        >
          <div
            className={
              vertical
                ? "relative aspect-[9/16] w-full max-w-[calc(70vh*9/16)] overflow-hidden rounded-xl border border-white/10 bg-black"
                : "relative aspect-video w-full overflow-hidden bg-black"
            }
          >
            {isInstagram ? (
              <iframe
                src={embedUrl}
                title={project.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                allowTransparency
                scrolling="no"
                loading="lazy"
              />
            ) : project.platform === "youtube" ? (
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <video
                src={project.videoUrl}
                controls
                autoPlay
                className="absolute inset-0 h-full w-full object-contain"
              />
            )}
          </div>
        </div>

        <div className="grid gap-7 px-5 py-6 sm:grid-cols-[1.4fr_1fr] sm:px-7 sm:py-8">
          <div>
            <h4 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              <Sparkles className="size-3.5 text-royal-400" />
              Contexto del trabajo
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              {project.description}
            </p>

            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                Herramientas
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-royal-400/20 bg-royal-500/5 px-2.5 py-1 font-mono text-[10px] text-royal-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Meta label="Cliente">{project.client}</Meta>
            <Meta label="Formato">
              <span className="inline-flex items-center gap-1.5">
                {vertical ? (
                  <RectangleVertical className="size-3.5 text-royal-400" />
                ) : (
                  <RectangleHorizontal className="size-3.5 text-royal-400" />
                )}
                {project.format} · {vertical ? "9:16" : "16:9"}
              </span>
            </Meta>
            {project.duration && (
              <Meta label="Duración">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5 text-zinc-500" />
                  {project.duration}
                </span>
              </Meta>
            )}
            {project.metrics && (
              <Meta label="Métrica destacada">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-royal-400/25 bg-royal-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-royal-200">
                  <TrendingUp className="size-3.5" />
                  {project.metrics}
                </span>
              </Meta>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function Meta({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </p>
      <p className="mt-1 text-sm text-zinc-200">{children}</p>
    </div>
  );
}
