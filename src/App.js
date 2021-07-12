import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function PlaceholderHome() {
  return (
    <div>
      / path
    </div>
  );
}

function PlaceholderSearch() {
  return (
    <div>
      /search path
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PlaceholderHome} />
        <Route path="/search" component={PlaceholderSearch} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
