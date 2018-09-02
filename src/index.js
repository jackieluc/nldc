import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';
import Styles from './utils/styles';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import About from './pages/About';

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    // overflow-x: hidden;
    // overflow-y: auto;
    background-color: #FAFAFA;
    color: ${Styles.textColour};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased
  }

  section, nav {
    display: flex;
    margin-bottom: 2rem;
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
    font-size: 1.5rem;
  }

  a {
    color: ${Styles.themeColour};
  
    &:hover {
      color: ${Styles.hoverColour};
    }
  }
`;

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about-us',
  },
];

ReactDOM.render((
  <Router>
    <main>
      <Navigation routes={routes} />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path='/about-us' component={AboutUs} /> */}
        <Route exact path="/about-us" component={About} />
        {/* <Route exact path='/schedule' component={Schedule} /> */}
        {/* <Route exact path='/events' component={Events} /> */}
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
    </main>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
