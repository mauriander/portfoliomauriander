import { m } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Hero({ onNavigate }) {
  return (
    <section
      id="hero"
      className="editorial-grid relative min-h-[100svh] overflow-hidden bg-ink pt-14 text-mist md:pt-[88px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.12)_2px,rgba(0,0,0,0.12)_4px)] opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.12)_0%,rgba(10,10,10,0.38)_55%,rgba(10,10,10,0.92)_100%)]"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-56px)] max-w-[1440px] grid-rows-[1fr_auto]">
        <div className="flex items-end px-6 pb-14 pt-12 sm:px-8 lg:px-14">
          <div className="w-full">
            <m.div
              custom={0.04}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-8 flex flex-wrap items-center gap-4"
            >
              <span className="mono flex items-center gap-4 text-[10px] text-mist/45">
                <span className="inline-block h-px w-12 bg-white/30" />
                Software Developer / Functional Analyst
              </span>
              <span className="mono ml-auto text-[10px] text-signal">Archive 2026</span>
            </m.div>

            <m.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-6xl font-display text-[3.8rem] leading-[0.88] tracking-[-0.04em] text-mist sm:text-[5.7rem] lg:text-[8.6rem]"
            >
              Mauricio <em className="text-mist/35">Andermatten</em>
            </m.h1>

            <m.div
              custom={0.18}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 grid gap-8 border-t border-white/15 pt-6 lg:grid-cols-[minmax(0,540px)_1fr]"
            >
              <p className="font-mono text-[11px] uppercase leading-[1.95] tracking-[0.1em] text-mist/45">
                Diseno y construyo productos digitales con una mirada que combina
                desarrollo, analisis funcional y decision de negocio para transformar
                ideas complejas en sistemas claros, utiles y listos para crecer.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <a
                  href="#projects"
                  onClick={(event) => onNavigate(event, "#projects")}
                  className="mono inline-flex items-center justify-center border border-white/20 bg-mist px-6 py-4 text-[10px] text-ink transition hover:bg-transparent hover:text-mist"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  onClick={(event) => onNavigate(event, "#contact")}
                  className="mono inline-flex items-center justify-center border border-white/20 px-6 py-4 text-[10px] text-mist/70 transition hover:border-white/60 hover:text-mist"
                >
                  Contact index
                </a>
              </div>
            </m.div>
          </div>
        </div>

        <div className="grid border-t border-white/15 md:grid-cols-[1.05fr_0.95fr]">
          <m.div
            custom={0.22}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="border-b border-white/15 px-6 py-7 md:border-b-0 md:border-r md:px-8 lg:px-14"
          >
            <p className="mono text-[9px] text-mist/35">Operational frame</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                ["05+", "productos lanzados"],
                ["End to end", "de discovery a release"],
                ["Systems x Product", "decision tecnica con contexto"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-4xl font-semibold leading-none tracking-[-0.04em] text-mist">
                    {value}
                  </p>
                  <p className="mono mt-2 text-[9px] text-mist/35">{label}</p>
                </div>
              ))}
            </div>
          </m.div>

          <m.button
            type="button"
            custom={0.28}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            onClick={(event) => onNavigate(event, "#about")}
            className="group flex items-center justify-between px-6 py-7 text-left transition hover:bg-white/5 md:px-8 lg:px-14"
          >
            <div>
              <p className="mono text-[9px] text-mist/35">Scroll archive</p>
              <p className="mt-3 font-display text-3xl leading-none tracking-[-0.03em] text-mist">
                Continue to dossier
              </p>
            </div>
            <ArrowDownRight
              size={28}
              className="text-mist/50 transition group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-mist"
            />
          </m.button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
