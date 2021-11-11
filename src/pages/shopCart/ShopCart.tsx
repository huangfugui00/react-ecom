import React,{useEffect, useState} from 'react'
import { useBeforeunload } from 'react-beforeunload'
import CartProducts from './CartProducts'
import NavBread from './NavBread'
import CartTotal from './CartTotal'
import cartServices from '../../services/cart'
import  './shopCart.scss'

export type cartProductType = {
    _id:string,
    numInCart:number,
    check:boolean,
    product:{
        _id:string,
        price:number,
        intro:string,
        thumb:string,
    }
}


const ShopCart = () : JSX.Element=> {

    useBeforeunload((event) => {
        cartServices.syncCart(cartProducts)
    });
    useEffect(() => {
        const fetchCart = async()=>{
            const result = await cartServices.getCart()        
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

    const [cartProducts,setCartProducts] = useState([] as cartProductType[])
    // const productsToBuy = cartProducts.filter(cartProduct=>cartProduct.check)
    // const [productsToBuy,setProductsToBuy] = useState([] as cartProductType[])

    const removeCart = async(cartId:string)=>{
        const result = await cartServices.deleteFromCart(cartId)
        if(result.status===1){
            const filterProducts = cartProducts.filter(cartProduct=>cartProduct._id!==cartId)
            setCartProducts(filterProducts)
        }
    }

    const increase = (cartProduct:cartProductType)=>{
        let copyCartProducts = [...cartProducts]
        const selCartProduct = copyCartProducts.find(copyCartProduct=>copyCartProduct._id===cartProduct._id)
        if(selCartProduct){
            selCartProduct.numInCart+=1
        }
        setCartProducts(copyCartProducts)
    }

    const decrease = (cartProduct:cartProductType)=>{
        let copyCartProducts = [...cartProducts]
        const selCartProduct = copyCartProducts.find(copyCartProduct=>copyCartProduct._id===cartProduct._id)
        if(selCartProduct){
            selCartProduct.numInCart= selCartProduct.numInCart-1>1? selCartProduct.numInCart-1:1
        }
        setCartProducts(copyCartProducts)
    }

    const setNumInCart = (cartProduct:cartProductType,numberInCart:number)=>{
        let copyCartProducts = [...cartProducts]
        const selCartProduct = copyCartProducts.find(copyCartProduct=>copyCartProduct._id===cartProduct._id)
        if(selCartProduct && !Number.isNaN(numberInCart)){
            selCartProduct.numInCart= numberInCart
        }
        setCartProducts(copyCartProducts)
    }

    const toggleCheck =(cartProduct:cartProductType)=>{
        let copyCartProducts = [...cartProducts]
        const selCartProduct = copyCartProducts.find(copyCartProduct=>copyCartProduct._id===cartProduct._id)
        if(selCartProduct ){
            selCartProduct.check = !selCartProduct.check 
        }
        setCartProducts(copyCartProducts)

    }
    return (        
        <div className="shop-cart">
            <div id="bread">
                <NavBread/>
            </div>
            <div id="shop-cart-product">
                <CartProducts cartProducts={cartProducts} removeCart={removeCart} increase={increase} decrease={decrease} setNumInCart={setNumInCart} toggleCheck={toggleCheck}/>
            </div>
            <CartTotal cartProducts={cartProducts}/>
        </div>
    )
}

export default ShopCart
