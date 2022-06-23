import React from "react";
import hero_image from "../images/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__wrapper">
          <div className="hero__wrapper__title">
            <div className="hero__wrapper__heading">
              <h3>Fresh Food</h3>
            </div>
            <h2>Organic</h2>
            <p>
              How your food is grown or raised can have a major impact on your
              mental and emotional health as well as the environment.
            </p>
            <button className="hero__wrapper__btn">learn more</button>
          </div>
          <div className="hero__wrapper__image">
            <img src={hero_image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
