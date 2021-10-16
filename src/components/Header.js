import defaultAvatar from '../assests/images/icons/logo-01.png'
import './Header.css';

const Header = () => {
    return (
        <div>
            <header className="container-header">
                <nav className="row navbar navbar-expand-lg ">
                    {/* icon name */}
                    <div className="col-1">
                        <a href="#" className="brand " >
                            <img src={defaultAvatar} alt="IMG-LOGO"  />
                        </a>
                    </div>
                    

                    {/* nav */}
                    <div className="col-4 collapse navbar-collapse " id="navbarsExample04">
                       
                        <ul className="row">
                            <li className="col ">
                                <a className='a-header-item' href="product.html">Shop</a>
                            </li>

                            <li  className="col"  data-label1="hot">
                                <a className='a-header-item' href="shoping-cart.html">Features</a>
                            </li>

                            <li className="col">
                                <a  className='a-header-item' href="blog.html">Blog</a>
                            </li>

                            <li className="col">
                                <a className='a-header-item' href="about.html">About</a>
                            </li>

                            <li className="col">
                                <a className='a-header-item' href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/* icon group */}
                    <div className="col d-flex justify-content-end ">
                        <div className="row">
                           
                            <div className="col p-r-30 icon-header-item hov-cl1">
                                <i className="zmdi zmdi-search"></i>
                            </div>
                         
                            <div className="col p-r-30 icon-header-item hov-cl1" data-notify="2">
                                <i className="zmdi zmdi-shopping-cart"></i>
                            </div>
                            
                            <div className="col icon-header-item hov-cl1">
                                <i className="zmdi zmdi-menu"></i>
                            </div>
 
                        </div>
                    
                    </div>  
                </nav>
                
            </header>   
        </div>
    )
}

export default Header
