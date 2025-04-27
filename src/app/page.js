import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";

export default function Home() {
  return (
 <div> 
<Hero />
<About />
<Projects />
    </div>
  );
}
