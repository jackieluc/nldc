import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../utils/media';

const ResponsiveWrapper = styled.div`
  display: none;
  ${media.laptop`display: block;`}
`;


const MenuWrapper = styled.nav`
  position: fixed;
  height: 10vh;
  width: 100%;
  justify-content: flex-end;
  flex-direction: row;
`;

const StyledLink = styled(NavLink)`
  color: white;
  font-size: 1rem;
  padding: 8px 1.5rem;
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