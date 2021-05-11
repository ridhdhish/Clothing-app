import React from "react";

import "./Category.css";

export default function Catagory(props) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ overflow: "hidden" }}>
        <img className="category" src={props.images[0]} alt="Category" />
        <p>Baby care</p>
      </div>
    </div>
  );
}
