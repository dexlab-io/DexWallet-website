import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-top: 4rem;
`;

const TermsAndConditionsDescription = () => (
  <React.Fragment>
    <ContentWrapper className="content">
      <h1 className="is-size-1 has-text-black has-text-centered-mobile">
        DexWallet Terms & Conditions of Use
      </h1>
      <p>
        Lorem ipsum<sup>
          <a>[1]</a>
                   </sup>{' '}
        dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus
        ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo
        nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin
        vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!
      </p>
    </ContentWrapper>
  </React.Fragment>
);

export default TermsAndConditionsDescription;
