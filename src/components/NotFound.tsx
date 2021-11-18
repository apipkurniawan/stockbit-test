import React from "react";
import "./NotFound.scss";

interface Props {
  message: string;
}

const NotFound: React.FC<Props> = ({ message }) => {
  return (
    <React.Fragment>
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>

      <section className="error">
        <h1 className="message__title">{message}</h1>
        <p className="message__text">
          We're sorry, the movie you were looking for isn't found here. Please
          try another movie, or take a look at our.
        </p>
      </section>
    </React.Fragment>
  );
};

export default NotFound;
