import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-gray-900 pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full lg:w-6/12 px-4 flex justify-center md:justify-start">
                <p className="text-gray-500 text-sm">
                  © 2023 Chichive, Inc. All rights reserved.
                </p>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <ul className="list-none ml-auto">
                  <li>
                    <div className="flex items-center justify-center md:justify-end pt-8 md:pt-0">
                      <a
                        className="text-gray-500 hover:text-gray-900 text-xl font-semibold block py-1 px-3"
                      >
                        <BsTwitter className='text-sky-600'></BsTwitter>
                      </a>
                      <a
                        className="text-gray-500 hover:text-gray-900 text-xl font-semibold block py-1 px-3"
                      >
                         <FaFacebook className='text-blue-700'></FaFacebook>
                      </a>
                      <a
                        className="text-gray-500 hover:text-gray-900 text-xl font-semibold block py-1 px-3"
                      >
                         <FaInstagram className='text-pink-700'></FaInstagram>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
};

export default Footer;
