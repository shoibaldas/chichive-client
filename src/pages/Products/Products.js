import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeProduct from "../HomeProducts/HomeProduct";
import TitleHead from "../../hooks/TitleHead/TitleHead";
import ScrollToTop from "../../hooks/ScrollToTop/ScrollToTop";

const Products = () => {
  TitleHead("All Products");
  const products = useLoaderData();
  return (
    <div className="px-4 mx-auto min-h-screen sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <ScrollToTop></ScrollToTop>
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Products</h2>
        <p className="text-lg leading-6 text-gray-600">
          Shop our high-quality, sustainable fashion collection today.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <HomeProduct key={product._id} product={product}></HomeProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
