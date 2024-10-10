import "./App.css";
import Navbarr from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Task1 from "./Components/Task/Task1";
import Task2 from "./Components/Task/Task2";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </div>
  );
}

export default App;
