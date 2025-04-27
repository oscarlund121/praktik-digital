"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        
        {/* Venstre side: Tekst */}
        <p className="text-gray-500 text-sm text-center md:text-left">
          © 2025 Oscar Lund Albertsen.
        </p>

        {/* Højre side: Ikoner */}
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
