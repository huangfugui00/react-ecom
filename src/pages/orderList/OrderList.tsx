import React,{useState,useEffect} from 'react'
import OrderItem from './OrderItem'
import orderServices from '../../services/order'
import {cartProductType} from '../shopCart/ShopCart'
import './orderList.scss'



export type orderType={
    _id:string,
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

    const deleteOrder=async(id:string)=>{
        const result = await orderServices.deleteOrder(id)
        if(result.status===1){
            const orderList = orders.filter(order=>order._id!==id)
            setOrders(orderList)
        }
    }

    const updateOrderStatus = (id:string)=>{
        const orderList = orders.map(order=>order._id===id?{...order,status:'pay'}:order)
        setOrders(orderList)
    }

   
    const [orders, setOrders] = useState([] as orderType[])

    return (
        <div className="order-list">
            {orders.map(order=>
                <OrderItem order={order} deleteOrder={deleteOrder} updateOrderStatus={updateOrderStatus}/>
            )}  
        </div>
    )
}

export default OrderList
