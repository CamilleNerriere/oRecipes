import './Link.scss';
import { NavLink } from 'react-router-dom';

function Link() {
  return (
    <NavLink
      to="/recipe"
      className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
    >
      Cookies au beurre de cacahuette
    </NavLink>
  );
}

export default Link;
