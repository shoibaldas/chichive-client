import React, { useEffect, useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import HomeProduct from "./HomeProduct";
import { Link } from "react-router-dom";

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

  return (
    <div data-aos="fade-up" data-aos-duration="1000"  data-aos-mirror="true" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Products</h2>
        <p className="text-lg leading-6 text-gray-600">
        Shop our high-quality, sustainable fashion collection today.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        {
            products.slice(0, 8).map(product => <HomeProduct key={product._id} product={product}></HomeProduct>)
        }
      </div>
      <div className="text-center text-gray-800">
        <Link
          to="/products"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          View All
          <MdOutlineArrowForwardIos className="w-6 ml-2"></MdOutlineArrowForwardIos>
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
