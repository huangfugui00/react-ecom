import React, {useState,useEffect} from 'react'
import Categories from './Categories'
import TagButton from './TagButton'
import Search from './Search'
import Filters from './Filters'
import Products from './Products'
import {productType} from '../../App'
import productServices from '../../services/product'
import './Shop.scss'

const sortDisplayProduct = (displayProducts:productType[],sortTypeSel:string)=>{
    if(sortTypeSel === 'Price:Low to High'){
        return displayProducts.sort((a,b)=>a.price-b.price)
    }
    if(sortTypeSel === 'Price:High to Low'){
        return displayProducts.sort((a,b)=>b.price-a.price)
    }
    if(sortTypeSel === 'Popularity'){
        return displayProducts.sort((a,b)=>b.favorite-a.favorite)
    }
    if(sortTypeSel === 'Newness'){
        return displayProducts.sort((a,b)=>Number(new Date(b.createdAt))-Number(new Date(a.createdAt)) )
    }
    if(sortTypeSel === 'Average rating'){
        return displayProducts.sort((a,b)=>b.rate-a.rate)
    }
    return displayProducts
}

const Shop = () : JSX.Element => {
    useEffect(() => {
        async function fectProducts(){
            const result =  await productServices.getProducts()
            if(result.status===1){
                const productsFromApi = result.data
                for(let i = 0;i<productsFromApi.length;i++){
                    if (productsFromApi[i].category)
                        productsFromApi[i].category =  productsFromApi[i].category.title}
                    //to rate from comment
                for(let i = 0;i<productsFromApi.length;i++){    
                    productsFromApi[i]['rate'] = 0
                    if(productsFromApi[i].comments.length>0){
                       const commentNum = productsFromApi[i].comments.length
                       let rateSum = 0
                       for(let j =0 ;j<commentNum;j++){
                        const comment =productsFromApi[i].comments[j]
                        rateSum = rateSum+comment.rate
                       }
                       const averageRate = rateSum/commentNum;
                       productsFromApi[i]['rate'] = averageRate
                    }
                }
                setProducts(productsFromApi)
            }
        }
        fectProducts()
    }, [])

    const [products,setProducts] = useState([] as productType[])
    const [displaySearch,setDisplaySearch ] = useState('none')
    const [displayFilters,setDisplayFilters ] = useState('none')
    const [categorySel,setCategorySel] = useState('All')
    const [tagSel,setTagSel] = useState('')
    const [searchItem,setSearchItem] = useState('')
    const [sortTypeSel,setSortTypeSel]= useState('')
    const [priceSel,setPriceSel]= useState([] as number[])

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


    const categories =[...new Set(products.map((product) =>product.category))]

    let tags: string[] = []
    for(let i =0;i<products.length;i++) {
        if( products[i].tags !==undefined ) {
            products[i].tags?.forEach(element=>tags.push(element))
        }
    }
    tags=[...new Set(tags)]
    let displayProducts = products.slice()
    displayProducts = categorySel==='All'?displayProducts:displayProducts.filter(product => product.category === categorySel)
    displayProducts = tagSel===''?displayProducts:displayProducts.filter(product => product.tags?.includes(tagSel))
    displayProducts = searchItem===''?displayProducts:displayProducts.filter(product => product.intro?.includes(searchItem))
    displayProducts = JSON.stringify(priceSel)===JSON.stringify([])?displayProducts:displayProducts.filter(product => product.price>=priceSel[0]&&product.price<=priceSel[1])
    // displayProducts = sortTypeSel === 'Price:Low to High'? displayProducts.sort((a,b)=>a.price-b.price):displayProducts
    // displayProducts = sortTypeSel === 'Price:High to Low'? displayProducts.sort((a,b)=>b.price-a.price):displayProducts
   
    displayProducts = sortDisplayProduct(displayProducts,sortTypeSel)

   

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
