import React from 'react';

const imageUrl = "http://image.tmdb.org/t/p/w500/";

class MovieDisplay extends React.Component {

    render() {
        return (
            <section className="content">
                <div className="movie-info">
                    <div className="row">
                        <div className="col">
                            <img className="movie-poster" src={imageUrl + this.props.movie.poster_path} alt={this.props.movie.original_title} />
                        </div>
                        <div className="col">
                            <h1 className="movie-title">
                                {this.props.movie.original_title}
                            </h1>
                            <div className="reiview-rating-block">
                                <strong>Movie Rating: </strong>
                                <span>{this.props.movie.vote_average}</span>
                            </div>
                            <p className="movie-overview">
                                {this.props.movie.overview}
                            </p>
                            <div className="extra-details">
                                <p>
                                    <strong>Released Date: </strong>
                                    <span>{this.props.movie.release_date}</span>
                                </p>
                                <p>
                                    <strong>Runtime: </strong>
                                    <span>{this.props.movie.runtime}</span>
                                    <span> min</span>
                                </p>
                                <p>
                                    <strong>Production Company: </strong>
                                    <span>{this.props.movie.production_companies[0].name}</span>
                                </p>
                                <p>
                                    <strong>Production Country: </strong>
                                    <span>{this.props.movie.production_countries[0].name}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MovieDisplay;
