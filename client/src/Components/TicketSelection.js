import React, { Component } from 'react';
import MovieDisplay from './MovieDisplay'

class TicketSelection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movie_detail: null,
            loading: true
        }
    }

    async componentDidMount() {
        const api_key = process.env.REACT_APP_TMDB_API_KEY
        const movie_id = this.props.match.params.movieID

        const fetch_movie =
            await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en-US`)
        const selected_movie = await fetch_movie.json()
        console.log(selected_movie)

        this.setState(
            {
                movie_detail: selected_movie,
                loading: false
            },

            () => {
                console.log(this.state.movie)
            }
        )
    }

    render() {
        return (
            <div className="ticketSelectionContainter">
                {this.state.loading ?
                    <p>Loading</p> :
                    <MovieDisplay movie={this.state.movie_detail}/> 
                }
            </div>
        );
    }
}

export default TicketSelection;
