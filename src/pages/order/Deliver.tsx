import React from 'react'
import './deliver.scss'
import {deliverType} from './Order'


const Deliver = ({deliver}:{deliver:deliverType}) => {
    return (
        <div className="order-deliver">
            <h3>Delivery</h3>
            <form>
                <div className="row gap-4">
                    <div  className="col" id="order-deliver-name">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={deliver.name}/>
                    </div>
                    <div className="col" id="order-deliver-phone">
                        <label  className="form-label">Phone</label>
                        <input type="text" className="form-control" value={deliver.phone}/>
                    </div>
                </div> 
                <div id="order-deliver-address">
                    <label  className="form-label">Address</label>
                    <input type="text" className="form-control" value={deliver.address}/>
                </div>
           
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Deliver
