import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink,Link } from "react-router-dom";
import "./Movie.css";

class List extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title: "",
            movies: [],
        }
    }

    componentDidMount() {
        console.warn('ok')
        axios.get("/v2/movie/in_theaters")
            .then((response) => {
                console.log(response.data);
                this.setState({
                    title: response.data.title,
                    movies: response.data.subjects,

                })
            })
            .then((error) => {
                console.log(error);
            })
    }

    render() {

        return (
            <div className="movie_block">
                <h2>{this.state.title}</h2>
                <ul>
                    {
                        this.state.movies.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={"/Detail/" + item.id}>
                                        <div className="pic">
                                            <img src={item.images.large} alt="" />
                                        </div>
                                        <div className="title">
                                            {item.title}
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            
            </div>
        )
    }
}
export default List;