import React,{useEffect,useState} from 'react';
//third-party
import  {Switch,Route,Redirect} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {ClipLoader} from 'react-spinners';
//components
import {
  TheSidebar,
  TheFooter,
  TheHeader
} from './index';

import Dashboard from '../views/dashboard';
import Brands from '../views/brands';
import Brand from '../views/brands/brand';
import AddBrand from '../views/brands/add-brand';
import Vehicles from '../views/vehicles';
import Vehicle from '../views/vehicles/vehicle';
import AddVehicle from '../views/vehicles/add-vehicle';
import Invoices from '../views/purchased-orders';
import {decode} from '../store/user';

const TheLayout = () => {

  const {token,user} = useSelector(state => state.user);
  const [loading,setLoading] = useState(true);
  const [redirect,setRedirect] = useState(false);
  const dispatch = useDispatch();

  useEffect( () => {

    //check if there is a token
    if(!token) {
      setRedirect(true);
      return setLoading(false);
    };

    //check if we got user decoded.
    if(Object.keys(user).length > 0) return setLoading(false);

    //else we decode
    dispatch(decode(token));

    //then we retun 
    return setLoading(false);

  },[dispatch,token,user])

  return (
    redirect ? (
      <Redirect to="/auth/login" />
    ) : (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <div className="container mt-2">
          {
            loading ? (
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 text-center">
                  <ClipLoader color="#009933" size={35} />
                </div>
              </div>
            ) : (
              <Switch>
              <Redirect exact from="/" to="/dashboard"/>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/brands" component={Brands} />
              <Route exact path="/brands/add" component={AddBrand} />
              <Route exact path="/brand/:brand" component={Brand} />
              <Route exact path="/vehicles" component={Vehicles} />
              <Route exact path="/vehicles/add" component={AddVehicle} />
              <Route exact path="/vehicle/:slug" component={Vehicle} />
              <Route exact path="/purchased-orders" component={Invoices} />
            </Switch>
            )
          }          
          </div>
        </div>
        <TheFooter/>
      </div>
    </div>
  ))
}

export default TheLayout
