import React from 'react';

const MoonplayLayout = props => {
  return (
    <section className="sectionComponentLeft">
      <span className="sectionPicture">
        <img
          className="supportPicture"
          src={props.url}
          alt="iphone"
          border="0"
          loading="lazy"
        />
      </span>
      <span className="columnText">
        <span className="leftContentText">
          <h1 className="sectionTitle">{props.title}</h1>
          <h2 className="sectionSub">{props.subtitle}</h2>
          <a
            className="MoonPayButton"
            target="_blank"
            href="https://buy.moonpay.io/?defaultCurrencyCode=ETH&colorCode=%000&apiKey=pk_live_luey2OpUFw5tc4fzYvYwwkXXmfwjZF9"
          >
            Buy Crypto
          </a>
        </span>
      </span>
    </section>
  );
};

export default MoonplayLayout;
