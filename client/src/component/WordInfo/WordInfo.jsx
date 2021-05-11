import { v4 as uuidv4 } from 'uuid';
import './WordInfo.scss'
import { Component } from 'react';
import Heart from '../../assets/icons/heart.svg';
import FullHeart from '../../assets/icons/fullheart.svg';
import axios from 'axios';


class WordInfo extends Component {

  state = {
    saved: false,
  }

  toggleImage = (e) => {
    const {word, definition, partOfSpeech, synonyms} = this.props
    e.preventDefault();
    this.setState ({saved: !this.state.saved});
    axios.post('http://localhost:8080/mywords', {
    word: word ,
    partOfSpeech: partOfSpeech,
    definition: definition,
    synonym: synonyms 
    })
    .then(res => (console.log(res)))} 

  changeImage = () => this.state.saved? FullHeart : Heart;

  render() {
  const {word, definition, partOfSpeech, synonyms} = this.props
  const synonymsList = synonyms.map (s => <li key={uuidv4()} className='info__synonym'>{s}</li>)
  return (
    <div className="info">
      <h1 className="info__title">{word.toUpperCase()}</h1>
      <img className="nav-bar__logo" src={this.changeImage()} alt='liked button' onClick={this.toggleImage}/>
      <p className="info__type">{partOfSpeech}</p>
      <p className="info__definition">{definition}</p>
      <ul className="info__synonyms">{synonymsList}</ul>
    </div>
  )}
}

export default WordInfo;