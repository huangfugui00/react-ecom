import React from 'react'
import './detail.scss'
import {orderDetailType} from './Order'

type detailProp={
    orderDetail:orderDetailType[]
}


const Detail = ({orderDetail}:detailProp) => {
    const totalPrice = orderDetail.reduce((accu,productInCart)=>accu+productInCart.price*productInCart.number,0)

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
                        <div className="d-flex justify-content-between">
                            <span>{productInCart.intro}</span>
                            <span>x{productInCart.number}</span>
                            <span>{productInCart.number*productInCart.price}</span>
                        </div>  
                        )
                }
            </div>
            <div id="detail-product-total" className="d-flex justify-content-between">
                <span>Total</span>
                <span>${totalPrice}</span>
            </div>
            <button>Pay</button>
         
        </div>
    )
}
export default Detail
