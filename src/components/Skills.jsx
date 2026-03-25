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
  { name: "React", icon: Layers3, type: "Frontend systems" },
  { name: "Firebase", icon: Flame, type: "Backend support" },
  { name: "Firestore", icon: Database, type: "Data layer" },
  { name: "Node.js", icon: Server, type: "Runtime" },
  { name: "JavaScript", icon: Orbit, type: "Core language" },
  { name: "Tailwind CSS", icon: LayoutTemplate, type: "Interface layer" },
  { name: "GitHub", icon: FolderGit2, type: "Versioning" },
  { name: "Functional Analysis", icon: ClipboardCheck, type: "Business logic" },
  { name: "Product Strategy", icon: Workflow, type: "Direction" },
  { name: "UX Thinking", icon: Palette, type: "Experience" },
];

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-[1440px]">
        <SectionTitle
          eyebrow="Capabilities"
          number="02"
          meta="Skills / Stack"
          title="Capacidades tecnicas y de producto para construir con criterio editorial y operativo."
          description="Combino stack moderno con analisis funcional y mirada de negocio para mover proyectos de idea a ejecucion."
        />

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
          }}
          className="grid border-b border-ink md:grid-cols-2 xl:grid-cols-3"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isLastRowOnDesktop =
              index >= skills.length - (skills.length % 2 || 2);
            const isLastRowOnWide = index >= skills.length - (skills.length % 3 || 3);

            return (
              <m.article
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex min-h-[280px] flex-col gap-6 border-ink px-8 py-10 transition hover:bg-paper ${
                  !isLastRowOnDesktop ? "border-b" : ""
                } ${index % 2 === 0 ? "md:border-r" : ""} ${
                  !isLastRowOnWide ? "xl:border-b" : ""
                } ${index % 3 !== 2 ? "xl:border-r" : ""} ${index % 3 === 2 ? "md:border-r-0" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-ink">
                    <Icon size={18} />
                  </div>
                  <span className="mono border border-ink px-3 py-1 text-[9px] text-slate">
                    {skill.type}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-4xl leading-[1.02] tracking-[-0.03em] text-ink">
                    {skill.name}
                  </h3>
                </div>

                <span className="mono inline-flex self-start border border-ink px-3 py-1 text-[9px] text-slate transition group-hover:bg-ink group-hover:text-mist">
                  indexed capability
                </span>
              </m.article>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}

export default Skills;
