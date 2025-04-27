import Image from "next/image";
const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold underline mb-12 text-center">
        Projekter
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className=" p-4 shadow-lg flex flex-col gap-4 hover:scale-105 hover:bg-gray-100 transition-transform rounded-lg">
          <h4 className="text-2xl font-bold">Movie App</h4>
          <Image
            src="/img/movieapp.png"
            alt="Movie App"
            width={400}
            height={300}
            className="w-full h-auto rounded-md"
          />
          <div className="flex justify-between mt-4">
            <a
              href="https://react-movies-q9k9.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white hover:bg-white hover:text-black  transition rounded-md"
            >
              Se projekt
            </a>
            <a
              href="https://github.com/oscarlund121/react-movies"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src="/img/github.svg"
                alt="GitHub"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
        <div className=" p-4 shadow-lg flex flex-col gap-4 hover:scale-105 hover:bg-gray-100 transition-transform rounded-lg">
          <h4 className="text-2xl font-bold">Banana Bandit</h4>
          <Image
            src="/img/groncos.png"
            alt="Banana Bandit"
            width={400}
            height={300}
            className="w-full h-auto rounded-md"
          />
          <div className="flex justify-between mt-4">
            <a
              href="https://groncosgreatgrab.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white hover:bg-white hover:text-black  transition rounded-md"
            >
              Se projekt
            </a>
            <a
              href="https://github.com/oscarlund121/website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src="/img/github.svg"
                alt="GitHub"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        <div className=" p-4 shadow-lg flex flex-col gap-4 hover:bg-gray-100 hover:scale-105 transition-transform rounded-lg">
          <h4 className="text-2xl font-bold">To-do liste</h4>
          <Image
            src="/img/todo-list.png"
            alt="To-do liste"
            width={400}
            height={300}
            className="w-full h-auto rounded-md"
          />
          <div className="flex justify-between mt-4">
            <a
              href="https://todooscar.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white hover:bg-white hover:text-black  transition rounded-md"
            >
              Se projekt
            </a>
            <a
              href="https://github.com/oscarlund121/todo-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src="/img/github.svg"
                alt="GitHub"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
