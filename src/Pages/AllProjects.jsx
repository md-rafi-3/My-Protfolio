import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectCard from "../Components/ProjectCard";
import { useLoaderData } from "react-router";



const AllProjects = () => {
    const projects=useLoaderData()
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
