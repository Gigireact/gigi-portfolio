// import Type from "../Type.jsx"
// export const Home = () => {
//     return(
//         <section id="home" className="min-h-screen flex items-center justify-center relative">
//             <div className="text-center z-10 px-4">
//                 <h1 className="text-5xl md:text-7xl text-blue-400 font-bold mb-6">
//                     Hi there! <span className="wave" role="img" aria-labelledby="wave"> 👋🏻 </span> 😃
//                 </h1>
//                 <p className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent leading-right">
//                     My name is Gift Udofiah
//                 </p>
//                 {/* <p className="text-white text-lg mb-8 max-w-lg mx-auto">
//                     I am a frontend developer that builds beautiful and responsive webpages and web applications that make user interaction flawless.
//                 </p> */}
//                 <div className="p-20 text-semibold text-3xl">
//                     <Type />
//                 </div>
//                 <div className="flex justify-center space-x-4">
//                     <a href="#projects" className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overfow-hidden hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(128, 0, 128, 0.4)]">
//                         View Projects
//                     </a>
//                     <a href="#contacts" className="border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(128, 0, 128, 0.4)] hover:bg-purple-500/10">
//                         Contact Me
//                     </a>
//                 </div>
                
//             </div> 
//         </section>
//     )
// }

import Type from "../Type.jsx";
import justme from "../../assets/justme4.png";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE */}
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl text-blue-400 font-bold mb-6">
            {/*  <span className="wave">👋🏻</span> 😃 */}
            Hi there!!!
          </h1>

          <p className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
            My name is Gift Udofiah
          </p>

          <div className="mb-10 text-2xl md:text-3xl font-semibold">
            <Type />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <a
              href="#projects"
              className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contacts"
              className="border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:w-1/2">
            <img
                src={justme}
                alt="Gift Udofiah"
                // className="w-80 h-80 md:w-[500px] md:h-[500px] object-cover rounded-full border-4 border-purple-500 shadow-xl"
            />
        </div>

      </div>
    </section>
  );
};