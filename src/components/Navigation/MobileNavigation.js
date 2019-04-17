import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Styles from '../../utils/styles';
import Media from '../../utils/media';

const NavWrapper = styled.button`
  position: fixed;
  right: 1rem;
  top: 1rem;
  width: 3rem;
  height: 3rem;
  border: 0;
  border-radius: 40px;
  -webkit-box-shadow: 1px 2px 8px rgba(75, 97, 141, 0.9);
  box-shadow: 1px 2px 8px rgba(75, 97, 141, 0.9);
  background-color: white;
  z-index: 999;
  outline: none;

  &:hover,
  &:active {
    outline: none;
  }

  ${Media.laptop`
    width: 4rem;
    height: 4rem;
  `}
`;

const Line = styled.span`
  position: absolute;
  width: 45%;
  height: 0.11rem;
  border-radius: 0.2rem;
  background: ${Styles.themeColour};
  left: 27.5%;
  transition: all cubic-bezier(0.42, 0, 0.45, 1.25) 0.27s;
  top: ${({ styles }) => styles.topPosition || 0};

  ${Media.laptop`height: 0.19rem;`}
  
  &.open {
    ${({ reverse }) => (reverse
    ? 'transform: rotate(-45deg);'
    : 'transform: rotate(45deg);')}
    top: 50%;
  }
`;

const MenuWrapper = styled.nav`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 998;
  top: 0;
  left: 0;
  justify-content: start;
  align-items: flex-end;
  overflow: hidden;
  text-transform: uppercase;
`;

const StyledAnchor = styled.a`
  font-size: 1rem;
  margin: 12px 10vw;
  ${Media.tablet`margin: 12px 5vw;`}
  text-decoration: none;

  &:first-child {
    margin-top: 5rem;
    ${Media.laptop`margin-top: 6rem;`}
  }
`;

const ButtonAnchor = styled.a`
  font-size: 1rem;
  margin: 12px 0;
  padding: 10px 1.5rem;
  letter-spacing 1px;
  text-decoration: none;
  background-color: ${Styles.lightRed};
  border-radius: 30px;
  color: white;
  margin-right: 5vw;
  ${Media.laptop`margin-right: 0;`}
  
  &:hover {
    color: white;
    background-color: ${Styles.red};
    text-decoration: none;
  }
`;

const MobileMenu = ({ routes, toggleMenu }) => (
  <MenuWrapper>
    { 
      routes.map(route => (
        route.button
          ? <ButtonAnchor href={route.path} key={route.name}>
              { route.name }
            </ButtonAnchor>
          : <StyledAnchor href={route.path} key={route.name} onClick={toggleMenu}>
              { route.name }
            </StyledAnchor>
        )
      )
    }
  </MenuWrapper>
);

MobileMenu.propTypes = {
  routes: PropTypes.arrayOf(Object).isRequired,
  action: PropTypes.func.isRequired,
};

const NavButton = ({ menu }) => (
  <>
    <Line reverse styles={{ topPosition: '35%' }} className={menu ? 'open' : ''} />
    <Line styles={{ topPosition: '50%' }} className={menu ? 'open' : ''} />
    <Line styles={{ topPosition: '65%' }} className={menu ? 'open' : ''} />
  </>
);

NavButton.propTypes = {
  menu: PropTypes.bool.isRequired,
};

const ResponsiveWrapper = styled.div`
  display: block;
  ${Media.laptop`display: none;`};
`;

export default class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { routes } = this.props;

    return (
      <ResponsiveWrapper>
        <NavWrapper onClick={this.toggleMenu}>
          <NavButton menu={isOpen} />
        </NavWrapper>
        {
          isOpen && <MobileMenu action={this.toggleMenu} routes={routes} toggleMenu={this.toggleMenu} />
        }
      </ResponsiveWrapper>
    );
  }
}

MobileNavigation.propTypes = {
  routes: PropTypes.arrayOf(Object).isRequired,
};
