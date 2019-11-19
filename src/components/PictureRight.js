import React from 'react';

const PictureRight = props => {
  return (
    <section className="sectionComponentLeft">
      <span className="sectionPicture">
        <img
          className="supportPicture"
          src={props.url}
          alt={props.alt}
          border="0"
          loading="lazy"
        />
      </span>
      <span className="columnText">
        <span className="leftContentText">
          <h1 className="sectionTitle">{props.title}</h1>
          <h2 className="sectionSub">{props.subtitle}</h2>
        </span>
      </span>
    </section>
  );
};

export default PictureRight;
