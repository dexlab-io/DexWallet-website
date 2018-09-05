import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  background-color: ${theme.primaryColor};
  padding: 1.8rem 0rem;
  img {
    width: 90px;
    height: 17px;
  }
  span {
    font-weight: ${theme.fontMedium};
  }
`;

const Footer = () => (
  <Container className="section">
    <div className="container has-text-centered has-text-white is-size-6 primary-font">
      <div>
        <span>
          Built with <i className="fas fa-heart" /> by &nbsp;&nbsp;
        </span>
        <a href="https://www.dexlab.io/">
          <img src="/images/logo_footer@2x.png" alt="footer-logo" />
        </a>
      </div>
    </div>
  </Container>
);

export default Footer;
