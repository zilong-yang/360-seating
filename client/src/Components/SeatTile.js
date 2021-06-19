import React from 'react';

class SeatTile extends React.Component {
    constructor(props, context){
        super(props, context);

        this.handleSelectedSeat = this.handleSelectedSeat.bind(this);
    }

    handleSelectedSeat(e) {
        let n = this.props.selectFunc(e);
        this.props.setter(n);
    }

    render() {
        return (
            <div className="seatTile">
                <div
                    className={"seat"}
                    onClick={this.handleSelectedSeat}
                    id={this.props.position}
                >
                </div>
            </div>
        )
    }
}

export default SeatTile;
