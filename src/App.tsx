import Navbars from "./components/Navbars";
import Home from "./components/Home";
import FeaturedProjects from "./components/FeaturedProjects";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-text-primary flex flex-col font-sans selection:bg-navy selection:text-white">
      {/* Top Navigation */}
      <Navbars />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <Home />
        <FeaturedProjects />
        <Projects />
        <About />
        <Experience />
        <Skill />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
