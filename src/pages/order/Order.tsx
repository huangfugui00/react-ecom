import React,{useState,useContext,useEffect} from 'react'
import {Token} from 'react-stripe-checkout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import payServices from '../../services/pay'
import deliverServices from '../../services/deliver'
import {useHistory} from 'react-router-dom'
// import "react-toastify/dist/ReactToastify.css";
import './order.scss'
import {orderContext} from '../../App'
import Detail from './Detail'
import Deliver from './Deliver'

export type deliverType = {
    _id:string,
    person:string;
    address:string;
    phone:string;
}

const Order = () => {
    useEffect(() => {
        const fetchDefaultDeliver = async()=>{
            const result = await deliverServices.getDefaultDeliver()
            if(result.status){
                setDeliver(result.data)
            }        
        }
        fetchDefaultDeliver()
    }, [])

    const {order} = useContext(orderContext)
    const history = useHistory()
    if(!order.length){
        history.push('/cart')
        toast('您必须选择您想购买的商品才能生成订单')
    }
    
    const totalPrice = order.reduce((accu,productInCart)=>accu+productInCart.product.price*productInCart.numInCart,0)*100
    const [deliver,setDeliver] = useState(
        {}  as deliverType
    )

    const deliverFormSubmmit = async(e:React.FormEvent)=>{
        e.preventDefault()
        const {_id}={...deliver}
        if(_id){
            updateDeliver()
        }
        else{
            createDeliver()
        }

    }

    const updateDeliver = async()=>{
        const {_id,phone,address,person}={...deliver}
        const result = await deliverServices.updateDeliver(_id,address,person,phone)
        if (result.status === 1) {
            toast("更新deliver成功", { type: "success" });
        } else {
            toast("更新deliver失败", { type: "error" });
        }
    }

    const createDeliver = async()=>{
        const {phone,address,person}={...deliver}
        const result = await deliverServices.createDeliver(address,person,phone)
        if (result.status === 1) {
            toast("创建deliver成功", { type: "success" });
        } else {
            toast("创建deliver失败", { type: "error" });
        }
    }



    const payEvent= async (token:Token)=>{
        //生成order

        const result = await payServices.handleToken(token,totalPrice)
        if (result.status === 1) {
            //更新order状态为pay
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }


    return (
        <div className="order row ">
            <div className="col-xl-6 " id='order-deliver'>
            <Deliver deliver={deliver} setDeliver={setDeliver} deliverFormSubmmit={deliverFormSubmmit} />
            </div>
            <div className="col-xl-4 offset-xl-2" id="order-detail">
            <Detail orderDetail={order} payEvent={payEvent}/>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Order
