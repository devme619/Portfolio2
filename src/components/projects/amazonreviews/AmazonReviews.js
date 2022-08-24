import React from "react";
import './AmazonReviews.css'
import GitHubIcon from '@mui/icons-material/GitHub';
const AmazonReviews = () => {
  return (
    <div className="amazonreviews">
      <div className="content">
        <h5 className="heading-amazonreviews">
          Sentiment Analysis of Amazon Reviews
        </h5>
        <p>
          Collected open source amazon reviews dataset of 20K reviews of
          category like Watches, Shoes, Health, Phones, Arts. Used the packages
          like VADER to get the best labels for the reviews and created Randon
          Forest model and got the accuracy around 76 percent.
        </p>
        <a target="blank" href="https://github.com/devme619/ML--Amazon-Reviews">
          <GitHubIcon/>
        </a>
      </div>
    </div>
  );
};

export default AmazonReviews;
