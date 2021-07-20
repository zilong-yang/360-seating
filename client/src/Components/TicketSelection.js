import React, { Component } from 'react';
import MovieDisplay from './MovieDisplay';
import TicketCounter from './TicketCounter';
import MoviesDataService from '../services/Movies';
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import TheatersDataService from '../services/Theaters';

class TicketSelection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movie_detail: null,
            loading: true,
            numOfChildTickets: 0,
            numOfAdultTickets: 0,
            numOfSeniorTickets: 0,
            roomNumber: 0,
        }
    }

    handleIncrement = (e) => {
        e.preventDefault();
        let inc = this.state[e.target.id] + 1;
        this.setState({
            [e.target.id]: inc
        });
        
        return inc;
    }

    handleDecrement = (e) => {
        e.preventDefault();
        let dec = this.state[e.target.id] - 1
        this.setState({
            [e.target.id]: dec
        });
        return dec;
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
        // console.log(selected_movie)

        this.setState(
            {
                movie_detail: selected_movie,
                loading: false
            },

            // () => {
            //     console.log(this.state.movie_detail);
            // }
        )

        this.props.setters.setMovieName(this.state.movie_detail.original_title);

        TheatersDataService.getRoomByMovieName(this.state.movie_detail.original_title)
            .then(res => {
                // console.log(res.data);
                let roomNumber = res.data.roomNumber;
                this.setState({ roomNumber: roomNumber });
                this.props.setters.setRoomNumber(roomNumber);

            }).catch(e => console.log(e));
    }

    render() {
        return (
            <div className="ticketSelectionContainter">
                {this.state.loading ?
                    <p>Loading</p> :
                    <>
                        <MovieDisplay movie={this.state.movie_detail} />
                        <div className="row">
                            <div className="ticket-container">
                                <TicketCounter
                                    decrementFunc={this.handleDecrement}
                                    resetFunc={this.handleReset}
                                    incrementFunc={this.handleIncrement}
                                    name={"numOfChildTickets"}
                                    ticketCount={this.props.order.numChildren}
                                    ticketType={"Child"}
                                    setter={this.props.setters.setNumChildren}
                                />
                                <TicketCounter
                                    decrementFunc={this.handleDecrement}
                                    resetFunc={this.handleReset}
                                    incrementFunc={this.handleIncrement}
                                    name={"numOfAdultTickets"}
                                    ticketCount={this.props.order.numAdults}
                                    ticketType={"Adult"}
                                    setter={this.props.setters.setNumAdults}
                                />
                                <TicketCounter
                                    decrementFunc={this.handleDecrement}
                                    resetFunc={this.handleReset}
                                    incrementFunc={this.handleIncrement}
                                    name={"numOfSeniorTickets"}
                                    ticketCount={this.props.order.numSeniors}
                                    ticketType={"Senior"}
                                    setter={this.props.setters.setNumSeniors}
                                />
                            </div>
                        </div>

                        <BackButton />
                        <NextButton link={`/seats/${this.state.roomNumber}`} />
                    </>
                }
            </div>
        );
    }
}

export default TicketSelection;
