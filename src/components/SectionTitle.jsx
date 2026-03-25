import { m } from "framer-motion";

function SectionTitle({
  eyebrow,
  title,
  description,
  number = "00",
  meta = "Portfolio Section",
  inverted = false,
}) {
  const rootClass = inverted
    ? "border-white/15 bg-ink text-mist"
    : "border-ink bg-transparent text-ink dark:border-[#f5f2ed] dark:text-mist";
  const numClass = inverted
    ? "border-white/15 bg-white/5 text-mist/55"
    : "border-ink bg-brand-100 text-slate dark:border-[#f5f2ed] dark:bg-[#1b1b1b] dark:text-[#b5aea4]";
  const metaClass = inverted
    ? "border-white/15 text-mist/45"
    : "border-ink text-slate dark:border-[#f5f2ed] dark:text-[#b5aea4]";

  return (
    <div className={`border-b ${rootClass}`}>
      <div className="grid min-h-[52px] grid-cols-[72px_1fr] md:grid-cols-[72px_1fr_180px]">
        <div
          className={`mono flex items-center justify-center border-r text-[10px] ${numClass}`}
        >
          {number}
        </div>
        <div className="flex items-center px-5 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] md:px-7">
          {eyebrow || meta}
        </div>
        <div
          className={`mono hidden items-center justify-end border-l px-5 text-[9px] md:flex ${metaClass}`}
        >
          {meta}
        </div>
      </div>

      <m.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-8 px-6 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-12"
      >
        <h2 className="font-display text-4xl leading-[0.96] tracking-[-0.03em] sm:text-5xl lg:text-[3.9rem]">
          {title}
        </h2>

        {description ? (
          <div className={`border-l-2 pl-5 ${inverted ? "border-mist" : "border-ink dark:border-mist"}`}>
            <p
              className={`font-mono text-[11px] uppercase leading-[1.95] tracking-[0.08em] ${
                inverted ? "text-mist/55" : "text-slate dark:text-[#b5aea4]"
              }`}
            >
              {description}
            </p>
          </div>
        ) : (
          <div />
        )}
      </m.div>
    </div>
  );
}

export default SectionTitle;
