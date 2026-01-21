"use client";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/toggleTheme";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header
      className={`flex justify-between items-center p-4 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1>Kamal</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export default Header;
