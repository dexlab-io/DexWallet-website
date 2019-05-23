import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
                        width: 92%;
                        padding: 4%;
                        display: flex;
                        flex-direction: column;
                        opacity: 0.5;

  }
`;

const HeaderImg = styled.img.attrs({
  src: '/img/alllogos.png',
})`
  width: 100%;
  height: auto;
  border: none;
`;

const SocialProof = props => {
  return (
    <Container>
      <HeaderImg />
    </Container>
  );
};

export default SocialProof;
