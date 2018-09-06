import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import TopHeader from './TopHeader';
import PreHeader from './PreHeader';

const Container = styled.section`
  background: url('/images/header_bg.png');
  background-size: 100%;
  background-repeat: no-repeat;

  padding-top: 0rem;
  padding-bottom: 16rem;
  @media only screen and (max-width: 600px) {
    background: url('/images/mobile_bg.png');
    background-size: 100%;
    background-repeat: no-repeat;
    padding-bottom: 2rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    background-size: 125%;
    padding-bottom: 2rem;
  }
  .level-item {
  }
  .title {
    @media only screen and (max-width: 600px) {
      font-size: 2.5rem !important;
    }
  }
  .subtitle {
    line-height: 1.7rem;
    text-align: justify;
    width: 92%;
    @media only screen and (max-width: 600px) {
      line-height: 2.1rem;
      margin-top: 0rem !important;
      width: 100%;
    }
    @media only screen and (max-width: 1024px) and (min-width: 600px) {
      width: 100%;
    }
  }
`;

const StoreButtons = styled.div`
  padding-top: 2.1rem;
  img {
    height: 2.5rem;
    @media only screen and (max-width: 600px) {
      height: 3.1rem;
    }
  }
`;

const Wrapper = styled.div`
  padding-top: 8%;
  @media only screen and (max-width: 600px) {
    padding-top: 118%;
  }
`;

const TextStyled = styled.div`
  font-family: ${theme.secondaryFont};
`;

class HomeHero extends React.Component {
  state = {
    isVisible: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = () => {
    if (window.scrollY > 90) {
      this.setState({ isVisible: false });
    } else {
      this.setState({ isVisible: true });
    }
  };

  render() {
    const { isVisible } = this.state;

    return (
      <React.Fragment>
        <PreHeader />
        <Container className="section">
          <div className="container">
            <TopHeader />
            <div className="is-hidden-mobile">
              <div className="columns">
                <Wrapper className="column is-two-thirds">
                  <h1 className="title is-size-1 has-text-black has-text-centered-mobile">
                    The only Wallet you need.
                  </h1>
                  <h2 className="subtitle is-size-5 has-text-black has-text-weight-light">
                    Finally you can be in control of your assets, secure your
                    private keys and enjoy the power of blockchain in a new,
                    more free and fun way!
                  </h2>
                  <StoreButtons className="columns">
                    <div className="column is-one-quarter">
                      <nav className="level is-mobile">
                        <div className="level-item has-text-centered has-text-black has-text-weight-semibold is-size-6 is-hidden-mobile">
                          <TextStyled className="">Get it now on</TextStyled>
                        </div>
                        <div className="level-item has-text-centered">
                          <a href="#">
                            <img src="/images/iOs_button@2x.png" alt="ios" />
                          </a>
                        </div>
                        <div className="level-item has-text-centered">
                          <a href="#">
                            <img
                              src="/images/play_button@2x.png"
                              alt="google-play"
                            />
                          </a>
                        </div>
                      </nav>
                    </div>
                  </StoreButtons>
                </Wrapper>
                <div className="column" />
              </div>
            </div>

            {/* mobile view alternate columns */}

            <div className="is-hidden-tablet">
              <div className="columns">
                <div className="column" />
                <Wrapper className="column is-two-thirds">
                  <h1 className="title is-size-1 has-text-black has-text-centered-mobile">
                    The only Wallet you need.
                  </h1>
                  <h2 className="subtitle is-size-5 has-text-black has-text-weight-light">
                    Finally you can be in control of your assets, secure your
                    private keys and enjoy the power of blockchain in a new,
                    more free and fun way!
                  </h2>
                  <StoreButtons className="columns">
                    <div className="column is-one-quarter">
                      <nav className="level is-mobile">
                        <div className="level-item has-text-centered has-text-black has-text-weight-semibold is-size-6 is-hidden-mobile">
                          <TextStyled className="">Get it now on</TextStyled>
                        </div>
                        <div className="level-item has-text-centered">
                          <a href="#">
                            <img src="/images/iOs_button@2x.png" alt="ios" />
                          </a>
                        </div>
                        <div className="level-item has-text-centered">
                          <a href="#">
                            <img
                              src="/images/play_button@2x.png"
                              alt="google-play"
                            />
                          </a>
                        </div>
                      </nav>
                    </div>
                  </StoreButtons>
                </Wrapper>
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default HomeHero;
