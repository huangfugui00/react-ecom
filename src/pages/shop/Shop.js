import React from 'react'
import Categories from './Categories'
import TagButton from './TagButton'
import './Shop.scss'


const Shop = ({products}) => {
    const categories =[...new Set(products.map((product) =>product.category))]
    return (
        <div className="shop">
            <hr/>
            <div className="shop-content">
                <div className="nav-category-tag d-flex justify-content-between">
                    <Categories categories={categories}/>
                    <TagButton/>
                </div>  
            </div>    
        </div>  
    )
}

export default Shop
