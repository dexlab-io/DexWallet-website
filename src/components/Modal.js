import React from 'react';
import styled from 'styled-components';
import NewsletterForm from './NewsletterForm';
import theme from '../utils/theme';
import lang from '../utils/lang';

const Wrapper = styled.div`
  .modal-background {
    background-color: rgba(10, 10, 10, 0.45);
  }
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
    padding: 5.25rem 6.6875rem 7.125rem 6.6875rem;
    @media only screen and (max-width: 600px) {
      padding: 3rem;
    }
    .columns {
      display: block;
    }
  }
`;

const TextWrapper = styled.div`
  .modal-heading {
    padding-bottom: 0.6rem !important;
    font-weight: ${theme.fontMedium};
  }
`;

const CrossImageStyled = styled.img`
  position: absolute;
  z-index: 5;
  width: 1.5rem;
  right: 3%;
  top: 4%;
`;

const PlaneImageStyled = styled.img`
  width: 82%;
`;

const Modal = ({ isClicked, handleClick, platform }) => (
  <Wrapper
    className={
      isClicked
        ? 'modal is-active modal-fx-fadeInScale'
        : 'modal modal-fx-fadeInScale'
    }
  >
    <div className="modal-background" onClick={handleClick} />
    <div className="modal-content">
      <div className="box-wrapper">
        <a onClick={handleClick}>
          <CrossImageStyled src="/images/closeX-icon.png" alt="cross" />
        </a>
        <div className="box">
          <div className="columns is-multiline">
            <div className="column">
              <PlaneImageStyled
                className=" "
                src="/images/paperplane@2x.png"
                alt="plane"
              />
            </div>

            <TextWrapper className="column">
              <div className="has-text-white modal-heading is-size-3">
                The {platform} App is coming soon!
              </div>
              <div className="has-text-white is-size-5">
                {lang.subscribeText}
              </div>
            </TextWrapper>
            <NewsletterForm isVisible={false} />
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Modal;
