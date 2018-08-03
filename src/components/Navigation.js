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
  top: 1.5rem;
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

const MenuWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #FAFAFA;
  z-index: 2;
  top: 0;
  left: 0;
`;

class NavButton extends Component {
  render() {
    const isOpen = this.props.isOpen ? 'open' : '';
    return (
      <div className="nav-wrapper">
        <Line reverse styles={{ topPosition: '35%' }} className={isOpen}/>
        <Line styles={{ topPosition: '50%' }} className={isOpen}/>
        <Line styles={{ topPosition: '65%' }} className={isOpen}/>
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <MenuWrapper>
        <NavLink to="/">
            <Logo src={require("../images/nldc2019-logo.png")} title="logo" alt="NLDC 2019 Logo" />
        </NavLink>
        <NavLink to="/sponsors">Sponsors</NavLink>
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
        { this.state.isOpen && <Menu /> }
      </div>
    );
  }
}
