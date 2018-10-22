import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

const Wrapper = styled(Container)`
  padding: 2rem 15px;
  background-color: #F9F9F9;
  position: relative;
  z-index: 2;
`;
const Description = styled(Col)`
  text-align: center;
  margin: 0 auto;
`;

const Values = () => (
  <Wrapper fluid>
    <Row>
      <Description xs="12" md="10" xl="6">
        <p>
          { // eslint-disable-next-line
          } For over 65 years, we have worked alongside government, businesses and talented  students to facilitate life changing professional experiences within hundreds of small to multinational businesses. We have provided talented youth with meaningful and challenging experiences to develop their leadership potential in Canada.
        </p>
        <div>
            Please visit
          {' '}
          <a href="https://www.aiesec.ca/hire-global-talent/" target="_blank" rel="noopener noreferrer">
              https://www.aiesec.ca/hire-global-talent/
          </a>
          {' '}
            for more information.
        </div>
      </Description>
    </Row>
  </Wrapper>
);

export default Values;
