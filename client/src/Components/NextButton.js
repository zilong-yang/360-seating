import React from "react";
import {useHistory} from "react-router-dom";

function NextButton(props) {

    const history = useHistory();

    const changeRoute = () => {
        history.push(props.link);
    }

    return (
        <div className="nav-button-container next-button-container">
            <i
                className="fas fa-arrow-circle-right fa-3x nav-button next-button"
                onClick={changeRoute}
            >
            </i>
        </div>
    )
}

export default NextButton;