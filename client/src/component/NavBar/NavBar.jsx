import Search from '../../assets/icons/search.svg';
import Heart from '../../assets/icons/heart.svg';
import Recent from '../../assets/icons/recent.svg';
import { NavLink } from 'react-router-dom';

function NavBar () {
  return (
    <div className="nav-bar">
      <NavLink className="nav-bar__link"><img className="nav-bar__recent" src={Recent} alt='search button'></img></NavLink>
      <NavLink className="nav-bar__link"><img classNAme="nav-bar__search" src={Search} alt='liked button'/></NavLink>
      <NavLink className="nav-bar__link"><img classNAme="nav-bar__heart" src={Heart} alt='liked button'/></NavLink>
    </div>
  )
};

export default NavBar;