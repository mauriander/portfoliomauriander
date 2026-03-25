import { m } from "framer-motion";
import { GraduationCap, Rocket, ScanSearch, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";

const icons = [Rocket, ScanSearch, Wrench, GraduationCap];

function Timeline({ content }) {
  return (
    <section id="journey" className="section-shell">
      <div className="mx-auto max-w-[1440px]">
        <SectionTitle
          eyebrow={content.eyebrow}
          number="04"
          meta={content.meta}
          title={content.title}
          description={content.description}
        />

        <div className="border-b border-ink dark:border-[#f5f2ed]">
          {content.items.map((item, index) => {
            const Icon = icons[index];

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
                className="grid border-b border-ink last:border-b-0 dark:border-[#f5f2ed] md:grid-cols-[96px_220px_1fr]"
              >
                <div className="border-b border-ink px-6 py-7 dark:border-[#f5f2ed] md:border-b-0 md:border-r">
                  <p className="mono text-[10px] text-slate dark:text-[#b5aea4]">{item.year}</p>
                </div>
                <div className="flex items-center gap-3 border-b border-ink px-6 py-7 dark:border-[#f5f2ed] md:border-b-0 md:border-r">
                  <div className="flex h-10 w-10 items-center justify-center border border-ink dark:border-[#f5f2ed]">
                    <Icon size={16} className="text-ink dark:text-mist" />
                  </div>
                  <p className="mono text-[9px] text-slate dark:text-[#b5aea4]">{item.type}</p>
                </div>
                <div className="px-6 py-7 md:px-8">
                  <h3 className="text-[15px] font-semibold uppercase tracking-[0.08em] text-ink dark:text-mist">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-mono text-[10px] uppercase leading-[1.85] tracking-[0.08em] text-slate dark:text-[#b5aea4]">
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
