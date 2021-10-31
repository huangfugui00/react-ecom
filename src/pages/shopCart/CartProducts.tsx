import React from 'react'
import './cartProducts.scss'
import {cartProductType} from './ShopCart'

type cartProductsProp ={
    cartProducts:cartProductType[]
}

const CartProducts = ({cartProducts}:cartProductsProp):JSX.Element => {
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
                        <td><input type="checkbox" id="checkProduct"/></td>
                        <td>
                            <img src={cartProduct.thumb} alt={cartProduct.intro}/>
                            <a href="/#">{cartProduct.intro}</a>
                        </td>
                        <td>{cartProduct.price}</td>

                        <td>
                            <div id="product-buy-num" className="d-flex">
                                <i className="bi bi-dash" />
                                <input value={cartProduct.number} />
                                <i className="bi bi-plus" />
                            </div>
                        </td>
                        {/* <td>{cartProduct.number}</td> */}
                        <td>{cartProduct.price*cartProduct.number}</td>
                        <td><i className="bi bi-trash"/></td>
                    </tr>
                    )}
            </tbody>
            </table>
        </div>
    )
}

export default CartProducts
