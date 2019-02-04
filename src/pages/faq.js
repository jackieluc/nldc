import React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Media from '../utils/media';
import Styles from '../utils/styles';
import QuestionsAndAnswers from '../components/Faq/QuestionsAndAnswers';
import Logo from '../images/nldc2019-logo-black.png';

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;

  ul, ol {
    padding-left: 1.25rem;
  }
`;

const Title = styled.h1`
  color: ${Styles.themeColour};
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const StretchedContainer = styled(Container)`
  padding-right: 0 !important;
  padding-left: 0 !important;

  ${Media.tablet`
    padding-right: 15px !important;
    padding-left: 15px !important;
  `}
`;

const FAQ = () => (
  <Layout>
    <Wrapper>
      <Helmet>
        <title>
          FAQ | NLDC 2019
        </title>
        <link rel="canonical" href="https://www.nldcnow.com/faq" />
        <meta name="description" content="Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary." />
        <meta name="keywords" content="nldc 2019 faq, faq, frequently asked questions, nldc faq, aiesec faq, qna, q&a, qanda, questions, nldc questions, aiesec questions" />
        <meta property="og:title" content="FAQ | NLDC 2019" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary." />
        <meta property="og:url" content="https://www.nldcnow.com/faq" />
        <meta property="og:site_name" content="FAQ | NLDC 2019" />
        <meta property="og:image" content={`https://www.nldcnow.com${Logo}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.nldcnow.com/faq" />
        <meta name="twitter:title" content="FAQ | NLDC 2019" />
        <meta name="twitter:description" content="Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary." />
        <meta name="twitter:image" content={`https://www.nldcnow.com${Logo}`} />
      </Helmet>
      <StretchedContainer>
        <Title>
          Frequently Asked Questions
        </Title>
        <QuestionsAndAnswers />
      </StretchedContainer>
    </Wrapper>
  </Layout>
);

export default FAQ;
