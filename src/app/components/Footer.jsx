"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">

        {/* Venstre side */}
        <div className="flex flex-col items-center md:items-start text-gray-500 text-sm gap-2">
          <p>
            <a href="mailto:albertlund121@gmail.com" className="hover:underline">
              albertlund121@gmail.com
            </a>
          </p>
          <p>
            <a href="mobil:+45 22 23 25 39" className="hover:underline">
              +45 22 22 33 44
            </a>
          </p>
          <p>© {new Date().getFullYear()} Oscar Lund Albertsen.</p>
        </div>

        {/* Højre side */}
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
