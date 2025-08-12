import React from "react";

const ProjectDetails = ({ project }) => {
  if (!project) {
    return (
      <div className="p-8 text-center text-gray-500">
        Project data not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
      ) : null}

      <p className="text-lg mb-6">{project.description}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="flex flex-wrap gap-3">
          {project.tech.map((tech, idx) => (
            <li
              key={idx}
              className="bg-pink-300 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside space-y-1">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-4">
        {project.demo && project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded transition"
          >
            Live Demo
          </a>
        )}

        {project.repo && project.repo !== "#" && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded transition"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
