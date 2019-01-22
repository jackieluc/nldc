import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import ReactGA from 'react-ga';
import Media from './utils/media';
import registerServiceWorker from './registerServiceWorker';
import Styles from './utils/styles';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';
import Y2b from './pages/Y2b';
import FAQ from './pages/FAQ';
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

if (window.location.hostname === 'www.nldcnow.com') {
  ReactGA.initialize('UA-120821697-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Sponsors',
    path: '/sponsors',
  },
  {
    name: 'Y2B',
    path: '/youth2business',
  },
  {
    name: 'FAQ',
    path: '/faq',
  },
  {
    name: 'Contact',
    path: 'mailto:kkaren.ngo@aiesec.net',
  },
];

ReactDOM.render((
  <Router>
    <main>
      <ScrollToTop />
      <Navigation routes={routes} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sponsors" component={Sponsors} />
        <Route exact path="/youth2business" component={Y2b} />
        <Route exact path="/faq" component={FAQ} />
        {/* <Route exact path='/schedule' component={Schedule} /> */}
        {/* <Route exact path='/events' component={Events} /> */}
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
      <Footer />
    </main>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
