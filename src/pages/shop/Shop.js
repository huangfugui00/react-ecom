import {React,useState} from 'react'
import Categories from './Categories'
import TagButton from './TagButton'
import Search from './Search'
import './Shop.scss'


const Shop = ({products}) => {
    const categories =[...new Set(products.map((product) =>product.category))]
    const [displaySearch,setDisplaySearch ] = useState('none')
    // const [displaySearch,setDisplaySearch ] = useState('none')

    const clickSearchBtnEvent = ()=>{
        if(displaySearch==='none'){
            setDisplaySearch('flex')
        }
        else{
            setDisplaySearch('none')
        }
    }

    return (
        <div className="shop">
            <hr/>
            <div className="shop-content">
                <div className="shop-category-tag d-flex justify-content-between">
                    <Categories categories={categories}/>
                    <TagButton clickSearchBtnEvent={clickSearchBtnEvent}/>
                </div>  
                <Search display={displaySearch}/>
            </div>    
        </div>  
    )
}

export default Shop
