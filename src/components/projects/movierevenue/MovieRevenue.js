import React from "react";
import './MovieRevenue.css'
const MovieRevenue = () => {
  return (
    <div className="movierevenue">
      <div className="content">
        <h5 className="heading-movierevenue">Movie Revenue Prediction</h5>
        <p>
          Worked on the TMDB box office dataset to predict the movie revenue.
          Performed the exploratory data analysis and data preprocessing to find
          the best feature. Created models like linear regression,decision tree
          and achieved the accuracy of 90 percent using the random forest model.
        </p>
      </div>
    </div>
  );
};

export default MovieRevenue;
