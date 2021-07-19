import {useState, useEffect} from "react";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

const OrderSummary = (props) => {

    const [order, ] = useState(props.order);

    useEffect(() => {
        console.log(order);
    });

    return (
        <>
            <div className='summary-container'>
                <div className='page-name-container'>
                    <h1 id='page-name'>Order Summary</h1>
                    <hr width='90%' />
                </div>

                <div className='summary'>
                    <p>Movie: {order.movieName}</p>
                    <p>Time: {order.movieTime}</p>
                    <p>Room {order.roomNumber}</p>
                    <p>{order.numAdults + order.numChildren + order.numSeniors} Tickets</p>
                    <p>Seats: {order.seats}</p>
                    <p>Order Total: {order.total}</p>

                    <br />

                    {/*TODO: fill in with information from checkout page*/}
                    <p>Name: {"John Doe"}</p>
                    <p>Email: {"john.doe@gmail.com"}</p>
                    <p>Phone: {"123-456-7890"}</p>
                    <p>Card: {"•••• •••• •••• 1234"}</p>
                </div>
            </div>

                <BackButton />
                <NextButton name={'Confirm'} />
        </>
    )
}

export default OrderSummary;
