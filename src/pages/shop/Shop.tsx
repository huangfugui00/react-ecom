import React, {useState,useEffect} from 'react'
import Categories from './Categories'
import TagButton from './TagButton'
import Search from './Search'
import Filters from './Filters'
import Products from './Products'
import {productType} from '../../App'
import './Shop.scss'


type shopProp = {
    products:productType[]
}


const Shop = ({products}:shopProp) : JSX.Element => {
    const categories =[...new Set(products.map((product) =>product.category))]
    let tags: string[] = []
    for(let i =0;i<products.length;i++) {
        if( products[i].tags !==undefined ) {
            products[i].tags?.forEach(element=>tags.push(element))
        }
    }
    tags=[...new Set(tags)]
    const [displaySearch,setDisplaySearch ] = useState('none')
    const [displayFilters,setDisplayFilters ] = useState('none')
    const [categorySel,setCategorySel] = useState('All')
    const displayProducts = categorySel==='All'?products:products.filter(product => product.category === categorySel)

    const clickCategorySelEvent = (category:string)=>{
        setCategorySel(category)
    }

    const clickSearchBtnEvent = ()=>{
        if(displaySearch==='none'){
            setDisplaySearch('flex')
        }
        else{
            setDisplaySearch('none')
        }
        setDisplayFilters('none')
    }

    const clickFiltersBtnEvent = ()=>{
        if(displayFilters==='none'){
            setDisplayFilters('flex')
        }
        else{
            setDisplayFilters('none')
        }
        setDisplaySearch('none')
    }



    return (
        <div className="shop">
            <div className="shop-content">
                <div className="shop-category-tag d-flex justify-content-between">
                    <Categories categories={categories} categorySel={categorySel} clickCategorySelEvent={clickCategorySelEvent}/>
                    <TagButton 
                    clickSearchBtnEvent={clickSearchBtnEvent}
                    clickFiltersBtnEvent={clickFiltersBtnEvent}
                    />
                </div>  
                <Search display={displaySearch}/>
                <Filters display={displayFilters} tags={tags}/>
                <Products products={displayProducts}/>
            </div>    
        </div>  
    )
}

export default Shop
