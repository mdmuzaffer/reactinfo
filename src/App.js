import React from 'react'
//import logo from './logo.svg';
import './App.css';
//import React, { Component }  from 'react';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import Contact from './component/Contact';
import Blog from './component/Blog';
import Gallery from './component/Gallery';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    
      <Router>
      <Header />
      <div>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/>
              <Route path="/about-us" component={About}/>
              <Route path="/contact-us" component={Contact}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/gallery" component={Gallery}/>
          </Switch>
      </div>
      <Footer />
      </Router>
    
    </>
  );
}

export default App;
