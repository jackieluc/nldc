import React, { Component } from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import styles from '../utils/styles';
import Media, { BreakPoints } from '../utils/media';
import Logo from '../images/nldc2019-logo-black.png';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const Wrapper = styled.div`
  text-align: center;
  ${Media.laptop`margin-top: 4rem;`}
`;

export default class Banff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typeFormStyle: {
        position: 'relative',
        height: '100vh',
        marginBottom: '3rem',
        zIndex: '1000',
      },
    }
  }

  componentDidMount() {
    const currentBreakPoint = window.matchMedia( `(min-width: ${BreakPoints.laptop}px)` );
    
    if (currentBreakPoint.matches) {
      let newTypeFormStyle = { ...this.state.typeFormStyle };

      newTypeFormStyle.height = '92.7vh';
      newTypeFormStyle.zIndex = '0';

      this.setState({ typeFormStyle: newTypeFormStyle })
    }
  }

  render() {
    const { typeFormStyle } = this.state;
    return (
      <Layout>
        <Wrapper>
          <Helmet>
            <title>
              Banff | NLDC 2019
            </title>
            <link rel="canonical" href="https://www.nldcnow.com/banff" />
            <meta name="description" content="Post Conference Banff Retreat Survey - Our current idea is Banff on May 6 and Lake Louise on May 7." />
            <meta name="keywords" content="AIESEC, Canada, Calgary, NLDC, national, leadership, development, conference, 2019, AIESEC.org, AIESEC.ca nldc 2019, national leadership development conference" />
            <meta property="og:title" content="Banff | NLDC 2019" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Post Conference Banff Retreat Survey - Our current idea is Banff on May 6 and Lake Louise on May 7." />
            <meta property="og:url" content="https://www.nldcnow.com/banff" />
            <meta property="og:site_name" content="Banff | NLDC 2019" />
            <meta property="og:image" content={`https://www.nldcnow.com${Logo}`} />
            <meta property="fb:app_id" content="594354454320006" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://www.nldcnow.com/banff" />
            <meta name="twitter:title" content="Banff | NLDC 2019" />
            <meta name="twitter:description" content="Post Conference Banff Retreat Survey - Our current idea is Banff on May 6 and Lake Louise on May 7." />
            <meta name="twitter:image" content={`https://www.nldcnow.com${Logo}`} />
          </Helmet>
          <ReactTypeformEmbed url='https://karen1337.typeform.com/to/ZMRewG' style={typeFormStyle} autoOpen={true} />
        </Wrapper>
      </Layout>
    )}
};
