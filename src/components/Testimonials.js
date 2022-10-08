import React from "react";
import "../styles/Testimonial.css";
import Card from "./Card";

function Testimonials() {
  return (
    <Card className="testimonial">
      <div className="testimonial-wrapper">
        <div className="testimonial-image">
          <img src="" alt="user" />
        </div>
        <div className="testimony">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          veritatis consequatur, neque animi placeat accusamus? Incidunt
          accusamus vel nam beatae.
        </div>
      </div>
    </Card>
  );
}

export default Testimonials;
