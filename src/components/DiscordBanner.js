import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: auto;
  top: auto;
  right: 4%;
  bottom: 4%;
  z-index: 200;
  display: block;
  width: 390px;
  height: auto;
  margin-top: 0px;
  margin-right: 0%;
  margin-bottom: 0%;
  padding: 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const DiscordBanner = () => {
  return <Container>test</Container>;
};

export default DiscordBanner;
