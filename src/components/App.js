import React, { Component } from 'react';
import Menu from './Menu';
import Hero from './Hero';
import './App.css';
import BigX from './BigX';
import BigPhone from './BigPhone';
import Whitelabel from './Whitelabel';
import FooterMenu from './FooterMenu';
import Quotes from './Quotes';
import Staking from './Staking';
import Integrations from './Integrations';
import SavingAccount from './SavingAccount';
import Payments from './Payments';
import NativedApps from './NativedApps';
import WlFeatures from './WlFeatures';
// import MediumPosts from './MediumPosts';
// import NewsletterForm from './NewsletterForm';

class App extends Component {
  render() {
    return (
      <span>
        <Menu />
        <BigX />
        <Hero />
        <BigPhone />
        <Integrations />
        <Staking />
        <SavingAccount />
        <NativedApps />
        <Payments />
        <Quotes />
        <Whitelabel />
        <WlFeatures />
        {/* <MediumPosts /> */}
        {/* <NewsletterForm /> */}
        <FooterMenu />
      </span>
    );
  }
}

export default App;
