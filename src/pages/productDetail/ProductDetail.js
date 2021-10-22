import './ProductDetail.scss'
import ProductImage from './ProductImage'
import ProductIntro from './ProductIntro'
import React from 'react'

const ProductDetail = ({product}) => {
    return (
        <div className="product-detail">
            <hr/>
            <div id="product-detail-content" className="row ">
                <div className="col-xl-8">
                    <ProductImage productImgs={product.imgs}/>
                </div>
                <div className="col-xl-4">
                    <ProductIntro product = {product}/>
                </div>
                
            </div>
            
        </div>
    )

}

export default ProductDetail
