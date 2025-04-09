import Random from "../../assets/randompic.png"
import Bokku from "../../assets/bokku.png"
import Lint from "../../assets/lint.png"
import Clock from "../../assets/clock.png"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <h2 className="mb-8 text-gray-400">These are a few of my projects i have worked on</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* first project i.e random quotes app*/}

                    <div className="p-6 justify-center items-center rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">Random <span className="text-purple-500">Quotes </span> App</h3>
                        <img src={Random} alt="random quotes pic" className="w-70 h-48 ml-20"/>
                        <p className="text-white mb-4">An app that displays different quotes and the author while changing the background colour of the app with each click</p>
                        {/* <a href="https://random-quotes-app.netlify.app/" target="_blank" /> */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "CSS", "..."].map((tech, key) => (
                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors my-4">
                                View Projects --
                            </a>
                        </div>
                    </div>

                    {/* Second project i.e Lint*/}

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">Lint <span className="text-purple-500">App </span> </h3>
                        <img src={Lint} alt="lint pic" className="w-70 h-48 ml-20"/>
                        <p className="text-white mb-4">An app that helps bring tech enthusiasts, developers, designers and entrepreneurs to collaborate and share ideas.</p>
                        {/* <a href="https://random-quotes-app.netlify.app/" target="_blank" /> */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "CSS", "TailwindCSS", "..."].map((tech, key) => (
                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors my-4">
                                View Projects --
                            </a>
                        </div>
                    </div>

                    {/* Third project i.e bokku */}

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">Bokku <span className="text-purple-500">App </span> </h3>
                        <img src={Bokku} alt="bokku pic" className="w-70 h-48 ml-20"/>
                        <p className="text-white mb-4">An app that helps large-scale and small-scale businesses schedule payments for their workers</p>
                        {/* <a href="https://random-quotes-app.netlify.app/" target="_blank" /> */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "TailwindCSS", "..."].map((tech, key) => (
                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors my-4">
                                View Projects --
                            </a>
                        </div>
                    </div>

                    {/* Fourth project i.e five clock*/}

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">25+5 <span className="text-purple-500">Clock </span> App</h3>
                        <img src={Clock} alt="clock pic" className="w-70 h-48 ml-20"/>
                        <p className="text-white mb-4">An app that helps to time events and beeps when the time is up</p>
                        {/* <a href="https://random-quotes-app.netlify.app/" target="_blank" /> */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "CSS", "..."].map((tech, key) => (
                                <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors my-4">
                                View Projects --
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}