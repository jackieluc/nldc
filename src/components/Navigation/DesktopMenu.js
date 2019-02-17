import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Styles from '../../utils/styles';
import BlackNldcLogo from '../../images/nldc2019-logo-black.png';

const isHomePage = location => location === '/';

const isNearTop = heights => (heights.currentWindowHeight < heights.firstSectionHeight / 2);

const MenuWrapper = styled.nav`
  ${({ location, heights }) => (isHomePage(location) && isNearTop(heights)
    ? `background-color: transparent;
      a {
        color: white;
        &:hover {
          color: #333;
        }
      };
      justify-content: flex-end;
      > a:first-of-type {
        display: none;
      };
    `
    : `background-color: white;
      justify-content: none;
      > a:first-of-type {
        padding: 0;
        margin-right: auto;
      };
    `
  )}
  ${({ heights }) => (isNearTop(heights)
    ? 'box-shadow: none;'
    : 'box-shadow: 0 3px 6px rgba(75, 97, 141, 0.3);'
  )}
  display: flex;
  height: 60px;
  padding: 8px 16px;
  position: fixed;
  top: 0;
  flex-direction: row;
  z-index: 3;
  text-transform: uppercase;
`;

const ButtonAnchor = styled.a`
  font-size: 1rem;
  padding: 10px 1.5rem;
  letter-spacing 1px;
  text-decoration: none;
  background-color: ${Styles.lightRed};
  border-radius: 30px;
  color: white;
  
  &:hover {
    color: white !important;
    background-color: ${Styles.red};
    text-decoration: none;
  }
`;

const StyledAnchor = styled.a`
  font-size: 1rem;
  padding: 8px 1.5rem;
  letter-spacing: 1px;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 120px;
  height: 54px;
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
    if (document.getElementsByTagName('section')[0]) {
      const currentWindowHeight = document.documentElement.scrollTop;
      const firstSectionHeight = document.getElementsByTagName('section')[0].clientHeight;
      this.setState({
        currentWindowHeight,
        firstSectionHeight,
      });
    }
  }

  render() {
    const { location, currentWindowHeight, firstSectionHeight } = this.state;
    const { routes } = this.props;
    return (
      <MenuWrapper location={location} heights={{ currentWindowHeight, firstSectionHeight }}>
        <Link to="/">
          <Logo src={BlackNldcLogo} alt="" />
        </Link>
        { 
          routes.map(route => (
            route.button
              ? <ButtonAnchor href={route.path} key={route.name}>
                  { route.name }
                </ButtonAnchor>
              : <StyledAnchor href={route.path} key={route.name}>
                  { route.name }
                </StyledAnchor>
          ))
        }
      </MenuWrapper>
    );
  }
}

Menu.propTypes = {
  routes: PropTypes.arrayOf(Object).isRequired,
};
