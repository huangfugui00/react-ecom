import React,{useState} from 'react'
import CartProducts from './CartProducts'
import NavBread from './NavBread'
import CartTotal from './CartTotal'
import  './shopCart.scss'

export type cartProductType = {
    thumb:string,
    intro:string,
    price:number,
    number:number,
}


const ShopCart = () => {
    const [cartProducts]=useState([
        {
            thumb:"/assests/images/product-01.jpg",
            intro:"beautiful dress",
            price:30,
            number:2,
        },
        {
            thumb:"/assests/images/product-02.jpg",
            intro:"woderful man shoe",
            price:42,
            number:1,
        },
        {
            thumb:"/assests/images/product-04.jpg",
            intro:"woderful man shoe",
            price:42,
            number:1,
        },
        {
            thumb:"/assests/images/product-05.jpg",
            intro:"woderful man shoe",
            price:22,
            number:2,
        }
    ] as cartProductType[])



    return (
        
        <div className="shop-cart">
            <div id="bread">
                <NavBread/>
            </div>
            <div id="shop-cart-product">
                <CartProducts cartProducts={cartProducts}/>
            </div>
            <CartTotal/>

        </div>
    )
}

export default ShopCart
