import projects from "../data/projects.json";
import { useState, useEffect } from "react";
import { ArrowLeft } from 'lucide-react';


export default function About() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Sequentially show each card with a delay
    projects.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, 300 * index);
    });
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center text-white text-3xl p-3">
        <button
          onClick={() => (window.location.href = window.location.origin)}
          className="w-10 h-9 flex items-center bg-gray-200 rounded-lg p-3 hover:bg-gray-300  mr-2"
          aria-label="Back"
        >
          <ArrowLeft className="text-black" size={24} />
        </button>

        {/* Title */}
        <span>Projects</span>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col justify-center items-center p-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-gray-200 rounded-lg shadow-md p-5 mb-5 md:w-3/5 transform transition-all duration-500 ease-out ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>

            {/* Description */}
            <p className="text-gray-700 mt-3">
              {project.description.split("#").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            {/* Tech Stack */}
            <div className="mt-4">
              <p className="text-gray-600 text-sm font-semibold">Tech Stack:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.split(", ").map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mt-4 flex gap-4">
              {project.link !== "N/A" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
