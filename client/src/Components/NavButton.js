import React, { Component } from "react";
import {Link} from "react-router-dom";

class NavButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={this.props.link}>
                    <button>click me</button>
                </Link>
            </div>
        )
    }
}

export default NavButton;
