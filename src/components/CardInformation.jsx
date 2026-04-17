import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";
import BackgroundGradient from "./BackgroundGradient";

const CardInformation = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/HadziqAlaydrus",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "from-gray-800 to-gray-900",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abubakarhadziqalaydrus/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Email",
      url: "mailto:hadziq.alaydrus361@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      color: "from-red-500 to-red-700",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hadziqalaydrus",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "from-pink-500 to-purple-600",
    },
  ];

  const skills = {
    "Product Management": [
      "Product Documentation",
      "Mini PRD",
      "Wireframing",
      "User Flow",
      "Prioritization (RICE, MoSCoW)",
      "UAT/Test Case Writing",
    ],
    Frontend: [
      "ReactJS",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Vite",
      "Responsive Design",
    ],
    Backend: [
      "Node.js",
      "ExpressJS",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Authentication",
    ],
    Tools: ["Git & GitHub", "VS Code", "Figma", "Postman", "Docker", "CI/CD"],
  };

  const [sectionRef, sectionVisible] = useScrollAnimation();

  return (
    <section
      id="connect"
      ref={sectionRef}
      className={`px-4 md:px-8 lg:px-20 py-16 md:py-24 transition-all duration-1000 ${
        sectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <BackgroundGradient />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Explore my technical expertise and connect with me through various
            platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Links Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Connect With Me
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  to={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative backdrop-blur-md bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/50 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${social.color}`}
                      >
                        <div className="text-white">{social.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">
                          {social.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Visit profile
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Skills & Tech Stack
            </h3>

            <div className="space-y-6">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={index} className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-purple-600/10 dark:from-yellow-500/20 dark:to-purple-600/20 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:from-yellow-500/20 hover:to-purple-600/20 dark:hover:from-yellow-500/30 dark:hover:to-purple-600/30 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 backdrop-blur-md bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/50 rounded-2xl px-6 py-4">
            <p className="text-gray-700 dark:text-gray-300">
              Interested in collaboration? Let's build something amazing
              together!
            </p>
            <a
              href="mailto:hadziq.alaydrus361@gmail.com"
              className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardInformation;
