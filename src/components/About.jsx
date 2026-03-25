import { m } from "framer-motion";
import SectionTitle from "./SectionTitle";

function About({ content }) {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-[1440px]">
        <SectionTitle
          eyebrow={content.eyebrow}
          number="01"
          meta={content.meta}
          title={content.title}
          description={content.description}
        />

        <div className="grid border-b border-ink dark:border-[#f5f2ed] lg:grid-cols-[1fr_1fr]">
          <m.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-ink px-6 py-12 dark:border-[#f5f2ed] lg:border-b-0 lg:border-r lg:px-10 lg:py-16"
          >
            <h3 className="font-display text-4xl leading-[1] tracking-[-0.03em] text-ink dark:text-mist sm:text-5xl">
              {content.heading.split(content.emphasis)[0]}
              <em className="text-slate dark:text-[#b5aea4]">{content.emphasis}</em>
              {content.heading.split(content.emphasis)[1]}
            </h3>

            <div className="mt-8 border-l-2 border-ink pl-5 dark:border-mist">
              <p className="font-mono text-[11px] uppercase leading-[1.95] tracking-[0.08em] text-slate dark:text-[#b5aea4]">
                {content.body}
              </p>
            </div>

            <div className="mt-10 grid border-y border-ink dark:border-[#f5f2ed] sm:grid-cols-2">
              {content.stats.map(([value, label], index) => (
                <div
                  key={label}
                  className={`px-0 py-5 ${index === 0 ? "border-b border-ink dark:border-[#f5f2ed] sm:border-b-0 sm:pr-6" : "sm:border-l sm:border-ink sm:pl-6 dark:sm:border-[#f5f2ed]"}`}
                >
                  <p className="text-5xl font-semibold leading-none tracking-[-0.04em] text-ink dark:text-mist">
                    {value}
                  </p>
                  <p className="mono mt-2 text-[9px] text-slate dark:text-[#b5aea4]">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {content.tags.map((block) => (
                <span
                  key={block}
                  className="mono border border-ink px-3 py-2 text-[9px] text-slate transition hover:bg-ink hover:text-mist dark:border-[#f5f2ed] dark:text-[#b5aea4] dark:hover:bg-mist dark:hover:text-ink"
                >
                  {block}
                </span>
              ))}
            </div>
          </m.article>

          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b border-ink px-6 py-5 dark:border-[#f5f2ed] lg:px-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink dark:text-mist">
                {content.timelineTitle}
              </p>
              <p className="mono text-[9px] text-slate dark:text-[#b5aea4]">{content.timelineCount}</p>
            </div>

            <div className="flex-1">
              {content.timeline.map(([year, title, text]) => (
                <article
                  key={title}
                  className="grid grid-cols-[72px_1fr] border-b border-ink last:border-b-0 dark:border-[#f5f2ed]"
                >
                  <div className="relative flex items-start justify-center border-r border-ink px-3 py-7 dark:border-[#f5f2ed]">
                    <span className="mono text-[10px] text-slate dark:text-[#b5aea4]">{year}</span>
                    <span className="absolute right-[-4px] top-8 h-[7px] w-[7px] rounded-full border border-ink bg-paper dark:border-mist dark:bg-[#1b1b1b]" />
                  </div>
                  <div className="px-6 py-7 lg:px-8">
                    <h4 className="text-[15px] font-semibold uppercase tracking-[0.06em] text-ink dark:text-mist">
                      {title}
                    </h4>
                    <p className="mt-3 font-mono text-[10px] uppercase leading-[1.8] tracking-[0.08em] text-slate dark:text-[#b5aea4]">
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
