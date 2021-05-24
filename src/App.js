import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Product from './Components/pages/Product';
import SignUp from './Components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact  component={Home} />
         <Route path='/services' component={Services} />
         <Route path='/product' component={Product} />
         <Route path='/sign-up' component={SignUp} />
       </Switch>
      </Router>
    </>
  );
}

export default App;
