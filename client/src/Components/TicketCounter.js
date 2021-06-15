import React, { Component } from 'react';

class TicketCounter extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleIncOnClick = this.handleIncOnClick.bind(this);
        this.handleDecOnClick = this.handleDecOnClick.bind(this);
    }

    // increment corresponding counter and set order state to new value
    handleIncOnClick(e) {
        let n = this.props.incrementFunc(e);
        this.props.setter(n);
    }

    // decrement corresponding counter and set order state to new value
    handleDecOnClick(e) {
        let n = this.props.decrementFunc(e);
        this.props.setter(n);
    }

    render() {
        return (
            <div className="ticket-btn-grp">
                <div className="ticket-btn">
                    <i
                        className="fas fa-minus-circle"
                        name={this.props.name}
                        onClick={this.handleDecOnClick}
                    >
                    </i>
                </div>

                <div className="ticket-btn-msg">
                    <h2 className="ticket-type">{this.props.ticketType}</h2>
                    <p>{this.props.ticketCount}</p>
                </div>

                <div className="ticket-btn">
                    <i
                        className="fas fa-plus-circle"
                        name={this.props.name}
                        onClick={this.handleIncOnClick}
                    >
                    </i>
                </div>
            </div>
        );
    }
}

export default TicketCounter;
