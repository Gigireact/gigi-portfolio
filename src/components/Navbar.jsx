import { useEffect } from "react"
import { FaHome } from "react-icons/fa";       // Home Icon
import { AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "" 
    }, [menuOpen])
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgb(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* logo here */}
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                         Gi<span className="text-purple-500">ft</span>
                    </a>
                    {/* mobile menu */}
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="flex gap-2 text-gray-300 hover:text-white transition-colors">
                            <FaHome style={{ marginTop: "2px" }} size={20} />Home
                        </a>
                        <a href="#projects" className="flex gap-2 text-gray-300 hover:text-white transition-colors">
                            <AiOutlineFundProjectionScreen style={{ marginTop: "2px" }} size={20} /> Projects
                        </a>
                        <a href="#about" className="flex gap-2 text-gray-300 hover:text-white transition-colors">
                            <AiOutlineUser style={{ marginTop: "2px" }} size={20} /> About
                        </a>
                        <a href="#contacts" className="flex gap-2 text-gray-300 hover:text-white transition-colors">
                            <MdContactMail style={{ marginTop: "2px" }} size={20} />Contacts
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}