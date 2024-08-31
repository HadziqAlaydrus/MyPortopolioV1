import React from "react";
import ecoquest from "../assets/ecoquest.png";

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
          <div className="p-2 bg-yellow-400 dark:bg-yellow-400  rounded-md shadow-md">
            <button>ReactJS</button>
          </div>
          <div className="p-2 bg-yellow-400 dark:bg-yellow-400  rounded-md shadow-md">
            <button>ExpressJS</button>
          </div>
          <div className="p-2 bg-yellow-400 dark:bg-yellow-400  rounded-md shadow-md">
            <p>Tailwind</p>
          </div>
        </div>

        <div className="mt-5 w-fit dark:text-white">
          <h1 className="font-bold text-4xl mb-5">EcoQuest</h1>

          <p className="max-w-2xl">
            EqoQuest is a website application that is used for waste management
            waste management for housewives or household assistants. This
            replaces the manual method into a more effective, and efficient
            method.
          </p>
          <img src={ecoquest} alt="" className="max-w-2xl -mt-16" />
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
    </section>
  );
};

export default CardProject;
