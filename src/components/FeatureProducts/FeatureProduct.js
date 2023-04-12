import React from "react";
import { Link } from "react-router-dom";

const FeatureProduct = ({ product }) => {
  const { title, price, picture } = product;

  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-mirror="true"
        className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
      >
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={picture}
          alt=""
        />
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-4 text-lg font-bold text-gray-100">{title}</p>
          <p className="mb-4 text-lg font-bold text-gray-100">{price}</p>
          <div className="flex justify-center">
            <Link
              to={`/booking/product/${product._id}`}
              className="mt-16 md:mt-28 bg-gray-600 hover:bg-black text-white py-2 px-4 rounded"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
