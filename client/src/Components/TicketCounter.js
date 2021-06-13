import React, {Component} from 'react';

class TicketCounter extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleIncOnClick = this.handleIncOnClick.bind(this);
        this.handleDecOnClick = this.handleDecOnClick.bind(this);
        this.handleResetOnClick = this.handleResetOnClick.bind(this);
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

    // empty corresponding counter and set order state to 0
    handleResetOnClick(e) {
        this.props.resetFunc(e);
        this.props.setter(0);
    }

    render() {
        return (
            <div className="ticket-btn-group">
                <p>{this.props.ticketType}</p>
                <p>{this.props.ticketCount}</p>
                <button
                    className="ticket-btn"
                    id="ticket-incr"
                    name={this.props.name}
                    onClick={this.handleIncOnClick}
                >
                    +1
                </button>

                <button
                    className="ticket-btn"
                    id="ticket-res"
                    name={this.props.name}
                    onClick={this.handleResetOnClick}
                >
                    Reset
                </button>

                <button
                    className="ticket-btn"
                    id="ticket-decr"
                    name={this.props.name}
                    onClick={this.handleDecOnClick}
                >
                    -1
                </button>
            </div>
        );
    }
}

export default TicketCounter;
