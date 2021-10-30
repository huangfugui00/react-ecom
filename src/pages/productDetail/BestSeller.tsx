import React from 'react'
import './BestSeller.scss'
import {productType} from '../../App'
import Product from '../../components/Product'
type bestSellersProp = {
    bestSellers:productType[]
}


const BestSeller = ({bestSellers}:bestSellersProp):JSX.Element => {
    return (
        <div className="best-seller">
            <h2>Best Seller</h2>
            <div className="row" id="best-seller-images">
                   {bestSellers.slice(0,4).map((bestSeller,index)=>
                    <div className="col-xl-3 col-md-6">
                        <Product product={bestSeller}/>
                    </div>
                   )}
            </div>
        </div>
    )
}

export default BestSeller
