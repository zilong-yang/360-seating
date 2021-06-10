import React from 'react';

const imageUrl = "http://image.tmdb.org/t/p/w300/";

class MovieDisplay extends React.Component {

    render() {
        return (
            <div className="page-info">
                <div className="page-content">
                    <div className="poster-block">
                        <div className="film-poster">
                            <img src={imageUrl + this.props.movie.poster_path} alt={this.props.movie.original_title} />
                        </div>
                        <div className="film-rating">
                            <strong>Movie Rating: </strong>
                            <span>{this.props.movie.vote_average}</span>
                        </div>
                    </div>
                    <div className="text-block">
                        <h2 className="movie-title">
                            {this.props.movie.original_title}
                        </h2>
                        <div className="movie-description">
                            <p>
                                {this.props.movie.overview}
                            </p>
                        </div>
                        <div className="extra-details">
                            <div className="table">
                                <div className="column">
                                    <div className="row">
                                        <strong>Released Date: </strong>
                                        <span>{this.props.movie.release_date}</span>
                                    </div>
                                    <div className="row">
                                        <strong>Runtime: </strong>
                                        <span>{this.props.movie.runtime}</span>
                                        <span> min</span>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="row">
                                        <strong>Production Company: </strong>
                                        <span>{this.props.movie.production_companies[0].name}</span>
                                    </div>
                                    <div className="row">
                                        <strong>Production Country: </strong>
                                        <span>{this.props.movie.production_countries[0].name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDisplay;