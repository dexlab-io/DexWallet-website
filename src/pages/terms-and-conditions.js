import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import TermsAndConditionDescription from '../components/TermsAndConditionDescription';
import Newsletter from '../components/NewsletterForm';

export default class TermsConditions extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title={config.siteName}
          description={config.description}
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <TermsAndConditionDescription />
        <Newsletter />
      </Layout>
    );
  }
}
