import Type from "../Type.jsx";
import justme from "../../assets/justme4.png";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
               <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

      </div>

                {/* glow design */}
            <div
            className="absolute inset-0 pointer-events-none"
            style={{
                background:
                "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.18), transparent 35%), radial-gradient(circle at 100% 100%, rgba(45,212,191,0.15), transparent 35%)",
            }}
            />

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
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
                }}
                // className="w-80 h-80 md:w-[500px] md:h-[500px] object-cover rounded-full border-4 border-purple-500 shadow-xl"
            />
        </div>

      </div>
    </section>
  );
};



