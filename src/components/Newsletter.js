import React from 'react';
import styled from 'styled-components';

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
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-bottom: 1rem;
    padding-top: 7.5rem;
  }
  .columns {
    margin-left: 0rem;
    margin-right: 0rem;
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      padding: 0rem 12rem;
    }
  }
`;

const PlaneImageStyled = styled.img`
  position: absolute;
  top: 40%;
  left: 1.5%;
  width: 22%;
  @media only screen and (max-width: 600px) {
    top: 10%;
    left: -30%;
    width: 26.5rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    top: 10%;
    width: 22rem;
    left: 26.5%;
  }
  @media only screen and (max-width: 1780px) {
    top: 10%;
    width: 22rem;
  }
`;

const SocialContainer = styled.nav`
  padding: 3.8rem 2rem;
  @media only screen and (max-width: 600px) {
    padding: 0rem;
    padding-top: 1.5rem;
    margin-bottom: -0.5rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-bottom: 2rem;
  }
`;

const Newsletter = () => (
  <Container className="section">
    <PlaneImageStyled
      className=""
      src="/images/paperplane@2x.png"
      alt="plane"
    />
    <div className="container">
      <div className="columns">
        <NewsletterForm isVisible />
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
              <a
                className="link is-info"
                href="https://www.facebook.com/dexlabio/"
              >
                <img src="/images/social/icon_facebook.svg" alt="fb" />
              </a>
            </p>
            <p className="level-item has-text-centered">
              <a className="link is-info" href="https://github.com/dexlab-io">
                <img src="/images/social/icon_github.svg" alt="github" />
              </a>
            </p>
            <p className="level-item has-text-centered">
              <a
                className="link is-info"
                href="https://www.reddit.com/r/dexlab/"
              >
                <img src="/images/social/icon_reddit.svg" alt="reddit" />
              </a>
            </p>
          </SocialContainer>
        </div>
      </div>
    </div>
  </Container>
);

export default Newsletter;
