import {useState, useEffect} from "react";
import BackButton from "./BackButton";

const OrderSummary = (props) => {

    const [order, ] = useState(props.order);

    useEffect(() => {
        console.log(order);
    });

    return (
        <>
            <h1>Order Summary Page</h1>

            <div className={'summary'}>
                <p>Movie: {order.movieName}</p>
                <p>Time: {order.movieTime}</p>
                <p>Room {order.roomNumber}</p>
                <p>{order.numAdults + order.numChildren + order.numSeniors} Tickets</p>
                <p>Seats: {order.seats.toString()}</p>
                <p>Order Total: {order.total}</p>
            </div>

            <BackButton />
        </>
    )
}

export default OrderSummary;
