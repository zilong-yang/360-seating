import React from 'react';
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import Backdrop from "./Backdrop";

class Checkout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: this.props.user.fname,
            lname: this.props.user.lname,
            email: this.props.user.email,
            phone: this.props.user.phone,
            ccnum: this.props.user.ccnum,
            ccname: this.props.user.ccname,
            expdate: this.props.user.expdate,
            ccv: this.props.user.ccv,
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
                <Backdrop movieID={this.props.order.movieID} />
                <div className="check-page">
                    <form>
                        <div className="row_CO">
                            <div className="info-box">
                                <div className="user-info">
                                    <h2 className="checkout-block-title">Personal Information</h2>

                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        id="fname"
                                        name="firstname"
                                        placeholder="John"
                                        value={this.state.fname}
                                        onChange={this.updateInfo}
                                        required
                                    />

                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        id="lname"
                                        name="lastname"
                                        placeholder="Smith"
                                        value={this.state.lname}
                                        onChange={this.updateInfo}
                                        required
                                    />

                                    <label>Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="smithj123@email.com"
                                        value={this.state.email}
                                        onChange={this.updateInfo}
                                        required
                                    />

                                    <label>Phone Number</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phonenumber"
                                        placeholder="800555555"
                                        value={this.state.phone}
                                        onChange={this.updateInfo}
                                        required
                                    />
                                </div>

                                <div className="cc-info">
                                    <h2 className="checkout-block-title">Credit Card Information</h2>

                                    <label>Name on Credit Card</label>
                                    <input
                                        type="text"
                                        id="ccname"
                                        name="cardname"
                                        placeholder="John Smith"
                                        value={this.state.ccname}
                                        onChange={this.updateInfo}
                                        required
                                    />

                                    <label>Credit Card Number</label>
                                    <input
                                        type="text"
                                        id="ccnum"
                                        name="cardbum"
                                        placeholder="1111-2222-3333-4444"
                                        value={this.state.ccnum}
                                        onChange={this.updateInfo}
                                        required
                                    />

                                    <label>Expiration Date</label>
                                    <input
                                        type="text"
                                        id="expdate"
                                        name="expdate"
                                        placeholder="01/21"
                                        value={this.state.expdate}
                                        onChange={this.updateInfo}
                                        required
                                    />

                                    <label>CCV</label>
                                    <input
                                        type="text"
                                        id="ccv"
                                        name="ccv"
                                        placeholder="123"
                                        value={this.state.ccv}
                                        onChange={this.updateInfo}
                                        required
                                    />
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
                    </form>
                </div>

                <BackButton />
                <NextButton link='/order-summary' />
            </>
        )
    }
}

export default Checkout;

