import React, { Component } from 'react';

class SeatMenu extends Component {

    render() {
        return (
            <div className="seatMenuWrapper">
                <div className="seatMenuTitle">
                    <p>{this.props.seatPosition}</p>
                </div>
                <div className="seatMenuButtons">
                    <i class="far fa-eye"></i>
                </div>
            </div>
        );
    }
}

export default SeatMenu;
