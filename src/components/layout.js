import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import Media from '../utils/media';
import Styles from '../utils/styles';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import BillyOhio from '../fonts/billy-ohio.otf';

// eslint-disable-next-line
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BillyOhio';
    src: url(${BillyOhio}) format('opentype');
  }

  html {
    font-size: 16px;
  }
  body {
    font-size: 16px;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif, 'BillyOhio';
    // overflow-x: hidden;
    // overflow-y: auto;
    // background-color: #FAFAFA;
    color: ${Styles.textColour};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  section, nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
  }

  nav {
    padding: 0;
    ${Media.laptop`padding: 3rem 0;`}
  }
  p {
    margin: 0;
  }

  h1, h2, h3, h4, h5, p, span, li, label, div, b {
    &::selection {
      background: ${Styles.themeColour};
      color: white;
    }
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  a {
    color: ${Styles.themeColour};
    text-decoration: none;
  
    &:hover {
      color: ${Styles.hoverColour};
      text-decoration: underline;
    }
  }
`;

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Sponsors',
    path: '/sponsors',
  },
  // {
  //   name: 'Y2B',
  //   path: '/youth2business',
  // },
  {
    name: 'FAQ',
    path: '/faq',
  },
  {
    name: 'Banff Survey',
    path: '/banff',
  },
  {
    name: 'Contact',
    path: 'mailto:kkaren.ngo@aiesec.net',
  },
];

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Remove any service worker: sw.js or service-worker.js from old deploys
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <GlobalStyle />
            <Navigation routes={routes} />
            <main>
              {children}
            </main>
            <Footer />
          </>
        )}
      />
    )
  }
}
