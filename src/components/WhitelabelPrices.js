import React from 'react';
import styled from 'styled-components';
import theme from '../utils/theme';

const Container = styled.section`
  padding: 0rem;
  line-height: 1.3 !important;
  .pricesContainer {
    padding: 3.8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: url(https://preview.ibb.co/nDkHmz/bg_prices.png) no-repeat
      center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .priceTitle {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.8rem;
    font-weight: 300;
    color: ${theme.textColorBlack};
    text-align: center;
    margin: 0;
    margin-bottom: 1%;
  }

  ul.pricesList {
    display: flex;
    width: 90%;
    padding: 2% 5% 5% 5%;
    justify-content: center;
    flex-wrap: wrap;
  }

  li.PricesItem {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    width: 280px;
    flex-basis: 280px;
    height: 476px;
    background-color: #2e3c4f;
    margin: 1rem;
    background: url(https://image.ibb.co/bVYbwz/priceitembg.png) no-repeat;
  }

  .topTriangleGreen {
    width: 100%;
    height: 44px;
    background: url(https://image.ibb.co/fTbRUK/triangle_green.png) no-repeat;
  }

  .topTriangleBlue {
    width: 100%;
    height: 44px;
    background: url(https://image.ibb.co/g5o1De/triangle_blue.png) no-repeat;
  }

  .topTrianglePurple {
    width: 100%;
    height: 44px;
    background: url(https://image.ibb.co/c7hNKK/triangle_purple.png) no-repeat;
  }

  .itemTitle {
    font-family: 'Quicksand', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    color: #000000;
    margin: 20px 0 0 0;
  }

  .itemPrice {
    font-family: 'Quicksand', sans-serif;
    font-size: 4rem;
    font-weight: 400;
    color: #000000;
    margin: 10px 0 0 0;
  }

  .itemDescription {
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    font-size: 1rem;
    font-weight: 300;
    color: #000000;
    margin: 10px 20px 0 20px;
  }

  .phonepic {
    width: 70px;
    margin: 20px 0 0 0;
  }

  button.getintouchOutline {
    padding: 10px 22px 12px 22px;
    height: 42px;
    border: solid 1px #855ced !important;
    border-radius: 6px;
    font-size: 14px;
    color: #855ced;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
    margin: 30px 0 20px 0;
  }

  button.getintouchOutline:hover {
    color: #ffffff;
    background-color: #855ced;
  }

  @media (max-width: 1020px) {
    ul.pricesList {
    }
  }

  @media (max-width: 740px) {
  }
`;

const WhitelabelPrices = () => (
  <Container className="section">
    <div className="pricesContainer">
      <p className="priceTitle">You're product is just one click away.</p>
      <ul className="pricesList">
        <li className="PricesItem">
          <span className="topTriangleGreen" />
          <p className="itemTitle">CORE</p>
          <img
            className="phonepic"
            width="70px"
            src="https://image.ibb.co/iaq1eK/phone01.png"
          />{' '}
          <p className="itemPrice">€19k</p>
          <p className="itemDescription">
            All the basic features you need in your hand since day zero.
          </p>
        </li>

        <li className="PricesItem">
          <span className="topTriangleBlue" />
          <p className="itemTitle">PRO</p>
          <img
            className="phonepic"
            width="70px"
            src="https://image.ibb.co/iaq1eK/phone01.png"
          />
          <p className="itemPrice">€29k</p>
          <p className="itemDescription">
            All the core features plus the exclusive pro functionalities in one
            easy-to-use package.
          </p>
        </li>

        <li className="PricesItem">
          <span className="topTrianglePurple" />
          <p className="itemTitle">CUSTOM</p>
          <img
            className="phonepic"
            width="70px"
            src="https://image.ibb.co/gdyFpK/phone02.png"
          />
          <a href="mailto: founders@dexlab.io">
            <button className="getintouchOutline">GET IN TOUCH</button>
          </a>
          <p className="itemDescription">
            All the core features plus the exclusive pro functionalities in one
            easy-to-use package.
          </p>
        </li>
      </ul>
    </div>
  </Container>
);

export default WhitelabelPrices;
