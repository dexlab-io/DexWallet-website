import React from 'react';
import styled from 'styled-components';
import { useMixpanel } from 'gatsby-plugin-mixpanel';

const Container = styled.div`
  position: fixed;
  left: auto;
  top: auto;
  right: 2%;
  bottom: 20%;
  z-index: 200;
  display: block;
  width: 390px;
  height: auto;
  margin-top: 0px;
  margin-right: 0%;
  margin-bottom: 0%;
  padding: 20px 10px 16px 10px;
  border-radius: 10px;
  /* background-color: #7289da; */
  background-image: url('../img/piebg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  color: #fff;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IMG = styled.img`
  margin-right: 20px;
`;

const TextContainer = styled.span`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 700;
`;

const Sub = styled.span`
  font-weight: 300;
`;

const Close = styled.img`
  position: absolute;
  left: auto;
  top: 12%;
  right: 3%;
  bottom: 0%;
  z-index: 300;
  margin-top: 0px;
  margin-right: 0px;
  margin-left: 0px;
  opacity: 1;
  cursor: pointer;
`;

const A = styled.a`
  color: #fff;
  &:hover {
    color: #fff;
    opacity: 0.8;
  }
`;

function PieBannerDumb(props) {
  console.log(props);
  const mixpanel = useMixpanel();

  return (
    <Container>
      <A
        href="piedao.org"
        onClick={() => {
          mixpanel.track('Join Pie');
        }}
      >
        <IMG
          src="../img/pielogo2.png"
          width="147"
          height="29"
          alt="piedao Logo"
        />
      </A>
      <TextContainer>
        <A
          href="https://piedao.org/"
          onClick={() => {
            mixpanel.track('Join Pie');
          }}
        >
          <Title>Join the Pie DAO!</Title>
        </A>
        <A
          href="https://piedao.org/"
          onClick={() => {
            mixpanel.track('Join Pie');
          }}
        >
          <Sub>Top investment strategies for everyone</Sub>
        </A>
      </TextContainer>
      <Close
        src="https://assets.website-files.com/5c73e3cf2d05ce73f79a3d10/5d8dddc086d4c075ee18cdff_Group.svg"
        width="14"
        height="14"
        data-w-id="b6636422-88c3-3400-406f-7e63a027fe17"
        alt="close"
        class="image-65"
        onClick={props.onClose}
      />
    </Container>
  );
}

class PieBanner extends React.Component {
  state = {
    isOpen: true,
  };

  onClose() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { isOpen } = this.state;

    return isOpen ? <PieBannerDumb onClose={() => this.onClose()} /> : null;
  }
}

export default PieBanner;
