import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../utils/media';

const Logo = styled.img`
  width: 150px;
`;

const NavButton = styled.button`
  position: fixed;
  right: 2rem;
  top: 1.5rem;
  width: 3rem;
  height: 3rem;
  border: 0;
  border-radius: 40px;
  box-shadow: 1px 2px 8px rgba(75, 97, 141, 0.32);
  background-color: white;

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
  top: ${props => props.styles.topPosition}

  ${media.laptop`
    height: 0.19rem;
  `}

  &.open {
    ${props => {
      const deg = props.styles.line === 1 ? '45deg' : '-45deg';
      return `transform: rotate(${deg});
        top:50%;
      `}      
    }
  }
`;

class Nav extends Component {
  render() {
    const isMenuOpen = this.props.status.isMenuOpen ? 'open' : null;
    return (
      <div className="nav-wrapper">
        <Line styles={{ line: 1, topPosition: '35%' }} className={isMenuOpen}/>
        <Line styles={{ line: 2, topPosition: '50%' }} className={isMenuOpen}/>
        <Line styles={{ line: 3, topPosition: '65%' }} className={isMenuOpen}/>
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <div className="navigation-open">
        <NavLink to="/">
            <Logo src={require("../images/nldc2019-logo.png")} title="logo" alt="NLDC 2019 Logo" />
        </NavLink>
        <NavLink to="/sponsors">Sponsors</NavLink>
      </div>
    );
  }
}

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  render() {
    return (
      <NavButton onClick={this.onClick}>
        <Nav status={{ isMenuOpen: this.state.isMenuOpen }}>
          {/* { this.state.isMenuOpen && <Menu /> } */}
        </Nav>
      </NavButton>
    );
  }
}
