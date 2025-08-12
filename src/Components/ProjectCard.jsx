import React from "react";
import { FiGithub, FiExternalLink, FiBookmark } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router";

// PortfolioProjects.jsx
// React + Tailwind CSS + DaisyUI + react-icons
// Single-file component that renders responsive project cards like your screenshot.
// Usage: import PortfolioProjects from './PortfolioProjects';
// Requires Tailwind + DaisyUI configured in your project.

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-xl  bg-base-200 shadow-lg overflow-hidden">
      <div className="h-44 bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-30"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
        )}
      </div>

      <div className="p-5 bg-transparent text-white border-t border-[rgba(255,255,255,0.03)]">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-accent-content">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-3 line-clamp-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech?.map((t) => (
                <span
                  key={t}
                  className="badge badge-sm badge-outline rounded-full text-xs px-3 py-1 bg-neutral-800 border-0 ring-1 ring-white/6 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

         
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          
          <a
            href={project.demo || '#'}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full overflow-hidden shadow-inner"
            aria-label={`Live demo for ${project.title}`}
          >
            <Link to={`/project-details/:${project._id}`} className="btn btn-block btn-primary text-white flex items-center justify-center">
              <FiExternalLink className="mr-2" />
              <span className="text-sm font-medium">View Details</span>
            </Link>
          </a>

          <div className="flex gap-2">
            {project.repo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost bg-black text-white btn-sm rounded-md px-3"
                aria-label={`Live Preview ${project.title}`}
              >
                <TbWorld />
              </a>
            )}

            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost bg-black text-white btn-sm rounded-md px-3"
                aria-label={`Repo for ${project.title}`}
              >
                <FiGithub />
              </a>
            )}

            
          </div>
        </div>
      </div>
    </article>
  );
}


