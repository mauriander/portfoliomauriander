import { m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoMauriander from "../assets/logoMaurianderBG.png";

function Navbar({ items, onNavigate }) {
  const [activeId, setActiveId] = useState(items[0]?.id || "hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const sections = items.map((item) => document.getElementById(item.id)).filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-18% 0px -44% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    let lastY = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastY && currentY > 220 && !menuOpen);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = (event, id) => {
    onNavigate(event, `#${id}`);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-[60] hidden h-8 w-full border-b border-white/10 bg-ink text-mist md:flex">
        <div className="ticker-inner mono flex min-w-max items-center text-[9px]">
          {[
            "Software Developer",
            "Functional Analyst",
            "Product Builder",
            "Portfolio 2026",
            "Frontend x negocio x ejecucion",
            "Mauriander",
          ]
            .concat([
              "Software Developer",
              "Functional Analyst",
              "Product Builder",
              "Portfolio 2026",
              "Frontend x negocio x ejecucion",
              "Mauriander",
            ])
            .map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="border-r border-white/15 px-10 leading-8 text-mist/55"
              >
                <span className="text-mist">{item}</span>
              </span>
            ))}
        </div>
      </div>

      <header
        className={`fixed left-0 z-50 w-full border-b border-ink bg-mist transition-transform duration-500 ${
          hidden ? "-translate-y-full md:-translate-y-[calc(100%+32px)]" : "translate-y-0"
        } top-0 md:top-8`}
      >
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between">
          <a
            href="#hero"
            onClick={(event) => handleLinkClick(event, "hero")}
            className="flex h-full items-center gap-3 border-r border-ink px-4 sm:px-7"
            aria-label="Ir al inicio"
          >
            <img
              src={logoMauriander}
              alt="Logo de Mauriander"
              className="h-9 w-9 object-contain grayscale contrast-125 invert"
            />
            <span className="mono text-[10px] font-medium text-ink">Mauriander Archive</span>
          </a>

          <nav className="hidden h-full flex-1 items-center justify-center md:flex">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleLinkClick(event, item.id)}
                  className={`mono flex h-full items-center border-r px-6 text-[10px] transition ${
                    isActive
                      ? "border-ink bg-paper text-ink"
                      : "border-black/15 text-slate hover:bg-paper hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden h-full items-center border-l border-ink md:flex">
            <div className="px-6 text-right">
              <div className="text-2xl font-semibold leading-none tracking-[-0.04em] text-ink">
                06
              </div>
              <div className="mono mt-1 text-[8px] text-slate">sections indexed</div>
            </div>
            <a
              href="#contact"
              onClick={(event) => handleLinkClick(event, "contact")}
              className="mono flex h-full items-center border-l border-ink px-6 text-[10px] text-ink transition hover:bg-ink hover:text-mist"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            className="flex h-full w-14 items-center justify-center border-l border-ink md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <m.aside
        initial={false}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[70] bg-ink text-mist md:hidden"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center justify-between border-b border-white/10 px-5">
            <span className="mono text-[10px] text-mist/55">Navigation Index</span>
            <button
              type="button"
              className="mono text-[11px] text-mist/55"
              onClick={() => setMenuOpen(false)}
            >
              close
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {items.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleLinkClick(event, item.id)}
                className="flex h-20 items-center gap-5 border-b border-white/10 px-6"
              >
                <span className="mono w-8 text-[9px] text-mist/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-3xl font-semibold uppercase tracking-[0.04em]">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-white/10 px-6 py-5">
            <span className="mono text-[9px] text-mist/30">Portfolio by Mauricio Andermatten</span>
            <span className="mono text-[9px] text-signal">2026</span>
          </div>
        </div>
      </m.aside>
    </>
  );
}

export default Navbar;
