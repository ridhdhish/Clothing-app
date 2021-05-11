import React from "react";
import { Link } from "react-router-dom";

import "./Product.css";

export default function Product(props) {
  return (
    <div className="container">
      <div style={{ overflow: "hidden" }}>
        <img className="card" src={props.images[0]} alt="product" />
      </div>
      <div style={{ overflow: "hidden" }}>
        <img className="card" src={props.images[1]} alt="product" />
      </div>
      <div style={{ overflow: "hidden" }}>
        <img className="card" src={props.images[2]} alt="product" />
      </div>
    </div>
  );
}
