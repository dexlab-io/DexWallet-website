import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import theme from '../utils/theme';

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
  };

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    const { message, email } = this.state;
    return (
      <div className="column has-text-white has-text-centered-mobile">
        <LabelStyled className="is-size-3 has-text-white ">
          Get our last updates
        </LabelStyled>
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
              I want to receive the newsletter
            </CheckBoxTxt>
            <span className="checkmark" />
          </label>
          <br />
          <div className="">{message}</div>
        </form>
      </div>
    );
  }
}

export default NewsletterForm;
