/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

import CardMovie from "components/CardMovie";
import InputSearch from "components/InputSearch";
import LoadingSpinner from "components/LoadingSpinner";
import ModalMovies from "components/ModalMovies";
import NotFound from "components/NotFound";
import "./App.scss";
import { BackTop } from "antd";
import { UpOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import {
  getMovieDetail,
  getMoviesBySearching,
  getMoviesDefault,
} from "state/action-creators";

function App() {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchVal, setsearchVal] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { listMovies, movieDetail, msgError, isLoading, isLoadingDetail } =
    useSelector(({ movies }: Storage) => movies);

  useEffect(() => {
    const fetchMovie = async () => {
      await getMoviesDefault(dispatch);
    };
    fetchMovie();
  }, [dispatch]);

  const searchAction = async (e: any) => {
    e.preventDefault();
    if (searchVal.length > 0) {
      await getMoviesBySearching(searchVal, dispatch);
      setsearchVal("");
    } else {
      await getMoviesDefault(dispatch);
    }
  };

  const changeAction = (e: any) => {
    let keyword = e.target.value;
    let matches = [];
    if (keyword.length > 0) {
      matches =
        listMovies &&
        listMovies.filter((movie: any) => {
          const regex = new RegExp(`${keyword}`, "gi");
          return movie.Title.match(regex);
        });
    }
    setsearchVal(keyword);
  };

  const showModal = async (e: any) => {
    setIsModalVisible(true);
    await getMovieDetail(e, dispatch);
  };

  const hideModal = () => {
    setIsModalVisible(false);
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
        {!isLoading &&
          listMovies &&
          listMovies.length > 0 &&
          listMovies.map((movie: any) => (
            <CardMovie
              key={movie.imdbID}
              data={movie}
              handleClick={() => {
                showModal(movie.imdbID);
              }}
            />
          ))}
        {!isLoading && (!listMovies || msgError.length > 0) && (
          <NotFound message={msgError} />
        )}
        {isLoading && <LoadingSpinner asOverlay />}
      </div>

      <ModalMovies
        isModalVisible={isModalVisible}
        handleOk={hideModal}
        data={movieDetail}
        isLoading={isLoadingDetail}
      />
      <BackTop>
        <div className="backtop">
          <UpOutlined />
        </div>
      </BackTop>
    </React.Fragment>
  );
}

export default App;
