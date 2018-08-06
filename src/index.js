import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';
import Team from './pages/Team';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #FAFAFA;
  }
`;

ReactDOM.render((
  <Router>
    <main>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/about-us' component={AboutUs} /> */}
        <Route exact path='/sponsors' component={Sponsors} />
        <Route exact path='/team' component={Team} />
        {/* <Route exact path='/schedule' component={Schedule} /> */}
        {/* <Route exact path='/events' component={Events} /> */}
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
    </main>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
