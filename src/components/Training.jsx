import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Training() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="text-white md:my-24 my-10">
      <div>
        <p
          className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-5 text-green-500"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <strong>Trainings</strong>
        </p>
      </div>

      <div
        className="w-3/4   mx-auto flex items-center rounded my-5 "
        data-aos="slide-left"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
      >
        <div className="w-1/6 h-11 sm:h-20 md:h-24 lg:h-28 xl:h-32  bg-white rounded">
          <img
            src="./kodego-logo.png"
            alt="kodego-logo"
            className=" mb-2my-3 mt-2 image-fluid h-11 sm:h-16 md:h-18 lg:h-20 xl:h-24 mx-auto"
          />
        </div>
        <div className="w-4/6">
          <p className="mx-auto text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Kodego BootCamp
          </p>
        </div>
      </div>
      <div
        className=" w-3/4  mx-auto flex items-center rounded my-5 "
        data-aos="slide-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
      >
        <div className="w-1/6 bg-white h-11 sm:h-20 md:h-24 lg:h-28 xl:h-32 rounded">
          <img
            src="./Udemy-Emblem.png"
            alt="kodego-logo"
            className=" my-1 h-8 mt-2 sm:h-16 md:h-24 lg:h-26 xl:h-28 mx-auto"
          />
        </div>
        <div className="w-4/6">
          <p className="mx-auto text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Online Tutorials
            <p className="font-normal">- Youtube</p>
            <p className="font-normal">- Udemy</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Training;
