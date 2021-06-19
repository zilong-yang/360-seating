import React from 'react';
import SeatTile from './SeatTile'
import BackButton from "./BackButton";
import NextButton from "./NextButton";

class SeatSelection extends React.Component {
    handleSelectSeat(e) {
        if (e.currentTarget.classList.contains("seat") && !e.currentTarget.classList.contains("unavailable")) {
            e.currentTarget.classList.toggle("selected");
        }
    }

    render() {
        return (
            <div className="auditorium">

                <div className="seat-tile-container">

                    <div className="screen"></div>

                    <div className="layout">
                        <div className="seat-row">
                            <div className={"seat"} onClick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                        </div>

                        <div className="seat-row">
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                        </div>

                        <div className="seat-row">
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                        </div>

                        <div className="seat-row">
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                        </div>

                        <div className="seat-row">
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                        </div>

                        <div className="seat-row">
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                        </div>

                        <div className="seat-row">
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                        </div>

                        <div className="seat-row">
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                        </div>

                        <div className="seat-row">
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
                            <div className={"seat"} onclick={this.handleSelectSeat}></div>
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