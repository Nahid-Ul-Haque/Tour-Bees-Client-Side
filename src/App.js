
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import AddNewOffer from './Components/Connections/Add A New Offer/AddNewOffer';
import ManageAllOrders from './Components/Connections/Manage All Orders/ManageAllOrders';
import Contacts from './Components/Contacts/Contacts';
import Error from './Components/Error 404/Error';
import Home from './Components/Home/Home';
import Register from './Components/Login/Register/Register';
import OfferDetails from './Components/OfferDetails/OfferDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/details/:detailsId'>
              <OfferDetails></OfferDetails>
            </PrivateRoute>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/manageorders'>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path='/addoffers'>
              <AddNewOffer></AddNewOffer>
            </Route>
            <PrivateRoute path='/contacts'>
              <Contacts></Contacts>
            </PrivateRoute>
            <PrivateRoute path='/cart'>
              <Cart></Cart>
            </PrivateRoute>
            <Route exact path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
