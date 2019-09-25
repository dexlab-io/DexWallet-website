import React from 'react';
import { Link } from 'gatsby';

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
            <a
              className="menuItem desktop"
              target="_blank"
              href="https://defitracker.io/"
            >
              Defitracker.io
            </a>
            <a
              className="menuItem desktop"
              target="_blank"
              href="https://www.dexpay.me"
            >
              Dexpay.me
            </a>
            <a
              className="menuItem desktop"
              target="_blank"
              rel="noopener noreferrer"
              href="https://hackmd.io/@8O08261_SpWdZUBJKxeF5Q/rk7VotSpE?type=view"
            >
              Team &amp; Vision
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
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://defitracker.io/"
                  >
                    Defitracker.io
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexlab.io/"
                  >
                    Dexlab.io
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexpay.me/"
                  >
                    Dexpay.me
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://hackmd.io/@8O08261_SpWdZUBJKxeF5Q/rk7VotSpE?type=view"
                  >
                    Team &amp; Vision
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://medium.com/dexlab-io"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexwallet.io/whitelabel"
                  >
                    Whitelabel
                  </a>
                </li>
                <li>
                  <a className="" href="founders@dexlab.io">
                    Contacts
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexwallet.io/terms-and-conditions/"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.dexwallet.io/privacy-policy/"
                  >
                    Privacy
                  </a>
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
