"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-10 mt-20">
      <div id="contact" className="py-20 px-8 mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Kontakt</h2>
        <p className="text-base md:text-lg mb-6">
          Fang mig gerne på mail, mobil eller LinkedIn – jeg håber at høre fra
          jer.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <a
            href="mailto:oscar.lund@example.com"
            className="text-lg md:text-xl text-gray-400 hover:text-black underline"
          >
            albertlund121@gmail.com
          </a>
          <a
            href="tel:+4522233344"
            className="text-lg md:text-xl text-gray-400 hover:text-black underline"
          >
            +45 22 23 25 39
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        <p className="text-gray-500 text-sm text-center md:text-left">
          © 2025 Oscar Lund Albertsen.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/oscarlund121"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src="/img/github.svg"
              alt="GitHub"
              width={30}
              height={30}
              className="max-w-full"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-lund/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src="/img/linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={30}
              className="max-w-full"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
