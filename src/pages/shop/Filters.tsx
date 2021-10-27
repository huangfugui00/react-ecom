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
}

const Tags = ({tags}:tagsProp):JSX.Element=>{
    return(
        <div className="shop-filter-by-tag col-xl-3 col-md-6">
            <h5>Tags</h5>          
            <div className="row">
                {tags.map((tag)=>
                    <button className="col">
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
}


const Filters = ({display,tags}:filtersProp):JSX.Element => {
    return (
        <div className="shop-filter" style={{display: display}}>
            <div className="row justify-content-between gap-4 w-100">
                <SortByType /> 
                <Price/>
                <Tags tags={tags}/>
            </div>
        </div>
    )
}

export default Filters