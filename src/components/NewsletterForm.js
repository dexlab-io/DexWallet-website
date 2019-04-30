import React from 'react'
import Social from 'react'

const Newsletterform = (props) => {
  return (
    <section class="newsletter">
      <section class="newsletterForm">
        <form
          action="https://dexlab.us17.list-manage.com/subscribe/post?u=98c7ba21bb6d63c6d14827c6e&amp;id=a51cc8153c"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Get our latest news</h2>
            <div class="mc-field-group">
              <label for="mce-EMAIL">Email Address </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
              />
              <div id="mce-responses" class="clear">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display:none"
                />
                <div
                  class="response"
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
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
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


export default Newsletterform