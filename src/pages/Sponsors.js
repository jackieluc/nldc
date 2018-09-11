import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: palevioletred;
`;

const SponsorSection = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Sponsors = () => (
  <div className="about">
    <SponsorSection>
      <Title>
        Sponsors
      </Title>
    </SponsorSection>
    <p className="section about-intro">
      { // eslint-disable-next-line
      } In order to have a successful NLDC, we require funding for venues, events, speakers, and much more. We are looking to form valuable partnerships with organizations that value leadership, diversity, innovation, technology, and entrepreneurial thinking. NLDC is the perfect occasion for your organization to promote the rich opportunities that your organization has to offer to some of Canada's next generation of business leaders.
    </p>
  </div>
);

export default Sponsors;
