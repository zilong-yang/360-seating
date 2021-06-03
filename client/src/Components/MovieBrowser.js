import React from 'react'

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
        const api_key = process.env.REACT_APP_TMDB_API_KEY

        const fetch_movies =
            await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`)
        const movies = await fetch_movies.json()
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
        return (
            // return is HTML, using {} would allow JS
            // <div> should wrap the return values (there is only a single element)
            <div>
                {this.state.loading ?
                    <p>Loading</p> :
                    <p>Finished</p>}
            </div>
        )
    }
}

export default MovieBrowser