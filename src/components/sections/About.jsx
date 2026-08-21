import Techstack from "../Techstack";
import { ImPointRight } from "react-icons/im";
import Resume from "../../Resume.pdf";
import Resume2 from "../../GIFT UDOFIAH resume real.pdf";
import directface from "../../assets/directface1.png"

export const About = () => {

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-400 mb-6 text-2xl">
                        I'm a frontend developer passionate about building modern, responsive web applications with clean design and great user experiences. I specialize in React, TypeScript, and Tailwind CSS, while expanding into backend development to become a full-stack engineer.                    </p>
                   <div className="flex justify-center items-center">
                    <img
                        src={directface}
                        alt="Gift Udofiah"
                        className="w-72 h-72 md:w-92 md:h-92 object-cover rounded-full border-4 border-purple-500 shadow-xl"
                    />
                    </div>
                    <div className="grid grid-cols-1 gap-6"> {/* md:grid-cols-2 */}
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-3xl mb-4"> Proficient skills</h3>
                            <Techstack />
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
                                <ImPointRight style={{marginTop: "10px"}}/> 
                                <h4  style={{ textShadow: "2px 2px 5px blue" }} className="font-semibold text-xl">Frontend Developer at Data Access Technology Services (2022-2024)</h4>
                                <p>•  I have assisted in building frontend components and integrating REST APIs</p>
                                <p>•  I have participated in code reviews, debugging, and refactoring sessions to maintain code quality and performance</p>
                                <p>•  I made use of version control tools like Git and platforms like GitHub for collaboration and source code management.</p>
                            </div>
                            <div>
                                <ImPointRight style={{marginTop: "10px"}}/>
                                <h4 style={{ textShadow: "2px 2px 5px blue" }} className="font-semibold text-xl">Intern at Petroleum Training Institute, ICT Center (2022)</h4>
                                <p>•  Strong hardware and software troubleshooting and diagnostic ability.</p>
                                <p>•  Solid understanding of computer hardware and OS functionality.</p>
                                <p>•  Knowledge of common cybersecurity threats and how to prevent them.</p>
                                <p>•  Basic networking and configuration skills.</p>
                                <p>•  Experience with system setup, maintenance, and user support.</p>
                            </div>
                             <div>
                                <ImPointRight style={{marginTop: "10px"}}/>
                                <h4 style={{ textShadow: "2px 2px 5px blue" }} className="font-semibold text-xl">Completed a certification course in Freecodecamp (2025)</h4>
                                <p>• I have completed a frontend development libraries certification course in Freecodecamp</p>
                                <div className="flex justify-between justify-center items-center">
                                    <a href="https://www.freecodecamp.org/certification/gift-udofiah/front-end-development-libraries" className="text-purple-400 hover:text-purple-300 transition-colors my-4">
                                        View certificate --
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex justify-center gap-8">
                        <a href={Resume2} className="mt-12 border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(128, 0, 128, 0.4)] hover:bg-purple-500/10">
                            View Resume 1 →
                        </a>
                        <a href={Resume} className="mt-12 border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(128, 0, 128, 0.4)] hover:bg-purple-500/10">
                            View Resume 2 →
                        </a>
                    </div>
                    
                    <div className=" mt-8 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
                            Hobbies <span className="text-white">🎯</span>
                        </h3>
                        <ul className="list-disc list-inside text-white space-y-2">
                            <p style={{ textShadow: "2px 2px 5px blue" }}>Apart from coding, there are some few things I also love to do!</p>
                            <li>
                                Playing the Guitar🎸 and singing
                            </li>
                            <li>
                                Sewing female wears✂️👗
                            </li>
                            <li>
                                Watching movies and learning new things🧐
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}