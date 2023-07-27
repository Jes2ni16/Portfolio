import React from "react";
import { useState } from "react";

function Skills() {
  const [showAll, setShowAll] = useState(false);

  // Example array of objects representing images
  const skills = [
    { name: "Html", url: "./html-logo.png", alt: "html logo" },
    { name: "Css", url: "./css-logo.png", alt: "css logo" },
    {
      name: "JavaScript",
      url: "./javascript-logo.png",
      alt: "Javascript logo",
    },
    { name: "React", url: "./react.png", alt: "React logo" },
    { name: "Laravel", url: "./laravel.png", alt: "Laravel logo" },
    { name: "Php", url: "./php.png", alt: "Php logo" },
    { name: "Node Js", url: "./node.png", alt: "NodeJs Logo" },
    { name: "Bootstrap", url: "./bootstrap.png", alt: "Bootstrap Logo" },
    {
      name: "Tailwind Css",
      url: "./tailwind.png",
      alt: "Tailwind Css Logo",
    },
    { name: "MySql", url: "./mysql.png", alt: "MySql Logo" },
  ];

  const allSkills = skills;

  return (
    <div className="text-white md:my-24 my-10">
      <p className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-5 text-green-500 font-bold">
        Skills
      </p>
      <div className="w-5/6 mx-auto grid grid-cols-3   text-white">
        {!showAll && (
          <>
            {allSkills.slice(0, 6).map((skill) => (
              <div className="mx-auto my-3" key={skill.name}>
                <img
                  src={skill.url}
                  alt={skill.alt}
                  className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 h-10 sm:h-16 md:h-20 lg:h-28 xl:h-32  image-fluid"
                />
                <p className="text-blue-600 text-xl">
                  <strong>{skill.name} </strong>
                </p>
              </div>
            ))}
          </>
        )}
        {showAll &&
          skills.map((skill) => (
            <div className="mx-auto my-3" key={skill.name}>
              <img
                src={skill.url}
                alt={skill.alt}
                className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 h-10 sm:h-16 md:h-20 lg:h-28 xl:h-32  image-fluid"
              />
              <p className="text-blue-600 text-lg">
                {" "}
                <strong>{skill.name} </strong>{" "}
              </p>
            </div>
          ))}
      </div>

      {!showAll && (
        <div className=" w-5/6 mx-auto my-4 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            class="text-purple-700 hover:text-white  border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-500 border-2 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
}

export default Skills;
