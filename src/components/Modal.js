import React from 'react';
import styled from 'styled-components';
import NewsletterForm from './NewsletterForm';

const Wrapper = styled.div`
  .box-wrapper {
    position: relative;
  }
  .box {
    position: relative;
    background-color: rgb(120, 180, 229);
    border-radius: 0px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    display: block;
    padding: 4rem 7rem 4rem 7rem;
    @media only screen and (max-width: 600px) {
      padding: 3rem;
    }
    .columns {
      display: block;
    }
  }
`;

const CrossImageStyled = styled.img`
  position: absolute;
  z-index: 5;
  width: 1.5rem;
  right: 3%;
  top: 4%;
`;

const Modal = ({ isClicked, handleClick }) => (
  <Wrapper className={isClicked ? 'modal is-active' : 'modal'}>
    <div className="modal-background" />
    <div className="modal-content">
      <div className="box-wrapper">
        <a onClick={handleClick}>
          <CrossImageStyled src="/images/closeX-icon.png" alt="cross" />
        </a>
        <div className="box">
          <div className="columns is-multiline">
            <div className="column">
              <img className=" " src="/images/paperplane@2x.png" alt="plane" />
            </div>

            <div className="column">
              <div className="has-text-white has-text-weight-semibold">
                The Android App is coming soon!
              </div>
              <div className="has-text-white">
                Subscibe to our newsletter and be the first to know.
              </div>
            </div>
            <NewsletterForm isVisible={false} />
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Modal;
