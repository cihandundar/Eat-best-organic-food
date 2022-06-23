import React from "react";
import happyfarm from "../images/happyfarm.jpeg";

const İnfo2 = () => {
  return (
    <section className="section__info3">
      <div className="section__info3__wrapper">
        <div className="section__info3__wrapper__col">
          <div className="section__info3__wrapper__image">
            <img src={happyfarm} alt="" />
          </div>
          <div className="section__info3__wrapper__text">
            <div className="section__info3__wrapper__text__heading">
              <h3>HAPPY FARMING</h3>
            </div>
            <h2>Happy Animals</h2>
            <p>
              The idea that happier farm animals produce higher quality food is
              not new, and it seems to be catching on. Several small scale egg
              farmers have transitioned to a “pastured” system, allowing their
              chickens to roam freely to eat grass and bugs the way nature
              intended. These chickens are not simply “free range” or “cage
              free,” which are terms that unfortunately don’t have much meaning
              in today’s food market
            </p>
            <button className="section__info3__wrapper__text__btn">
              learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default İnfo2;
