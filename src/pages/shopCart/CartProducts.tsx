import React from 'react'
import './cartProducts.scss'
import {cartProductType} from './ShopCart'
import config from '../../config/config'

type cartProductsProp ={
    cartProducts:cartProductType[],
    removeCart:(cartId:string)=>void
    increase:(cartProduct:cartProductType)=>void
    decrease:(cartProduct:cartProductType)=>void
    setNumInCart:(cartProduct:cartProductType,numInCart:number)=>void
    toggleCheck:(cartProduct:cartProductType)=>void
}

const CartProducts = ({cartProducts,removeCart,increase,decrease,setNumInCart,toggleCheck}:cartProductsProp):JSX.Element => {
    return (
        <div className="shop-cart-product">
            <table className="table align-middle">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">PRODUCT</th>
                <th scope="col">PRICE</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">TOTAL</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                    {cartProducts.map((cartProduct,index)=>
                      <tr>
                        <td><input type="checkbox" id="checkProduct" checked={cartProduct.check} onChange={()=>toggleCheck(cartProduct)}/></td>
                        <td>
                            <img src={`${config.api}/${cartProduct.product.thumb}`} alt={cartProduct.product.intro}/>
                            <a href={`product/${cartProduct.product._id}`}>{cartProduct.product.intro}</a>
                        </td>
                        <td>{cartProduct.product.price}</td>

                        <td>
                            <div id="product-buy-num" className="d-flex">
                                <i className="bi bi-dash" onClick={()=>decrease(cartProduct)}/>
                                <input value={cartProduct.numInCart} onChange={(e)=>{setNumInCart(cartProduct,parseInt(e.target.value))}}/>
                                <i className="bi bi-plus" onClick={()=>increase(cartProduct)}/>
                            </div>
                        </td>
                        <td>{cartProduct.product.price*cartProduct.numInCart}</td>
                        <td><i className="bi bi-trash" onClick={()=>removeCart(cartProduct._id)}/></td>
                    </tr>
                    )}
            </tbody>
            </table>
        </div>
    )
}

export default CartProducts
