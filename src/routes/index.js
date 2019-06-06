import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Resume from './Resume';

export default () => (
  <Fragment>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
  </Fragment>
);
