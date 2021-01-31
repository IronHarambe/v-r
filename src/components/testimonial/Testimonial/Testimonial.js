import React from "react";

import "./Testimonial.scss";

function Testimonial({ img, desc, name }) {
  return (
    <div className="testimonial">
      <div className="wrapper">
        <p>{desc}</p>
        <div className="info">
          <img src={img} alt="potraits" />
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
