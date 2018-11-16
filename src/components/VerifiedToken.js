import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #f2f2f2;
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Wrapper = styled.div`
  padding: 8rem 2rem;
  margin-top: -6px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 740px) {
    padding: 4rem 1.5rem;
  }

  .columnText {
    flex-basis: 400px;
    flex-grow: 3;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
  }

  .contentText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10% 0 0 0;
  }

  .columnPhone {
    flex-basis: 200px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2% 0 2%;
  }

  img.iphonepic {
    height: auto;
    max-width: 280px;
  }

  img.verifidTokenImg {
    height: auto;
    max-width: 100%;
  }

  .whitelabelTitle {
    font-family: 'Quicksand', sans-serif;
    font-size: 2.6rem;
    font-weight: 400;
    color: #000000;
    margin: 0;
  }

  .whitelabelSub {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.3rem;
    font-weight: 300;
    color: #000000;
    margin-bottom: 0.6rem;
  }

  button.getintouch {
    padding: 10px 22px 12px 22px;
    height: 42px;
    border-radius: 6px;
    background-color: #2e3c4f;
    font-size: 14px;
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }
  button.getintouch:hover {
    background-color: rgb(59, 84, 121);
  }

  @media (max-width: 840px) {
    img.iphonepic {
      height: auto;
      max-width: 200px;
    }
  }

  @media (max-width: 740px) {
    .contentText {
      align-items: center;
    }
  }
`;

const VerifiedToken = () => (
  <div>
    <span className="verifiedTokenCover">
      <img
        className="verifidTokenImg"
        src="https://cdn-images-1.medium.com/max/2000/1*0F6b-1lwHYhj-OkM2lFyzQ.jpeg"
        alt="iphone"
        border="0"
      />
    </span>
    <Container className="">
      <div className="container">
        <Wrapper className="VerifiedTokenContent">
          <span className="columnPhone">
            <img
              className="iphonepic"
              src="https://preview.ibb.co/daTgN0/verifiedmain2.jpg"
              alt="iphone"
              border="0"
            />
          </span>
          <span className="columnText">
            <span className="contentText">
              <h1 className="whitelabelTitle">
                Get our exclusive badge for Verified Tokens
              </h1>
              <h2 className="whitelabelSub">
                The crypto world sometimes calls for transparency. At Dexlab we
                are working on that as well.
              </h2>
              <button
                className="getintouch"
                onClick={() =>
                  (window.location.href =
                    'https://medium.com/dexlab-io/dexwallet-introduces-the-verified-token-program-fe2a7311a415')
                }
                type="button"
              >
                READ MORE
              </button>
            </span>
          </span>
        </Wrapper>
      </div>
    </Container>
  </div>
);

export default VerifiedToken;
