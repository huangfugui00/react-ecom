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
    addCommentEvent:(newComment:commentType)=>void
}

const TagContent = ({tagButtonSel,product,comments,addCommentEvent}:tagContentProp) => {
    return (
        <div className="product-detail-tag-content">
            <Description description={product.description} tagButtonSel={tagButtonSel}/>
            <Comments tagButtonSel={tagButtonSel} productId = {product._id} comments={comments} addCommentEvent={addCommentEvent}/>
        </div>
    )
}

export default TagContent
