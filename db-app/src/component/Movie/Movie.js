import React from "react";
import axios from "axios";

import "./Movie.css";


class Movie extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title:"",
            movies: [],
        }
    }

    componentDidMount() {
        axios.get("/v2/movie/in_theaters")
            .then((response) => {
                console.log(response.data);
                this.setState({
                    title:response.data.title,
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
                                    <div className="pic">
                                        <img src={item.images.large} alt="" />
                                    </div>
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <div className="date">
                                        {item.year}
                                    </div>
                                    <div>
                                        {item.rating.average}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Movie;