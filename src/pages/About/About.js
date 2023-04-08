import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import img1 from "../../assets/store.jpg";
import img2 from "../../assets/shoe.jpg";
import img3 from "../../assets/hoodie.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import TeamMember from "./TeamMember";

AOS.init();

const About = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      title: "Fashion Designer",
      photo: "https://i.ibb.co/Gdy3YNy/woman1.jpg",
      instagram: "https://www.instagram.com",
      twitter: "https://www.twitter.com",
      facebook: "https://www.facebook.com",
    },
    {
      name: "John Smith",
      title: "Fashion Stylist",
      photo: "https://i.ibb.co/1Gq4v7R/woman2.jpg",
      instagram: "https://www.instagram.com",
      twitter: "https://www.twitter.com",
      facebook: "https://www.facebook.com",
    },
    {
      name: "Sara Johnson",
      title: "Fashion Model",
      photo: "https://i.ibb.co/jHHSM9G/woman3.jpg",
      instagram: "https://www.instagram.com",
      twitter: "https://www.twitter.com",
      facebook: "https://www.facebook.com",
    },
  ];

  return (
    <div className="my-28 md:my-60">
      <div className="max-w-screen-lg min-h-screen  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-mirror="true"
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className="text-5xl text-gray-900 font-bold mb-2">About Us</h1>
            <p className="text-gray-600 leading-relaxed">
              Welcome to our fashion website! At Chichive, we believe that
              fashion should be accessible to everyone, and that's why we're
              dedicated to providing the latest trends and styles at affordable
              prices. Our team of fashion experts carefully curates each
              collection, selecting only the best pieces that we know you'll
              love. We're passionate about fashion and believe that what you
              wear is an expression of your unique personality and style. That's
              why we strive to provide a wide variety of styles and sizes, so
              everyone can find something that they feel confident and
              comfortable in.
            </p>
            <div className="flex items-center mt-8">
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">
                Follow Us
              </button>
              <div className="flex ml-4">
                <a>
                  <FaFacebookF className="text-3xl text-gray-600 hover:text-pink-500" />
                </a>
                <a>
                  <FaTwitter className="text-3xl text-gray-600 hover:text-pink-500 ml-4" />
                </a>
                <a>
                  <FaInstagram className="text-3xl text-gray-600 hover:text-pink-500 ml-4" />
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-duration="1000"
            data-aos-mirror="true"
            className="md:w-1/2"
          >
            <div className="flex justify-center md:justify-end">
              <img
                src={img1}
                alt=""
                className="w-64 h-64 object-cover rounded-full border-4 border-sky-700"
              />
            </div>
            <div className="flex justify-center md:justify-end mt-4">
              <img
                src={img2}
                alt=""
                className="w-32 h-32 object-cover rounded-full -my-3 border-4 border-sky-700"
              />
              <img
                src={img3}
                alt=""
                className="w-32 h-32 object-cover rounded-full border-4 border-sky-700 ml-2"
              />
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-mirror="true"
          className="text-center my-44"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            WE ARE
          </h2>
          <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-8">
            Passionate About
          </h3>
          <p className="max-w-3xl mx-auto text-lg text-gray-500 leading-8">
            At Chichive, fashion isn't just a business, it's our passion. We
            believe that fashion has the power to transform not just how we
            look, but how we feel about ourselves and the world around us. It's
            an art form that allows us to express our individuality and
            creativity, and to connect with others who share our love of style.
          </p>
          <button className="mt-8 bg-gray-600 hover:bg-black text-white py-2 px-4 rounded">
            View More
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-mirror="true"
          className="py-12"
        >
          <div className="px-4">
            <h2 className="text-5xl text-center font-bold mb-8 text-gray-900">
              Our Team
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-center text-gray-500 leading-8 mb-8">
              Our passionate team is dedicated to delivering the latest styles
              and exceptional customer service, with a commitment to diversity
              and collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
