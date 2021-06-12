import React, {Component} from 'react';
import MovieDisplay from './MovieDisplay';
import TicketCounter from './TicketCounter';
import MoviesDataService from '../services/Movies';
import BackButton from "./BackButton";
import NextButton from "./NextButton";

class TicketSelection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movie_detail: null,
            loading: true,
            numOfChildTickets: 0,
            numOfAdultTickets: 0,
            numOfSeniorTickets: 0
        }
    }

    handleIncrement = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: this.state[e.target.name] + 1
        })
    }

    handleDecrement = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: this.state[e.target.name] - 1
        })
    }

    handleReset = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: 0
        })
    }

    async componentDidMount() {
        const movie_id = this.props.match.params.movieID
        const selected_movie = await MoviesDataService.fetchMovie(movie_id);
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

        this.props.setters.setMovieName(this.state.movie_detail.original_title);
    }

    render() {
        return (
            <div className="ticketSelectionContainter">
                {this.state.loading ?
                    <p>Loading</p> :
                    <>
                        <MovieDisplay movie={this.state.movie_detail}/>
                        <div className="row">
                            <div className="ticket-container">
                                <TicketCounter
                                    decrementFunc={this.handleDecrement}
                                    resetFunc={this.handleReset}
                                    incrementFunc={this.handleIncrement}
                                    name={"numOfChildTickets"}
                                    ticketCount={this.state.numOfChildTickets}
                                    ticketType={"Child"}
                                />
                                <TicketCounter
                                    decrementFunc={this.handleDecrement}
                                    resetFunc={this.handleReset}
                                    incrementFunc={this.handleIncrement}
                                    name={"numOfAdultTickets"}
                                    ticketCount={this.state.numOfAdultTickets}
                                    ticketType={"Adult"}
                                />
                                <TicketCounter
                                    decrementFunc={this.handleDecrement}
                                    resetFunc={this.handleReset}
                                    incrementFunc={this.handleIncrement}
                                    name={"numOfSeniorTickets"}
                                    ticketCount={this.state.numOfSeniorTickets}
                                    ticketType={"Senior"}
                                />
                            </div>
                        </div>

                        <BackButton link="/"/>
                        <NextButton />  {/* TODO: add `link` prop once next page is created */}
                    </>
                }
            </div>
        );
    }
}

export default TicketSelection;
