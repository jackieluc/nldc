import React from 'react';
import styled from 'styled-components';
import styles from '../../utils/styles';

const CTA = styled.a`
  display: inline-block;
  border-radius: 40px;
  padding: .7rem 1.2rem;
  margin: 0;
  color: #FFFFFF;
  border: none;
  background-color: ${styles.lightRed};
  ${styles.shadow}

  &:hover,
  &:focus {
    color: #FFFFFF;
    background-color: ${styles.red};
    cursor: pointer;
    text-decoration: none;
  }
`;

const SponsorCTA = () => (
  <CTA href="mailto:jacoby.holder@aiesec.net?subject=Sponsorship Inquiry">
    Become our partner
  </CTA>
);

export default SponsorCTA;
