import Search from '../../assets/icons/search.svg';
import Heart from '../../assets/icons/heart.svg';
import Recent from '../../assets/icons/recent.svg';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar () {
  return (
    <div className="nav-bar">
      <NavLink to="/recent"><img className="nav-bar__logo" src={Recent} alt='search button'></img></NavLink>
      <NavLink to="/search"><img className="nav-bar__logo" src={Search} alt='liked button'/></NavLink>
      <NavLink to="/mywords" ><img className="nav-bar__logo" src={Heart} alt='liked button'/></NavLink>
    </div>
  )
};

export default NavBar;