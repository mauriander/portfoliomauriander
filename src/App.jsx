import { LazyMotion, domAnimation } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import useAnchorNavigation from "./hooks/useAnchorNavigation";

function App() {
  const handleAnchorClick = useAnchorNavigation();

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Sobre mi" },
    { id: "skills", label: "Stack" },
    { id: "projects", label: "Proyectos" },
    { id: "journey", label: "Trayectoria" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen overflow-x-clip bg-mesh font-body text-slate">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -left-36 top-0 h-96 w-96 rounded-full bg-brand-300/35 blur-3xl" />
          <div className="absolute right-[-7rem] top-[24rem] h-[26rem] w-[26rem] rounded-full bg-iris-300/30 blur-3xl" />
          <div className="absolute bottom-[-9rem] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-brand-200/20 blur-3xl" />
        </div>

        <Navbar items={navItems} onNavigate={handleAnchorClick} />

        <main>
          <Hero onNavigate={handleAnchorClick} />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>

        <Footer />
      </div>
    </LazyMotion>
  );
}

export default App;
