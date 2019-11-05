import React from 'react';
import { useMixpanel } from 'gatsby-plugin-mixpanel';

const footerMenu = () => {
  const mixpanel = useMixpanel();

  return (
    <section className="footerMenu">
      <a
        onClick={() => {
          mixpanel.track('Footerlink Terms and Conditions');
        }}
        className="menuItem desktop"
        href="terms-and-conditions.html"
      >
        Terms & Conditions
      </a>
      <a
        onClick={() => {
          mixpanel.track('Footerlink Privacy');
        }}
        className="menuItem desktop"
        href="privacy-policy.html"
      >
        Privacy
      </a>
      <a
        onClick={() => {
          mixpanel.track('Footerlink Support');
        }}
        className="menuItem desktop"
        target="_blank"
        rel="noopener noreferrer"
        href="https://dexwallet.freshdesk.com/"
      >
        Support
      </a>
      <a
        onClick={() => {
          mixpanel.track('Footerlink Mail');
        }}
        className="menuItem desktop"
        href="mailto:founders@dexlab.io"
      >
        Business Inquiries
      </a>
      <a
        onClick={() => {
          mixpanel.track('Footerlink Mediakit');
        }}
        className="menuItem desktop"
        target="_blank"
        href="https://drive.google.com/drive/folders/1JGgJEmAmENdB95PidPJoxBjrbHHaiZro?usp=sharing"
      >
        Presskit
      </a>
    </section>
  );
};

export default footerMenu;
