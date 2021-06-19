import React from 'react';
import SeatTile from './SeatTile'
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import TheatersDataService from '../services/Theaters';

class SeatSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            curSeat: [],
            seats: []
        }
    }

    updateSelectedSeats = (seatPos) => {
        if (!this.state.seats.includes(seatPos)) {
            this.state.seats.push(seatPos);
        } else {
            let index = this.state.seats.indexOf(seatPos);
            if (index !== -1) {
                this.state.seats.splice(index, 1)
            }
        }

        console.log(this.state.seats)
    }

    handleSelectedSeat = (e) => {
        e.preventDefault();

        let seatPos = e.target.id;

        if (e.currentTarget.classList.contains("seat") && !e.currentTarget.classList.contains("unavailable")) {
            e.currentTarget.classList.toggle("selected");

            this.updateSelectedSeats(seatPos);
        }
    }

    componentDidMount() {
        TheatersDataService.getSeatAvailablity(this.props.match.params.roomNumber)
            .then(res => {
                this.setState({
                    loading: false,
                    curSeat: res.data.room.seats
                }, () => {
                    console.log(this.state.curSeat)
                })
            }).catch(e => console.log(e.target.id));
    }

    render() {
        const seatMap = this.state.curSeat.map(seat => {
            return (
                <SeatTile
                    isAvailable={seat.isAvailable}
                    isHandicapped={seat.isHandicapped}
                    position={seat.position}
                    selectFunc={this.handleSelectedSeat}
                    setter={this.props.setters.setSeats}
                />
            )

        })
        return (
            <div className="auditorium">
                {this.state.loading ?
                    <p>Loading</p> :
                    <>
                        <div className="seat-tile-container">
                            <div className="screen"></div>

                            <div className="layout">
                                <div className="seat-row">
                                    {seatMap}
                                </div>
                            </div>

                            <p className="auditori-msg">Back of Theater</p>

                            <ul className="seats-legend" >
                                <li>
                                    <div className="seat available"></div>
                                    <span>Available</span>
                                </li>
                                <li>
                                    <div className="seat selected"></div>
                                    <span>Selected</span>
                                </li>
                                <li>
                                    <div className="seat handicapped"></div>
                                    <span>Wheelchair Accessible</span>
                                </li>
                                <li>
                                    <div className="seat unavailable"></div>
                                    <span>Unavailable</span>
                                </li>
                            </ul>
                        </div>

                        <BackButton />
                        <NextButton />
                    </>
                }
            </div>
        )
    }
}

export default SeatSelection;
