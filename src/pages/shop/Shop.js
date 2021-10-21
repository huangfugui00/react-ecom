import {React,useState,useEffect} from 'react'
import Categories from './Categories'
import TagButton from './TagButton'
import Search from './Search'
import Filters from './Filters'
import Products from './Products'
import './Shop.scss'


const Shop = ({products}) => {
    const categories =[...new Set(products.map((product) =>product.category))]
    let tags=[]
    for(let i =0;i<products.length;i++) {
        tags=tags.concat(products[i].tags)
    }
    tags=[...new Set(tags)]
    const [displaySearch,setDisplaySearch ] = useState('none')
    const [displayFilters,setDisplayFilters ] = useState('none')
    const [categorySel,setCategorySel] = useState('All')
    const [displayProducts,setDisplayProducts]=useState(products)

    useEffect(()=>{
        if(categorySel === 'All'){
            setDisplayProducts( products )
        }else{
            setDisplayProducts( products.filter(prodcut=>prodcut.category === categorySel))
        }    
    },[categorySel,products])

    const clickCategorySelEvent = (category)=>{
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
            <hr/>
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
