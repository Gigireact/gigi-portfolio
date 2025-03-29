export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">Random Quotes App</h3>
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
                </div>
            </div>
        </section>
    )
}