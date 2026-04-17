import React from "react";
import ecoquest from "../assets/ecoquest.png";
import portfolio from "../assets/portfolio.png";
import useScrollAnimation from "../hooks/useScrollAnimation";
import BackgroundGradient from "./BackgroundGradient";

const CardProject = () => {
  const projects = [
    {
      year: "2025",
      title: "Frigora",
      description:
        "Built Frigora, a web app using ReactJS and ExpressJS for managing frozen food inventory. Integrated Gemini API to generate recipe recommendations based on available ingredients.",
      image: portfolio,
      tags: ["ReactJS", "ExpressJS", "Gemini API", "Tailwind", "Node.js"],
      demoLink: "#",
      githubLink: "#",
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2024",
      title: "Lastorage",
      description:
        "Built Lastorage, a web app using ReactJS and ExpressJS for managing and organizing storage items. Focused on creating a responsive UI and implementing CRUD functionality.",
      image: portfolio,
      tags: ["ReactJS", "ExpressJS", "MongoDB", "Tailwind", "CRUD"],
      demoLink: "#",
      githubLink: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2024",
      title: "Ecoquest",
      description:
        "Built Ecoquest, a web app using ReactJS and ExpressJS to help users track and share eco-friendly actions. Focused on frontend design and user interaction.",
      image: ecoquest,
      tags: ["ReactJS", "ExpressJS", "Tailwind", "Chart.js", "UI/UX"],
      demoLink: "#",
      githubLink: "#",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const [sectionRef, sectionVisible] = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`px-4 md:px-8 lg:px-20 py-16 md:py-24 transition-all duration-1000 ${
        sectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <BackgroundGradient />

      <div className="mb-16 md:mb-24">
        <h2 className="text-gray-800 dark:text-gray-100 text-left mb-4 text-4xl md:text-6xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-justify text-lg md:text-xl leading-relaxed">
          These are projects I've built to solve real-world problems and learn
          new technologies. Each project showcases different aspects of
          full-stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const [cardRef, cardVisible] = useScrollAnimation({
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
          });

          return (
            <div
              key={index}
              ref={cardRef}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                cardVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Year Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 dark:from-yellow-500/30 dark:to-purple-600/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium backdrop-blur-sm">
                  {project.year}
                </span>
              </div>

              {/* Glassmorphism Card */}
              <div className="relative backdrop-blur-md bg-white/10 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 h-full">
                {/* Image Container with Gradient Overlay */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Color Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}
                  ></div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={project.demoLink}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                    <div
                      className={`w-8 h-1 rounded-full bg-gradient-to-r ${project.color}`}
                    ></div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 dark:from-yellow-500/30 dark:to-purple-600/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Stats */}
      <div className="mt-20 text-center">
        <div className="inline-flex flex-wrap justify-center gap-8 backdrop-blur-md bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/50 rounded-2xl px-8 py-6">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
              3+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              Projects Built
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
              2+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              Technologies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardProject;
