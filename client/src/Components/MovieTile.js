import React from 'react';
import MovieTileOverlay from './MovieTileOverlay'

const imageUrl = "http://image.tmdb.org/t/p/w300/";

class MovieTile extends React.Component{
    render() {
        return(
            <div className="movieTile">
                <div className="movieImageContainer">
                    <MovieTileOverlay movieID={this.props.movie.id}/>
                    <img className="moviePoster" src={imageUrl + this.props.movie.poster_path} alt="movie poster"/>
                </div>
                <p>{this.props.movie.original_title}</p>
                <p>Rating: {this.props.movie.vote_average}</p>
            </div>
        )
    }
}

export default MovieTile;