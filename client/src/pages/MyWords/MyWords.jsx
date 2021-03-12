import axios from 'axios';
import React, { Component } from 'react';

class MyWords extends Component {
  state = {
    savedWords: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/mywords')
      .then(res => { console.log(res.data)
        this.setState({
          savedWords: res.data
        })
      });
  };
  
  render() {
  if (this.state.savedWords === []) {
    return <div> Loading... </div>
  }
  return (
    <div className="my-words">
      <h1 className="my-words__title">{this.state.savedWords.word}</h1>
    </div>
  )}
}

export default MyWords;