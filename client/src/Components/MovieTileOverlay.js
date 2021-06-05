import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieTileOverlay extends Component {

    render() {
        return (
            <>
                {/* <button onClick={this.handleGetTickets} id="buyBtn" className="buyTicketsBtn">Get Tickets</button> */}
                <Link to={`/tickets/${this.props.movieID}`} className="buyTicketsBtn">Get Tickets</Link>
                <div className="movieTileOverlay"></div>
            </>
        );
    }
}

export default MovieTileOverlay;
