import './Products.scss'
import React from 'react'
import Product from '../../components/Product'

const Products = ({products}) => {
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
