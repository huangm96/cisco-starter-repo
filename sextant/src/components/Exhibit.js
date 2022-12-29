import React from "react";
import "./Exhibit.css";
function Exhibit({ name, children }) {
  return (
    <div className="exhibit-container">
      <h3 className="exhibit-name">{name}</h3>
      <>{children}</>
    </div>
  );
}

export default Exhibit;
