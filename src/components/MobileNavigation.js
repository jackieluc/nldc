import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Media } from '../utils/media';

const NavWrapper = styled.button`
  position: fixed;
  right: 1rem;
  top: 1rem;
  width: 3rem;
  height: 3rem;
  border: 0;
  border-radius: 40px;
  box-shadow: 1px 2px 8px rgba(75, 97, 141, 0.32);
  background-color: white;
  z-index: 999;
  outline: none;

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
  background: black;
  left: 27.5%;
  transition: all cubic-bezier(0.42, 0, 0.45, 1.25) 0.27s;
  top: ${props => props.styles.topPosition || 0}

  ${Media.laptop`height: 0.19rem;`}

  &.open {
    ${props => props.reverse ? 'transform: rotate(-45deg);' : 'transform: rotate(45deg);'}
    top: 50%;
  }
`;

const MenuWrapper = styled.nav`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #FAFAFA;
  z-index: 2;
  top: 0;
  left: 0;
  justify-content: start;
  align-items: flex-end;
`;

const StyledLink = styled(NavLink)`
  color: #037EF3;
  font-size: 1.3rem;
  margin: 8px 10vw;
  ${Media.tablet`margin: 8px 5vw;`}
  text-decoration: none;

  &:first-child {
    margin-top: 5rem;
    ${Media.laptop`margin-top: 6rem;`}
  }

  &:hover {
    color: #4ea8fd;
  }
`;

class Menu extends Component {
  render() {
    return (
      <MenuWrapper>
        <StyledLink to="/" onClick={this.props.action}>Home</StyledLink>
        <StyledLink to="/sponsors"onClick={this.props.action}>Sponsors</StyledLink>
        <StyledLink to="/team"onClick={this.props.action}>Team</StyledLink>
      </MenuWrapper>
    );
  }
}

class NavButton extends Component {
  render() {
    const open = this.props.menu ? 'open' : '';
    return (
      <div>
        <Line reverse styles={{ topPosition: '35%' }} className={open} />
        <Line styles={{ topPosition: '50%' }} className={open} />
        <Line styles={{ topPosition: '65%' }} className={open} />
      </div>
    );
  }
}

const ResponsiveWrapper = styled.div`
  display: block;
  ${Media.laptop`display: none;`}
`;

export default class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <ResponsiveWrapper>
        <NavWrapper onClick={this.toggleMenu}>
          <NavButton menu={isOpen} />
        </NavWrapper>
        { isOpen && <Menu action={this.toggleMenu} /> }
      </ResponsiveWrapper>
    );
  }
}
