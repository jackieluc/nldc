import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import ReactGA from 'react-ga';
import registerServiceWorker from './registerServiceWorker';
import Styles from './utils/styles';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
// import About from './pages/About';
import CorporatePartners from './pages/CorporatePartners';
import ScrollToTop from './utils/ScrollToTop';

// eslint-disable-next-line
injectGlobal`
  @font-face {
    font-family: 'BillyOhio';
    src: url('/fonts/billy-ohio.otf') format('opentype');
  }

  html {
    font-size: 16px;
  }
  body {
    font-size: 16px;
    margin: 0;
    padding: 0;
    font-family: 'Lato', 'BillyOhio', sans-serif;
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
    margin-bottom: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

if (window.location.hostname === 'nldcnow') {
  ReactGA.initialize('UA-120821697-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  // {
  //   name: 'About',
  //   path: '/about-us',
  // },
  {
    name: 'Corporate Partners',
    path: '/corporate-partners',
  },
  {
    name: 'Contact us',
    path: 'https://www.facebook.com/AIESECCanadaNLDC/',
  },
];

ReactDOM.render((
  <Router>
    <main>
      <ScrollToTop />
      <Navigation routes={routes} />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about-us" component={About} /> */}
        <Route exact path="/corporate-partners" component={CorporatePartners} />
        {/* <Route exact path='/schedule' component={Schedule} /> */}
        {/* <Route exact path='/events' component={Events} /> */}
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
      <Footer />
    </main>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
