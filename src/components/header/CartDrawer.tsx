import React,{useState} from 'react'
import './cartDrawer.scss'
import Drawer from '@mui/material/Drawer';
import {cartProductType} from '../../pages/shopCart/ShopCart'
import IconText from '../IconText'
import config from '../../config/config'


type cartItemProp = {
    cartProduct:cartProductType;
    // removeCart:(cartId:string)=>void
    increase:(cartProduct:cartProductType)=>void
    decrease:(cartProduct:cartProductType)=>void
    setNumInCart:(cartProduct:cartProductType,numInCart:number)=>void
}


const CartItem = ({cartProduct,increase,decrease,setNumInCart}:cartItemProp)=>{
    return(
    <div className="cart-item row">
        <div className="col-8 d-flex" >
        <img  src={`${config.api}/${cartProduct.product.thumb}`} alt={cartProduct.product.intro} /> 
        <div id="message" className="d-flex flex-column  gap-1">
            <span id="intro">{cartProduct.product.intro}</span>
            <span id="price">${cartProduct.product.price}x{cartProduct.numInCart}</span>
            <span id="total">${cartProduct.product.price*cartProduct.numInCart}</span>
        </div>
        </div>
   
       <div className="col d-flex" id="product-buy-num"> 
            <i className="bi bi-dash" onClick={()=>decrease(cartProduct)}/>
            <input value={cartProduct.numInCart} onChange={(e)=>{setNumInCart(cartProduct,parseInt(e.target.value))}}/>
            <i className="bi bi-plus" onClick={()=>increase(cartProduct)}/>

        </div>
      
        
    </div>
    )
}

type cartDrawerProp = {
    showCart:boolean,
    closeEvent:()=>void,
    cartProducts:cartProductType[],
    setCartProducts:( cartProducts:cartProductType[])=>void
}


const CartDrawer = ({showCart,closeEvent,cartProducts,setCartProducts}:cartDrawerProp) => {
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
    return (
            <Drawer
            anchor='right'
            open={showCart}
            onClose={closeEvent}
          >
            <div className="cart-drawer">
             <IconText icon="bi-cart" text={`${cartProducts.length} items`}/>
             {cartProducts.map(cartProduct=><CartItem cartProduct={cartProduct} increase={increase} decrease={decrease} setNumInCart={setNumInCart}/>)}
            </div>   
              
          </Drawer>
    )
}

export default CartDrawer
