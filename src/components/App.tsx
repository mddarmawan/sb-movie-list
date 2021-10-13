import React from 'react';
import MovieList from './MovieList';
import MovieSingle from './MovieSingle';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/movie/:id" render={()=> <MovieSingle />} />
          <Route path="/">
            <MovieList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
