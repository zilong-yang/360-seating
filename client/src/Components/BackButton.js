import React from "react";
import {useHistory} from "react-router-dom";


function BackButton(props) {

    const history = useHistory();

    const changeRoute = () => {
        history.push(props.link);
    }

    return (
        <div className="nav-button-container back-button-container">
            <i
                className="fas fa-arrow-circle-left fa-3x nav-button back-button"
                onClick={changeRoute}
            >
            </i>
        </div>
    )
}

export default BackButton;
