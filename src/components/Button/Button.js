import React from 'react';
import styled from 'styled-components';
import Styles from '../../utils/styles';

const CTA = styled.a`
  display: inline-block;
  border-radius: 40px;
  padding: .7rem 2rem;
  margin: 0;
  color: white;
  border: none;
  background-color: ${Styles.lightRed};
  ${Styles.shadow}
  
  ${({ secondary }) => (secondary === true
    ? `
        color: ${Styles.lightRed};
        background-color: white;
      `
    : ``
  )}

  &:hover,
  &:focus {
    color: #FFFFFF;
    background-color: ${Styles.red};
    cursor: pointer;
    text-decoration: none;
  }
`;

const ButtonCTA = ({ secondary, link, children }) => (
  <CTA secondary={secondary} href={link} target="_blank" rel="noopener noreferrer">
    { children }
  </CTA>
);

export default ButtonCTA;