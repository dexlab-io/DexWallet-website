import React from 'react';
import { Link } from 'gatsby';
import { withMixpanel } from 'gatsby-plugin-mixpanel';

import './Menu.css';

class Menu extends React.Component {
  state = {
    mobileMenuVisible: false,
  };

  componentDidMount() {
    // /* eslint-disable */
    // if (typeof window !== 'undefined') {
    //   console.log('document', document);
    //   var triggerBttn = window.document.getElementById('trigger-overlay'),
    //     overlay = window.document.querySelector('div.overlay'),
    //     closeBttn = overlay.querySelector('button.overlay-close');
    //   (transEndEventNames = {
    //     WebkitTransition: 'webkitTransitionEnd',
    //     MozTransition: 'transitionend',
    //     OTransition: 'oTransitionEnd',
    //     msTransition: 'MSTransitionEnd',
    //     transition: 'transitionend',
    //   }),
    //     (transEndEventName =
    //       transEndEventNames[Modernizr.prefixed('transition')]),
    //     (support = { transitions: Modernizr.csstransitions });
    //   function toggleOverlay() {
    //     if (classie.has(overlay, 'open')) {
    //       classie.remove(overlay, 'open');
    //       classie.add(overlay, 'close');
    //       var onEndTransitionFn = function(ev) {
    //         if (support.transitions) {
    //           if (ev.propertyName !== 'visibility') return;
    //           this.removeEventListener(transEndEventName, onEndTransitionFn);
    //         }
    //         classie.remove(overlay, 'close');
    //       };
    //       if (support.transitions) {
    //         overlay.addEventListener(transEndEventName, onEndTransitionFn);
    //       } else {
    //         onEndTransitionFn();
    //       }
    //     } else if (!classie.has(overlay, 'close')) {
    //       classie.add(overlay, 'open');
    //     }
    //   }
    //   triggerBttn.addEventListener('click', toggleOverlay);
    //   closeBttn.addEventListener('click', toggleOverlay);
    // }
    // /* eslint-enable */
  }

  render() {
    const { mobileMenuVisible } = this.state;
    const { mixpanel } = this.props;
    return (
      <React.Fragment>
        <section className="header">
          <section className="menuLogo">
            <Link
              onClick={() => {
                mixpanel.track('Logo back Home');
              }}
              to="./"
            >
              <img
                src="/img/DexwalletLogo.svg"
                alt="dexwallet logo"
                height="26"
              />
            </Link>
          </section>
          <section className="menu">
            <a
              onClick={() => {
                mixpanel.track('menu link DefiTracker');
              }}
              className="menuItem desktop"
              target="_blank"
              rel="noopener noreferrer"
              href="https://defitracker.io/"
            >
              Defitracker.io
            </a>
            <a
              onClick={() => {
                mixpanel.track('menu link Dexpay');
              }}
              className="menuItem desktop"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dexpay.me"
            >
              Dexpay.me
            </a>
            <a
              onClick={() => {
                mixpanel.track('menu link Vision');
              }}
              className="menuItem desktop"
              target="_blank"
              rel="noopener noreferrer"
              href="https://hackmd.io/@8O08261_SpWdZUBJKxeF5Q/rk7VotSpE?type=view"
            >
              Vision
            </a>
            <a
              onClick={() => {
                mixpanel.track('menu link Medium');
              }}
              className="menuItem desktop"
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/dexlab-io/"
            >
              Blog
            </a>
            <a
              onClick={() => {
                mixpanel.track('menu link Mail');
              }}
              className="menuItem desktop"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:founders@dexlab.io"
            >
              Contacts
            </a>
            <Link
              onClick={() => {
                mixpanel.track('menu link Whitelabel');
              }}
              className="menuItem desktop"
              to="/whitelabel/"
            >
              Whitelabel
            </Link>
            <Link
              onClick={() => {
                mixpanel.track('menu link BuyCrypto');
              }}
              className="buyCryptoButton desktop"
              target="_blank"
              to="/buycrypto"
              rel="noopener noreferrer"
            >
              Buy Crypto
            </Link>
            {/* <Link className="desktop headerButton" to="/pro/">
              Pro
            </Link> */}
            <button
              className="menuItem mobile"
              id="trigger-overlay"
              type="button"
              onClick={() =>
                this.setState({ mobileMenuVisible: !mobileMenuVisible })
              }
            >
              <img
                src="/img/hamburgerIcon.svg"
                height="19"
                alt="hamburger icon"
              />
            </button>
          </section>
        </section>
        {mobileMenuVisible && (
          <div className="overlay overlay-hugeinc open">
            {/* <button type="button" className="overlay-close">
              Close
            </button> */}
            <nav>
              <ul>
                <li>
                  <a
                    onClick={() => {
                      mixpanel.track('menu link DeFiTracker');
                    }}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://defitracker.io/"
                  >
                    Defitracker.io
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      mixpanel.track('menu link Dexlab');
                    }}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexlab.io/"
                  >
                    Dexlab.io
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      mixpanel.track('menu link Dexpay');
                    }}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexpay.me/"
                  >
                    Dexpay.me
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      mixpanel.track('menu link Vision');
                    }}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://hackmd.io/@8O08261_SpWdZUBJKxeF5Q/rk7VotSpE?type=view"
                  >
                    Vision
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      mixpanel.track('menu link Medium');
                    }}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://medium.com/dexlab-io"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      mixpanel.track('menu link Whitelabel');
                    }}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexwallet.io/whitelabel"
                  >
                    Whitelabel
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      mixpanel.track('menu link Mail');
                    }}
                    className=""
                    href="founders@dexlab.io"
                  >
                    Contacts
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      mixpanel.track('menu link Terms and Conditions');
                    }}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexwallet.io/terms-and-conditions/"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      mixpanel.track('menu link Privacy Policy');
                    }}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexwallet.io/privacy-policy/"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      mixpanel.track('menu link Freshdesk');
                    }}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://dexwallet.freshdesk.com/"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      mixpanel.track('menu link Mail');
                    }}
                    className=""
                    href="founders@dexlab.io"
                  >
                    Business Inquiries
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withMixpanel()(Menu);
