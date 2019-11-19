import React from 'react';
import styled from 'styled-components';
import { useMixpanel } from 'gatsby-plugin-mixpanel';

const Container = styled.div`
  position: fixed;
  left: auto;
  top: auto;
  right: 2%;
  bottom: 4%;
  z-index: 200;
  display: block;
  width: 390px;
  height: auto;
  margin-top: 0px;
  margin-right: 0%;
  margin-bottom: 0%;
  padding: 20px 10px 16px 10px;
  border-radius: 10px;
  background-color: #7289da;
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

function DiscordBannerDumb(props) {
  console.log(props);
  const mixpanel = useMixpanel();

  return (
    <Container>
      <A
        href="https://discord.gg/eJTYNUF"
        onClick={() => {
          mixpanel.track('Join Discord');
        }}
      >
        <IMG
          src="../img/DiscordLogoFull.png"
          width="147.06"
          height="50"
          alt="Discord Logo"
        />
      </A>
      <TextContainer>
        <A
          href="https://discord.gg/eJTYNUF"
          onClick={() => {
            mixpanel.track('Join Discord');
          }}
        >
          <Title>Join the conversation!</Title>
        </A>
        <A
          href="https://discord.gg/eJTYNUF"
          onClick={() => {
            mixpanel.track('Join Discord');
          }}
        >
          <Sub>Meet the smartest people in DeFi!</Sub>
        </A>
      </TextContainer>
      <Close
        src="https://assets.website-files.com/5c73e3cf2d05ce73f79a3d10/5d8dddc086d4c075ee18cdff_Group.svg"
        width="14"
        height="14"
        data-w-id="b6636422-88c3-3400-406f-7e63a027fe17"
        alt=""
        class="image-65"
        onClick={props.onClose}
      />
    </Container>
  );
}

class DiscordBanner extends React.Component {
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

    return isOpen ? <DiscordBannerDumb onClose={() => this.onClose()} /> : null;
  }
}

export default DiscordBanner;
