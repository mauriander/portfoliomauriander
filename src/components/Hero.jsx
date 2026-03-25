import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Hero({ onNavigate }) {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const floatY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 80]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -26]
  );
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 0.6]
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[calc(100vh-76px)] items-center px-4 pb-20 pt-16 sm:px-6 lg:px-8"
    >
      <m.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ opacity: glowOpacity }}
      >
        <m.div
          className="absolute left-[-7rem] top-[-5rem] h-[24rem] w-[24rem] rounded-full bg-brand-400/35 blur-3xl"
          style={{ y: floatY }}
        />
        <m.div
          className="absolute right-[-9rem] top-[6rem] h-[26rem] w-[26rem] rounded-full bg-iris-400/30 blur-3xl"
          style={{ y: floatY }}
        />
        <m.div
          className="absolute bottom-[-11rem] left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-brand-200/24 blur-3xl"
          style={{ y: floatY }}
        />
      </m.div>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <m.div style={{ y: contentY }}>
          <m.div
            custom={0.04}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-iris-600 backdrop-blur-xl"
          >
            <Sparkles size={14} />
            Software Developer / Functional Analyst
          </m.div>

          <m.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-ink sm:text-6xl lg:text-[5.4rem]"
          >
            Mauricio Andermatten
          </m.h1>

          <m.p
            custom={0.18}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-7 max-w-3xl text-lg leading-8 text-slate sm:text-xl"
          >
            Diseno y construyo productos digitales con mirada tecnica y de negocio:
            desarrollo, analisis funcional y estrategia para convertir ideas en
            soluciones reales.
          </m.p>

          <m.div
            custom={0.24}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-11 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              onClick={(event) => onNavigate(event, "#projects")}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 via-brand-600 to-iris-600 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-glow transition hover:scale-[1.01]"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              onClick={(event) => onNavigate(event, "#contact")}
              className="inline-flex items-center justify-center rounded-full border border-white/55 bg-white/72 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-ink backdrop-blur-xl transition hover:bg-white"
            >
              Contactar
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/35 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-slate backdrop-blur-xl transition hover:border-white/70 hover:text-ink"
            >
              <Download size={16} />
              Descargar CV
            </a>
          </m.div>
        </m.div>

        <m.aside
          custom={0.22}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ y: floatY }}
          className="rounded-[2rem] border border-white/55 bg-white/50 p-6 shadow-panel backdrop-blur-2xl sm:p-8"
        >
          <div className="grid gap-5">
            <div className="rounded-3xl border border-white/40 bg-gradient-to-br from-[#111a3a] via-brand-700 to-iris-600 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Enfoque
              </p>
              <p className="mt-4 font-display text-2xl leading-tight">
                Producto, tecnologia y ejecucion orientada a resultados.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["+5", "productos lanzados"],
                ["End-to-end", "de discovery a entrega"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/55 bg-white/72 p-5 backdrop-blur-xl"
                >
                  <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-slate">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </m.aside>
      </div>

      <button
        type="button"
        onClick={(event) => onNavigate(event, "#about")}
        className="group absolute bottom-8 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/55 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate backdrop-blur-xl transition hover:text-ink"
      >
        Scroll
        <ArrowDown size={14} className="transition group-hover:translate-y-0.5" />
      </button>
    </section>
  );
}

export default Hero;
