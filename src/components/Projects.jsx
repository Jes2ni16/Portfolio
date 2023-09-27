// App.js

import { useState } from "react";
import ReactPaginate from "react-paginate";
import "aos/dist/aos.css";

const items = [
  {
    id: 1,
    title: "Mini Project 1",
    img: "./M-P-1.PNG",
    alt: "Mini PRoject 1 img",
    url: "https://jes2ni16.github.io/MiniProject-1/",
    stak: ["Html", "Css", "Bootstrap"],
  },
  {
    id: 2,
    title: "Mini Project 2",
    img: "./mini2.PNG",
    alt: "Mini PRoject 2 img",
    url: "https://movie-mania-16.vercel.app/",
    stak: ["Tailwind Css", "ReactJs", "Redux", "JavaScript"],
  },
  {
    id: 3,
    title: "Capstone Project",
    img: "./Capstone.PNG",
    alt: "Capstone Project Img",
    url: "https://cake-shop-delights.vercel.app/",
    stak: [
      "Bootstrap",
      "ReactJs",
      "Chackra",
      "NodeJs",
      "ExpressJs",
      "MonggoDB",
    ],
  },
  {
    id: 4,
    title: "Blog App",
    img: "./Blog.PNG",
    alt: "Blog App Img",
    url: "/",
    stak: ["Bootstrap", "Php", "Laravel", "MySql"],
  },
  {
    id: 5,
    title: "todo-lis App",
    img: "./todo-list.PNG",
    alt: "Todo-List App Img",
    url: "https://todo-list-six-rust.vercel.app/",
    stak: ["Bootstrap", "ReactJs", "JavaScript"],
  },
  {
    id: 6,
    title: "quiz-app",
    img: "./quizApp.PNG",
    alt: "quiz app image",
    url: "https://quiz-app-peach-seven.vercel.app/",
    stak: ["Css", "ReactJs", "JavaScript"],
  },
  {
    id: 7,
    title: "tic-tac-toe",
    img: "./tic-tac-toe.PNG",
    alt: "tic-tac-toe game image",
    url: "https://tic-tac-toe-wheat-one.vercel.app/",
    stak: ["Tailwind Css", "ReactJs", "JavaScript"],
  },
];

const App = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  console.log(currentItems);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };
  return (
    <div className="w-full text-white  md:mt-24 mt-10">
      <p className="text-center text-2xl md:text-3xl lg:text- 4xl xl:text-6xl mb-10 text-orange-600">
        <strong>Projects</strong>
      </p>
      <div className="flex gap-2 md:gap-12 xl:gap-32  justify-center">
        {currentItems.map((item, index) => (
          <div
            className=" p-5"
            key={index}
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
            data-aos-delay={index * 100}
          >
            <div className="transition-transform transform hover:-translate-y-5 ">
              <a
                href={item.url}
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-36 sm:w-40 md:w-48 lg:w-64 xl:w-80 h-16 sm:h-20 md:h-32 lg:h-48 xl:h-60 image-fluid"
                />
                <p className="text-sm md:text-xl lg:text-2xl xl:text-3xl mb-5 font-bold text-orange-600">
                  {item.title}
                </p>
                <p className="md:grid grid-cols-3 hidden">
                  {item.stak.map((staks, index) => (
                    <span key={index} className=" ">
                      #{staks}
                    </span>
                  ))}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        pageLinkClassName="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-900 sm:text-size-sm"
        containerClassName=" pagination flex gap-4 justify-center md:my-16 my-5 "
        previousClassName="page-previous text-orange-700 hover:text-white border-2 border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-900"
        nextClassName="page-next text-orange-700 hover:text-white border-2 border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-900"
      />
    </div>
  );
};

export default App;
