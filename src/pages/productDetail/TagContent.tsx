import React from 'react'
import './TagContent.scss'
import  Description from './Description'
import  Specification from './Specification'
import  Comments from './Comments'
import {productType} from '../../App'

type tagContentProp = {
    product :productType
}

const TagContent = ({product}:tagContentProp) => {
    return (
        <div className="product-detail-tag-content">
            <Description description={product.description}/>
            <Specification/>
            <Comments/>
        </div>
    )
}

export default TagContent
