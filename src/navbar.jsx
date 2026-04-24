import React, { useEffect, useState } from 'react'
import './App.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="flex items-center justify-center text-white">
            <nav className={`flex items-center justify-between fixed z-10 left-1/2 w-[95%] lg:w-[85%] -translate-x-1/2 bg-gray-800/95 py-4 px-10 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 ease-out ${isScrolled ? 'top-0' : 'top-5'}`}>
                <div className="navbar-logo">
                    <h1 className='text-2xl text-amber-600 font-extrabold'>Umair<span className="text-white">.Dev</span></h1>
                </div>
                <ul className="hidden lg:flex space-x-4 text-md text-gray-300 ">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div>
                    <a href='https://www.linkedin.com/in/muhammad-umair-20a5462ab/' target='_blank' className="bg-amber-500/20 border border-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition duration-300">Get in Touch</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;