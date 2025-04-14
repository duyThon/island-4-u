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

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
