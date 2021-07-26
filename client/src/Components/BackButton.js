import React from "react";
import {useHistory} from "react-router-dom";


function BackButton(props) {

    const history = useHistory();

    const changeRoute = () => {
        history.push(props.link);
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className="nav-button-container back-button-container">
            <i
                className="fas fa-arrow-circle-left fa-3x nav-button back-button"
                onClick={props.link ? changeRoute : goBack}
            >
            </i>
            <div className='name'>{props.name ? props.name : <>Back</>}</div>
        </div>
    )
}

export default BackButton;
