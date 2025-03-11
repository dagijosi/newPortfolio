import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbars from "./components/Navbars";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbars />
      <div className="flex-grow mx-auto mt-16 p-4 container">
        <Home />
        <About />
        <Projects />
        <Skill />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
