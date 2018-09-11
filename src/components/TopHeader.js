import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';

import theme from '../utils/theme';

const Wrapper = styled.nav`
  background-color: ${props => props.bg};
  transition: 0.5s;
  @media only screen and (max-width: 600px) {
    padding: ${props => (props.bg === 'white' ? '0rem 1rem' : '0rem')};
  }
  .navbar-burger {
    height: 4.25rem;
  }
  .navbar-burger:hover {
    background-color: transparent;
  }
`;

const NavBarContainer = styled.div`
  padding-top: 2%;
  .navbar-item img {
    max-height: 2.125rem !important;
  }
`;

const LogoTextStyled = styled.span`
  font-size: 1.875rem;
  padding-left: 1rem;
  font-weight: ${theme.fontRegular};
  color: ${theme.textColorBlack};
`;

const LinkStyled = styled(Link)`
  color: ${theme.textColorBlack};
  padding-left: 1.5rem;
`;

const LinkStyledTwo = styled.a`
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

    this.state = {
      isActive: false,
      bg: 'transparent',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = () => {
    if (window.scrollY > 10) {
      this.setState({ bg: 'white' });
    } else {
      this.setState({ bg: 'transparent' });
    }
  };

  toggleMobileMenu = () => {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  };

  render() {
    const { isActive, bg } = this.state;

    return (
      <Headroom>
        <Wrapper className="navbar is-transparent" bg={bg}>
          <NavBarContainer className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <img src="/images/DexWallet_Icon@2x.png" alt="DexWallet" />
                <LogoTextStyled>DexWallet</LogoTextStyled>
              </Link>
              <a
                role="button"
                className={
                  isActive ? 'navbar-burger is-active' : 'navbar-burger'
                }
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
                  <a href="https://www.dexlab.io/">
                    <li>About</li>
                  </a>
                  <a href="https://medium.com/dexlab-io">
                    <li>Blog</li>
                  </a>
                  <Link to="/terms-and-conditions/">
                    <li>Terms & Conditions</li>
                  </Link>
                  <a href="mailto:dev@dexlab.io">
                    <li>Contact Us</li>
                  </a>
                </ul>
              </aside>
            </MobileMenu>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
              <div className="navbar-end  is-size-6">
                <div className="navbar-item">
                  <LinkStyledTwo href="https://www.dexlab.io/">
                    About
                  </LinkStyledTwo>
                </div>
                <div className="navbar-item">
                  <LinkStyledTwo href="https://medium.com/dexlab-io">
                    Blog
                  </LinkStyledTwo>
                </div>
                <div className="navbar-item">
                  <LinkStyled to="/terms-and-conditions/">
                    Terms & Conditions
                  </LinkStyled>
                </div>
                <div className="navbar-item">
                  <LinkStyledTwo href="mailto:dev@dexlab.io">
                    Contact Us
                  </LinkStyledTwo>
                </div>
              </div>
            </div>
          </NavBarContainer>
        </Wrapper>
      </Headroom>
    );
  }
}

export default TopHeader;
