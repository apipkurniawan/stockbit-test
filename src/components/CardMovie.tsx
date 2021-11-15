import React from "react";
import "./CardMovie.scss";

interface Props {
  data: any;
}

const CardMovie: React.FC<Props> = ({ data }) => {
  return (
    <div className="movie">
      <img src={data.Poster} alt={data.Type} />
      <div className="movie-info">
        <div className="title">{data.Title}</div>
        <div className="year">{data.Year}</div>
      </div>
    </div>
  );
};

export default CardMovie;
