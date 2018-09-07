import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '../utils/theme';

const Wrapper = styled.nav`
  background-color: transparent;
  .navbar-burger {
    height: 4.25rem;
  }
  .navbar-burger:hover {
    background-color: transparent;
  }
`;

const NavBarContainer = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
  .navbar-item img {
    max-height: 2.125rem !important;
  }
`;

const LogoTextStyled = styled.span`
  font-size: 1.875rem;
  padding-left: 1.5625rem;
  font-weight: ${theme.fontRegular};
  color: ${theme.textColorBlack};
`;

const LinkStyled = styled.a`
  color: ${theme.textColorBlack};
  padding-left: 1.5rem;
`;

const MobileMenu = styled.div`
  position: absolute;
  left: 0px;
  height: auto;
  width: 100%;
  background-color: ${theme.textColorWhite};
  font-weight: ${theme.fontMedium};
  z-index: 2;
  overflow: hidden;
  opacity: 0.9;
  border-radius: 0.8rem;
  padding: 0.5rem;
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
  a {
    padding: 0.5rem !important;
    color: ${theme.textColorBlack};
    opacity: 1;
  }
  a:hover {
  }
  .menu-list a {
    padding: 0 0.75em;
  }
`;
class TopHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      isActive: false,
    };
  }

  toggleMobileMenu() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Wrapper className="navbar is-transparent">
        <NavBarContainer className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="/images/DexWallet_Icon@2x.png" alt="DexWallet" />
              <LogoTextStyled>DexWallet</LogoTextStyled>
            </a>
            <a
              role="button"
              className={isActive ? 'navbar-burger is-active' : 'navbar-burger'}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleMobileMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <MobileMenu
            className={
              isActive
                ? 'has-text-centered is-hidden-desktop'
                : 'has-text-centered is-hidden-mobile is-hidden-tablet'
            }
          >
            <aside className="menu">
              <ul className="menu-list is-size-6">
                <Link to="/">
                  <li>About</li>
                </Link>
                <Link to="/">
                  {' '}
                  <li>Blog</li>
                </Link>
                <Link to="/">
                  <li>Terms & Conditions</li>
                </Link>
                <Link to="/">
                  {' '}
                  <li>Contact Us</li>
                </Link>
              </ul>
            </aside>
          </MobileMenu>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-end  is-size-6">
              <div className="navbar-item">
                <LinkStyled href="#">About</LinkStyled>
              </div>
              <div className="navbar-item">
                <LinkStyled href="#">Blog</LinkStyled>
              </div>
              <div className="navbar-item">
                <LinkStyled href="#">Terms & Conditions</LinkStyled>
              </div>
              <div className="navbar-item">
                <LinkStyled href="#"> Contact Us</LinkStyled>
              </div>
            </div>
          </div>
        </NavBarContainer>
      </Wrapper>
    );
  }
}

export default TopHeader;
