import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/about-us' component={AboutUs} /> */}
      <Route exact path='/sponsors' component={Sponsors} />
      {/* <Route exact path='/schedule' component={Schedule} /> */}
      {/* <Route exact path='/events' component={Events} /> */}
    </Switch>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
