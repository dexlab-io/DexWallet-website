import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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

    return (
      <React.Fragment>
        <section className="header">
          <section className="menuLogo">
            <Link to="./">
              <img
                src="/img/DexwalletLogo.svg"
                alt="dexwallet logo"
                height="26"
              />
            </Link>
          </section>
          <section className="menu">
            <OutboundLink
              className="menuItem desktop"
              target="_blank"
              href="https://defitracker.io/"
            >
              Defitracker.io
            </OutboundLink>
            <OutboundLink
              className="menuItem desktop"
              target="_blank"
              href="https://www.dexpay.me"
            >
              Dexpay.me
            </OutboundLink>
            <OutboundLink
              className="menuItem desktop"
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/dexlab-io/"
            >
              Blog
            </OutboundLink>
            <OutboundLink
              className="menuItem desktop"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:founders@dexlab.io"
            >
              Contacts
            </OutboundLink>
            <Link className="menuItem desktop" to="/whitelabel/">
              Whitelabel
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
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://defitracker.io/"
                  >
                    Defitracker.io
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexlab.io/"
                  >
                    Dexlab.io
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexpay.me/"
                  >
                    Dexpay.me
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexwallet.io/team_and_vision"
                  >
                    Team &amp; Vision
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://medium.com/dexlab-io"
                  >
                    Blog
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexwallet.io/whitelabel"
                  >
                    Whitelabel
                  </OutboundLink>
                </li>
                <li>
                  <a className="" href="founders@dexlab.io">
                    Contacts
                  </a>
                </li>
                <li>
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexwallet.io/terms-and-conditions/"
                  >
                    Terms &amp; Conditions
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexwallet.io/privacy-policy/"
                  >
                    Privacy
                  </OutboundLink>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://dexwallet.freshdesk.com/"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a className="" href="founders@dexlab.io">
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

export default Menu;
