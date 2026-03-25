import { m } from "framer-motion";
import {
  ClipboardCheck,
  Database,
  Flame,
  FolderGit2,
  Layers3,
  LayoutTemplate,
  Orbit,
  Palette,
  Server,
  Workflow,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const skills = [
  { name: "React", icon: Layers3, type: "Tecnico" },
  { name: "Firebase", icon: Flame, type: "Tecnico" },
  { name: "Firestore", icon: Database, type: "Tecnico" },
  { name: "Node.js", icon: Server, type: "Tecnico" },
  { name: "JavaScript", icon: Orbit, type: "Tecnico" },
  { name: "Tailwind CSS", icon: LayoutTemplate, type: "Tecnico" },
  { name: "GitHub", icon: FolderGit2, type: "Tecnico" },
  { name: "Functional Analysis", icon: ClipboardCheck, type: "Estrategico" },
  { name: "Product Strategy", icon: Workflow, type: "Estrategico" },
  { name: "UX Thinking", icon: Palette, type: "Estrategico" },
  { name: "Process Design", icon: Workflow, type: "Estrategico" },
];

function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills & Stack"
          title="Capacidades tecnicas y de producto para construir con criterio."
          description="Combino stack moderno con analisis funcional y mirada de negocio para mover proyectos de idea a ejecucion."
        />

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
          }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <m.article
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-[1.4rem] border border-white/55 bg-white/60 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-panel"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex rounded-xl border border-white/55 bg-white/70 p-2 text-iris-600 transition group-hover:bg-iris-50">
                    <Icon size={17} />
                  </div>
                  <span className="rounded-full border border-white/55 bg-white/75 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate">
                    {skill.type}
                  </span>
                </div>
                <p className="mt-5 font-display text-[1.45rem] font-semibold tracking-[-0.03em] text-ink">
                  {skill.name}
                </p>
              </m.article>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}

export default Skills;
