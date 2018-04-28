import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Movie from "../Movie/Movie";
import Broadcast from "../Broadcast/Broadcast";
import Group from "../Group/Group";
import "./Header.css";


class Header extends React.Component {
    render() {
        return (
            


                <Router>
                    <div className="all">
                        <div className="nav">
                            <div className="logo">豆瓣</div>
                            <ul>
                                <li>
                                    <NavLink activeClassName="selected" to="/Movie">电影</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="selected" to="/Broadcast">广播</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="selected" to="/Group">小组</NavLink>
                                </li>
                            </ul>
                        </div>
                       <div className="content">
                            <Route exact path="/Movie" component={Movie} />
                            <Route path="/Broadcast" component={Broadcast} />
                            <Route path="/Group" component={Group} />
                       </div>

                    </div>


                </Router>

            
        )
    }
}
export default Header;