import React from 'react'
import './deliver.scss'
import {deliverType} from './Order'


type deliverProp={
    deliver:deliverType,
    setDeliver:(deliver:deliverType)=>void,
    deliverFormSubmmit:(e:React.FormEvent)=>void
}

const Deliver = ({deliver,setDeliver,deliverFormSubmmit}:deliverProp) => {


    return (
        <div className="order-deliver">
            <h3>Delivery</h3>
            <form onSubmit={deliverFormSubmmit}>
                <div className="row gap-4">
                    <div  className="col" id="order-deliver-name">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={deliver.person} onChange = {(e)=>{setDeliver({...deliver,person:e.target.value})}}/>
                    </div>
                    <div className="col" id="order-deliver-phone">
                        <label  className="form-label">Phone</label>
                        <input type="text" className="form-control" value={deliver.phone} onChange = {(e)=>{setDeliver({...deliver,phone:e.target.value})}}/>
                    </div>
                </div> 
                <div id="order-deliver-address">
                    <label  className="form-label">Address</label>
                    <input type="text" className="form-control" value={deliver.address} onChange = {(e)=>{setDeliver({...deliver,address:e.target.value})}}/>
                </div>
                {
                    deliver?<button type="submit" className="btn" >Update</button>:<button type="submit" className="btn" >Submit</button>
                }
               
            </form>
        </div>
    )
}

export default Deliver
