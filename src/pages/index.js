import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import BigX from '../components/BigX';
import BigPhone from '../components/BigPhone';
import Whitelabel from '../components/Whitelabel';
import Quotes from '../components/Quotes';
import Staking from '../components/Staking';
import Integrations from '../components/Integrations';
import SavingAccount from '../components/SavingAccount';
import Payments from '../components/Payments';
import NativedApps from '../components/NativedApps';
import WlFeatures from '../components/WlFeatures';
import MediumPosts from '../components/MediumPosts';
import NewsletterForm from '../components/NewsletterForm';
import MoonPay from '../components/MoonPay';

export default class IndexPage extends React.Component {
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
        <Hero />
        <BigPhone />
        <Integrations />
        <Staking />
        <SavingAccount />
        <MoonPay />
        <NativedApps />
        <Payments />
        <Quotes />
        <Whitelabel />
        <WlFeatures />
        <MediumPosts />
        <NewsletterForm />
      </Layout>
    );
  }
}
