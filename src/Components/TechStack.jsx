import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import '../App.css'

// Frontend
import htmlLogo from "../assets/logo/html.png";
import cssLogo from "../assets/logo/css.png";
import jsLogo from "../assets/logo/javascript.png";
import reactLogo from "../assets/logo/react.png";
import tailwindLogo from "../assets/logo/tailwind.png";

// Backend
import nodeLogo from "../assets/logo/node js.png";
import expressLogo from "../assets/logo/express.png";
import mongoLogo from "../assets/logo/mongodb.png";

// Tools & Platforms
import gitLogo from "../assets/logo/git.png";
import githubLogo from "../assets/logo/github.png";
import firebaseLogo from "../assets/logo/firebase.png";
import vercelLogo from "../assets/logo/vercel.png";

const techStack = {
  Frontend: [
    { name: "HTML5", icon: htmlLogo },
    { name: "CSS3", icon: cssLogo },
    { name: "JavaScript", icon: jsLogo },
    { name: "React", icon: reactLogo },
    { name: "Tailwind CSS", icon: tailwindLogo },
  ],
  Backend: [
    { name: "Node.js", icon: nodeLogo },
    { name: "Express.js", icon: expressLogo },
    { name: "MongoDB", icon: mongoLogo },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: gitLogo },
    { name: "GitHub", icon: githubLogo },
    { name: "Firebase", icon: firebaseLogo },
    { name: "Vercel", icon: vercelLogo },
  ],
};




export default function TechStackTimeline() {


  
  return (
    <section id="skills" className="py-12">
      <div className="max-w-7xl mx-auto hidden md:block">
        <h2 className="text-3xl font-bold text-center mb-10 text-accent-content">
          My Tech Stack
        </h2>

        <VerticalTimeline>
          {Object.entries(techStack).map(([category, items]) => (
            <VerticalTimelineElement
              key={category}
              className="vertical-timeline-element--work"
              contentStyle={{
                background:"white",
                color: "#000",
                borderRadius: "0.5rem",
                
                
               
              }}
              contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
              iconStyle={{
                background: "#69112f",
                color: "#fff",
               width:"10px",
               height:"10px",
                marginLeft: "-4px", 
                marginTop: "22px",  
              }}
            >
             
               <h3 className="text-xl font-semibold text-[#2b0815] mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center p-4 rounded-lg "
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      
                    />
                    <p className="text-sm font-medium text-[#2b0815]">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
          
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* small device */}
      <div className="max-w-6xl mx-auto px-6 md:hidden block ">
        <h2 className="text-3xl font-bold text-center mb-10 text-accent-content">
          My Tech Stack
        </h2>

        <div className="space-y-12">
          {/* Category Loop */}
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-accent-content mb-6">
                {category.replace(/And/g, " & ")}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center p-4 bg-base-200   rounded-lg shadow hover:shadow-lg transition"
                  >
                    <img src={tech.icon} alt={tech.name} className="h-12 mb-3" />
                    <p className="text-sm font-medium text-accent-content">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
