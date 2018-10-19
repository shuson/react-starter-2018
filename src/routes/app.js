import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from '../pages/home'

const RouteOne = () => <div>
  I am Route One

  <Link to={"/"}>Back </Link>
</div>

const RouteTwo = () => <div>
  I am Route Two
  <Link to={"/"}>Back </Link>
</div>

export default () => {
  const routes = (
    <Router>
      <Switch>
        <Route exect path="/" component={Home} />
        <Route path="/route1" component={RouteOne} />
        <Route path="/route2" component={RouteTwo} />
      </Switch>
    </Router>
  )
  return routes
}