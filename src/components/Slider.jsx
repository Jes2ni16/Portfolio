import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import "swiper/css";
import "aos/dist/aos.css";
import Aos from "aos";

const Slider = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const trainings = [
    {
      image: "./kodego-screenshot.PNG",
      title: "KodeGo BootCamp",
      about: "Full-Stack Web Development",
      link: "https://assets.kodego.ph/public/isa/rBgoWpd99jKA68wX3NGdh0REXXI583GYsYAUNkeL.pdf",
    },
    {
      image: "./php-certificate.jpg",
      title: "Udemy",
      about: "PHP and MYSQL",
      link: "https://www.udemy.com/certificate/UC-4b93e569-e4b8-4f42-a751-08dc11158f4e/",
    },
    {
      image: "./FCC-JS-certificate.PNG",
      title: "FreeCodeCamp",
      about: "JavaScript Algorithms and Data Structures",
      link: "https://www.freecodecamp.org/certification/fcc5042052a-41b6-4ba2-ba1e-9229d135e9b1/javascript-algorithms-and-data-structures",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {trainings.map((item, index) => (
        <SwiperSlide
          className="flex justify-center transition-transform transform hover:-translate-y-5 p-5"
          key={index}
        >
          <div
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
            data-aos-delay={index * 100}
          >
            <a
              href={item.link}
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.image}
                alt=""
                className="w-36 sm:w-40 md:w-48 lg:w-64 xl:w-80 h-16 sm:h-20 md:h-32 lg:h-48 xl:h-60 image-fluid"
              />
              <p className="md:text-xl lg:text-2xl xl:text-3xl mb-5 font-bold text-orange-600">
                {item.title}
              </p>
              <p className="text-sm md:text-lg lg:text-xl xl:text-2xl max-w-fit">
                {item.about}
              </p>
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
