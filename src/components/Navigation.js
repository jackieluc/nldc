import React, { Component } from 'react';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

export default class Navigation extends Component {
	render() {
		return (
      <div>
			  <MobileNavigation/>
			  <DesktopNavigation/>
      </div>
		);
	}
}
