"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const EMAIL = "josearincon.91@gmail.com";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-400/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-royal-300">
              Contacto
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Hablemos de tu próximo video.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-400">
              Cuéntame el objetivo, el formato y la fecha de entrega. Respondo
              en 24–48 h con una propuesta directa. Sin reuniones innecesarias.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-all hover:border-royal-400/30 hover:bg-white/[0.04]"
              >
                <span className="flex items-center gap-3 text-sm text-zinc-200">
                  <Mail className="size-4 text-royal-400" />
                  {EMAIL}
                </span>
                <ArrowUpRight className="size-4 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-royal-400" />
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-zinc-400">
                <MapPin className="size-4 text-royal-400" />
                Trabajo remoto · Sin límite geográfico
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex size-16 items-center justify-center rounded-full border border-royal-400/30 bg-royal-400/10 text-royal-300">
                  <Check className="size-7" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Mensaje enviado
                </h3>
                <p className="mt-2 max-w-sm text-sm text-zinc-400">
                  Recibido. Te responderé con los siguientes pasos y una
                  estimación clara.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Nombre"
                    name="name"
                    placeholder="Tu nombre"
                    autoComplete="name"
                  />
                  <Field
                    label="Correo"
                    name="email"
                    type="email"
                    placeholder="tu@correo.com"
                    autoComplete="email"
                  />
                </div>

                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    Mensaje
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Objetivo, formato, duración y fecha de entrega..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-royal-400/60 focus:ring-1 focus:ring-royal-400/40"
                  />
                </label>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-royal-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-royal-300 hover:shadow-[0_0_40px_-8px] hover:shadow-royal-400/60"
                >
                  Enviar mensaje
                  <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <p className="text-center text-xs text-zinc-600">
                  Formulario base · conecta Formspree o Resend para recibirlo.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-royal-400/60 focus:ring-1 focus:ring-royal-400/40"
      />
    </label>
  );
}

