import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    var data = {
      user_name: name,
      user_email: email,
      user_phone: contact,
      message: message,
    };
    emailjs
      .send("service_1w7624f", "template_lwqhtya", data, "wCAqXwkS50apdW470")
      .then(
        (result) => {
          alert("Successfully Send");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setContact("");
    setMessage("");
  };

  return (
    <div className="mt-14 flex">
      <div className="w-3/6 md:block hidden">
        <img
          src="../profile2.png"
          alt="asasas"
          className="xl:w-96 lg:w-80 md:w-64 sm:w-56 w-48 mx-auto my-11"
        />
      </div>
      <div className="w-full md:w-3/6 text-white">
        <div>
          <p className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-3 text-orange-500">
            Contact Me
          </p>
        </div>
        <form onSubmit={sendEmail} className="w-5/6 mx-auto">
          <div className="mb-6">
            <label
              htmlFor="user_name"
              className="block mb-2 font-medium  text-lg"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              value={name}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="user_email"
              className="block mb-2 font-medium  text-lg"
            >
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={email}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="user_phone"
              className="block mb-2  text-lg font-medium "
            >
              Contact Number
            </label>
            <input
              type="number"
              name="user_phone"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <p className=" text-lg">Message</p>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="8"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded text-gray-900 w-full "
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
