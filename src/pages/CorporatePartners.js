import React from 'react';
import styled from 'styled-components';
import {
  Container, Row, Col, CardDeck,
} from 'reactstrap';
import Wave from '../components/Dividers/Wave';
import Media from '../utils/media';
import Styles from '../utils/styles';
import SponsorCTA from '../components/SponsorPackage/SponsorCTA';
import SponsorPackage from '../components/SponsorPackage/SponsorPackage';
import SponsorList from '../components/SponsorPackage/SponsorList';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: ${Styles.themeColour};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const TitleSection = styled.section`
  margin-top: 4rem;
`;

const Description = styled(Col)`
  text-align: center;
  margin: 0 auto 2rem auto;
  max-width: 992px;
`;

const Benefits = styled.section`
  background: linear-gradient( 135deg, #74C7D9 40%, #037EF3 100%);
  width: 100%;
  padding: 2rem 0 6rem 0;
  ${Media.laptop`padding: 2rem 0 10rem 0`}
  margin-bottom: 0;
`;

const BenefitsTitle = styled.h1`
  color: #FFFFFF;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const benefits1 = ['Keynote presentations', 'Corporate videos', 'Plenary recognition', ['Logo exposure', 'Conference website', 'Merchandise', 'Delegate package'], 'Snapchat filters', 'Social media promotion', 'Promotional products'];

const benefits2 = ['Conference boothing table', 'Complimentary banquet tickets', 'External speaking opportunities', 'Innovation Series workshops', 'Recruitment materials', 'Email blast to delegates', 'Lunch with Leaders invintation', 'Delegate resumes'];

const benefits3 = ['International recruitment program discount - Hire global talent', 'For over 65 years, we have worked alongside government, businesses and talented  students to facilitate life changing professional experiences within hundreds of small to multinational businesses. We have provided talented youth with meaningful and challenging experiences to develop their leadership potential in Canada.'];

const Sponsors = () => (
  <Wrapper>
    <Container>
      <TitleSection>
        <Title>
          Corporate Partners
        </Title>
        <Row>
          <Description xs="12">
            <p>
              { // eslint-disable-next-line
              } In order to have a successful NLDC, we require funding for venues, events, speakers, and much more. We are looking to form valuable partnerships with organizations that value leadership, diversity, innovation, technology, and entrepreneurial thinking.
            </p>
            <p>
              { // eslint-disable-next-line
              } NLDC is the perfect occasion for your organization to promote the rich opportunities that your organization has to offer to some of Canada's next generation of business leaders.
            </p>
          </Description>
          <Col xs="12">
            <SponsorCTA />
          </Col>
        </Row>
      </TitleSection>
    </Container>
    <Benefits>
      <BenefitsTitle>
        Benefits
      </BenefitsTitle>
      <CardDeck style={{ maxWidth: '992px' }}>
        <SponsorPackage title="Branding & Recognition" benefits={benefits1} />
        <SponsorPackage title="Networking & Recruitment" benefits={benefits2} />
        <SponsorPackage title="CSR" benefits={benefits3} />
      </CardDeck>
    </Benefits>
    <Wave />
    <SponsorList paddingTop="4rem" />
  </Wrapper>
);

export default Sponsors;
