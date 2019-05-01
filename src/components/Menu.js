import React from 'react';
import './Menu.css';
import { Link } from 'gatsby';

const Menu = props => {
  return (
    <section className="header">
      <section className="menuLogo">
        <Link to="./">
          <img
            src="/img/DexwalletLogo.svg"
            height="26px"
            alt="dexwallet logo"
          />
        </Link>
      </section>
      <section className="menu">
        <a
          className="menuItem desktop"
          target="_blank"
          rel="noopener noreferrer"
          href="http:\\dexpay.me"
        >
          Dexpay.me
        </a>
        <a
          className="menuItem desktop"
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/dexlab-io/"
        >
          Blog
        </a>
        <a
          className="menuItem desktop"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:founders@dexlab.io"
        >
          Contacts
        </a>
        <Link className="menuItem desktop" to="/whitelabel/">
          Whitelabel
        </Link>
        <Link className="desktop headerButton" to="/pro/">
          Pro
        </Link>
        <button className="menuItem mobile" id="trigger-overlay" type="button">
          <img
            src="/img/hamburgerIcon.svg"
            height="19px"
            alt="hamburger icon"
          />
        </button>
      </section>
    </section>
  );
};

export default Menu;
