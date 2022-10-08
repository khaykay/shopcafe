import React from "react";
import "../styles/CoffeeCard.css";
import { Link, Outlet } from "react-router-dom";

function CoffeeCard(props) {
  const onClickButtonHandler = () => {
    console.log("clicked on button");
  };
  return (
    <>
      <div className="container">
        <div className="wrapper">
          {/* <Link to="/details"> */}
          <div className="image">
            <div className="rating">
              <div className="rating-wrapper">
                <span className="rating-star"></span>
                <span className="rating-score">{props.rating}</span>
              </div>
            </div>
            <figure className="coffee-image">
              <img src={props.image} alt="expresso coffee" />
              <figcaption className="coffee-image__caption">
                <span className="main-caption">{props.category}</span>
                <br />
                <span className="sub-caption">{props.subcategory}</span>
              </figcaption>
            </figure>
          </div>
          {/* </Link> */}
          <div className="price">
            <span className="price-tag">${props.price}</span>
            <button
              className="addtocart"
              onClick={onClickButtonHandler}
            ></button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default CoffeeCard;
