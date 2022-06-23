import React from "react";
import husbandry from "../images/husbandry.jpeg";
import organic from "../images/organic.jpeg";
import farming from "../images/farming.jpeg";
import Cow from "../icons/Cow.js";
import Organic from "../icons/Organic.js";
import Tractor from "../icons/Tractor.js";

function Section() {
  return (
    <section className="section">
      <div className="section__container">
        <div className="section__wrapper">
          <div className="section__wrapper__title">
            <h2>How It Works?</h2>
            <p>
              Organic agriculture, which is governed by strict government
              standards, requires that products bearing the organic label are
              produced without the use of toxic and persistent pesticides and
              synthetic nitrogen fertilizers, antibiotics, synthetic hormones,
              genetic engineering or other excluded practices, sewage sludge, or
              irradiation.
            </p>
          </div>
          <div className="section__wrapper__info">
            <div className="section__wrapper__col">
              <div className="section__wrapper__col__image">
                <img src={husbandry} alt="" />
              </div>
              <div
                className="section__wrapper__col__text"
                style={{ marginTop: "15px" }}
              >
                <Cow />
                <h3>Animal husbandry</h3>
                <p>
                  The animal production system, may be broadly classified as
                  traditional, conventional and organic with their distinct
                  characteristics.
                </p>
              </div>
            </div>
            <div className="section__wrapper__col">
              <div
                className="section__wrapper__col__text"
                style={{ marginBottom: "15px" }}
              >
                <Organic />
                <h3>Organic Farming</h3>
                <p>
                  Organic farming practices reduce pollution, conserve water,
                  reduce soil erosion, increase soil fertility, and use less
                  energy, is also better for birds
                </p>
              </div>
              <div className="section__wrapper__col__image">
                <img src={organic} alt="" />
              </div>
            </div>
            <div className="section__wrapper__col">
              <div className="section__wrapper__col__image">
                <img src={farming} alt="" />
              </div>
              <div
                className="section__wrapper__col__text"
                style={{ marginTop: "15px" }}
              >
                <Tractor />
                <h3>Arable Farming</h3>
                <p>
                  Organic foods often have more beneficial nutrients, such as
                  antioxidants, than their conventionally-grown counterparts and
                  people with allergies to foods
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
