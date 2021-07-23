import {useState, useEffect} from "react";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import OrdersDataService from "../services/Orders";

const OrderSummary = (props) => {

    const [order, ] = useState(props.order);
    const [user, ] = useState(props.user);

    useEffect(() => {
        // console.log(order);
        // console.log(user);
    });

    const confirmOrder = async () => {
        await OrdersDataService.addOrder(order, user);
    }

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
                    <p>Seats: {order.seats.sort().reduce((s, seat) => s.concat(seat).concat(" "), "")}</p>
                    <p>Order Total: {order.total}</p>

                    <br />

                    <p>Name: {`${user.fname} ${user.lname}`}</p>
                    <p>Email: {`${user.email}`}</p>
                    <p>Phone: {`${user.phone}`}</p>
                    <p>Card: {`•••• •••• •••• ${user.ccnum ? 
                        user.ccnum.substring(user.ccnum.length - 4) : null}`}</p>
                </div>
            </div>

                <BackButton />
                <NextButton name={'Confirm'} action={confirmOrder} />
        </>
    )
}

export default OrderSummary;
