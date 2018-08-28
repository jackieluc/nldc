import React from 'react';
import styled from 'styled-components';
import { Media } from '../utils/media';

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
          } It is our pleasure to invite you, on behalf of AIESEC Canada, to become a partner for our annual National Leadership Development Conference (NLDC). We are looking to form valuable partnerships with organizations that value leadership and diversity, innovation and technology, and entrepreneurial thinking. NLDC is the perfect occasion for your business to promote the rich opportunities that your organization has to offer to some of Canada’s next generation of business leaders.
        </EventDescription>
        <EventDescription>
          { // eslint-disable-next-line
          } Hundreds of AIESECers from 30 Universities across the country will remember NLDC in the decades to come. This five day conference is a time when our most dedicated volunteers come together to network and develop their leadership, sales, marketing, finance skills and so much more.
        </EventDescription>
      </Column>
      <ColumnRight>
        <EventInfoTitle>
          Where
        </EventInfoTitle>
        <EventDescription>
          To be Announced.
        </EventDescription>
        <EventInfoTitle>
          When
        </EventInfoTitle>
        <EventDescription>
          May 1st - 6th, 2019
        </EventDescription>
      </ColumnRight>
    </Wrapper>
  </EventDetailsSection>
);

export default EventDetails;
