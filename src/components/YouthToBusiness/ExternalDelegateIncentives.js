import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Media from '../../utils/media';
import Styles from '../../utils/styles';
import ButtonCTA from '../Button/Button';

const Wrapper = styled(Container)`
  color: white;
  background: linear-gradient(${Styles.y2bGreen} 30%, ${Styles.themeColour} 100%);
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  ${Media.laptop`padding: 0 20px 5rem 0;`}
`;

const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  max-width: 480px;
  font-size: 1.5rem;
  line-height: 1.2;
  margin: 0 auto 2rem auto;
`;

const StyledRow = styled(Row)`
  max-width: 1140px;
  margin: 0 auto;
  padding: 5rem 0 0 0;

  ${Media.tablet`justify-content: center;`}
`;

const IncentiveTitle = styled(Title)`
  text-align: left;
  font-weight: bold;

  padding-left: 15px;

  ${Media.tablet`
    padding-left: 0;
  `}
`;

const IncentiveList = styled.ul`
  text-align: left;
  padding-left: 1rem;
  margin-bottom: 5rem;
  ${Media.laptop`margin-bottom: 0;`}
  
  li {
    margin-bottom: 1rem;
  }
`;

const TicketInfo = styled.div`
  text-align: left;
  background-color: white;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  ${Styles.shadow}

  h3 {
    font-size: 1.5rem;
    color: ${Styles.textColour};
    margin-bottom: 0;
  }

  p {
    color: ${Styles.textColour};
  }
`;

const Highlight = styled.span`
  ${Styles.highlight}
`;

const ExternalDelegateIncentives = () => (
  <Wrapper fluid id="youth-to-business">
    <StyledRow>
      <Col xs={12}>
        <Title>Not a member of AIESEC? <br/> Join our Youth To Business Forum!</Title>
        <Subtitle>If you are a university student or new-grad, you are invited to our Youth to Business Forum, which will take place from May 1-2.</Subtitle>
        <ButtonCTA link="https://bit.ly/Y2B2019Forum">Get Your Tickets</ButtonCTA>
      </Col>
    </StyledRow>
    <StyledRow>
      <Col xs={12} md={8} lg={6}>
        <IncentiveTitle>Why you need to be here</IncentiveTitle>
        <IncentiveList>
          <li>You’ll get an amazing opportunity to develop your professional and social network with 300+ leaders across 26 Canadian universities.</li>
          <li>An amazing opportunity to participate in a Business EXPO and Networking Spaces with Calgary and Canada’s leading organizations to secure your future career.</li> 
          <li>Participate in a series of workshops and consultancy spaces to learn the skills necessary to build strong networks and leverage your practical experiences.</li>
          <li>Not enough? This is your opportunity to engage in thoughtful discussions with the country’s top business executives in mealtime roundtable discussions, panels, and more!</li>
        </IncentiveList>
      </Col>
      <Col xs={12} md={8} lg={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <TicketInfo>
          <h3>
            <Highlight>
              $70 | General Admission
            </Highlight>
          </h3>
          <p>includes Dinner (May 1st), Breakfast and Lunch (May 2nd)</p>
        </TicketInfo>
        <TicketInfo>
          <h3>
            <span style={{ color: Styles.lightRed, marginRight: '5px' }}>Sold out!</span>
            <span style={{ textDecoration: 'line-through', color: 'rgb(51, 51, 51, 0.5)' }}>
              $110 | General Admission & Accommodation
            </span>
          </h3>
          <p style={{ textDecoration: 'line-through', color: 'rgb(51, 51, 51, 0.5)' }}>
            includes Dinner (May 1st), Overnight Accommodation (May 1st), Breakfast and Lunch (May 2nd)
          </p>
        </TicketInfo>
      </Col>
    </StyledRow>
    <StyledRow id="survey" style={{ marginBottom: '0' }}>
      <Col xs={12} md={10} lg={8}>
        <Title>Let us hear your voice</Title>
        <p style={{ marginBottom: '1rem' }}>Every year, AIESEC in Canada releases the Youth to Business survey. This survey aims to better understand the priorities of young people to communicate them with industry professionals. Young people are most affected by this gap, and have a responsibility to shape the future they want to see.</p>
        <p>We are proud to announce that this year RBC will be sponsoring the Youth To Business Survey in partnership with their ongoing RBC Upskill Initiative. For more information on RBC Skill visit: <a href="https://www.rbcupskill.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 'bold' }}>https://www.rbcupskill.ca</a></p>
        <ButtonCTA type="ghost" link="https://aiesecincanada1.typeform.com/to/LwjMb8">Take Our Survey</ButtonCTA>
      </Col>
    </StyledRow>
  </Wrapper>
);

export default ExternalDelegateIncentives;