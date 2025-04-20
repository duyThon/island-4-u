import "./App.css";
import { Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import IslansdList from "./pages/IslandsList";
import IslandDetail from "./pages/IslandDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/islands" element={<IslansdList />} />
        <Route path="/island/:id" element={<IslandDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
