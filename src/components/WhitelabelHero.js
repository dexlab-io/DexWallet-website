import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import TopHeader from './TopHeader';
import PreHeader from './PreHeader';

const Container = styled.section`
  padding-top: ${props => (props.isHome ? '3%' : '0rem')};
  background-color: #f2f2f2;
  .Whitelabel_Hero {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .columnText {
    flex-basis: 400px;
    flex-grow: 3;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
  }

  .contentText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${props => (props.isHome ? '24.5% 0 0 0' : '17.5% 0 0 0')};
  }

  .columnPhone {
    flex-basis: 200px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${props => (props.isHome ? '6.3%' : '-20.5%')};
    margin-top: 6.3%;
  }

  img.iphonepic {
    height: auto;
    max-width: ${props => (props.isHome ? '222px' : '325px')};
  }

  .whitelabelTitle {
    width: 82%;
    font-family: ${theme.primaryFont};
    font-size: 2.6rem;
    font-weight: ${theme.fontRegular};
    color: ${theme.textColorBlack};
    margin: 0;
    line-height: 2.7rem;
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .whitelabelSub {
    font-family: ${theme.secondaryFont};
    font-size: 1.3rem;
    font-weight: ${theme.fontLite};
    color: ${theme.textColorBlack};
    margin-block-end: 1rem;
    margin-block-start: 1rem;
  }

  button.getintouch {
    padding: 10px 22px 12px 22px;
    height: 42px;
    border-radius: 6px;
    background-color: #2e3c4f;
    font-size: 14px;
    color: ${theme.textColorWhite};
    font-family: ${theme.secondaryFont};
    font-weight: ${theme.fontRegular};
    border: none;
    cursor: pointer;
  }
  button.getintouch:hover {
    background-color: rgb(59, 84, 121);
  }

  @media (max-width: 840px) {
    img.iphonepic {
      height: auto;
      max-width: 200px;
    }
  }

  @media (max-width: 740px) {
    .contentText {
      align-items: center;
      padding: 20% 4% 0% 4%;
    }
  }

  /* @media only screen and (max-width: 600px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
  }
  @media screen and (min-width: 1024px) and (max-width: 1366px) {
  }
  @media screen and (min-width: 1000px) and (max-width: 1024px) {
  } */
`;

const WhitelabelHero = ({ isHome }) => (
  <React.Fragment>
    {/* {isHome ? null : <PreHeader /> */}
    {isHome ? null : <PreHeader />}
    <Container className="section" isHome={isHome}>
      <div className="container">
        {isHome ? null : <TopHeader />}

        <div className="columns Whitelabel_Hero">
          <div className="column columnPhone">
            <img
              className="iphonepic"
              src="/images/whitelabel/iphone.png"
              alt="iphone"
              border="0"
            />
          </div>
          <div className="column columnText">
            <span className="contentText">
              <h1 className="whitelabelTitle">
                Whitelabel Wallet solution for your Company.
              </h1>
              <h2 className="whitelabelSub">
                All the DexWallet functionalities and much more in a <br />
                ready-to-use solution that will give a kick to <br />
                your crypto-project.
              </h2>
              <a href="mailto: founders@dexlab.io">
                <button className="getintouch">
                  {isHome ? 'GET STARTED' : 'GET IN TOUCH NOW'}
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </Container>
  </React.Fragment>
);

//

export default WhitelabelHero;
