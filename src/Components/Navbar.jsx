import React, { useState, useEffect } from "react";
import { FaBars, FaCode, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.href.replace("#", ""));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-primary text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-5 md:px-0 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold flex items-center gap-1"><FaCode />Rafi</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-pink-300 font-semibold border-b-2 border-pink-300 pb-1"
                    : "hover:text-pink-300"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Dark Mode Button */}
          <li>
            <DarkMode></DarkMode>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-5">
          {/* Dark Mode Button for Mobile */}
          <DarkMode></DarkMode>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-pink-800 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block transition duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-pink-300 font-semibold border-l-4 border-pink-300 pl-2"
                    : "hover:text-pink-300"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
