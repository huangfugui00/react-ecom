import React from 'react'
import './TagContent.scss'
import  Description from './Description'
import  Comments from './Comments'
import {productType} from '../../App'
import {commentContentType} from './ProductDetail'

type tagContentProp = {
    tagButtonSel:string,
    product :productType,
    commentContent:commentContentType,
}

const TagContent = ({tagButtonSel,product,commentContent}:tagContentProp) => {
    return (
        <div className="product-detail-tag-content">
            <Description description={product.description} tagButtonSel={tagButtonSel}/>
            <Comments tagButtonSel={tagButtonSel} commentContent={commentContent}/>
        </div>
    )
}

export default TagContent
