import React from 'react';

  <script src="https://js.stripe.com/v3" />;
const PictureFull = props => {
  return (
    <section className={props.class}>
      <span className="singleColumnText">
        <span className="centerContentText">
          <h1 className="sectionTitle">{props.title}</h1>
          <h2 className="sectionSub">{props.subtitle}</h2>
        </span>
      </span>
      <button
        className="wlButton reduceMargin"
        id="checkout-button-sku_F2c5J8HckcrDg1"
        role="link"
      >
        Preorder
      </button>
    </section>
  );
};

export default PictureFull;
