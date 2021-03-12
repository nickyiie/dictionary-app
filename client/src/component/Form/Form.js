import e from 'cors';
import React, { Component } from 'react';

class Form extends Component {

  state = {
      word :''
  }

  handleChange=(e)=>{
      e.preventDefault();
      this.setState({
          word: e.target.value
      })
      
  }

  hanldeSubmit=(e)=>{
    //   console.log(this.props.formData)
      e.preventDefault();
      this.props.formData(this.state.word);
      this.setState({
          word:''
      })
  }

    render() {
        return (
            <div>
                 <form onSubmit = {this.hanldeSubmit} >
                    <label>
                        <input 
                        type = 'text' 
                        name = 'word' 
                        placeholder = 'Search the category' 
                        value = { this.state.word}
                        onChange = {this.handleChange}
                        />
                    </label>
                    <button>Search</button>
            </form>
            </div>
           
        );
    }
}

export default Form;