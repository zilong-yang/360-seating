import React from 'react';
import SeatTile from './SeatTile'
import BackButton from "./BackButton";
import NextButton from "./NextButton";

class SeatSelection extends React.Component {

    render() {
        return (
            <div className="auditorium">

                <div className="seat-tile-container">

                    <div className="screen"></div>

                    <div className="seats-layout">
                        <div className="seat-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>

                        <div className="seat-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>

                        <div className="seat-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>

                        <div className="seat-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>

                        <div className="seat-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>

                        <div className="seat-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>

                        <div className="seat-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>

                        <div className="seat-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>

                        <div className="seat-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>

                        <p className="auditori-msg">Back of Theater</p>
                        
                        <ul class="seats-legend">
                            <li>
                                <div class="seat"></div>
                                <span>Available</span>
                            </li>
                            <li>
                                <div class="seat selected"></div>
                                <span>Selected</span>
                            </li>
                            <li>
                                <div class="seat wheel"></div>
                                <span>Wheelchair Accessible</span>
                            </li>
                            <li>
                                <div class="seat unavailable"></div>
                                <span>Unavailable</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <BackButton />
                <NextButton />
            </div>
        )
    }
}

export default SeatSelection;