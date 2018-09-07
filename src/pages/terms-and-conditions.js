import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PreHeader from '../components/PreHeader';
import TopHeader from '../components/TopHeader';
import TermsAndConditionMain from '../components/TermsAndConditionMain';

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

        <TermsAndConditionMain />
      </Layout>
    );
  }
}
