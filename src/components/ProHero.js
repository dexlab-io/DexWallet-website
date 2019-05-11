import React from 'react';

  <script src="https://js.stripe.com/v3" />;
const PictureFull = props => {
  return (
    <section className={props.class}>
      <span className="singleColumnText">
        <span className="centerContentText">
          <h1 className="sectionTitle biggest">{props.title}</h1>
          {/* <h2 className="sectionSub bigger">{props.subtitle}</h2> */}
          <h2 className="sectionSub bigger">
            Become a Lifetime Supporter for $249.99 now. We will always thank
            you.
            <br />
            (only 997 spot left)
          </h2>
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
