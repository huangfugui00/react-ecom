import React, {useState,useEffect} from 'react'
import Categories from './Categories'
import TagButton from './TagButton'
import Search from './Search'
import Filters from './Filters'
import Products from './Products'
import {productType} from '../../App'
import productServices from '../../services/product'
import './Shop.scss'



const Shop = () : JSX.Element => {
    const [products,setProducts] = useState([] as productType[])
    
    useEffect(() => {
        async function fectProducts(){
            const result =  await productServices.getProducts()
            if(result.status===1){
                for(let i = 0;i<result.data.length;i++){
                    if (result.data[i].category)
                        result.data[i].category =  result.data[i].category.title}
                setProducts(result.data)
                console.log(products)
            }
        }
        fectProducts()
    }, [])

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
    const [tagSel,setTagSel] = useState('')
    const [searchItem,setSearchItem] = useState('')
    const [sortTypeSel,setSortTypeSel]= useState('')
    const [priceSel,setPriceSel]= useState([] as number[])


    let displayProducts = categorySel==='All'?products:products.filter(product => product.category === categorySel)
    displayProducts = tagSel===''?displayProducts:displayProducts.filter(product => product.tags?.includes(tagSel))
    displayProducts = searchItem===''?displayProducts:displayProducts.filter(product => product.intro?.includes(searchItem))
    displayProducts = JSON.stringify(priceSel)===JSON.stringify([])?displayProducts:displayProducts.filter(product => product.price>=priceSel[0]&&product.price<=priceSel[1])
    

    const clickPriceSelEvent = (price:number[])=>{
        JSON.stringify(priceSel)===JSON.stringify(price)?setPriceSel([]):setPriceSel(price)
    }
    
    const clickSortTypeEvent = (sortType:string)=>{
        sortType===sortTypeSel?setSortTypeSel(''):setSortTypeSel(sortType)
    }

    const clickCategorySelEvent = (category:string)=>{
        setCategorySel(category)
    }
    const clickTagSelEvent = (tag:string)=>{
        tag===tagSel?setTagSel(''):setTagSel(tag)
    }
    const searchChangeEvent = (searchInputItem:string)=>{
        setSearchItem(searchInputItem)
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
                <Search display={displaySearch} searchItem={searchItem} searchChangeEvent={searchChangeEvent}/>
                <Filters display={displayFilters} tags={tags} 
                tagSel={tagSel} clickTagSelEvent={clickTagSelEvent}
                priceSel={priceSel} clickPriceSelEvent={clickPriceSelEvent}
                sortTypeSel={sortTypeSel} clickSortTypeEvent={clickSortTypeEvent}
                />
                <Products products={displayProducts}/>
            </div>    
        </div>  
    )
}

export default Shop
