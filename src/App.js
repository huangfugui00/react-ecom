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
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/shop"  component={Shop}/>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer contact={contact} />
    </Router>
  );
}

export default App;
