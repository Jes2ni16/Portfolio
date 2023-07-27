// App.js

import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

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
    url: "https://moviemania-rosanno.vercel.app/",
    stak: ["Html", "Tailwind", "React", "Redux"],
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
    url: "/",
    stak: ["Bootstrap", "React"],
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
    <div className="w-5/6 mx-auto text-white p-3 md:mt-24 mt-10">
      <p className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-10 text-green-500">
        <strong>Projects</strong>
      </p>
      <div className="flex gap-24">
        {currentItems.map((item) => (
          <div className="hover:bg-slate-600 ">
            <a href={item.url}>
              <img
                src={item.img}
                alt=""
                className="w-36 sm:w-32 md:w-24 lg:w-32 xl:w-80 h-16 sm:h-16 md:h-20 lg:h-28 xl:h-60 image-fluid"
              />
              <p className="text-sm md:text-xl lg:text-2xl xl:text-3xl mb-5 font-bold text-red-500">
                {item.title}
              </p>
              <p className="md:grid grid-cols-3 hidden">
                {item.stak.map((staks) => (
                  <span className="text-blue-600 ">#{staks}</span>
                ))}
              </p>
            </a>
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageLinkClassName="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        containerClassName="flex gap-4 justify-center md:my-16 my-5"
        previousClassName="text-purple-700 hover:text-white border-2 border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        nextClassName="text-purple-700 hover:text-white border-2 border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
      />
    </div>
  );
};

export default App;
