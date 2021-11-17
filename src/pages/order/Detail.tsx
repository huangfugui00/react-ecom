import React from 'react'
import PayCard from '../../components/PayCard'
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
            <PayCard price={totalPrice*100} payEvent={payEvent}/>
        </div>
    )
}
export default Detail
