import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components';
import Styles from '../utils/styles';

const Wrapper = styled.section`
  margin: auto 0;
  height: 67vh 
`;

const Message = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const CTA = styled(Link)`
  display: inline-block;
  border-radius: 40px;
  padding: .7rem 2rem;
  margin: 0;
  color: #FFFFFF;
  border: none;
  background-color: ${Styles.lightRed};
  ${Styles.shadow}

  &:hover,
  &:focus {
    color: #FFFFFF;
    background-color: ${Styles.red};
    cursor: pointer;
    text-decoration: none;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <h2>Oops! Sorry for disrupting your experience.</h2>
      <Message>
        <p>It seems like what you are looking for doesn&apos;t exist or is missing.</p>
        <p>Don&apos;t worry, we can help you find your way back.</p>
      </Message>
      <CTA to="/">Go Home</CTA>
    </Wrapper>
  </Layout>
)

export default NotFoundPage;
