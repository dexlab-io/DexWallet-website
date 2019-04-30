import React, { Component } from 'react';
import Menu from '../components/Menu';
import Whitelabel from '../components/Whitelabel';
import FooterMenu from '../components/FooterMenu';
import Integrations from '../components/Integrations';
import '../components/App.css';
import WLFeaturesList from '../components/WLFeaturesList';

class WhitelabelContent extends Component {
  render() {
    return (
      <span>
        <Menu />
        <Whitelabel />
        <WLFeaturesList />
        <Integrations />
        <span className="integrations">
          <span className="singleOffer core">
            <span className="companyLogo">
              <img src="/img/core.png" alt="iphone" border="0" height="150px" />
            </span>
            <h2>CORE</h2>
            <h5>
              All the basic features you need on the wallet, in your hand since
              day zero
            </h5>
          </span>
          <span className="singleOffer pro">
            <span className="companyLogo">
              <img src="/img/pro.png" alt="iphone" border="0" height="150px" />
            </span>
            <h2>PRO</h2>
            <h5>
              All the core features plus the exclusive pro functionalities in
              one easy-to-use package
            </h5>
          </span>

          <span className="singleOffer custom">
            <span className="companyLogo">
              <img
                src="/img/custom.png"
                alt="iphone"
                border="0"
                height="150px"
              />
            </span>
            <h2>CUSTOM</h2>
            <h5>Do you have any specific feature or need? Let us know.</h5>
          </span>
        </span>

        <span className="whitelabelCTAtitle">
          <h1 className="sectionTitle">
            Want to know more?<br />
            Want a quote or try a demo?<br />
            Contact Us. No strings attached.
          </h1>
          <a className="wlButton" href="mailto:founders@dexlab.io">
            Get in Touch
          </a>
        </span>
        <FooterMenu />
      </span>
    );
  }
}

export default WhitelabelContent;
