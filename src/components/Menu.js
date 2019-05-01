import React from 'react';
import { Link } from 'gatsby';

import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  toggleMobileMenu = () => {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  };

  render() {
    const { isActive } = this.state;
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
          <div id="mobileshow">
            <a
              role="button"
              className={isActive ? 'is-active container' : 'container'}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleMobileMenu}
            >
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </a>
            {isActive ? (
              <section className="mobilemenu">
                <a
                  className="mobilemenu"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http:\\dexpay.me"
                >
                  Dexpay.me
                </a>
                <a
                  className="mobilemenu"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/dexlab-io/"
                >
                  Blog
                </a>
                <a
                  className="mobilemenu"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:founders@dexlab.io"
                >
                  Contacts
                </a>
                <Link className="mobilemenu" to="/whitelabel/">
                  Whitelabel
                </Link>
                <Link className="mobilemenu" to="/pro/">
                  Pro
                </Link>
              </section>
            ) : null}
          </div>
        </section>
      </section>
    );
  }
}

export default Menu;
