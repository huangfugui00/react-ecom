import React from 'react'
import './cartTotal.scss'
import {cartProductType} from './ShopCart'

type cartToTalProp={
    cartProducts:cartProductType[],
    generateOrder:()=>void,
    
}

const CartTotal = ({cartProducts,generateOrder}:cartToTalProp) => {
    const num = cartProducts.filter(cartProduct=>cartProduct.check).length
    const totalPrice = cartProducts.filter(cartProduct=>cartProduct.check).map(cartProduct=>cartProduct.product.price*cartProduct.numInCart).reduce((a,b)=>a+b,0)


    return (
        <div className=" cart-total ">
                <span id="cart-total-number">You have select {num} product</span>
                <span id="cart-total-price">Total:   ${totalPrice}</span>
                {/* <a href="/order">process</a> */}
                <button className="d-flex justify-content-between" onClick={generateOrder} >process</button>
        </div>
    )
}

export default CartTotal
