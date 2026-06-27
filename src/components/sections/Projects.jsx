import Calculator from "../../assets/calculator.png"
import Bokku from "../../assets/bokku.png"
import Lint from "../../assets/lint.png"
import Clock from "../../assets/clock.png"
import shophub from "../../assets/shophub.png"
import Zapchat from "../../assets/zap pic.png"
import ADweb from "../../assets/4Dweb.png"
import Tasktics from "../../assets/tasktics.png"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <h2 style={{ textShadow: "2px 2px 5px blue" }} className="mb-8 text-400">These are a few of my projects i have worked on</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First project i.e shophub*/}

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">ShopHub <span className="text-purple-500">Website </span> </h3>
                        <img src={shophub} alt="shophub pic" className="w-full max-w-[250px] h-auto mx-auto my-4 object-contain"/>
                        <p className="text-white mb-4">A website where you can purchase various items from</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "CSS", "Typescript", "Tailwind", "..."].map((tech, key) => (
                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://shop-websit-sigma.vercel.app/" className="text-purple-400 hover:text-purple-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>

                    {/* Second project i.e 4D website*/}

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">4D <span className="text-purple-500">Website </span> </h3>
                        <img src={ADweb} alt="4D web pic" className="w-full max-w-[250px] h-auto mx-auto my-4 object-contain"/>
                        <p className="text-white mb-4">A website built for 4D startup</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Typescript", "TailwindCSS", "Node JS", "..."].map((tech, key) => (
                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://4dsolutions.vercel.app/" className="text-purple-400 hover:text-purple-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>

                    {/* Third project i.e tasktics */}

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">Task<span className="text-purple-500">Tics </span> </h3>
                        <img src={Tasktics} alt="tasktics pic" className="w-full max-w-[250px] h-auto mx-auto my-4 object-contain"/>
                        <p className="text-white mb-4">A project management app that allows users to log in and manage their tasks</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "TailwindCSS", "..."].map((tech, key) => (
                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://tasktics.vercel.app/" className="text-purple-400 hover:text-purple-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>

                    {/* fourth project i.e zapchat app*/}

                    <div className="p-6 justify-center items-center rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">Zapchat <span className="text-purple-500">App</span> </h3>
                        <img src={Zapchat} alt="zapchat pic" className="w-full max-w-[250px] h-auto mx-auto my-4 object-contain"/>
                        <p className="text-white mb-4">An application that allows users to chat with each other </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Tailwind CSS", "..."].map((tech, key) => (
                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://zapchat-one.vercel.app" className="text-purple-400 hover:text-purple-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}






