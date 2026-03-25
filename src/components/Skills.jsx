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

const icons = [
  Layers3,
  Flame,
  Database,
  Server,
  Orbit,
  LayoutTemplate,
  FolderGit2,
  ClipboardCheck,
  Workflow,
  Palette,
];

function Skills({ content }) {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-[1440px]">
        <SectionTitle
          eyebrow={content.eyebrow}
          number="02"
          meta={content.meta}
          title={content.title}
          description={content.description}
        />

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
          }}
          className="grid border-b border-ink dark:border-[#f5f2ed] md:grid-cols-2 xl:grid-cols-3"
        >
          {content.items.map((skill, index) => {
            const Icon = icons[index];
            const isLastRowOnDesktop = index >= content.items.length - (content.items.length % 2 || 2);
            const isLastRowOnWide = index >= content.items.length - (content.items.length % 3 || 3);

            return (
              <m.article
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex min-h-[280px] flex-col gap-6 border-ink px-8 py-10 transition hover:bg-paper dark:border-[#f5f2ed] dark:hover:bg-[#171717] ${
                  !isLastRowOnDesktop ? "border-b" : ""
                } ${index % 2 === 0 ? "md:border-r" : ""} ${
                  !isLastRowOnWide ? "xl:border-b" : ""
                } ${index % 3 !== 2 ? "xl:border-r" : ""} ${index % 3 === 2 ? "md:border-r-0" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-ink dark:border-[#f5f2ed]">
                    <Icon size={18} className="text-ink dark:text-mist" />
                  </div>
                  <span className="mono border border-ink px-3 py-1 text-[9px] text-slate dark:border-[#f5f2ed] dark:text-[#b5aea4]">
                    {skill.type}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-4xl leading-[1.02] tracking-[-0.03em] text-ink dark:text-mist">
                    {skill.name}
                  </h3>
                </div>

                <span className="mono inline-flex self-start border border-ink px-3 py-1 text-[9px] text-slate transition hover:bg-ink hover:text-mist dark:border-[#f5f2ed] dark:text-[#b5aea4] dark:hover:bg-mist dark:hover:text-ink">
                  {content.badge}
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
