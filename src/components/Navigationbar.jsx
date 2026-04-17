import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    // Add smooth transition effect
    root.style.transition = "background-color 0.5s, color 0.5s";

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    if (window.location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/";
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex-1">
          <button
            onClick={() => handleNavClick("home")}
            className="relative group"
          >
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
              Jikku's Portfolio
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 md:gap-6">
          <ul className="flex gap-4 md:gap-6 text-sm md:text-base">
            <li>
              <button
                onClick={() => handleNavClick("home")}
                className="relative group"
              >
                <span className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-yellow-500 after:to-purple-600 after:transition-all after:duration-300 group-hover:after:w-full cursor-pointer">
                  Home
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("experience")}
                className="relative group"
              >
                <span className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-yellow-500 after:to-purple-600 after:transition-all after:duration-300 group-hover:after:w-full cursor-pointer">
                  Experience
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("projects")}
                className="relative group"
              >
                <span className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-yellow-500 after:to-purple-600 after:transition-all after:duration-300 group-hover:after:w-full cursor-pointer">
                  Projects
                </span>
              </button>
            </li>
            <li>
              <Link
                to="public\Abubakar Hadziq Alaydrus_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <span className="px-3 py-2 bg-gradient-to-r from-yellow-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105">
                  Resume
                </span>
              </Link>
            </li>
          </ul>

          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>

          <button
            onClick={toggleTheme}
            className="relative w-12 h-6 rounded-full bg-gradient-to-r from-yellow-500 to-purple-600 p-1 transition-all duration-500 focus:outline-none"
            aria-label="Toggle dark mode"
          >
            <div
              className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-500 ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>

            {/* Sun Icon */}
            <svg
              className={`absolute left-1 top-1 w-4 h-4 text-white transition-opacity duration-300 ${
                theme === "light" ? "opacity-100" : "opacity-0"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z"
                clipRule="evenodd"
              />
            </svg>

            {/* Moon Icon */}
            <svg
              className={`absolute right-1 top-1 w-4 h-4 text-white transition-opacity duration-300 ${
                theme === "dark" ? "opacity-100" : "opacity-0"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="relative w-10 h-5 rounded-full bg-gradient-to-r from-yellow-500 to-purple-600 p-1 transition-all duration-500 focus:outline-none"
            aria-label="Toggle dark mode"
          >
            <div
              className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-md transition-transform duration-500 ${
                theme === "dark" ? "translate-x-5" : "translate-x-0"
              }`}
            ></div>
          </button>

          <button
            onClick={toggleMobileMenu}
            className="relative w-8 h-8 flex flex-col items-center justify-center"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full mt-1.5 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full mt-1.5 transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-t border-white/20 dark:border-gray-700/50">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => handleNavClick("home")}
              className="w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-white/20 dark:hover:bg-gray-900/20 rounded-lg transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("experience")}
              className="w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-white/20 dark:hover:bg-gray-900/20 rounded-lg transition-colors duration-300"
            >
              Experience
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className="w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-white/20 dark:hover:bg-gray-900/20 rounded-lg transition-colors duration-300"
            >
              Projects
            </button>
            <Link
              to="public\Abubakar Hadziq Alaydrus_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left py-3 px-4 bg-gradient-to-r from-yellow-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
