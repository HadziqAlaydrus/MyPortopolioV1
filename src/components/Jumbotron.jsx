import React from "react";

const Jumbotron = () => {
  return (
    <section className="relative h-screen transition-all duration-500">
      {/* Blurred Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-yellow-500 dark:from-yellow-600 to-purple-500 dark:to-purple-600 opacity-80 filter blur-3xl transition-all">
      </div>

      {/* Content above the blur */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full ">
        <h1 className="text-xl text-black dark:text-white transition-all duration-500">Hello there 👋. I'm</h1>
        <h1 className="text-4xl font-bold text-black dark:text-white transition-all duration-500">Abubakar Hadziq Alaydrus</h1>
      </div>
    </section>
  );
};

export default Jumbotron;
