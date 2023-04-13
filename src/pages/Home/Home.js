import React from "react";
import Hero from "../../components/Hero/Hero";
import Testimonial from "../../components/Testimonial/Testimonial";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Feature from "../../components/Feature/Feature";
import TitleHead from "../../hooks/TitleHead/TitleHead";
import ReachUs from "../../components/ReachUs/ReachUs";
import FeatureCategories from "../../components/FeatureCategories/FeatureCategories";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";

const Home = () => {
  TitleHead("Chichive");

  return (
    <div>
      <Hero
        heading="Elevate Your Wardrobe with Trendy Fashion Picks"
        message="Upgrade your wardrobe with our selection of trendy and stylish pieces. Our curated collection features everything from classic staples to the latest fashion trends, so you can always stay ahead of the curve. Shop now and elevate your style."
      ></Hero>
      <FeatureCategories></FeatureCategories>
      <FeatureProducts></FeatureProducts>
      <Feature></Feature>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
      <ReachUs></ReachUs>
    </div>
  );
};

export default Home;
