import React from "react";

const HomeProduct = ({ product }) => {
  const { title, name, picture } = product;

  return (
    <div>
      <a aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={picture}
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">{title}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HomeProduct;
