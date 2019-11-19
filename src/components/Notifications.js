import React from 'react';

const Notifications = props => {
  return (
    <span className="integrations">
      <span className="notificationCard">
        <span className="companyLogo">
          <img
            src="/img/customNotifications.svg"
            alt="custom notification picture"
            border="0"
            height="40"
          />
        </span>
        <h2>Custom</h2>
        <h5>Set up a custom notification according to your needs</h5>
      </span>

      <span className="notificationCard">
        <span className="companyLogo">
          <img
            src="/img/priceChange.svg"
            alt="notifications card"
            border="0"
            height="40"
          />
        </span>
        <h2>Price Change</h2>
        <h5>Stake LOOM to the pool and earn delegated PoS fees</h5>
      </span>

      <span className="notificationCard">
        <span className="companyLogo">
          <img
            src="/img/liquidationPrice.svg"
            alt="liquidation price picture"
            border="0"
            height="40"
          />
        </span>
        <h2>MakerDAO CDP Alert</h2>
        <h5>Monitor CDP liquidation price, protect your collateralized Eth</h5>
      </span>

      <span className="notificationCard">
        <span className="companyLogo">
          <img
            src="/img/aprVariation.svg"
            alt="apr variation picture"
            border="0"
            height="40"
          />
        </span>
        <h2>APR Variation</h2>
        <h5>Supply ETH, WETH, BAT, DAI and earn interest</h5>
      </span>
    </span>
  );
};

export default Notifications;
