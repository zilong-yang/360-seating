import React, { Component } from 'react';
import API from '../utils/API';

class TicketSelection extends Component {

    

    async componentDidMount() {
        const res = await API.get('/users/login');
        console.log(res);
    }

    render() {
        return (
            <div>
                TICKET SELECTION
            </div>
        );
    }
}

export default TicketSelection;
