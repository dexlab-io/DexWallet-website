import React from 'react';

const footerMenu = () => {
  return (
    <section className="footerMenu">
      <a className="menuItem desktop" href="terms-and-conditions.html">
        Terms & Conditions
      </a>
      <a className="menuItem desktop" href="privacy-policy.html">
        Privacy
      </a>
      <a
        className="menuItem desktop"
        target="_blank"
        rel="noopener noreferrer"
        href="https://dexwallet.freshdesk.com/"
      >
        Support
      </a>
      <a className="menuItem desktop" href="mailto:founders@dexlab.io">
        Business Inquiries
      </a>
      <a className="menuItem desktop" target="_blank"
 href="https://drive.google.com/drive/folders/1JGgJEmAmENdB95PidPJoxBjrbHHaiZro?usp=sharing">
        Presskit
      </a>
    </section>
  );
};

export default footerMenu;
