import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PrivacyPolicyMain from '../components/PrivacyPolicy';
import Newsletter from '../components/NewsletterForm';

export default class PrivacyPolicy extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title={config.titlePrivacy}
          description={config.PrivacyDescription}
          url={`${config.siteUrl}`}
          image={config.image}
          keywords={config.keywordsPrivacy}
        />
        <PrivacyPolicyMain />
        <Newsletter />
      </Layout>
    );
  }
}
