import Search from '../../assets/icons/search.svg';
import Heart from '../../assets/icons/heart.svg';
import Recent from '../../assets/icons/recent.svg';
import Saved from '../../assets/icons/saved.svg';
import FullHeart from '../../assets/icons/fullheart.svg';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import './NavBar.scss';

// const saveWord = (e) => {
//   e.preventDefault();
//   axios.post('http://localhost:8080/mywords', {
//     word: e.target.
//     partOfSpeech: 
//     definition: 
//     synonym: 
//   }).then(res => {
//     console.log(res);
//     axios.get('http://localhost:8080/mywords')
//     .then(res => {
//       this.setState({
//         savedWords: res.data
//       });
//     })
//   })
// };

class NavBar extends Component {
  // state = {
  //   saved: false
  // }

  // toggleImage = (e) => {
  //   e.preventDefault();
  //   this.setState ({saved: true});
  // }

  // changeImage = () => this.state.saved? FullHeart : Heart;


  render() {
  return (
    <div className="nav-bar">
      {/* <NavLink to="/recent"><img className="nav-bar__logo" src={Recent} alt='search button'></img></NavLink> */}
      <NavLink to="/" exact><img className="nav-bar__logo" src={Search} alt='liked button'/></NavLink>
      <img className="nav-bar__logo" src={Heart} alt='liked button' onClick={this.toggleImage}/>
      <NavLink to='/mywords'><img className='nav-bar__logo' src={Saved}/></NavLink>
    </div>
  )
}};

export default NavBar;