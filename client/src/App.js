import React from 'react';
import MovieBrowser from './Components/MovieBrowser'
import TicketSelection from './Components/TicketSelection'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

require('dotenv').config()

class App extends React.Component {

    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={MovieBrowser}/>
                        <Route path="/tickets/:movieID" exact component={TicketSelection}/>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App;
