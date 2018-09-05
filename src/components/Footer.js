import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  background-color: ${theme.primaryColor};
  padding: 1.8rem 0rem;
  img {
    position: absolute;
    top: 5%;
    width: 90px;
    height: 17px;
  }
  span {
    font-weight: ${theme.fontMedium};
  }
`;

const Wrapper = styled.div`
  padding-right: 15%;
  @media only screen and (max-width: 600px) {
    padding-right: 25%;
  }
`;

const Footer = () => (
  <Container className="section">
    <div className="container has-text-centered has-text-white is-size-6 primary-font">
      <Wrapper>
        <span>
          Build with <i className="fas fa-heart" /> by &nbsp;&nbsp;
        </span>
        <a href="/">
          <img src="/images/logo_footer@2x.png" alt="footer-logo" />
        </a>
      </Wrapper>
    </div>
  </Container>
);

export default Footer;
