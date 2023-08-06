import React from "react";
import Navbar from "../Navbar";
import Design from "../config/particles-config";

function About() {
  return (
    <div className="w-screen text-white">
      <div className="w-4/6 mx-auto my-20 flex">
        <div className="w-3/6 md:block hidden">
          <img
            src="../profile2.png"
            alt=""
            className="xl:w-96 lg:w-80 md:w-64 sm:w-56 w-48"
          />
        </div>
        <div className="w-full md:w-3/6 my-18">
          <h1 className="text-6xl text-orange-500 text-center my-9">
            About me!
          </h1>
          <p className="text-2xl">
            Good Day! My Visitor, I'm Jestoni Brion aspiring Software Engineer.
            I have completed and get the Certificate of KodeGo BootCamp also I
            took some online tutorials like Udemy,FreecodeCamp and Programming
            with Mosh. I have the Skills listed on the Home page that qualify
            being a Full-Stack Web Developer. Also I have the List of My
            projects in the Home page. I am Passionate to become the most
            valuable web developer.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
