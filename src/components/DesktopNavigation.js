import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../utils/media';

const ResponsiveWrapper = styled.div`
  display: none;
  ${media.laptop`display: block;`}
`;


const MenuWrapper = styled.nav`
  background-color: transparent;
  height: 6vh;
  padding: 8px 16px;
  position: fixed;
  flex-direction: row;
  justify-content: flex-end;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const StyledLink = styled(NavLink)`
  color: white;
  font-size: 1.2rem;
  padding: 8px 1.5rem;
  letter-spacing: 1px;
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

export default class DesktopNavigation extends Component {
  render() {
    return (
      <ResponsiveWrapper>
        <Menu />
      </ResponsiveWrapper>
    );
  }
}