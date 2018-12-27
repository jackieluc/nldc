import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Styles from '../utils/styles';
import QuestionsAndAnswers from '../components/Faq/QuestionsAndAnswers';

const Wrapper = styled.section`
margin-top: 4rem;
text-align: center;
`;

const Title = styled.h1`
  color: ${Styles.themeColour};
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const FAQ = () => (
  <Wrapper>
    <Container>
      <Title>
        Frequently Asked Questions
      </Title>
      <QuestionsAndAnswers />
    </Container>
  </Wrapper>
);

export default FAQ;
