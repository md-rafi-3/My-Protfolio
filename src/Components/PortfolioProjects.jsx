import React from 'react';
import ProjectCard from './ProjectCard';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';


const PortfolioProjects = () => {
     const projects = [
    {
      title: 'Task Management App',
      description:
        'Collaborative project management tool with real-time updates and team collaboration features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
      demo: '#',
      repo: '#',
      image: null,
    },
    // Add more projects as needed
  ];
    return (
       <section id='projects' className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-accent-content text-center mb-6">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title}></ProjectCard>
        ))}
      </div>

      <div className='flex justify-center items-center mt-10'>
        <Link to="/all-projects" className='btn  btn-outline border-primary hover:bg-primary hover:text-white'>View More <FaArrowRight /></Link>
      </div>
    </section>
    );
};

export default PortfolioProjects;