import React from "react";
import "./Exhibit.css";
import GetIpAddress from "./GetIpAddress";
function Exhibit({ name }) {
  return (
    <div className="exhibit-container">
      <h3 className="exhibit-name">{name}</h3>
      <GetIpAddress type={name.toUpperCase()} />
    </div>
  );
}

export default Exhibit;
