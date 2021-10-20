import React from 'react'
import './Product.scss'

const Product = ({product}) => {
    return (
        <div className="component-product ">
            <div id="component-product-image" className=" d-flex flex-columm justify-content-center">
                <img src={product.img} />
                <a href="#" className="">
                    Quick View
                </a>
            </div>
            
            <div id="component-product-intro" className="d-flex justify-content-between mt-2">
                <span ><a>{product.intro}</a></span>
                <i className="bi-heart" ></i>
            </div>

            <div id="component-product-price" className="d-flex">
                <span>{`$${product.price}`}</span>
            </div>        
        </div>
    )
}

export default Product
