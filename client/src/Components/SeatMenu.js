import React, { Component } from 'react';

class SeatMenu extends Component {

    handleOpenViewer = () => {
        
    }

    render() {
        return (
            <div className="seatMenuWrapper">
                <div className="seatMenuTitle">
                    <p>{this.props.seatPosition}</p>
                </div>
                <div className="seatMenuButtons">
                    <i onClick={this.handleOpenViewer} class="far fa-eye"></i>
                    <p className="lookAroundText">Look Around!</p>
                </div>
            </div>
        );
    }
}

export default SeatMenu;
