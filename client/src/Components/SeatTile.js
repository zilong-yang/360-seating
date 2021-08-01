import React from 'react';
import SeatMenu from './SeatMenu';

class SeatTile extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelectedSeat = this.handleSelectedSeat.bind(this);
        this.setClassName = this.setClassName(this);

        this.state = {
            isMenuOpen: false
        }
    }

    handleSelectedSeat(e) {
        let n = this.props.selectFunc(e);
        this.handleOpenSeatMenu();
    }

    setClassName() {
        let names = "seat";

        if (!this.props.isAvailable) {
            names += " unavailable";
        } else if (this.props.isSelected) {
            names += " selected"
        }

        if (this.props.isHandicapped) {
            names += " handicapped";
        }

        return names;
    }

    handleOpenSeatMenu = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        })
    }

    render() {
        const isHandi = this.props.isHandicapped === true;

        return (
            <>
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
                {this.state.isMenuOpen ? <SeatMenu seatPosition={this.props.position} seatViewUrl={this.props.seatImg} /> : <></>}
            </>
        )
    }
}

export default SeatTile;
