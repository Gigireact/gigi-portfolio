import shophub from "../../assets/shophub.png";
import Zapchat from "../../assets/zap pic.png";
import ADweb from "../../assets/4dweb.png";
import Stayeasy from "../../assets/stayeasypic.png";
import Tasktics from "../../assets/tasktics.png";
import kobomarket from "../../assets/kobomarket.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <h2
          style={{ textShadow: "2px 2px 5px blue" }}
          className="mb-8 text-400"
        >
          These are a few of the projects i have built
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First project i.e sellar*/}

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
            <h3 className="text-xl font-bold mb-2">
              Sellar <span className="text-purple-500">Website </span>{" "}
            </h3>
            <img
              src={shophub}
              alt="sellar pic"
              className="w-full max-w-[250px] h-auto mx-auto my-4 object-contain"
            />
            <p className="text-white mb-4">
              A modern, responsive e-commerce website for browsing products and
              delivering a smooth, user-friendly shopping experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "CSS", "Typescript", "Tailwind", "Vite", "..."].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://shop-websit-sigma.vercel.app/"
                className="text-purple-400 hover:text-purple-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Second project i.e 4D website*/}

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
            <h3 className="text-xl font-bold mb-2">
              4D <span className="text-purple-500">Website </span>{" "}
            </h3>
            <img
              src={ADweb}
              alt="4D web pic"
              className="w-full max-w-[250px] h-auto mx-auto my-4 object-contain"
            />
            <p className="text-white mb-4">
              4D's responsive website built to showcase its brand, services, and
              online presence.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Typescript", "TailwindCSS", "Node JS", "..."].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://4dsolutions.vercel.app/"
                className="text-purple-400 hover:text-purple-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* third project i.e kobomarket app*/}

          <div className="p-6 justify-center items-center rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
            <h3 className="text-xl font-bold mb-2">
              Kobo <span className="text-purple-500">Market</span> App{" "}
            </h3>
            <img
              src={kobomarket}
              alt="kobomarket pic"
              className="w-full max-w-[250px] h-auto mx-auto my-4 object-contain"
            />
            <p className="text-white mb-4">
              KoboMarket is an e-commerce platform where users can browse products, manage shopping carts, and place orders, with vendor management and admin approval features.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Claude", "..."].map((tech, key) => (
                <span
                  key={key}
                  className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://kobomarket.vercel.app"
                className="text-purple-400 hover:text-purple-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>


          {/* fourth project i.e zapchat app*/}

          <div className="p-6 justify-center items-center rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
            <h3 className="text-xl font-bold mb-2">
              Zapchat <span className="text-purple-500">App</span>{" "}
            </h3>
            <img
              src={Zapchat}
              alt="zapchat pic"
              className="w-full max-w-[250px] h-auto mx-auto my-4 object-contain"
            />
            <p className="text-white mb-4">
              A demo messaging application that enables users to connect
              and chat through a clean, responsive interface.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Tailwind CSS", "Typescript", "..."].map((tech, key) => (
                <span
                  key={key}
                  className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://zapchat-one.vercel.app"
                className="text-purple-400 hover:text-purple-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* fifth project i.e stayeasy app*/}

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
            <h3 className="text-xl font-bold mb-2">
              Stay <span className="text-purple-500">easy </span> App{" "}
            </h3>
            <img
              src={Stayeasy}
              alt="stayeasy pic"
              className="w-full max-w-[250px] h-auto mx-auto my-4 object-contain"
            />
            <p className="text-white mb-4">
              StayEasy is a hotel booking platform where users can explore hotels, check room availability, make reservations, and pay securely. It also supports vendor and admin management of hotels, rooms, and bookings.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "React",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Paystack",
                "Cloudinary",
                "..."
                ].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://stayeasy-today.vercel.app/"
                className="text-purple-400 hover:text-purple-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* sixth project i.e tasktics */}

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
            <h3 className="text-xl font-bold mb-2">
              Task<span className="text-purple-500">Tics </span>{" "}
            </h3>
            <img
              src={Tasktics}
              alt="tasktics pic"
              className="w-full max-w-[250px] h-auto mx-auto my-4 object-contain"
            />
            <p className="text-white mb-4">
              A modern demo project management app that helps users organize tasks,
              monitor progress, and stay productive by logging in and signing
              up.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TailwindCSS", "Firebase", "..."].map((tech, key) => (
                <span
                  key={key}
                  className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://tasktics.vercel.app/"
                className="text-purple-400 hover:text-purple-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
