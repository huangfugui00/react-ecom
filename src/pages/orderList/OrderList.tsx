import React,{useState,useEffect} from 'react'
import OrderItem from './OrderItem'
import orderServices from '../../services/order'
import {cartProductType} from '../shopCart/ShopCart'
import './orderList.scss'



export type orderType={
    createdAt:string,
    status:string,
    products:cartProductType[]
}


const OrderList = () => {
    useEffect(()=>{
        const fetchOrders = async()=>{
            const result = await orderServices.getOrder()
            if(result.status===1){
                setOrders(result.data)
            }
        }
        fetchOrders()
    },[])

    const [orders, setOrders] = useState([] as orderType[])

    return (
        <div className="order-list">
            {orders.map(order=>
                <OrderItem order={order}/>
            )}
            
        </div>
    )
}

export default OrderList
