import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const PreHeaderWrapper = styled.section`
  padding: 0.7rem 1.5rem;
  font-family: ${theme.secondaryFont} !important;
  z-index: 1000;
  font-size: 0.75rem;
  .column {
    color: ${theme.textColorWhite};
    opacity: 0.7;
  }
`;

const PreHeader = () => (
  <PreHeaderWrapper className="section is-hidden-mobile has-background-black">
    <div className="container">
      <div className="columns is-mobile">
        <div className="column">Super Fast Transactions</div>
        <div className="column has-text-centered">
          The Easiest Wallet on the Market
        </div>
        <div className="column has-text-centered">You are 100% in Charge</div>
        <div className="column has-text-right">
          Bulletproof Security of your Assets
        </div>
      </div>
    </div>
  </PreHeaderWrapper>
);

export default PreHeader;
