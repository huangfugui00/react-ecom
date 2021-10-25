import './ProductDetail.scss'
import ProductImage from './ProductImage'
import ProductIntro from './ProductIntro'
import TagButtons from './TagButtons'
import TagContent from './TagContent'
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
            <div id="product-detail-data">
                <TagButtons/>
                <TagContent product = {product}/>
            </div>
            
        </div>
    )

}

export default ProductDetail
