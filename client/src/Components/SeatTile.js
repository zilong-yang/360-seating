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
        const isHandi = this.props.isHandicapped === true;

        return (
            <div className="seatTile">
                <div
                    className={this.setClassName}
                    onClick={this.handleSelectedSeat}
                    id={this.props.position}
                >
                    {isHandi ? (<i className="fas fa-wheelchair fa-2x handicapped" id={this.props.position}></i>) : (<></>)}
                </div>
            </div>
        )
    }
}

export default SeatTile;
