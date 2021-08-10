import {useState, useEffect} from "react";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import OrdersDataService from "../services/Orders";
import TheaterDataService from "../services/Theaters";
import Backdrop from "./Backdrop";

const OrderSummary = (props) => {

    const [order, ] = useState(props.order);
    const [orderID, setOrderID] = useState('');
    const [user, ] = useState(props.user);
    const [finished, setFinished] = useState(false);

    useEffect(async () => {
        let res = await OrdersDataService.getOrders();
        console.log(res.data.orders);
    });

    const confirmOrder = async () => {
        let res = await OrdersDataService.addOrder(order, user);

        await setSeats(order);

        setFinished(true);

        let orderID = res.data.response.insertedId;
        setOrderID(orderID);
    }

    async function setSeats(order){
        await Promise.all(order.seats.map(async (seat) => {
            const res = await TheaterDataService.setSeatAvailability(order.roomNumber, seat);
            console.log(res)
        }));
    }

    return (
        <>
            <Backdrop movieID={props.order.movieID} />

            <div className='summary-container'>
                <div className='page-name-container'>
                    <h1 id='page-name'>Order Summary</h1>
                    <hr width='90%' />
                </div>

                <div className='summary'>
                    <p>Movie: {order.movieName}</p>
                    <p>Time: 6:00 PM</p>
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

            
            {
                finished ?
                    <>
                        <div className='thank-you-container'>
                            <p>Your order has been placed</p>
                            <p>Order ID: {orderID}</p>
                            <hr width={'100%'} />
                            <p>Enjoy the movie!</p>
                        </div>
                        <NextButton name={'Home'} link={'/'} />
                    </>
                    :
                    <>
                        <div className="confirmTextContainer">
                            <p className="confirmText">Click the Arrow Below to Confirm Your Order!</p>
                        </div>
                        <NextButton name={'Confirm'} action={confirmOrder} />
                        <BackButton />
                    </>
            }
        </>
    )
}

export default OrderSummary;
