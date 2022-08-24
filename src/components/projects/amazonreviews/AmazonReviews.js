import React from "react";
import "./AmazonReviews.css";
import GitHubIcon from "@mui/icons-material/GitHub";
const AmazonReviews = () => {
  return (
    <div className="amazonreviews">
      <div className="content">
        <h5 className="heading-amazonreviews">
          Sentiment Analysis of Amazon Reviews
        </h5>
        <p>
          Collected open source amazon reviews dataset of 20K reviews of
          categories like Watches, Shoes, Health, Phones, and Arts. Used the
          packages VADER to get the best labels for the reviews and created the
          Random Forest model and got an accuracy of around 76 percent.
        </p>
        <a target="blank" href="https://github.com/devme619/ML--Amazon-Reviews">
          <GitHubIcon fontSize="large"/>
        </a>
      </div>
    </div>
  );
};

export default AmazonReviews;
