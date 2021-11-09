import './ProductIntro.scss'
import React,{useState} from 'react'
import {productType} from '../../App'
import Favorite from '../../components/Favorite'

type productIntroProp = {
    product:productType
}

const ProductIntro = ({product}:productIntroProp) => {
    const [buyNum,setBuyNum]=useState(1)


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
                <Favorite productId={product._id}/>
                {/* <i id="favorite" className="bi bi-heart" onClick={clickFavoriteEvent}/> */}
            </div>
           
        </div>
    )
}

export default ProductIntro
