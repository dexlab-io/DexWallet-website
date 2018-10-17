import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

import WhitelabelHero from '../components/WhitelabelHero';
import WhitelabelFeatures from '../components/WhitelabelFeatures';
import WhitelabelPrices from '../components/WhitelabelPrices';
import WhiteLabelCTA from '../components/WhiteLabelCTA';

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
        <WhitelabelHero />
        <WhitelabelFeatures />
        <WhitelabelPrices />
        <WhiteLabelCTA />
      </Layout>
    );
  }
}
