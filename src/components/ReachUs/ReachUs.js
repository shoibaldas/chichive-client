import React from "react";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineEventAvailable } from "react-icons/md";
import { BsMailbox } from "react-icons/bs";

const ReachUs = () => {
  return (
    <div className="py-20  max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Business Hours & Info.
          </h2>
          
        </div>
      <div className="flex flex-wrap justify-around">
        <div className="h-56 w-56 p-5 bg-white border rounded-lg shadow-lg cursor-pointer mb-3">
          <div className="flex justify-center align-middle">
            <BsMailbox className="h-10 w-10 text-sky-700"></BsMailbox>
          </div>
          <div className="text-center my-4">
            <p className="text-lg font-semibold">Postal Address</p>
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
        <div className="h-56 w-56 p-5 bg-sky-50 border rounded-lg shadow-lg cursor-pointer mb-3">
          <div className="flex justify-center align-middle">
            <MdOutlineEmail className="h-10 w-10 text-indigo-700"></MdOutlineEmail>
          </div>
          <div className="text-center my-4">
            <p className="text-lg font-semibold">Phone & Email</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600">
              Phone: +8801777799893
            </p>
            <p className="text-sm font-semibold text-gray-600">
              Fax: 1-34-54-333
            </p>
            <p className="text-sm font-semibold text-gray-600">
              Email: chichive@gmail.com
            </p>
          </div>
        </div>
        <div className="h-56 w-56 p-5 bg-white border rounded-lg shadow-lg cursor-pointer mb-3">
          <div className="flex justify-center align-middle">
            <FaHandshake className="h-10 w-10 text-blue-700"></FaHandshake>
          </div>
          <div className="text-center my-4">
            <p className="text-lg font-semibold">Open hours</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600">
              Monday to Friday
            </p>
            <p className="text-sm font-semibold text-gray-600">
              8.00 am to 5.00 pm
            </p>
            <p className="text-sm font-semibold text-gray-600">
              Weekend closed
            </p>
          </div>
        </div>
        <div className="h-56 w-56 p-5 bg-sky-50 border rounded-lg shadow-lg cursor-pointer mb-3">
          <div className="flex justify-center align-middle">
            <MdOutlineEventAvailable className="h-10 w-10 text-green-700"></MdOutlineEventAvailable>
          </div>
          <div className="text-center my-4">
            <p className="text-lg font-semibold">Events</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600">
              Each middle of the month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
