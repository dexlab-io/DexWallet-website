import React from 'react';

const Integrations = () => {
  return (
    <span className="integrations">
      <span className="protocol uniswap">
        <span className="companyLogo">
          <img
            src="/img/uniswap.svg"
            alt="iphone"
            border="0"
            height="40"
            alt="Uniswap Logo"
          />
        </span>
        <h2>Uniswap</h2>
        <h5>Provide and manage assets on liquidity pools</h5>
      </span>
      <span className="protocol compound">
        <span className="companyLogo">
          <img
            src="/img/compound.svg"
            alt="iphone"
            border="0"
            height="40"
            alt="Compound Logo"
          />
        </span>
        <h2>Compound</h2>
        <h5>Supply ETH, WETH, BAT, DAI and earn interest</h5>
      </span>

      <span className="protocol maker">
        <span className="companyLogo">
          <img
            src="/img/maker.svg"
            alt="iphone"
            border="0"
            height="40"
            alt="MakerDAO Logo"
          />
        </span>
        <h2>MakerDAO</h2>
        <h5>Collateralize Eth and borrow DAI in exchange</h5>
      </span>

      <span className="protocol stakeCapital">
        <span className="companyLogo">
          <img
            src="/img/stakeCapital.svg"
            alt="Stake Capital Logo"
            border="0"
            height="40"
          />
        </span>
        <h2>StakeCapital</h2>
        <h5>Stake LOOM to the pool and earn delegated PoS fees</h5>
      </span>
    </span>
  );
};

export default Integrations;
