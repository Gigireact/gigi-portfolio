import Techstack from "../Techstack";
import { ImPointRight } from "react-icons/im";

export const About = () => {

    // const frontendSkills = [
    //     "React",
    //     "Javascript", 
    //     "TailwindCSS", 
    //     "Typescript",
    //     "HTML",
    //     "CSS",
    //     "Bootstrap",
    //     "Supabase",
    //     "Web3"
    // ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-400 mb-6 text-2xl">
                        A passionate developer with keen attention to detail in building web apps and creating solutions to coding problems
                    </p>
                    <div className="grid grid-cols-1 gap-6"> {/* md:grid-cols-2 */}
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-3xl mb-4"> Proficient skills</h3>
                            <Techstack />
                            {/* <div className="flex flex-wrap gap-12">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-purple-500/10 text-purple-500 py-3 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className=" mb-8 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
                            Education <span className="text-white">🎓</span>
                        </h3>
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
                        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
                            Work Experience <span className="text-white">💼</span>
                        </h3>
                        <div className="space-y-4 text-white">
                            <div>
                                <ImPointRight style={{marginTop: "10px"}}/> <h4 className="font-semibold text-xl">Frontend Developer at Data Access Technology Services (2022-2024)</h4>
                                <p>•  Assisted in building frontend components and integrating REST APIs</p>
                                <p>•  Participated in code reviews, debugging, and refactoring sessions to maintain code quality and performance</p>
                                <p>•  Used version control tools like Git and platforms like GitHub for collaboration and source code management.</p>
                            </div>
                            <div>
                                <ImPointRight style={{marginTop: "10px"}}/><h4 className="font-semibold text-xl">Intern at Petroleum Training Institute, ICT Center (2022)</h4>
                                <p>•  Strong hardware and software troubleshooting and diagnostic ability.</p>
                                <p>•  Solid understanding of computer hardware and OS functionality.</p>
                                <p>•  Knowledge of common cybersecurity threats and how to prevent them.</p>
                                <p>•  Basic networking and configuration skills.</p>
                                <p>•  Hands-on experience with system setup, maintenance, and user support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}