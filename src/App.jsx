import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Activite from "./pages/Activite";
import RSE from "./pages/RSE";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activite" element={<Activite />} />
          <Route path="/rse" element={<RSE />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;