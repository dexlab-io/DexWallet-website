import React, { Component } from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PictureLeft from '../components/PictureLeft';
import PictureRight from '../components/PictureRight';
import PictureFull from '../components/PictureFull';
import Notifications from '../components/Notifications';
import BigX from '../components/BigX';
import ProHero from '../components/ProHero';
import Comparison from '../components/Comparison';
import SocialProof from '../components/SocialProof';
// import SavingAccount from '../components/SavingAccount';
// import Payments from '../components/Payments';
// import NativedApps from '../components/NativedApps';
// import Quotes from '../components/Quotes';
// import Staking from '../components/Staking';
  <script src="https://js.stripe.com/v3" />;

class Pro extends Component {
  render() {
    return (
      <Layout>
        <Seo
          title={config.siteName}
          description={config.description}
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <BigX />
        <ProHero
          title="Dexwallet Pro"
          // subtitle=""
          class="proHero"
        />

        <SocialProof />

        <h1 className="centeredTitle">Smart Notifications</h1>
        <Notifications />

        <PictureLeft
          title="Multi-wallet & Watch-hmode"
          subtitle="You will be able to create and import all the wallets you need, also in watch-mode if you want to maximize security"
          url="/img/wallets.jpg"
        />

        <PictureRight
          title="All your balances in one view"
          subtitle="Track your entire portfolio, no matter how many wallets and sources you will be always up to date"
          url="/img/balances.jpg"
        />

        <PictureLeft
          title="Curated News & Investment Signals"
          subtitle="We cherry-pick relevant news from trusted sources and deliver them directly to your wallet"
          url="/img/news.jpg"
        />

        <PictureFull
          title="Deep Charts & Historicals"
          subtitle="A complete analytics overview to research reliable price history and market data to make the right investment decision"
          class="PictureFull DeepCharts"
        />

        <PictureLeft
          title="See only the networks and token you want"
          subtitle={
            "Thanks to our Verified Token Program you won't have to deal with spammy tokens and decide to switch on/off the networks you need"
          }
          url="/img/networks.jpg"
        />

        <PictureRight
          title="Automatic Saving & Custom Spaces"
          subtitle="Set-up automatic saving logics and start saving with ease every month. Visually control your assets by dragging value in different spaces"
          url="/img/autosaving.jpg"
        />

        <PictureFull
          title="Keys Guardian"
          subtitle="Paper wallets alone are risky. We want you to feel safe. Make a friend your Guardian, be able to retrieve your keys shall you ever lose them!"
          class="PictureFull guardians"
        />

        <PictureLeft
          title="Bluetooth Ledger Support"
          subtitle="Connect your last hardware wallet via Bluetooth in just a few seconds. No USB needed"
          url="/img/ledger.jpg"
        />

        <PictureRight
          title="Priority Updates"
          subtitle="Dexwallet PRO users will always be the first to get new features or bug fixes thanks to the priority updates program"
          url="/img/updates.jpg"
        />

        <PictureLeft
          title="Ens & Addressbook"
          subtitle={
            "Create, Receive and send using Human readable addresses like alessio.dexwallet.eth. Manage your Addressbook so you won't have to type addresses over and over"
          }
          url="/img/addressbook.jpg"
        />

        <PictureRight
          title="Premium Network Cards"
          subtitle="For our Lifetime Supporters only, we are designing exclusive premium networks cards. Crypto has never been so stylish"
          url="/img/lifetimecards.jpg"
        />

        <span className="whitelabelCTAtitle">
          <span className="centerContentText">
            <h1 className="sectionTitle">Go Pro now</h1>
            <h2 className="sectionSub">
              Only $89.99 per year or $8.99/mo.
              <br />
              Preorder it now for $249.99 and become a Lifetime Supporter.
            </h2>
          </span>
          <a className="wlButton" href="#">
            Preorder
          </a>
        </span>

        <h1 className="centeredTitle">Why going Pro?</h1>
        <Comparison />
      </Layout>
    );
  }
}

export default Pro;
