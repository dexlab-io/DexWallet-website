import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import theme from '../utils/theme';
import lang from '../utils/lang';

const Container = styled.div`
  .field:not(:last-child) {
    margin-bottom: 0rem;
  }

  input {
    border-color: transparent;
    padding-bottom: calc(1.9em - 1px) !important;
    padding-top: calc(1.9em - 1px) !important;
    padding-left: calc(1.625em - 1px);
    box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0);
    ::placeholder {
      color: #4a4a4a !important;
      font-size: 12px !important;
      font-weight: ${theme.fontMedium};
    }
  }
  .field.is-grouped > .control:not(:last-child) {
    @media only screen and (max-width: 600px) {
      margin-right: 0rem !important;
    }
  }
  .wrapper {
    float: left;
  }
  .wrapper {
    position: relative;
  }
  .wrapper input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    display: block;
  }
  .checkmark {
    position: absolute;
    top: 7px;
    left: 0;
    height: 0.75rem;
    width: 0.75rem;
    background-color: ${theme.textColorWhite};
    border-radius: 2px;
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
  .wrapper input:checked ~ .checkmark:after {
    display: block;
  }
  .wrapper .checkmark:after {
    left: 5px;
    top: -1px;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const CheckBoxTxt = styled.span`
  font-weight: ${theme.fontMedium};
  font-size: 0.625rem;
  padding-left: 1.2rem;
  color: ${theme.textColorWhite};
`;

const LabelStyled = styled.label`
  line-height: 3rem;
  font-weight: ${theme.fontMedium};
`;

const ButtonWrapper = styled.button`
  background-color: ${theme.primaryColor} !important;
  padding-left: 1.5em !important;
  padding-right: 1.5em !important;
  font-weight: ${theme.fontMedium};
  transition: 0.5s;
  :hover {
    background-color: ${darken(0.2, theme.primaryColor)} !important;
  }
`;

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // 2. via `async/await`
  handleSubmit = async e => {
    const { email } = this.state;
    e.preventDefault();
    const result = await addToMailchimp(email);
    this.setState({ email: '', message: result.msg });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 2000);
  };

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    const { message, email } = this.state;
    const { isVisible } = this.props;
    return (
      <Container className="column has-text-white has-text-centered-mobile">
        {isVisible ? (
          <LabelStyled className="is-size-3 has-text-white ">
            Get our last updates
          </LabelStyled>
        ) : null}
        <form onSubmit={this.handleSubmit}>
          <div className="field is-grouped">
            <p className="control is-expanded has-text-black">
              <input
                className="input is-medium is-size-7"
                type="email"
                value={email}
                placeholder="Your@email.here"
                onChange={this.handleChange}
              />
            </p>
            <p className="control is-hidden-mobile">
              <ButtonWrapper
                className="button is-info is-medium"
                type="submit"
                target="_parent"
              >
                <span className="is-size-6">SUBMIT</span>
              </ButtonWrapper>
            </p>
          </div>
          <label className="wrapper">
            <input type="checkbox" />
            <CheckBoxTxt className="is-size-7-mobile">
              {lang.newsletterText}
            </CheckBoxTxt>
            <span className="checkmark" />
          </label>
          <br />
          <div className="">{message}</div>
        </form>
      </Container>
    );
  }
}

export default NewsletterForm;
