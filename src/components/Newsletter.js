import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import NewsletterForm from './NewsletterForm';

const Container = styled.section`
  position: relative;
  background-color: #78b4e5;
  padding: 5.68rem 0rem;
  @media only screen and (max-width: 600px) {
    padding-top: 7rem;
    padding-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .columns {
    margin-left: 0rem;
    margin-right: 0rem;
  }
  .field:not(:last-child) {
    margin-bottom: 0rem;
  }
  input {
    border-color: transparent;
    padding-bottom: calc(1.9em - 1px) !important;
    padding-top: calc(1.9em - 1px) !important;
    padding-left: calc(1.625em - 1px);
    box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0);
  }
  .field.is-grouped > .control:not(:last-child) {
    @media only screen and (max-width: 600px) {
      margin-right: 0rem !important;
    }
  }
  .wrapper {
    float: left;
  }
  .wrapper {
    position: relative;
  }
  .wrapper input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    display: block;
  }
  .checkmark {
    position: absolute;
    top: 7px;
    left: 0;
    height: 0.75rem;
    width: 0.75rem;
    background-color: ${theme.textColorWhite};
    border-radius: 2px;
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
  .wrapper input:checked ~ .checkmark:after {
    display: block;
  }
  .wrapper .checkmark:after {
    left: 5px;
    top: -1px;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const PlaneImageStyled = styled.img`
  position: absolute;
  top: 40%;
  left: 1.5%;
  width: 26.5rem;
  @media only screen and (max-width: 600px) {
    top: 10%;
    left: -30%;
  }
  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    top: 64%;
    left: -13%;
  }
`;

const SocialContainer = styled.nav`
  padding: 3.8rem 2rem;
  @media only screen and (max-width: 600px) {
    padding: 0rem;
    padding-top: 1.5rem;
    margin-bottom: -0.5rem;
  }
`;

const Newsletter = () => (
  <Container className="section">
    <PlaneImageStyled src="/images/paperplane@2x.png" alt="plane" />
    <div className="container">
      <div className="columns">
        <NewsletterForm />
        <br />
        <div className="column">
          <SocialContainer className="level is-mobile">
            <div className="level-item has-text-centered">
              <a className="link is-info">
                <img src="/images/social/icon_telegram.svg" alt="telegram" />
              </a>
            </div>
            <p className="level-item has-text-centered">
              <a className="link is-info">
                <img src="/images/social/icon_wechat.svg" alt="wechat" />
              </a>
            </p>
            <p className="level-item has-text-centered">
              <a className="link is-info">
                <img src="/images/social/icon_medium.svg" alt="medium" />
              </a>
            </p>
            <p className="level-item has-text-centered">
              <a className="link is-info">
                <img src="/images/social/icon_twitter.svg" alt="twitter" />
              </a>
            </p>
            <p className="level-item has-text-centered">
              <a className="link is-info">
                <img src="/images/social/icon_facebook.svg" alt="fb" />
              </a>
            </p>
            <p className="level-item has-text-centered">
              <a className="link is-info">
                <img src="/images/social/icon_github.svg" alt="github" />
              </a>
            </p>
            <p className="level-item has-text-centered">
              <a className="link is-info">
                <img src="/images/social/icon_reddit.svg" alt="telegram" />
              </a>
            </p>
          </SocialContainer>
        </div>
      </div>
    </div>
  </Container>
);

export default Newsletter;
