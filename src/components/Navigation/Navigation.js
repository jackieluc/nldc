import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import { BreakPoints } from '../../utils/media';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { currentWindowWidth: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const currentWindowWidth = window.innerWidth;
    this.setState({ currentWindowWidth });
  }

  render() {
    const { currentWindowWidth } = this.state;
    const { routes } = this.props;
    return (
      currentWindowWidth < BreakPoints.laptop
        ? <MobileNavigation routes={routes} />
        : <DesktopNavigation routes={routes} />
    );
  }
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(Object).isRequired,
};
