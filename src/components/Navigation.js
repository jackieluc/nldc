import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Navigation.css';

export default function Navigation() {
  return (
    <div className="navigation">
        <NavLink to="/">
            <img src={require("../images/nldc2019-logo.png")} className="logo" title="logo" alt="NLDC 2019 Logo" />
        </NavLink>
        <NavLink to="/sponsors">Sponsors</NavLink>
    </div>
  );
}
