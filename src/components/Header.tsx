import React from 'react';
import defaultAvatar from '../assests/images/icons/logo-01.png'
import './Header.scss';


const Header = () : JSX.Element => {
    return (
        <div>
            <header className="container-header">
                <nav className="row navbar navbar-expand-lg ">
                    {/* icon name */}
                    <div className="col-1 ">
                        <a href="/" className="brand">
                            <img  src={defaultAvatar} alt="IMG-LOGO"  />
                        </a>
                    </div>
                    
                    {/* nav */}
                    <div className="col-4 collapse navbar-collapse " id="navbarsHeader">
                       
                        <ul className="row">
                            <li className="col ">
                                <a className='' href="/shop">Shop</a>
                            </li>

                            <li  className="col"  data-label1="hot">
                                <a className='' href="/products">Features</a>
                            </li>

                            <li className="col">
                                <a  className='' href="/shopCart">Blog</a>
                            </li>

                            <li className="col">
                                <a className='' href="/order">Order</a>
                            </li>

                            <li className="col">
                                <a className='' href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/* icon group */}
                    <div className="col d-flex justify-content-end " id="iconHeader">
                        <div className="row">
                           
                            <div className="col  ">
                                <i className="bi bi-search"></i>
                            </div>
                         
                            <div className="col" data-notify="2">
                                <i className="bi bi-cart-fill "></i>
                            </div>
                            
                            <div className="col ">
                                <i className="bi bi-heart "></i>
                            </div>
 
                        </div>
                    
                    </div>  
                </nav>
                
            </header>   
        </div>
    )
}

export default Header
