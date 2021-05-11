const express = require('express');
const app = express();
const port = 8080;
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

app.use(express.json());
app.use(cors());

let likedWords = [
  {
    id: '1',
    word : 'discover',
    partOfSpeech: 'verb',
    definition: 'beyond belief or understanding',
    synonym: [ 'detect', 'find', 'notice', 'observe']
  }
];

app.get('/mywords', (req, res) => {
  res.json(likedWords);
});

app.post('/mywords', (req,res) => {
  const { word, partOfSpeech, definition, synonym } = req.body;

  likedWords.push({
    id: uuidv4(),
    word,
    partOfSpeech,
    definition,
    synonym,
  });

  res.json(likedWords);
})

// app.delete('/mywords/:id', (req, res) => {
//   likedWords = likedWords.filter(word => {
//     return word.id === req.params.id
//   })

//   res.json(likedWords);
// })

app.listen(port, () => console.log(`Listening on ${port}`));

