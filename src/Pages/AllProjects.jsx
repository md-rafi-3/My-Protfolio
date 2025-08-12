import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectCard from "../Components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Blood Donation App",
    description: "A MERN stack app to manage blood donation requests and donors.",
    image: "https://via.placeholder.com/400x250",
    github: "https://github.com/username/blood-donation",
    live: "https://blood-donation.vercel.app",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern personal portfolio with dark mode and animations.",
    image: "https://via.placeholder.com/400x250",
    github: "https://github.com/username/portfolio",
    live: "https://portfolio.vercel.app",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description: "Full-stack e-commerce store with cart, checkout, and payment gateway.",
    image: "https://via.placeholder.com/400x250",
    github: "https://github.com/username/ecommerce",
    live: "https://ecommerce.vercel.app",
    tech: ["React", "Express", "Stripe API", "MongoDB"],
  },
];

const AllProjects = () => {
  return (
    <section className=" py-20 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-accent-content mb-12">
          All Projects
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
           <ProjectCard project={project} key={project.title}></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
