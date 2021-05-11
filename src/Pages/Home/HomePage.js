import React from "react";
import { Link } from "react-router-dom";

import Banner from "../../Components/Banner/Banner";
import Product from "../../Components/Product/Product";

import Jeans from "../../assets/jeans.jpg";
import Shirt1 from "../../assets/shirt1.jpg";
import Shirt2 from "../../assets/shirt.jpg";

import L1 from "../../assets/1.jpg";
import L2 from "../../assets/2.jpg";
import L3 from "../../assets/3.jpg";

import "./HomePage.css";

export default function HomePage() {
  return (
    <div style={{ margin: "3rem 10rem" }}>
      {/* Banner with carousal(slider) */}
      <Banner />

      {/* Displaying list of popular products here */}
      <div>
        <div className="header">
          <p>Popular Products</p>
          <a href="/">View All</a>
        </div>
        <div>
          <Product images={[Jeans, Shirt2, Shirt1]} />
        </div>
      </div>

      {/* Displaying list of popular products here */}
      <div>
        <div style={{ marginTop: "5rem" }} className="header">
          <p>Latest Products</p>
          <a href="/">View All</a>
        </div>
        <div>
          <Product images={[L1, L2, L3]} />
        </div>
      </div>
    </div>
  );
}
