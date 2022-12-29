import React from "react";
import "./Exhibit.css";
function Exhibit({ name }) {
  return (
    <div className="exhibit-container">
      <h3 className="exhibit-name">{name}</h3>
    </div>
  );
}

export default Exhibit;
