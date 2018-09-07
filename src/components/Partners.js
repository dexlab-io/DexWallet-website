import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

import PartnersMobile from './PartnersMobile';

const Container = styled.section`
  img {
    max-height: 3.5rem;
  }
  .container {
      width: 80%;
     
    }
  }
`;

const TitleStyled = styled.div`
  margin-bottom: 4rem !important;
  font-weight: ${theme.fontMedium};
  @media only screen (max-width: 600px) {
    margin-bottom: 3rem !important;
  }
`;

const Imagestyled = styled.img`
  max-height: 5rem !important;
`;

const Partners = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <TitleStyled className="title has-text-light-grey is-size-6">
        Proudly building the DEX ecosystem with invaluable friends
      </TitleStyled>
      <PartnersMobile />
      <div className="is-hidden-mobile">
        <div className="columns">
          <div className="column">
            <img src="/images/partners/logo_loopring@2x.png" alt="looper" />
          </div>
          <div className="column has-text-right">
            <img src="/images/partners/ubiq.svg" alt="ubiq" />
          </div>
          <div className="column">
            <img src="/images/partners/logo_vulpem@2x.png" alt="v" />
          </div>
          <div className="column">
            <img src="/images/partners/logo_feng@2x.png" alt="fengshui" />
          </div>
          <div className="column">
            <img src="/images/partners/logo_kyber@2x.png" alt="kyber-network" />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Imagestyled src="/images/partners/logo_kyber_2x.png" alt="maker" />
          </div>
          <div className="column">
            <Imagestyled
              src="/images/partners/logo_rocket@2x.png"
              alt="rocketpool"
            />
          </div>
          <div className="column">
            <img src="/images/partners/poa.png" alt="poa" />
          </div>
          <div className="column">
            <img src="/images/partners/logo_trivial@2x.png" alt="trivial" />
          </div>
          <div className="column">
            <img src="/images/partners/logo_changelly@2x.png" alt="changely" />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Partners;
