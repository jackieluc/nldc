import React from 'react';
import faqData from '../../data/faqData';
import FAQCollapse from './FAQCollapse';

const QuestionsAndAnswers = () => (
  <div>
    {
      faqData.map(data => (
        <FAQCollapse key={data.question} question={data.question} answer={data.answer} />))
    }
  </div>
);

export default QuestionsAndAnswers;
