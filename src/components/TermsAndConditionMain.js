import React from 'react';
import styled from 'styled-components';

import PreHeader from './PreHeader';
import TopHeader from './TopHeader';
import TermsAndConditionsDescription from './TermsAndConditionsDescription';
import TermsAndConditionsItem from './TermsAndConditionsItem';

const Container = styled.section`
  padding-top: 0rem;
`;

const TermsAndConditionMain = () => (
  <React.Fragment>
    <PreHeader />
    <Container className="section">
      <div className="container is-size-6 primary-font">
        <TopHeader />
        <TermsAndConditionsDescription />
      </div>
    </Container>
  </React.Fragment>
);

export default TermsAndConditionMain;
