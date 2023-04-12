import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "./Categories.css";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import slide_image_1 from "../../assets/woman1.jpg";
import slide_image_2 from "../../assets/woman3.jpg";
import slide_image_3 from "../../assets/fashon1.jpg";
import slide_image_4 from "../../assets/fashion2.jpg";
import slide_image_5 from "../../assets/fashoin3.jpg";
import slide_image_6 from "../../assets/woman3.jpg";
import Loader from "../Loader/Loader";

const FeatureCategories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://chichive-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-lg lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Featured Categories
        </h2>
        <p className="text-lg leading-6 text-gray-600">
          Discover our top picks: browse our featured categories and elevate
          your fashion game today!
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        autoplay={{ delay: 2500, disableOnInteractio: false }}
        breakpoints={{
          360: {
            slidesPerView: "auto",
          },
          768: {
            spaceBetween: 80,
          },
        }}
        className="swiper-container mt-8"
      >
        <div>
          {categories.map((featureCategory) => (
            <SwiperSlide key={featureCategory._id} className="swipe-slide">
              <img className="image " src={featureCategory.image} alt="slide_image" />
            </SwiperSlide>
          ))}
        </div>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <MdOutlineKeyboardArrowLeft className="w-8 h-8 text-gray-800 bg-white rounded-full shadow-md"></MdOutlineKeyboardArrowLeft>
          </div>
          <div className="swiper-button-next slider-arrow">
            <MdOutlineKeyboardArrowRight className="w-8 h-8 text-gray-800 bg-white rounded-full shadow-md"></MdOutlineKeyboardArrowRight>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default FeatureCategories;
