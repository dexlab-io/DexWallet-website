import React from 'react';

const Integrations = () => {
  return (
    <span className="integrations">
      <span className="protocol bZx">
        <span className="companyLogo">
          <img src="/img/bzx.svg" alt="BzX logo" border="0" height="40" />
        </span>
        <h2>Fulcrum</h2>
        <h5>The most simple and powerful way to lend and margin trade</h5>
      </span>
      <span className="protocol compound">
        <span className="companyLogo">
          <img
            src="/img/compound.svg"
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
            border="0"
            height="40"
            alt="MakerDAO Logo"
          />
        </span>
        <h2>MakerDAO</h2>
        <h5>Collateralize Eth and borrow DAI in exchange</h5>
      </span>

      <span className="protocol uniswap">
        <span className="companyLogo">
          <img
            src="/img/uniswap.svg"
            alt="uniswap logo"
            border="0"
            height="40"
          />
        </span>
        <h2>Uniswap</h2>
        <h5>Provide and manage assets on liquidity pools</h5>
      </span>
    </span>
  );
};

export default Integrations;
