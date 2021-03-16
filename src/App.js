
import './App.css';
import Header from './component/Header/header';
import Shop from './component/shop/shop';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/NotFound/NotFound';
import ProductDetails from './component/Productdetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>

          <Route path='/review'>
            <Review></Review>
          </Route>

          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>

          <Route exact path='/'> 
            <Shop></Shop>
          </Route>

          <Route path='/product/:productKey'>
            <ProductDetails></ProductDetails>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

          
        </Switch>
      </Router>
      
    </div>
  );
}


export default App;
