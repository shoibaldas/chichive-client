import React, { useState } from "react";
import Swal from "sweetalert2";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdEmail, MdOutlinePhoneAndroid, MdSpeakerNotes } from "react-icons/md";
import { FaUserCircle, FaHome } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Invoice from "../../components/Invoice/Invoice";
import TitleHead from "../../hooks/TitleHead/TitleHead";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const product = useLoaderData();
  TitleHead('Booking');

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
    if (!phone.trim()) {
      errors["phone"] = "Phone is required";
    }
    if (!address.trim()) {
      errors["address"] = "Adress is required";
    }
    // } else if (!/^\d{10}$/.test(phone)) {
    //   errors["phone"] = "Phone number is invalid";
    // }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all required fields correctly.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Booking Successful!",
      text: `Thank you for booking. We will get in touch with you soon.`,
    });
    setShowAlert(true);
    // Clear form input values
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMessage("");
  };

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-5/12 mt-20 md:mt-0 flex justify-center">
        <Invoice product={product}></Invoice>
      </div>
      <div className="w-11/12 md:w-1/2">
        <form
          className="max-w-lg w-full bg-gray-50 rounded-lg shadow-lg p-12 mx-auto my-10 sm:my-20 md:my-32 lg:my-42"
          onSubmit={handleSubmit}
        >
         <div className="mb-6">
            <label
              className="inline-flex items-center font-bold mb-2 text-gray-800"
              htmlFor="name"
            >
              <span className="mr-1 text-indigo-700"><FaUserCircle></FaUserCircle></span>
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
              className="inline-flex items-center font-bold mb-2 text-gray-800"
              htmlFor="email"
            >
              <MdEmail className="mr-1 text-indigo-700"></MdEmail>
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
              className="inline-flex items-center font-bold mb-2 text-gray-800"
              htmlFor="name"
            >
              <MdOutlinePhoneAndroid className="mr-1 text-indigo-700"></MdOutlinePhoneAndroid>
              Phone
            </label>
            <input
              className="appearance-none bg-gray-100 border rounded-lg py-2 px-4 w-full leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div className="mb-6">
            <label
              className="inline-flex items-center font-bold mb-2 text-gray-800"
              htmlFor="name"
            >
              <FaHome className="mr-1 text-indigo-700"></FaHome>
              Address
            </label>
            <input
              className="appearance-none bg-gray-100 border rounded-lg py-2 px-4 w-full leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="#House, #Road, #PO, #City"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <p className="text-red-500">{errors.address}</p>}
          </div>
          <div className="mb-6">
            <label
              className="inline-flex items-center font-bold mb-2 text-gray-800"
              htmlFor="message"
            >
              <MdSpeakerNotes className="mr-1 text-indigo-700"></MdSpeakerNotes>
              Note
            </label>
            <textarea
              className="appearance-none bg-gray-100 border rounded-lg py-2 px-4 w-full leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Write your message here"
              rows="2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            type="submit"
          >
            Book
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
                  Product has been booked.
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

export default Booking;
