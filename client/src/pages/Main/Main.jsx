import axios from 'axios';
import React, { Component } from 'react';
import Form from '../../component/Form/Form';
import WordInfo from '../../component/WordInfo/WordInfo';
import SpeechButton from '../../component/SpeechButton/SpeechButton'



class Main extends Component {
   state = {
       search : 'discover',
       partOfSpeech: 'verb',
       definition: 'beyond belief or understanding',
       synonym: []
   }

   formData=(word)=>{
   this.setState({
       search : word
   })
   }

   componentDidMount(){
       const searchWord = this.state.search;
       axios({
           method: 'GET',
            url: `https://wordsapiv1.p.rapidapi.com/words/${searchWord}`,
            headers: {
            'x-rapidapi-key': '94b2209f7emsh1a311bb28b3d72fp12a619jsn056ac9645982',
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
            }
       }).then(res=> {
        console.log(res.data);
        this.setState({
        partOfSpeech: res.data.results[0].partOfSpeech,
        definition: res.data.results[0].definition,
        synonym: res.data.results[0].synonyms
       })})
   }

   componentDidUpdate(prevProps){
    console.log("where is this guy")
    const currProps = this.props.match.params.word;
    if(currProps !== prevProps.match.params.word){
     axios({
         method: 'GET',
             url: `https://wordsapiv1.p.rapidapi.com/words/${currProps}`,
             headers: {
             'x-rapidapi-key': '94b2209f7emsh1a311bb28b3d72fp12a619jsn056ac9645982',
             'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
             }
     }).then(res=> {
         console.log(res.data.results, res.data.results[0].synonyms);
         this.setState({
         search:res.data.word,
         partOfSpeech: res.data.results[0].partOfSpeech,
         definition: res.data.results[0].definition,
         synonym: res.data.results[0].synonyms
     })})
 }
}
   
    render() {
        const {search, definition, partOfSpeech, synonym} = this.state;
        return (
            <div className='main'>
                <Form formData = {this.formData} />
                <WordInfo word= {search} definition={definition} partOfSpeech={partOfSpeech} synonyms={synonym}/>
                <SpeechButton word={this.state.search}/>
            </div>
        );
    }
}

export default Main;

// const options = {
//     method: 'GET',
//     url: 'https://wordsapiv1.p.rapidapi.com/words/cookie',
//     headers: {
//       'x-rapidapi-key': '94b2209f7emsh1a311bb28b3d72fp12a619jsn056ac9645982',
//       'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
//     }
//   };
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });