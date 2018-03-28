import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import HomeView from './Home/HomeView';
import Loading from './Loading';

const AsyncChild1 = importedComponent(
  () => import('./Child1'),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/child1" component={AsyncChild1} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
