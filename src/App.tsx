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
    <div>
      <Navbars />
      <Home />
      <About/>
      <Projects/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
