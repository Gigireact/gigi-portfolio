import emailjs from "emailjs-com";
import { useState } from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Contacts = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm( 
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID, e.target, 
            import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent!")
            setFormData({name: "", email: "", message: ""})
        }).catch(() => alert("Oops! Something went wrong. Please try again"))
    }
    return (
        <section id="contacts" className="min-h-screen flex items-center justify-center py-20">
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent text-center">
                     Get in Touch 
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            value={formData.name}
                            placeholder="Enter name..." 
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                        />
                    </div>
                    <div className="relative">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            value={formData.email}
                            placeholder="example@gmail.com" 
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                        />
                    </div>
                    <div className="relative">
                        <textarea 
                            id="message" 
                            name="message" 
                            required 
                            value={formData.message}
                            rows={5}
                            placeholder="Write a message..." 
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                        />
                    </div>
                    <button type="submit" className="w-full bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(128, 0, 128, 0.4)]">
                        Send Message
                    </button>
                </form>
                <div md={12} className="home-about-social">
                    <h1>FIND ME</h1>
                    <p>Feel free to <span className="text-purple-500">connect </span>with me</p>
                    <ul className="pt-10">
                        <li className="social-icons">
                            <a
                                href="https://github.com/Gigireact"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons">
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://x.com/Gift_udofiah"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons">
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                // href="https://www.linkedin.com/in/soumyajit4419/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons">
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/gift_udofiah"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons">
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}