import React,{useContext,useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import {userContext} from '../../App'
import defaultAvatar from '../../assests/images/icons/logo-01.png'
import IconText from '../../components/IconText'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountMenu from './AccountMenu'
import CartDrawer from './CartDrawer'
import cartServices from '../../services/cart'
import {cartProductType} from '../../pages/shopCart/ShopCart'
import './Header.scss';


const Header = () : JSX.Element => {
    const {user}= useContext(userContext)
    const [showCart,setShowCart] = useState(false)
    const [cartProducts,setCartProducts] = useState([] as cartProductType[])
    
    useEffect(() => {
        const fetchCart = async()=>{
            const result = await cartServices.getCart()        
            if(result.status===1){
                const cartsFromApi = result.data
                for(let i = 0 ;i<cartsFromApi.length;i++){
                    cartsFromApi[i].product = cartsFromApi[i].productId
                }
                setCartProducts(cartsFromApi)
            }
        }
        fetchCart()
    }, [])
  
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
                                <a  className='' href="/cart">Blog</a>
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
                    <div className="col d-flex justify-content-end align-items-center" id="iconHeader">
                        <div className="row">
                           
                            <div className="col"  >
                            {user.islogin? <Badge id="badge" badgeContent={cartProducts.length} color="secondary" onClick={()=>setShowCart(!showCart)}>
                                <ShoppingCartIcon id="cart-icon" color="action" />
                            </Badge>:<></>}
                           
                            <CartDrawer
                             showCart={showCart}
                             closeEvent={()=>setShowCart(false)}
                             cartProducts={cartProducts}
                             setCartProducts={setCartProducts}
                            />
                            </div>
                          
                            <div className="col">
                                {
                                 user.islogin?  <AccountMenu userName={user.username} avatar={user.avatar}/>:
                                <Link  to={"/login"} className="my-link">
                                    <IconText icon={'bi-person'} text={'Login'}/>
                                </Link>
                                }
                                
                            </div>
 
                        </div>
                    
                    </div>  
                </nav>
                
            </header>   
        </div>
    )
}

export default Header
