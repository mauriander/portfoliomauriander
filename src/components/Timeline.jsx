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
      "Desarrollo productos digitales end-to-end con foco en velocidad de entrega y calidad de experiencia.",
  },
  {
    year: "2024",
    title: "Functional Analyst",
    type: "Experiencia",
    icon: ScanSearch,
    description:
      "Traduccion de procesos de negocio en requerimientos funcionales claros y backlog priorizado.",
  },
  {
    year: "2023",
    title: "Emprendimiento y validacion de productos",
    type: "Producto",
    icon: Wrench,
    description:
      "Creacion y evolucion de iniciativas propias con enfoque en validacion temprana y crecimiento sostenible.",
  },
  {
    year: "Formacion",
    title: "Sistemas + aprendizaje continuo",
    type: "Educacion",
    icon: GraduationCap,
    description:
      "Base analitica fuerte en sistemas para tomar decisiones tecnicas con contexto de negocio.",
  },
];

function Timeline() {
  return (
    <section id="journey" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experiencia / Educacion"
          title="Evolucion profesional construida sobre tecnologia y producto."
          description="Una trayectoria orientada a resolver problemas complejos con ejecucion pragmatica y pensamiento sistemico."
        />

        <div className="relative mt-14 border-l border-white/55 pl-7 sm:pl-10">
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
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mb-8 rounded-[1.6rem] border border-white/55 bg-white/58 p-6 shadow-sm backdrop-blur-2xl last:mb-0"
              >
                <span className="absolute -left-[2.45rem] top-8 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white bg-gradient-to-br from-brand-500 to-iris-600 text-white shadow-glow">
                  <Icon size={15} />
                </span>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-iris-600">
                      {item.type}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-ink">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-flex rounded-full border border-white/55 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                    {item.year}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-slate">{item.description}</p>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
