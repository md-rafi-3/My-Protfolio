import React from 'react';
import ProjectCard from './ProjectCard';

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
       <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-neutral-900 mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard project={project}></ProjectCard>
        ))}
      </div>
    </section>
    );
};

export default PortfolioProjects;