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
  max-height: 5rem;
`;

const ImageStyledThree = styled.img`
  margin-top: -5%;
`;

const ImageStyledNine = styled.img`
  margin-top: 10%;
`;

const CollaboratorsMobile = () => (
  <Wrapper className="is-hidden-tablet">
    <div className="columns is-mobile">
      <div className="column">
        <ImageStyledOne src="/images/collabs/logo_vulpem@2x.png" alt="v" />
      </div>
      <div className="column">
        <img src="/images/collabs/logo_feng@2x.png" alt="fengshui" />
      </div>
    </div>
    <div className="columns is-mobile">
      <div className="column">
        <img src="/images/collabs/logo_loopring@2x.png" alt="looper" />
      </div>
      <div className="column">
        <img src="/images/collabs/logo_kyber@2x.png" alt="kyber-network" />
      </div>
    </div>
    <div className="columns is-mobile">
      <div className="column">
        <img src="/images/collabs/logo_kyber_2x.png" alt="maker" />
      </div>
      <div className="column">
        <img src="/images/collabs/logo_ubiq@2x.png" alt="ubiq" />
      </div>
    </div>
    <div className="columns is-mobile">
      <div className="column">
        <ImageStyledSeven
          src="/images/collabs/logo_rocket@2x.png"
          alt="rocketpool"
        />
      </div>
      <div className="column">
        <img src="/images/collabs/logo_trivial@2x.png" alt="trivial" />
      </div>
    </div>
    <div className="columns is-mobile">
      <div className="column">
        <img src="/images/collabs/logo_poa@2x.png" alt="poa" />
      </div>
      <div className="column">
        <ImageStyledNine
          src="/images/collabs/logo_changelly@2x.png"
          alt="changely"
        />
      </div>
    </div>
  </Wrapper>
);

export default CollaboratorsMobile;
