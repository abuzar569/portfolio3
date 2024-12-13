"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import DynamicCursor from "./Components/DynamicCursor";
import About from "./Components/About";
import Skills from "./Components/Skills";
import LoadingScreen from "./Components/LoadingScreen";
import BackToTopButton from "./Components/BackToTopButton";
import PhotographySkills from "./Components/PhotographySkills";
import Projects from "./Components/Projects";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import SoundEffects from "./Components/SoundEffect"; 


// Dock Component
const Dock = ({ toggleTheme, theme }) => {
  return (
    <div
    className={`fixed bottom-4 left-4 flex items-center 
      p-2 sm:p-3 
      bg-gray-800 dark:bg-gray-200 
      rounded-full shadow-lg transition-all`}
  >
    {/* Theme Toggle */}
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center 
        w-8 h-8 sm:w-10 sm:h-10 
        bg-green-500 dark:bg-gray-300 
        text-white dark:text-green-900 
        rounded-full shadow-md 
        hover:bg-green-600 dark:hover:bg-gray-400 
        transition-transform hover:scale-110`}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  </div>
  
  );
};

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Apply the selected theme to the document
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`relative ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
 
      <LoadingScreen />
     
      <SoundEffects /> 

      {/* Main Components */}
      <Navbar />
      <Hero />
      <DynamicCursor />
      <About />
      <Skills />
      <PhotographySkills />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
      <Dock toggleTheme={toggleTheme} theme={theme} />
      <BackToTopButton />
    </div>
  );
}
