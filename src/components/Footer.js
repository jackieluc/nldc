import React from 'react';
import MailChimp from './MailChimp/MailChimp';
// import styled from 'styled-components';
// import Media from '../utils/media';

const Footer = () => (
  <section>
    <p>
      For any inquiries, please contact Jake Holder at
      {' '}
      <a href="mailto:jacoby.holder@aiesec.net?subject=Sponsorship Inquiry">
        jacoby.holder@aiesec.net
      </a>
    </p>
    <MailChimp />
  </section>
);

export default Footer;
