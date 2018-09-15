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

const ImageStyledOne = styled.img`
  margin-top: -5%;
`;

const ImageStyledSeven = styled.img`
  max-height: 5rem !important;
`;

const ImageStyledNine = styled.img`
  margin-top: 10%;
`;

const ImageStyled = styled.img`
  max-height: 4rem !important;
`;

const PartnersMobile = () => (
  <Wrapper className="is-hidden-tablet">
    <div className="columns is-mobile">
      <div className="column">
        <ImageStyledOne src="/images/partners/logo_vulpem@2x.png" alt="v" />
      </div>
      <div className="column">
        <img src="/images/partners/logo_feng@2x.png" alt="fengshui" />
      </div>
    </div>
    <div className="columns is-mobile">
      <div className="column">
        <img src="/images/partners/logo_loopring@2x.png" alt="looper" />
      </div>
      <div className="column">
        <img src="/images/partners/logo_kyber@2x.png" alt="kyber-network" />
      </div>
    </div>
    <div className="columns is-mobile">
      <div className="column">
        <ImageStyled src="/images/partners/logo_kyber_2x.png" alt="maker" />
      </div>
      <div className="column">
        <img src="/images/partners/logo_ubiq@2x.png" alt="ubiq" />
      </div>
    </div>
    <div className="columns is-mobile">
      <div className="column">
        <ImageStyledSeven
          src="/images/partners/logo_rocket@2x.png"
          alt="rocketpool"
        />
      </div>
      <div className="column">
        <img src="/images/partners/logo_trivial@2x.png" alt="trivial" />
      </div>
    </div>
    <div className="columns is-mobile">
      <div className="column">
        <img src="/images/partners/logo_poa@2x.png" alt="poa" />
      </div>
      <div className="column">
        <ImageStyledNine
          src="/images/partners/logo_changelly@2x.png"
          alt="changely"
        />
      </div>
    </div>
  </Wrapper>
);

export default PartnersMobile;
