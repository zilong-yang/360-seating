import React from 'react';

const imageUrl = "http://image.tmdb.org/t/p/w300/";

class MovieDisplay extends React.Component{
    render() {
        return(
            <div className="movieDisplay">
                <img className="moviePoster" src={imageUrl + this.props.movie.poster_path} alt="movie poster"/>
                <p>{this.props.movie.original_title}</p>
                <p>{this.props.movie.overview}</p>
                <p>{this.props.movie.vote_average}</p>
            </div>
        )
    }
}

export default MovieDisplay;