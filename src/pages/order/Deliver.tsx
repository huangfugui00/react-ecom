import React,{useState} from 'react'
import './deliver.scss'
export type deliverType = {
    name:string;
    address:string;
    phone:string;
}

const Deliver = () => {
    const [deliver] = useState(
        {
            name:'huangfugui',
            address:'guangzhou',
            phone:'15011907102'
        }  as deliverType
    )
    
    return (
        <div className="order-deliver">
            <h3>Delivery</h3>
            <form>
                <div className="row gap-4">
                    <div  className="col">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                        <label  className="form-label">Phone</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div> 
                <div >
                    <label  className="form-label">Address</label>
                    <input type="text" className="form-control" />
                </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Deliver
