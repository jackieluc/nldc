import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import MailChimp from '../MailChimp/MailChimp';
import SocialMedia from './SocialMedia';

const Wrapper = styled.footer`
  background-image: linear-gradient( 135deg, #74C7D9 40%, #037EF3 100%);
  margin: 0;
  padding-top: 80px;
  padding-bottom: 60px;
`;

const Div = styled.div`
  position: relative;
  display: block;
  text-align: center;
`;

const Link = styled(Link)`
  position: absolute;
  top: -135px;
  margin-left: -120px;
`;

const LogoImage = styled(Img)`
  width: 240px;
`;

const PageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "nldc2019-logo-black.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Footer = (props) => (
    <StaticQuery
    query={PageQuery}
    render={data => (
      <Wrapper>
        <Div>
          <Link to="/">
            <LogoImage fluid={data.logo.childImageSharp.fluid} alt="NLDC 2019 Logo" />
          </Link>
          <Container>
            <MailChimp />
            <SocialMedia />
          </Container>
        </Div>
      </Wrapper>
    )}
  />
);

export default Footer;
