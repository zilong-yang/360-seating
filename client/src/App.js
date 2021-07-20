import React, { useState } from 'react';
import MovieBrowser from './Components/MovieBrowser'
import TicketSelection from './Components/TicketSelection'
import Checkout from './Components/Checkout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SeatSelection from "./Components/SeatSelection";

require('dotenv').config()

function App() {

    // order detail
    const [movieName, setMovieName] = useState("");
    const [movieTime, setMovieTime] = useState("");
    const [numAdults, setNumAdults] = useState(0);
    const [numChildren, setNumChildren] = useState(0);
    const [numSeniors, setNumSeniors] = useState(0);
    const [roomNumber, setRoomNumber] = useState(null);
    const [seats, setSeats] = useState([]);
    const [total, setTotal] = useState(0.0);

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact render={(props) => (
                        <MovieBrowser {...props} />
                    )} />
                    <Route path="/tickets/:movieID" exact render={(props) => (
                        <TicketSelection
                            {...props}
                            order={{
                                movieName: movieName,
                                movieTime: movieTime,
                                numAdults: numAdults,
                                numChildren: numChildren,
                                numSeniors: numSeniors,
                                roomNumber: roomNumber,
                            }}
                            setters={{
                                setMovieName: setMovieName,
                                setMovieTime: setMovieTime,
                                setNumAdults: setNumAdults,
                                setNumChildren: setNumChildren,
                                setNumSeniors: setNumSeniors,
                                setRoomNumber: setRoomNumber,
                            }}
                        />
                    )} />
                    <Route path="/seats/:roomNumber" render={(props) => (
                        <SeatSelection
                            {...props}
                            order={{
                                movieName: movieName,
                                movieTime: movieTime,
                                numAdults: numAdults,
                                numChildren: numChildren,
                                numSeniors: numSeniors,
                                roomNumber: roomNumber,
                                seats: seats
                            }}
                            setters={{
                                setSeats: setSeats,
                            }}
                        />
                    )} />
                    <Route path="/checkout" exact render={(props) => (
                        <Checkout
                            {...props}
                            order={{
                                movieName: movieName,
                                movieTime: movieTime,
                                numAdults: numAdults,
                                numChildren: numChildren,
                                numSeniors: numSeniors,
                                roomNumber: roomNumber,
                                seats: seats
                            }}
                            setters={{
                                setTotal: setTotal,
                            }}
                        />
                    )} />
                </Switch>
            </Router>
        </>
    )
}

export default App;
