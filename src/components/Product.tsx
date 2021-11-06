import React from 'react'
import {productType} from '../App'
import config from '../config/config'
import './Product.scss'


type productProp={
    product: productType
}

const Product = ({product}:productProp):JSX.Element => {
    return (
        <div className="component-product ">
            <div id="component-product-image" className=" d-flex flex-columm justify-content-center">
                <img src={`${config.api}/${product.thumb}`} alt=""/>
                <a href="/#">
                    Quick View
                </a>
            </div>
            
            <div id="component-product-intro" className="d-flex justify-content-between mt-2">
                <span ><a href={`product/${product._id}`}>{product.intro}</a></span>
                <div>
                <i className="bi-heart" ></i>
                <span>{product.favorite>0?product.favorite:''}</span>
                </div>
                
            </div>

            <div id="component-product-price" className="d-flex">
                <span>{`$${product.price}`}</span>
            </div>        
        </div>
    )
}

export default Product
