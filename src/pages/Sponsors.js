import React from 'react';
import styled from 'styled-components';
import SponsorPackage from '../components/SponsorPackage/SponsorPackage';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  background: #7F7FD5;
  background: -webkit-linear-gradient(to right, #9BCDFF, #7F7FD5);
  background: linear-gradient(to right, #9BCDFF, #7F7FD5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
`;

const TitleSection = styled.section`
  margin-top: 3rem;
  margin-bottom: 0;
`;

const Sponsors = () => (
  <Wrapper>
    <TitleSection>
      <Title>
        Sponsors
      </Title>
    </TitleSection>
    <p>
      { // eslint-disable-next-line
      } In order to have a successful NLDC, we require funding for venues, events, speakers, and much more. We are looking to form valuable partnerships with organizations that value leadership, diversity, innovation, technology, and entrepreneurial thinking. NLDC is the perfect occasion for your organization to promote the rich opportunities that your organization has to offer to some of Canada's next generation of business leaders.
    </p>
    <SponsorPackage />
  </Wrapper>
);

export default Sponsors;
