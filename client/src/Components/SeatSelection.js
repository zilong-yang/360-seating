import React from 'react';
import SeatTile from './SeatTile'

class SeatSelection extends React.Component {

    render() {
        return (
            <div className="auditorium">
                <div className="seat-tile-container">
                    <div className="screen">
                        <span className="screen-text">screen</span>
                    </div>
                    <div className="seats-layout">

                    </div>
                </div>
                <div className="seats-legend">

                </div>
            </div>
        )
    }
}

export default SeatSelection;