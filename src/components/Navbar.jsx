import { m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoMauriander from "../assets/logoMaurianderBG.png";

function Navbar({ items, onNavigate }) {
  const [activeId, setActiveId] = useState(items[0]?.id || "hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

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
        threshold: [0.25, 0.45, 0.7],
        rootMargin: "-20% 0px -48% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const handleLinkClick = (event, id) => {
    onNavigate(event, `#${id}`);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-[#0f1630]/45 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#0f1630]/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={(event) => handleLinkClick(event, "hero")}
          className="inline-flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <img
            src={logoMauriander}
            alt="Logo de Mauriander"
            className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
          />
          <span className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Mauriander
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleLinkClick(event, item.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  isActive
                    ? "bg-white/18 text-white"
                    : "text-white/78 hover:bg-white/12 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(event) => handleLinkClick(event, "contact")}
            className="hidden rounded-full bg-gradient-to-r from-brand-500 via-brand-600 to-iris-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-glow sm:inline-flex"
          >
            Contactar
          </a>

          <button
            type="button"
            className="inline-flex rounded-full border border-white/25 p-2.5 text-white md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <m.nav
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="border-t border-white/20 bg-[#131a35]/88 px-4 py-3 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleLinkClick(event, item.id)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  activeId === item.id
                    ? "bg-white/16 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </m.nav>
      )}
    </header>
  );
}

export default Navbar;
