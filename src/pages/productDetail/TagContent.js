import React from 'react'
import './TagContent.scss'
import  Description from './Description'
import  Specification from './Specification'
import  Comments from './Comments'
const TagContent = ({product}) => {
    return (
        <div className="product-detail-tag-content">
            <Description description={product.description}/>
            <Specification/>
            <Comments/>
        </div>
    )
}

export default TagContent
