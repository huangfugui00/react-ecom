import './App.css';
import { useState} from 'react'
import Home from'./pages/home/Index'
import Shop from'./pages/shop/Shop'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [contact] = useState(
    {
        phone:"123456",
        address:"广州市番禺区"
    }
  )

  const [products] = useState(
    [
      {
          img:"/assests/images/product-01.jpg",
          intro: "Esprit Ruffle Shirt",
          price:"16.64",
          category:"women",
      },
      {
          img:"/assests/images/product-02.jpg",
          intro: "Herschel supply",
          price:"35.31",
          category:"women",
      },
      {
          img:"/assests/images/product-03.jpg",
          intro: "Herschel supply",
          price:"24.23",
          category:"man",
      },
      {
          img:"/assests/images/product-06.jpg",
          intro: "Herschel supply",
          price:"24.23",
          category:"women",
      },
      {
          img:"/assests/images/product-08.jpg",
          intro: "Herschel supply",
          price:"21.23",
          category:"watch",
      },
    ]
  )
  return (
    <Router>
      <Header/>
        <Switch>
          {/* <Route path="/shop"  component={Shop}/> */}
          <Route path="/shop">
            <Shop products={products}/>
          </Route>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer contact={contact} />
    </Router>
  );
}

export default App;
