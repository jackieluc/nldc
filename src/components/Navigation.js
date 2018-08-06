import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../utils/media';

const Logo = styled.img`
  width: 150px;
`;

const NavWrapper = styled.button`
  position: fixed;
  right: 2rem;
  top: 1rem;
  width: 3rem;
  height: 3rem;
  border: 0;
  border-radius: 40px;
  box-shadow: 1px 2px 8px rgba(75, 97, 141, 0.32);
  background-color: white;
  z-index: 999;

  ${media.laptop`
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

  ${media.laptop`height: 0.19rem;`}

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
  display: flex;
  justify-content: start;
  align-items: flex-end;
  flex-direction: column;
`;

const StyledLink = styled(NavLink)`
  color: #037EF3;
  font-size: 1.6rem;
  margin: 8px 10vw;
  ${media.tablet`margin: 8px 5vw;`}

  &:first-child {
    margin-top: 5rem;
    ${media.laptop`margin-top: 6rem;`}
  }

  &:hover {
    color: #4ea8fd;
  }
`;

class NavButton extends Component {
  render() {
    const isOpen = this.props.isOpen ? 'open' : '';
    return (
      <div className="nav-wrapper">
        <Line reverse styles={{ topPosition: '35%' }} className={isOpen} />
        <Line styles={{ topPosition: '50%' }} className={isOpen} />
        <Line styles={{ topPosition: '65%' }} className={isOpen} />
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <MenuWrapper>
        <StyledLink to="/" onClick={this.props.action}>Home</StyledLink>
        <StyledLink to="/sponsors"onClick={this.props.action}>Sponsors</StyledLink>
      </MenuWrapper>
    );
  }
}

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <NavWrapper onClick={this.toggleMenu}>
          <NavButton isOpen={this.state.isOpen} />
        </NavWrapper>
        { this.state.isOpen && <Menu action={this.toggleMenu} /> }
      </div>
    );
  }
}
