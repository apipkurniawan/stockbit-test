import React, { useEffect } from "react";

import CardMovie from "components/CardMovie";
import InputSearch from "components/InputSearch";
import LoadingSpinner from "components/LoadingSpinner";
import "./App.scss";

import { useDispatch, useSelector } from "react-redux";
import { getListMovies } from "state/action-creators";

function App() {
  const dispatch = useDispatch();
  const { listMovies, isLoading } = useSelector(
    ({ movies }: Storage) => movies
  );

  useEffect(() => {
    const fetchMovie = async () => {
      await getListMovies(dispatch);
    };
    fetchMovie();
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="search-container">
        <InputSearch />
      </div>
      <div className="movie-container">
        {isLoading && <LoadingSpinner asOverlay />}
        {!isLoading &&
          listMovies.map((movie: any) => (
            <CardMovie key={movie.imdbID} data={movie} />
          ))}
      </div>
    </React.Fragment>
  );
}

export default App;
