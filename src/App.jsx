import { LazyMotion, domAnimation } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import { siteContent } from "./content/siteContent";
import useAnchorNavigation from "./hooks/useAnchorNavigation";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("portfolio-theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "es";
  }

  const stored = window.localStorage.getItem("portfolio-language");
  if (stored === "es" || stored === "en") {
    return stored;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  return browserLanguage.startsWith("en") ? "en" : "es";
}

function App() {
  const handleAnchorClick = useAnchorNavigation();
  const [theme, setTheme] = useState(getInitialTheme);
  const [language, setLanguage] = useState(getInitialLanguage);

  const content = useMemo(() => siteContent[language], [language]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-theme", theme);
    window.localStorage.setItem("portfolio-language", language);
  }, [language, theme]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen overflow-x-clip bg-mist font-body text-slate transition-colors duration-300 dark:bg-[#111111] dark:text-[#a8a29a]">
        <Navbar
          items={content.navItems}
          onNavigate={handleAnchorClick}
          content={content.navbar}
          ui={content.ui}
          language={language}
          theme={theme}
          onLanguageChange={setLanguage}
          onThemeChange={setTheme}
        />

        <main>
          <Hero onNavigate={handleAnchorClick} content={content.hero} />
          <About content={content.about} />
          <Skills content={content.skills} />
          <Projects content={content.projects} language={language} />
          <Timeline content={content.timeline} />
          <Contact content={content.contact} />
        </main>

        <Footer content={content.footer} />
      </div>
    </LazyMotion>
  );
}

export default App;
