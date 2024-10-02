import './Link.scss';
import { NavLink } from 'react-router-dom';

import { IRecipe } from '../../@types';

function Link({ url, title }: IRecipe) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
    >
      {title}
    </NavLink>
  );
}

export default Link;
