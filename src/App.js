import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div >
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/products" exact component={Product}/>
        <Route path="/sign-up" exact component={SignUp}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
