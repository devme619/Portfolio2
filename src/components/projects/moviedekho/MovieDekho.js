import React from "react";
import "./MovieDekho.css";
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
const MovieDekho = () => {
  return (
    <div className="moviedekho">
      <div className="content">
        <h5 className="heading-moviedekho">Movie Dekho</h5>
        <p>
          After typing the keyword related to the movies and TV
          Series in the search box, the movie and tv series listing is done by
          the request to the MovieDB API. You can find initial page where all
          the trending movies and tv series will be available. There is on
          bottom navbar with four options as trending, movies, tv series and
          search.
        </p>
        <a target='blank' href="https://movie-dekho.netlify.app/"><MovieCreationIcon fontSize="large"/></a>
      </div>
    </div>
  );
};

export default MovieDekho;
