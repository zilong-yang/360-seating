import React, {useEffect, useState} from "react";
import MovieDataService from '../services/Movies';

const imageUrl = "http://image.tmdb.org/t/p/w500/";

const Backdrop = (props) => {

    const [posterPath, setPosterPath] = useState('');

    useEffect(async () => {
        const movie = await MovieDataService.fetchMovie(497698);
        setPosterPath(movie.poster_path);
    });

    return (
        <img
            className="movie-poster"
            src={imageUrl + posterPath}
            alt='movie poster'
        />
    );
};

export default Backdrop;
