<<<<<<< HEAD
import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';



class App extends Component {


  render() {
  return (
    <div className="app">
      <BrowserRouter>
         <NavBar/>
        <Switch>
          <Route path='/' exact component={}/>
          <Route path='/' component={}/>
          <Route path=''  component={}/> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}}

export default App;
=======

import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react'
import Main from './component/Main/Main';





class App extends Component {
  render() {
    return (
        <div>
          <h1>Discover</h1>         
         
            <Main/>
        
        </div>
    );
  }
}

export default App
>>>>>>> 14cb3f318e6353b589b1d94c6aeb0ddd81f6d8ee
