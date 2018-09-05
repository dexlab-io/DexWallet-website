import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import theme from '../utils/theme';

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
    padding-bottom: calc(1.9em - 1px) !important;
    padding-top: calc(1.9em - 1px) !important;
    padding-left: calc(1.625em - 1px);
    box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.1);
  }
  .field.is-grouped > .control:not(:last-child) {
    @media only screen and (max-width: 600px) {
      margin-right: 0rem !important;
    }
  }
  .checkbox {
    float: left;
  }
`;

const PlaneImageStyled = styled.img`
  position: absolute;
  top: 42%;
  left: 4%;
  width: 22.5rem;
  @media only screen and (max-width: 600px) {
    top: 10%;
    left: -30%;
  }
`;

const ButtonWrapper = styled.a`
  background-color: ${theme.primaryColor} !important;
  padding-left: 1.5em !important;
  padding-right: 1.5em !important;
  transition: 0.5s;
  :hover {
    background-color: ${darken(0.2, theme.primaryColor)} !important;
  }
`;

const CheckBoxTxt = styled.span`
  font-size: 0.625rem;
  padding-left: 0.5rem;
  color: white;
`;

const LabelStyled = styled.label`
  line-height: 3rem;
`;

const SocialContainer = styled.nav`
  padding: 3.8rem 2rem;
  @media only screen and (max-width: 600px) {
    padding: 0rem;
    padding-top: 1.5rem;
    margin-bottom: -0.5rem;
  }
`;

const GetOurLastUpdates = () => (
  <Container className="section">
    <PlaneImageStyled src="/images/paperplane@2x.png" alt="plane" />
    <div className="container">
      <div className="columns">
        <div className="column has-text-white has-text-centered-mobile">
          <LabelStyled className="title is-size-3 has-text-white ">
            Get our last updates
          </LabelStyled>
          <div className="field is-grouped">
            <p className="control is-expanded has-text-black">
              <input
                className="input is-medium is-size-7"
                type="text"
                placeholder="Your@email.here"
              />
            </p>
            <p className="control is-hidden-mobile">
              <ButtonWrapper className="button is-info is-medium">
                <span className="is-size-6">SUBMIT</span>
              </ButtonWrapper>
            </p>
          </div>
          <label className="checkbox">
            <input type="checkbox" />
            <CheckBoxTxt className="title is-size-7-mobile">
              I want to receive the newsletter
            </CheckBoxTxt>
          </label>
        </div>
        <br />
        <div className="column">
          <SocialContainer className="level is-mobile">
            <div className="level-item has-text-centered">
              <a className="link is-info" href="https://t.me/joindexlab">
                <img src="/images/social/icon_telegram.svg" alt="telegram" />
              </a>
            </div>
            {/*
            <p className="level-item has-text-centered">
              <a className="link is-info" href="">
                <img src="/images/social/icon_wechat.svg" alt="wechat" />
              </a>
            </p>
            */}
            <p className="level-item has-text-centered">
              <a className="link is-info" href="https://medium.com/dexlab-io">
                <img src="/images/social/icon_medium.svg" alt="medium" />
              </a>
            </p>
            <p className="level-item has-text-centered">
              <a className="link is-info" href="https://twitter.com/dexlab_io">
                <img src="/images/social/icon_twitter.svg" alt="twitter" />
              </a>
            </p>
            <p className="level-item has-text-centered">
              <a className="link is-info" href="https://www.facebook.com/dexlabio/">
                <img src="/images/social/icon_facebook.svg" alt="facebook page" />
              </a>
            </p>
            <p className="level-item has-text-centered">
              <a className="link is-info" href="https://github.com/dexlab-io">
                <img src="/images/social/icon_github.svg" alt="github" />
              </a>
            </p>
            <p className="level-item has-text-centered">
              <a className="link is-info" href="https://www.reddit.com/r/dexlab/">
                <img src="/images/social/icon_reddit.svg" alt="reddit" />
              </a>
            </p>
          </SocialContainer>
        </div>
      </div>
    </div>
  </Container>
);

export default GetOurLastUpdates;
