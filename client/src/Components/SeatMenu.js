import React, { Component } from 'react';
import SeatViewer from './SeatViewer';

class SeatMenu extends Component {

    constructor(){
        super();

        this.state = {
            isViewerOpen: false
        }
    }

    handleOpenViewer = () => {
        this.setState({
            isViewerOpen: !this.state.isViewerOpen
        })
    }

    render() {
        return (
            <>
                <div className="seatMenuWrapper">
                    <div className="seatMenuTitle">
                        <p>{this.props.seatPosition}</p>
                    </div>
                    <div className="seatMenuButtons">
                        {!this.state.isViewerOpen ? (
                            <>
                                <i onClick={this.handleOpenViewer} className="far fa-eye viewerIcon"></i>
                                <p className="lookAroundText">Look Around!</p>
                            </>
                        ) : (
                            <>
                                <i onClick={this.handleOpenViewer} className="far fa-eye-slash viewerIcon"></i>
                                <p className="lookAroundText">Close Viewer</p>
                            </>
                        )}
                    </div>
                </div>
                {this.state.isViewerOpen ? <SeatViewer imgPath={this.props.seatViewUrl}/> : <></>}
            </>
        );
    }
}

export default SeatMenu;
