import './Filters.scss'
const SortByType = ()=>{
    return(
        <div className=" col-xl-3 col-md-6">
            <h4>Sort By</h4>
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
        <div className=" col-xl-3 col-md-6">
            <h4>Price</h4>
            <ul>
                <li>
                    <a>All</a>
                </li>
                <li>
                    <a>$0.00-$50.00</a>
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


const Touch = ({contact})=>{
    return(
        <div className=" col-xl-3 col-md-6">
            <h4>GET IN TOUCH</h4>
            <p>Any questions?Let us know in store at {contact.address} or call us at {contact.phone}</p>
            <ul>
                <li>
                    <i className="bi bi-facebook"></i>
                </li>
                <li>
                    <i className="bi bi-twitter"></i>
                </li>
                <li>
                    <i className="bi bi-youtube"></i>
                </li>
            </ul>
        </div>
    )
}


const Newsletter = ()=>{
    return(
        <div className=" col-xl-3 col-md-6">
             <h4>NEWSLETTER</h4>
             <form>
                <div className="">
                    <input className=""   name="email" placeholder="email@example.com"/>
                    <button>
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    )
}


const Filters = ({display,tags}) => {
    return (
        <div className="shop-filter" style={{display: display}}>
            <div className="row">
                <SortByType /> 
                <Price/>
                {/* <Touch contact={contact}/> */}
                <Newsletter/>
            </div>
        </div>
    )
}

export default Filters