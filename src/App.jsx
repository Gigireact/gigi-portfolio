import { useState, useLayoutEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contacts } from "./components/sections/Contacts";
import { loadSlim } from "@tsparticles/slim";
import { LoadingScreen } from "./components/LoadingScreen";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import "./index.css";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ SMOOTH SCROLL ENGINE (GLOBAL)
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      {!isLoaded && (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      )}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <About />
        <Projects />
        <Contacts />
      </div>
    </>
  );
}

export default App;