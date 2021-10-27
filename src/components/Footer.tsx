/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import  './Footer.scss'


const Categories = (): JSX.Element=>{
    return(
        <div className="categories col-xl-3 col-md-6">
            <h4>CATEGORIES</h4>
            <ul>
                <li>
                    <a href="#">Women</a>
                </li>
                <li>
                    <a href="#">Men</a>
                </li>
                <li>
                    <a href="#">Shoes</a>
                </li>
                <li>
                    <a href="#">Watchs</a>
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
                    <a  href="#">Track Order</a>
                </li>
                <li>
                    <a  href="#">Returns</a>
                </li>
                <li>
                    <a  href="#">Shipping</a>
                </li>
                <li>
                    <a  href="#">FAQs</a>
                </li>
            </ul>
        </div>
    )
}


const Touch = ({contact}:props)=>{
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
                    <input  name="email" placeholder="email@example.com"/>
                    <button>
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    )
}

type props={
    contact: {
        address:string,
        phone:string,
    },
}

const Footer = ({contact}:props) => {
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
