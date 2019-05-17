import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const footerMenu = () => {
  return (
    <section className="footerMenu">
      <a className="menuItem desktop" href="terms-and-conditions.html">
        Terms & Conditions
      </a>
      <a className="menuItem desktop" href="privacy-policy.html">
        Privacy
      </a>
      <OutboundLink
        className="menuItem desktop"
        target="_blank"
        rel="noopener noreferrer"
        href="https://dexwallet.freshdesk.com/"
      >
        Support
      </OutboundLink>
      <OutboundLink
        className="menuItem desktop"
        href="mailto:founders@dexlab.io"
      >
        Business Inquiries
      </OutboundLink>
    </section>
  );
};

export default footerMenu;
