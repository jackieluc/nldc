import React from 'react';
import styled from 'styled-components';
import Styles from '../utils/styles';
import Media, { BreakPoints } from '../utils/media';

const SponsorDetailsSection = styled.section`
  padding: 3rem 15px 0;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  z-index: 2;
  max-width: ${BreakPoints.desktop}px;
  ${Media.tablet`width: 75%;`}
  ${Media.laptop`width: 620px;`}
`;

const SponsorTitle = styled.h2`
  color: ${Styles.themeColour}
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const SponsorDescription = styled.div`
  width: 100%;
  ${Media.tablet`width: 400px;`}
  text-align: center;
  margin: 0 auto;
`;

const Description = styled.p`
  margin-bottom: 2rem;
`;

const Highlight = styled.b`
  ${Styles.highlight}
`;

const SponsorDetails = () => (
  <SponsorDetailsSection>
    <Wrapper>
      <SponsorTitle>
        Sponsors
      </SponsorTitle>
      <SponsorDescription>
        <Description>
          { // eslint-disable-next-line
          } We would like to thank our corporate sponsors for supporting youth leadership and our 2019 mission in <Highlight>#DisruptingTheNow</Highlight>.
        </Description>
      </SponsorDescription>
    </Wrapper>
  </SponsorDetailsSection>
);

export default SponsorDetails;
