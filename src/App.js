import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Home from './Home';
import  Footer from './Footer';
import Navbar from './Navbar';
import {Switch,Route, Redirect } from 'react-router-dom';


const App = () =>{
  return(
    <>

        <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/services" component={Services}/>
    
    <Route exact path="/contact" component={Contact}/>
    <Redirect to="/"/>
   </Switch>
   <Footer/>
    </>
  )
}

export default App;
