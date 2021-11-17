import React from 'react'
import {orderType} from './OrderList'
import PayCard from '../../components/PayCard'
import payServices from '../../services/pay'
import orderServices from '../../services/order'
import config from '../../config/config'
import './orderItem.scss'
import { Token } from 'react-stripe-checkout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type orderItemProp={
    order:orderType,
    deleteOrder:(id:string)=>void,
    updateOrderStatus:(id:string)=>void,
}




const OrderItem = ({order,deleteOrder,updateOrderStatus}:orderItemProp) => {
    const productNum = order.products.map(product=>product.numInCart).reduce((a,b)=>a+b,0)
    const price = order.products.reduce((accu,product)=>accu+product.product.price*product.numInCart,0)

    const payEvent = async(token:Token)=>{
        const result = await payServices.handleToken(token,price)
        if (result.status === 1) {
            //更新order状态为pay
            toast("Success! Check email for details", { type: "success" });
            await orderServices.updateOrder(order._id,'pay')
            updateOrderStatus(order._id)
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    return (
        <div className="order-item row">
            <div id="order-item-thumbs" className="col-6 ">
                {order.products.map(product=>
                    <img src={`${config.api}/${product.product.thumb}`} alt={product.product.intro}/>)}
            </div>
            <span className="col-3 m-auto">x{productNum}</span>
            <span className="col-3 d-flex justify-content-end m-auto ">${price}</span>
            <div id="order-item-button" className="d-flex justify-content-end gap-2">
                {order.status === 'pay'?<></>: <PayCard price={price} payEvent={payEvent} ></PayCard>}
                <button id="delete"  onClick={()=>deleteOrder(order._id)}>delete</button>
            </div>
            <ToastContainer/>
            <hr/>
        </div>
    )
}

export default OrderItem
