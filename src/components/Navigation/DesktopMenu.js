import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Styles from '../../utils/styles';

const isHomePage = location => location === '/';

const isNearTop = heights => (heights.currentWindowHeight < heights.firstSectionHeight / 2);

const MenuWrapper = styled.nav`
  ${({ location, heights }) => (isHomePage(location) && isNearTop(heights)
    ? `background-color: transparent;
      a {
        color: white;
        &:hover {
          color: ${Styles.textColour};
        }
      };
    `
    : 'background-color: white;'
  )}
  ${({ heights }) => (isNearTop(heights)
    ? 'box-shadow: none;'
    : 'box-shadow: 0 3px 6px rgba(75, 97, 141, 0.3);'
  )}
  height: 60px;
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
  font-size: 1rem;
  padding: 8px 1.5rem;
  letter-spacing: 1px;
  text-decoration: none;
`;

const StyledAnchor = styled.a`
  font-size: 1rem;
  padding: 8px 1.5rem;
  letter-spacing: 1px;
  text-decoration: none;
`;

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      currentWindowHeight: 0,
      firstSectionHeight: 0,
    };
  }

  componentDidMount() {
    this.updatePathLocation();
    this.updateWindowDimensions();
    window.addEventListener('scroll', this.updateWindowDimensions);
  }

  componentDidUpdate() {
    const { location } = this.state;
    const currentLocation = document.location.pathname;
    if (location !== currentLocation) {
      this.updatePathLocation();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateWindowDimensions);
  }

  updatePathLocation = () => {
    const location = document.location.pathname;
    this.setState({ location });
  }

  updateWindowDimensions = () => {
    const currentWindowHeight = document.documentElement.scrollTop;
    const firstSectionHeight = document.getElementsByTagName('section')[0].clientHeight;
    this.setState({
      currentWindowHeight,
      firstSectionHeight,
    });
  }

  render() {
    const { location, currentWindowHeight, firstSectionHeight } = this.state;
    const { routes } = this.props;
    return (
      <MenuWrapper location={location} heights={{ currentWindowHeight, firstSectionHeight }}>
        {routes.map(route => (
          /^https?:\/\//.test(route.path)
            ? (
              <StyledAnchor href={route.path} target="_blank" rel="noopener noreferrer" key={route.name}>
                {route.name}
              </StyledAnchor>
            )
            : (
              <StyledLink to={route.path} key={route.name}>
                {route.name}
              </StyledLink>
            )
        ))}
      </MenuWrapper>
    );
  }
}

Menu.propTypes = {
  routes: PropTypes.arrayOf(Object).isRequired,
};
