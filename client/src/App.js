
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