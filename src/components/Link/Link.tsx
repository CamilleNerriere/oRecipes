import './Link.scss';
import { NavLink } from 'react-router-dom';

import { IRecipe } from '../../@types';

function Link({ slug, title }: IRecipe) {
  return (
    <NavLink
      to={`recipes/${slug}`}
      className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
    >
      {title}
    </NavLink>
  );
}

export default Link;
