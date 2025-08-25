import Type from "../Type.jsx"
export const Home = () => {
    return(
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl text-blue-400 font-bold mb-6">
                    Hi there! <span className="wave" role="img" aria-labelledby="wave"> 👋🏻 </span> 😃
                </h1>
                <p className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent leading-right">
                    My name is Gift Udofiah
                </p>
                {/* <p className="text-white text-lg mb-8 max-w-lg mx-auto">
                    I am a frontend developer that builds beautiful and responsive webpages and web applications that make user interaction flawless.
                </p> */}
                <div className="p-20 text-semibold text-3xl">
                    <Type />
                </div>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overfow-hidden hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(128, 0, 128, 0.4)]">
                        View Projects
                    </a>
                    <a href="#contacts" className="border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(128, 0, 128, 0.4)] hover:bg-purple-500/10">
                        Contact Me
                    </a>
                </div>
                
            </div> 
        </section>
    )
}