import React from 'react';
import styled from 'styled-components';
import Media from '../utils/media';
import 'addevent';

const EventDetailsSection = styled.section`
  padding: 0 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${Media.tablet`padding: 0 15px;`}
  ${Media.laptop`width: 70%;`}
  ${Media.desktop`width: 60%;`}
`;

const Column = styled.div`
  box-sizing: border-box;
  padding-left: 0;

  ${Media.tablet`
    flex: 0 50%;
  `}
`;

const ColumnRight = styled(Column)`
  width: 100%;

  ${Media.tablet`
    padding-left: 8%;
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

const AddToCalendar = styled.a`
  // Overwrite AddEvent 'Add to Calendar' styling
  font-family: 'Lato', sans-serif !important;
  font-size: 1rem !important;
  width: 150px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  &:hover {
    box-shadow: 0 5px 8px rgba(0,0,0,0.25), 0 5px 8px rgba(0,0,0,0.22);
  }

  // Overwrite AddEvent watermark
  .addeventatc_dropdown .copyx {
    display: none !important;
  }

  // Overwrite AddEvent icon position
  .addeventatc_icon {
    left: 20px !important;
    top: 18px !important;
  }

  > p {
    margin: 0;
    padding-left: 15px;
  }

`;

const CalendarSubtitle = styled.p`
  font-size: 12px;
  margin: 3px 0 0 0 !important;
  color: #777777;
`;

const EventDetails = () => (
  <EventDetailsSection>
    <Wrapper>
      <Column>
        <EventTitle>
          Disrupting the Now.
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
        {/* <EventDescription>
          May 1&ndash;5, 2019
        </EventDescription> */}
        <EventDescription>
          <AddToCalendar title="Add to Calendar" className="addeventatc" href="void(0)">
            <p>
              May 1&ndash;5, 2019
            </p>
            <CalendarSubtitle>
              Add to Calendar
            </CalendarSubtitle>
            <span className="start">
              05/01/2019 09:00 AM
            </span>
            <span className="end">
              05/05/2019 11:59 PM
            </span>
            <span className="timezone">
              America/Edmonton
            </span>
            <span className="title">
              AIESEC CANADA | NLDC 2019
            </span>
            <span className="description">
              { // eslint-disable-next-line
              } Join AIESEC Canada in &quot;Disrupting the Now&quot; at the National Leadership Development Conference in Calgary, Alberta from May 1&ndash;5, 2019.
            </span>
            <span className="location">
              1301-16 Avenue NW Calgary AB, T2M OL4
            </span>
            <span className="organizer">
              AIESEC Canada
            </span>
            <span className="organizer_email">
              kkaren.ngo@aiesec.net
            </span>
            <span className="all_day_event">
              true
            </span>
          </AddToCalendar>
        </EventDescription>
      </ColumnRight>
    </Wrapper>
  </EventDetailsSection>
);

export default EventDetails;
