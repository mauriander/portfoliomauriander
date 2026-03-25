import { m } from "framer-motion";
import SectionTitle from "./SectionTitle";

const blocks = [
  "Desarrollo robusto",
  "Analisis funcional",
  "Product thinking",
  "Mentalidad emprendedora",
];

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-[1440px]">
        <SectionTitle
          eyebrow="Sobre mi"
          number="01"
          meta="Definition / Profile"
          title="Tecnologia, sistemas y negocio trabajando como una sola capa de decision."
          description="Mi perfil combina ejecucion tecnica con pensamiento estrategico para crear productos digitales claros, mantenibles y conectados con el uso real."
        />

        <div className="grid border-b border-ink lg:grid-cols-[1fr_1fr]">
          <m.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-ink px-6 py-12 lg:border-b-0 lg:border-r lg:px-10 lg:py-16"
          >
            <h3 className="font-display text-4xl leading-[1] tracking-[-0.03em] text-ink sm:text-5xl">
              Construyo productos con foco en <em className="text-slate">claridad</em>,
              velocidad y sostenibilidad.
            </h3>

            <div className="mt-8 border-l-2 border-ink pl-5">
              <p className="font-mono text-[11px] uppercase leading-[1.95] tracking-[0.08em] text-slate">
                Me especializo en convertir ideas de negocio en experiencias digitales
                concretas. Trabajo desde discovery y definicion funcional hasta
                implementacion y mejora continua, cuidando experiencia, arquitectura y
                viabilidad operativa.
              </p>
            </div>

            <div className="mt-10 grid border-y border-ink sm:grid-cols-2">
              {[
                ["05+", "productos y casos ejecutados"],
                ["360", "vision de producto a release"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={`px-0 py-5 ${index === 0 ? "border-b border-ink sm:border-b-0 sm:pr-6" : "sm:border-l sm:pl-6"}`}
                >
                  <p className="text-5xl font-semibold leading-none tracking-[-0.04em] text-ink">
                    {value}
                  </p>
                  <p className="mono mt-2 text-[9px] text-slate">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {blocks.map((block) => (
                <span
                  key={block}
                  className="mono border border-ink px-3 py-2 text-[9px] text-slate transition hover:bg-ink hover:text-mist"
                >
                  {block}
                </span>
              ))}
            </div>
          </m.article>

          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b border-ink px-6 py-5 lg:px-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
                Profile timeline
              </p>
              <p className="mono text-[9px] text-slate">04 nodes</p>
            </div>

            <div className="flex-1">
              {[
                [
                  "01",
                  "Discovery to execution",
                  "Conecto requerimientos difusos con backlog claro, decisiones tecnicas y entrega concreta.",
                ],
                [
                  "02",
                  "Pensamiento sistemico",
                  "No solo escribo codigo: ordeno procesos, contexto de negocio y experiencia de usuario.",
                ],
                [
                  "03",
                  "Iteracion con criterio",
                  "Priorizo impacto real, mantenibilidad y una velocidad que no comprometa la calidad.",
                ],
                [
                  "04",
                  "Ownership integral",
                  "Trabajo como socio de producto: detecto riesgos, destrabo decisiones y sostengo el resultado.",
                ],
              ].map(([year, title, text]) => (
                <article
                  key={title}
                  className="grid grid-cols-[72px_1fr] border-b border-ink last:border-b-0"
                >
                  <div className="relative flex items-start justify-center border-r border-ink px-3 py-7">
                    <span className="mono text-[10px] text-slate">{year}</span>
                    <span className="absolute right-[-4px] top-8 h-[7px] w-[7px] rounded-full border border-ink bg-paper" />
                  </div>
                  <div className="px-6 py-7 lg:px-8">
                    <h4 className="text-[15px] font-semibold uppercase tracking-[0.06em] text-ink">
                      {title}
                    </h4>
                    <p className="mt-3 font-mono text-[10px] uppercase leading-[1.8] tracking-[0.08em] text-slate">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
