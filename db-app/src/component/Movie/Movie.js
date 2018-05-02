import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import "./Movie.css";
import List from "./List";
import Detail from "./Detail";

class Movie extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" />
                        <Route path="/List" Component={List} />
                        <Route path="/Detail" Component={Detail} />
                    </Switch>
                </Router>
            </div>
        )
    }

}
export default Movie;