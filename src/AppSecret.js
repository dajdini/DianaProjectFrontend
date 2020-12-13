import './App.css';
/*<Route path='/services' component={Services} /> */
import {Container} from '@material-ui/core'
import { ToastProvider } from "react-toast-notifications"
import {store} from "./actions/store";
import {Provider} from 'react-redux';
import Bookings from './components/Bookings';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//AppSecret.js for the adminpage/add times page
function AppSecret() {
  return (
    <Provider store={store}>
        <ToastProvider autoDismiss={true}>
        <Container maxWidth="ld">
        <Bookings/></Container>
        </ToastProvider>
      </Provider>
  );
}

export default AppSecret;

    /*<Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/information' exact component={Info}/>
      <Route path='/booking' exact component={Booking}/>
      <Route path='/bookings' exact component={Bookings}/>
    </Switch>
    <Footer />
    </Router>
        <Router>
        <Switch>
        <Route path='/bookings' exact component={Bookings}/>
        </Switch>
        </Router>*/
