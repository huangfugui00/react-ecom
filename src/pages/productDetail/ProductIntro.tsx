import './ProductIntro.scss'

import React,{useState} from 'react'
import {productType} from '../../App'

type productIntroProp = {
    product:productType
}

const ProductIntro = ({product}:productIntroProp) => {
    const [buyNum,setBuyNum]=useState(1)
    const clickFavoriteEvent = ()=>{
        const data={
            productId:product._id,
        }
        // const result = await product
    }

    // const postComment =async (e:React.FormEvent)=>{
    //     e.preventDefault()
    //     const data={
    //         productId:productId,
    //         text:text,       
    //         rate:star
    //     }

    //     const result = await commentServices.createComment(data)
    //                     .catch(err=>err)
    //     if(result.status===1){
    //         addCommentEvent({username:user.username,thumbUrl:user.avatar,content:text,star:star})
    //     }

    // }

    return (
        <div className="product-intro">
            <div id="previous-next">
                <a href="#">Previous </a>
                <span> | </span>
                <a href="#"> Next</a>
            </div>
            <p id="intro">{product.intro}</p>
            <span id="price">${product.price}</span>
            <div className="d-flex flex-column gap-2">
            <span id="category">Category: <a href={`/shop?category=${product.category}`}>{product.category}</a></span>
            <span id="available">Available: <span>In Stock</span></span>
            </div>
           
            <hr/>
            <p>{product.description}</p>
            <hr/>
            <div className="d-flex justify-content-between" id="num-cart-favorite">
                <div id="product-buy-num" className="d-flex">
                    <i className="bi bi-dash" onClick={() =>{setBuyNum(Math.max(buyNum-1,1))}} />
                    <input value={buyNum}  onChange={(e)=>{setBuyNum(parseInt(e.target.value))}}/>
                    <i className="bi bi-plus" onClick={() =>{setBuyNum(buyNum+1)}}/>
                </div>
                <button  id="add-cart">ADD TO CART</button>
                <i id="favorite" className="bi bi-heart" onClick={clickFavoriteEvent}/>
            </div>
           
        </div>
    )
}

export default ProductIntro
