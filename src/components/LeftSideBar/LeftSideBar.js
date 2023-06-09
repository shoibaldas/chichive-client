import React, { useEffect, useState } from "react";
import { BiCategory, BiSearchAlt, BiReset } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import { TfiViewListAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://chichive-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="">
      <div className="flex flex-col mt-20 rounded-md p-3 w-60">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-md font-semibold">Categories</h2>
            <div className="p-2  text-sky-700">
              <TfiViewListAlt className="h-6 w-6"></TfiViewListAlt>
            </div>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button
                type="submit"
                className="p-2 text-sky-700 focus:outline-none focus:ring"
              >
                <BiSearchAlt className="h-6 w-6"></BiSearchAlt>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none bg-gray-400"
            />
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <Link
                rel="noopener noreferrer"
                to='/products'
                className="flex items-center p-2 space-x-3"
              >
                <div>
                  <BiReset className="h-4 w-4 text-red-700"></BiReset>
                </div>
                <h2 className="text-md tex-2xl">All Products</h2>
              </Link>
              {categories.map((category) => (
                <li className="rounded-sm hover:bg-gray-400" key={category._id}>
                  <Link
                    rel="noopener noreferrer"
                    to={`/categories/${category._id}`}
                    className="flex items-center p-2 space-x-3"
                  >
                    <div className="text-sky-500">
                      <BiCategory className="h-4 w-4"></BiCategory>
                    </div>
                    <h2 className="text-md tex-2xl">{category.name}</h2>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
