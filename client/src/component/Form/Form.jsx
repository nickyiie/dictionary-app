import React, { Component } from 'react';
import './Form.scss';
import { NavLink } from 'react-router-dom';

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
      e.preventDefault();
      this.props.formData(this.state.word);
      this.setState({
          word:''
      })
  }
    render() {
        return (
            <div>
                <form className='form' onSubmit={this.hanldeSubmit} >
                    <label>
                        <input
                            className='form__search-bar'
                            type='text'
                            name='word'
                            placeholder='Search the category'
                            value={this.state.word}
                            onChange={this.handleChange}
                        />
                    </label>
                    <NavLink to={`/${this.state.word}`} className='form__button'>Search</NavLink>
                </form>
            </div>
        );
    }
}
export default Form;