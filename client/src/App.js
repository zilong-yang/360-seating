import React, {useState} from 'react';
import MovieBrowser from './Components/MovieBrowser'
import TicketSelection from './Components/TicketSelection'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

require('dotenv').config()

function App(props) {

    const [movieName, setMovieName] = useState("");
    const [movieTime, setMovieTime] = useState("");
    const [numAdults, setNumAdults] = useState(0);
    const [numChildren, setNumChildren] = useState(0);
    const [numSeniors, setNumSeniors] = useState(0);
    const [seats, setSeats] = useState([]);
    const [total, setTotal] = useState(0.0);

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact render={(props) => (
                        <MovieBrowser {...props} setters={[setMovieName]}/>
                    )}/>
                    <Route path="/tickets/:movieID" exact render={(props) => (
                        <TicketSelection {...props}
                            setters={[setMovieTime, setNumAdults, setNumChildren, setNumSeniors]} />
                    )}/>
                </Switch>
            </Router>
        </>
    )
}

export default App;
