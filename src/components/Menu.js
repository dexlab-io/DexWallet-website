import React from 'react';
import './Menu.css';
import { Link } from 'gatsby';

const Menu = props => {
  return (
    <section className="header">
      <section className="menuLogo">
        <a href="./">
          <Link to="./">
            <img
              src="/img/DexwalletLogo.svg"
              height="26px"
              alt="dexwallet logo"
            />
          </Link>
        </a>
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
        <a className="menuItem desktop">
          <Link to="/whitelabel/">Whitelabel</Link>
        </a>
        <a className=" desktop headerButton">
          <Link className="headerButton" to="/pro/">
            Pro
          </Link>
        </a>
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
