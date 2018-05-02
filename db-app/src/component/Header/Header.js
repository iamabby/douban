import React from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Movie from "../Movie/Movie";
import "./Header.css";


class Header extends React.Component {
    render() {
        return (

            <div className="all">
                <div className="nav">
                    <div className="logo">豆瓣</div>
                    <ul>
                        <li>
                            <Link  to="/Movie">电影</Link>
                        </li>
                        <li>
                            <Link to="/Broadcast">广播</Link>
                        </li>
                        <li>
                            <Link  to="/Group">小组</Link>
                        </li>
                    </ul>
                </div>
            </div>



        )
    }
}
export default Header;