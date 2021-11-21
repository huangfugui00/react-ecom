import React from 'react'
import './quickView.scss'
import ProductImage from './ProductImage'
import ProductIntro from './ProductIntro'
import {productType} from '../../App'

type quickviewProp = {
    product:productType
}
const QuickView = ({product}:quickviewProp) => {
    return (
        <div className = "quick-view">
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

export default QuickView
