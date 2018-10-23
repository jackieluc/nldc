import React from 'react';
import styled from 'styled-components';
import Styles from '../utils/styles';
import Media, { BreakPoints } from '../utils/media';

const SponsorDetailsSection = styled.section`
  padding: 0 15px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${BreakPoints.desktop}px;
  ${Media.tablet`width: 75%;`}
  ${Media.laptop`width: 620px;`}
`;

const SponsorTitle = styled.h2`
  background: #7F7FD5;
  background: -webkit-linear-gradient(to right, ${Styles.themeColour}, #7F7FD5);
  background: linear-gradient(to right, ${Styles.themeColour}, #7F7FD5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
`;

const SponsorDescription = styled.div`
  width: 100%;
  ${Media.tablet`width: 400px;`}
  text-align: center;
  margin: 0 auto;
`;

const SponsorDetails = () => (
  <SponsorDetailsSection>
    <Wrapper>
      <SponsorTitle>
        Sponsors
      </SponsorTitle>
      <SponsorDescription>
        <p>
          { // eslint-disable-next-line
          } Our generous sponsors not only make NLDC possible — they are also joining us in <b>#DisruptingTheNow</b>.
        </p>
        <a href="mailto:jacoby.holder@aiesec.net?subject=Sponsorship Inquiry">
          Become our partner today!
        </a>
      </SponsorDescription>
    </Wrapper>
  </SponsorDetailsSection>
);

export default SponsorDetails;
