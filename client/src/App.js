import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Main from './pages/Main/Main';
import MyWords from './pages/MyWords/MyWords';




class App extends Component {
  render() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component ={Main} />
          <Route path='/mywords' exact component={MyWords}/> 
          <Route path='/:word' component = {Main}/>
        </Switch>
        <NavBar/>
      </BrowserRouter>
    </div>
  );
}}
export default App;
