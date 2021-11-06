import './App.css';
import { useState,useEffect} from 'react'
import Home from'./pages/home/Home'
import Shop from'./pages/shop/Shop'
import ShopCart from './pages/shopCart/ShopCart'
import ProductDetail from './pages/productDetail/ProductDetail'
import Order from'./pages/order/Order'
import Header from './components/Header'
import Footer from './components/Footer'

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


function App() {


  const [contact] = useState(
    {
        phone:"123456",
        address:"广州市番禺区"
    } as contactType
  )

  const [products,setProducts] = useState(
    [
      {
          thumb:"/assests/images/product-01.jpg",
          imgs:['assests/images/product-detail-01.jpg',
              'assests/images/product-detail-02.jpg',
              'assests/images/product-detail-03.jpg',
                ],
          intro: "Esprit Ruffle Shirt",
          description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
          price:16.64,
          category:"Women",
          tags:['Fashion','Lifestyle'], 
      },
      {
        thumb:"/assests/images/product-02.jpg",
          intro: "Ruffle supply",
          price:35.31,
          category:"Women",
          tags:['Fashion','Crafts'],
      },
      {
        thumb:"/assests/images/product-03.jpg",
          intro: "Herschel watch",
          price:24.23,
          category:"Man",
          tags:['Demin','Crafts'],
      },
      {
        thumb:"/assests/images/product-06.jpg",
          intro: "Herschel supply",
          price:24.23,
          category:"Women",
          tags:['Streetstyle','Crafts'],
      },
      {
        thumb:"/assests/images/product-08.jpg",
          intro: "Herschel supply",
          price:21.23,
          category:"Watch",
          tags:['Young'],
      },
    ] as productType[]
  )


  // useEffect(() => {
  //   async function fectProducts(){
  //     const result =  await productServices.getProducts()
  //     if(result.status===1){
  //       setProducts(result.data)
  //     }
      
  //   }
  //   fectProducts()
  // }, [])

  return (
    <Router>
      <Header/>
        <Switch>
          {/* <Route path="/shop"  component={Shop}/> */}
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/products">
            <ProductDetail product={products[0]}/>
          </Route>
          <Route path="/shopCart">
            <ShopCart/>
          </Route>
          <Route path="/order">
            <Order/>
          </Route>
          
          <Route path="/" component={Home}/>         
         
        </Switch>
        <Footer contact={contact} />
    </Router>
  );
}

export default App;
