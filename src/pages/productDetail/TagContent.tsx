import React from 'react'
import  Description from './Description'
import  Comments from './Comments'
import {productType} from '../../App'
import {commentType} from './ProductDetail'
import './TagContent.scss'

type tagContentProp = {
    tagButtonSel:string,
    product :productType,
    comments:commentType[],
}

const TagContent = ({tagButtonSel,product,comments}:tagContentProp) => {
    return (
        <div className="product-detail-tag-content">
            <Description description={product.description} tagButtonSel={tagButtonSel}/>
            <Comments tagButtonSel={tagButtonSel} comments={comments}/>
        </div>
    )
}

export default TagContent
