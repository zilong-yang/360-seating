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

        if (e.currentTarget.classList.contains("seat") &&
            !e.currentTarget.classList.contains("unavailable")) {

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
        const seatMap = this.state.curSeat.map((seat, index) => {
            return (
                <SeatTile
                    key={index}
                    isAvailable={seat.isAvailable}
                    isHandicapped={seat.isHandicapped}
                    position={seat.position}
                    selectFunc={this.handleSelectedSeat}
                    setter={this.props.setters.setSeats}
                />
            )

        })

        function getRow(letter) {
            let rowSeat = [];

            seatMap.forEach(s => {
                if (s.props.position.charAt(0) === letter) {
                     rowSeat.push(s);
                }
            });

            return rowSeat;
        }

        return (
            <div className="auditorium">
                {this.state.loading ?
                    <p>Loading</p> :
                    <>
                        <div className="seat-tile-container">
                            <div className="screen"></div>

                            <div className="layout">
                                <div className="seat-row">
                                    {getRow('A')}
                                </div>
                                <div className="seat-row">
                                    {getRow('B')}
                                </div>
                                <div className="seat-row">
                                    {getRow('C')}
                                </div>
                                <div className="seat-row">
                                    {getRow('D')}
                                </div>
                                <div className="seat-row">
                                    {getRow('E')}
                                </div>
                                <div className="seat-row">
                                    {getRow('F')}
                                </div>
                                <div className="seat-row">
                                    {getRow('G')}
                                </div>
                                <div className="seat-row">
                                    {getRow('H')}
                                </div>
                                <div className="seat-row">
                                    {getRow('I')}
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
                                    <i
                                        className="fas fa-wheelchair fa-2x handicapped">
                                    </i>
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
