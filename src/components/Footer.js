import React from 'react'
import './Footer.scss'


const Categories = ()=>{
    return(
        <div className="categories col-xl-3 col-md-6">
            <h4>CATEGORIES</h4>
            <ul>
                <li>
                    <a>Women</a>
                </li>
                <li>
                    <a>Men</a>
                </li>
                <li>
                    <a>Shoes</a>
                </li>
                <li>
                    <a>Watchs</a>
                </li>
            </ul>
        </div>
    )
}


const Help = ()=>{
    return(
        <div className="help col-xl-3 col-md-6">
            <h4>HELP</h4>
            <ul>
                <li>
                    <a>Track Order</a>
                </li>
                <li>
                    <a>Returns</a>
                </li>
                <li>
                    <a>Shipping</a>
                </li>
                <li>
                    <a>FAQs</a>
                </li>
            </ul>
        </div>
    )
}


const Touch = ({contact})=>{
    return(
        <div className="touch col-xl-3 col-md-6">
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
        <div className="newsletter col-xl-3 col-md-6">
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


const Footer = ({contact}) => {
    return (
        <div className="footer">
            <div className="main row">
                <Categories /> 
                <Help/>
                <Touch contact={contact}/>
                <Newsletter/>
            </div>
        </div>
    )
}

export default Footer
