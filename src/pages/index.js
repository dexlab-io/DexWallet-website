import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import BigX from '../components/BigX';
import BigPhone from '../components/BigPhone';
import Whitelabel from '../components/Whitelabel';
import Staking from '../components/Staking';
import Integrations from '../components/Integrations';
import SavingAccount from '../components/SavingAccount';
import Payments from '../components/Payments';
import NativedApps from '../components/NativedApps';
import WlFeatures from '../components/WlFeatures';
// import MediumPosts from '../components/MediumPosts';
import NewsletterForm from '../components/NewsletterForm';
import MoonPay from '../components/MoonPay';
import TeamMember from '../components/TeamMember';
import TeamVideo from '../components/TeamVideo';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title={config.siteName}
          description={config.description}
          url={`${config.siteUrl}`}
          image={config.image}
          keywords={config.keywords}
        />
        <BigX />
        <Hero />
        <BigPhone />
        <Integrations />
        <TeamMember
          name="Michael Dunworth - CEO Wyre"
          description={
            "DexWallet gets it. The product is beautiful and isn't just a wallet. It's a lens into your financial machine that's working for you. Returns, loans, exchanging, if it's not the UI for the next 100M, then whatever will be is going to be damn close."
          }
          url="/img/michael.jpg"
          alt="Michael Dunworth"
        />
        <Staking />
        <TeamMember
          name="Tom Bean - CEO BZX"
          description="The DexWallet app provides a slick interface and intuitive gateway to decentralized finance. The team behind it is talented and knows what they are doing. I look forward to partnering with them while we work together to build out the future of finance, and unleash the power of the blockchain."
          url="/img/tom.jpg"
          alt="Tom Bean"
        />
        <TeamVideo />
        <SavingAccount />
        <TeamMember
          name="Kain Warwick - Founder Synthetix"
          description="A mobile native integration of defi protocols is critical to increasing accessibility of DeFi."
          url="/img/kain.jpg"
          alt="Kain Warwick"
        />
        <MoonPay />
        <TeamMember
          name="Patricio Worthalter - CEO Milliwatt"
          description="I truly believe that wallets are a major component in the road to adoption and mainstream use of cryptocurrencies and Dexwallet has positioned as an agile user-focused product."
          url="/img/patricio.jpg"
          alt="Patricio Worthalter"
        />
        <NativedApps />
        <Payments />
        <TeamMember
          name="Gabriedle Rigo - CEO RigoBlock"
          description="DexWallet is a gateway to the decentralized world, reducing friction for the user, a much needed app for crypto adoption."
          url="/img/rigo.jpg"
          alt="Gabriedle Rigo"
        />
        <Whitelabel />
        <WlFeatures />
        {/* <MediumPosts /> */}
        <NewsletterForm />
      </Layout>
    );
  }
}
