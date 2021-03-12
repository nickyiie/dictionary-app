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
