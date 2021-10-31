import React,{useState} from 'react'
import './order.scss'
import Detail from './Detail'
import Deliver from './Deliver'



const Order = () => {


    return (
        <div className="order row gap-4">
            <div className="col">
            <Deliver />
            </div>
            <div className="col">
            <Detail/>
            </div>
           
            

        </div>
    )
}

export default Order
