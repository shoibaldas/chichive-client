import React from "react";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineEventAvailable } from "react-icons/md";
import { BsMailbox } from "react-icons/bs";

const ReachUs = () => {
  return (
    <div className="py-20 mb-10 max-w-screen-xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Reach Us</h2>
        <p className="text-lg leading-6 text-gray-600">
          Let's connect: get in touch with us today and discover how we can help
          you elevate your style!
        </p>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="h-56 w-10/12 md:w-56 p-5 bg-white border border-gray-600 rounded-lg shadow-lg cursor-pointer mb-3">
          <div className="flex justify-center align-middle">
            <BsMailbox className="h-10 w-10 text-sky-700"></BsMailbox>
          </div>
          <div className="text-center my-4">
            <p className="text-lg font-semibold text-gray-800">Postal Address</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600">Chichive.</p>
            <p className="text-sm font-semibold text-gray-600">
              Kazi Nazrul Islam Avenue
            </p>
            <p className="text-sm font-semibold text-gray-600">
              N.L.I. Tower, 54
            </p>
          </div>
        </div>
        <div className="h-56 w-10/12 md:w-56 p-5 bg-white border border-gray-600 rounded-lg shadow-lg cursor-pointer mb-3">
          <div className="flex justify-center align-middle">
            <MdOutlineEmail className="h-10 w-10 text-indigo-700"></MdOutlineEmail>
          </div>
          <div className="text-center my-4">
            <p className="text-lg font-semibold text-gray-800">Phone & Email</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600">
              Phone: +8801777799893
            </p>
            <p className="text-sm font-semibold text-gray-600">
              Email: chichive@gmail.com
            </p>
          </div>
        </div>
        <div className="h-56 w-10/12 md:w-56 p-5 bg-white border border-gray-600 rounded-lg shadow-lg cursor-pointer mb-3">
          <div className="flex justify-center align-middle">
            <FaHandshake className="h-10 w-10 text-blue-700"></FaHandshake>
          </div>
          <div className="text-center my-4">
            <p className="text-lg font-semibold text-gray-800">Open hours</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600">
              Monday to Friday
            </p>
            <p className="text-sm font-semibold text-gray-600">
              8.00 am to 5.00 pm
            </p>
          </div>
        </div>
        <div className="h-56 w-10/12 md:w-56 p-5 bg-white border border-gray-600 rounded-lg shadow-lg cursor-pointer mb-3">
          <div className="flex justify-center align-middle">
            <MdOutlineEventAvailable className="h-10 w-10 text-green-700"></MdOutlineEventAvailable>
          </div>
          <div className="text-center my-4">
            <p className="text-lg font-semibold text-gray-800">Events</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600">
              Each month at day 16!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
