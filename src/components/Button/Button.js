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
  
  ${({ type }) => {
    if(type === 'secondary') {
      return `
              color: ${Styles.lightRed};
              background-color: white;
            `;
    }
    if (type === 'ghost') {
      return `
              background-color: transparent;
              border: 1px solid white;
              margin-top: 2rem;
            `;
    }
  }}

  &:hover,
  &:focus {
    color: #FFFFFF;
    background-color: ${Styles.red};
    cursor: pointer;
    text-decoration: none;

    ${({ type }) => ( type === 'ghost'
      ? `
          color: ${Styles.lightRed} !important;
          background-color: white;
          border-color: white;
        `
      : ``
    )}
  }
`;

const ButtonCTA = ({ type, link, children }) => (
  <CTA type={type} href={link} target="_blank" rel="noopener noreferrer">
    { children }
  </CTA>
);

export default ButtonCTA;