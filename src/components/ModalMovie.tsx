import React from "react";
import { Modal } from "antd";
import "./ModalMovie.scss";

interface Props {
  isModalVisible: boolean;
  handleOk: () => void;
  data: any;
  isLoading: boolean;
}

const ModalMovie: React.FC<Props> = ({
  isModalVisible,
  handleOk,
  data,
  isLoading,
}) => {
  if (data) {
    return (
      <Modal
        title={data.Title}
        visible={isModalVisible}
        onOk={handleOk}
        closable={false}
        width={1000}
        className="tes"
      >
        {isLoading && <h3>proses mengambil data ....</h3>}
        {!isLoading && (
          <div className="content">
            <div className="poster">
              <img src={data.Poster} alt={data.Type} />
            </div>
            <div className="deskripsi">
              <p>
                Type : <span>{data.Type}</span>
              </p>
              <p>
                Genre : <span>{data.Genre}</span>
              </p>
              <p>
                Language : <span>{data.Language}</span>
              </p>
              <p>
                Country : <span>{data.Country}</span>
              </p>
              <p>
                Awards : <span>{data.Awards}</span>
              </p>
              <p>
                Actors : <span>{data.Actors}</span>
              </p>
              <p>
                Tahun : <span>{data.Year}</span>
              </p>
              <p>
                Released : <span>{data.Released}</span>
              </p>
              <p>
                Durasi : <span>{data.Runtime}</span>
              </p>
              <p>
                Box Office : <span>{data.BoxOffice}</span>
              </p>
              <p>
                Plot : <span>{data.Plot}</span>
              </p>
              <p>
                Writer : <span>{data.Writer}</span>
              </p>
            </div>
          </div>
        )}
      </Modal>
    );
  } else {
    return (
      <Modal title="..." visible={isModalVisible} onOk={handleOk}>
        <h3>Data tidak ditemukan ...</h3>
      </Modal>
    );
  }
};

export default ModalMovie;