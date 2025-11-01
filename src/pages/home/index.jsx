import React from "react";
import { Slider } from "../../components/slider/slider";
import { CatSlider } from "../../components/cat-slider/catSlider";
import ProductPage from "../../components/products/products";

export const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <CatSlider/>
      <ProductPage/>
    </div>
  );
};
