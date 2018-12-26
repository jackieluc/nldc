import React from 'react';
import styled from 'styled-components';
import Styles from '../utils/styles';
import Media, { BreakPoints } from '../utils/media';
import SponsorCTA from './SponsorPackage/SponsorCTA';

const SponsorDetailsSection = styled.section`
  padding: 3rem 15px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
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
        Corporate Partners
      </SponsorTitle>
      <SponsorDescription>
        <Description>
          { // eslint-disable-next-line
          } Our generous corporate partners not only make NLDC possible — they are also joining us in <Highlight>#DisruptingTheNow</Highlight>.
        </Description>
        <SponsorCTA />
      </SponsorDescription>
    </Wrapper>
  </SponsorDetailsSection>
);

export default SponsorDetails;
