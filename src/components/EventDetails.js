import React from 'react';
import styled from 'styled-components';
import Media from '../utils/media';

const EventDetailsSection = styled.section`
  padding: 0 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  ${Media.desktop`
    width: 80%;
  `}
`;

const Column = styled.div`
  box-sizing: border-box;
  padding-left: 0;

  ${Media.tablet`
  flex: 0 50%;
    padding-left: 18%;
  `}
`;

const ColumnRight = styled(Column)`
  width: 100%;
  padding-left: 0;

  ${Media.tablet`
    padding-left: 10%;
    padding-top: 2rem;
  `}
`;

const EventTitle = styled.h2`
  background: #7F7FD5;
  background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);
  background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 3px 6px rgba(103, 221, 166, 0.32);
  font-size: 2rem;
  text-align: left;
  margin-bottom: 0;
`;

const EventDescription = styled.p`
  text-align: left;
`;

const AddressLink = styled.a`
  text-align: left;
  display: block;
`;

const EventInfoTitle = styled(EventTitle)`
  font-size: 1.5rem;
`;

const EventDetails = () => (
  <EventDetailsSection>
    <Wrapper>
      <Column>
        <EventTitle>
          About the Event
        </EventTitle>
        <EventDescription>
          { // eslint-disable-next-line
          } AIESEC Canada’s National Leadership Development Conference (NLDC) is an annual 5-day event that brings together 300 business leaders from 30+ universities across Canada to network and develop their skills in teamwork, sales, finance, and marketing. In 2019, we are introducing the Innovation Series to connect our delegates with the leading businesses in technology and disruption.
        </EventDescription>
      </Column>
      <ColumnRight>
        <EventInfoTitle>
          Where
        </EventInfoTitle>
        <EventDescription>
          SAIT (Southern Alberta Institute of Technology)
          <AddressLink href="https://www.google.com/maps/place/SAIT/@51.0640269,-114.0907061,17z/data=!3m1!4b1!4m5!3m4!1s0x53716f9268a69e81:0xb1db5e68bd61e28!8m2!3d51.065755!4d-114.0897771" target="_blank" rel="noopener noreferrer">
            1301-16 Avenue NW Calgary AB, T2M OL4
          </AddressLink>
        </EventDescription>
        <EventInfoTitle>
          When
        </EventInfoTitle>
        <EventDescription>
          May 1&ndash;5, 2019
        </EventDescription>
      </ColumnRight>
    </Wrapper>
  </EventDetailsSection>
);

export default EventDetails;
