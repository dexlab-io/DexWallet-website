import React, { Component } from 'react';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

  <script src="https://js.stripe.com/v3" />;

class buycrypto extends Component {
  render() {
    return (
      <div>
        <Seo
          title={config.siteName}
          description={config.description}
          url={`${config.siteUrl}`}
          image={config.image}
        />

        {/* <span className="whitelabelCTAtitle margintop">
          <span className="centerContentText">
            <h1 className="sectionTitle">Buy Crypto</h1>
            <h2 className="sectionSub">
              Easier, faster, safer.
              <br />
              Buy crypto with Credit Card or Apple Pay now!
            </h2>
          </span>
        </span> */}
        <div className="buycryptoContainer">
          <div className="iframe">
            <iframe
              style={{ backgroundColor: '#000000!important' }}
              className="iframe"
              frameBorder="0"
              colorCode="#483310"
              backgroundColor="#000000"
              height="100%"
              src="https://buy.moonpay.io?apiKey=pk_live_luey2OpUFw5tc4fzYvYwwkXXmfwjZF9"
              width="100%"
            >
              <p>Your browser does not support iframes.</p>
            </iframe>
          </div>
          <div className="buycryptoContent">
            <img src="/img/buycrypto.png" alt="Xlogo" width="40%" border="0" />
            <h1 className="sectionTitle">
              Buy Crypto using your Credit Card or Apple Pay
            </h1>
            <h2 className="sectionSub">
              Integrated feature allows users to buy Ether with Credit Card
              through MoonPay to make the journey simpler, faster and safer for
              everyone.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default buycrypto;
