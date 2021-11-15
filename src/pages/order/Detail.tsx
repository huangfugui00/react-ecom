import React from 'react'
import StripeCheckout from "react-stripe-checkout";
import {Token} from 'react-stripe-checkout'
import './detail.scss'
import {cartProductType} from '../shopCart/ShopCart'

type detailProp={
    orderDetail:cartProductType[],
    payEvent:(token:Token)=>void
}


const Detail = ({orderDetail,payEvent}:detailProp) => {
    const totalPrice = orderDetail.reduce((accu,productInCart)=>accu+productInCart.product.price*productInCart.numInCart,0)
    return (
        <div className="order-detail">
            <h3>Your Order</h3>
            <hr/>
            <div id="detail-product-title" className="d-flex justify-content-between">
                <span>Product</span>
                <span>Total</span>
            </div>
            <div id="detail-product-list">
                {
                    orderDetail.map(productInCart => 
                        <div className="d-flex justify-content-between" id="detail-product-list-item">
                            <span>{productInCart.product.intro}</span>
                            <span>x{productInCart.numInCart}</span>
                            <span>{productInCart.numInCart*productInCart.product.price}</span>
                        </div>  
                        )
                }
            </div>
            <div id="detail-product-total" className="d-flex justify-content-between">
                <span>Total</span>
                <span>${totalPrice}</span>
            </div>
            <StripeCheckout
                stripeKey="pk_test_51JuxCuKbxfW8ZS8cPQej3cSP17GkiTuc7DlJXH3m0ymZTGbFeojfTfiaaQjEfMOdjL7QZUGlNfFNxz7Y4Q1pgNCx00KND8nzpT"
                token={payEvent}
                amount= {totalPrice*100}
                name="Order"
                // billingAddress
                // shippingAddress
            />
        </div>
    )
}
export default Detail
