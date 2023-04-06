import React from "react";
import Hero from "../../components/Hero/Hero";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero
        heading="Elevate Your Wardrobe with Trendy Fashion Picks"
        message="Upgrade your wardrobe with our selection of trendy and stylish pieces. Our curated collection features everything from classic staples to the latest fashion trends, so you can always stay ahead of the curve. Shop now and elevate your style."
      ></Hero>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
