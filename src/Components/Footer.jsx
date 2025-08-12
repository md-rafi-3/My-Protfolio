import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side */}
        <p className="text-sm">
          © {new Date().getFullYear()} Rafi. All Rights Reserved.
        </p>
        
        {/* Right Side - Social Links */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
