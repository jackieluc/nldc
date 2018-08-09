import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuWrapper = styled.nav`
  ${({ heights }) => (heights.currentWindowHeight < heights.firstSectionHeight / 2
    ? `background-color: transparent;
      a { color: white; };
    `
    : `background-color: white;
      a { color: #037EF3; };
      box-shadow: 0 3px 6px rgba(75, 97, 141, 0.3);
    `)}
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
    font-size: 1.2rem;
    padding: 8px 1.5rem;
    letter-spacing: 1px;
    text-decoration: none;
  `;

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { currentWindowHeight: 0, firstSectionHeight: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('scroll', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const currentWindowHeight = document.documentElement.scrollTop;
    const firstSectionHeight = document.getElementsByTagName('section')[0].clientHeight;
    this.setState({
      currentWindowHeight,
      firstSectionHeight,
    });
  }

  render() {
    const { currentWindowHeight, firstSectionHeight } = this.state;
    const { routes } = this.props;
    return (
      <MenuWrapper heights={{ currentWindowHeight, firstSectionHeight }}>
        { routes.map(route => (
          <StyledLink to={route.path}>
            {route.name}
          </StyledLink>
        )) }
      </MenuWrapper>
    );
  }
}

Menu.propTypes = {
  routes: PropTypes.arrayOf(Object).isRequired,
};
