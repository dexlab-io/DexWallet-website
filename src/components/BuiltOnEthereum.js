import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 88%;
  padding: 2% 6% 0 6%;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  /* @media (max-width: 926px) {
    flex-direction: column;
    align-content: center;
  } */

  @media (max-width: 926px) {
    display: none;
  }
`;

const IMG = styled.span`
margin: 1rem 0;
  }
`;

const BuiltOnEthereum = () => {
  return (
    <Container>
      <IMG>
        <img src="img/ethDark.svg" height="50" alt="Built on Ethereum" />
      </IMG>
    </Container>
  );
};

export default BuiltOnEthereum;
