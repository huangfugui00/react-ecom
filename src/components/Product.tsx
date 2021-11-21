import React,{useState} from 'react'
import Modal from '@mui/material/Modal';
import {productType} from '../App'
import config from '../config/config'
import QuickView from '../components/quickView/QuickView'
import Button from '@mui/material/Button';
import './Product.scss'


type productProp={
    product: productType
}

type modalProp = {
    open:boolean,
    setOpen:(open:boolean)=>void,
    product:productType
}

const ModalProduct = ({open,setOpen,product}:modalProp)=>{
    return( 
        <Modal
         open={open}
         onClose={()=>setOpen(false)}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description">
            <QuickView product={product}/>
        </Modal>
    )

}

const Product = ({product}:productProp):JSX.Element => {
    const [open,setOpen ]= useState(false)

    return (
        <div className="component-product ">
            <div id="component-product-image" className=" d-flex flex-columm justify-content-center">
                <img src={`${config.api}/${product.thumb}`} alt=""/>
                <a onClick={()=>setOpen(true)}>
                    Quick View
                </a>
            </div>
            
            <div id="component-product-intro" className="d-flex justify-content-between mt-2">
                <span ><a href={`/product/${product._id}`}>{product.intro}</a></span>
                <div>
                <i className="bi-heart" ></i>
                <span>{product.favorite>0?product.favorite:''}</span>
                </div>
                
            </div>

            <div id="component-product-price" className="d-flex">
                <span>{`$${product.price}`}</span>
            </div>        
            <ModalProduct open={open} setOpen={setOpen} product={product}/>
        </div>
    )
}

export default Product
