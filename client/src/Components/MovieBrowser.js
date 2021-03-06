import React from 'react';
import MovieTile from './MovieTile';
import MoviesDataService from '../services/Movies'
import TheatersDataService from "../services/Theaters";
import logo from "../images/fishermanLogo.png"

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
        // clear local storage (previously saved data)
        window.localStorage.clear();
        this.props.resetStates();

        const movies = await MoviesDataService.fetchNowPlaying();

        this.setState({
            movies: this.state.movies.concat(movies.results),
            loading: false
        })

        // map movies to different auditoriums (rooms)
        TheatersDataService.mapAuditoriums()
            .then(res => {
                console.log(res.data.msg);
            })
            .catch(e => console.log("Unable to map auditoriums\n" + e));
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
                <div className="homePageHeader">
                    <img className="logo_img" src={logo}/>
                    <p className="title">Fisherman's Cinema</p>
                </div>
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