import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  background: #1e2624; /* Old browsers */
  line-height: 1.3 !important;
  background: -moz-linear-gradient(
    top,
    #1e2624 0%,
    #2e3c4f 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #1e2624 0%,
    #2e3c4f 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #1e2624 0%,
    #2e3c4f 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e2624', endColorstr='#2e3c4f',GradientType=0 );
  .Whitelabel_Features {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .containerFeatures {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    justify-content: space-between;
  }

  .featurestitle {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.8rem;
    font-weight: 300;
    color: #ffffff;
    text-align: center;
    margin: 0;
    margin-top: 15%;
  }

  .listitemtitle {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    color: #ffffff;
    margin: 0;
  }

  .listsubtitle {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8rem;
    font-weight: 300;
    color: #ffffff;
    margin: 2px 0 0 0;
  }

  ul.FeaturesList {
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 3.5rem;
  }

  li.featureitem {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-basis: 100px;
    background-color: #2e3c4f;
    margin-bottom: 1rem;
  }

  .left {
    display: flex;
    flex-basis: 100px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .right {
    flex-basis: 100px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px 0 0;
  }

  .circle {
    display: inline-block;
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 100%;
    text-align: center;
    color: #1e2624;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  .circle.green {
    background-color: #2edfb7;
  }

  .circle.blue {
    background-color: #5274a2;
  }

  .circle.purple {
    background-color: #855ced;
  }

  .tag {
    font-size: 0.7rem;
    padding: 10px;
    /* height: 20px; */
    line-height: 0px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 10px;
    height: 0em;
  }

  .tag.green {
    background-color: #2edfb7;
    color: #1e2624;
  }

  .tag.blue {
    background-color: #5274a2;
    color: #ffffff;
  }

  .tag.purple {
    background-color: #855ced;
    color: #ffffff;
  }

  @media (max-width: 600px) {
    .listsubtitle {
      display: none;
    }

    li {
      flex-basis: 130px;
    }
  }
`;

const WhitelabelFeatures = () => (
  <Container className="section">
    <div className="container Whitelabel_Features">
      <span className="containerFeatures" />
      <p className="featurestitle">All the Features you need</p>
      <ul className="FeaturesList">
        <li className="featureitem">
          <span className="left">
            <span className="circle green">1</span>
          </span>
          <span className="right">
            <p className="listitemtitle">
              Ethereum and ERC20 ERC233 Tokens{' '}
              <span className="tag green">BASIC</span>
            </p>
            <p className="listsubtitle">
              Full support for any ERC20 and ERC223 tokens on Ethereum network.
            </p>
          </span>
        </li>

        <li className="featureitem">
          <span className="left">
            <span className="circle green">2</span>
          </span>
          <span className="right">
            <p className="listitemtitle">
              Send and Receive Assets <span className="tag green">BASIC</span>
            </p>
            <p className="listsubtitle">
              Receive or Send assets by simply typing eth address or scanning QR
              codes.
            </p>
          </span>
        </li>

        <li className="featureitem">
          <span className="left">
            <span className="circle green">3</span>
          </span>
          <span className="right">
            <p className="listitemtitle">
              Transaction History <span className="tag green">BASIC</span>
            </p>
            <p className="listsubtitle">
              User can Inspect transactions, records are shown without leaving
              the app in an easy-to-read fashion.
            </p>
          </span>
        </li>

        <li className="featureitem">
          <span className="left">
            <span className="circle green">4</span>
          </span>
          <span className="right">
            <p className="listitemtitle">
              HD Wallet Creation and Import{' '}
              <span className="tag green">BASIC</span>
            </p>
            <p className="listsubtitle">
              A state-of-the-art security is at the core of DexWallet’s
              underlying technology, leveraging on innovative solutions.
            </p>
          </span>
        </li>

        <li className="featureitem">
          <span className="left">
            <span className="circle blue">5</span>
          </span>
          <span className="right">
            <p className="listitemtitle">
              Localization <span className="tag blue">PRO</span>
            </p>
            <p className="listsubtitle">
              DexWallet is already available in English, Chinese and Italian.
              We’re ready to support your language.
            </p>
          </span>
        </li>

        <li className="featureitem">
          <span className="left">
            <span className="circle blue">6</span>
          </span>
          <span className="right">
            <p className="listitemtitle">
              Onboarding <span className="tag blue">PRO</span>
            </p>
            <p className="listsubtitle">
              Walk new users through the wallet features and functionalities.
            </p>
          </span>
        </li>

        <li className="featureitem">
          <span className="left">
            <span className="circle blue">7</span>
          </span>
          <span className="right">
            <p className="listitemtitle">
              Token Info <span className="tag blue">PRO</span>
            </p>
            <p className="listsubtitle">
              Detailed information for your favorite token is only one-click
              away.
            </p>
          </span>
        </li>

        <li className="featureitem">
          <span className="left">
            <span className="circle purple">8</span>
          </span>
          <span className="right">
            <p className="listitemtitle">
              Trade <span className="tag purple">CUSTOM</span>
            </p>
            <p className="listsubtitle">
              Leverage DexEx solutions to instantly exchange your token directly
              inside the wallet.
            </p>
          </span>
        </li>
      </ul>
    </div>
  </Container>
);

export default WhitelabelFeatures;
