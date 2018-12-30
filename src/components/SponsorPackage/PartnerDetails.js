import React from 'react';
import styled from 'styled-components';
import Styles from '../../utils/styles';
import Media, { BreakPoints } from '../../utils/media';

const PartnerDetailsSection = styled.section`
  padding: 0 15px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${BreakPoints.desktop}px;
  ${Media.tablet`width: 75%;`}
  ${Media.laptop`width: 620px;`}
`;

const PartnerTitle = styled.h2`
  color: ${Styles.themeColour}
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const PartnerDescription = styled.div`
  width: 100%;
  ${Media.tablet`width: 400px;`}
  text-align: center;
  margin: 0 auto;
`;

const Description = styled.p`
  margin-bottom: 2rem;
`;

const PartnerDetails = () => (
  <PartnerDetailsSection>
    <Wrapper>
      <PartnerTitle>
        Partners
      </PartnerTitle>
      <PartnerDescription>
        <Description>
          { // eslint-disable-next-line
          } We would like to thank the following organizations for their in-kind contributions.
        </Description>
      </PartnerDescription>
    </Wrapper>
  </PartnerDetailsSection>
);

export default PartnerDetails;
