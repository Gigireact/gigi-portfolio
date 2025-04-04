import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiSupabase, SiWeb3Dotjs } from "react-icons/si";


function Techstack() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 place-items-center">


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
        <SiSupabase />
        <p className="text-xl mt-2">Supabase</p>
      </div>
      <div className="tech-icons transition-transform duration-300 ease-in-out hover:scale-105">
        <SiWeb3Dotjs />  
        <p className="text-xl mt-2">Web3</p>
      </div>
      {/* <div xs={4} md={2} className="">
        <SiFirebase />
      </div> */}
     
    </div>
  );
}

export default Techstack;
