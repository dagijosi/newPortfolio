import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbars from "./components/Navbars";

function App() {
  return (
    <div className="bg-gradient-to-r from-polo-950 to-polo-900">
      <Navbars />
      <Home />
      <About/>
    </div>
  );
}

export default App;
