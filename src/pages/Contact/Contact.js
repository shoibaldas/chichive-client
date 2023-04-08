import React, { useState } from "react";
import Swal from "sweetalert2";
import { AiFillCloseCircle } from "react-icons/ai";
import img from "../../assets/contact.svg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!name.trim()) {
      errors["name"] = "Name is required";
    }
    if (!email.trim()) {
      errors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors["email"] = "Email is invalid";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your message has been sent.",
    });
    setShowAlert(true);
    // Clear form input values
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto flex items-center">
      <div className="md:w-1/2 hidden md:flex justify-center">
        <img src={img} className="w-full lg:max-w-md" alt="" />
      </div>
      <div className="w-11/12 md:w-1/2">
        <form
          className="max-w-lg w-full bg-gray-50 rounded-lg shadow-lg p-12 mx-auto my-10 sm:my-20 md:my-32 lg:my-42"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Get in touch
          </h2>
          <div className="mb-6">
            <label
              className="block font-bold mb-2 text-gray-800"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none bg-gray-100 border rounded-lg py-2 px-4 w-full leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="mb-6">
            <label
              className="block font-bold mb-2 text-gray-800"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none bg-gray-100 border rounded-lg py-2 px-4 w-full leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label
              className="block font-bold mb-2 text-gray-800"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none bg-gray-100 border rounded-lg py-2 px-4 w-full leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Write your message here"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            type="submit"
          >
            Send
          </button>
          {showAlert && (
            <div className="mt-4">
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline">
                  {" "}
                  Your message has been sent.
                </span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-4 cursor-pointer">
                  <AiFillCloseCircle
                    onClick={() => setShowAlert(false)}
                  ></AiFillCloseCircle>
                </span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
