import { m } from "framer-motion";
import { BriefcaseBusiness, Code2, Lightbulb, Workflow } from "lucide-react";
import SectionTitle from "./SectionTitle";

const blocks = [
  {
    icon: Code2,
    title: "Desarrollo robusto",
    text: "Construyo frontends y flujos de producto con foco en claridad, performance y mantenibilidad.",
  },
  {
    icon: Workflow,
    title: "Analisis funcional",
    text: "Transformo requerimientos difusos en historias accionables, reglas claras y decisiones tecnicas concretas.",
  },
  {
    icon: Lightbulb,
    title: "Product thinking",
    text: "Priorizo impacto real: validacion temprana, iteraciones cortas y roadmap conectado a negocio.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Mentalidad emprendedora",
    text: "Trabajo con ownership, orientado a resultados y a construir ventajas competitivas sostenibles.",
  },
];

function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Sobre mi"
          title="Tecnologia, analisis de sistemas y negocio en una misma capa de trabajo."
          description="Mi perfil combina ejecucion tecnica con pensamiento estrategico para crear productos digitales que realmente se usan, escalan y aportan valor."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <m.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-white/55 bg-white/55 p-8 shadow-panel backdrop-blur-2xl lg:p-10"
          >
            <p className="text-lg leading-8 text-slate">
              Me especializo en convertir ideas de negocio en experiencias digitales
              claras. Trabajo desde discovery y definicion funcional hasta implementacion
              y mejora continua, cuidando experiencia de usuario, arquitectura y
              viabilidad operativa.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate">
              No solo escribo codigo: conecto personas, procesos y producto para que la
              tecnologia sea una herramienta de crecimiento, no un costo de complejidad.
            </p>
          </m.article>

          <div className="grid gap-5 sm:grid-cols-2">
            {blocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <m.article
                  key={block.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-[1.6rem] border border-white/50 bg-gradient-to-br from-white/70 to-white/40 p-6 shadow-sm backdrop-blur-xl"
                >
                  <div className="mb-4 inline-flex rounded-xl border border-white/60 bg-white/70 p-2.5 text-iris-600">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {block.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate">{block.text}</p>
                </m.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
