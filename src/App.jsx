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
      <div className="min-h-screen overflow-x-clip bg-mist font-body text-slate">
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
