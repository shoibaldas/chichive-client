import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const TeamMember = ({ name, title, photo, instagram, twitter, facebook }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-1/2 md:w-1/4">
        <div className="mb-4">
          <img src={photo} alt={name} className="rounded-full w-32 h-32 mx-auto" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>
        <p className="text-gray-700 mb-4">{title}</p>
        <div className="flex justify-center">
          <a href={instagram} target="_blank" rel="noreferrer" className="mr-4">
            <FaInstagram className="text-gray-600 hover:text-gray-800 transition-colors duration-300" size={24} />
          </a>
          <a href={twitter} target="_blank" rel="noreferrer" className="mr-4">
            <FaTwitter className="text-gray-600 hover:text-gray-800 transition-colors duration-300" size={24} />
          </a>
          <a href={facebook} target="_blank" rel="noreferrer">
            <FaFacebook className="text-gray-600 hover:text-gray-800 transition-colors duration-300" size={24} />
          </a>
        </div>
      </div>
    );
  };
  

export default TeamMember;