import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectSlider from "./components/Projects";

function App() {
  return (
    <div className="bg-zinc-900 overflow-x-hidden">
      {/* <Home/> */}
      {/* <div className="w-screen h-screen"> */}

      <Projects />
      <Home />
      {/* </div> */}
    </div>
  );
}

export default App;
