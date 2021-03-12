import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Main from './component/Main/Main';




class App extends Component {


  render() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Main}/>
          {/* <Route path='/' component={}/>
          <Route path='/'  component={}/>  */}
        </Switch>
        <NavBar/>
      </BrowserRouter>
    </div>
  );
}}

export default App;
