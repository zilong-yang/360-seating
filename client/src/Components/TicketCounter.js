import React, { Component } from 'react';

class TicketCounter extends Component {
    render() {
        return (
            <div className="ticket-btn-group">
                <p>{this.props.ticketType}</p>
                <p>{this.props.ticketCount}</p>
                <button className="ticket-btn" id="ticket-incr" name={this.props.name} onClick={this.props.incrementFunc}>+1</button>
                <button className="ticket-btn" id="ticket-res" name={this.props.name} onClick={this.props.resetFunc}>Reset</button>
                <button className="ticket-btn" id="ticket-decr" name={this.props.name} onClick={this.props.decrementFunc}>-1</button>
            </div>
        );
    }
}

export default TicketCounter;
