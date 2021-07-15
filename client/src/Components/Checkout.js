import React from 'react';

class Checkout extends React.Component {
    render() {
        return (
            <div className="check-page">
                <div className="cart">
                    <h2>Order Total</h2>
                </div>
                <div className="person-info">
                    <div className="row" id="personal">
                        <h2>Your Information</h2>
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="johnsmith@email.com"/>
                    </div>
                    <div className="row" id="credit">

                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout;