import React from "react";

const CardProject = () => {
  return (
    <section className="p-20 ">
      <div className="my-24">
        <h2 className="text-gray-700 dark:text-gray-300 text-left mb-6 text-6xl">
          Portopolio
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl text-justify text-xl">
          This is a side project i'm working on. I work on this project when i
          get stuck, confused about what to do, and when i want to learn a tool
          or technology. but apart from that there are also project that worked
          on when i was taking certification.
        </p>
      </div>
      <div className="p-10 border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex gap-2">
          <div className="p-2 bg-yellow-300 dark:bg-yellow-600  rounded-md shadow-md">
            <button>ReactJS</button>
          </div>
          <div className="p-2 bg-yellow-300 dark:bg-yellow-600  rounded-md shadow-md">
            <button>ExpressJS</button>
          </div>
          <div className="p-2 bg-yellow-300 dark:bg-yellow-600  rounded-md shadow-md">
            <p>Tailwind</p>
          </div>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
    </section>
  );
};

export default CardProject;
