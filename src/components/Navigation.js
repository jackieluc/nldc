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
  border-radius: 0.1rem;
  background: black;
  left: 27.5%;
  top: ${props => props.styles.topPosition}

  ${media.laptop`
    height: 0.19rem;
  `}

  &.closed {
    ${props => {
      if (props.styles.line === 1) {
        return `transform: rotate(45deg);
          top:50%;
        `
      }
      else {
        return `transform: rotate(-45deg);
          top:50%;
        `
      }
    }
  }
`;

class Nav extends Component {
  render() {
    const isMenuClosed = this.props.status.isMenuClosed ? 'closed' : null;
    return (
      <div className="nav-wrapper">
        <Line styles={{ line: 1, topPosition: '35%' }} className={isMenuClosed}/>
        <Line styles={{ line: 2, topPosition: '50%' }} className={isMenuClosed}/>
        <Line styles={{ line: 3, topPosition: '65%' }} className={isMenuClosed}/>
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <div className="navigation">
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
    this.state = { isMenuClosed: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isMenuClosed: !this.state.isMenuClosed,
    });
  }

  render() {
    return (
      <NavButton onClick={this.onClick}>
        <Nav status={{ isMenuClosed: this.state.isMenuClosed }}/>
      </NavButton>
    );
  }
}
