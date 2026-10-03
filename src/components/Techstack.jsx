import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiWeb3Dotjs,
  SiVite,
  SiMongodb,
  SiGithub,
  SiExpress,
  SiMongoose,
} from "react-icons/si";

function Techstack() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 place-items-center justify-center mx-auto w-full">
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <FaReact />
        <p className="text-2xl mt-2">React</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <FaJs />
        <p className="text-lg mt-2">JavaScript</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <SiTailwindcss />
        <p className="text-lg mt-2">TailwindCSS</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <SiTypescript />
        <p className="text-lg mt-2">TypeScript</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <FaHtml5 />
        <p className="text-xl mt-2">HTML</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <FaCss3Alt />
        <p className="text-xl mt-2">CSS</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <FaBootstrap />
        <p className="text-xl mt-2">Bootstrap</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <SiVite />
        <p className="text-xl mt-2">Vite</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <SiWeb3Dotjs />
        <p className="text-xl mt-2">Web3</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <SiMongodb />
        <p className="text-xl mt-2">MongoDB</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <FaNodeJs />
        <p className="text-xl mt-2">NodeJS</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <SiGithub />
        <p className="text-xl mt-2">GitHub</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <FaGitAlt />
        <p className="text-xl mt-2">Git</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <SiExpress />
        <p className="text-xl mt-2">Express</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <SiMongoose />
        <p className="text-xl mt-2">Mongoose</p>
      </div>

      {/* Add more tech icons as needed */}
      {/* <div xs={4} md={2} className="">
        <SiFirebase />
      </div> */}
    </div>
  );
}

export default Techstack;
