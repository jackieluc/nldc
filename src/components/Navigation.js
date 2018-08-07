import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../utils/media';
import MobileNavigation from './MobileNavigation';

export default class Navigation extends Component {
  render() {
    return (
        <MobileNavigation/>
    );
  }
}
