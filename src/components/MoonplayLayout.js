import React from 'react';
import { useMixpanel } from 'gatsby-plugin-mixpanel';
import { Link } from 'gatsby';

const MoonplayLayout = props => {
  const mixpanel = useMixpanel();

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
          <Link
            onClick={() => {
              mixpanel.track('BuyCrypto Section Button');
            }}
            className="MoonPayButton"
            target="_blank"
            to="/buycrypto"
          >
            Buy Crypto
          </Link>
        </span>
      </span>
    </section>
  );
};

export default MoonplayLayout;
