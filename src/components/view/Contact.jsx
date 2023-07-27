import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1w7624f",
        "template_lwqhtya",
        form.current,
        "wCAqXwkS50apdW470"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="my-16 flex">
      <div className="w-full md:w-3/6 text-white">
        <div>
          <p className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-3 text-green-500">
            Contact Me
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="w-5/6 mx-auto">
          <div className="mb-6">
            <label
              htmlFor="user_name"
              className="block mb-2 font-medium text-purple-500 text-lg"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder=""
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="user_email"
              className="block mb-2 font-medium text-purple-500 text-lg"
            >
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="user_phone"
              className="block mb-2 text-purple-500 text-lg font-medium "
            >
              Contact Number
            </label>
            <input
              type="number"
              name="user_phone"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <p className="text-purple-500 text-lg">Message</p>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="8"
            className="rounded text-gray-900 w-full "
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-3/6 md:block hidden">
        <img
          src="../profile2.png"
          alt="asasas"
          className="xl:w-96 lg:w-80 md:w-64 sm:w-56 w-48 mx-auto my-11"
        />
      </div>
    </div>
  );
};

export default Contact;
