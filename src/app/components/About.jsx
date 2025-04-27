import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="">
          <h3 className="text-2xl md:text-4xl font-bold mb-6">
            Jeg er en passioneret multimediestuderende med fokus på{" "}
            <span className="text-gray-400">frontend-udvikling</span> og{" "}
            <span className="text-gray-400">digitalt design</span>.
          </h3>
          <div className="text-sm md:text-lg">
            <p>
              Jeg søger en praktikplads, hvor jeg kan udvikle mig som
              frontend-udvikler og arbejde med HTML, CSS og JavaScript til at
              bygge brugervenlige og responsive webløsninger. Jeg har erfaring
              med Astro, Next.js og React som framworks, også har jeg arbejdet
              med Node.js til backend-udvikling og API-integrationer.
              <br />
              <br />
              <span className="font-bold text-xl md:text-2xl">Om mig </span>-
              Jeg er 27 år gammel og studerer i øjeblikket Multimediedesign på
              KEA. Siden jeg begyndte på uddannelsen, har jeg opdaget en stor
              interesse for webudvikling – jeg nyder at arbejde med kodning og
              skabe hjemmesider, der kombinerer funktionalitet og design. De
              seneste måneder har jeg haft valgfaget Frontend, hvor jeg for
              alvor er dykket ned i koden og fået en dybere forståelse for,
              hvordan man bygger brugervenlige og gennemførte webløsninger.
              <br />
              <br />
              Jeg er på udkig efter en virksomhed, hvor jeg kan lære endnu mere
              om webteknologier, animationer og forbedring af brugeroplevelser.
              Ud over mit studie interesserer jeg mig for 3D-webudvikling med
              Three.js.
              <br />
              <br />
              Mit mål i en praktik er at blive en endnu skarpere
              frontend-udvikler og lære mere om webteknologier, animationer og
              forbedring af brugeroplevelser.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Image
            src="/img/OZZEY-14.jpg"
            alt="Oscar"
            width={500}
            height={400}
            className="w-full shadow-lg rounded-md"
          />

          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Kvalifikationer</h2>
            <div className="flex flex-wrap gap-4">
              <Image
                src="/img/html-144.svg"
                alt="HTML"
                width={48}
                height={48}
                className="w-12 "
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
            <h2 className="font-bold">Kompetencer</h2>
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
