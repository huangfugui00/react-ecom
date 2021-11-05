import './Filters.scss'
const SortByType = ()=>{
    return(
        <div className="shop-sort-by-type col-xl-3 col-md-6">
            <h5>Sort By</h5>
            <ul>
                <li>    
                    <a>Default</a>
                </li>
                <li>
                    <a>Popularity</a>
                </li>
                <li>
                    <a>Average rating</a>
                </li>
                <li>
                    <a>Newness</a>
                </li>
                <li>
                    <a>Price:Low to High</a>
                </li>
                <li>
                    <a>Price:High to Low</a>
                </li>
            </ul>
        </div>
    )
}


const Price = ()=>{
    return(
        <div className="shop-sort-by-price col-xl-3 col-md-6">
            <h5>Price</h5>
            <ul>
                <li>
                    <a>All</a>
                </li>
                <li>
                    <a>$0.00 - $50.00</a>
                </li>
                <li>
                    <a>$50.00-$100.00</a>
                </li>
                <li>
                    <a>$100.00-$200.00</a>
                </li>
                <li>
                    <a>$200.00+</a>
                </li>
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
    clickTagSelEvent:(tagSel:string)=>void
}


const Filters = ({display,tags,tagSel,clickTagSelEvent}:filtersProp):JSX.Element => {
    return (
        <div className="shop-filter" style={{display: display}}>
            <div className="row justify-content-between gap-4 w-100">
                <SortByType /> 
                <Price/>
                <Tags tags={tags} tagSel={tagSel} clickTagSelEvent={clickTagSelEvent}/>
            </div>
        </div>
    )
}

export default Filters