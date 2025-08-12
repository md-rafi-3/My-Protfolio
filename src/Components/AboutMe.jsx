import React from "react";
import rafiImg from "../assets/ai rafi.jpg"

const AboutMe = () => {
  return (
    <section className="bg-base-100 py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-accent-content mb-6 text-center">About Me</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={rafiImg}
            alt="About me"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div>
          
         <p className="text-gray-400 mb-4 leading-relaxed">
  My journey into programming began with a fascination for how ideas
  transform into tangible, interactive experiences on the web. This
  curiosity quickly evolved into a passion for the MERN stack, where I
  found the tools to build dynamic and robust applications from the
  ground up.
</p>
<p className="text-gray-400 mb-4 leading-relaxed">
  I thrive on the creative process of frontend development—crafting
  clean, intuitive user interfaces with React and bringing them to
  life with modern CSS. At the same time, I enjoy the logical
  challenges of backend development, architecting efficient APIs with
  Node.js and Express, and managing data with MongoDB.
</p>
<p className="text-gray-400 mb-4 leading-relaxed">
  Outside of coding, I'm an avid learner, always exploring new
  technologies and design trends. I also enjoy hiking and
  photography, which help me find new perspectives and recharge my
  creativity. I'm always excited to collaborate on projects that solve
  real-world problems and push the boundaries of what's possible on
  the web.
</p>
<p className="text-gray-400 leading-relaxed">
  My goal is to grow into a developer who not only writes clean and efficient 
  code but also understands the impact of technology on people’s lives. 
  I believe in building applications that are not just functional, but also 
  accessible, inclusive, and delightful to use.
</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
