export const About = () => {

    const frontendSkills = [
        "React",
        "Javascript", 
        "TailwindCSS", 
        "Typescript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Firebase auth",
        "Web3"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-white mb-6">
                        A passionate developer with keen attention to detail in building web apps and creating solutions to coding problems
                    </p>
                    <div className="grid grid-cols-1 gap-6"> {/* md:grid-cols-2 */}
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Proficient skills</h3>
                            <div className="flex flex-wrap gap-12">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education 🎓</h3>
                        <ul className="list-disc list-inside text-white space-y-2">
                            <li>
                                <strong>B.Sc in Computer Science</strong> - FUPRE (2019-2024)
                            </li>
                            <li>
                                Relevant Coursework: Data Structure, Web Development, Cloud Computing
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience 💼</h3>
                        <div className="space-y-4 text-white">
                            <div>
                                <h4 className="font-semibold">Software Engineer at ABC Corp (2020-present)</h4>
                                <p>Developed and maintained microservices for cloud based applications</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Intern at DEF Startups (2019-2020)</h4>
                                <p>Assisted in building frontend components and integrating REST APIs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}