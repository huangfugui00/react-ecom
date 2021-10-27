
import React from 'react'
import Product from '../../components/Product'
import {productType} from '../../App'
import './Products.scss'

type productsProp ={
    products:productType[]
}

const Products = ({products}:productsProp) : JSX.Element=> {
    return (
        <div className="shop-products row">
            {products.map(product => (
                <div className="col-xl-3 col-md-6" id="shop-products-product">
                    <Product product={product}/>
                </div>
            ))}
        </div>
    )
}

export default Products
