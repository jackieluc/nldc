import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.img`
  width: 150px;
`;

export default function Navigation() {
  return (
    <div className="navigation">
        <NavLink to="/">
            <Logo src={require("../images/nldc2019-logo.png")} title="logo" alt="NLDC 2019 Logo" />
        </NavLink>
        <NavLink to="/sponsors">Sponsors</NavLink>
    </div>
  );
}
