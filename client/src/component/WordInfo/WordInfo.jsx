import { v4 as uuidv4 } from 'uuid';
import './WordInfo.scss'
function WordInfo ({word, definition, partOfSpeech, synonyms}) {
  const synonymsList = synonyms.map (s => <li key={uuidv4()} className='info__synonym'>{s}</li>)
  return (
    <div className="info">
      <h1 className="info__title">{word.toUpperCase()}</h1>
      <p className="info__type">{partOfSpeech}</p>
      <p className="info__definition">{definition}</p>
      <ul className="info__synonyms">{synonymsList}</ul>
    </div>
  )
}

export default WordInfo;