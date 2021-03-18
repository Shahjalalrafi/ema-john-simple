
import Header from './component/Header/header';
import Shop from './component/shop/shop';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/NotFound/NotFound';
import ProductDetails from './component/Productdetails/ProductDetails';
import Shipment from './component/Shipment/Shipment';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const userContext = createContext({})

function App() {
  const [logedInUser, setLogedInUser] = useState({})

  return (
    <userContext.Provider value={[logedInUser,setLogedInUser]} className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>

          <Route path='/review'>
            <Review></Review>
          </Route>

          <PrivateRoute path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute path='/inventory'>
            <Inventory></Inventory>
          </PrivateRoute>

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
      
    </userContext.Provider>
  );
}


export default App;
