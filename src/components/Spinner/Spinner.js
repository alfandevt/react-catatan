import "../../styles/Spinner/Spinner.css";
import React from "react";

const Spinner = () => {
  return (
    <div className="spinner__overlay">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
