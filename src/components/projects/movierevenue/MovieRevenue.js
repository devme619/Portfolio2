import React from "react";
import "./MovieRevenue.css";
const MovieRevenue = () => {
  return (
    <div className="movierevenue">
      <div className="content">
        <h5 className="heading-movierevenue">Movie Revenue Prediction</h5>
        <p>
          Performed exploratory data analysis and data preprocessing on the TMDB
          box office dataset to find the best feature. Created models like
          Linear Regression, and Decision Tree and achieved the accuracy of 90
          percent using the Random forest model.
        </p>
      </div>
    </div>
  );
};

export default MovieRevenue;
