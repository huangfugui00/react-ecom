import './Filters.scss'
import config from '../../config/config'

const clickStyle: React.CSSProperties = {textDecoration:'underline',color:'rgba(103,117,214,0.8)'}
const nullStyle: React.CSSProperties = {}

type SortByTypeProp={
    sortTypeSel:string,
    clickSortTypeEvent:(sortType:string)=>void
}

const SortByType = ({sortTypeSel,clickSortTypeEvent}:SortByTypeProp)=>{
    return(
        <div className="shop-sort-by-type col-xl-3 col-md-6">
            <h5>Sort By</h5>
            <ul>
                {config.sortTypes.map(sortType=>
                <li style={sortType === sortTypeSel?clickStyle:nullStyle}
                onClick={()=>clickSortTypeEvent(sortType)}>
                     <span>{sortType}</span>
                </li>)
                }
            </ul>
        </div>
    )
}


type priceProp = {
    priceSel:number[],
    clickPriceSelEvent:(priceSel:number[])=>void
}

const Price = ({priceSel,clickPriceSelEvent}:priceProp)=>{
    return(
        <div className="shop-sort-by-price col-xl-3 col-md-6">
            <h5>Price</h5>
            <ul>
                {config.prices.map(price=>
                <li style={JSON.stringify(priceSel)===JSON.stringify(price)?clickStyle:nullStyle} 
                onClick={()=>clickPriceSelEvent(price)}>
                    <span>{price.length===2? `$${price[0]}-$${price[1]}`:`$${price[0]}+`}</span>
                </li>)
                }
            </ul>
        </div>
    )
}

type tagsProp = {
    tags:string[],
    tagSel:string,
    clickTagSelEvent:(tagSel:string)=>void,
}

const Tags = ({tags,tagSel,clickTagSelEvent}:tagsProp):JSX.Element=>{
    const clickStyle: React.CSSProperties = {color:'white',backgroundColor:'rgba(103,117,214,0.8)'}
    const nullStyle: React.CSSProperties = {}
    
    return(
        <div className="shop-filter-by-tag col-xl-3 col-md-6">
            <h5>Tags</h5>          
            <div className="row">
                {tags.map((tag)=>
                    <button className="col" style={tagSel===tag?clickStyle:nullStyle} onClick={()=>{clickTagSelEvent(tag)}}>
                        {tag}
                    </button>
                )}
            </div>                        
        </div>
    )
}


type filtersProp = {
    display:string,
    tags:string[],
    tagSel:string,
    clickTagSelEvent:(tagSel:string)=>void,
    priceSel:number[],
    clickPriceSelEvent:(tagSel:number[])=>void,
    sortTypeSel:string,
    clickSortTypeEvent:(sortTypeSel:string)=>void,
}


const Filters = ({display,tags,tagSel,clickTagSelEvent,priceSel,clickPriceSelEvent,sortTypeSel,clickSortTypeEvent}:filtersProp):JSX.Element => {
    return (
        <div className="shop-filter" style={{display: display}}>
            <div className="row justify-content-between gap-4 w-100">
                <SortByType sortTypeSel={sortTypeSel} clickSortTypeEvent={clickSortTypeEvent}/> 
                <Price priceSel={priceSel} clickPriceSelEvent={clickPriceSelEvent}/>
                <Tags tags={tags} tagSel={tagSel} clickTagSelEvent={clickTagSelEvent}/>
            </div>
        </div>
    )
}

export default Filters