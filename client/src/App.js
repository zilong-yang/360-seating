import React, {useEffect, useState} from 'react';
import MovieBrowser from './Components/MovieBrowser'
import TicketSelection from './Components/TicketSelection'
import Checkout from './Components/Checkout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SeatSelection from "./Components/SeatSelection";
import OrderSummary from "./Components/OrderSummary";

require('dotenv').config()

// custom hook for a state that syncs with browser's local storage
const useStorageState = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
        const storedValue = window.localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

function App() {

    const [movieID, setMovieID] = useStorageState(0, 'movieID');

    // order detail
    const [movieName, setMovieName] = useStorageState('', 'movieName');
    const [movieTime, setMovieTime] = useStorageState('', 'movieTime');
    const [numAdults, setNumAdults] = useStorageState(0, 'numAdults');
    const [numChildren, setNumChildren] = useStorageState(0, 'numChildren');
    const [numSeniors, setNumSeniors] = useStorageState(0, 'numSeniors');
    const [roomNumber, setRoomNumber] = useStorageState(0, 'roomNumber');
    const [seats, setSeats] = useStorageState([], 'seats');
    const [total, setTotal] = useStorageState(0, 'total');

    // user info
    const [user, setUser] = useStorageState({}, 'user');

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
                                movieID: movieID,
                                movieName: movieName,
                                movieTime: movieTime,
                                numAdults: numAdults,
                                numChildren: numChildren,
                                numSeniors: numSeniors,
                                roomNumber: roomNumber,
                            }}
                            setters={{
                                setMovieID: setMovieID,
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
                                movieID: movieID,
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
                                movieID: movieID,
                                movieName: movieName,
                                movieTime: movieTime,
                                numAdults: numAdults,
                                numChildren: numChildren,
                                numSeniors: numSeniors,
                                roomNumber: roomNumber,
                                seats: seats,
                                total: total
                            }}
                            user={user}
                            setters={{
                                setTotal: setTotal,
                                setUser: setUser,
                            }}
                        />
                    )} />
                    )}/>
                    <Route path="/order-summary" render={(props) => (
                        <OrderSummary
                            {...props}
                            order={{
                                movieID: movieID,
                                movieName: movieName,
                                movieTime: movieTime,
                                numAdults: numAdults,
                                numChildren: numChildren,
                                numSeniors: numSeniors,
                                roomNumber: roomNumber,
                                seats: seats,
                                total: total,
                            }}
                            user={user}
                        />
                    )}/>
                </Switch>
            </Router>
        </>
    )
}

export default App;
