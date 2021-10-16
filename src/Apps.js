
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NoPageFound from './components/NoPageFound/NoPageFound';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Cart from './components/Cart/Cart';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Delivery from './components/Delivery/Delivery';

function Apps() {
  
  return (
   <AuthProvider>
      <BrowserRouter>
    <Header/>
       <Switch>
       <Route path="/login">
        <Login></Login>
         </Route>
         <Route path="/signup">
        <SignUp></SignUp>
         </Route>
         <PrivateRoute path="/delivery">
        <Delivery></Delivery>
         </PrivateRoute>
         <Route path="/home">
         <Home></Home>
         </Route>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route path="/placeorder/:mealId">
         <PlaceOrder></PlaceOrder>
         </Route>
         <PrivateRoute path="/cart/:cartId">
         <Cart></Cart>
         </PrivateRoute>
       <Route exact path="*">
         <NoPageFound></NoPageFound>

       </Route>
      
        
       </Switch>
       <Footer></Footer>
  
    </BrowserRouter>
  
   </AuthProvider>
   
    
  );
}

export default Apps;
