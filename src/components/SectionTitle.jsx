import { m } from "framer-motion";

function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-5 inline-flex rounded-full border border-white/45 bg-white/60 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-iris-600 backdrop-blur-xl">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl lg:text-[3.3rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate sm:text-lg">{description}</p>
      )}
    </m.div>
  );
}

export default SectionTitle;
