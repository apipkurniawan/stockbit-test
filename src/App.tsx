import React, { useEffect, useState } from "react";

import CardMovie from "components/CardMovie";
import InputSearch from "components/InputSearch";
import LoadingSpinner from "components/LoadingSpinner";
import ModalMovie from "components/ModalMovie";
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
  const { listMovies, movieDetail, isLoading, isLoadingDetail } = useSelector(
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
        {isLoading && <LoadingSpinner asOverlay />}
        {!isLoading && listMovies && listMovies.length > 0 ? (
          listMovies.map((movie: any) => (
            <CardMovie
              key={movie.imdbID}
              data={movie}
              handleClick={() => {
                showModal(movie.imdbID);
              }}
            />
          ))
        ) : (
          <h2>Data tidak ditemukan ...</h2>
        )}
      </div>

      <ModalMovie
        isModalVisible={isModalVisible}
        handleOk={hideModal}
        data={movieDetail}
        isLoading={isLoadingDetail}
      />
      <BackTop>
        <div className="tes">
          <UpOutlined />
        </div>
      </BackTop>
    </React.Fragment>
  );
}

export default App;
