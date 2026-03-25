import { m } from "framer-motion";
import { AlertTriangle, ExternalLink, LoaderCircle } from "lucide-react";
import useProjects from "../hooks/useProjects";
import SectionTitle from "./SectionTitle";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Projects() {
  const { projects, isLoading, error } = useProjects();

  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-[1440px]">
        <SectionTitle
          eyebrow="Selected Work"
          number="03"
          meta="Archive / Projects"
          title="Casos donde combine desarrollo, analisis funcional y criterio de producto."
          description="Una seleccion de proyectos construidos con foco en experiencia, claridad operacional y resultado."
        />

        {error && (
          <div className="mx-6 mt-8 inline-flex items-center gap-2 border border-ink bg-paper px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink md:mx-8">
            <AlertTriangle size={14} />
            Firestore no disponible, mostrando fallback local
          </div>
        )}

        {isLoading ? (
          <div className="grid border-b border-ink md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <article
                key={index}
                className={`min-h-[560px] border-ink ${
                  index % 2 === 0 ? "md:border-r" : ""
                } border-b last:border-b-0`}
              >
                <div className="flex h-full flex-col bg-ink">
                  <div className="aspect-[5/3] animate-pulse bg-neutral-800" />
                  <div className="flex flex-1 flex-col justify-between p-8 text-mist">
                    <div>
                      <div className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-mist/45">
                        <LoaderCircle size={14} className="animate-spin" />
                        cargando
                      </div>
                      <div className="mt-5 h-16 w-2/3 animate-pulse bg-white/10" />
                    </div>
                    <div className="border-t border-white/10 pt-5">
                      <div className="h-3 w-1/2 animate-pulse bg-white/10" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <m.div
            className="grid border-b border-ink md:grid-cols-2"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.05,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {projects.map((project, index) => (
              <m.article
                key={project.title}
                variants={cardVariants}
                className={`group relative min-h-[620px] overflow-hidden border-ink ${
                  index % 2 === 0 ? "md:border-r" : ""
                } border-b last:border-b-0`}
              >
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width="1200"
                    height="720"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover grayscale contrast-125 brightness-[0.56] transition duration-700 group-hover:scale-[1.04]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,10,10,0.88)_0%,rgba(10,10,10,0.34)_60%,transparent_100%),linear-gradient(to_top,rgba(10,10,10,0.92)_0%,transparent_52%)]" />
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between p-8 text-mist md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="mono border border-white/15 bg-mist px-3 py-2 text-[9px] text-ink">
                      {project.category || "Caso de producto"}
                    </span>
                    <span className="font-mono text-6xl leading-none tracking-[-0.04em] text-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <p className="mono text-[9px] text-mist/35">Collection / projects</p>
                    <h3 className="mt-4 max-w-xl font-display text-5xl leading-[0.92] tracking-[-0.03em]">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-xl font-mono text-[10px] uppercase leading-[1.85] tracking-[0.08em] text-mist/48">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="mono border border-white/15 px-3 py-2 text-[9px] text-mist/48"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-4">
                      <span className="mono text-[10px] text-mist/35">Open case study</span>
                      <a
                        href={project.link}
                        className="flex h-11 w-11 items-center justify-center border border-white/25 text-mist transition group-hover:bg-mist group-hover:text-ink"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </m.article>
            ))}
          </m.div>
        )}
      </div>
    </section>
  );
}

export default Projects;
