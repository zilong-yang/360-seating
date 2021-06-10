import React, { Component } from 'react';

class TicketCounter extends Component {
    render() {
        return (
            <div style={{ color: "white" }}>
                <p>{this.props.ticketType}</p>
                <button name={this.props.name} onClick={this.props.decrementFunc}>-</button>
                <p>{this.props.ticketCount}</p>
                <button name={this.props.name} onClick={this.props.incrementFunc}>+</button>
            </div>
        );
    }
}

export default TicketCounter;
