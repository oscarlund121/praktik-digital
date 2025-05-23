"use client";

import { useLanguage } from "../context/LanguageSwitcher";

const Hero = () => {
  const { language } = useLanguage();

  const text = {
    da: {
      title: "Multimedie studerende",
      subtitle: "Frontend udvikler",
      name: "Oscar Lund Albertsen",
    },
    en: {
      title: "Multimedia student",
      subtitle: "Frontend developer",
      name: "Oscar Lund Albertsen",
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-12 pt-1 relative">
      <div className="mb-2 sm:mb-5">
        <h1 className="text-5xl md:text-9xl font-bold break-words max-w-full mb-5">
          {text[language].title}
        </h1>
        <h1 className="text-3xl md:text-7xl font-bold leading-tight text-gray-400 mb-10">
          {text[language].subtitle}
        </h1>
        <h3 className="text-1xl md:text-4xl mt-4">
          {text[language].name}
        </h3>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-6xl text-gray-400">
          ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;
