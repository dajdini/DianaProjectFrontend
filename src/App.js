import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/HomePage/Home';
import Footer from './components/Footer/Footer';
import Info from './components/InfoPage/Info';
import Booking from './components/BookingsPage/Booking';
/*<Route path='/services' component={Services} /> */
import React from 'react';
import Secret from './AppSecret';


function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/information' exact component={Info}/>
      <Route path='/booking' exact component={Booking}/>
      <Route path='/bookings' exact component={Secret}/>
    </Switch>
    <Footer />
    </Router>
      /*
      <Provider store={store}>
      <ToastProvider autoDismiss={true}>
      <Container maxWidth="ld">
      <Bookings/></Container>
      </ToastProvider>
      </Provider>*/
  );
}

export default App;
