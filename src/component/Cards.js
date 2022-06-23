import React from "react";
import fresh from "../images/fresh.jpeg";
import vegetablescard from "../images/vegetablescard.jpeg";
import salad from "../images/salad.jpeg";

const Cards = () => {
  return (
    <section className="section__cards">
      <div className="section__cards__container">
        <div className="section__cards__wrapper">
          <div className="section__cards__wrapper__col">
            <div className="section__cards__wrapper__col__image">
              <img src={fresh} alt="" />
            </div>
            <div className="section__cards__wrapper__col__text">
              <div className="section__cards__wrapper__col__text__heading">
                <h3>Fresh Fruits</h3>
              </div>
              <p>
                The secret is using fresh, seasonal produce in combination with
                good quality oils, vinegars or dairy. We choose the organic
                lifestyle because
              </p>
              <a href="#">learn more</a>
            </div>
          </div>
          <div className="section__cards__wrapper__col">
            <div className="section__cards__wrapper__col__image">
              <img src={vegetablescard} alt="" />
            </div>
            <div className="section__cards__wrapper__col__text">
              <div className="section__cards__wrapper__col__text__heading">
                <h3>Vegetables</h3>
              </div>
              <p>
                The secret is using fresh, seasonal produce in combination with
                good quality oils, vinegars or dairy. We choose the organic
                lifestyle because
              </p>
              <a href="#">learn more</a>
            </div>
          </div>
          <div className="section__cards__wrapper__col">
            <div className="section__cards__wrapper__col__image">
              <img src={salad} alt="" />
            </div>
            <div className="section__cards__wrapper__col__text">
              <div className="section__cards__wrapper__col__text__heading">
                <h3>Salad Leaves</h3>
              </div>
              <p>
                The secret is using fresh, seasonal produce in combination with
                good quality oils, vinegars or dairy. We choose the organic
                lifestyle because
              </p>
              <a href="#">learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
