import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
.column {
  @media only screen and (max-width: 600px) {
    padding: 2rem 0rem;
  }
  img {
    max-width: 6.875rem;
  }
`;

const FeaturesTablet = () => (
  <Wrapper className="is-hidden-desktop is-hidden-mobile">
    <div className="columns">
      <div className="column">
        <img src="/images/features/illustration_ens@2x.png" alt="ethereum" />
        <div className="title is-size-4">Ethereum Name Service</div>
        <div className="subtitle">
          Chat, send and receive funds in a new easy <br /> way with a human
          readable address <br />(i.e. alessio.dexlab.io)
        </div>
      </div>
      <div className="column">
        <img
          src="/images/features/illustration_security@2x.png"
          alt="security"
        />
        <div className="title is-size-4">State-of-the-art Security</div>
        <div className="subtitle">
          With improved funds management and <br /> transactions signature you
          can finally <br />sleep tight.
        </div>
      </div>
    </div>
    <div className="columns is-mobile">
      <div className="column">
        <img
          src="/images/features/illustration_multichain@2x.png"
          alt="multichain"
        />
        <div className="title is-size-4">Multi-chains Wallet</div>
        <div className="subtitle">
          Create and import multiple chain wallets by <br />using the same
          private key or mnemonic <br />passphrase.
        </div>
      </div>
      <div className="column">
        <img src="/images/features/illustration_easy@2x.png" alt="easy" />
        <div className="title is-size-4">Simple Experience</div>
        <div className="subtitle">
          The wallet will automatically manage
          <br /> complex concepts such as gas limit, gas <br />price, and
          private keys.
        </div>
      </div>
    </div>
    <div className="columns is-mobile">
      <div className="column">
        <img
          src="/images/features/illustration_management@2x.png"
          alt="management"
        />
        <div className="title is-size-4">Token Management</div>
        <div className="subtitle">
          Search or add custom tokens. Detailed<br /> information about them is
          only<br />
          one-click away.
        </div>
      </div>
      <div className="column">
        <img src="/images/features/illustration_history@2x.png" alt="history" />
        <div className="title is-size-4">Transaction History</div>
        <div className="subtitle">
          Bet up-to-date on the current status of your<br /> transactions
          without leaving the app. <br />Display values in crypto or FIAT.
        </div>
      </div>
    </div>
  </Wrapper>
);

export default FeaturesTablet;
