/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Modal, Skeleton, Rate } from "antd";
import "./ModalMovies.scss";

interface Props {
  isModalVisible: boolean;
  handleOk: () => void;
  data: any;
  isLoading: boolean;
}

const ModalMovies: React.FC<Props> = ({
  isModalVisible,
  handleOk,
  data,
  isLoading,
}) => {
  const [rateValue, setRateValue] = useState(0);

  useEffect(() => {
    if (data) {
      let rate = data.imdbRating;
      setRateValue(Number(rate) / 2);
    }
  }, [data]);

  if (!data) {
    return (
      <Modal
        title="..."
        visible={isModalVisible}
        onOk={handleOk}
        cancelButtonProps={{ hidden: true }}
        okText="Close"
        closable={false}
      >
        <Skeleton avatar active paragraph={{ rows: 4 }} />
      </Modal>
    );
  }

  return (
    <Modal
      title={!isLoading ? "Detail movie" : "..."}
      visible={isModalVisible}
      onOk={handleOk}
      okText="Close"
      width={1000}
      cancelButtonProps={{ hidden: true }}
    >
      {isLoading && <Skeleton avatar active paragraph={{ rows: 4 }} />}
      {!isLoading && (
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img src={data.Poster} className="locandina" />
              <h1>{data.Title}</h1>
              <h4>
                {data.Year}, {data.Actors}
              </h4>
              <span className="minutes">{data.Runtime}</span>
              <p className="type">{data.Genre}</p>
            </div>
            <div className="movie_desc">
              <p className="text">{data.Plot}</p>
            </div>
            <div className="movie_social">
              <Rate value={rateValue} className="rating" disabled={true} />
            </div>
          </div>
          <div
            className="blur_back"
            style={{
              background: `url(${data.Poster})`,
            }}
          ></div>
        </div>
      )}
    </Modal>
  );
};

export default ModalMovies;
