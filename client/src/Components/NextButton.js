import React from "react";
import {useHistory} from "react-router-dom";

function NextButton(props) {

    const history = useHistory();

    const changeRoute = () => {
        if (props.link) {
            history.push(props.link);
        }
    }

    const fireOnClick = async () => {
        if (props.action) {
            await props.action();
        }

        changeRoute();
    }

    return (
        <div className="nav-button-container next-button-container">
            <i
                className="fas fa-arrow-circle-right fa-3x nav-button next-button"
                onClick={fireOnClick}
            >
            </i>
            <div className='name'>{props.name ? props.name : <>Next</>}</div>
        </div>
    )
}

export default NextButton;
