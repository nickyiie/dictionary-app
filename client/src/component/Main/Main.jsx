import React, { Component } from 'react';
import Form from '../Form/Form';

class Main extends Component {
   state = {
       search : ''
   }

   
    render() {
        return (
            <div>
                <Form/>

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