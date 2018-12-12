import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Styles from '../utils/styles';
import AddToCalendar from './Calendar/AddToCalendar';
import Media from '../utils/media';
import Motto from './Motto';

const ConferenceDescription = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  ${Media.laptop`padding-bottom: 0;`}
`;

const StyledRow = styled(Row)`
  justify-content: center;
`;

const MottoWrapper = styled.div`
  margin: 0 auto 2rem auto;
  ${Media.medPhone`width: 20rem;`}
  ${Media.laptop`
    width: 26rem;
    margin: 0 auto;
  `}
`;

const DescriptionWrapper = styled(Col)`
  display: flex;
  align-items: center;
`;

const EventDescription = styled.p`
  text-align: left;
  margin: 0;
`;

const AddressLink = styled.a`
  text-align: left;
  display: block;
`;

const EventInfoTitle = styled.h3`
  color: ${Styles.textColour};
  text-align: left;
`;

const EventDetails = () => (
  <section>
    <Container>
      <ConferenceDescription>
        <StyledRow>
          <Col xs="12" sm="10" lg="6">
            {/* <MottoWrapper src={Motto} alt="Disrupting the now." /> */}
            <MottoWrapper>
              <Motto />
            </MottoWrapper>
          </Col>
          <DescriptionWrapper xs="12" sm="10" lg="6">
            <EventDescription>
              { // eslint-disable-next-line
              } AIESEC Canada’s National Leadership Development Conference is an annual 5-day event that brings together 300 business leaders from 30+ universities across Canada to network and develop their skills in teamwork, sales, finance, and marketing. In 2019, we are introducing the Innovation Series to connect our delegates with the leading businesses in technology and disruption.
            </EventDescription>
          </DescriptionWrapper>
        </StyledRow>
      </ConferenceDescription>
      <StyledRow>
        <Col xs="12" sm="10" lg={{ size: 6, offset: 6 }}>
          <EventInfoTitle>
            Save the date!
          </EventInfoTitle>
          <EventDescription>
            <AddToCalendar />
          </EventDescription>
        </Col>
      </StyledRow>
      {/* <StyledRow>
        <Col xs="12" sm="10" lg={{ size: 6, offset: 6 }}>
          <EventInfoTitle>
            Where
          </EventInfoTitle>
          <EventDescription>
            SAIT (Southern Alberta Institute of Technology), Calgary, Alberta
            <AddressLink href="https://www.google.com/maps/place/SAIT/@51.0640269,-114.0907061,17z/data=!3m1!4b1!4m5!3m4!1s0x53716f9268a69e81:0xb1db5e68bd61e28!8m2!3d51.065755!4d-114.0897771" target="_blank" rel="noopener noreferrer">
              1301-16 Avenue NW Calgary AB, T2M OL4
            </AddressLink>
          </EventDescription>
        </Col>
      </StyledRow> */}
    </Container>
  </section>
);

export default EventDetails;
