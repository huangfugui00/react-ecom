import React from 'react'
import {orderType} from './OrderList'
import config from '../../config/config'
import './orderItem.scss'

type orderItemProp={
    order:orderType
}

const OrderItem = ({order}:orderItemProp) => {
    const productNum = order.products.map(product=>product.numInCart).reduce((a,b)=>a+b,0)
    const price = order.products.reduce((accu,product)=>accu+product.product.price*product.numInCart,0)

    return (
        <div className="order-item row">
            <div id="order-item-thumbs" className="col-6 ">
                {order.products.map(product=>
                    <img src={`${config.api}/${product.product.thumb}`} alt={product.product.intro}/>)}
            </div>
            <span className="col-3 m-auto">x{productNum}</span>
            <span className="col-3 d-flex justify-content-end m-auto ">${price}</span>
            <div id="order-item-button" className="d-flex justify-content-end gap-2">
                {order.status === 'pay'?<></>:<button id="pay">pay</button>}
                <button id="delete">delete</button>
            </div>
            <hr/>
        </div>
    )
}

export default OrderItem
