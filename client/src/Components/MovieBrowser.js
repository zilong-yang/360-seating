import React from 'react';
import MovieTile from './MovieTile';
import MoviesDataService from '../services/Movies'

class MovieBrowser extends React.Component {
    constructor(props) {
        super(props)

        // Waiting for API to return
        this.state = {
            movies: [],
            loading: true
        }
    }

    // Performing API Call
    async componentDidMount() {
        const movies = await MoviesDataService.fetchNowPlaying();
        console.log(movies)

        this.setState(
            {
                movies: this.state.movies.concat(movies.results),
                loading: false
            },

            () => {
                console.log(this.state.movies)
            }
        )
    }

    render() {

        const movieList = this.state.movies.map((movie, index) => {
            return <MovieTile movie={movie} key={index}/>
        });

        return (
            // return is HTML, using {} would allow JS
            // <div> should wrap the return values (there is only a single element)
            // <p>Fisherman's Cinema</p>
            <>
                <p className="title">Fisherman's Cinema</p>
                <div className="movieBrowserContainer">
                    {this.state.loading ?
                        <p>Loading</p> :
                        movieList}
                </div>
            </>
        )
    }
}

export default MovieBrowser