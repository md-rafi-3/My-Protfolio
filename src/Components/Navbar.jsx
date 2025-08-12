import React, { useState, useEffect } from "react";
import { FaBars, FaCode, FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", to: "/#home", id: "home" },
    { name: "About", to: "/#about", id: "about" },
    { name: "Skills", to: "/#skills", id: "skills" },
    { name: "Projects", to: "/#projects", id: "projects" },
    { name: "Contact", to: "/#contact", id: "contact" },
  ];

  // Scroll with offset (for fixed navbar height)
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + 90; // 90px offset for navbar height

      let current = "home";

      for (const section of navLinks) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-primary text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-5 md:px-0 py-3 flex justify-between items-center">
        {/* Logo */}
        <HashLink
          smooth
          to="/#home"
          scroll={(el) => scrollWithOffset(el)}
          className="btn-ghost btn bg-primary text-white hover:bg-primary border-none transition-none"
        >
          <h1 className="text-2xl font-bold flex items-center gap-1">
            <FaCode /> Rafi
          </h1>
        </HashLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <HashLink
                smooth
                to={link.to}
                scroll={(el) => scrollWithOffset(el)}
                className={`cursor-pointer transition duration-200 hover:text-pink-300 ${
                  activeSection === link.id
                    ? "text-pink-300 font-semibold border-b-2 border-pink-300 pb-1"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </HashLink>
            </li>
          ))}

          {/* Dark Mode Button */}
          <li>
            <DarkMode />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-5">
          <DarkMode />
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
              <HashLink
                smooth
                to={link.to}
                scroll={(el) => scrollWithOffset(el)}
                className={`block cursor-pointer transition duration-200 hover:text-pink-300 ${
                  activeSection === link.id
                    ? "text-pink-300 font-semibold border-l-4 border-pink-300 pl-2"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
