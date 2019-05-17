import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Hero = () => {
  return (
    <section className="hero">
      <span className="columnText">
        <span className="leftContentText">
          <h1 className="sectionTitle animatedTitle">
            The mobile wallet for decentralized finance
          </h1>
          <h2 className="sectionSub animatedSubitle">
            Borrowing, Lending, Exchange and native in-wallet Staking for
            everyone. Start building your passive income strategy now.
          </h2>

          <span className="storeButtonContainer">
            <div className="storebutton">
              <OutboundLink
                className="storebutton"
                href="https://itunes.apple.com/us/app/dexwallet/id1434816150?ls=1&mt=8"
              >
                <img
                  src="img/appStore.svg"
                  height="50"
                  alt="Apple Store Button"
                />
              </OutboundLink>
            </div>
            {/* <div className="storebutton"><a
                                href="https://play.google.com/store/apps/details?id=io.dexlab.dexwallet">
                                <img src="/img/playStore.png" height="55"></img>
                            </a></div> */}
          </span>
        </span>
      </span>
    </section>
  );
};

export default Hero;
