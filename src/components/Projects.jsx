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
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Productos digitales construidos con foco en experiencia y resultado."
          description="Seleccion de casos donde combine desarrollo, analisis funcional y decision de producto."
        />

        {error && (
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-300/75 bg-amber-50/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-900">
            <AlertTriangle size={14} />
            Firestore no disponible, mostrando fallback local
          </div>
        )}

        {isLoading ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-[2rem] border border-white/55 bg-white/60 shadow-panel backdrop-blur-2xl"
              >
                <div className="h-2 bg-gradient-to-r from-brand-500/50 via-iris-500/50 to-brand-700/50" />
                <div className="aspect-[5/3] animate-pulse bg-gradient-to-br from-brand-50 via-white to-iris-50" />
                <div className="space-y-4 p-7">
                  <div className="flex items-center gap-2 text-iris-600">
                    <LoaderCircle size={14} className="animate-spin" />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                      Cargando
                    </span>
                  </div>
                  <div className="h-8 w-2/3 animate-pulse rounded-full bg-white/80" />
                  <div className="h-4 w-full animate-pulse rounded-full bg-white/70" />
                  <div className="h-4 w-5/6 animate-pulse rounded-full bg-white/70" />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <m.div
            className="mt-12 grid gap-6 md:grid-cols-2"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.06,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {projects.map((project) => (
              <m.article
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[2rem] border border-white/55 bg-white/58 shadow-panel backdrop-blur-2xl"
              >
                <div className="h-2 bg-gradient-to-r from-brand-500 via-iris-500 to-brand-700" />
                <div className="aspect-[5/3] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-iris-50">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width="1200"
                    height="720"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 45vw, 100vw"
                  />
                </div>
                <div className="p-7">
                  <div className="mb-4 inline-flex rounded-full border border-white/55 bg-white/74 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-iris-600">
                    {project.category || "Caso de producto"}
                  </div>
                  <h3 className="font-display text-[1.95rem] font-semibold tracking-[-0.04em] text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/60 bg-white/74 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/74 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-white"
                  >
                    Ver mas
                    <ExternalLink size={14} />
                  </a>
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
