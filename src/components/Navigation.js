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

export default function Navigation() {
  return (
    <NavButton />
  );
}
