import React from 'react';
import styled from 'styled-components';
import Styles from '../../utils/styles';

const CTA = styled.a`
  display: inline-block;
  border-radius: 40px;
  padding: .7rem 2rem;
  margin: 0;
  margin-bottom: 2rem;
  color: #FFFFFF;
  border: none;
  background-color: ${Styles.lightRed};
  ${Styles.shadow}

  &:hover,
  &:focus {
    color: #FFFFFF;
    background-color: ${Styles.red};
    cursor: pointer;
    text-decoration: none;
  }
`;

const LearnMoreCTA = () => (
  <CTA href="/sponsors">
    Learn More
  </CTA>
);

export default LearnMoreCTA;
