import React from 'react';
import styled from 'styled-components';

import TopHeader from './TopHeader';
import PreHeader from './PreHeader';

const Container = styled.section`
  background: url('/images/Header_bg.svg');
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 0rem;
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
    @media only screen and (max-width: 600px) {
      line-height: 2.1rem;
      margin-top: 0rem !important;
    }
  }
`;

const StoreButtons = styled.div`
  padding-top: 2.1rem;
  img {
    height: 2.5rem;
    @media only screen and (max-width: 600px) {
      height: 3.3rem;
    }
  }
`;

const HeroText = styled.div`
  padding-top: 8%;
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
            <div className="columns">
              <HeroText className="column is-two-thirds">
                <h1 className="title is-size-1 has-text-black has-text-centered-mobile">
                  The only Wallet you need.
                </h1>
                <h2 className="subtitle is-size-5 has-text-black has-text-weight-light">
                  Finally you can be in control of your assets, secure your
                  private keys and <br />
                  enjoy the power of blockchain in a new, more free and fun way!
                </h2>
                <StoreButtons className="columns">
                  <div className="column is-one-quarter">
                    <nav className="level is-mobile">
                      <div className="level-item has-text-centered has-text-black has-text-weight-semibold is-size-6 is-hidden-mobile">
                        <div className="">Get it now on</div>
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
              </HeroText>
              <div className="column">
                <img src="/images/iphoneX_header_forefront.png" alt="iphonex" />
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default HomeHero;
