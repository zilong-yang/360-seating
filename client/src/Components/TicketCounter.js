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
        const isZero = this.props.ticketCount === 0;

        return (
            <div className="ticket-btn-grp">
                {isZero ? (
                    <i
                        className="fas fa-minus-circle fa-2x dummy-btn"
                    >
                    </i>
                ) : (
                    <i
                        className="fas fa-minus-circle fa-2x ticket-btn"
                        id={this.props.name}
                        onClick={this.handleDecOnClick}
                    >
                    </i>
                )
                }

                <div className="ticket-btn-msg">
                    <h2 className="ticket-type">{this.props.ticketType}</h2>
                    <p>{this.props.ticketCount}</p>
                </div>

                <i
                    className="fas fa-plus-circle fa-2x ticket-btn"
                    id={this.props.name}
                    onClick={this.handleIncOnClick}
                >
                </i>
            </div>
        );
    }
}

export default TicketCounter;
