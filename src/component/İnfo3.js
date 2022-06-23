import React from "react";
import organicfarm from "../images/organicfarm.jpeg";

const İnfo3 = () => {
  return (
    <section className="section__info3">
      <div className="section__info3__wrapper">
        <div className="section__info3__wrapper__col">
          <div
            className="section__info3__wrapper__text"
            style={{ marginLeft: "0", marginRight: "50px" }}
          >
            <div className="section__info3__wrapper__text__heading">
              <h3 style={{ marginLeft: "0" }}>ORGANIC FARM</h3>
            </div>
            <h2>Of Organic Food</h2>
            <p>
              Organic principles and regulations are also designed to ensure
              that animals are treated humanely, or, to be brutally honest, as
              humanely as possible. There are strict rules on the way in which
              animals are housed, guaranteeing a degree of comfort for the
              animals. But when it comes to vegetables, the situation is quite
              different.
            </p>
            <button className="section__info3__wrapper__text__btn">
              learn more
            </button>
          </div>
          <div className="section__info3__wrapper__image">
            <img src={organicfarm} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default İnfo3;
