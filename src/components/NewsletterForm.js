import React from 'react';

import Social from './Social';

const Newsletterform = () => {
  return (
    <section className="newsletter">
      <section className="newsletterForm">
        <form
          action="https://dexlab.us17.list-manage.com/subscribe/post?u=98c7ba21bb6d63c6d14827c6e&amp;id=a51cc8153c"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Get our latest news</h2>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style="display:none"
                />
                <div
                  className="response"
                  id="mce-success-response"
                  style="display:none"
                />
              </div>
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_98c7ba21bb6d63c6d14827c6e_a51cc8153c"
                  tabIndex="-1"
                  value=""
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </div>
        </form>

        <Social />
      </section>
    </section>
  );
};

export default Newsletterform;
