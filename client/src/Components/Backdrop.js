import React, {useEffect, useState} from "react";
import MovieDataService from '../services/Movies';

const imageUrl = "http://image.tmdb.org/t/p/w500/";

const Backdrop = (props) => {

    const [posterPath, setPosterPath] = useState('');

    useEffect(async () => {
        const movie = await MovieDataService.fetchMovie(props.movieID > 0 ? props.movieID : 497698);
        setPosterPath(movie.poster_path);
    });

    return (
        <div className='movie-poster-container'>
            <img
                id="movie-poster"
                src={imageUrl + posterPath}
                alt='movie poster'
            />
        </div>
    );
};

export default Backdrop;
