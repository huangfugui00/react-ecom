import './App.css';
import { useState} from 'react'
import RouteRequiresLogin from './components/auth'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from'./pages/home/Home'
import Shop from'./pages/shop/Shop'
import ShopCart from './pages/shopCart/ShopCart'
import ProductDetail from './pages/productDetail/ProductDetail'
import Order from'./pages/order/Order'
import OrderList from './pages/orderList/OrderList'
import Header from './components/Header'
import Footer from './components/Footer'
import {cartProductType} from './pages/shopCart/ShopCart'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react';


export type contactType = {
  phone:string,
  address:string,
}

export type productType = {
  _id:string,
  thumb:string,
  imgs?:string[],
  intro:string,
  description:string,
  price:number,
  category:string,
  tags?:string[],
  favorite:number,
  createdAt:string,
  averageRate:number,
  rate:number,
}

export type userType = {
  islogin:boolean,
  _id:string,
  avatar:string,
  username:string,
}

type userContextType = {
  user:userType,
  setUser:(user:userType)=>void,
}

type orderContextType={
  order:cartProductType[],
  setOrder:(order:cartProductType[])=>void
}


export const userContext = React.createContext({} as userContextType)
export const orderContext = React.createContext({} as orderContextType)


function App() {

  const [user,setUser]=useState(
    {
      islogin:true,
      _id:'61361f77c1cc31c6ef7b39d5',
      avatar:'/static/avatar/61361f77c1cc31c6ef7b39d5/banner-04.jpg',
      username:'hfg',
    }
  )

  
  const [order,setOrder] = useState(
    [] as cartProductType[]
  )

  const [contact] = useState(
    {
        phone:"123456",
        address:"广州市番禺区"
    } as contactType
  )

  

  return (
    <Router>
      <userContext.Provider value={{user,setUser}}>
      <Header/>
        <Switch>
          <Route path="/register"  component={Register}/>
          <Route path="/login"  component={Login}/>
          <Route path="/shop"  component={Shop}/>
          <Route path="/product/:id" component={ProductDetail} exact/> 
          <Route path="/" exact component={Home}/>  
          <orderContext.Provider value={{order,setOrder}}>
            <RouteRequiresLogin path='/cart' component={ShopCart}/>   
            <RouteRequiresLogin path='/order' component={Order}/>         
            <RouteRequiresLogin path='/orderList' component={OrderList}/>         
          </orderContext.Provider>
        </Switch>
        <Footer contact={contact} />
      </userContext.Provider>
    </Router>
  );
}

export default App;
