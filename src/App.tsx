import { Analytics } from "@vercel/analytics/react";
import Cursor from "./components/ui/Cursor";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { contactData } from "./data/contact";

function App() {
  return (
    <>
      <Analytics />
      <Cursor />
      <Navbar resumeLink={contactData.resumeLink} />
      
      <main className="cursor-none md:cursor-auto">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
