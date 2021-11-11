import React,{useState} from 'react'
import './order.scss'
import Detail from './Detail'
import Deliver from './Deliver'

export type deliverType = {
    name:string;
    address:string;
    phone:string;
}

export type orderDetailType = {
    intro:string,
    number:number,
    price:number,
}

const Order = () => {

    const [deliver] = useState(
        {
            name:'huangfugui',
            address:'guangzhou',
            phone:'15011907102'
        }  as deliverType
    )
    const [orderDetail] = useState(
       [ 
        {
           intro:'women shop'  ,
           number:2,
           price:100,
        },
        {
            intro:'women shop'  ,
            number:2,
            price:100,
         }] as orderDetailType[]
    )

    return (
        <div className="order row ">
            <div className="col-xl-6 " id='order-deliver'>
            <Deliver deliver={deliver}/>
            </div>
            <div className="col-xl-4 offset-xl-2" id="order-detail">
            <Detail orderDetail={orderDetail}/>
            </div>
        </div>
    )
}

export default Order
