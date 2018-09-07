import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

import HomeHero from '../components/HomeHero';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';
import Partners from '../components/Partners';

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
        <HomeHero />
        <Partners />
        <Features />
      </Layout>
    );
  }
}
