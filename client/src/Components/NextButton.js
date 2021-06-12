import React, { Component } from "react";
import { Link } from "react-router-dom";

class BackButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-button-container next-button-container">
                <Link to={this.props.link}>
                    <i className="fas fa-arrow-circle-right fa-3x nav-button next-button">
                    </i>
                </Link>
            </div>
        )
    }
}

export default BackButton;
