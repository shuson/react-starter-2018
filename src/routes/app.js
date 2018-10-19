import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from '../pages/home'

const RouteOne = () => <div>
  <p>I am Route One</p>
  <Link to={"/"}>Back </Link>
</div>

const RouteTwo = () => <div>
  <p>I am Route Two</p>
  <Link to={"/"}>Back </Link>
</div>

export default () => {
  const routes = (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/route1" component={RouteOne} />
        <Route path="/route2" component={RouteTwo} />
        <Route render={() => (<div>404</div>)} />
      </Switch>
    </Router>
  )
  return routes
}