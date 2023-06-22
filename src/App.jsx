import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/proyectos" element={<h1>proyectos</h1>} />
        <Route path="/contacto" element={<h1>contacto</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
