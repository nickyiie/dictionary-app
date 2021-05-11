import axios from 'axios';
import React, { Component } from 'react';
import './MyWords.scss';

class MyWords extends Component {
  state = {
    savedWords: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/mywords')
      .then(res => {
        this.setState({
          savedWords: res.data
        })
      });
  };

  // deleteWord = (id) => {
  //   axios.delete(`http://localhost:8080/mywords/${id}`)
  //   .then (
  //     axios.get('http://localhost:8080/mywords/')
  //     .then(res => {
  //       this.setState({
  //         savedWords: res.data
  //       })
  //     })
  //   )
  // }
  
  render() {
  if (this.state.savedWords === []) {
    return <div> Loading... </div>
  }

  const myWords = this.state.savedWords.map((word) => {
    return (
      <li key={word.id} className="my-words__item">
        <h1 className="my-words__title">{word.word}</h1>
        <p className="my-words__type">{word.partOfSpeech}</p>
        <p className='my-words__definition'>{word.definition}</p>
        <div className="my-words__synonyms">
        {word.synonym.map (s => <li key={word.id} className='info__synonym'>{s}</li>)}
        {/* <button className="my-words__button" onClick={() => {this.deleteWord(word.id)}}>X</button> */}
      </div>
      </li>
    )
  });

  return (
    <div className="my-words">
      <ul className="my-words__list">{myWords}</ul>
    </div>
  )}
};

export default MyWords;