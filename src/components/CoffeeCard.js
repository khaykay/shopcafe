import React from "react";
import "../styles/CoffeeCard.css";
import expresso from "../jpegs/expresso2.jpeg";

function CoffeeCard() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="image">
          <div className="rating">
            <div className="rating-wrapper">
              <span className="rating-star"></span>
              <span className="rating-score">4.5</span>
            </div>
          </div>
          <figure className="coffee-image">
            <img src={expresso} alt="expresso coffee" />
            <figcaption className="coffee-image__caption">
              <span className="main-caption">Cappuccino</span>
              <br />
              <span className="sub-caption">with oat milk</span>
            </figcaption>
          </figure>
        </div>
        <div className="price">
          <span className="price-tag">$3.99</span>
          <button className="addtocart"></button>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
