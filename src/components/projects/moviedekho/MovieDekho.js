import React from "react";
import "./MovieDekho.css";
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
const MovieDekho = () => {
  return (
    <div className="moviedekho">
      <div className="content">
        <h5 className="heading-moviedekho">Movie Dekho</h5>
        <p>
          Movie Dekho is an IMDb clone which has information related to movies and TV
          Series. Movie and tv series listing is done by
          the request to the MovieDB API. Movie Dekho is written in React.
        </p>
        <a target='blank' href="https://movie-dekho.netlify.app/"><MovieCreationIcon fontSize="large"/></a>
      </div>
    </div>
  );
};

export default MovieDekho;
