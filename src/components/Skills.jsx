import React from "react";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    Aos.init();
  }, []);
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
      <p className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-5 text-orange-600 font-bold">
        Skills
      </p>
      <div className="w-5/6 mx-auto grid grid-cols-3   text-white">
        {!showAll && (
          <>
            {allSkills.slice(0, 6).map((skill, index) => (
              <div
                className="mx-auto my-8"
                key={skill.name}
                data-aos="fade-down"
                data-aos-easing="ease-in-sine"
                data-aos-duration="400"
                data-aos-delay={index * 100}
              >
                <img
                  src={skill.url}
                  alt={skill.alt}
                  className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 h-10 sm:h-16 md:h-20 lg:h-28 xl:h-32  image-fluid"
                />
                <p className="text-xl text-center">
                  <strong>{skill.name} </strong>
                </p>
              </div>
            ))}
          </>
        )}
        {showAll &&
          skills.map((skill, index) => (
            <div
              className="mx-auto my-8"
              key={skill.name}
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
              data-aos-duration="400"
              data-aos-delay={index * 100}
            >
              <img
                src={skill.url}
                alt={skill.alt}
                className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 h-10 sm:h-16 md:h-20 lg:h-28 xl:h-32  image-fluid"
              />
              <p className=" text-xl text-center">
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
            class="text-orange-700 hover:text-white border-2 border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-900"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
}

export default Skills;
