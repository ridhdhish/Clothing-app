import React from "react";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Banner1 from "../../assets/Banner/banner1.jpg";
import Banner2 from "../../assets/Banner/banner2.jpg";

export default function Banner() {
  return (
    <div>
      <Carousel
        showThumbs={false}
        dynamicHeight={false}
        showStatus={false}
        swipeable={true}
        showArrows={false}
        infiniteLoop={true}
        emulateTouch={true}
        autoPlay={true}
        transitionTime={500}
        swipeScrollTolerance={400}
      >
        <div style={{ cursor: "grab" }}>
          <img
            style={{ height: "65vh", objectFit: "cover" }}
            src={Banner1}
            alt="img1"
          />
          {/* <p
            style={{
              cursor: "pointer",
              background: "rgba(0, 0, 0, 1)",
              width: "auto",
              fontSize: "1.3rem",
              fontWeight: "bold",
              padding: "0.7rem 2rem",
              marginBottom: "-1rem",
              marginLeft: "-36rem",
              borderRadius: "25px",
            }}
            className="legend"
          >
            Shop Now
          </p> */}
        </div>
        <div style={{ cursor: "grab" }}>
          <img
            style={{ height: "65vh", objectFit: "cover" }}
            src={Banner2}
            alt="img1"
          />
          {/* <p
            style={{
              cursor: "pointer",
              background: "rgba(0, 0, 0, 1)",
              width: "auto",
              fontSize: "1.3rem",
              fontWeight: "bold",
              padding: "0.7rem 2rem",
              marginBottom: "-1rem",
              marginLeft: "-36rem",
              borderRadius: "25px",
            }}
            className="legend"
          >
            Explore
          </p> */}
        </div>
      </Carousel>
    </div>
  );
}
