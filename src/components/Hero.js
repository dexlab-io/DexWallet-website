import React from 'react';
import { useMixpanel } from 'gatsby-plugin-mixpanel';

const Hero = () => {
  const mixpanel = useMixpanel();

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
              <a
                onClick={() => {
                  mixpanel.track('AppStore hero button');
                }}
                className="storebutton"
                href="https://itunes.apple.com/us/app/dexwallet/id1434816150?ls=1&mt=8"
              >
                <img
                  src="img/appStore.svg"
                  height="50"
                  alt="Apple Store Button"
                />
              </a>
            </div>
            <div className="storebutton discordButtonMobile">
              <a
                onClick={() => {
                  mixpanel.track('Discord Mobile CTA');
                }}
                className="storebutton"
                href="/discord"
              >
                <img
                  src="img/discordbutton.svg"
                  height="50"
                  alt="Discord Button"
                />
              </a>
            </div>
            <div className="storebutton discordButtonMobile">
              <a
                onClick={() => {
                  mixpanel.track('Buy Crypto Mobile CTA');
                }}
                className="storebutton"
                href="/buycrypto"
              >
                <img
                  src="img/buycrypto.svg"
                  height="50"
                  alt="Buy Cyrpto Button"
                />
              </a>
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
