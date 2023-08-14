import React from "react";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="flex text-white h-full bg-white-100 my-12">
        <div className="4/6  sm:w-1/2   ">
          <div className=" ml-4 md:ml-12 lg:ml-16 xl:ml-20 mt-24 md:mt-36 lg:mt-36 xl:mt-32 ">
            <p className=" text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-orange-500  font-custom ">
              Jestoni Brion
            </p>
            <p className=" text-xl md:text-2xl lg:text-4xl xl:text-5xl mt-5 mx-5 ">
              <Typewriter
                options={{
                  strings: ["Full-Stack Web Developer"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                }}
              />
            </p>
          </div>
          <div className=" ml-8 md:ml-12 lg:ml-16 xl:ml-20 mt-12 md:mt-8 lg:mt-12 xl:mt-20 max-w-3xl">
            <p className=" text-sm md:text-xl lg:text-2xl xl:text-3xl hidden sm:block font-costum">
              In this ever-connected world, I aspire to contribute to a digital
              landscape that empowers users, businesses, and communities. My
              mission is to develop web applications that not only meet the
              functional requirements but also create seamless and unforgettable
              user experiences.
            </p>
          </div>
        </div>

        <div className="w-2/6 sm:w-1/2">
          <div
            className="mx-auto mt-20 flex justify-center"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <img
              src="./profile2.png"
              alt="My Profile Image"
              className="xl:w-96 lg:w-80 md:w-64 sm:w-56 w-48"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
