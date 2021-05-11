import Search from '../../assets/icons/search.svg';
import Recent from '../../assets/icons/recent.svg';
import Saved from '../../assets/icons/saved.svg';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import './NavBar.scss';
import axios from 'axios';

class NavBar extends Component {

  render() {
  return (
    <div className="nav-bar">
      {/* <NavLink to="/recent"><img className="nav-bar__logo" src={Recent} alt='search button'></img></NavLink> */}
      <NavLink to="/" exact><img className="nav-bar__logo" src={Search} alt='liked button'/></NavLink>
      <NavLink to='/mywords' exact><img className='nav-bar__logo' src={Saved}/></NavLink>
    </div>
  )
}};

export default NavBar;

