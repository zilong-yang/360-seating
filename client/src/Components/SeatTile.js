import React from 'react';
import SeatMenu from './SeatMenu';

class SeatTile extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelectedSeat = this.handleSelectedSeat.bind(this);
        this.setClassName = this.setClassName(this);
    }

    handleSelectedSeat(e) {
        let n = this.props.selectFunc(e);
        this.props.setter(n);
    }

    setClassName() {
        let names = "";

        if (!this.props.isAvailable) {
            names = "seat unavailable";
        } else if (this.props.isHandicapped) {
            names = "seat handicapped";
        } else {
            names = "seat"
        }

        return names;
    }

    handleOpenSeatMenu = () => {
        
    }

    render() {
        const isHandi = this.props.isHandicapped === true;

        return (
            <div className="seatTile">
                <div
                    className={this.setClassName}
                    onClick={this.handleSelectedSeat}
                    data-pos={this.props.position}
                    data-img={this.props.seatImg}
                >
                    <p className="seatPosition">{this.props.position}</p>
                    {isHandi ? (<i className="fas fa-wheelchair fa-2x handicapped" id={this.props.position}></i>) : (<></>)}
                </div>
            </div>
        )
    }
}

export default SeatTile;
