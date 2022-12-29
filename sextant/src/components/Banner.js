import React from "react";
import "./Banner.css";
function Banner({ title }) {
  return (
    <div className="banner-container">
      <p className="banner-title">{title}</p>
    </div>
  );
}

export default Banner;
