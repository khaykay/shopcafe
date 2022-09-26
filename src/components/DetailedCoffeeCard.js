import React from "react";
import "../styles/DetailedCoffeeCard.css";
import cappuccino from "../jpegs/cappuccino.jpeg";
import coffee from "../jpegs/icons8-coffee-beans-20.png";
import milk from "../jpegs/icons8-water-drop-20.png";
import Card from "./Card";
function DetailedCoffeeCard() {
  return (
    <div className="main-container">
      <Card className="image-section">
        <img classname="picture" src={cappuccino} alt="expresso coffee" />
        <div className="header">
          <span className="boxx back"></span>
          <span className="boxx like"></span>
        </div>
        <div className="footer">
          <div className="image-caption">
            <div className="caption">
              <span className="main-caption">Cappuccino</span>
              <br />
              <span className="sub-caption">with oat milk</span>
            </div>
            <div className="main-rating">
              <span className="rating-star"></span>
              <span className="rating-score">4.5</span>
            </div>
          </div>
          <div className="ingredients">
            <div className="ingredient-box">
              <span className="ingredient-logo">
                <img src={coffee} alt="coffee seed" />
              </span>
              <span className="ingredient">coffee</span>
            </div>
            <div className="ingredient-box">
              <span className="ingredient-logo">
                <img src={milk} alt="milk drop" />
              </span>
              <span className="ingredient">milk</span>
            </div>
            <div className="ingredient-box big">
              <span className="ingredient">medium roast</span>
            </div>
          </div>
        </div>
      </Card>
      <div className="description-section">
        <section className="description wrapper">
          <span className="description title">Description</span>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, illo
            alias minima animi sequi ratione
            <span className="ellipses"> ... Read More</span>
            <span className="more">
              exercitationem voluptatem earum veritatis cum dolorem sapiente,
              adipisci officiis fugiat asperiores eligendi voluptates quo
              mollitia!
            </span>
          </div>
        </section>
        <div className="size-section">
          <span className="sizes title">Size</span>
          <div className="size-wrapper">
            <span className="size">S</span>
            <span className="size">M</span>
            <span className="size">L</span>
          </div>
        </div>
        <div className="price-section">
          <div>
            <span className="cardprices title">Price</span>
            <div className="cardprice-wrapper">
              <span className="cardprice">
                <span className="dollar">$</span>4.99
              </span>
            </div>
          </div>
          <button className="addtocartbutton">Buy now</button>
        </div>
      </div>
    </div>
  );
}

export default DetailedCoffeeCard;
