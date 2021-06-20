import React from 'react';

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

    render() {
        return (
            <div className="seatTile">
                <div
                    className={this.setClassName}
                    onClick={this.handleSelectedSeat}
                    id={this.props.position}
                >
                </div>
            </div>
        )
    }
}

export default SeatTile;
