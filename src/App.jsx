import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={
        !isDarkMode ? " h-screen" : "bg-black h-screen text-white"
      }
    >
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
