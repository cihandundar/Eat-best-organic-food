import React from "react";
import vegetables from "../images/vegetables.jpeg";
import works from "../images/works.jpeg";
import flexi from "../images/flexi.jpeg";
import productsfarm from "../images/productsfarm.jpeg";

const About = () => {
  return (
    <section className="section__about">
      <div className="section__about__container">
        <div className="section__about__container__title">
          <h2>About Our Farm</h2>
          <p>
            Today, at our second-generation family farm, we keep with our
            parents’ vision by practicing healthy crop rotation, encouraging a
            diverse ecosystem around the fields, efficiently using local water
            sources and carefully selecting produce varieties that grow well and
            taste great.
          </p>
        </div>
        <div className="section__about__container__wrapper">
          <div className="section__about__container__wrapper__col">
            <div className="section__about__container__wrapper__text">
              <h3>vegetables</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className="section__about__container__wrapper__image">
              <img src={vegetables} alt="" />
            </div>
          </div>
          <div className="section__about__container__wrapper__col">
            <div className="section__about__container__wrapper__text">
              <h3>how it works</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className="section__about__container__wrapper__image">
              <img src={works} alt="" />
            </div>
          </div>
          <div className="section__about__container__wrapper__col">
            <div className="section__about__container__wrapper__text">
              <h3>flexibility</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className="section__about__container__wrapper__image">
              <img src={flexi} alt="" />
            </div>
          </div>
          <div className="section__about__container__wrapper__col">
            <div className="section__about__container__wrapper__text">
              <h3>farm products</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className="section__about__container__wrapper__image">
              <img src={productsfarm} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
