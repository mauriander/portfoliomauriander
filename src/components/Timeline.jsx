import { m } from "framer-motion";
import { GraduationCap, Rocket, ScanSearch, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";

const journey = [
  {
    year: "2026",
    title: "Software Developer & Product Builder",
    type: "Experiencia",
    icon: Rocket,
    description:
      "Desarrollo productos digitales end-to-end con foco en velocidad de entrega, claridad tecnica y calidad de experiencia.",
  },
  {
    year: "2024",
    title: "Functional Analyst",
    type: "Experiencia",
    icon: ScanSearch,
    description:
      "Traduccion de procesos de negocio en requerimientos funcionales claros, backlog priorizado y decisiones implementables.",
  },
  {
    year: "2023",
    title: "Emprendimiento y validacion de productos",
    type: "Producto",
    icon: Wrench,
    description:
      "Creacion y evolucion de iniciativas propias con enfoque en validacion temprana, aprendizaje y crecimiento sostenible.",
  },
  {
    year: "Formacion",
    title: "Sistemas + aprendizaje continuo",
    type: "Educacion",
    icon: GraduationCap,
    description:
      "Base analitica fuerte en sistemas para tomar decisiones tecnicas con contexto real de negocio.",
  },
];

function Timeline() {
  return (
    <section id="journey" className="section-shell">
      <div className="mx-auto max-w-[1440px]">
        <SectionTitle
          eyebrow="Experience / Education"
          number="04"
          meta="Timeline / Journey"
          title="Evolucion profesional construida sobre tecnologia, producto y lectura de contexto."
          description="Una trayectoria orientada a resolver problemas complejos con ejecucion pragmatica y pensamiento sistemico."
        />

        <div className="border-b border-ink">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <m.article
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.48,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid border-b border-ink last:border-b-0 md:grid-cols-[96px_220px_1fr]"
              >
                <div className="border-b border-ink px-6 py-7 md:border-b-0 md:border-r">
                  <p className="mono text-[10px] text-slate">{item.year}</p>
                </div>
                <div className="flex items-center gap-3 border-b border-ink px-6 py-7 md:border-b-0 md:border-r">
                  <div className="flex h-10 w-10 items-center justify-center border border-ink">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="mono text-[9px] text-slate">{item.type}</p>
                  </div>
                </div>
                <div className="px-6 py-7 md:px-8">
                  <h3 className="text-[15px] font-semibold uppercase tracking-[0.08em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-mono text-[10px] uppercase leading-[1.85] tracking-[0.08em] text-slate">
                    {item.description}
                  </p>
                </div>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
