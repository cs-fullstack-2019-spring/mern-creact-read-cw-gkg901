import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MovieList from './components/list-movie'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <h1>Welcome to the movie collection</h1>
          </div>
          <nav>
              <Link to='/' className='navlink'>Home</Link>
              <Link to='/list' className='navlink'>Movie List</Link>
              <Link to='/create' className='navlink'>Add a Movie </Link>
          </nav>

          <Route path={'/list'} exact component={MovieList}/>
          {/*<Route path={'/create'} exact component={CreateMovie}/>*/}
      </Router>
  );
  }
}

export default App;
