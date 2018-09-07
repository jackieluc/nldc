import React from 'react';
import styled from 'styled-components';
import Media, { BreakPoints } from '../utils/media';

const SponsorDetailsSection = styled.section`
  padding: 0 15px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${BreakPoints.desktop}px;
  ${Media.tablet`width: 75%`}
  ${Media.laptop`width: 620px;`}
`;

const SponsorTitle = styled.h2`
  background: #7F7FD5;
  background: -webkit-linear-gradient(to right, #9BCDFF, #7F7FD5);
  background: linear-gradient(to right, #9BCDFF, #7F7FD5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 3px 6px rgba(103, 221, 166, 0.32);
  font-size: 2.5rem;
`;

const SponsorDescription = styled.p`
  text-align: left;
`;

const Cta = styled.a`
  text-align: center;
`;

const SponsorCard = styled.div`
  box-shadow: rgba(83, 40, 255, 0.15) 0px 6px 34px;
`;

const SponsorDetails = () => (
  <SponsorDetailsSection>
    <Wrapper>
      <SponsorTitle>
        Sponsors
      </SponsorTitle>
      <SponsorDescription>
        { // eslint-disable-next-line
        } In order to have a successful NLDC, we require funding for venues, events, speakers, and much more. We are looking to form valuable partnerships with organizations that value leadership, diversity, innovation, technology, and entrepreneurial thinking. NLDC is the perfect occasion for your organization to promote the rich opportunities that your organization has to offer to some of Canada's next generation of business leaders.
      </SponsorDescription>
      <Cta href="mailto:jacoby.holder@aiesec.net?subject=Sponsorship Inquiry">
        Interested in becoming a sponsor?
      </Cta>
    </Wrapper>
  </SponsorDetailsSection>
);

export default SponsorDetails;
