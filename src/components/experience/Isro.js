import React from "react";
import isro from "../../Photos/isro.jpg";
import "./Isro.css";
const Isro = () => {
  return (
    <div className="isro">
      <div className="image">
        <img src={isro} alt="isro" />
      </div>
      <div className="content">
        <h5 className="heading-isro">INDIAN SPACE RESEARCH ORGANISATION</h5>
        <p>Scientist(Group A-Gazetted Officer)- Mechanical</p>
        <p>2020-Present</p>
      </div>
    </div>
  );
};

export default Isro;
