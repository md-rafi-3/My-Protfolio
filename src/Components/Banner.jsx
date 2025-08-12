import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import rafiImg from "../assets/rafi pro.jpg"


export default function Banner() {
  return (
    <section id="home" className="bg-base-300 text-white py-16 h-[90vh] px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8 ">
     
      {/* Left content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-accent-content">
          Hi, I'm <span >Rafi</span>
        </h1>
        <h2 className="text-primary text-2xl font-mono">
          <Typewriter
            words={[ "MERN Stack Developer",
  "Frontend Developer",
  "React Developer",
  "Web Developer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>
        <p className="text-gray-400 max-w-md">
          A passionate developer crafting modern and responsive web applications.
        </p>


        <div className="flex items-center space-x-4">
             {/* Social icons */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-3 rounded-md hover:bg-gray-800"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-3 rounded-md hover:bg-gray-800"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-3 rounded-md hover:bg-gray-800"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center ">
          <a
            href="/path-to-your-resume.pdf"
            download
            className="flex items-center bg-primary text-white hover:bg-pink-500 font-semibold px-5 py-3 rounded-md transition"
          >
            <FaDownload className="mr-2" /> Download Resume
          </a>

         
        </div>
      </div>

      {/* Right image placeholder */}
      <div className="mt-12 md:mt-0 md:w-1/2  flex justify-center">
        
          <img  className="md:w-72 md:h-72 w-60 h-60 rounded-full border-4 border-primary  flex items-center justify-center  text-2xl " src={rafiImg} alt="" />
        
      </div>
    </section>
  );
}
