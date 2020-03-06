import React from 'react';
import '../css/blog.css';
import axios from 'axios';
// import API from "../utils/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactHtmlParser from 'react-html-parser';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }
    getData() {
        axios
            .get(`https://loibq.info/wp-json/wp/v2/posts/?per_page=6`)
            .then(res => {
                const articles = res.data;
                this.setState({articles})
            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getData()
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
          };
        return (
            <section id="blog">
                <div className="container">
                    <div className="title">
                        <h2>Blog</h2>
                    </div>
                    <div className="content">
                        <div className="carousel-blog">
                            <Slider {...settings}>
                                {this.state.articles.map( (article, index) => 
                                    <div className="article" key={index} >
                                        <div className="entry">
                                            <div className="article-media">
                                                <a href={article.link}>
                                                    <img src={article.jetpack_featured_media_url} alt=""/>
                                                </a>
                                            </div>
                                            <div className="article-body">
                                                <span className="article-date">{article.date}</span>
                                                <h3>
                                                    <a href={article.link}>
                                                    {ReactHtmlParser(article.title.rendered)}
                                                    </a>
                                                </h3>
                                                {ReactHtmlParser(article.excerpt.rendered)}
                                                <div className="article-read-more">
                                                    <a href={article.link}>READ MORE</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog; 