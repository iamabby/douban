import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import { HashRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import Movie from './component/Movie/List'
import MovieDetail from './component/Movie/Detail'
import Group from "./component/Group/Group"
import Broadcast from "./component/Broadcast/Broadcast";

class App extends Component {
  render() {
    return (
    <Router>
      <div>
      <Header />
      <div className="content">
            <Switch>
              <Route path="/Movie" component={Movie} />
              <Route path="/Detail/:id" component={MovieDetail} />
              <Route path="/Broadcast" component={Broadcast} />
              <Route path="/Group" component={Group} />
            </Switch>
        
        </div>
      </div>
    </Router>        
    );
  }
}

export default App;
