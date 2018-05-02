import React from "react";
import axios from "axios";




class Detail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title: "",
            summary: "",
            imgUrl: "",
            casts: [],
            rating:[],
            ratings_count:"",


        }
    }
    componentDidMount() {
        console.warn('ok')
        axios.get("/v2/movie/subject/" + this.props.match.params.id)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    title: response.data.title,
                    summary: response.data.summary,
                    imgUrl: response.data.images.large,
                    casts: response.data.casts,
                    rating:response.data.rating,
                    ratings_count:response.data.ratings_count,

                })
            })
            .then((error) => {
                console.log(error);
            })
    }
    render() {
        const {
            title,
            summary,
            imgUrl,
            casts,
            rating,
            ratings_count,
        } = this.state;
        return (
            <div>
                <div className="detail_title">{title}</div>
                <div className="subject_info">
                    <img src={imgUrl} alt="" className="detail_pic" />
                    <div className="infos">
                      {rating.average}
                      <span className="ratings_count">{ratings_count}人评价</span>
                    </div>
                </div>
                <div className="summary">
                    简介：
                  {summary}
                </div>
                <div className="casts">
                    <ul>
                        {
                            casts.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <img src={item.avatars.large} alt="" />
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Detail;