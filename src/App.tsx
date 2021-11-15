import React, { useEffect, useState } from "react";

import CardMovie from "components/CardMovie";
import InputSearch from "components/InputSearch";
import LoadingSpinner from "components/LoadingSpinner";
import "./App.scss";

import { useDispatch, useSelector } from "react-redux";
import { getMoviesBySearching, getMoviesDefault } from "state/action-creators";

function App() {
  const dispatch = useDispatch();
  const [searchVal, setsearchVal] = useState("");
  const { listMovies, isLoading } = useSelector(
    ({ movies }: Storage) => movies
  );

  useEffect(() => {
    const fetchMovie = async () => {
      await getMoviesDefault(dispatch);
    };
    fetchMovie();
  }, [dispatch]);

  const searchAction = async (e: any) => {
    e.preventDefault();
    if (searchVal !== "") {
      await getMoviesBySearching(searchVal, dispatch);
      setsearchVal("");
    } else {
      await getMoviesDefault(dispatch);
    }
  };

  const changeAction = (e: any) => {
    setsearchVal(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="search-container">
        <InputSearch
          txtSearch={searchVal}
          handleOnSubmit={searchAction}
          handleOnChange={changeAction}
        />
      </div>
      <div className="movie-container">
        {isLoading && <LoadingSpinner asOverlay />}
        {!isLoading && listMovies && listMovies.length > 0 ? (
          listMovies.map((movie: any) => (
            <CardMovie key={movie.imdbID} data={movie} />
          ))
        ) : (
          <h2>Data tidak ditemukan ...</h2>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
