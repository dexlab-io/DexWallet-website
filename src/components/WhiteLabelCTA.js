import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  background-color: #f2f2f2;
  .whitelabelCtaContainer {
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1.4% 0% 2.7% 0%;
  }

  .whitelabelTitle {
    font-family: 'Quicksand', sans-serif;
    font-size: 2.6rem;
    font-weight: 400;
    color: #000000;
    margin-bottom: 2%;
    text-align: center;
  }

  button.getintouch {
    padding: 10px 22px 12px 22px;
    height: 42px;
    border-radius: 6px;
    background-color: #2e3c4f;
    font-size: 14px;
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }

  button.getintouch:hover {
    background-color: rgb(59, 84, 121);
  }

  @media (max-width: 560px) {
    .whitelabelTitle {
      font-size: 1.8rem;
      margin: 10% 0 5% 0;
    }
  }
`;

const WhiteLabelCTA = () => (
  <Container className="section">
    <div className="whitelabelCtaContainer">
      <h1 className="whitelabelTitle">
        Want to know more?<br />Want a quote or try a demo?<br />Contact Us. No
        strings attached.
      </h1>
      <a href="mailto: founders@dexlab.io">
        <button className="getintouch">GET IN TOUCH NOW</button>
      </a>
    </div>
  </Container>
);

export default WhiteLabelCTA;
