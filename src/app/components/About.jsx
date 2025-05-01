"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageSwitcher";

const About = () => {
  const { language } = useLanguage();

  const text = {
    da: {
      title: "Jeg er en passioneret multimediestuderende med fokus på",
      span1: "frontend-udvikling",
      span2: "digitalt design",
      content: `Jeg søger en praktikplads fra 25. august - 31. oktober 2025, hvor jeg kan udvikle mig som frontend-udvikler og arbejde med HTML, CSS og JavaScript til at bygge brugervenlige og responsive webløsninger. Jeg har erfaring med Astro, Next.js og React som frameworks, og jeg har også arbejdet med Node.js til backend-udvikling og API-integrationer.
      
Om mig - Jeg er 27 år gammel og studerer Multimediedesign på KEA. Siden jeg begyndte på uddannelsen, har jeg opdaget en stor interesse for webudvikling – jeg nyder at arbejde med kodning og skabe hjemmesider, der kombinerer funktionalitet og design. De seneste måneder har jeg haft valgfaget Frontend, hvor jeg er dykket endnu dybere ned i koden og har opnået en bedre forståelse for, hvordan man bygger brugervenlige løsninger.

Jeg er på udkig efter en virksomhed, hvor jeg kan lære endnu mere om webteknologier, animationer og forbedring af brugeroplevelser. Ud over mit studie interesserer jeg mig for 3D-webudvikling med Three.js.

Mit mål i en praktik er at blive en endnu skarpere frontend-udvikler og lære endnu mere om digitalt håndværk.`,
    },
    en: {
      title: "I am a passionate multimedia student with a focus on",
      span1: "frontend development",
      span2: "digital design",
      content: `I am looking for an internship from August 25 to October 31, 2025, where I can develop as a frontend developer and work with HTML, CSS, and JavaScript to build user-friendly and responsive web solutions. I have experience with Astro, Next.js, and React as frameworks, and have also worked with Node.js for backend development and API integrations.
      
About me – I am 27 years old and currently studying Multimedia Design at KEA. Since starting my education, I have discovered a strong passion for web development – I enjoy working with code and creating websites that combine functionality and design. In recent months, I have taken the Frontend elective, where I have deepened my understanding of building user-friendly and well-structured solutions.

I am looking for a company where I can continue learning about web technologies, animations, and improving user experiences. Outside my studies, I have a keen interest in 3D web development with Three.js.

My goal for my internship is to sharpen my frontend development skills even further and deepen my understanding of digital craftsmanship.`,
    },
  };

  return (
    <section id="about" className="py-20 px-8 max-w-6xl mx-auto bg-white">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold mb-6">
            {text[language].title}{" "}
            <span className="text-gray-400">{text[language].span1}</span> og{" "}
            <span className="text-gray-400">{text[language].span2}</span>.
          </h3>
          <div className="text-sm md:text-lg">
            <p className="whitespace-pre-line">{text[language].content}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Image
            src="/img/OZZEY-14.jpg"
            alt="Oscar"
            width={500}
            height={400}
            className="w-full shadow-lg rounded-full mb-4"
          />

          <div className="flex flex-col gap-2 mb-2">
            <h2 className="font-bold">
              {language === "da" ? "Kvalifikationer" : "Qualifications"}
            </h2>
            <div className="flex flex-wrap gap-4">
              <Image
                src="/img/html-144.svg"
                alt="HTML"
                width={48}
                height={48}
                className="w-12"
              />
              <Image
                src="/img/css.svg"
                alt="CSS"
                width={48}
                height={48}
                className="w-12"
              />
              <Image
                src="/img/javascript-144.svg"
                alt="JavaScript"
                width={48}
                height={48}
                className="w-12"
              />
              <Image
                src="/img/astro.svg"
                alt="Astro"
                width={48}
                height={48}
                className="w-12"
              />
              <Image
                src="/img/github.svg"
                alt="GitHub"
                width={48}
                height={48}
                className="w-12"
              />
              <Image
                src="/img/git.svg"
                alt="Git"
                width={48}
                height={48}
                className="w-12"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold">
              {language === "da" ? "Kompetencer" : "Skills"}
            </h2>
            <div className="flex flex-wrap gap-4">
              <Image
                src="/img/nextjs.svg"
                alt="Next.js"
                width={48}
                height={48}
                className="w-12"
              />
              <Image
                src="/img/react.svg"
                alt="React"
                width={48}
                height={48}
                className="w-12"
              />
              <Image
                src="/img/threejs.svg"
                alt="Three.js"
                width={48}
                height={48}
                className="w-12"
              />
              <Image
                src="/img/tailwind.svg"
                alt="TailwindCSS"
                width={48}
                height={48}
                className="w-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
