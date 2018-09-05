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

const ButtonWrapper = styled.a`
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
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // 2. via `async/await`
  handleSubmit = async e => {
    const { value } = this.state;
    const result = await addToMailchimp(value);
    // I recommend setting `result` to React state
    // but you can do whatever you want
    console.log(result);
    e.preventDefault();
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
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
                value={this.state.value}
                placeholder="Your@email.here"
                onChange={this.handleChange}
              />
            </p>
            <p className="control is-hidden-mobile">
              <ButtonWrapper className="button is-info is-medium">
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
        </form>
      </div>
    );
  }
}

export default NewsletterForm;
