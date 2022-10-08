import React from "react";
import "../styles/Special.css";
import Card from "./Card";

function Special() {
  return (
    <Card className="special">
      <span className="special-title"> special for you!</span>
      <div className="special-container">
        <div className="special-wrapper">
          <div className="special-img">
            <img src="" alt="coffee" />
          </div>
          <span className="special-caption"> 5 Coffee beans you must try</span>
        </div>
        <div className="special-wrapper">
          <div className="special-img">
            <img src="" alt="coffee" />
          </div>
          <span className="special-caption"> 5 Coffee beans you must try</span>
        </div>
      </div>
    </Card>
  );
}

export default Special;
