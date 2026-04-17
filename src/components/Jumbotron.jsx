import React from "react";

const Jumbotron = () => {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden transition-all duration-500"
    >
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-yellow-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="text-center space-y-6 max-w-4xl">
          <div className="inline-block">
            <span className="text-lg md:text-xl text-gray-700 dark:text-gray-300 bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 dark:border-gray-700/50">
              Hello there 👋
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white leading-tight">
            I'm{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Abubakar Hadziq Alaydrus
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Informatics Engineering graduate with experience in software
            development and operations. Currently pursuing a career in product
            development with hands-on experience in documentation, user flows,
            wireframing, and basic testing (UAT). Strong interest in roles where
            technology, user needs, and business goals align to build meaningful
            products.
          </p>

          {/* Quick Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-purple-600/10 dark:from-yellow-500/20 dark:to-purple-600/20 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
              Product Development
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-purple-600/10 dark:from-yellow-500/20 dark:to-purple-600/20 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
              User Experience
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-purple-600/10 dark:from-yellow-500/20 dark:to-purple-600/20 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
              Software Engineering
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              View Projects
            </button>
            <button
              onClick={() => {
                const connectSection = document.getElementById("connect");
                if (connectSection) {
                  connectSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm text-gray-800 dark:text-white font-medium rounded-full border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-900/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
