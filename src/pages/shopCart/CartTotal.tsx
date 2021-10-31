import React from 'react'
import './cartTotal.scss'

const CartTotal = () => {
    return (
        <div className=" cart-total ">
                <span id="cart-total-number">You have select 3 product</span>
                <span id="cart-total-price">Total:   $100</span>
                <button className="d-flex justify-content-between">process</button>
        </div>
    )
}

export default CartTotal
