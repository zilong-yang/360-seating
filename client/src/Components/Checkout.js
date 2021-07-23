import React from 'react';
import SeatSelection from './SeatSelection';
import BackButton from "./BackButton";
import NextButton from "./NextButton";

class Checkout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: null,
            lname: null,
            email: null,
            phone: null,
            ccnum: null,
            ccname: null,
            expdate: null,
            ccv: null,
            total: null
        }
    }


    updateInfo = async (e) => {
        await this.setState({
            [e.target.id]: e.target.value
        });

        this.props.setters.setUser(this.state);
    }

    async componentDidMount() {
        const redCost = 5.0;
        const adultCost = 15.0;

        let total = ((this.props.order.numChildren + this.props.order.numSeniors) * redCost) + (this.props.order.numAdults * adultCost);

        let numUSD = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        await this.setState({
            total: numUSD.format(total)
        });

        this.props.setters.setTotal(numUSD.format(total));
    }

    render() {
        return (
            <>
                <div className="check-page">
                    <div className="row">
                        <div className="info-box">
                            <div className="user-info">
                                <h2 className="checkout-block-title">Personal Information</h2>

                                <label for="fname">First Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="John" onChange={this.updateInfo} />

                                <label for="lname">Last Name</label>
                                <input type="text" id="lname" name="lastname" placeholder="Smith" onChange={this.updateInfo} />



                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" placeholder="smithj123@email.com" onChange={this.updateInfo} />

                                <label for="pnum">Phone Number</label>
                                <input type="text" id="pnum" name="phonenumber" placeholder="800555555" onChange={this.updateInfo} />

                            </div>
                            <div className="cc-info">
                                <h2 className="checkout-block-title">Credit Card Information</h2>

                                <label for="ccname">Name on Credit Card</label>
                                <input type="text" id="ccname" name="cardname" placeholder="John Smith" onChange={this.updateInfo} />

                                <label for="ccnum">Credit Card Number</label>
                                <input type="text" id="ccnum" name="cardbum" placeholder="1111-2222-3333-4444" onChange={this.updateInfo} />


                                <label for="expdate">Expiration Date</label>
                                <input type="text" id="expdate" name="expdate" placeholder="01/21" onChange={this.updateInfo} />

                                <label for="ccv">CCV</label>
                                <input type="text" id="ccv" name="ccv" placeholder="123" onChange={this.updateInfo} />

                            </div>
                        </div>
                        <div className="cart">
                            <h2 className="checkout-block-title">Order Total</h2>
                            <p className="ticket-count"> 
                                <span>Movie Title: {this.props.order.movieName}</span>
                            </p>
                            <p className="ticket-count">
                                <span>Children Ticket(s): {this.props.order.numChildren}</span>

                            </p>
                            <p className="ticket-count">
                                <span>Adult Ticket(s): {this.props.order.numAdults}</span>
                            </p>
                            <p className="ticket-count">
                                <span>Senior Ticket(s): {this.props.order.numSeniors}</span>
                            </p>

                            <hr />
                            <p className="ticket-count">
                                <span>Total: {this.state.total}</span>
                            </p>

                        </div>
                    </div>
                </div>

                <BackButton />
                <NextButton link='/order-summary' />
            </>
        )
    }
}

export default Checkout;

