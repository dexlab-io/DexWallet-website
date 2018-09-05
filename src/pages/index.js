import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

import HomeHero from '../components/HomeHero';
import Collaborators from '../components/Collaborators';
import Features from '../components/Features';
import GetOurLastUpdates from '../components/GetOurLastUpdates';

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
        <Collaborators />
        <Features />
        <GetOurLastUpdates />
      </Layout>
    );
  }
}
