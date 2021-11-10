import React,{useEffect, useState} from 'react'
import CartProducts from './CartProducts'
import NavBread from './NavBread'
import CartTotal from './CartTotal'
import cartServices from '../../services/cart'
import  './shopCart.scss'

export type cartProductType = {
    // thumb:string,
    // intro:string,
    // price:number,
    numInCart:number,
    product:{
        _id:string,
        price:number,
        intro:string,
        thumb:string,
    }
}


const ShopCart = () => {
    
    const [cartProducts,setCartProducts]=useState([] as cartProductType[])

    useEffect(() => {
        const fetchCart = async()=>{
            const result = await cartServices.getCarts()        
            if(result.status===1){
                const cartsFromApi = result.data
                for(let i = 0 ;i<cartsFromApi.length;i++){
                    cartsFromApi[i].product = cartsFromApi[i].productId
                }
                setCartProducts(cartsFromApi)
            }
        }
        fetchCart()
    }, [])



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
