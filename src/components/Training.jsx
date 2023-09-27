import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "./Slider";

function Training() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="text-white md:my-24 my-8  w-full mx-auto ">
      <p className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-10 text-orange-600 font-bold">
        Trainings
      </p>
      <div className="flex justify-center gap-5 md:gap-32 sm:gap-8 ">
        <Slider />
      </div>
    </div>
  );
}

export default Training;
