import React from 'react';
import styled from 'styled-components';

const EventDetailsSection = styled.section`
  padding: 0 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60%;
`;

const Column = styled.div`
  flex: 0 50%;
  box-sizing: border-box;
  padding: 0 15px;
`;

const EventDetails = () => (
  <EventDetailsSection>
    <Wrapper>
      <Column>
        <p>
          About the event
        </p>
      </Column>
      <Column>
        <p>
          Where
          When
        </p>
      </Column>
    </Wrapper>
  </EventDetailsSection>
);

export default EventDetails;
