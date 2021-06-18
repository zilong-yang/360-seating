import React from 'react';
import SeatTile from './SeatTile'
import BackButton from "./BackButton";
import NextButton from "./NextButton";

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

                <BackButton />
                <NextButton />
            </div>
        )
    }
}

export default SeatSelection;