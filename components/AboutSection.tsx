import Image from "next/image";
import { Check, Code2, Scissors, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Scissors,
    title: "Ritmo y retención",
    text: "Corto para sostener la atención: estructura, hooks y transiciones con intención.",
  },
  {
    icon: Sparkles,
    title: "Motion graphics",
    text: "After Effects para gráficos, subtítulos y VFX limpios que suman sin distraer.",
  },
  {
    icon: Code2,
    title: "Estructura técnica",
    text: "Organización de proyectos, assets y versiones. Menos caos, más margen para iterar.",
  },
];

const tools = ["Premiere Pro", "After Effects", "Photoshop"];

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/5 bg-ink-900/40 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-royal-400/5 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
                alt="Espacio de trabajo de edición y desarrollo"
                width={900}
                height={1100}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-[420px] w-full object-cover opacity-70 lg:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
              <div className="absolute right-6 bottom-6 left-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-royal-300">
                  Enfoque
                </p>
                <p className="mt-2 text-xl leading-snug font-medium text-white">
                  Sin ruido. Estructura, ritmo y retención.
                </p>
              </div>
            </div>

            <div className="absolute -right-3 -bottom-5 rounded-2xl border border-royal-400/20 bg-ink-900/90 px-5 py-4 backdrop-blur-xl sm:-right-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                Disponible para
              </p>
              <p className="mt-1 text-sm font-medium text-royal-200">
                Proyectos freelance
              </p>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-royal-300">
              Sobre mí
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Edito con estructura. Pienso en sistemas.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-400">
              Soy José Rincón, conocido como ando. Llevo 2 años editando para
              YouTube y redes sociales, con foco en retención, ritmo y claridad.
              Estudio informática, y eso se nota en cómo organizo cada proyecto:
              procesos limpios, decisiones justificadas y margen para escalar.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-500">
              Me muevo con comodidad entre tecnología, finanzas y cualquier
              nicho que exija comunicar rápido. Premiere Pro, After Effects y
              Photoshop son mi stack diario. No me encasillo: me adapto al
              objetivo y al formato.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-royal-400/25 hover:bg-white/[0.04]"
                >
                  <pillar.icon className="size-5 text-royal-400 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-3 text-sm font-medium text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                Stack principal
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300"
                  >
                    <Check className="size-3 text-royal-400" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
