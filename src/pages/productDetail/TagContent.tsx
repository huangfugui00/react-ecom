import React from 'react'
import './TagContent.scss'
import  Description from './Description'
import  Comments from './Comments'
import {productType} from '../../App'

type tagContentProp = {
    tagButtonSel:string,
    product :productType
}

const TagContent = ({tagButtonSel,product}:tagContentProp) => {
    return (
        <div className="product-detail-tag-content">
            <Description description={product.description} tagButtonSel={tagButtonSel}/>
            <Comments tagButtonSel={tagButtonSel}/>
        </div>
    )
}

export default TagContent
