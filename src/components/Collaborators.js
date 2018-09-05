import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

import CollaboratorsMobile from './CollaboratorsMobile';

const Container = styled.section`
  img {
    max-height: 4rem;
  }
`;

const TitleStyled = styled.div`
  margin-bottom: 4rem !important;
  font-weight: ${theme.fontMedium};
  @media only screen (max-width: 600px) {
    margin-bottom: 3rem !important;
  }
`;

const ImageStyledOne = styled.img`
  height: 3rem;
`;

const ImageStyledTwo = styled.img`
  margin-top: 0.9rem;
`;

const Collaborators = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <TitleStyled className="title has-text-light-grey is-size-6">
        Proudly building the DEX ecosystem with invaluable friends
      </TitleStyled>
      <CollaboratorsMobile />
      <div className="is-hidden-mobile">
        <div className="columns">
          <div className="column">
            <ImageStyledOne
              src="/images/collabs/logo_loopring@2x.png"
              alt="looper"
            />
          </div>
          <div className="column">
            <img src="/images/collabs/logo_ubiq@2x.png" alt="ubiq" />
          </div>
          <div className="column">
            <img src="/images/collabs/logo_vulpem@2x.png" alt="v" />
          </div>
          <div className="column">
            <img src="/images/collabs/logo_feng@2x.png" alt="fengshui" />
          </div>
          <div className="column">
            <img src="/images/collabs/logo_kyber@2x.png" alt="kyber-network" />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <img src="/images/collabs/logo_kyber_2x.png" alt="maker" />
          </div>
          <div className="column">
            <img src="/images/collabs/logo_rocket@2x.png" alt="rocketpool" />
          </div>
          <div className="column">
            <img src="/images/collabs/logo_poa@2x.png" alt="poa" />
          </div>
          <div className="column">
            <img src="/images/collabs/logo_trivial@2x.png" alt="trivial" />
          </div>
          <div className="column">
            <ImageStyledTwo
              src="/images/collabs/logo_changelly@2x.png"
              alt="changely"
            />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Collaborators;
