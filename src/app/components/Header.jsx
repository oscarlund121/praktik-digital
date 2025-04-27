"use client";

import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed w-full bg-gray-100 p-5 flex justify-between items-center z-10">
      <div className="flex flex-row gap-6 items-center">
        <a
          href="https://github.com/oscarlund121"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/github.svg"
            alt="GitHub"
            width={50}
            height={50}
            className="hover:scale-110 transition-transform"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/oscar-lund/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
          <Image
            src="/img/linkedin.svg"
            alt="LinkedIn"
            width={50}
            height={50}
            className="hover:scale-110 transition-transform"
          />
        </a>
      </div>
      <nav className="hidden md:flex gap-10 text-lg">
        <a
          onClick={() => scrollToSection("about")}
          className="border-1 border-black px-4 py-2 hover:text-gray-400 hover:border-gray-400 transition rounded-md"
        >
          Om mig
        </a>
        <a
          onClick={() => scrollToSection("projects")}
          className="border-1 border-black px-4 py-2 hover:text-gray-400 hover:border-gray-400 transition rounded-md"
        >
          Projekter
        </a>
        <a
          onClick={() => scrollToSection("footer")}
          className="border-1 border-black px-4 py-2 hover:text-gray-400 hover:border-gray-400 transition rounded-md"
        >
          Kontakt
        </a>
        <a href="/CV-OscarLund.pdf" download>
          <button className="bg-gray-300 px-5 py-2 hover:bg-black hover:text-gray-300 transition rounded-md cursor-pointer">
            CV
          </button>
        </a>
      </nav>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center items-center space-y-1"
        >
          <span
            className="block w-8 h-1 bg-black transition-all duration-300 rounded-md"
            style={{
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          ></span>
          <span
            className={`block w-8 h-1 bg-black transition-all duration-300 rounded-md ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className="block w-8 h-1 bg-black transition-all duration-300 rounded-md"
            style={{
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-5 bg-white shadow-lg flex flex-col gap-6 p-8 rounded-md md:hidden">
          <a
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="text-lg cursor-pointer"
          >
            Om mig
          </a>
          <a
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="text-lg cursor-pointer"
          >
            Projekter
          </a>
          <a
            onClick={() => {
              document
                .getElementById("footer")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="text-lg cursor-pointer"
          >
            Kontakt
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="/CV-OscarLund.pdf"
            download
            className="text-lg"
          >
            CV
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
